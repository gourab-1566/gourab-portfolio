import { motion } from "framer-motion";
import { Mail, Github, Facebook, Instagram, Youtube, Code2, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const socials = [
  { icon: Mail, label: "Email", value: "gdsocial123@gmail.com", href: "mailto:gdsocial123@gmail.com" },
  { icon: Github, label: "GitHub", value: "@gourab-1566", href: "https://github.com/gourab-1566" },
  { icon: Instagram, label: "Instagram", value: "@gourab_deb_official", href: "https://instagram.com/gourab_deb_official" },
  { icon: Youtube, label: "YouTube", value: "@FlarelessSoul", href: "https://youtube.com/@FlarelessSoul" },
  { icon: Facebook, label: "Facebook", value: "gourab1566", href: "https://facebook.com/gourab1566" },
  { icon: Code2, label: "Codeforces", value: "gourab1566", href: "https://codeforces.com/profile/gourab1566" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="07"
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="text-gradient-red">meaningful.</span>
            </>
          }
          description="Open to internships, collaborations, mentorship and conversations with anyone building the future."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <motion.a
            href="mailto:gdsocial123@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group block overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card p-10 text-center shadow-elegant transition-all hover:border-primary hover:shadow-glow"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              Send a message
            </div>
            <div className="mt-4 font-display text-3xl font-medium tracking-tight md:text-5xl">
              gdsocial123<span className="text-primary">@</span>gmail.com
            </div>
            <div className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-primary">
              Reply within 24 hours <ArrowUpRight size={14} />
            </div>
          </motion.a>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-gradient-card p-4 shadow-card transition-all hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.label}
                  </div>
                  <div className="truncate text-sm text-foreground">{s.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
