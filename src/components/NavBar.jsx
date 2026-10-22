import React from "react";
import { useAppContext } from "../appContext";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { resume } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";

// #region styled-components
const FixedNavSpacer = styled.div`
  height: var(--nav-height);
`;

function ThemeToggle() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`} title="Switch theme">
      <Icon icon={theme === "light" ? "solar:moon-linear" : "solar:sun-2-linear"} />
    </button>
  );
}
// #endregion

// #region component
export default function NavBar() {
  const { theme, isExpanded, closeExpanded, toggleExpanded } = useAppContext();
  const { pathname } = useLocation();
  const navLinks = {
    routes: [
      { id: "1R", name: "Home", route: "/" },
      { id: "2R", name: "All Projects", route: "/All-Projects" },
    ],
    to: [
      { id: "1T", name: "Home", to: "Home", test:"home"},
      { id: "2T", name: "About Me", to: "About", test:"about" },
      { id: "3T", name: "Skills", to: "Skills",test:"skills" },
      { id: "4T", name: "Projects", to: "Projects",test:"projects" },
      { id: "5T", name: "GitHub", to: "GitHub",test:"github" },
      {id: "6T", name: "Contact", to: "Contact",test:"contact"}
    ],
  };

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav-menu"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" aria-label="Neeraj Dubey home">
            ND<span className="brand-period">.</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {pathname === "/"
                ? navLinks.to.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <ScrollLink
                          to={el.to}
                          spy={true}
                          activeClass="active"
                          className={`nav-link ${el.test}`}
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </ScrollLink>
                       
                      </Nav.Item>
                    );
                  })
                  
                : navLinks.routes.map((el) => {
                    return (
                      <Nav.Item key={el.id}>
                        <Link
                          to={el.route}
                          className={
                            pathname === el.route
                              ? "nav-link active"
                              : "nav-link"
                          }
                          onClick={closeExpanded}
                        >
                          {el.name}
                        </Link>
                        
                      </Nav.Item>
                    );
                  })}
                <Nav.Link id="resume-button-1" href={resume} download="Neeraj_Dubey_Resume" className="resume-link">
                  Resume <Icon icon="solar:download-linear" />
                </Nav.Link>
            </Nav>
            <Nav>
              <ThemeToggle />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
// #endregion
