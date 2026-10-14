import { site } from "@/lib/content";

export default function ContactLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 text-sm ${className}`}>
      {site.socials.map((item) => (
        <li key={item.href}>
          <a className="quiet-link" href={item.href}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
