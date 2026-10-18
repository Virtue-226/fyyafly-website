import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page is not on the FYYAFLY site.",
};

export default function NotFound() {
  return (
    <section className="container-site py-36">
      <p className="font-condensed text-[11px] font-semibold uppercase tracking-[0.22em] text-lime">
        404
      </p>
      <h1 className="mt-3 font-display text-7xl leading-none tracking-wide">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        That address does not lead anywhere on this site.
      </p>
      <div className="mt-8">
        <CtaLink href="/">Back home</CtaLink>
      </div>
      <p className="mt-6 text-sm text-muted">
        Or go to{" "}
        <Link href="/work" className="underline">
          the work
        </Link>
        .
      </p>
    </section>
  );
}
