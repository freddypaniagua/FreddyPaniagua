"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "error" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const note = String(data.get("message") ?? "").trim();

    if (!name || !email || !note || !email.includes("@")) {
      setStatus("error");
      setMessage("Please fill in a name, a valid email, and a message.");
      return;
    }

    setStatus("success");
    setMessage(
      "Thanks — this demo form does not send email. In a real site this would reach John.",
    );
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="max-w-lg space-y-4" noValidate>
      <label className="block space-y-1.5">
        <span className="text-sm text-zinc-300">Name</span>
        <input
          name="name"
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-teal focus:ring-2"
        />
      </label>
      <label className="block space-y-1.5">
        <span className="text-sm text-zinc-300">Email</span>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-teal focus:ring-2"
        />
      </label>
      <label className="block space-y-1.5">
        <span className="text-sm text-zinc-300">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-teal focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-ink hover:bg-teal/90"
      >
        Send message
      </button>
      {status !== "idle" ? (
        <p
          className={
            status === "error" ? "text-sm text-rose-400" : "text-sm text-teal"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
