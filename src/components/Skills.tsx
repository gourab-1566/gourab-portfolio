import { motion } from "framer-motion";
import { Code2, Wrench, Palette } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    items: [
      { n: "Python", lvl: 85 },
      { n: "C++", lvl: 70 },
      { n: "Java", lvl: 60 },
      { n: "HTML", lvl: 95 },
      { n: "CSS", lvl: 88 },
      { n: "JavaScript", lvl: 55, learning: true },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & AI",
    items: [
      { n: "GitHub", lvl: 80 },
      { n: "VS Code", lvl: 90 },
      { n: "Claude", lvl: 85 },
      { n: "ChatGPT", lvl: 90 },
      { n: "Gemini", lvl: 75 },
      { n: "Lovable", lvl: 88 },
    ],
  },
  {
    icon: Palette,
    title: "Creative",
    items: [
      { n: "Pencil Sketch Art", lvl: 92 },
      { n: "Video Editing", lvl: 75 },
      { n: "Content Creation", lvl: 70 },
      { n: "Visual Design", lvl: 78 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-x-0 top-1/2 h-[400px] -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          index="02"
          eyebrow="Skills"
          title={
            <>
              Tools of the <span className="text-gradient-red">craft.</span>
            </>
          }
          description="A growing toolkit spanning code, AI, and creative work — picked up through curiosity and constant building."
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-card p-8 shadow-card transition-all hover:border-primary/30"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <g.icon size={20} className="relative" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">{g.title}</h3>
              </div>
              <div className="space-y-5">
                {g.items.map((it) => (
                  <div key={it.n}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-foreground">
                        {it.n}
                        {it.learning && (
                          <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                            Learning
                          </span>
                        )}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{it.lvl}%</span>
                    </div>
                    <div className="h-[3px] overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${it.lvl}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="h-full bg-gradient-red shadow-soft-glow"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
