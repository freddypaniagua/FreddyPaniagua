import type { Metadata } from "next";
import ProjectList from "@/components/ProjectList";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div>
      <header className="max-w-2xl">
        <h1 className="font-serif text-4xl sm:text-5xl">Projects</h1>
        <p className="mt-4 leading-7 text-muted">
          Two builds. CSCAN reads a live game screen and suggests a buy.
          Tipping Point asks you to estimate the weight of one real thing
          against another.
        </p>
      </header>
      <div className="mt-10">
        <ProjectList projects={projects} detailed />
      </div>
    </div>
  );
}
