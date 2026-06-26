"use client";

import { Reveal } from "./Reveal";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const aboutImages = [
  { src: "/assets/about.jpg", alt: "WHITE worshippers with hands raised in worship" },
  { src: "/images/aboutus.jpg", alt: "Worship gathering" },
  { src: "/images/img1.jpg", alt: "Worship experience" },
  { src: "/images/img2.jpg", alt: "Congregation in worship" },
  { src: "/images/img3.jpg", alt: "Worship team" },
  { src: "/images/img4.jpg", alt: "Worshippers in prayer" },
  { src: "/images/img5.jpg", alt: "Worship atmosphere" },
  { src: "/images/img6.jpg", alt: "Worship service" },
  { src: "/images/img7.jpg", alt: "Worship moment" },
  { src: "/images/img8.jpg", alt: "Worship gathering" },
  { src: "/images/img9.jpg", alt: "Worship experience" },
  { src: "/images/img10.jpg", alt: "Worship service" },
  { src: "/images/img11.jpg", alt: "Worship atmosphere" },
  { src: "/images/img12.jpg", alt: "Worship moment" },
];

export function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="about" className="relative overflow-hidden bg-background py-28 lg:py-36">
      <div className="bg-radial-light absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 to-primary-glow/25 blur-2xl" />
            <div className="relative h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] overflow-hidden rounded-[2rem] shadow-elegant">
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={currentIndex}
                  src={aboutImages[currentIndex].src}
                  alt={aboutImages[currentIndex].alt}
                  loading="lazy"
                  width={1280}
                  height={1600}
                  className="h-full w-full object-cover"
                  initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {aboutImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl glass px-6 py-5 shadow-elegant md:block">
              <p className="font-display text-3xl text-ink">700+ People</p>
              <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">gathered</p>
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
              Our mission is simple  to create opportunities for people to
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
