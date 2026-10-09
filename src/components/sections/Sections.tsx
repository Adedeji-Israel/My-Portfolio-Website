import { useState } from "react";
import { motion } from "framer-motion";
import { aiUses, journey, process } from "../../data/experience";
import { skills } from "../../data/skills";
import { fadeUp } from "../../lib/motion";
import { Chip, Section, SectionHeading } from "../ui/Bits";
import { Reveal } from "../ui/Reveal";
import { ProjectBrowser } from "../projects/ProjectBrowser";
import { ContactForm } from "../contact/ContactForm";
import { site } from "../../data/site";

export const Work = () => (
  <Section id="work">
    <SectionHeading
      title="Selected work"
      sub="A few things I've built while solving real-world problems."
    />
    <ProjectBrowser />
  </Section>
);

export const About = () => (
  <Section id="about">
    <div className="grid gap-10 md:grid-cols-2">
      <Reveal>
        <h2 className="text-3xl font-bold sm:text-4xl">About me</h2>
        <div className="mt-5 space-y-4 text-mut">
          <p>
            I am a certified software engineer specialising in web development. I enjoy taking a problem, breaking it down, understanding what it
            really needs, and turning it into a working product.
          </p>
          <p>
            My work sits across modern frontend development, backend APIs and,
            increasingly, AI-powered applications. I'm based in {site.location}{" "}.
          </p>
          <p>
            I'm looking for internships and paid roles in frontend, backend or
            full-stack development, where I can ship real features and keep
            learning.
          </p>
        </div>
      </Reveal>
      <div className="grid content-start gap-3">
        {[
          [
            "What I build",
            "Full-stack web apps with authentication, payments and dashboards.",
          ],
          [
            "Learning now",
            "AI integration: LLM APIs and retrieval-based apps.",
          ],
          [
            "Looking for",
            "Internships and paid frontend, backend or full-stack roles.",
          ],
        ].map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.08}>
            <div className="rounded-2xl border border-line bg-card p-4">
              <b className="font-display">{t}</b>
              <p className="text-sm text-mut">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export function Skills() {
  const [cur, setCur] = useState(Object.keys(skills)[0]);
  return (
    <Section id="skills">
      <SectionHeading
        title="Skills"
        sub="Grouped by what I use them for. Pick a group."
      />
      <div
        role="group"
        aria-label="Skill groups"
        className="mb-5 flex flex-wrap gap-2"
      >
        {Object.keys(skills).map((k) => (
          <Chip key={k} active={k === cur} onClick={() => setCur(k)}>
            {k}
          </Chip>
        ))}
      </div>
      <div className="flex min-h-24 flex-wrap content-start gap-3" key={cur}>
        {skills[cur].map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -3 }}
            className="rounded-xl border border-line bg-card px-4 py-2.5 font-medium"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}

export const Journey = () => (
  <Section id="journey">
    <div className="grid gap-10 md:grid-cols-2">
      <SectionHeading title="Journey" sub="How I got here, in order." />
      <ol className="relative ml-2 grid gap-8 border-l-2 border-line pl-8">
        {journey.map((e, i) => (
          <motion.li
            key={e.title}
            variants={fadeUp}
            custom={i * 0.05}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative"
          >
            <span className="absolute -left-[41px] top-1.5 size-3.5 rounded-full border-2 border-ac bg-bg" />
            <time className="font-mono text-sm text-ac">{e.period}</time>
            <h3 className="my-1 text-lg font-bold">{e.title}</h3>
            <p className="max-w-prose text-mut">{e.description}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  </Section>
);

export const Process = () => (
  <Section id="process">
    <SectionHeading title="How I work" sub="The same loop on every project." />
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {process.map(([t, d], i) => (
        <Reveal key={t} delay={i * 0.06}>
          <li className="h-full list-none rounded-2xl border border-line bg-card p-5 transition hover:border-ac">
            <span className="font-mono text-sm text-ac">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-1 mt-2 text-lg font-bold">{t}</h3>
            <p className="text-mut">{d}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  </Section>
);

export const AiWorkflow = () => (
  <Section id="ai">
    <Reveal className="rounded-3xl border border-ac/25 bg-soft p-6 sm:p-10">
      <h2 className="text-3xl font-bold sm:text-4xl">AI in my workflow</h2>
      <p className="mb-6 mt-3 max-w-prose text-mut">
        AI is part of how I build, not a replacement for engineering judgment. I
        review, test and validate everything it generates.
      </p>
      <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {aiUses.map((u) => (
          <motion.li
            key={u}
            whileHover={{ x: 4 }}
            className="rounded-xl border border-line bg-card px-4 py-3"
          >
            {u}
          </motion.li>
        ))}
      </ul>
    </Reveal>
  </Section>
);

export const Contact = () => (
  <Section id="contact">
    <div className="grid gap-10 md:grid-cols-2">
      <Reveal>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Let's build something useful.
        </h2>
        <p className="mt-3 max-w-prose text-mut">
          Have a project, opportunity or idea? I'd love to hear about it.
        </p>
        <p className="mt-5 text-mut">
          Prefer email?{" "}
          <a
            className="text-ac underline-offset-4 hover:underline"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <ContactForm />
      </Reveal>
    </div>
  </Section>
);
