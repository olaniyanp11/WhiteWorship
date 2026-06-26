"use client";

// import { X, Instagram, Youtube, Facebook } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import type { GuestMinister } from "@/data/guest-ministers";
import { motion, AnimatePresence } from "framer-motion";


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
          max-w-2xl w-full
          border border-white/10
          bg-[#090F1C]
          p-0
          shadow-[0_32px_80px_-8px_rgba(0,0,0,0.9),0_0_0_0.5px_rgba(255,255,255,0.08)]
          overflow-hidden rounded-2xl
          focus:outline-none
        "
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Top gradient glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-64"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(48,130,210,0.18) 0%, transparent 100%)",
                }}
              />

              <div className="relative z-10 flex flex-col items-center px-8 pb-8 pt-10">
                {/* Close */}
                <DialogClose asChild>
                  <button
                    aria-label="Close"
                    className="
                      absolute right-5 top-5
                      inline-flex h-9 w-9 items-center justify-center
                      rounded-full
                      border border-white/10
                      bg-white/5 text-white/60
                      backdrop-blur-sm
                      transition-all duration-200
                      hover:bg-white/12 hover:text-white hover:border-white/20
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50
                    "
                  >
                    {/* <X className="h-4 w-4" /> */}
                  </button>
                </DialogClose>

                {/* Portrait */}
                <div
                  className="
                    mb-5 h-36 w-36
                    overflow-hidden rounded-2xl
                    border border-white/15
                    shadow-[0_8px_32px_rgba(0,0,0,0.6)]
                  "
                >
                  
                  <Image
                    src={minister.image}
                    alt={minister.name}
                    width={144}
                    height={144}
                    className="h-full w-full object-cover"
                    sizes="144px"
                    priority
                  />
                </div>

                {/* Name / Ministry / Country */}
                <h2 className="font-display text-[1.75rem] font-medium leading-tight text-white text-center">
                  {minister.name}
                </h2>
                <p className="mt-1 text-[0.9rem] font-medium text-blue-400 text-center">
                  {minister.ministry}
                </p>
                <p className="mt-0.5 text-[0.8rem] text-white/40 text-center">
                  {minister.country}
                </p>

                {/* Bio */}
                <div
                  className="
                    mt-6 w-full
                    rounded-xl
                    border border-white/[0.07]
                    bg-white/[0.03]
                    px-5 py-4
                  "
                >
                  <p className="text-[0.875rem] leading-relaxed text-white/75">
                    {minister.bio}
                  </p>
                </div>

                {/* Scripture */}
                <div className="mt-6 w-full text-center">
                  <p className="text-[0.875rem] italic leading-relaxed text-white/65">
                    &ldquo;{minister.scripture}&rdquo;
                  </p>
                  <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-blue-400/55">
                    Scripture
                  </p>
                </div>

                {/* Divider */}
                <div
                  aria-hidden
                  className="mt-6 w-full border-t border-white/[0.06]"
                />

                {/* Social icons */}
                <div className="mt-6 flex gap-3">
                  {/* {socialIcons.map(({ Icon, url, label }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="
                        group inline-flex h-11 w-11
                        items-center justify-center
                        rounded-full
                        border border-white/10
                        text-white/55
                        transition-all duration-200
                        hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-white hover:scale-110
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50
                      "
                    >
                      <Icon className="h-[1.1rem] w-[1.1rem]" />
                    </a>
                  ))} */}
                </div>
              </div>

              {/* Bottom glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
                style={{
                  background:
                    "linear-gradient(to top, rgba(48,130,210,0.07) 0%, transparent 100%)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}