import type { Metadata } from "next";
import { bio, experience, interests } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-white">About</h1>
        <p className="text-lg leading-8 text-zinc-400 whitespace-pre-line">{bio}</p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Timeline</h2>
        <ol className="space-y-6 border-l border-white/10 pl-6">
          {experience.map((role) => (
            <li key={role.company} className="space-y-1">
              <p className="text-sm text-teal">{role.dates}</p>
              <h3 className="text-lg font-medium text-white">
                {role.title} · {role.company}
              </h3>
              <p className="text-sm text-zinc-500">{role.location}</p>
              <p className="max-w-2xl text-sm leading-6 text-zinc-400">
                {role.bullets[0]}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Outside of work</h2>
        <ul className="list-disc space-y-2 pl-5 text-zinc-400">
          {interests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
