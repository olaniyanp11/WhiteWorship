import { Reveal } from "./Reveal";




export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-28 lg:py-36">
      <div className="bg-radial-light absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 to-primary-glow/25 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] shadow-elegant">
              <img
                src={"/assets/about.jpg"}
                alt="WHITE worshippers with hands raised in worship"
                loading="lazy"
                width={1280}
                height={1600}
                className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.04]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl glass px-6 py-5 shadow-elegant md:block">
              <p className="font-display text-3xl text-ink">10+ Nations</p>
              <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">Worshipping as one</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Our Story
          </span>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl lg:text-6xl">
            Born from a vision of <span className="text-gradient-brand">united worship.</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Worship Him In The Evening (WHITE) was birthed from a God-given
              vision to create a platform where people gather as one body in
              Christ and experience authentic worship.
            </p>
            <p>
              What began as a vision has grown into a worship movement that
              reaches people across nations through both physical and digital
              gatherings.
            </p>
            <p>
              Our mission is simple — to create opportunities for people to
              encounter God through worship and be inspired to live for His
              glory.
            </p>
          </div>
          <blockquote className="mt-10 border-l-2 border-primary/60 pl-6 font-display text-xl italic text-ink">
            "At WHITE, worship is more than music — it is a lifestyle of
            surrender, devotion, and fellowship with God."
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
