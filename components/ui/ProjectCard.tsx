import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { IconArrowRight } from "@/components/ui/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block min-w-0">
      <div className="relative aspect-square overflow-hidden rounded-[3px] bg-night-2">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.06]"
        />
      </div>
      <p className="mt-3 font-condensed text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/55">
        {project.category}
      </p>
      <h3 className="mt-1 font-display text-[1.55rem] leading-[0.9] tracking-wide text-ink">
        {project.title}
      </h3>
      <p className="mt-1.5 text-[13px] leading-snug text-muted-ink">{project.description}</p>
      <span className="mt-2 inline-flex items-center gap-1.5 font-condensed text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
        View case study
        <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-200 motion-safe:group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
