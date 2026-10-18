import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/layout/PageIntro";
import { CtaLink } from "@/components/ui/CtaLink";

export const metadata: Metadata = {
  title: "About",
  description:
    "FYYAFLY is a creative agency and media company making brands impossible to ignore.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title={"Ideas.\nContent.\nCulture."}>
        FYYAFLY is a creative agency and media company. We help brands grow through bold
        strategy, creative campaigns and original media.
      </PageIntro>
      <section className="container-site grid gap-10 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-line bg-night-2 p-6 sm:p-10">
          <Image
            src="/images/fyyafly-logo-mark.png"
            alt="FYYAFLY logo, a circuit-winged moth beside the Fyyafly wordmark"
            width={976}
            height={300}
            className="h-auto w-full"
          />
        </div>
        <div className="grid content-start gap-5 text-[15px] leading-relaxed text-muted">
          <p>
            From social media to full-scale productions, the work is built to make a
            brand impossible to ignore. Strategy, creative, distribution and original
            stories sit in the same studio.
          </p>
          <p>
            We combine creativity, data and culture to build brands that people love and
            businesses that grow. The media side makes original shows, creator stories,
            documentaries and entertainment.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <CtaLink href="/services">Explore services</CtaLink>
            <CtaLink href="/contact" variant="underline">
              Get in touch
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
