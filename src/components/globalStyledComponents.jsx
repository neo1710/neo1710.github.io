import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll/modules";
// Icons
import { Icon } from "@iconify/react";

// Animations
export const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinner = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

// Loading Spinner
export const Loading = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 5px solid;
  border-radius: 50%;
  border-top-color: var(--accent-strong);
  margin: 1rem auto;
  animation: ${spinner} 0.6s linear infinite;
`;

// Titles
export const Title = styled.div`
  display: inline-block;
  margin: 0 0 2.5rem;
  text-align: left;

  .underline {
    height: 3px;
    width: 3.5rem;
    border-radius: 2px;
    background: var(--accent-strong);
    margin: 1rem 0 0;
  }
`;

// Back to top link
const StyledDiv = styled.div`
  position: fixed;
  bottom: calc(var(--min-footer-height) + 1.25rem);
  right: 1.25rem;
  z-index: 5;
  opacity: 0;
  pointer-events: none;
  transition: opacity 180ms ease;

  .link-icons {
    display: grid;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border: 1px solid ${({ theme }) => theme.name === "light" ? "#d4ded1" : "#526352"};
    border-radius: 50%;
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.name === "light" ? "#fff" : "#26362b"};
  }

  &.show-up {
    opacity: 1;
    pointer-events: auto;
  }
`;

export function BackToTop({ home }) {
  const [scrollY, setScrollY] = React.useState(0);
  const up = React.useRef(null);

  React.useEffect(
    function () {
      function updateScrollY() {
        setScrollY(window.pageYOffset);

      }

      window.addEventListener("scroll", updateScrollY);

      return () => window.removeEventListener("scroll", updateScrollY);
    },
    []
  );

  return (
    <StyledDiv ref={up} className={scrollY > 500 ? "show-up" : ""}>
      <Link to={home} className="link-icons">
        <Icon icon="fa6-solid:circle-chevron-up" />
      </Link>
    </StyledDiv>
  );
}
