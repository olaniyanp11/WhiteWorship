import { Reveal } from "./Reveal";
import { Music2, Radio, Users, ArrowUpRight } from "lucide-react";

const items = [
  {
    icon: Music2,
    title: "Live Worship Events",
    body: "Spirit-filled worship concerts featuring gospel ministers, choirs, musicians and worship leaders gathered as one body.",
  },
  {
    icon: Radio,
    title: "Online Worship Broadcasts",
    body: "Connecting believers worldwide through digital worship experiences and livestreams from anywhere on earth.",
  },
  {
    icon: Users,
    title: "Community Impact",
    body: "Encouraging unity, discipleship and Kingdom-minded living through worship-centered initiatives and outreach.",
  },
];

export function Experiences() {
  return (
    <section id="experience" className="relative overflow-hidden bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Worship Experiences
          </span>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl lg:text-6xl">
            Three ways to <span className="text-gradient-brand">encounter Him.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-elegant">
                <div className="absolute right-6 top-6 text-ink-soft/40 transition-all duration-500 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 to-primary-glow/12 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary-glow group-hover:text-primary-foreground group-hover:shadow-glow">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">{it.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{it.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
