"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { services } from "@/data/services";

type Status = "idle" | "sent" | "unconfigured";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) {
      setError("Add your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Add a valid email address.");
      return;
    }
    if (message.length < 12) {
      setError("Tell us a little more about the project.");
      return;
    }

    setError("");

    if (!site.contactEmail) {
      setStatus("unconfigured");
      return;
    }

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation || "—"}\nInterest: ${interest || "—"}\n\n${message}`,
    );
    window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  if (status === "unconfigured") {
    return (
      <p className="border border-line bg-white/5 p-5 text-[15px] leading-relaxed text-mist" role="status">
        The form is ready, but Fyyafly has not published a contact inbox yet. Add the
        studio email in the site configuration and this page will open a message draft.
      </p>
    );
  }

  if (status === "sent") {
    return (
      <p className="border border-lime/40 bg-lime/10 p-5 text-[15px] leading-relaxed text-mist" role="status">
        Your email draft should be open. If it did not appear, write to {site.contactEmail}.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <Field label="Name" name="name" autoComplete="name" required />
      <Field label="Email" name="email" type="email" autoComplete="email" required />
      <Field label="Organisation" name="organisation" autoComplete="organization" />
      <label className="grid gap-1.5">
        <span className="font-condensed text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          Interest
        </span>
        <select
          name="interest"
          className="border border-white/15 bg-white/5 px-3 py-3 text-sm text-mist outline-none focus:border-lime"
          defaultValue=""
        >
          <option value="" className="bg-night">
            Select a starting point
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title} className="bg-night">
              {service.title}
            </option>
          ))}
          <option value="Original media" className="bg-night">
            Original media
          </option>
          <option value="Partnership" className="bg-night">
            Partnership
          </option>
        </select>
      </label>
      <label className="grid gap-1.5">
        <span className="font-condensed text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="resize-y border border-white/15 bg-white/5 px-3 py-3 text-sm text-mist outline-none focus:border-lime"
        />
      </label>
      {error ? (
        <p className="text-sm text-lime" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-1 inline-flex w-fit items-center rounded-full bg-lime px-5 py-3 font-condensed text-[12px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-white"
      >
        Send message
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="font-condensed text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="border border-white/15 bg-white/5 px-3 py-3 text-sm text-mist outline-none focus:border-lime"
      />
    </label>
  );
}
