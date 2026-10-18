import { projects } from "@/data/projects";
import { CtaLink } from "@/components/ui/CtaLink";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FeaturedWorkSection() {
  return (
    <section id="work" className="bg-paper text-ink" aria-labelledby="work-heading">
      <div className="container-site grid gap-8 py-12 xl:grid-cols-[minmax(250px,340px)_1fr] xl:gap-6 xl:py-14">
        <div>
          <SectionLabel tone="ink">Featured work</SectionLabel>
          <h2
            id="work-heading"
            className="mt-3 font-display text-[clamp(2.6rem,3.2vw,3.7rem)] leading-[0.86] tracking-wide"
          >
            Brands. Campaigns.
            <br />
            Real impact.
          </h2>
          <p className="mt-4 max-w-[34ch] text-[14.5px] leading-relaxed text-muted-ink">
            From high-energy product campaigns to purpose-driven storytelling, our work
            is built to create attention, connection and results.
          </p>
          <div className="mt-6">
            <CtaLink href="/work" variant="outline">
              View all work
            </CtaLink>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
