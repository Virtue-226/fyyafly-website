import { SectionLabel } from "@/components/ui/SectionLabel";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="container-site pb-10 pt-28">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h1 className="mt-3 max-w-4xl whitespace-pre-line font-display text-[clamp(3.2rem,7vw,6rem)] leading-[0.84] tracking-wide text-mist">
        {title}
      </h1>
      <div className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">{children}</div>
    </header>
  );
}
