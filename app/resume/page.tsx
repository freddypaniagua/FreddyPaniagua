import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import { education, experience, site, skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="space-y-10 print:space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-white print:text-zinc-900">
            {site.name}
          </h1>
          <p className="mt-2 text-zinc-400 print:text-zinc-600">
            {site.title} · {site.location} · {site.email}
          </p>
        </div>
        <PrintButton />
      </header>

      <section className="space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
          Experience
        </h2>
        {experience.map((role) => (
          <article key={role.company} className="space-y-2">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <h3 className="font-medium text-white print:text-zinc-900">
                {role.title} — {role.company}
              </h3>
              <p className="text-sm text-zinc-500">
                {role.dates} · {role.location}
              </p>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-400 print:text-zinc-700">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
          Education
        </h2>
        {education.map((item) => (
          <p key={item.school} className="text-zinc-300 print:text-zinc-800">
            {item.credential}, {item.school} · {item.dates}
          </p>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
          Skills
        </h2>
        <p className="text-sm leading-7 text-zinc-400 print:text-zinc-700">
          {skills.join(" · ")}
        </p>
      </section>
    </div>
  );
}
