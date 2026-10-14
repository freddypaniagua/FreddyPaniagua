import type { Project } from "@/lib/content";

export default function ProjectList({
  projects,
  detailed = false,
}: {
  projects: Project[];
  detailed?: boolean;
}) {
  return (
    <div className="border-t border-line">
      {projects.map((project) => (
        <article key={project.slug} className="border-b border-line py-8">
          <div className="flex items-baseline justify-between gap-6">
            <h3 className="font-serif text-2xl">{project.name}</h3>
            <a className="quiet-link shrink-0 text-sm" href={project.github}>
              GitHub
            </a>
          </div>
          <p className="mt-3 max-w-2xl leading-7">{project.summary}</p>
          {detailed ? (
            <p className="mt-3 max-w-2xl leading-7 text-muted">{project.body}</p>
          ) : null}
          <p className="mt-4 text-sm text-muted">{project.stack.join(" · ")}</p>
        </article>
      ))}
    </div>
  );
}
