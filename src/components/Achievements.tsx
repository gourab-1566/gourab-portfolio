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

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-card p-6 shadow-card transition-all hover:border-primary/30 h-full">
                <div className="mb-3 flex items-center gap-3">
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
                    className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-primary hover:underline"
                  >
                    <FileText size={12} />
                    {it.link.label}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
