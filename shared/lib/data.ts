import React from "react";

import { LuGraduationCap } from "react-icons/lu";

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
    description:
      "I am currently pursuing a Bachelor's degree in Computer Science at the Higher Institute of Informatics and Communication Technologies in Sousse. I am in my third year of study.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Baccalaureate in Mathematics",
    location: "Ibnu Sina High School, Msaken Sousse",
    description:
      "I obtained my baccalaureate in Mathematics with a good mention.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;
