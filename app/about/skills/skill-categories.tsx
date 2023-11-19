import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiAngular,
  SiSpringboot,
  SiPhp,
  SiSymfony,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiLinux,
  SiPython,
  SiRust,
  SiCplusplus,
  SiGraphql,
  SiDocker,
  SiHeroku,
  SiVercel,
  SiGithub,
  SiGnubash,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export interface Skills {
  icon: IconType;
  title: string;
  color: string;
  status: "good" | "learning";
}

export const skillCategories: {
  title: string;
  skillsList: Skills[];
}[] = [
  {
    title: "Programming languages",
    skillsList: [
      {
        title: "Javascript",
        status: "good",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        title: "Typescript",
        status: "good",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        title: "Python",
        status: "good",
        icon: SiPython,
        color: "#3776AB",
      },
      {
        title: "Rust",
        status: "learning",
        icon: SiRust,
        color: "#F74C00",
      },

      {
        title: "Bash Script",
        status: "good",
        icon: SiGnubash,
        color: "#4EAA25",
      },
      {
        title: "PHP",
        icon: SiPhp,
        color: "#777BB4",
        status: "good",
      },
      {
        title: "Java",
        icon: FaJava,
        color: "#f89820",
        status: "good",
      },
      {
        title: "C++",
        icon: SiCplusplus,
        color: "#00599C",
        status: "learning",
      },
    ],
  },
  {
    title: "Front-end development",
    skillsList: [
      {
        title: "HTML5",
        status: "good",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        title: "CSS3",
        status: "good",
        icon: SiCss3,
        color: "#1572B6",
      },
      {
        title: "React.js",
        status: "good",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        status: "good",
        icon: SiNextdotjs,
        color: "#FFFFFF",
      },
      {
        title: "Vue.js",
        status: "learning",
        icon: SiVuedotjs,
        color: "#4FC08D",
      },

      {
        title: "Tailwind CSS",
        status: "good",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        title: "Angular",
        status: "learning",
        icon: SiAngular,
        color: "#DD0031",
      },
    ],
  },
  {
    title: "Back-end development",
    skillsList: [
      {
        title: "Node.js",
        status: "good",
        icon: SiNodedotjs,
        color: "#339933",
      },

      {
        title: "Spring Boot",
        status: "learning",
        icon: SiSpringboot,
        color: "#6DB33F",
      },
      {
        title: "Symfony",
        status: "learning",
        icon: SiSymfony,
        color: "#000000",
      },

      {
        title: "Prisma",
        status: "learning",
        icon: SiPrisma,
        color: "#2D3748",
      },
      {
        title: "Express",
        status: "good",
        icon: SiExpress,
        color: "#FFFFFF",
      },

      {
        title: "GraphQL",
        icon: SiGraphql,
        color: "#E10098",
        status: "learning",
      },
    ],
  },

  {
    title: "Infrastructure and DevOps",
    skillsList: [
      {
        title: "Heroku",
        status: "learning",
        icon: SiHeroku,
        color: "#430098",
      },
      {
        title: "Docker",
        status: "learning",
        icon: SiDocker,
        color: "#2496ED",
      },
      {
        title: "Linux",
        status: "good",
        icon: SiLinux,
        color: "#FCC624",
      },

      {
        title: "Github",
        status: "good",
        icon: SiGithub,
        color: "#181717",
      },
      {
        title: "Vercel",
        status: "learning",
        icon: SiVercel,
        color: "#000000",
      },
    ],
  },

  {
    title: "Design",
    skillsList: [
      {
        title: "Figma",
        status: "good",
        icon: SiFigma,
        color: "#F24E1E",
      },
      {
        title: "Photoshop",
        status: "good",
        icon: SiAdobephotoshop,
        color: "#31A8FF",
      },
    ],
  },
];
