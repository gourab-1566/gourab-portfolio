import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import gourabAsset from "@/assets/gourab.jpeg.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
        style={{ background: "var(--gradient-radial-red)", filter: "blur(40px)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1fr_1.3fr]">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-elegant">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-transparent via-transparent to-primary/30 mix-blend-overlay" />
            <img
              src={gourabAsset.url}
              alt="Gourab Deb"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Portrait / 01
                </div>
                <div className="font-display text-lg font-medium">Gourab Deb</div>
              </div>
              <div className="rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                Bangladesh
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 glass-strong rounded-2xl p-4 shadow-elegant"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Sparkles size={18} />
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                  Currently
                </div>
                <div className="text-sm">Building Velora</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
              <span className="relative h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              Available for collaborations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-tight"
          >
            Hi, I'm{" "}
            <span className="text-gradient-red">Gourab Deb</span>
            <span className="mt-3 block text-[clamp(1.1rem,2vw,1.6rem)] font-normal text-muted-foreground">
              Student Developer & Future Software Entrepreneur
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I build software, explore AI, and turn ideas into products that solve
            real-world problems. Curious by nature, relentless by design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-red px-7 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-soft-glow transition-all hover:shadow-glow"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:border-primary/60 hover:bg-primary/5"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/5 pt-8"
          >
            {[
              { v: "6+", l: "Years sketching" },
              { v: "42+", l: "GH contributions" },
              { v: "3+", l: "Live projects" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-gradient-red">{s.v}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-24 overflow-hidden border-y border-white/5 bg-onyx/40 py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12 px-6 font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
              {["Curious Builder", "Problem Solver", "Student Developer", "Future Entrepreneur", "AI Explorer", "Pencil Artist", "Cricket Captain", "Chess Player"].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  <span>{w}</span>
                  <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
