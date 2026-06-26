"use client";

import { PageShell } from "@/components/site/PageShell";
import { useState } from "react";

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  streetAddress: "",
  city: "",
  state: "",
  phone: "",
  email: "",
  attending: "",
  sendConfirmation: "",
  learnedFrom: "",
  expectations: "",
};

export default function Register() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) value = value.slice(0, 10);
    let formatted = "";
    if (value.length > 0) formatted = `(${value.slice(0, 3)}`;
    if (value.length > 3) formatted += `) ${value.slice(3, 6)}`;
    if (value.length > 6) formatted += `-${value.slice(6, 10)}`;
    setForm({ ...form, phone: formatted });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY_FORM);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputBase =
    "w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-[#309DDE]";

  return (
    <PageShell>
      <section className="relative isolate min-h-screen py-24 pt-32 pb-32">
        {/* Background Image */}
        <img
          src="/images/register.jpg"
          alt="Background"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-[#090F1C]/85" />

        <div className="relative mx-auto max-w-2xl px-6 lg:px-10">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#309DDE]/30 bg-[#309DDE]/10 px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-[#7CC5F0]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Register now
            </span>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              WHITE WORSHIP{" "}
              <span className="bg-gradient-to-r from-[#309DDE] to-[#7CC5F0] bg-clip-text text-transparent">
                2026
              </span>
            </h1>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#7CC5F0]">
              ANOIGŌ (Open Heaven)
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/55">
              Join us for an unforgettable worship experience.
            </p>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 lg:p-10">
            <h2 className="mb-7 text-2xl font-bold text-white">Register</h2>

            {/* Success banner */}
            {submitted && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-[#309DDE]/30 bg-[#309DDE]/10 px-4 py-3.5 text-sm text-[#7CC5F0]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Registration submitted — we'll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name — First & Last */}
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                  Full Name*
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                    className={inputBase}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                    className={inputBase}
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                  Address*
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={form.streetAddress}
                  onChange={handleChange}
                  required
                  placeholder="Street Address"
                  className={inputBase}
                />
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="City"
                    className={inputBase}
                  />
                  <input
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    required
                    placeholder="State"
                    className={inputBase}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handlePhoneChange}
                  required
                  placeholder="(000) 000-0000"
                  className={inputBase}
                />
              </div>

              {/* E-mail */}
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                  E-mail*
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="example@gmail.com"
                  className={inputBase}
                />
              </div>

              {/* Will you be attending? */}
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                  Will you be attending WHITE WORSHIP 2026?*
                </label>
                <div className="relative">
                  <select
                    name="attending"
                    value={form.attending}
                    onChange={handleChange}
                    required
                    className={`${inputBase} appearance-none pr-10 [&>option]:bg-[#0d1829] [&>option]:text-white`}
                  >
                    <option value="" disabled>Select an option…</option>
                    <option value="yes">Yes, I will attend</option>
                    <option value="no">No, I cannot attend</option>
                    <option value="maybe">Maybe, I'm not sure yet</option>
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

              {/* Send confirmation to email? */}
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                  Can we send your seat confirmation to your email address?*
                </label>
                <div className="relative">
                  <select
                    name="sendConfirmation"
                    value={form.sendConfirmation}
                    onChange={handleChange}
                    required
                    className={`${inputBase} appearance-none pr-10 [&>option]:bg-[#0d1829] [&>option]:text-white`}
                  >
                    <option value="" disabled>Select an option…</option>
                    <option value="yes">Yes, please send it</option>
                    <option value="no">No, thank you</option>
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

              {/* How did you learn about us? */}
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                  How did you learn about WHITE WORSHIP 2026?*
                </label>
                <div className="relative">
                  <select
                    name="learnedFrom"
                    value={form.learnedFrom}
                    onChange={handleChange}
                    required
                    className={`${inputBase} appearance-none pr-10 [&>option]:bg-[#0d1829] [&>option]:text-white`}
                  >
                    <option value="" disabled>Select an option…</option>
                    <option value="social-media">Social Media</option>
                    <option value="friend-family">Friend/Family</option>
                    <option value="church">Church</option>
                    <option value="event">Event</option>
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

              {/* Expectations */}
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.06em] text-white/50">
                  What are your expectations for this program?*
                </label>
                <textarea
                  name="expectations"
                  value={form.expectations}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Share your expectations…"
                  className={`${inputBase} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#309DDE] to-[#7CC5F0] py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              >
                Register
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
      </section>
    </PageShell>
  );
}
