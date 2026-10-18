import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { PageIntro } from "@/components/layout/PageIntro";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Featured FYYAFLY campaigns across product, storytelling, content production and live experiences.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro eyebrow="Featured work" title={"Brands. Campaigns.\nReal impact."}>
        From high-energy product campaigns to purpose-driven storytelling, our work is
        built to create attention, connection and results.
      </PageIntro>
      <section className="bg-paper py-12 text-ink">
        <div className="container-site grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
