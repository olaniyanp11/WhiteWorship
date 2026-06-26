import { Reveal } from "./Reveal";
import { Eye, Compass, Check } from "lucide-react";
import Image from "next/image";

const missions = [
  "Inspire deeper intimacy with God",
  "Strengthen faith and Christian fellowship",
  "Share the Gospel of Jesus Christ",
  "Unite believers across cultures",
  "Equip people to live Christ-centered lives",
];

const stats = [
  { value: "40+", label: "Nations reached through worship" },
  { value: "12K", label: "Believers gathered annually" },
];

export function VisionMission() {
  return (
    <section
      id="vision"
      className="relative py-20 lg:py-28"
      style={{ background: "#090F1C" }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* Header */}
        <Reveal className="mb-10">
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-blue-400">
            Vision &amp; Mission
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium leading-[1.15] text-white sm:text-5xl">
            A movement with{" "}
            <span className="text-blue-400">eternal purpose.</span>
          </h2>
        </Reveal>

        {/* Bento grid */}
        <div className="grid grid-cols-2 grid-rows-[auto_auto] gap-2.5">

          {/* Vision — tall left cell with image background */}
          <Reveal className="col-span-1 row-span-2">
            <article className="relative h-full min-h-[460px] overflow-hidden rounded-2xl border border-white/[0.08]">
              <Image
                src="/images/aboutus.jpg"
                alt="Worship gathering with raised hands"
                fill
                className="object-cover opacity-45"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* scrim */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(9,15,28,0.05) 0%, rgba(9,15,28,0.7) 55%, #090F1C 100%)",
                }}
              />
              {/* content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7 lg:p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[11px] border border-blue-400/25 bg-blue-400/[0.12] text-blue-400">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-display text-[1.35rem] font-medium text-white">
                  Our Vision
                </h3>
                <p className="mt-2.5 text-[0.875rem] leading-relaxed text-white/65">
                  To unite believers around the world through genuine worship
                  and raise a generation passionately devoted to God, His
                  Kingdom, and His purpose.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Mission list — top right */}
          <Reveal delay={0.1} className="col-span-1 row-span-1">
            <article className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 lg:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] border border-blue-400/25 bg-blue-400/[0.1] text-blue-400">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-medium text-white">
                  Our Mission
                </h3>
              </div>
              <ul className="space-y-2.5">
                {missions.map((m) => (
                  <li key={m} className="flex items-start gap-2.5 text-[0.84rem] leading-relaxed text-white/65">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-blue-400/25 bg-blue-400/[0.1] text-blue-400">
                      <Check className="h-3 w-3" />
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Stats — bottom right */}
          <Reveal delay={0.2} className="col-span-1 row-span-1">
            <div className="grid h-full grid-cols-2 gap-2.5">
              {stats.map(({ value, label }) => (
                <div
                  key={value}
                  className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 lg:p-6"
                >
                  <p className="font-display text-3xl font-medium text-white">
                    {value.replace(/(\d+)(\D*)/, (_, n, s) => (
                      // render the number in white, suffix in blue
                      `${n}`
                    ))}
                    <span className="text-blue-400">
                      {value.replace(/\d+/, "")}
                    </span>
                  </p>
                  <p className="mt-2 text-xs leading-snug text-white/40">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}