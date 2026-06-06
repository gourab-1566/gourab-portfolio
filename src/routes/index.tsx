import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { CollapsibleSections } from "@/components/CollapsibleSections";
import { Quote } from "@/components/Quote";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gourab Deb — Student Developer & Future Software Entrepreneur" },
      {
        name: "description",
        content:
          "Portfolio of Gourab Deb — student developer from Bangladesh building software, exploring AI, and turning curiosity into real-world products.",
      },
      { property: "og:title", content: "Gourab Deb — Student Developer & Future Entrepreneur" },
      {
        property: "og:description",
        content: "Building technology that turns curiosity into real-world impact.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  const handleDone = () => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setLoaded(true);
  };

  return (
    <>
      {!loaded && <LoadingScreen onDone={handleDone} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative min-h-screen bg-background noise"
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Quote />
          <CollapsibleSections />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
