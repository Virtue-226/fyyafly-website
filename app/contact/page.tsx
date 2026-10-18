import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with FYYAFLY Creative Agency & Media.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Get in touch" title={"Let's build\nsomething\nunignorable."}>
        Tell us about your goals, and we&apos;ll help you turn them into a creative
        strategy that works.
      </PageIntro>
      <section className="container-site grid gap-10 pb-16 lg:grid-cols-[0.8fr_1fr]">
        <div className="text-[15px] leading-relaxed text-muted">
          <p>
            Share the brand, the problem and the kind of work you have in mind. Strategy,
            campaigns, distribution and original media can start from the same note.
          </p>
          <p className="mt-4">
            A public studio email has not been added yet. Until it is, the form will say
            so instead of pretending a message was delivered.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
