import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const timeline = [
  { year: "2018", t: "Started Pencil Sketching", side: "past" },
  { year: "2022", t: "Started Learning Programming", side: "past" },
  { year: "2024", t: "Participated in Science Fair", side: "past" },
  { year: "2024", t: "Joined Olympiad Activities", side: "past" },
  { year: "2025", t: "Started Building Real Projects", side: "past" },
  { year: "2026", t: "Created Velora", side: "present" },
  { year: "Future", t: "Build AI Startups", side: "future" },
];

const phases = [
  { k: "Present", v: "Learning, Building, Exploring" },
  { k: "Next", v: "Developing Better Products" },
  { k: "Future", v: "Building Startups" },
  { k: "Long-Term", v: "Creating Global Impact" },
];

export function FutureVision() {
  return (
    <section id="vision" className="relative py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="06"
          eyebrow="Future Vision"
          title={
            <>
              Building <span className="text-gradient-red">beyond today.</span>
            </>
          }
          description="I believe technology should not only solve problems but also create opportunities for millions of people."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <p>
              My goal is to become a <span className="text-foreground">software entrepreneur</span> and build innovative technology products that make a meaningful impact on people's lives.
            </p>
            <p>
              I am fascinated by <span className="text-foreground">artificial intelligence</span>, software development and product creation. As I continue learning and building, I aim to create startups that solve real-world challenges, empower communities and contribute to the future of technology.
            </p>
            <p>
              This journey is not only about building software. It is about{" "}
              <span className="text-gradient-red font-medium">building solutions, creating opportunities, and making a lasting impact.</span>
            </p>

            <div className="!mt-12 grid grid-cols-2 gap-4">
              {phases.map((p, i) => (
                <motion.div
                  key={p.k}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-white/8 bg-gradient-card p-5 shadow-card"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{p.k}</div>
                  <div className="mt-2 font-display text-base text-foreground">{p.v}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />
            <div className="space-y-7">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year + t.t}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex items-start gap-6 pl-2"
                >
                  <div className="relative mt-1.5 flex-shrink-0">
                    <div
                      className={`h-3.5 w-3.5 rounded-full border ${
                        t.side === "future"
                          ? "border-primary bg-primary shadow-soft-glow"
                          : t.side === "present"
                            ? "border-primary bg-onyx"
                            : "border-white/30 bg-onyx"
                      }`}
                    />
                    {t.side === "future" && (
                      <div className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                    )}
                  </div>
                  <div className="flex-1 rounded-xl border border-white/5 bg-onyx/40 p-4 glass">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                      {t.year}
                    </div>
                    <div className="mt-1 font-display text-base text-foreground">{t.t}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
