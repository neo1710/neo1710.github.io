import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
import styled from "styled-components";
// Data
import { skillData, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const SkillsGrid = styled(Row)`
  max-width: 1080px;
  margin: 0 auto;

  .skills-card { padding: 0.7rem; }
  .skills-card-img {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    min-height: 82px;
    margin: 0;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.name === "light" ? "#d6dfd2" : "#3b4a3e"};
    border-radius: 4px;
    background: ${({ theme }) => theme.name === "light" ? "#f8faf6" : "#202d24"};
    transition: border-color 180ms ease, transform 180ms ease;
  }
  .skills-card-img:hover { transform: translateY(-3px); border-color: var(--accent-strong); }
  .skills-card-img > span { display: flex; align-items: center; color: ${({ theme }) => theme.name === "light" ? "#668344" : "#c2e68a"}; font-size: 1.7rem; }
  .skills-card-name { color: ${({ theme }) => theme.color}; font-size: 0.95rem; font-weight: 700; }
`;

export default function Skills() {
  const { theme } = useAppContext();

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container>
          <div className="section-heading">
            <span className="eyebrow">Tools I build with</span>
            <Title><h2>Skills</h2><div className="underline" /></Title>
          </div>
          <SkillsGrid className="align-items-center">
            {skillData.map((skills) => {
              return (
                <Col xs={6} md={4} lg={3} key={skills.id} className="skills-card">
                  <figure className="skills-card-img">
                    {skills.skill}
                    <figcaption className="skills-card-name">{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </SkillsGrid>
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
}
