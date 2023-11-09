import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { Icon } from '@iconify/react';
import resume from "../images/Neeraj_Dubey_Resume_11-09-2023-18-14-56.pdf"
const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
 
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
      id="contact-github"
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <Icon icon="icomoon-free:github" />
      </a>
      <a
      id="contact-linkedin"
        href="https://www.linkedin.com/in/neeraj-dubey-710839231/"
        aria-label="Check out my linkedIn profile."
        className="link-icons"
      >
        <Icon icon="mdi:linkedin" />
      </a>
      <a
      id="resume-link-2"
        href={resume}
        download={"Neeraj_Dubey_Resume"}
        aria-label="Check out my resume."
        className="link-icons"
      >
        <Icon icon="mdi:resume" />
      </a>
      
      {blog && (
        <a href={blog} aria-label="External link" className="link-icons">
          {Blog}
        </a>
      )}
    </StyledSocialLinks>
  );
}
