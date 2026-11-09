"use client";

import { useState, type FormEvent } from "react";
import type { Content } from "@/content";

type Props = { form: Content["contact"]["form"]; email: string; /** Colour of the field labels and note. */ mute?: string };

// ponytail: mailto until the SES route exists; swap handleSubmit for a fetch to /api/contact then.
export function ContactForm({ form, email, mute = "text-mute" }: Props) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `${form.name}: ${data.get("name")}`,
      `${form.email}: ${data.get("email")}`,
      `${form.org}: ${data.get("org")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8" noValidate={false}>
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className={`label ${mute}`}>{form.name}</span>
          <input className="field" name="name" type="text" autoComplete="name" required />
        </label>
        <label className="grid gap-1">
          <span className={`label ${mute}`}>{form.email}</span>
          <input className="field" name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label className="grid gap-1">
        <span className={`label ${mute}`}>{form.org}</span>
        <input className="field" name="org" type="text" autoComplete="organization" />
      </label>
      <label className="grid gap-1">
        <span className={`label ${mute}`}>{form.message}</span>
        <textarea className="field resize-none" name="message" rows={4} required />
      </label>
      <div className="flex flex-wrap items-center gap-6 pt-2">
        <button type="submit" className="btn btn-solid">
          <span className="dot" aria-hidden />
          {form.submit}
        </button>
        <p className={`text-sm ${mute}`} aria-live="polite">
          {form.note}
        </p>
      </div>
      {sent && <span className="sr-only">{form.note}</span>}
    </form>
  );
}
