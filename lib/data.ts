import React from "react";

import { LuGraduationCap } from "react-icons/lu";
import dashboardAdminImg from "@/public/dashboard_admin.png";
import technotesImg from "@/public/technotes.png";
import saasPlatformImg from "@/public/saas_platform.png";
import gestionStockImg from "@/public/gestion_de_stock.png";

export const projectsData = [
  {
    title: "Gestion de stock",
    description:
      "Design and development of an administrative dashboard that allows users to visualize customer and product data",
    tags: ["REST API", "Spring Boot", "Angular"],
    imageUrl: gestionStockImg,
    githubUrl: "https://github.com/sirine-zanina/gestion-de-stock",
  },
  // {
  //   title: "SaaS Platform",
  //   description:
  //     "This application is a software-as-a-service (SaaS) platform that allows users to authenticate themselves in order to chat with their pdfs and enjoy more benefits as premium users.",
  //   tags: ["React", "TailwindCSS", "Next.js", "NextAuth.js", "Prisma", "tRPC "],
  //   imageUrl: saasPlatformImg,
  //   githubUrl: "https://github.com/sirine-zanina/kairi",
  // },
  {
    title: "Admin Dashboard",
    description:
      "Design and development of an administrative dashboard that allows users to visualize customer and product data",
    tags: ["React", "Material UI", "MongoDB", "Node JS", "Express JS"],
    imageUrl: dashboardAdminImg,
    githubUrl: "https://github.com/sirine-zanina/Dashboard-admin",
  },
  {
    title: "TechNotes",
    description:
      "TechNotes is a full-stack MERN application that uses access control and permissions based on the user's role, as well as JWT authorization.",
    tags: ["React", "Node JS", "Express JS", "MongoDB", "REST API"],
    imageUrl: technotesImg,
    githubUrl: "https://github.com/sirine-zanina/techNotes",
  },
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
