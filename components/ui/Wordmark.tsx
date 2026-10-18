import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="FYYAFLY home"
      className={`inline-flex items-start font-condensed text-[1.45rem] font-bold uppercase leading-none tracking-[0.08em] text-mist ${className}`}
    >
      Fyyafly
      <sup className="ml-0.5 text-[0.42em] font-semibold leading-none">®</sup>
    </Link>
  );
}
