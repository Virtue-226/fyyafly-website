"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/data/navigation";
import { IconClose, IconMenu } from "@/components/ui/icons";
import { CtaLink } from "@/components/ui/CtaLink";
import { Wordmark } from "@/components/ui/Wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["top", "services", "work", "media"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function navigate(href: string) {
    setOpen(false);
    router.push(href);
  }

  function isActive(item: (typeof navItems)[number]) {
    if (pathname === "/") return item.section === activeSection;
    return item.match?.some((path) => pathname === path || pathname.startsWith(`${path}/`)) ?? false;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || open ? "border-b border-line bg-night/95" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center gap-6">
        <Wordmark className="shrink-0" />
        <nav className="ml-auto hidden items-center gap-[1.15rem] xl:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 font-condensed text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-mist" : "text-mist/75 hover:text-mist"
                }`}
                onClick={() => item.section && setActiveSection(item.section)}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-lime motion-safe:transition-all ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto hidden xl:ml-2 xl:block">
          <CtaLink href="/contact">Get in touch</CtaLink>
        </div>
        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center text-mist xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-night xl:hidden"
        >
          <nav className="container-site flex flex-col gap-1 py-6" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 font-display text-4xl tracking-wide text-mist"
                onClick={(event) => {
                  event.preventDefault();
                  navigate(item.href);
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6">
              <CtaLink
                href="/contact"
                className="px-5 py-3 text-[12px]"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/contact");
                }}
              >
                Get in touch
              </CtaLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
