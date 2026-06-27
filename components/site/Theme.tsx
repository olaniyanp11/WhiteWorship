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
            <Sun className="h-3.5 w-3.5" /> Annual Theme 2026
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-5xl leading-[1.05] sm:text-7xl lg:text-[6.5rem]">
            <span className="text-shimmer">Open Heaven (Anoigo)</span>
            <br />
           
          </h2>
        </Reveal>

       

        <Reveal delay={0.3}>
          <blockquote className="mx-auto mt-14 max-w-3xl">
            <p className="font-display text-md italic leading-relaxed text-white/95l lg:text-xl">
              “As soon as Jesus was baptized, he went up out of the water. At that moment heaven was opened, and he saw the Spirit of God descending like a dove and alighting on him” 
            </p>
            <footer className="mt-4 text-sm uppercase tracking-[0.3em] text-primary-glow">
             (Matthew 3:16 NIV) 
            </footer>
          </blockquote>
        </Reveal>

     
      </div>
    </section>
  );
}
