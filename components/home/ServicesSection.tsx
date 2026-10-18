import { services } from "@/data/services";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="bg-night" aria-labelledby="services-heading">
      <div className="container-site grid gap-8 py-10 xl:grid-cols-[minmax(230px,280px)_1fr] xl:items-start xl:gap-8 xl:py-12">
        <div className="flex flex-col">
          <SectionLabel>What we do</SectionLabel>
          <h2
            id="services-heading"
            className="mt-3 whitespace-pre-line font-display text-[clamp(2.8rem,3.6vw,3.85rem)] leading-[0.84] tracking-wide text-mist"
          >
            {"Strategy.\nCreative.\nDistribution.\nResults."}
          </h2>
          <p className="mt-4 max-w-[28ch] text-[14.5px] leading-relaxed text-muted">
            We combine creativity, data and culture to build brands that people love
            and businesses that grow.
          </p>
          <div className="mt-6">
            <CtaLink href="/services" variant="underline">
              Explore all services
            </CtaLink>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-5 xl:items-start xl:divide-x xl:divide-line xl:border-l xl:border-line">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
