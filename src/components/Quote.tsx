import { motion } from "framer-motion";

export function Quote() {
  return (
    <section className="relative overflow-hidden py-32">
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "var(--gradient-radial-red)", filter: "blur(60px)" }}
      />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <div className="font-display text-7xl text-primary/40 leading-none">"</div>
        <p className="font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-[1.2] tracking-tight">
          Talent without hard work{" "}
          <span className="text-gradient-red italic">is nothing.</span>
        </p>
        <div className="mx-auto mt-10 h-px w-20 bg-primary/40" />
        <div className="mt-6 font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
          — Cristiano Ronaldo
        </div>
      </motion.div>
    </section>
  );
}
