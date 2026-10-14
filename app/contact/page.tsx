import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Contact
        </h1>
        <p className="text-lg leading-8 text-zinc-400">
          These details are fictional. Use the form to see client-side
          validation in this demo.
        </p>
        <ul className="space-y-2 text-zinc-300">
          <li>{site.email}</li>
          <li>{site.location}</li>
          {site.socials
            .filter((item) => item.href.startsWith("http"))
            .map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-teal underline-offset-4 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
      </header>
      <ContactForm />
    </div>
  );
}
