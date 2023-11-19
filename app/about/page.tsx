"use client";
import CustomLink from "@/components/CustomLink";
import { siteMetadata } from "@/data/siteMetadata";
import { Container } from "@/layouts/Container";
import { educationData } from "@/shared/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { Button } from "@/components/Button";
import { ButtonType } from "@/shared/lib/types";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { skillsData } from "@/shared/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

export default function About() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Container>
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          A brief introduction.
        </span>
      </h1>

      <p>
        I’m Sirine, a full-stack developer based in Sousse. I'm passionate about
        building and shipping high-quality software that scales, with a focus on
        delivering a great user experience. I'm currently a 3rd year student at
        Higher Institute of Computer Science and Communication Technologies of
        Hammam Sousse. During my academic experience, I've been involved in many
        projects that taught me the fundamentals of front-end and back-end web
        development, as well as software design and architecture. I'm currently
        looking for and end-of-studies Internship starting from February 2022.
      </p>
      <div>
        <p>
          You can follow me on{" "}
          <CustomLink href={siteMetadata.github}>GitHub</CustomLink>. or on
          LinkedIn for more information about my professional experience.
          <CustomLink href={siteMetadata.linkedin}>LinkedIn</CustomLink>.
        </p>
        <div></div>
      </div>
      <div className="space-y-6 text-center md:text-left md:space-y-0 md:space-x-4">
        <a href={siteMetadata.resume} download>
          <Button buttonType={ButtonType.PRIMARY}>Download my CV.</Button>
        </a>
        <a href={siteMetadata.resume} download>
          <Button buttonType={ButtonType.SECONDARY}>
            Download my Motivation Letter.
          </Button>
        </a>
      </div>

      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Education</h2>
        <VerticalTimeline lineColor="#94a3b8">
          {educationData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background:
                      resolvedTheme === "dark"
                        ? "rgba(255, 255, 255, 0.05)"
                        : "#f3f4f6",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                    visibility: "visible",
                  }}
                  contentArrowStyle={{
                    borderRight:
                      resolvedTheme === "dark"
                        ? "0.4rem solid rgba(255, 255, 255, 0.5)"
                        : "0.4rem solid #9ca3af",
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    background:
                      resolvedTheme === "dark"
                        ? "rgba(255, 255, 255, 0.15)"
                        : "white",
                    fontSize: "1.5rem",
                    visibility: "visible",
                  }}
                >
                  <h3 className="font-semibold capitalize">{item.title}</h3>
                  <p className="font-normal !mt-0">{item.location}</p>
                  <p className="!mt-1 !font-normal text-gray-700  dark:text-white/75">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            );
          })}
        </VerticalTimeline>
        <hr className="hr"></hr>
      </div>
      <div className=" mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
        <h2 className="m-0 text-gray-900 dark:text-white">Skills =</h2>
        <ul className="flex flex-wrap justify-center gap-2 text-base text-gray-800">
          {skillsData.map((skill, index) => {
            return (
              <motion.li
                className="border border-black/10 sm:rounded-xl "
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}
