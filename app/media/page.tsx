import type { Metadata } from "next";
import { shows } from "@/data/shows";
import { PageIntro } from "@/components/layout/PageIntro";
import { ComingSoonCard, ShowCard } from "@/components/ui/ShowCard";

export const metadata: Metadata = {
  title: "Fyyafly Media",
  description:
    "Original shows, creator stories and entertainment from FYYAFLY Media.",
};

export default function MediaPage() {
  return (
    <>
      <PageIntro eyebrow="Fyyafly Media" title={"Original\nStories.\nBigger\nAudiences."}>
        We create and produce original shows, creator stories, documentaries and
        entertainment that inspire, inform and entertain.
      </PageIntro>
      <section className="container-site grid gap-4 pb-16 sm:grid-cols-2 xl:grid-cols-[1.15fr_1.15fr_1.15fr_0.78fr]">
        {shows.map((show) => (
          <ShowCard key={show.slug} show={show} />
        ))}
        <ComingSoonCard />
      </section>
    </>
  );
}
