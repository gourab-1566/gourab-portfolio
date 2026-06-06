import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import veloraThumb from "@/assets/velora-thumb.png.asset.json";

const projects = [
  {
    n: "01",
    name: "Velora",
    tag: "AI E-Commerce",
    desc: "A modern AI-powered e-commerce platform focused on simplicity, style and a luxury user experience.",
    stack: ["React", "AI", "Tailwind", "Design"],
    live: "https://velora-style.lovable.app",
    code: "https://github.com/gourab-1566/velora-style",
    accent: "from-primary/40 to-transparent",
    image: veloraThumb.url,
  {
    n: "02",
    name: "FocusOS",
    tag: "Productivity",
    desc: "A productivity-focused operating environment designed to help students and creators stay deeply focused.",
    stack: ["React", "Web", "Concept"],
    accent: "from-blue-500/30 to-transparent",
  },
  {
    n: "03",
    name: "AI Chatbot",
    tag: "AI / NLP",
    desc: "An intelligent conversational assistant built using modern AI APIs and prompt engineering.",
    stack: ["AI", "Python", "API"],
    accent: "from-purple-500/30 to-transparent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            index="03"
            eyebrow="Projects"
            title={
              <>
                Selected <span className="text-gradient-red">work.</span>
              </>
            }
            description="Real products, shipped or in motion — built solo with curiosity, AI, and a stubborn refusal to settle for generic."
          />
          <a
            href="https://github.com/gourab-1566"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary"
          >
            All on GitHub <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="mt-20 grid gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="group relative grid overflow-hidden rounded-3xl border border-white/8 bg-gradient-card shadow-card transition-all duration-500 hover:border-primary/40 hover:shadow-elegant md:grid-cols-[1.2fr_1fr]"
            >
              <div className="relative flex flex-col justify-between p-8 md:p-12">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                    <span className="text-muted-foreground">{p.n}</span>
                    <span className="h-px w-8 bg-primary/40" />
                    <span>{p.tag}</span>
                  </div>
                  <h3 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
                    {p.name}
                  </h3>
                  <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-red px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-glow"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] hover:border-primary/60 hover:bg-primary/5"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {!p.live && !p.code && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              <div className={`relative min-h-[280px] overflow-hidden bg-onyx md:min-h-full`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-80`} />
                <div className="absolute inset-0 grid-bg opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl" />
                    <div className="relative font-display text-[180px] font-bold leading-none text-white/5 md:text-[220px]">
                      {p.name.slice(0, 2).toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="absolute right-6 top-6">
                  <div className="rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    {p.tag}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
