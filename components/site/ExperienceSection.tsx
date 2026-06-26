"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import heroImage from "@/assets/hero.jpg";

export default function ExperienceSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlayThrough = () => {
      video.play().catch(err => {
        console.error("ExperienceSection video play error:", err);
        setVideoError(true);
      });
    };

    video.addEventListener("canplaythrough", handleCanPlayThrough);
    
    return () => video.removeEventListener("canplaythrough", handleCanPlayThrough);
  }, []);

  return (
    <section className="relative isolate overflow-hidden py-32">
      {/* Background Video / Image */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/videos/main.mp4"
          poster={heroImage.src}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setVideoError(true)}
        />
      )}
      {videoError && (
        <img
          src={heroImage.src}
          alt="Experience background"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07111D]/90 via-[#07111D]/60 to-[#309DDE]/30" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#309DDE]/20 blur-[180px]" />

      <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl items-center px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-[#309DDE]/30 bg-[#309DDE]/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#7CC5F0]">
            Worship Experience
          </span>

          <h2 className="mt-8 font-display text-5xl font-bold leading-tight text-white lg:text-7xl">
            One Sound.
            <br />
            <span className="bg-gradient-to-r from-[#309DDE] to-[#8ED8FF] bg-clip-text text-transparent">
              One Worship.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">
            Every WHITE gathering creates an atmosphere where lives are
            transformed, hearts are restored, and Christ is exalted through
            sincere worship.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <button className="group inline-flex items-center gap-3 rounded-full bg-[#309DDE] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:shadow-[0_20px_50px_rgba(48,157,222,.45)]">
              Join This Year's Experience

              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>

            <button className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
              <Play className="h-5 w-5 fill-white" />
              Watch Highlights
            </button>
          </div>

          <div className="mt-16 flex gap-10">
            <div>
              <h3 className="text-4xl font-bold text-white">20K+</h3>
              <p className="mt-2 text-white/60">
                Worshippers Reached
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">15+</h3>
              <p className="mt-2 text-white/60">
                Guest Ministers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">5+</h3>
              <p className="mt-2 text-white/60">
                Nations Represented
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
