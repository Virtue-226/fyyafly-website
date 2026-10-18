import Image from "next/image";
import Link from "next/link";
import type { Show } from "@/data/shows";
import { IconArrowUpRight, IconPlay } from "@/components/ui/icons";

export function ShowCard({
  show,
  className = "",
}: {
  show: Show;
  className?: string;
}) {
  return (
    <Link
      href={`/media/${show.slug}`}
      className={`group relative block h-[400px] w-full overflow-hidden rounded-[3px] bg-night-2 xl:h-[360px] ${className}`}
    >
      <Image
        src={show.image}
        alt={show.alt}
        fill
        sizes="(min-width: 1280px) 22vw, 80vw"
        className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="font-display text-[2.15rem] leading-[0.86] tracking-wide text-mist">
          {show.title}
        </h3>
        <p className="mt-2 font-condensed text-[11px] font-semibold uppercase tracking-[0.14em] text-mist/85">
          {show.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-2.5 font-condensed text-[11px] font-semibold uppercase tracking-[0.14em] text-mist">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-ink motion-safe:transition-transform motion-safe:group-hover:scale-105">
            <IconPlay className="h-3.5 w-3.5 translate-x-px" />
          </span>
          {show.cta}
        </span>
      </div>
    </Link>
  );
}

export function ComingSoonCard({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/media"
      className={`group relative block h-[400px] w-full overflow-hidden rounded-[3px] bg-night-2 xl:h-[360px] ${className}`}
    >
      <Image
        src="/images/show-soon.jpg"
        alt="A lone silhouette against a deep blue twilight sky"
        fill
        sizes="(min-width: 1280px) 14vw, 70vw"
        className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-[#061428]/35" />
      <p className="absolute left-4 right-4 top-5 font-display text-[1.85rem] leading-[0.88] tracking-wide text-mist sm:left-5 sm:text-[2rem]">
        More
        <br />
        shows
        <br />
        coming
        <br />
        soon
        <IconArrowUpRight className="ml-1 inline h-5 w-5 -translate-y-0.5" />
      </p>
    </Link>
  );
}
