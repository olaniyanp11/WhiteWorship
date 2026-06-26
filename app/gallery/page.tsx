"use client";

import { PageShell } from "@/components/site/PageShell";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const sizes = ["tall", "med", "short"];

const galleryItems = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `/images/img${i + 1}.jpg`,
  alt: "WHITEWORSHIP 2025",
  caption: "WHITEWORSHIP 2025",
  tag: "Lagos",
  featured: i === 0,
  size: sizes[i % sizes.length],
}));

const filters = ["All", "Lagos"];

const stats = [
  { value: "700+", label: "Gathered" },
  { value: "2+",   label: "Cities" },
];

const sizeMap: Record<string, string> = {
  tall:  "h-[280px]",
  med:   "h-[210px]",
  short: "h-[160px]",
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const featured = galleryItems[0];
  const gridItems = galleryItems.slice(1);

  const filtered =
    activeFilter === "All"
      ? gridItems
      : gridItems.filter((i) => i.tag === activeFilter);

  const allFiltered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.tag === activeFilter);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const navigate = useCallback(
    (dir: number) => {
      if (lightboxIndex === null) return;
      setLightboxIndex((lightboxIndex + dir + allFiltered.length) % allFiltered.length);
    },
    [lightboxIndex, allFiltered.length]
  );

  return (
    <PageShell>
      <section
        id="gallery"
        className="relative overflow-hidden bg-[#090F1C] py-24 pt-32 lg:py-32"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#309DDE]/8 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="inline-flex rounded-full border border-[#309DDE]/30 bg-[#309DDE]/10 px-5 py-2 text-[10px] uppercase tracking-[0.25em] text-[#7CC5F0]">
              Gallery
            </span>

            <h2 className="mt-6 font-display text-5xl font-bold text-white md:text-6xl">
              Moments of{" "}
              <span className="bg-gradient-to-r from-[#309DDE] to-[#7CC5F0] bg-clip-text text-transparent">
                His Presence
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/60">
              Every gathering tells a story of transformed lives, heartfelt
              worship, and unforgettable encounters with God.
            </p>
          </motion.div>

          {/* ── Stats row ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mb-12 flex flex-wrap justify-center gap-10"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="bg-gradient-to-r from-[#309DDE] to-[#7CC5F0] bg-clip-text font-display text-3xl font-bold text-transparent">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/40">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="mb-14 h-px bg-gradient-to-r from-transparent via-[#309DDE]/30 to-transparent" />

          {/* ── Featured card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div
              onClick={() => openLightbox(0)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[#309DDE]/25 transition-all duration-500 hover:border-[#309DDE]/55 hover:shadow-[0_30px_80px_rgba(48,157,222,.22)]"
            >
              <img
                src={featured.src}
                alt={featured.alt}
                className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[420px]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#090F1C]/90 via-[#090F1C]/40 to-transparent" />

              {/* Content */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 max-w-[480px] p-10">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#309DDE]/40 bg-[#309DDE]/20 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#7CC5F0]">
                  ✦ Featured Moment
                </span>
                <h3 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                  WHITEWORSHIP{" "}
                  <span className="bg-gradient-to-r from-[#309DDE] to-[#7CC5F0] bg-clip-text text-transparent">
                    2025
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  The night the atmosphere shifted. Thousands gathered under open skies,
                  united by one heartbeat of worship and surrender.
                </p>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#309DDE] to-[#7CC5F0] px-5 py-2.5 text-[13px] font-semibold text-[#090F1C] transition-opacity hover:opacity-85">
                  View Moment <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Shine sweep */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/8 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </div>
          </motion.div>

          {/* ── Filter pills ── */}
          <div className="mb-10 flex flex-wrap justify-center gap-2.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full border px-5 py-2 text-xs tracking-[0.08em] transition-all duration-200 ${
                  activeFilter === f
                    ? "border-[#309DDE]/50 bg-[#309DDE]/15 text-[#7CC5F0]"
                    : "border-white/10 bg-white/5 text-white/50 hover:border-[#309DDE]/35 hover:text-[#7CC5F0]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* ── Masonry grid ── */}
          <motion.div
            layout
            className="columns-2 gap-4 sm:columns-3 lg:columns-4"
          >
            <AnimatePresence>
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  onClick={() =>
                    openLightbox(
                      allFiltered.findIndex((a) => a.id === item.id)
                    )
                  }
                  className="group mb-4 cursor-pointer break-inside-avoid"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/7 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#309DDE]/50 group-hover:shadow-[0_20px_50px_rgba(48,157,222,.18)]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`w-full object-cover ${sizeMap[item.size]} transition-transform duration-700 group-hover:scale-110`}
                      loading="lazy"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[#7CC5F0]">
                        {item.tag}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold tracking-wide text-white">
                        {item.caption}
                      </p>
                    </div>

                    {/* Shine sweep */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/8 to-transparent transition-transform duration-[900ms] group-hover:translate-x-full" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ── Lightbox ── */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
              onClick={closeLightbox}
            >
              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-[#309DDE]/35 bg-[#309DDE]/15 text-[#7CC5F0] transition hover:bg-[#309DDE]/30 md:left-8"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Image */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative max-h-[85vh] max-w-[85vw]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute -right-4 -top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#309DDE]/40 bg-[#309DDE]/20 text-[#7CC5F0] transition hover:bg-[#309DDE]/40 z-10"
                >
                  <X size={16} />
                </button>

                <img
                  src={allFiltered[lightboxIndex].src}
                  alt={allFiltered[lightboxIndex].alt}
                  className="max-h-[80vh] max-w-full rounded-2xl border border-[#309DDE]/25 object-contain"
                />

                <p className="mt-3 text-center text-xs uppercase tracking-[0.15em] text-[#7CC5F0]">
                  {allFiltered[lightboxIndex].caption}
                </p>
                <p className="mt-1 text-center text-[11px] text-white/30">
                  {lightboxIndex + 1} / {allFiltered.length}
                </p>
              </motion.div>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-[#309DDE]/35 bg-[#309DDE]/15 text-[#7CC5F0] transition hover:bg-[#309DDE]/30 md:right-8"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageShell>
  );
}