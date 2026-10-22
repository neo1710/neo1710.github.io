import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --accent: #b4d86e;
  --accent-strong: #779a3d;
  --coral: #e77d5f;
  --nav-height: 72px;
  --min-footer-height: 88px;
  --content-width: 1180px;
  --transition: 220ms ease;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; scroll-padding-top: calc(var(--nav-height) + 1rem); }

body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  font-family: "DM Sans", sans-serif;
  line-height: 1.65;
  transition: background-color 220ms ease, color 220ms ease;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, .navbar-brand {
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: 0;
  line-height: 1.1;
}

h2 { font-size: clamp(2rem, 4vw, 3.25rem); font-weight: 700; }

::selection { color: #17211b; background: var(--accent); }

a { color: inherit; }

a:hover { cursor: pointer; }

.container { max-width: var(--content-width); }

.navbar {
  min-height: var(--nav-height);
  border-bottom: 1px solid ${({ theme }) => theme.name === "light" ? "#dce3d9" : "#314037"};
  background: ${({ theme }) => theme.name === "light" ? "rgb(244 246 241 / 92%)" : "rgb(23 33 27 / 94%)"};
  backdrop-filter: blur(16px);
}

.navbar .nav-link {
  color: ${({ theme }) => theme.name === "light" ? "#526056" : "#c6d0c5"};
  font-size: 0.9rem;
  font-weight: 600;
  transition: color var(--transition);
}

.navbar .nav-link:hover, .navbar .nav-link.active { color: ${({ theme }) => theme.name === "light" ? "#587b31" : "#c2e68a"}; }
.navbar-brand { color: ${({ theme }) => theme.color} !important; font-size: 1.3rem; font-weight: 700; }
.brand-period { color: var(--coral); }
.resume-link { display: inline-flex; align-items: center; gap: 0.45rem; }
.theme-toggle { display: grid; place-items: center; width: 2.45rem; height: 2.45rem; border: 1px solid ${({ theme }) => theme.name === "light" ? "#d1dbce" : "#465548"}; border-radius: 50%; color: ${({ theme }) => theme.color}; background: transparent; font-size: 1.15rem; transition: background-color var(--transition), transform var(--transition); }
.theme-toggle:hover { transform: rotate(-8deg); background: ${({ theme }) => theme.name === "light" ? "#e7efdf" : "#29392e"}; }
.theme-toggle:focus-visible { outline: 2px solid var(--accent-strong); outline-offset: 3px; }

.section {
  min-height: auto;
  display: block;
  padding: 7.5rem 0;
}

.section:nth-of-type(even) {
  background: ${({ theme }) => theme.name === "light" ? "#eaf0e7" : "#1d2b22"};
}

.section-heading { margin-bottom: 2.75rem; }

.eyebrow {
  display: block;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.name === "light" ? "#6e8a46" : "#c2e68a"};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.link-icons { line-height: 0; font-size: 1.45rem; transition: color var(--transition); color: ${({ theme }) => theme.color}; }
.link-icons:hover { color: var(--accent-strong); }

.btn { border-radius: 4px; font-weight: 700; transition: transform var(--transition), background-color var(--transition); }
.btn:hover { transform: translateY(-2px); }

.form-control, .input-group-text { border-color: ${({ theme }) => theme.name === "light" ? "#d2dbd0" : "#3d4b40"}; border-radius: 4px; }
.form-control { padding: 0.8rem 0.95rem; background: ${({ theme }) => theme.name === "light" ? "#fff" : "#202d24"}; color: ${({ theme }) => theme.color}; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}

@media screen and (min-width: 800px) {
  .form-group { max-width: 750px; }
  }
`;

export default GlobalStyles;
