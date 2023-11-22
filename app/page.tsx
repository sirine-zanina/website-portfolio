// components

import Hero from "@/components/Hero";

import { Container } from "@/layouts/Container";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <Container>
      <Hero />
      <hr className="hr"></hr>
      <Toaster position="top-right" />
    </Container>
  );
}
