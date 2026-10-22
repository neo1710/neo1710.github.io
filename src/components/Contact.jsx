import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { contactDetails } from "../data";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";

const StyledSection = styled.section`
  .contact-layout { display: grid; grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr); gap: 4rem; }
  .contact-details { display: grid; align-content: start; gap: 1.35rem; }
  .contact-item { display: flex; align-items: flex-start; gap: 0.8rem; color: ${({ theme }) => theme.name === "light" ? "#536156" : "#c1cbc0"}; text-decoration: none; }
  .contact-item svg { flex: 0 0 auto; margin-top: 0.2rem; color: ${({ theme }) => theme.name === "light" ? "#668344" : "#c2e68a"}; font-size: 1.25rem; }
  .contact-item strong { display: block; margin-bottom: 0.1rem; color: ${({ theme }) => theme.color}; font-size: 0.9rem; }
  .contact-item:hover { color: ${({ theme }) => theme.color}; }

  @media (max-width: 767px) {
    .contact-layout { grid-template-columns: 1fr; gap: 2rem; }
  }
`;

export default function Contact() {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>Contact Me</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container className="contact-layout">
          <div className="contact-details">
            <a className="contact-item" href={`mailto:${contactDetails.email}`}>
              <Icon icon="solar:letter-linear" />
              <span><strong>Email</strong>{contactDetails.email}</span>
            </a>
            <a className="contact-item" href={`tel:${contactDetails.phone}`}>
              <Icon icon="solar:phone-linear" />
              <span><strong>Phone</strong>{contactDetails.phone}</span>
            </a>
            <div className="contact-item">
              <Icon icon="solar:map-point-linear" />
              <span><strong>Based in</strong>{contactDetails.location}</span>
            </div>
            <a className="contact-item" href="https://www.linkedin.com/in/neeraj-dubey-710839231/" target="_blank" rel="noreferrer">
              <Icon icon="mdi:linkedin" />
              <span><strong>LinkedIn</strong>neeraj-dubey-710839231</span>
            </a>
          </div>
          <ContactForm />
        </Container>
      </StyledSection>
    </Element>
  );
}
