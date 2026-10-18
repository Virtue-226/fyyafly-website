import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[720px] items-end overflow-hidden bg-night lg:h-[clamp(620px,48.4vw,760px)] lg:min-h-0"
    >
      <Image
        src="/images/hero-jump.jpg"
        alt="A dancer in a blue jacket jumps from a rooftop above the city skyline"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_42%] lg:object-[68%_48%]"
      />
      <div className="hero-shade pointer-events-none absolute inset-0" />
      <div className="container-site hero-copy relative z-10 w-full pb-16 pt-28 lg:pb-14">
        <SectionLabel>Fyyafly Creative Agency & Media</SectionLabel>
        <h1 className="mt-3 font-display text-[clamp(3.7rem,9vw,8.4rem)] leading-[0.8] tracking-[0.01em] text-mist">
          <span className="block">Ideas.</span>
          <span className="block">Content.</span>
          <span className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Culture</span>
            <span className="mb-1 -rotate-6 font-script text-[clamp(1.7rem,2.5vw,2.55rem)] leading-[0.9] tracking-normal text-lime">
              THAT MOVES
              <br />
              PEOPLE.
            </span>
          </span>
        </h1>
        <p className="mt-5 max-w-[36ch] text-[14.5px] leading-[1.5] text-mist">
          We help brands grow through bold strategy, creative campaigns and original
          media. From social media to full-scale productions, we make your brand
          impossible to ignore.
        </p>
        <div className="mt-6">
          <CtaLink href="/contact">Let&apos;s build something unignorable</CtaLink>
        </div>
      </div>
      <p className="pointer-events-none absolute top-1/2 right-3 z-10 hidden -translate-y-1/2 rotate-180 font-condensed text-[10px] font-semibold uppercase tracking-[0.32em] text-white/75 [writing-mode:vertical-rl] xl:block">
        Real people / Bold ideas / Bigger impact
      </p>
      <p className="absolute right-[clamp(1.25rem,4.6vw,4.5rem)] bottom-5 z-10 font-condensed text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
        Creative agency / Media / Culture
      </p>
    </section>
  );
}
