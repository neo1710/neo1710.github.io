// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";
import resumeFile from "./images/Neeraj Dubey - Resume.pdf";

// Projects Images (add your images to the images directory and import below)
import image1 from "./images/charityHero.png";
import image3 from "./images/techbazaar.png";
import image2 from "./images/styleSpot.png";
import image4 from "./images/shopaholics.png";
/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "neo1710";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

export const professionalSummary =
  "Full Stack Software Engineer with 2+ years of experience building AI-powered web applications using Next.js, React, Node.js, NestJS, and TypeScript.";

export const moreInfo =
  "At FluidAI, I build production-ready AI interfaces, conversational features, and agentic workflows. My recent work connects modern web experiences to LLM services and Python-powered retrieval systems.";

/* Skills reflected in the latest résumé and recent projects. */
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="simple-icons:typescript" className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 2,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="simple-icons:nextdotjs" className="display-4" />,
    name: "Next.js",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:brain" className="display-4" />,
    name: "AI & RAG",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 7,
    skill: <Icon icon="devicon:tailwindcss" className="display-4" />,
    name: "Tailwind CSS",
  },
  {
    id: 8,
    skill: <Icon icon="simple-icons:chakraui" className="display-4" />,
    name: "Chakra UI",
  },
  {
    id: 9,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML",
  },
  {
    id: 10,
    skill: <Icon icon="mdi:language-css3" className="display-4" />,
    name: "CSS",
  },
  {
    id: 11,
    skill: <Icon icon="devicon:nestjs" className="display-4" />,
    name: "NestJS",
  },
  {
    id: 12,
    skill: <Icon icon="teenyicons:nodejs-solid" className="display-4" />,
    name: "Node.js",
  },
  {
    id: 13,
    skill: <Icon icon="devicon:express" className="display-4" />,
    name: "Express.js",
  },
  {
    id: 14,
    skill: <Icon icon="simple-icons:fastapi" className="display-4" />,
    name: "FastAPI",
  },
  {
    id: 15,
    skill: <Icon icon="mdi:api" className="display-4" />,
    name: "REST APIs",
  },
  {
    id: 16,
    skill: <Icon icon="skill-icons:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 17,
    skill: <Icon icon="simple-icons:mongoose" className="display-4" />,
    name: "Mongoose",
  },
  {
    id: 18,
    skill: <Icon icon="logos:postgresql" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 19,
    skill: <Icon icon="simple-icons:prisma" className="display-4" />,
    name: "Prisma",
  },
  {
    id: 20,
    skill: <Icon icon="simple-icons:langchain" className="display-4" />,
    name: "LangChain",
  },
  {
    id: 21,
    skill: <Icon icon="simple-icons:qdrant" className="display-4" />,
    name: "Qdrant",
  },
  {
    id: 22,
    skill: <Icon icon="mdi:magnify" className="display-4" />,
    name: "FAISS",
  },
  {
    id: 23,
    skill: <Icon icon="mdi:vector-combine" className="display-4" />,
    name: "Sentence Transformers",
  },
  {
    id: 24,
    skill: <Icon icon="mdi:vector-polyline" className="display-4" />,
    name: "Vector Search",
  },
  {
    id: 25,
    skill: <Icon icon="mdi:vector-arrange-below" className="display-4" />,
    name: "Embeddings",
  },
  {
    id: 26,
    skill: <Icon icon="mdi:robot-outline" className="display-4" />,
    name: "LLM Integrations",
  },
  {
    id: 27,
    skill: <Icon icon="mdi:chat-processing-outline" className="display-4" />,
    name: "Prompt Engineering",
  },
  {
    id: 28,
    skill: <Icon icon="simple-icons:redux" className="display-4" />,
    name: "Redux Toolkit",
  },
  {
    id: 29,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React Native",
  },
  {
    id: 30,
    skill: <Icon icon="mdi:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 31,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git & GitHub",
  },
  {
    id: 32,
    skill: <Icon icon="mdi:code-braces" className="display-4" />,
    name: "Data Structures & Algorithms",
  },
];

export const resume = resumeFile;

/* Number of recently updated repositories featured on the home page. */
export const featuredProjectCount = 3;

export const contactDetails = {
  email: "neeraj3dworld@gmail.com",
  phone: "9354404877",
  location: "Delhi, India",
};

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
