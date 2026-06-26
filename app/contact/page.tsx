"use client";

import { PageShell } from "@/components/site/PageShell";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

// React Icons Social Media
import { 
  FaInstagram, 
  FaYoutube, 
  FaTwitter, 
  FaFacebookF,
  FaTiktok 
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

/* ── Types ── */
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

/* ── Social data ── */
const socials = [
  {
    label: "Instagram",
    handle: "@whiteworship",
    href: "https://instagram.com/whiteworship",
    icon: <FaInstagram className="h-4 w-4" />,
  },
  {
    label: "YouTube",
    handle: "WHITEWORSHIP",
    href: "https://youtube.com/@whiteworship",
    icon: <FaYoutube className="h-4 w-4" />,
  },
  {
    label: "X (Twitter)",
    handle: "@whiteworship",
    href: "https://x.com/whiteworship",
    icon: <FaXTwitter className="h-4 w-4" />,
  },
  {
    label: "Facebook",
    handle: "WHITEWORSHIP",
    href: "https://facebook.com/whiteworship",
    icon: <FaFacebookF className="h-4 w-4" />,
  },
  {
    label: "TikTok",
    handle: "@whiteworship",
    href: "https://tiktok.com/@whiteworship",
    icon: <FaTiktok className="h-4 w-4" />,
  },
];

const contactInfo = [
  { icon: <Mail size={16} />, label: "Email", value: "hello@whiteworship.org" },
  { icon: <Phone size={16} />, label: "Phone", value: "+234 800 WORSHIP" },
  { icon: <MapPin size={16} />, label: "Base", value: "Rccg Chapel of glory, Ogaga Street, Lagos" },
  { icon: <Clock size={16} />, label: "Response time", value: "Within 24–48 hours" },
];
const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps?q=6.664136607601727,3.2799124234777706";
  
export default function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: "", lastName: "", email: "", subject: "", message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!form.email || !form.message) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000)); // Replace with real API
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[#090F1C] py-24 pt-32 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-[#309DDE]/6 blur-[180px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-[#309DDE]/4 blur-[160px]" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="mb-5 inline-flex rounded-full border border-[#309DDE]/30 bg-[#309DDE]/10 px-5 py-2 text-[10px] uppercase tracking-[0.25em] text-[#7CC5F0]">
              Contact Us
            </span>
            <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-[#309DDE] to-[#7CC5F0] bg-clip-text text-transparent">
                Connect
              </span>
              <br />& Commune
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/55">
              Whether you&apos;re hosting a gathering, partnering in ministry,
              or simply want to reach out — we&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="mb-14 h-px bg-gradient-to-r from-transparent via-[#309DDE]/28 to-transparent" />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Form Card - unchanged */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/8 bg-white/[0.03] p-8"
            >
              <h2 className="font-display text-lg font-bold text-white">Send a Message</h2>
              <p className="mb-7 mt-1.5 text-sm leading-relaxed text-white/45">
                Fill in the form and we&apos;ll respond within 24–48 hours.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/40">First name</label>
                  <input type="text" placeholder="David" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-[#309DDE]/55 focus:bg-[#309DDE]/5" />
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/40">Last name</label>
                  <input type="text" placeholder="Adeyemi" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-[#309DDE]/55 focus:bg-[#309DDE]/5" />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/40">Email address</label>
                <input type="email" placeholder="hello@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-[#309DDE]/55 focus:bg-[#309DDE]/5" />
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/40">Subject</label>
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full rounded-xl border border-white/10 bg-[#090F1C] px-4 py-3 text-sm text-white/70 outline-none transition focus:border-[#309DDE]/55">
                  <option value="">Select a subject…</option>
                  <option>Partnership Inquiry</option>
                  <option>Host a Gathering</option>
                  <option>Media & Press</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/40">Your message</label>
                <textarea rows={4} placeholder="Tell us what's on your heart…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition focus:border-[#309DDE]/55 focus:bg-[#309DDE]/5" />
              </div>

              <button onClick={handleSubmit} disabled={sending} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#309DDE] to-[#7CC5F0] py-3.5 font-display text-sm font-bold tracking-wide text-[#090F1C] transition hover:opacity-88 active:scale-[.98] disabled:opacity-60">
                {sent ? "Message sent ✓" : sending ? "Sending…" : <> <Send size={15} /> Send Message </>}
              </button>
            </motion.div>

            {/* Info + Socials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-between rounded-3xl border border-white/8 bg-white/[0.03] p-8"
            >
              <div>
                <h2 className="font-display text-lg font-bold text-white">Get in Touch</h2>
                <p className="mb-7 mt-1.5 text-sm leading-relaxed text-white/45">
                  Reach us through any of the channels below.
                </p>

                <div className="flex flex-col gap-3">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/7 bg-white/[0.04] px-4 py-3.5 transition hover:border-[#309DDE]/35">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#309DDE]/25 bg-[#309DDE]/12 text-[#7CC5F0]">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.1em] text-white/35">{item.label}</p>
                        <p className="mt-0.5 text-sm text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8">
                <div className="mb-4 h-px bg-gradient-to-r from-transparent via-[#309DDE]/20 to-transparent" />
                <p className="mb-3 text-[11px] uppercase tracking-[0.12em] text-white/35">Follow the Movement</p>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] text-white/65 transition hover:border-[#309DDE]/50 hover:bg-[#309DDE]/10 hover:text-[#7CC5F0]"
                    >
                      {s.icon}
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-1 overflow-hidden rounded-3xl border border-white/8 lg:col-span-2"
            >
              <div className="relative h-[380px] md:h-[420px]">
                <iframe
    src="https://maps.google.com/maps?q=6.664136607601727,3.2799124234777706&z=17&output=embed"

                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
                />

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-[#090F1C] shadow-xl hover:bg-white/95 transition"
                  >
                    <MapPin size={18} />
                    View in Google Maps
                  </a>
                </div>

                <div className="absolute top-5 right-5 rounded-xl border border-white/20 bg-[#090F1C]/90 px-4 py-2.5 text-sm backdrop-blur-md">
                  <p className="font-display font-bold text-white">WHITEWORSHIP HQ</p>
                  <p className="text-xs text-white/70">3 Ogaga St, Abule Egba, Lagos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}