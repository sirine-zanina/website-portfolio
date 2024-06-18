import { IconType } from "react-icons";
import {
  SiAdobephotoshop,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPhp,
  SiAngular,
  SiSpringboot,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export interface Skill {
  icon: IconType;
  title: string;
  color: string;
}

export const skillCategories: {
  title: string;
  skillList: Skill[];
}[] = [
  {
    title: "Programming languages",
    skillList: [
      {
        title: "Java",
        icon: FaJava,
        color: "#f89820",
      },
      // {
      //   title: "C++",
      //   icon: SiCplusplus,
      //   color: "#00599C",
      // },
      {
        title: "Python",
        icon: SiPython,
        color: "#3776AB",
      },
      {
        title: "Javascript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        title: "Typescript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      // {
      //   title: "Bash",
      //   icon: SiGnubash,
      //   color: "#4EAA25",
      // },
      {
        title: "PHP",
        icon: SiPhp,
        color: "#777BB4",
      },
    ],
  },
  {
    title: "Front-end development",
    skillList: [
      {
        title: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        title: "CSS3",
        icon: SiCss3,
        color: "#1572B6",
      },
      {
        title: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        title: "React.js",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        icon: SiNextdotjs,
        color: "#FFFFFF",
      },
      // {
      //   title: "Vue.js",
      //   icon: SiVuedotjs,
      //   color: "#4FC08D",
      // },
      {
        title: "Angular",
        icon: SiAngular,
        color: "#0769AD",
      },
    ],
  },
  {
    title: "Back-end development",
    skillList: [
      {
        title: "Node.js",

        icon: SiNodedotjs,
        color: "#339933",
      },
      {
        title: "Express.js",
        icon: SiExpress,
        color: "#FFFFFF",
      },
      {
        title: "Spring Boot",
        icon: SiSpringboot,
        color: "#6DB33F",
      },
      {
        title: "Prisma",
        icon: SiPrisma,
        color: "#2D3748",
      },
      {
        title: "MySql",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        title: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },
      {
        title: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
      // {
      //   title: "GraphQL",
      //   icon: SiGraphql,
      //   color: "#E10098",
      // },
    ],
  },

  {
    title: "Infrastructure and DevOps",
    skillList: [
      {
        title: "Docker",
        icon: SiDocker,
        color: "#2496ED",
      },
      {
        title: "Linux",
        icon: SiLinux,
        color: "#FCC624",
      },

      {
        title: "Github",
        icon: SiGithub,
        color: "#181717",
      },
      {
        title: "Vercel",
        icon: SiVercel,
        color: "#000000",
      },
    ],
  },

  {
    title: "Design",
    skillList: [
      {
        title: "Figma",

        icon: SiFigma,
        color: "#F24E1E",
      },
      {
        title: "Photoshop",
        icon: SiAdobephotoshop,
        color: "#31A8FF",
      },
    ],
  },
];
