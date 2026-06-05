import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const chapters = [
  {
    n: "01",
    t: "The Curiosity",
    d: "As a child I took apart how things worked. Computers became the most fascinating puzzle — apps, websites, software all hiding something elegant underneath.",
  },
  {
    n: "02",
    t: "The Self-Learner",
    d: "YouTube, documentation, AI tools, late nights. I taught myself to code by building, breaking, and rebuilding — one project at a time.",
  },
  {
    n: "03",
    t: "The Science Mind",
    d: "A science student with a quiet obsession for Computer Science. Olympiads, science fairs, and an endless stack of open tabs.",
  },
  {
    n: "04",
    t: "The Builder",
    d: "Now I ship real products with AI and modern tools. Tomorrow I want to build companies that put impactful software in millions of hands.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="01"
          eyebrow="About"
          title={
            <>
              From a curious student to a{" "}
              <span className="text-gradient-red">future founder.</span>
            </>
          }
          description="This isn't a résumé. It's a journey — still being written, one line of code, one sketch, one experiment at a time."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {chapters.map((c, i) => (
            <motion.article
              key={c.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-card p-8 shadow-card transition-all duration-500 hover:border-primary/30 hover:shadow-elegant"
            >
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                  Chapter {c.n}
                </div>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                  {c.t}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
