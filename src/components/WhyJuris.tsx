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
              Legal marketing is interesting because the stakes are real.
              Someone searching for a tax attorney at 11pm is not browsing.
              They have a problem, and the page that answers them best usually
              wins. That&apos;s the kind of SEO where the details matter.
            </p>
            <p>
              What drew me to Juris specifically was reading your core values
              and noticing they were doing real work in the copy, not just
              sitting on an About page. Empathy, honesty, quality. You can see
              them in how you describe client relationships: eliminating
              uncertainty, communicating proactively, treating engagements as
              partnerships. That maps cleanly to how I think about design.
              Every decision should have a reason you can explain.
            </p>
            <p>
              The POD structure is the other reason. I&apos;ve worked both
              agency-side and freelance, and the clearest thing I&apos;ve
              learned is that you grow much faster inside a team that&apos;s
              actively teaching you. A group that&apos;s invested in its people
              is where I&apos;d like to spend the next year.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <blockquote className="mt-8 pl-6 border-l-4 border-teal text-navy text-xl font-medium leading-relaxed">
            What I&apos;d bring isn&apos;t just help on the task queue. It&apos;s
            a designer&apos;s eye on the same page an SEO is auditing. I can tell
            you why a heading isn&apos;t crawlable and why the layout beneath it
            is hurting conversion. That combination is uncommon, and it&apos;s
            useful.
          </blockquote>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
