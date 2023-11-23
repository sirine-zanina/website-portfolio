"use client";
import { siteMetadata } from "@/data/siteMetadata";
import Link from "next/link";
import { ButtonType } from "@/lib/types";

import { Button } from "@/components/Button";
import { FaPaperPlane } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";

import { Typewriter } from "./typewriter";
import Image from "next/legacy/image";

export default function Hero() {
  return (
    <div>
      <div>
        <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
          <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
            Hello! I&apos;m{" "}
            <span className="text-teal-500 dark:text-teal-400">Sirine</span>.{" "}
            I&apos;m a developer and a computer science student.
          </h1>

          <div className="order-1 md:order-2">
            <Image
              alt="Sirine Zanina"
              height={160}
              width={160}
              src={siteMetadata.avatarImage}
              placeholder="blur"
              blurDataURL={siteMetadata.avatarImage}
              className="col-span-1 rounded-full"
              layout="fixed"
            />
          </div>
        </div>
        <div className="space-y-6 text-center md:text-left md:space-y-0 md:space-x-4 ">
          <Link href="/contact">
            <Button buttonType={ButtonType.QUINARY}>
              Contact me&nbsp;
              <FaPaperPlane className="text-xs opacity-90 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
            </Button>
          </Link>
          <Link href="/about">
            <Button buttonType={ButtonType.SECONDARY}>More about me</Button>
          </Link>
      
        </div>
      </div>
      {/* <div className="flex justify-center mt-12 md:mt-24">
        <RiArrowDownSLine className="text-3xl animate-bounce" />
      </div> */}
    </div>
  );
}
