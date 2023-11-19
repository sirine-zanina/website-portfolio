"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { TbTools } from "react-icons/tb";
import { ClosedCaptioning } from "@/shared/wrappers/phosphor-icons";

import { skillCategories } from "./skill-categories";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  SkillInfo,
} from "./accordion";

export default function Skills() {
  return (
    <div>
      <Accordion.Root
        className="z-0 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200/30 dark:border-neutral-950 dark:bg-neutral-950/30"
        type="single"
        collapsible
      >
        <AccordionItem value="Skill captions">
          <AccordionTrigger>
            <span className="flex items-center gap-3">
              <ClosedCaptioning />
              <span>Skill captions</span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex items-center gap-6">
                <SkillInfo
                  skill={{
                    title: "Skill",
                    color: "#fff",
                    status: "good",
                    icon: TbTools,
                  }}
                />
                <span className="text-lg">
                  Skills that I am good at and feel comfortable to work with.
                </span>
              </div>
              <div className="flex items-center gap-6">
                <SkillInfo
                  skill={{
                    title: "Skill",
                    color: "#fff",
                    status: "learning",
                    icon: TbTools,
                  }}
                />
                <span className="text-lg">Skills I am currently learning.</span>
              </div>
              <div className="flex items-center gap-6">
                <SkillInfo
                  skill={{
                    title: "Skill",
                    color: "#fff",
                    status: "learning",
                    icon: TbTools,
                  }}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        {skillCategories.map((category) => {
          const learningSkills = category.skillsList.filter(
            (skill) => skill.status === "learning"
          );
          const goodSkills = category.skillsList.filter(
            (skill) => skill.status === "good"
          );

          return (
            <AccordionItem key={category.title} value={category.title}>
              <AccordionTrigger>{category.title}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-3">
                  {[...learningSkills, ...goodSkills].map((skill) => (
                    <SkillInfo skill={skill} key={skill.title} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion.Root>
    </div>
  );
}
