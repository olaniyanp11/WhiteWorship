"use client";

import { PageShell } from "@/components/site/PageShell";
import { motion } from "framer-motion";

export default function Gallery() {
  const galleryItems = [
    { id: 1, src: "/images/img1.jpg", alt: "Worship night atmosphere", caption: "WHITEWORSHIP 2025" },
    { id: 2, src: "/images/img2.jpg", alt: "Crowd in worship", caption: "Lagos • 2025" },
    { id: 3, src: "/images/img3.jpg", alt: "Stage worship", caption: "Intimate Worship" },
    { id: 4, src: "/images/img4.jpg", alt: "Hands raised", caption: "Global Gathering" },
    { id: 5, src: "/images/img5.jpg", alt: "Prayer moment", caption: "Deep Worship" },
    { id: 6, src: "/images/img6.jpg", alt: "Audience praise", caption: "Abuja • 2024" },
    { id: 7, src: "/images/img7.jpg", alt: "Worship leaders", caption: "United in Spirit" },
    { id: 8, src: "/images/img8.jpg", alt: "Powerful praise", caption: "Accra • 2025" },
    { id: 9, src: "/images/img9.jpg", alt: "Group worship", caption: "Spirit Led" },
    { id: 10, src: "/images/img10.jpg", alt: "Night atmosphere", caption: "London Gathering" },
    { id: 11, src: "/images/img11.jpg", alt: "Worship moment", caption: "Young Generation" },
    { id: 12, src: "/images/img12.jpg", alt: "Mass praise", caption: "One Voice" },
  ];

  return (
    <PageShell>
      <section
        id="gallery"
        className="relative overflow-hidden bg-[#090F1C] py-24 pt-32 lg:py-32"
      >
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#309DDE]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <span className="inline-flex rounded-full border border-[#309DDE]/30 bg-[#309DDE]/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#7CC5F0]">
              Gallery
            </span>

            <h2 className="mt-6 font-display text-5xl font-bold text-white md:text-6xl">
              Moments of{" "}
              <span className="bg-gradient-to-r from-[#309DDE] to-[#7CC5F0] bg-clip-text text-transparent">
                His Presence
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Every gathering tells a story of transformed lives, heartfelt
              worship, and unforgettable encounters with God.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#309DDE]/50 group-hover:shadow-[0_25px_60px_rgba(48,157,222,.18)]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-sm font-medium tracking-wide text-white">
                      {item.caption}
                    </p>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}