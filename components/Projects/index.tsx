"use client";
import Link from "next/link";
import { ButtonType } from "@/shared/lib/types";
import { Button } from "@/components/Button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

export interface Project {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
}
type projectDataType = Project[];

const projectData: projectDataType = [
  {
    image: "/public/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://nexa.netlify.app/",
    github: "https://github.com",
  },
  {
    image: "/public/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://nexa.netlify.app/",
    github: "https://github.com",
  },
  {
    image: "/public/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://nexa.netlify.app/",
    github: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text*/}
        <div className="bg-pink-100 max-w-[300px] mx-auto xl:mx-0 text-center xl:text-left mb-12 flex flex-col justify-center items-center xl:items-start">
          <h2 className="mb-4">Latest Projects</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odit
            dolore consequatur a qui provident ipsa corrupti omnis repudiandae,
            quis velit cum reprehenderit excepturi{" "}
          </p>
          <Link href="/projects">
            <Button buttonType={ButtonType.PRIMARY}>See all projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[800px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px] bg-pink-100 "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
