import Link from "next/link";
import { IconArrowUpRight } from "@/components/ui/icons";

type Variant = "lime" | "dark" | "outline" | "underline";

const variants: Record<Variant, string> = {
  lime: "rounded-full bg-lime px-4 py-2.5 text-ink hover:bg-white",
  dark: "rounded-full bg-ink px-4 py-2.5 text-mist hover:bg-white hover:text-ink",
  outline:
    "rounded-full border border-ink/80 px-4 py-2.5 text-ink hover:bg-ink hover:text-mist",
  underline:
    "rounded-none border-b border-current px-0 py-0.5 text-mist hover:text-lime",
};

export function CtaLink({
  href,
  children,
  variant = "lime",
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center gap-2 font-condensed text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
    </Link>
  );
}
