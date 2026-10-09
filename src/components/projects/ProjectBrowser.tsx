import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects } from "../../data/projects";
import { scaleIn } from "../../lib/motion";
import { Chip } from "../ui/Bits";
import { ProjectCard } from "./ProjectCard";

export function ProjectBrowser() {
  const cats = useMemo(
    () => ["All", ...new Set(projects.flatMap((p) => p.category))],
    [],
  );
  const [cur, setCur] = useState("All");
  const list = projects.filter(
    (p) => cur === "All" || p.category.some((c) => c === cur),
  );
  return (
    <>
      <div
        role="group"
        aria-label="Filter projects"
        className="mb-6 flex flex-wrap gap-2"
      >
        {cats.map((c) => (
          <Chip key={c} active={c === cur} onClick={() => setCur(c)}>
            {c}
          </Chip>
        ))}
      </div>
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-live="polite"
      >
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div
              layout
              key={p.id}
              variants={scaleIn}
              custom={i * 0.06}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.94 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
