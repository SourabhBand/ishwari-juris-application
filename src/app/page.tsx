import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ValueProp } from '@/components/ValueProp';
import { SkillsGrid } from '@/components/SkillsGrid';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Process } from '@/components/Process';
import { HowIWork } from '@/components/HowIWork';
import { WhyJuris } from '@/components/WhyJuris';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ValueProp />
        <SkillsGrid />
        <Experience />
        <Projects />
        <Process />
        <HowIWork />
        <WhyJuris />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
