import { CtaLink } from "@/components/ui/CtaLink";

export function ContactBanner() {
  return (
    <section className="bg-lime text-ink" aria-labelledby="banner-heading">
      <div className="container-site flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:gap-10 lg:py-7">
        <h2
          id="banner-heading"
          className="font-display text-[clamp(2rem,2.7vw,2.85rem)] leading-[0.86] tracking-wide lg:w-[38%] lg:shrink-0"
        >
          Your brand has
          <br />
          potential. Let&apos;s prove it.
        </h2>
        <p className="max-w-sm text-[14.5px] leading-relaxed text-ink/75 lg:max-w-xs">
          Tell us about your goals, and we&apos;ll help you turn them into a creative
          strategy that works.
        </p>
        <CtaLink href="/contact" variant="dark" className="shrink-0 self-start lg:ml-auto lg:self-center">
          Start a project
        </CtaLink>
      </div>
    </section>
  );
}
