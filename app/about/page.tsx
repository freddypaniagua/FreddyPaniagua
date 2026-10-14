import type { Metadata } from "next";
import { about, education, experience, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="space-y-14">
      <header className="max-w-2xl space-y-4">
        <h1 className="font-serif text-4xl sm:text-5xl">About</h1>
        {about.map((paragraph) => (
          <p key={paragraph} className="leading-7 text-muted">
            {paragraph}
          </p>
        ))}
      </header>

      <section>
        <h2 className="font-serif text-3xl">Background</h2>
        <div className="mt-6 border-t border-line">
          <p className="border-b border-line py-3 text-sm text-muted">School</p>
          {education.map((item) => (
            <article
              key={item.school}
              className="grid gap-1 border-b border-line py-5 sm:grid-cols-[1fr_auto] sm:gap-8"
            >
              <div>
                <h3>{item.school}</h3>
                <p className="text-muted">{item.credential}</p>
              </div>
              <p className="text-sm text-muted sm:text-right">{item.dates}</p>
            </article>
          ))}
          <p className="border-b border-line py-3 text-sm text-muted">Work</p>
          {experience.map((role) => (
            <article key={role.title} className="border-b border-line py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <div>
                  <h3>{role.title}</h3>
                  <p className="text-muted">
                    {role.company} · {role.location}
                  </p>
                </div>
                <p className="text-sm text-muted sm:text-right">{role.dates}</p>
              </div>
              <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <p className="text-sm text-muted">{site.location}</p>
    </div>
  );
}
