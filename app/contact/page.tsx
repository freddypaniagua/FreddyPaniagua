import type { Metadata } from "next";
import ContactLinks from "@/components/ContactLinks";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <header className="max-w-2xl">
      <h1 className="font-serif text-4xl sm:text-5xl">Contact</h1>
      <p className="mt-4 leading-7 text-muted">
        Email is the best way to reach me. GitHub and LinkedIn are here too.
      </p>
      <p className="mt-8 font-serif text-2xl sm:text-3xl">
        <a className="quiet-link" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
      <ContactLinks className="mt-8" />
      <p className="mt-8 text-sm text-muted">{site.location}</p>
    </header>
  );
}
