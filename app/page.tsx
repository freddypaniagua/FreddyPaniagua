import Link from "next/link";
import ContactLinks from "@/components/ContactLinks";
import ProjectList from "@/components/ProjectList";
import { education, experience, projects, site, skills } from "@/lib/content";

export default function Home() {
  return (
    <div className="space-y-16">
      <header className="max-w-2xl">
        <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl">
          {site.name}
        </h1>
        <span className="mt-6 block h-0.5 w-12 bg-mark" aria-hidden />
        <p className="mt-6 text-xl leading-8">{site.summary}</p>
        <ContactLinks className="mt-8" />
      </header>

      <section>
        <h2 className="font-serif text-3xl">Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-lg">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 font-serif text-3xl">What I&apos;m building</h2>
        <ProjectList projects={projects} />
      </section>

      <section className="border-t border-line pt-10">
        <h2 className="font-serif text-3xl">Background</h2>
        <div className="mt-6 border-t border-line">
          <p className="border-b border-line py-3 text-sm text-muted">School</p>
          {education.map((item) => (
            <article
              key={item.school}
              className="grid gap-1 border-b border-line py-5 sm:grid-cols-[1fr_auto] sm:gap-8"
            >
              <div>
                <h3>{item.credential}</h3>
                <p className="text-muted">{item.school}</p>
              </div>
              <p className="text-sm text-muted sm:text-right">{item.dates}</p>
            </article>
          ))}
          <p className="border-b border-line py-3 text-sm text-muted">Work</p>
          {experience.map((role) => (
            <article
              key={role.title}
              className="grid gap-1 border-b border-line py-5 sm:grid-cols-[1fr_auto] sm:gap-8"
            >
              <div>
                <h3>{role.title}</h3>
                <p className="text-muted">{role.company}</p>
                <p className="mt-1 max-w-xl text-sm leading-6 text-muted">
                  {role.summary}
                </p>
              </div>
              <p className="text-sm text-muted sm:text-right">{role.dates}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm">
          <Link className="quiet-link" href="/about">
            About
          </Link>
          <span className="text-muted"> · </span>
          <Link className="quiet-link" href="/resume">
            Resume
          </Link>
        </p>
      </section>
    </div>
  );
}
