import React from "react";

import { LuGraduationCap } from "react-icons/lu";
import dashboardAdminImg from "@/public/dashboard_admin.png";
import technotesImg from "@/public/technotes.png";
import saasPlatformImg from "@/public/saas_platform.png";

export const projectsData = [
  {
    title: "SaaS Platform",
    description:
      "This application is a software-as-a-service (SaaS) platform that allows users to authenticate themselves in order to chat with their pdfs and enjoy more benefits as premium users.",
    tags: ["React", "TailwindCSS", "Next.js", "NextAuth.js", "Prisma", "tRPC "],
    imageUrl: saasPlatformImg,
    githubUrl: "https://github.com/sirinezanina/kairi",
  },
  {
    title: "Admin Dashboard",
    description:
      "Design and development of an administrative dashboard that allows users to visualize customer and product data",
    tags: ["React", "Material UI", "MongoDB", "Node JS", "Express JS"],
    imageUrl: dashboardAdminImg,
    githubUrl: "https://github.com/sirinezanina/Dashboard-admin",
  },
  {
    title: "TechNotes",
    description:
      "TechNotes is a full-stack MERN application that uses access control and permissions based on the user's role, as well as JWT authorization.",
    tags: ["React", "Node JS", "Express JS", "MongoDB"],
    imageUrl: technotesImg,
    githubUrl: "https://github.com/sirinezanina/techNotes",
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
