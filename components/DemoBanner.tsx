import { site } from "@/lib/content";

export default function DemoBanner() {
  return (
    <div className="bg-teal/15 text-center text-xs text-teal-100 print:hidden sm:text-sm">
      <p className="mx-auto max-w-5xl px-4 py-2 sm:px-6">{site.demoNotice}</p>
    </div>
  );
}
