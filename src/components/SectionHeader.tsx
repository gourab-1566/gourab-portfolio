import { motion } from "framer-motion";

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}
    >
      <div className={`mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary ${align === "center" ? "justify-center" : ""}`}>
        <span className="text-muted-foreground">{index}</span>
        <span className="h-px w-10 bg-primary/50" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
