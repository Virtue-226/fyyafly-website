import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { CtaLink } from "@/components/ui/CtaLink";

const partnerships = [
  {
    title: "Brands",
    copy: "Campaigns, identity and distribution for brands that want culture and commerce in the same plan.",
  },
  {
    title: "Creators",
    copy: "Collaborations and original formats with people who already have the trust of an audience.",
  },
  {
    title: "Media partners",
    copy: "Shows, documentaries and entertainment that can live with a brand without feeling bolted on.",
  },
];

export const metadata: Metadata = {
  title: "Partnerships",
  description: "Partner with FYYAFLY on brands, creators and original media.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageIntro eyebrow="Partnerships" title={"Build it\nwith us."}>
        Fyyafly works with brands, creators and media partners. If the idea needs
        strategy, production and an audience, start a conversation.
      </PageIntro>
      <section className="container-site grid gap-4 pb-16 md:grid-cols-3">
        {partnerships.map((item) => (
          <article key={item.title} className="border border-line p-5">
            <h2 className="font-display text-4xl tracking-wide">{item.title}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.copy}</p>
          </article>
        ))}
        <div className="md:col-span-3 pt-4">
          <CtaLink href="/contact">Start a conversation</CtaLink>
        </div>
      </section>
    </>
  );
}
