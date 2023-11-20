import React from "react";

import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import worldanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "E-Learning",
    description:
      "This application is a learning management system (LMS) with functions such as user authentication, course management, content delivery, communication with users and statistics",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      " Express.js",
      "MongoDB",
      "Redis ",
      " Socket.io.",
    ],
    imageUrl: worldanalyticsImg,
    githubUrl: "https://github.com/sirine-zanina/techNotes",
  },
  {
    title: "Admin Dashboard",
    description:
      "Design and development of an administrative dashboard that allows users to visualize customer and product data",
    tags: ["React", "Material UI", "MongoDB", "Node JS", "Express JS"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/sirine-zanina/techNotes",
  },
  {
    title: "TechNotes",
    description:
      "TechNotes is a full-stack MERN application that uses access control and permissions based on the user's role, as well as JWT authorization.",
    tags: ["React", "Node JS", "Express JS", "MongoDB"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/sirine-zanina/techNotes",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Angular",
  "TailwindCSS",
  "Framer Motion",
  "Material UI",

  "Python",
  "Java",
  "Spring Boot",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Prisma",
] as const;

export const educationData = [
  {
    title: "Bachelor in Computer Science",
    location:
      "Higher Institute of Informatics and Communication Technologies, Sousse",

    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Baccalaureate in Mathematics",
    location: "Ibnu Sina High School, Msaken Sousse",

    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;
