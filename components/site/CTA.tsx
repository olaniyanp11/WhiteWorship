import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background py-28 lg:py-36">
      <div className="bg-radial-light absolute inset-0 -z-10" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/15 to-primary-glow/15 blur-3xl animate-pulse-glow" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Be Part Of It
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Be Part of the <span className="text-gradient-brand">Movement.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Whether you're attending in person, joining online, serving,
            partnering, or supporting the vision — there's a place for you at
            WHITE.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <blockquote className="mx-auto mt-12 max-w-3xl border-y border-border/60 py-10">
            <p className="font-display text-2xl italic leading-relaxed text-ink sm:text-3xl lg:text-4xl">
              "Together, let's worship, unite, and illuminate the world for
              Christ."
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-[1.04] active:scale-[0.97]"
            >
              Register Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              Become a Partner
            </a>
            <a
              href="mailto:hello@whiteworship.org"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-ink-soft transition-colors hover:text-primary"
            >
              Contact Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
