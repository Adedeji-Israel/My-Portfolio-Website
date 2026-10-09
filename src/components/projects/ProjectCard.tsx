import { ArrowUpRight } from "lucide-react";
import { useState, type PointerEvent } from "react";
import type { Project } from "../../types";
import { ButtonLink } from "../ui/Button";
import { TechBadge } from "../ui/Bits";
export function ProjectCard({ project: p }: { project: Project }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const move = (e: PointerEvent<HTMLElement>) => {
    if (p.placeholder || matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 6,
      y: -((e.clientY - r.top) / r.height - 0.5) * 6,
    });
  };
  return (
    <article
      onPointerMove={move}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
      }}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-[border-color,box-shadow,transform] duration-200 hover:border-ac hover:shadow-[0_18px_40px_-22px_var(--ac)] ${p.placeholder ? "border-dashed border-line" : "border-line"}`}
    >
      <div className="grid aspect-[16/10] place-items-center overflow-hidden bg-soft text-sm text-mut">
        {p.image ? (
          <img
            src={p.image}
            alt={`${p.title} home page screenshot`}
            loading="lazy"
            width={900}
            height={560}
            className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          "Screenshot or demo goes here"
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-xl font-bold">{p.title}</h3>
          <p className="mt-1 text-sm text-mut">{p.description}</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {p.technologies.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          {p.placeholder ? (
            <span className="text-sm text-mut">Placeholder project</span>
          ) : (
            <>
              {p.liveUrl && (
                <ButtonLink
                  variant="primary"
                  href={p.liveUrl}
                  className="!min-h-10 !px-3 text-sm"
                >
                  Live demo <ArrowUpRight size={16} />
                </ButtonLink>
              )}
              <ButtonLink
                to={`/projects/${p.id}`}
                className="!min-h-10 !px-3 text-sm"
              >
                Case study
              </ButtonLink>
              {p.githubUrl ? (
                <ButtonLink
                  href={p.githubUrl}
                  className="!min-h-10 !px-3 text-sm"
                >
                  GitHub
                </ButtonLink>
              ) : (
                <span className="text-xs text-mut">
                  Add repository URL in projects.ts
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
