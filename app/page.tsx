import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Install } from "@/components/site/Install";
import { Nav } from "@/components/site/Nav";
import { Pipeline } from "@/components/site/Pipeline";
import { Principles } from "@/components/site/Principles";
import { Skills } from "@/components/site/Skills";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-on"
      >
        Skip to content
      </a>
      <div id="top" className="min-h-screen">
        <Nav />
        <main id="main">
          <Hero />
          <Skills />
          <HowItWorks />
          <Pipeline />
          <Principles />
          <Install />
        </main>
        <Footer />
      </div>
    </>
  );
}
