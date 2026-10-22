import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Link } from "react-scroll";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Container } from "react-bootstrap";
import SocialLinks from "./SocialLinks";

const StyledHero = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  min-height: calc(100svh - var(--nav-height));
  overflow: hidden;
  background: ${({ theme }) => theme.name === "light" ? "#f4f6f1" : "#17211b"};

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 0 52%;
    background: ${({ theme }) => theme.name === "light"
      ? "repeating-linear-gradient(135deg, transparent 0 24px, rgb(96 126 76 / 5%) 25px 26px)"
      : "repeating-linear-gradient(135deg, transparent 0 24px, rgb(191 224 138 / 5%) 25px 26px)"};
    pointer-events: none;
  }

  .hero-inner { position: relative; z-index: 1; padding-top: 5rem; padding-bottom: 5rem; }
  .hero-copy { max-width: 680px; }
  .hero-eyebrow { display: flex; align-items: center; gap: 0.65rem; color: ${({ theme }) => theme.name === "light" ? "#668344" : "#c2e68a"}; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
  .hero-eyebrow::before { content: ""; width: 1.65rem; height: 2px; background: var(--coral); }
  h1 { max-width: 700px; margin: 1.25rem 0; font-size: 4.5rem; font-weight: 700; }
  .hero-lede { max-width: 560px; margin: 1.5rem 0 2rem; color: ${({ theme }) => theme.name === "light" ? "#5d695f" : "#c0cbc0"}; font-size: 1.15rem; }
  .hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 0.85rem; }
  .hero-primary, .hero-secondary { display: inline-flex; align-items: center; gap: 0.6rem; padding: 0.85rem 1.1rem; border: 1px solid; border-radius: 4px; font-size: 0.92rem; font-weight: 700; text-decoration: none; transition: transform 180ms ease, background 180ms ease; }
  .hero-primary { border-color: #26382a; color: #f7faef; background: #26382a; }
  .hero-primary:hover { transform: translateY(-2px); color: #fff; background: #3b583d; }
  .hero-secondary { border-color: ${({ theme }) => theme.name === "light" ? "#cdd8c9" : "#455748"}; color: ${({ theme }) => theme.color}; }
  .hero-secondary:hover { transform: translateY(-2px); }
  .hero-links { margin-top: 1.75rem; }
  .hero-portrait { position: relative; max-width: 390px; margin: 0 auto; padding: 1rem 1rem 3rem; }
  .hero-portrait::before { content: ""; position: absolute; inset: 0 0 2.2rem 2.2rem; border: 1px solid ${({ theme }) => theme.name === "light" ? "#cbd8c6" : "#3b4a3e"}; }
  .hero-portrait img { position: relative; display: block; width: 100%; aspect-ratio: 4 / 5; object-fit: cover; background: #dce5d6; filter: saturate(0.82); }
  .portrait-note { position: absolute; right: 0; bottom: 0; width: 82%; padding: 1rem 1.1rem; color: #f8f9f4; background: #324737; }
  .portrait-note span { display: block; margin-bottom: 0.25rem; color: #c2e68a; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
  .portrait-note strong { font-size: 0.94rem; }

  @media (max-width: 767px) {
    &::before { inset: 0; opacity: 0.5; }
    .hero-inner { padding-top: 3.5rem; padding-bottom: 4rem; }
    h1 { font-size: 3.15rem; }
    .hero-lede { font-size: 1.02rem; }
    .hero-portrait { width: 75%; min-width: 230px; margin-top: 3rem; }
  }
`;

export default function Hero() {
  const { name, avatar_url, html_url } = useSelector(selectData);

  return (
    <StyledHero id="home">
      <Container className="hero-inner">
        <div className="row align-items-center g-5">
          <div className="col-md-7">
            <div className="hero-copy">
              <div className="hero-eyebrow">Full Stack Software Engineer · Delhi, India</div>
              <h1 id="user-detail-name">{name || "Neeraj Dubey"}</h1>
              <p className="hero-lede">2+ years building AI-powered web products with Next.js, React, TypeScript, and modern backend systems.</p>
              <div className="hero-actions">
                <Link to="Projects" smooth duration={600} offset={-72} className="hero-primary">Explore my work <Icon icon="solar:arrow-right-linear" /></Link>
                {html_url && <a className="hero-secondary" href={html_url} target="_blank" rel="noreferrer">GitHub <Icon icon="mdi:github" /></a>}
              </div>
              <div className="hero-links"><SocialLinks /></div>
            </div>
          </div>
          <div className="col-md-5">
            {avatar_url && <div className="hero-portrait">
              <img src={avatar_url} alt={`${name || "Neeraj Dubey"} profile`} fetchPriority="high" />
              <div className="portrait-note"><span>Current focus</span><strong>Agentic AI · RAG · LLM products</strong></div>
            </div>}
          </div>
        </div>
      </Container>
    </StyledHero>
  );
}
