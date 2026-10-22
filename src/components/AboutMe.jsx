import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo, professionalSummary } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledAboutMe = styled.section`
  .about-copy {
    max-width: 680px;
    color: ${({ theme }) => theme.name === "light" ? "#536156" : "#c1cbc0"};
    font-size: 1.15rem;
  }

  .about-image {
    width: min(100%, 350px);
    aspect-ratio: 4 / 5;
    object-fit: cover;
    filter: saturate(0.78);
  }

  .about-stat {
    border-top: 1px solid ${({ theme }) => theme.name === "light" ? "#cdd8c9" : "#3b4a3e"};
    padding-top: 1rem;
    color: ${({ theme }) => theme.name === "light" ? "#536156" : "#c1cbc0"};
    font-size: 0.92rem;
  }

  .about-stat strong { display: block; margin-bottom: 0.3rem; color: ${({ theme }) => theme.color}; font-family: "Space Grotesk", sans-serif; font-size: 1rem; }

  @media (max-width: 767px) {
    .about-copy { font-size: 1.03rem; }
  }
`;

export default function AboutMe() {
  const { avatar_url, name } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <div className="section-heading">
            <span className="eyebrow">A little context</span>
            <Title><h2>About me</h2><div className="underline" /></Title>
          </div>
          <Row className="align-items-center g-5">
            <Col md={7}>
              <div className="about-copy">
                <p id="user-detail-intro">{professionalSummary} I’m {name || "Neeraj Dubey"}, currently working at FluidAI.</p>
                {moreInfo && <p>{moreInfo}</p>}
                <Row className="g-4 mt-4">
                  <Col sm={6}><div className="about-stat"><strong>FluidAI · Jul 2024 — Present</strong>Full Stack Web Developer building production AI experiences.</div></Col>
                  <Col sm={6}><div className="about-stat"><strong>Masai School · 2022 — 2024</strong>Full Stack Web Development. Also holds a BA in Psychology from IGNOU.</div></Col>
                </Row>
              </div>
            </Col>
            <Col md={5} className="d-none d-md-block text-end">
              <img
                src={avatar_url}
                alt={`${name || "Neeraj Dubey"} portrait`}
                loading="lazy"
                className="about-image"
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
