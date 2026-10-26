import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import {
  education,
  experience,
  languages,
  projects,
  site,
  skills,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="font-serif text-4xl">{site.name}</h1>
          <p className="mt-2 text-muted">
            {site.title} · {site.location}
          </p>
          <p className="mt-3 text-sm">
            <a className="quiet-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <span className="text-muted"> · </span>
            <a className="quiet-link" href="https://github.com/freddypaniagua">
              github.com/freddypaniagua
            </a>
            <span className="text-muted"> · </span>
            <a className="quiet-link" href="https://www.linkedin.com/in/freddyrp">
              linkedin.com/in/freddyrp
            </a>
          </p>
        </div>
        <PrintButton />
      </header>

      <section>
        <h2 className="font-serif text-2xl">Skills</h2>
        <p className="mt-4 border-t border-line pt-4 text-base leading-7">
          {skills.join(" · ")}
        </p>
        <p className="mt-2 text-sm leading-7 text-muted">{languages}</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl">Education</h2>
        <div className="mt-4 border-t border-line">
          {education.map((item) => (
            <article
              key={item.school}
              className="flex flex-col justify-between gap-1 border-b border-line py-4 sm:flex-row"
            >
              <p>
                <span className="text-ink">{item.school}</span>
                {item.credential ? (
                  <span className="text-muted"> — {item.credential}</span>
                ) : null}
              </p>
              <p className="text-sm text-muted">{item.dates}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl">Projects</h2>
        <div className="mt-4 space-y-6 border-t border-line pt-4">
          {projects.map((project) => (
            <article key={project.slug}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3>
                  {project.name}
                  <span className="text-muted"> — {project.stack.join(", ")}</span>
                </h3>
                {project.link ? (
                  <a className="quiet-link text-sm" href={project.link.href}>
                    {project.link.label}
                  </a>
                ) : null}
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl">Experience</h2>
        <div className="mt-4 border-t border-line">
          {experience.map((role) => (
            <article key={role.title} className="border-b border-line py-4">
              <div className="flex flex-col justify-between gap-1 sm:flex-row">
                <p>
                  {role.title}
                  <span className="text-muted"> — {role.company}</span>
                </p>
                <p className="text-sm text-muted">{role.dates}</p>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
