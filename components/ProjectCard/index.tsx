"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { Github, Link2Icon } from "lucide-react";
import { projectsData } from "@/shared/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
}: ProjectProps) {
  return (
    <Card className="group overflow-hidden relative dark:bg-slate-800">
      <CardHeader className="p-0 ">
        {/* image */}
        <div className="relative w-full h-[150px] flex items-center justify-center mb-0 mt-10">
          <Image
            className="absolute pb-0 shadow-md"
            src={imageUrl}
            width={220}
            height={80}
            alt=""
            priority
          />
          {/* btn links */}
          <Link
            href={githubUrl}
            className="bg-slate-800	
              w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
          >
            <Github className="text-white" />
          </Link>
        </div>
      </CardHeader>
      <div className="h-[160px] px-8 py-1 ">
        <h4 className="h4 mb-1">{title}</h4>
        <ul className="list-none flex flex-wrap mt-1 gap-1 sm:mt-auto pl-0">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-normal text-white rounded-full dark:bg-white/[0.8] dark:text-black"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
