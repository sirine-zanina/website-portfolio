import React from "react";
import Project from "@/components/ProjectCard";
import { Container } from "@/layouts/Container";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <Container>
      <div>
        <h1>
          <span className=" block text-base font-semibold tracking-wide text-center uppercase text-indigo-500 dark:text-teal-400">
            Projects
          </span>
          <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
            A selection of my works.
          </span>
        </h1>
      </div>
      <br />
      <br />

      <div className="flex justify-center items-center">
        <section className="scroll-mt-28 mb-28" id="projects">
          <div>
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
