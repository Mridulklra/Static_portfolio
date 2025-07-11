 // Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import softwareGiantLogo from './assets/company_logo/webverse_logo.png';
import aeonionLogo from './assets/company_logo/agc_logo.png';
import ecellRgpvLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
  {
    id: 0,
    img: softwareGiantLogo, // Replace with the actual logo import
    role: "Fullstack Developer (Freelance)",
    company: "Software Giant",
    date: "August 2024 - December 2024",
    desc: "Engineered and maintained production-ready MERN stack applications serving 10,000+ active users with 99.9% uptime. Implemented CI/CD pipelines using Turborepo and GitHub Actions, optimized frontend performance by 30%, and built scalable backend architecture using Express.js and Redux Toolkit.",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "GitHub Actions",
      "Turborepo",
    ],
  },
  {
    id: 1,
    img: aeonionLogo, // Replace with actual logo import
    role: "Frontend Developer Intern",
    company: "Aeonion Devs",
    date: "May 2024 - July 2024",
    desc: "Delivered 5+ major features using Next.js and Tailwind CSS, reducing page load time by 35%. Improved SEO by 18% through optimized landing pages and automated release processes with rollback capability using GitHub Actions and Turborepo.",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Vite",
      "GitHub Actions",
      "Turborepo",
    ],
  },
  {
  id: 2,
  img: ecellRgpvLogo, // Replace with actual E-Cell RGPV logo variable
  role: "Technical Team Member",
  company: "E-Cell, RGPV",
  date: "January 2024 - Present",
  desc: "Contributing to the development of internal tools and web platforms aimed at promoting innovation and entrepreneurship within the RGPV ecosystem. Collaborating with fellow developers to organize tech events, build digital solutions, and enhance the technical infrastructure of E-Cell.",
  skills: [
    "React",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Team Collaboration",
    "Event Management",
  ],
},

];

  export const education = [
  {
    id: 0,
    img: vpsLogo, // Replace with actual UIT RGPV logo
    school: "University Institute of Technology, RGPV, Bhopal",
    date: "Aug 2022 - June 2026 (Expected)",
   
    desc: "Currently pursuing B.Tech in Information Technology. Gained hands-on experience in full-stack development, participated in competitive programming, and contributed to technical clubs and projects such as Second Brain and FlashPay.",
    degree: "Bachelor of Technology - B.Tech (Information Technology)",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "Mps School Mehidpur, Ujjain",
    date: "Apr 2020 - Mar 2021",
    grade: "93%",
    desc: "Completed Class 12 (CBSE) with PCM and Computer Science, achieving strong academic results and actively engaging in technical activities.",
    degree: "CBSE (XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "St.joseph's Convent School, Ujjain",
    date: "Apr 2018 - Mar 2019",
    grade: "92.8%",
    desc: "Completed Class 10 (CBSE) with Science and Computer. Achieved excellent academic performance and foundational understanding in computers and mathematics.",
    degree: "CBSE (X) - Science with Computer Application",
  },
];

 export const projects = [
  {
    id: 0,
    title: "Second Brain",
    description:
      "A full-stack AI-powered knowledge management platform that allows users to aggregate, organize, and share content from GitHub, YouTube, PDFs, and tweets. Features include JWT authentication, public link sharing, and optimized MongoDB querying for scalable performance.",
    image: npmLogo,
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "CI/CD",
    ],
    github: "https://github.com/Mridulkira/second-brain",
    webapp: "https://secondbrain.vercel.app/",
  },
  {
    id: 1,
    title: "FlashPay",
    description:
      "A fintech payment application built with Next.js, Clerk, and Appwrite. Integrated Plaid for account verification and Dwolla for ACH transactions. Includes real-time monitoring using Sentry and secure production deployment via Vercel.",
    image: githubdetLogo,
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Plaid API",
      "Dwolla",
      "Clerk",
      "Appwrite",
      "Sentry",
    ],
    github: "https://github.com/Mridulkira/flashpay",
    webapp: "https://flashpay.vercel.app/",
  },
  {
    id: 2,
    title: "Excali Sketch",
    description:
      "A real-time collaborative whiteboard built using Canvas API and WebSockets. Supports multi-user collaboration with <200ms latency, room-based sessions, and a scalable Express backend deployed with Turborepo and Render.",
    image: csprepLogo,
    tags: [
      "React",
      "WebSockets",
      "Canvas API",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Turborepo",
      "Render",
    ],
    github: "https://github.com/Mridulkira/excali-sketch",
    webapp: "https://excalisketch.vercel.app/",
  },
  
  
  
 
  
  {
    id: 3,
    title: "Random Color Generator",
    description:
      "An interactive web tool that generates random colors with both code and visual display. Simple yet fun for experimentation.",
    image: webverLogo,
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Mridulklra/Random_color_generator",
    webapp: "",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A weather application that displays real-time data like temperature, forecasts, and humidity using an open weather API.",
    image: cmLogo,
    tags: ["JavaScript", "API", "Weather"],
    github: "https://github.com/Mridulklra/weather_app",
    webapp: "",
  },
  {
    id: 5,
    title: "Todo App",
    description:
      "A to-do list app allowing users to create, edit, delete, and mark tasks as done or undone. Built with Bootstrap for quick styling.",
    image: imagesearchLogo,
    tags: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    github: "https://github.com/Mridulklra/TodoApp",
    webapp: "",
  },
  {
    id: 6,
    title: "Dino Game",
    description:
      "A classic Dino game built with vanilla JavaScript. Features obstacle spawning, score tracking, and responsive controls.",
    image: removebgLogo,
    tags: ["JavaScript", "HTML", "CSS", "Game Development"],
    github: "https://github.com/Mridulklra/Dino-game",
    webapp: "",
  },
];
