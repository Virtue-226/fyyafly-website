import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { CtaLink } from "@/components/ui/CtaLink";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((item) => item.slug !== project.slug);

  return (
    <article className="container-site grid gap-10 pb-16 pt-28 lg:grid-cols-[minmax(0,460px)_1fr] lg:items-start">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[3px] bg-night-2">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          priority
          sizes="(min-width: 1024px) 460px, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <p className="font-condensed text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">
          {project.category}
        </p>
        <h1 className="mt-3 font-display text-[clamp(3.2rem,6vw,5.5rem)] leading-[0.86] tracking-wide">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-mist">{project.description}</p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{project.story}</p>
        <div className="mt-8">
          <CtaLink href="/contact">Start a project</CtaLink>
        </div>
        <div className="mt-12 border-t border-line pt-6">
          <p className="font-condensed text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            More work
          </p>
          <ul className="mt-3 grid gap-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/work/${item.slug}`} className="font-display text-3xl tracking-wide hover:text-lime">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
