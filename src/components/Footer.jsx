import styled from "styled-components";
// Components
import SocialLinks from "./SocialLinks";

const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  border-top: 1px solid ${({ theme }) => theme.name === "light" ? "#dce3d9" : "#314037"};
  background: ${({ theme }) => theme.name === "light" ? "#eaf0e7" : "#1d2b22"};

  a {
    color: ${({ theme }) => theme.color};

    &:hover {
      color: ${({ theme }) => theme.name === "light" ? "#587b31" : "#c2e68a"};
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
      <SocialLinks />
    </StyledFooter>
  );
}
