import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getShow, shows } from "@/data/shows";
import { CtaLink } from "@/components/ui/CtaLink";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return shows.map((show) => ({ slug: show.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const show = getShow(slug);
  if (!show) return { title: "Fyyafly Media" };
  return { title: show.title, description: show.description };
}

export default async function ShowPage({ params }: Props) {
  const { slug } = await params;
  const show = getShow(slug);
  if (!show) notFound();

  return (
    <article className="container-site grid gap-10 pb-16 pt-28 lg:grid-cols-[minmax(0,460px)_1fr]">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[3px] bg-night-2">
        <Image
          src={show.image}
          alt={show.alt}
          fill
          priority
          sizes="(min-width: 1024px) 460px, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <p className="font-condensed text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">
          Fyyafly Media
        </p>
        <h1 className="mt-3 font-display text-[clamp(3.2rem,6vw,5.5rem)] leading-[0.86] tracking-wide">
          {show.title}
        </h1>
        <p className="mt-4 font-condensed text-sm font-semibold uppercase tracking-[0.14em] text-mist">
          {show.description}
        </p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{show.summary}</p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Episodes will be published on this page. There is no external video link yet.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaLink href="/media">All shows</CtaLink>
          <CtaLink href="/contact" variant="underline">
            Talk to the studio
          </CtaLink>
        </div>
        <ul className="mt-12 grid gap-2 border-t border-line pt-6">
          {shows
            .filter((item) => item.slug !== show.slug)
            .map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/media/${item.slug}`}
                  className="font-display text-3xl tracking-wide hover:text-lime"
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
}
