import { Reveal } from "./Reveal";
import { Sparkles, HeartHandshake, TrendingUp, Globe2 } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Experience God's Presence", body: "Encounter God through heartfelt worship and prayer." },
  { icon: HeartHandshake, title: "Connect With Believers", body: "Join a diverse community of worshippers from different backgrounds and nations." },
  { icon: TrendingUp, title: "Grow Spiritually", body: "Be inspired, encouraged, and transformed through powerful worship experiences." },
  { icon: Globe2, title: "Impact The World", body: "Become part of a movement committed to spreading the Gospel through worship." },
];

export function Attend() {
  return (
    <section className="relative bg-secondary/40 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Why Attend WHITE
          </span>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl lg:text-6xl">
            More than an event. A <span className="text-gradient-brand">divine encounter.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl bg-card p-7 shadow-[0_8px_30px_-12px_rgba(48,157,222,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow transition-transform duration-500 group-hover:scale-110">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{it.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
