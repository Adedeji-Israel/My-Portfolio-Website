import { Hero } from "../components/hero/Hero";
import {
  About,
  AiWorkflow,
  Contact,
  Journey,
  Process,
  Skills,
  Work,
} from "../components/sections/Sections";
import { useSeo } from "../hooks/useSeo";
export default function Home() {
  useSeo(
    "Israel Adedayo — AI-Powered Web Developer",
    "AI-powered web developer building modern full-stack web applications with React, TypeScript and Node.js.",
  );
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Skills />
      <Journey />
      <Process />
      <AiWorkflow />
      <Contact />
    </>
  );
}
