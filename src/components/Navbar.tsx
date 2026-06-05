import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#eca", label: "ECA" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-onyx">
            <span className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
            <span className="relative text-foreground">G</span>
            <span className="relative -ml-0.5 text-primary">D</span>
          </span>
          <span className="hidden sm:inline tracking-[0.3em] text-sm">GOURAB</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-1/2" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:bg-primary hover:shadow-soft-glow"
        >
          Let's Talk
        </a>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass-strong border-t border-white/5"
        >
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
