"use client";

import React from "react";
import { motion } from "framer-motion";
import SubmitBtn from "@/components/SubmitBtn";
import { Container } from "@/layouts/Container";
import { siteMetadata } from "@/data/siteMetadata";
import { sendEmail } from "@/actions/sendEmails";
import toast from "react-hot-toast";

export default function page() {
  return (
    <Container>
      <motion.section
        id="contact"
        className="mb-20 sm:mb-28 text-center"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <h1 className="block mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Contact{" "}
        </h1>

        <p className="text-gray-700 dark:text-white -mt-4 ">
          Please contact me directly at{" "}
          <a className="underline dark:text" href={siteMetadata.email}>
            sirinezanina@outlook.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none "
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
            name="message"
            placeholder="Your message"
          ></textarea>
          <SubmitBtn />
        </form>
      </motion.section>
    </Container>
  );
}
