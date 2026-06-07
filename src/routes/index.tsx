import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
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

  const resetHomePosition = useCallback(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useLayoutEffect(() => {
    resetHomePosition();
  }, [resetHomePosition]);

  useEffect(() => {
    const handlePageShow = () => resetHomePosition();
    const handleHashChange = () => {
      if (!window.location.hash) {
        requestAnimationFrame(resetHomePosition);
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [resetHomePosition]);

  const handleDone = () => {
    resetHomePosition();
    setLoaded(true);
    requestAnimationFrame(() => {
      resetHomePosition();
      window.setTimeout(resetHomePosition, 80);
    });
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
