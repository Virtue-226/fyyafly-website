import { shows } from "@/data/shows";
import { ComingSoonCard, ShowCard } from "@/components/ui/ShowCard";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function MediaSection() {
  return (
    <section id="media" className="bg-night" aria-labelledby="media-heading">
      <div className="container-site grid gap-8 py-12 xl:grid-cols-[minmax(220px,270px)_1fr] xl:items-center xl:gap-6 xl:py-14">
        <div>
          <SectionLabel>Fyyafly Media</SectionLabel>
          <h2
            id="media-heading"
            className="mt-3 whitespace-pre-line font-display text-[clamp(2.8rem,3.5vw,3.8rem)] leading-[0.84] tracking-wide text-mist"
          >
            {"Original\nStories.\nBigger\nAudiences."}
          </h2>
          <p className="mt-4 max-w-[32ch] text-[14.5px] leading-relaxed text-muted">
            We create and produce original shows, creator stories, documentaries and
            entertainment that inspire, inform and entertain.
          </p>
          <div className="mt-6">
            <CtaLink href="/media">Watch all shows</CtaLink>
          </div>
        </div>
        <div className="media-row -mx-[clamp(1.25rem,4.6vw,4.5rem)] flex snap-x snap-mandatory gap-3 overflow-x-auto px-[clamp(1.25rem,4.6vw,4.5rem)] pb-1 xl:mx-0 xl:grid xl:grid-cols-[1.15fr_1.15fr_1.15fr_0.78fr] xl:overflow-visible xl:px-0 xl:pb-0">
          {shows.map((show) => (
            <ShowCard
              key={show.slug}
              show={show}
              className="w-[78%] shrink-0 snap-start sm:w-[46%] xl:w-full"
            />
          ))}
          <ComingSoonCard className="w-[64%] shrink-0 snap-start sm:w-[36%] xl:w-full" />
        </div>
      </div>
    </section>
  );
}
