"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

// ─── Particle: ascending light mote ───────────────────────────────────────────
function LightMote({ delay, x, size, duration }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        bottom: "-10px",
        width: size,
        height: size,
        background: "radial-gradient(circle, #ffffff 0%, #00C2FF55 60%, transparent 100%)",
      }}
      initial={{ opacity: 0, y: 0, scale: 0.5 }}
      animate={{
        opacity: [0, 0.9, 0.6, 0],
        y: [0, -320, -480],
        x: [0, (Math.random() - 0.5) * 60, (Math.random() - 0.5) * 90],
        scale: [0.5, 1.2, 0.3],
      }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 1,
        ease: "easeOut",
      }}
    />
  );
}

// ─── Heaven Beam ──────────────────────────────────────────────────────────────
function HeavenBeam({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute inset-0 flex justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Core beam */}
          <motion.div
            className="absolute top-0 w-[2px]"
            style={{ 
              transformOrigin: "top",
              height: "100%",
              background:
                "linear-gradient(to bottom, #ffffff 0%, #00C2FF 20%, #00C2FF88 60%, transparent 100%)",
              filter: "blur(0.5px)",
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: [0, 1, 0.85] }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Wide glow */}
          <motion.div
            className="absolute top-0"
            style={{
              width: "320px",
              height: "100%",
              background:
                "linear-gradient(to bottom, rgba(0,194,255,0.18) 0%, rgba(0,194,255,0.08) 35%, transparent 75%)",
              filter: "blur(28px)",
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 1.8, ease: "easeOut" }}
          />
          {/* Narrow inner glow */}
          <motion.div
            className="absolute top-0"
            style={{
              width: "80px",
              height: "60%",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, transparent 100%)",
              filter: "blur(10px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.7] }}
            transition={{ delay: 0.6, duration: 1.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Horizon Glow (the "open heaven" horizon line) ────────────────────────────
function HorizonGlow({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            top: "38%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "2px",
            background: "linear-gradient(to right, transparent, #00C2FF, #ffffff, #00C2FF, transparent)",
            filter: "blur(1px)",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 1, 0.6] }}
          transition={{ delay: 0.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </AnimatePresence>
  );
}

// ─── Typewriter ───────────────────────────────────────────────────────────────
function Typewriter({ text, delay = 0, className }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && started && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-[2px] align-middle"
        />
      )}
    </span>
  );
}

// ─── Main Loader ──────────────────────────────────────────────────────────────
export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState(0);
  // phase 0 = darkness
  // phase 1 = beam appears
  // phase 2 = logo + title
  // phase 3 = verse + progress
  // phase 4 = done

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 1800),
      setTimeout(() => setPhase(3), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (phase < 3) return;
    const start = Date.now();
    const duration = 3200;
    const raf = requestAnimationFrame(function tick() {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.round(pct));
      if (pct < 100) requestAnimationFrame(tick);
      else {
        setPhase(4);
        setTimeout(() => onComplete?.(), 600);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  const motes = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    delay: Math.random() * 4,
    x: Math.random() * 100,
    size: `${Math.random() * 4 + 2}px`,
    duration: Math.random() * 3 + 3,
  }));

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center"
          style={{ background: "#050D1A" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Star field */}
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 70}%`,
                width: `${Math.random() * 1.5 + 0.5}px`,
                height: `${Math.random() * 1.5 + 0.5}px`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
              animate={{ opacity: [null, Math.random() * 0.6 + 0.1] }}
              transition={{
                delay: Math.random() * 4,
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}

          {/* Heaven beam */}
          <HeavenBeam show={phase >= 1} />
          <HorizonGlow show={phase >= 1} />

          {/* Ascending light motes */}
          {phase >= 2 &&
            motes.map((m) => (
              <LightMote key={m.id} delay={m.delay} x={m.x} size={m.size} duration={m.duration} />
            ))}

          {/* ── Content ── */}
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center select-none">

            {/* Logo mark */}
            <AnimatePresence>
              {phase >= 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center gap-3"
                >
                  {/* Dove / cross emblem */}
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="27" stroke="#00C2FF" strokeWidth="1.2" strokeOpacity="0.5" />
                    {/* Cross */}
                    <line x1="28" y1="10" x2="28" y2="46" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="16" y1="22" x2="40" y2="22" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                    {/* Dove wings suggestion */}
                    <path
                      d="M28 20 C20 16, 12 20, 16 26 C20 22, 28 24, 28 20Z"
                      fill="#00C2FF"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M28 20 C36 16, 44 20, 40 26 C36 22, 28 24, 28 20Z"
                      fill="#00C2FF"
                      fillOpacity="0.6"
                    />
                    {/* Glow center */}
                    <circle cx="28" cy="28" r="3" fill="#ffffff" fillOpacity="0.9" />
                  </svg>

                  {/* WHITEWORSHIP wordmark */}
                  <motion.div
                    initial={{ opacity: 0, letterSpacing: "0.5em" }}
                    animate={{ opacity: 1, letterSpacing: "0.3em" }}
                    transition={{ delay: 0.3, duration: 1.2 }}
                    className="text-white text-xs font-light tracking-[0.3em] uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    White Worship
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main title */}
            <AnimatePresence>
              {phase >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center gap-1"
                >
                  <h1
                    className="text-white font-bold leading-none"
                    style={{
                      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                      fontSize: "clamp(3rem, 8vw, 6rem)",
                      textShadow: "0 0 60px rgba(0,194,255,0.4)",
                    }}
                  >
                    2026
                  </h1>
                  <div
                    className="text-cyan-400 font-semibold tracking-widest uppercase text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.25em" }}
                  >
                    Open Heaven · Anoigo
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Verse */}
            <AnimatePresence>
              {phase >= 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="max-w-xs"
                >
                  <p
                    className="text-white/60 text-xs italic leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <Typewriter
                      text='"And lo, the heavens were opened unto Him…" — Matthew 3:16'
                      delay={0.2}
                    />
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress bar */}
            <AnimatePresence>
              {phase >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex flex-col items-center gap-2 w-48"
                >
                  <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(to right, #00C2FF, #ffffff)",
                        boxShadow: "0 0 8px #00C2FF",
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "linear" }}
                    />
                  </div>
                  <span
                    className="text-white/30 text-[10px] tabular-nums tracking-widest"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {progress}%
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom watermark */}
          <AnimatePresence>
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 text-white/30 text-[10px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                A Global Worship Movement
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}