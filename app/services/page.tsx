import type { Metadata } from "next";
import { services } from "@/data/services";
import { PageIntro } from "@/components/layout/PageIntro";
import { CtaLink } from "@/components/ui/CtaLink";
import { ServiceGlyph } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social strategy, creative campaigns, paid growth, influencer marketing and brand identity from FYYAFLY.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="What we do" title={"Strategy.\nCreative.\nDistribution.\nResults."}>
        We combine creativity, data and culture to build brands that people love and
        businesses that grow.
      </PageIntro>
      <div className="container-site grid gap-px pb-20">
        {services.map((service) => (
          <article
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 grid gap-4 border-t border-line py-8 lg:grid-cols-[280px_1fr]"
          >
            <div>
              <ServiceGlyph name={service.icon} className="h-7 w-7 text-lime" />
              <h2 className="mt-4 font-display text-4xl leading-none tracking-wide">
                {service.title}
              </h2>
            </div>
            <div>
              <p className="text-lg text-mist">{service.description}</p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                {service.summary}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-3 py-2 font-condensed text-[13px] font-semibold uppercase tracking-[0.08em] text-mist"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        <div className="pt-8">
          <CtaLink href="/contact">Start a project</CtaLink>
        </div>
      </div>
    </>
  );
}
