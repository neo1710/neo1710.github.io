import { Element } from "react-scroll";
import { Title } from "./globalStyledComponents";
import GitHubCalendar from "react-github-calendar";
import styled from "styled-components";
import { Container } from "react-bootstrap";


export const Github = () => {

    return (
        <Element name="GitHub" id="github">
          <DIV className="section">
            <Container>
              <span className="eyebrow">Open source, in progress</span>
              <Title><h2>On GitHub</h2><div className="underline" /></Title>
              <div className="calendar-wrap"><GitHubCalendar username="neo1710" /></div>
              <div className="github-stats">
                <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=neo1710&show_icons=true&hide_title=true&bg_color=00000000" alt="GitHub contribution statistics" loading="lazy" />
                <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=neo1710&layout=compact&bg_color=00000000" alt="Most used programming languages on GitHub" loading="lazy" />
              </div>
            </Container>
          </DIV>
        </Element>
    );
};


const DIV = styled.section`
  .github-stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }

  .calendar-wrap { width: 100%; overflow-x: auto; padding: 1rem 0; }
  img { display: block; width: 100%; max-width: 540px; margin: 0 auto; }

  @media (max-width: 700px) {
    .github-stats { grid-template-columns: 1fr; }
  }
`;