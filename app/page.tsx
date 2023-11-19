// components
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Container } from "@/layouts/Container";

export default function Home() {
  return (
    <Container>
      <Hero />
      
      <Projects />
    </Container>
  );
}
