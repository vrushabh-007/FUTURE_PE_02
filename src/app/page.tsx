import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Stages from '@/components/sections/stages';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import AIAssistant from '@/components/sections/ai-assistant';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto border-x border-border bg-card">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Projects />
        <Stages />
        <AIAssistant />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
