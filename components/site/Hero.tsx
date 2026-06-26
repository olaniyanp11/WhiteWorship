"use client";

import { ArrowRight, Play, Heart } from "lucide-react";
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
      className="relative isolate flex min-h-screen w-full items-end overflow-hidden"
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0b1a2c]/1 via-[#040b11]/0 to-[#040b11]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(48,157,222,0.35),transparent_70%)]" />

     
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pb-16 pt-0 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur sm:px-4 sm:py-1.5 sm:text-xs">
            <Heart className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> A Global Worship Movement
          </span>

          <h1 className="mt-6 font-display text-3xl leading-[1.05] text-white sm:mt-8 sm:text-5xl lg:text-[5.5rem]">
            WHITEWORSHIP <span className="text-shimmer">2026</span>
          </h1>

          {/* <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
            A Global Worship Experience United by Christ. WHITE gathers
            believers — across tribe, denomination, language and background —
            into sincere, unhindered worship that transforms lives through
            His presence.
          </p> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 grid gap-3 font-display text-3xl text-white/95 sm:text-4xl lg:text-5xl"
          >
            <span>Experience Worship.</span>
            <span className="text-shimmer">Encounter God.</span>
            <span>Illuminate the World.</span>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-[1.04] active:scale-[0.97] sm:px-7 sm:py-3.5"
            >
              Join The Experience
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#experience"
              className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15 sm:px-7 sm:py-3.5"
            >
              <Play className="h-4 w-4" /> Watch Online
            </a>
          
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
