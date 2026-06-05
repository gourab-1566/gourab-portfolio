import { motion } from "framer-motion";
import { Award, Trophy, FlaskConical, Github, FileText } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import cert from "@/assets/science-fair-cert.pdf.asset.json";

const items = [
  {
    year: "2024",
    icon: Trophy,
    title: "School Science Fair Champion",
    desc: "Recognized for an innovative science project demonstrating curiosity, research and applied thinking.",
    link: { href: cert.url, label: "View Certificate" },
  },
  {
    year: "2024",
    icon: FlaskConical,
    title: "Bangladesh Biology Olympiad",
    desc: "Participated in the national Biology Olympiad — bridging science and self-driven learning.",
  },
  {
    year: "2024",
    icon: Award,
    title: "School Cricket Tournament",
    desc: "Captained the team — leadership, strategy and teamwork beyond the keyboard.",
  },
  {
    year: "2025",
    icon: Github,
    title: "42+ GitHub Contributions",
    desc: "Active open-source presence across personal projects, experiments and learning repos.",
    link: { href: "https://github.com/gourab-1566", label: "Visit Profile" },
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="04"
          eyebrow="Achievements"
          title={
            <>
              Milestones along the <span className="text-gradient-red">way.</span>
            </>
          }
        />

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2" />

          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`relative grid grid-cols-[40px_1fr] gap-6 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="absolute left-4 top-3 z-10 -translate-x-1/2 md:left-1/2">
                  <div className="relative h-3 w-3 rounded-full bg-primary shadow-soft-glow">
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                  </div>
                </div>

                <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-card p-6 shadow-card transition-all hover:border-primary/30`}>
                    <div className={`mb-3 flex items-center gap-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <it.icon size={18} />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                        {it.year}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{it.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                    {it.link && (
                      <a
                        href={it.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-primary hover:underline ${
                          i % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <FileText size={12} />
                        {it.link.label}
                      </a>
                    )}
                  </div>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
