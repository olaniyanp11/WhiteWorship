"use client";

import { ArrowRight, Play, Heart, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.play().catch(err => {
        console.warn("Video autoplay blocked:", err);
      });
    };

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      attemptPlay();
    };

    const handleError = () => {
      console.error("Video failed to load");
      setVideoError(true);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    // Try playing immediately if ready
    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
      attemptPlay();
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden"
    >
      {/* Fallback image (always behind) */}


      {/* Video background */}
      <video
        className="absolute inset-0 z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/aboutus.jpg"
      src="/videos/main.mp4"
       />

      {/* Gradient + light overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0b1a2c]/85 via-[#0b1a2c]/55 to-[#0b1a2c]/90" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(48,157,222,0.35),transparent_70%)]" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -left-24 top-1/3 z-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 z-10 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-float"
        style={{ animationDelay: "-6s" }}
      />

      {/* Light rays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 mix-blend-screen opacity-60 animate-rays"
        style={{
          backgroundImage:
            "conic-gradient(from 220deg at 50% -10%, transparent 0deg, rgba(255,255,255,0.18) 30deg, transparent 60deg, rgba(132,205,240,0.22) 110deg, transparent 160deg, rgba(255,255,255,0.14) 210deg, transparent 260deg, rgba(132,205,240,0.18) 310deg, transparent 360deg)",
        }}
      />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-32 pb-24 lg:px-10 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur">
            <Heart className="h-3.5 w-3.5" /> A Global Worship Movement
          </span>

          <h1 className="mt-8 font-display text-5xl leading-[1.02] text-white sm:text-6xl lg:text-[5.5rem]">
            Worship Him <span className="text-shimmer">In The Evening</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
            A Global Worship Experience United by Christ. WHITE gathers
            believers — across tribe, denomination, language and background —
            into sincere, unhindered worship that transforms lives through
            His presence.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 grid gap-3 font-display text-3xl text-white/95 sm:text-4xl lg:text-5xl"
          >
            <span>Experience Worship.</span>
            <span className="text-shimmer">Encounter God.</span>
            <span>Illuminate the World.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-[1.04] active:scale-[0.97]"
            >
              Join The Experience
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15"
            >
              <Play className="h-4 w-4" /> Watch Online
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/5"
            >
              Partner With Us
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          aria-label="Scroll to About"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
