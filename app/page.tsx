// components

import GithubRepos from "@/components/GithubRepos";
import Hero from "@/components/Hero";

import { Container } from "@/layouts/Container";

export default function Home() {
  return (
    <Container>
      <Hero />
      <hr className="hr"></hr>
    </Container>
  );
}
