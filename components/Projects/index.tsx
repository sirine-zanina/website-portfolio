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
import { projectsData } from "@/shared/lib/data";

export default function Projects() {
  return (
    <section className="relative mb-16 mt-12 xl:mb-48 xl:ml-0">
      <div className="container mx-auto ">
        {/* text*/}
        <div className="max-w-[300px] mx-auto xl:mx-0 text-center xl:text-left mb-12 flex flex-col justify-center items-center xl:items-start ">
          <h2 className="mb-4">Latest Projects</h2>
          <p>Some of the project I've built.</p>
          <Link href="/projects">
            <Button buttonType={ButtonType.PRIMARY}>See all projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className=" xl:max-w-[700px] xl:max-h-[450px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[430px]"
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
            {projectsData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard {...project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <br />
    </section>
  );
}
