import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";
import { SocialGlyph } from "@/components/ui/icons";
import { Wordmark } from "@/components/ui/Wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-night text-mist">
      <div className="container-site py-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="shrink-0">
            <Wordmark />
            <p className="mt-1.5 text-[12px] text-muted">{site.descriptor}</p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
            {footerNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-condensed text-[11px] font-semibold uppercase tracking-[0.14em] text-mist/80 transition-colors hover:text-lime"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ul className="flex items-center gap-2.5">
            {site.social.map((item) => {
              const icon = (
                <SocialGlyph
                  name={item.label}
                  className="h-[18px] w-[18px]"
                />
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      aria-label={item.label}
                      target="_blank"
                      rel="noreferrer"
                      className="grid h-9 w-9 place-items-center text-mist/80 transition-colors hover:text-lime"
                    >
                      {icon}
                    </a>
                  ) : (
                    <span
                      className="grid h-9 w-9 place-items-center text-mist/80"
                      role="img"
                      aria-label={`${item.label} profile not published yet`}
                      title={`${item.label} profile not published yet`}
                    >
                      {icon}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-5 flex flex-col gap-2 border-t border-line pt-4 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
