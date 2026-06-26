"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { MinisterCard } from "./MinisterCard";
import { MinisterProfileModal } from "./MinisterProfileModal";
import { guestMinisters } from "@/data/guest-ministers";
import type { GuestMinister } from "@/data/guest-ministers";

export function GuestMinisters() {
  const [selectedMinister, setSelectedMinister] = useState<GuestMinister | null>(
    null
  );

  return (
    <section
      id="ministers"
      className="relative overflow-hidden bg-[#090F1C] py-28 lg:py-40"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-30" />
        <div className="absolute -right-32 bottom-1/3 h-96 w-96 rounded-full bg-primary-glow/10 blur-3xl opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Anointed Leaders
          </span>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            Guest <span className="text-shimmer">Ministers</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Meet the anointed ministers leading worship at this year's Worship
            Him In The Evening (WHITE). Each carries a unique sound and calling,
            united by one purpose—to glorify Christ through worship.
          </p>
        </Reveal>

        {/* Ministers Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guestMinisters.map((minister, index) => (
            <MinisterCard
              key={minister.id}
              minister={minister}
              index={index}
              onClick={() => setSelectedMinister(minister)}
            />
          ))}
        </div>

        {/* Decorative bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-lg rounded-2xl border border-white/10 bg-gradient-to-br from-[#090F1C]/5 to-[#090F1C]/0 p-8 text-center backdrop-blur"
        >
          <p className="text-base text-white/85">
            These worship leaders embody the heart of WHITEWORSHIP, bringing diverse
            expressions of worship united in Christ.
          </p>
        </motion.div>
      </div>

      {/* Minister Profile Modal */}
      <MinisterProfileModal
        minister={selectedMinister}
        isOpen={!!selectedMinister}
        onClose={() => setSelectedMinister(null)}
      />
    </section>
  );
}
