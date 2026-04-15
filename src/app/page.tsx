import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ValueProp } from '@/components/ValueProp';
import { SkillsGrid } from '@/components/SkillsGrid';
import { Projects } from '@/components/Projects';
import { Process } from '@/components/Process';
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
        <Projects />
        <Process />
        <WhyJuris />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
