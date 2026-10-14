import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects, site, skills } from "@/lib/content";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-teal">
            {site.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {site.name}
          </h1>
          <p className="text-xl text-zinc-300">{site.title}</p>
          <p className="max-w-xl text-lg leading-8 text-zinc-400">{site.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-ink hover:bg-teal/90"
            >
              View projects
            </Link>
            <Link
              href="/resume"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:bg-white/5"
            >
              Download resume
            </Link>
          </div>
        </div>
        <div
          className="relative aspect-square max-h-80 overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,#14b8a655,transparent_45%),radial-gradient(circle_at_80%_80%,#38bdf855,transparent_40%)]"
          aria-hidden
        >
          <div className="absolute inset-0 grid place-items-center text-6xl font-semibold text-white/80">
            JD
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-white">Featured work</h2>
          <Link href="/projects" className="text-sm text-teal hover:underline">
            All projects
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
