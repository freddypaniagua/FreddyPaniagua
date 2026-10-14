import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div
        className="h-2 w-full"
        style={{ backgroundColor: project.accent }}
        aria-hidden
      />
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          <p className="text-sm leading-6 text-zinc-400">{project.summary}</p>
        </div>
        <p className="text-sm text-teal">{project.outcome}</p>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-4 pt-2 text-sm">
          <a
            href={project.github}
            className="text-zinc-300 underline-offset-4 hover:text-white hover:underline"
          >
            GitHub
          </a>
          <a
            href={project.live}
            className="text-zinc-300 underline-offset-4 hover:text-white hover:underline"
          >
            Live demo
          </a>
        </div>
      </div>
    </article>
  );
}
