// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import image1 from "./images/charityHero.png";
import image3 from "./images/techbazaar.png";
import image2 from "./images/styleSpot.png";
import image4 from "./images/shopaholics.png";
// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "neo1710";

// Navbar Logo image
export const navLogo = "https://ih1.redbubble.net/image.2130082874.2309/st,small,507x507-pad,600x600,f8f8f8.jpg";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="simple-icons:typescript" className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 8,
    skill: <Icon icon="skill-icons:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 9,
    skill: <Icon icon="teenyicons:nodejs-solid" className="display-4" />,
    name: "nodeJs",
  }, {
    id: 10,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 11,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 12,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  }, {
    id: 13,
    skill: <Icon icon="devicon:express" className="display-4" />,
    name: "Express",
  },
  {
    id: 14,
    skill: <Icon icon="simple-icons:mongoose" className="display-4" />,
    name: "Mongoose",
  },
  {
    id: 15,
    skill: <Icon icon="devicon-plain:reactrouter-wordmark" className="display-4" />,
    name: "React-Router",
  }
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["CharityHero", "StyleSpot", "Techbazaar","Shopaholics"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "CharityHero",
    image: image1,
  },
  {
    name: "StyleSpot",
    image: image2,
  },
  {
    name: "Techbazaar",
    image: image3,
  },
  {
    name: "Shopaholics",
    image: image4
  }
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mgejppwz";
