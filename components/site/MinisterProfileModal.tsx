"use client";

// import { X, Instagram, Youtube, Facebook } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import type { GuestMinister } from "@/data/guest-ministers";
import { AnimatePresence, motion } from "framer-motion";

interface MinisterProfileModalProps {
  minister: GuestMinister | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MinisterProfileModal({
  minister,
  isOpen,
  onClose,
}: MinisterProfileModalProps) {
  if (!minister) return null;

  // const socialIcons = [
  //   { Icon: Instagram, url: minister.socials.instagram, label: "Instagram" },
  //   { Icon: Youtube, url: minister.socials.youtube, label: "YouTube" },
  //   { Icon: Facebook, url: minister.socials.facebook, label: "Facebook" },
  // ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="
          w-[98vw]
          sm:w-[95vw]
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
          overflow-x-hidden
          rounded-2xl
          sm:rounded-3xl
          border border-white/10
          bg-[#090F1C]
          p-0
          shadow-[0_32px_80px_-8px_rgba(0,0,0,0.9),0_0_0_0.5px_rgba(255,255,255,0.08)]
          focus:outline-none
        "
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Top Glow */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-64"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(48,130,210,.18), transparent)",
                }}
              />

              {/* Close */}
              <DialogClose asChild>
                <button
                  aria-label="Close"
                  className="
                    absolute right-5 top-5 z-50
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-black/40
                    text-white/70
                    backdrop-blur-md
                    transition-all
                    hover:border-white/20
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  ✕
                </button>
              </DialogClose>

              <div className="relative z-10 flex flex-col md:flex-row">
                {/* IMAGE */}
                <div className="relative h-[280px] sm:h-[320px] w-full md:h-auto md:w-[340px] lg:w-[400px] flex-shrink-0">
                  <Image
                    src={minister.image}
                    alt={minister.name}
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#090F1C] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#090F1C]/30" />
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-10">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.35em] text-blue-400">
                      Guest Minister
                    </p>

                    <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-white lg:text-5xl">
                      {minister.name}
                    </h2>

                    <p className="mt-3 text-base sm:text-lg font-medium text-blue-400">
                      {minister.ministry}
                    </p>

                    <p className="mt-1 text-sm text-white/45">
                      {minister.country}
                    </p>
                  </div>

                  {/* Bio */}
                  <div className="mt-6 sm:mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
                    <h3 className="mb-3 sm:mb-4 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                      Biography
                    </h3>

                    <p className="leading-6 sm:leading-8 text-white/75">
                      {minister.bio}
                    </p>
                  </div>

                  {/* Scripture */}
                  <div className="mt-6 sm:mt-8 border-l-2 border-blue-400 pl-4 sm:pl-5">
                    <p className="text-base sm:text-lg italic leading-6 sm:leading-8 text-white/70">
                      &ldquo;{minister.scripture}&rdquo;
                    </p>

                    <p className="mt-3 sm:mt-4 text-[0.7rem] sm:text-xs uppercase tracking-[0.3em] text-blue-400/70">
                      Scripture
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="my-6 sm:my-8 border-t border-white/10" />

                  {/* Socials */}
                  <div className="flex gap-3">
                    {/* {socialIcons.map(({ Icon, url, label }) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex h-11 w-11 items-center justify-center
                          rounded-full
                          border border-white/10
                          text-white/60
                          transition-all
                          hover:scale-110
                          hover:border-blue-400
                          hover:bg-blue-400/10
                          hover:text-white
                        "
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))} */}
                  </div>
                </div>
              </div>

              {/* Bottom Glow */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
                style={{
                  background:
                    "linear-gradient(to top, rgba(48,130,210,.08), transparent)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}