import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";
import { site } from "../../data/site";
import { socialLinks } from "../../data/socialLinks";
import { ButtonLink } from "../ui/Button";
import { SocialIcon } from "../ui/Icons";
import { CodePanel } from "./CodePanel";

export function Hero() {
  const item = (i: number) => ({
    variants: fadeUp,
    custom: i * 0.09,
    initial: "hidden",
    animate: "show",
  });
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-32 pb-20"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 size-[520px] rounded-full bg-ac/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <motion.p
            {...item(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm font-medium"
          >
            <span className="size-2 animate-pulse rounded-full bg-ac" />
            Open to internships and paid roles
          </motion.p>
          <motion.h1
            {...item(1)}
            className="text-4xl font-extrabold sm:text-6xl"
          >
            I build digital experiences that solve real problems.
          </motion.h1>
          <motion.p {...item(2)} className="mt-5 max-w-xl text-lg text-mut">
            I design and develop modern web applications with React, TypeScript
            and Node.js, turning ideas into products people can actually use.
          </motion.p>
          <motion.div {...item(3)} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink variant="primary" href="#work">
              View my work
            </ButtonLink>
            <ButtonLink href="#contact">Let's connect</ButtonLink>
          </motion.div>
          <motion.div {...item(4)} className="mt-6 flex gap-3">
            {socialLinks.map((s) => (
              <ButtonLink
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="!px-0 w-11"
              >
                <SocialIcon icon={s.icon} />
              </ButtonLink>
            ))}
          </motion.div>
          <span className="sr-only">
            {site.name}, {site.title}, {site.location}
          </span>
        </div>
        <CodePanel />
      </div>
    </section>
  );
}
