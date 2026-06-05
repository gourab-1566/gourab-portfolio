import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import sketchDidi from "@/assets/sketch-didi.jpg.asset.json";
import sketchLeo from "@/assets/sketch-leo.jpg.asset.json";
import sketchShiva from "@/assets/sketch-shiva.jpg.asset.json";
import sketchThalapathy from "@/assets/sketch-thalapathy.jpg.asset.json";
import sketchEye from "@/assets/sketch-eye.jpg.asset.json";

const sketches = [
  { src: sketchShiva.url, title: "Shiva", year: "2026" },
  { src: sketchDidi.url, title: "Didi", year: "2026" },
  { src: sketchThalapathy.url, title: "Thalapathy", year: "2026" },
  { src: sketchLeo.url, title: "The Smoker", year: "2025" },
  { src: sketchEye.url, title: "Caged Sight", year: "2025" },
];

const eca = [
  { t: "Pencil Sketch Artist", d: "6+ years of hyperrealistic graphite portraits." },
  { t: "Science Club Leader", d: "Leading peer experiments and presentations." },
  { t: "Cricket Club Leader", d: "Captain on the field. Strategy off it." },
  { t: "Content Creator", d: "Building an audience around tech and creativity." },
  { t: "Cricket Player", d: "Competitive school cricket since early years." },
  { t: "Chess Enthusiast", d: "Thinking 5 moves ahead — in life and code." },
];

export function ECA() {
  return (
    <section id="eca" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="05"
          eyebrow="Beyond Code"
          title={
            <>
              A life lived in <span className="text-gradient-red">many mediums.</span>
            </>
          }
          description="Sketch, sport, leadership, and craft — the same curiosity expressed in different languages."
        />

        {/* Sketch gallery */}
        <div className="mt-20">
          <div className="mb-6 flex items-center justify-between">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              Pencil Sketches / 6+ Years
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Selected works
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {sketches.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/8 bg-onyx shadow-card"
              >
                <img
                  src={s.src}
                  alt={s.title}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <div className="font-display text-sm font-medium">{s.title}</div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      {s.year}
                    </div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ECA cards */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eca.map((e, i) => (
            <motion.div
              key={e.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-card p-6 shadow-card transition-all hover:border-primary/30"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <h3 className="relative font-display text-lg font-semibold tracking-tight">{e.t}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
