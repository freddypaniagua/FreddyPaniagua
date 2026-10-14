import { site } from "@/lib/content";
import ContactLinks from "@/components/ContactLinks";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line print:hidden">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {site.name}, {site.location}
        </p>
        <ContactLinks />
      </div>
    </footer>
  );
}
