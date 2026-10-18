import type { Metadata } from "next";
import { insights } from "@/data/insights";
import { PageIntro } from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes from FYYAFLY on culture, original stories and real people.",
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro eyebrow="Insights" title={"Notes from\nthe studio."}>
        Short points of view on how Fyyafly thinks about culture, original media and the
        people inside the work. These are not case studies and they do not quote results.
      </PageIntro>
      <section className="container-site grid gap-8 pb-16">
        {insights.map((insight, index) => (
          <article key={insight.slug} id={insight.slug} className="border-t border-line pt-8">
            <p className="font-condensed text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">
              0{index + 1}
            </p>
            <h2 className="mt-2 font-display text-5xl leading-none tracking-wide">{insight.title}</h2>
            <div className="mt-4 grid max-w-3xl gap-3 text-[15px] leading-relaxed text-muted">
              {insight.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
