import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Achievements } from "./Achievements";
import { ECA } from "./ECA";
import { FutureVision } from "./FutureVision";
import { SectionHeader } from "./SectionHeader";

const items = [
  { id: "achievements", label: "Achievements", hint: "Milestones, awards & recognitions", Comp: Achievements },
  { id: "eca", label: "Extracurricular Activities", hint: "Art, sport, leadership & craft", Comp: ECA },
  { id: "vision", label: "Future Vision", hint: "Timeline, goals & long-term impact", Comp: FutureVision },
];

export function CollapsibleSections() {
  const [value, setValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace("#", "");
      if (items.some((i) => i.id === h)) {
        setValue(h);
        setTimeout(() => {
          document.getElementById(h)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <section id="explore" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          index="07"
          eyebrow="Explore More"
          title={
            <>
              Dive deeper into the <span className="text-gradient-red">full story.</span>
            </>
          }
          description="Expand any chapter to explore achievements, life beyond code, and the long-term vision."
        />

        <Accordion
          type="single"
          collapsible
          value={value}
          onValueChange={(v) => setValue(v || undefined)}
          className="mt-12 space-y-4"
        >
          {items.map((it, i) => (
            <AccordionItem
              key={it.id}
              value={it.id}
              id={it.id}
              className="group overflow-hidden rounded-2xl border border-white/8 bg-gradient-card shadow-card transition-all data-[state=open]:border-primary/30 scroll-mt-24"
            >
              <AccordionTrigger className="px-5 sm:px-7 py-5 sm:py-6 hover:no-underline">
                <div className="flex items-center gap-4 sm:gap-5 text-left">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary">
                    0{i + 1}
                  </span>
                  <div>
                    <div className="font-display text-lg sm:text-2xl font-semibold tracking-tight">
                      {it.label}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{it.hint}</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-0 pt-0">
                <div className="border-t border-white/5">
                  <div className="[&>section]:!py-12 sm:[&>section]:!py-16 [&>section]:!relative">
                    <it.Comp />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
