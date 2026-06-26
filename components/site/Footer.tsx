// import { Instagram, Youtube, Facebook, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import { Mail } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#vision", label: "Vision" },
  { href: "#experience", label: "Experience" },
  { href: "#theme", label: "Theme" },
  { href: "#contact", label: "Contact" },
];

// const socials = [
//   { Icon: Instagram, href: "#", label: "Instagram" },
//   { Icon: Youtube, href: "#", label: "YouTube" },
//   { Icon: Facebook, href: "#", label: "Facebook" },
//   { Icon: Twitter, href: "#", label: "Twitter" },
// ];

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white" style={{ backgroundColor: "#0a1424" }}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(48,157,222,0.18),transparent_70%)]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <a href="#home" className="flex items-center gap-2.5">
            <Image
              src={"/assets/logo-white.png"}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full transition-transform duration-300 hover:scale-105"
            />
            <span className="font-display text-2xl tracking-tight">WHITE</span>
          </a>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
            Worship Him In The Evening — a global worship movement uniting
            believers across nations to encounter God, grow in Christ, and
            illuminate the world.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {/* {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:scale-110 hover:border-primary/60 hover:bg-primary/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))} */}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base text-white">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/65 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-white">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary-glow" />
              hello@whiteworship.org
            </li>
            <li>Lagos, Nigeria · Worldwide</li>
            <li className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
              >
                Join WHITE
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Worship Him In The Evening. All rights reserved.</p>
          <p className="font-display italic">Anoigo</p>
        </div>
      </div>
    </footer>
  );
}
