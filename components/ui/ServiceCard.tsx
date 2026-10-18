import Link from "next/link";
import type { Service } from "@/data/services";
import { IconArrowRight, ServiceGlyph } from "@/components/ui/icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group flex min-h-40 flex-col border-b border-line py-5 xl:min-h-0 xl:border-b-0 xl:px-4 xl:py-1"
    >
      <ServiceGlyph name={service.icon} className="h-6 w-6 text-mist" />
      <h3 className="mt-4 font-condensed text-[13px] font-bold uppercase leading-tight tracking-[0.04em] text-mist">
        {service.title}
      </h3>
      <p className="mt-2 text-[13px] leading-snug text-muted">{service.description}</p>
      <span className="mt-6 inline-flex text-mist/80 transition-transform duration-200 motion-safe:group-hover:translate-x-1">
        <IconArrowRight className="h-4 w-4" />
        <span className="sr-only">Explore {service.title}</span>
      </span>
    </Link>
  );
}
