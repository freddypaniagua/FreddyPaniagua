import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. Fictional portfolio for an AI
          course.
        </p>
        <p>{site.email}</p>
      </div>
    </footer>
  );
}
