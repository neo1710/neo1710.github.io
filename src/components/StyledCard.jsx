import React from "react";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import GH from "../images/GH.svg";
// Components
import { Card } from "react-bootstrap";

const StyledCardComponent = styled.div`
  height: 100%;

  .card {
    height: 100%;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.name === "light" ? "#d8ded5" : "#3d4841"};
    border-radius: 6px;
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.name === "light" ? "#fff" : "#222c25"};
    box-shadow: 0 12px 32px rgb(12 22 14 / 0.06);
    transition: transform 220ms ease, box-shadow 220ms ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 18px 38px rgb(12 22 14 / 0.13);
    }

    .card-link {
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 600;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--accent-strong);
      }
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      border-top: 1px solid ${({ theme }) => theme.name === "light" ? "#e4e9e2" : "#3d4841"};
      background: transparent;
    }

    .card-img-top { height: 13rem; object-fit: cover; background: #f1f4ee; }
    .card-body { padding: 1.25rem; }
    .card-title { font-weight: 700; }
    .card-text { color: ${({ theme }) => theme.name === "light" ? "#69746a" : "#b9c3ba"}; }
    .project-language { color: ${({ theme }) => theme.name === "light" ? "#38664a" : "#b8e27b"}; font-size: 0.8rem; font-weight: 700; }
  }
`;

export default function StyledCard({ image, name, description, url, demo, language }) {
  return (
    <StyledCardComponent>
      <Card className="project-card">
        <Card.Img
          variant="top"
          src={image ? image : GH}
          alt={name}
          className="mx-auto"
        />
        <Card.Body className="text-start">
          <Card.Title className="project-title">{name}</Card.Title>
          <Card.Text className="project-description mb-3">{description || "A recent project from my GitHub."}</Card.Text>
          {language && <Card.Text className="project-language mb-0">{language}</Card.Text>}
        </Card.Body>
        <Card.Footer>
          <Card.Link className="project-github-link" href={url} target="_blank" rel="noreferrer">
            GitHub <Icon icon="icomoon-free:github" />
          </Card.Link>
          {demo && <Card.Link className="project-deployed-link" href={demo} target="_blank" rel="noreferrer">
            Live demo <Icon icon="icon-park-outline:code-computer" />
          </Card.Link>}
        </Card.Footer>
      </Card>
    </StyledCardComponent>
  );
}
