"use client";

import { PageShell } from "@/components/site/PageShell";
import { useState } from "react";

const ROLES = [
  {
    title: "Worship Team",
    description: "Musicians, singers & vocalists",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: "Media & Sound",
    description: "Sound, lighting & live streaming",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    title: "Ushering & Hospitality",
    description: "Welcome & guest experience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Communications",
    description: "Social media & content creation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
      </svg>
    ),
  },
];

const EMPTY = { name: "", email: "", phone: "", interest: "", message: "" };

export default function Volunteer() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputBase =
    "w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-[#309DDE]";

  return (
        <PageShell>
    <section className="min-h-screen bg-[#090F1C] px-6 py-24 pt-32 pb-32 lg:px-10">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-20 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#309DDE]/30 bg-[#309DDE]/10 px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-[#7CC5F0]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Get involved
            </span>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Volunteer with{" "}
              <span className="bg-gradient-to-r from-[#309DDE] to-[#7CC5F0] bg-clip-text text-transparent">
                WHITE
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/55">
              Be part of something bigger. Use your gifts to serve and help create powerful worship experiences.
            </p>
          </div>

          {/* Body */}
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">

            {/* Left — Roles */}
            <div>
              <p className="mb-7 text-[11px] uppercase tracking-[0.18em] text-white/35">
                Available roles
              </p>
              <div className="grid grid-cols-2 gap-3">
                {ROLES.map((role) => (
                  <div
                    key={role.title}
                    className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#309DDE]/40 hover:bg-[#309DDE]/5"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#309DDE]/10 text-[#309DDE]">
                      {role.icon}
                    </div>
                    <h3 className="mb-1.5 text-sm font-semibold text-white">{role.title}</h3>
                    <p className="text-xs leading-relaxed text-white/50">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 lg:p-9">
              <h2 className="mb-7 text-2xl font-bold text-white">Join the team</h2>

              {/* Success banner */}
              {submitted && (
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-[#309DDE]/30 bg-[#309DDE]/10 px-4 py-3.5 text-sm text-[#7CC5F0]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Application submitted — we'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={inputBase}
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+234 801 234 5678"
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Interest */}
                <div>
                  <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                    Area of interest
                  </label>
                  <div className="relative">
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      required
                      className={`${inputBase} appearance-none pr-10 [&>option]:bg-[#0d1829] [&>option]:text-white`}
                    >
                      <option value="" disabled>Select a role…</option>
                      <option value="worship">Worship Team</option>
                      <option value="media">Media & Sound</option>
                      <option value="hospitality">Ushering & Hospitality</option>
                      <option value="communications">Communications</option>
                      <option value="other">Other</option>
                    </select>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                    Why do you want to volunteer?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Share your heart and what you'd like to contribute…"
                    className={`${inputBase} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#309DDE] to-[#7CC5F0] py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                >
                  Submit application
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
</PageShell>
  );
}