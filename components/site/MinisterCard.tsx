"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { GuestMinister } from "@/data/guest-ministers";
import {motion} from "framer-motion"

interface MinisterCardProps {
  minister: GuestMinister;
  index: number;
  onClick: () => void;
}

export function MinisterCard({
  minister,
  index,
  onClick,
}: MinisterCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      onClick={onClick}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_40px_-12px_rgba(48,157,222,0.25)] hover:-translate-y-2 text-left"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-b from-primary/20 to-transparent">
        <Image
          src={minister.image}
          alt={minister.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" /> */}
      </div>

      {/* Content Container */}
      <div className="relative p-6">
        {/* Name */}
        <h3 className="font-display text-xl text-white transition-colors group-hover:text-primary">
          {minister.name}
        </h3>

        {/* Ministry */}
        <p className="mt-1 text-sm font-medium text-primary/90 truncate">
          {minister.ministry}
        </p>

        {/* Country */}
        <p className="mt-1 text-xs text-white/70 truncate">{minister.country}</p>

        {/* Button */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/20 px-4 py-2 text-xs font-semibold text-primary transition-all duration-300 group-hover:from-primary group-hover:to-primary-glow group-hover:text-primary-foreground group-hover:shadow-glow">
          View Profile
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Floating accent on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 transition-all duration-500 group-hover:from-primary/10 group-hover:to-primary/5" />
    </motion.button>
  );
}
