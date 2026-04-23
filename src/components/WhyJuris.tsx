import { AnimateOnScroll } from './AnimateOnScroll';

export function WhyJuris() {
  return (
    <section
      id="why-juris"
      aria-labelledby="why-juris-heading"
      className="py-20 md:py-28 px-6 bg-gray-light"
    >
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <h2
            id="why-juris-heading"
            className="text-3xl md:text-4xl font-bold text-navy mb-10"
          >
            Why Juris Digital
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={150}>
          <div className="space-y-6 text-charcoal/80 leading-relaxed text-lg">
            <p>
              Legal marketing is interesting because I&apos;m genuinely curious
              about the industry. Law has its own vocabulary, its own buyer
              journeys, and its own competitive dynamics, and I don&apos;t
              pretend to know it yet. What I do know is that every vertical has
              its own texture, and the interesting SEO problems live in those
              specifics. I want to learn the specifics of this one.
            </p>
            <p>
              I&apos;ve looked at Juris carefully enough to know the basics.
              The POD structure, the values listed on the site, the kind of
              work the team is known for. The more useful reason I&apos;m
              applying is that someone I trust in the SEO world mentioned Juris
              unprompted, which says more about a shop than a careers page ever
              will.
            </p>
            <p>
              The combination I&apos;d like to build a career on is SEO,
              content marketing, and design. Those three are usually separated
              by org charts, but the projects that do well tend to be the ones
              where they aren&apos;t. The POD structure at Juris is the
              clearest version of that I&apos;ve seen at the intern-accessible
              level, which is why I&apos;d like to spend the next year inside
              it.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <blockquote className="mt-8 pl-6 border-l-4 border-teal text-navy text-xl font-medium leading-relaxed">
            What I&apos;d bring isn&apos;t a finished SEO strategist in
            disguise. It&apos;s someone who loves the overlap between SEO,
            content, and design, and wants the year ahead to be inside a team
            where those three already feed each other. That&apos;s the
            combination I want to build a career on.
          </blockquote>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
