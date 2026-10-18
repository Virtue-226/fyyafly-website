export function SectionLabel({
  children,
  tone = "lime",
}: {
  children: React.ReactNode;
  tone?: "lime" | "ink";
}) {
  return (
    <p
      className={`font-condensed text-[11px] font-semibold uppercase tracking-[0.22em] ${
        tone === "lime" ? "text-lime" : "text-ink/70"
      }`}
    >
      {children}
    </p>
  );
}
