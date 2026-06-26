import { Reveal } from "./Reveal";
import { Sun } from "lucide-react";




export function Theme() {
  return (
    <section
      id="theme"
      className="relative isolate overflow-hidden py-28 text-white lg:py-40"
      style={{ backgroundColor: "#000000" }}
    >
      <img
        src={"/assets/theme.jpg"}
        alt="theme background"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#070e1c]/60 via-[#070e1c]/95 to-[#070e1c]" />
      {/* Glow backgrounds */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(48,157,222,0.35),transparent_70%)]" />
      <div className="absolute -left-20 top-1/4 -z-10 h-80 w-80 rounded-full bg-primary/30 blur-3xl animate-float" />
      <div
        className="absolute -right-10 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-primary-glow/25 blur-3xl animate-float"
        style={{ animationDelay: "-5s" }}
      />
      {/* Light rays */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50 mix-blend-screen animate-rays"
        style={{
          backgroundImage:
            "conic-gradient(from 200deg at 50% 0%, transparent 0deg, rgba(132,205,240,0.18) 40deg, transparent 80deg, rgba(255,255,255,0.12) 140deg, transparent 200deg, rgba(132,205,240,0.18) 260deg, transparent 320deg)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-white/85 backdrop-blur">
            <Sun className="h-3.5 w-3.5" /> Annual Theme
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-5xl leading-[1.05] sm:text-7xl lg:text-[6.5rem]">
            <span className="text-shimmer">WHITE WORSHIP</span>
            <br />
            <span className="text-white">2026</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80 sm:text-xl">
            Theme:{" "}
            <span className="font-display italic text-white">
              Open Heaven (Anoigo)
            </span>{" "}
            — Matthew 3:16
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <blockquote className="mx-auto mt-14 max-w-3xl">
            <p className="font-display text-2xl italic leading-relaxed text-white/95 sm:text-3xl lg:text-4xl">
              "Arise, shine; for thy light is come, and the glory of the Lord
              is risen upon thee."
            </p>
            <footer className="mt-4 text-sm uppercase tracking-[0.3em] text-primary-glow">
              Isaiah 60:1
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-16 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            The{" "}
            <span className="font-display text-white">IMOLE LIGHT</span>{" "}
            vision represents the call for believers to shine as lights in a
            world seeking hope, truth, and salvation through Jesus Christ.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
