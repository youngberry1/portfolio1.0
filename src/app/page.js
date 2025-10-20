import { Navbar } from "@/components/NavbarSection";
import { Hero } from "@/components/HeroSection";
import { About } from "@/components/AboutSection";
import { Skills } from "@/components/SkillsSection";
import { Projects } from "@/components/ProjectSection";
import { Contact } from "@/components/ContactForm";
import { Footer } from "@/components/FooterSection";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
