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
              Legal marketing fascinates me because it&apos;s high-stakes,
              high-intent, and deeply local. Exactly the kind of SEO challenge
              where precision matters most.
            </p>
            <p>
              What draws me to Juris Digital specifically is the culture.
              Your core values of empathy, honesty, and quality aren&apos;t
              just words on a page. They show up in how you structure
              client relationships: eliminating uncertainty, communicating
              proactively, and treating every engagement as a partnership.
              That resonates deeply with my design philosophy, where every
              decision should have a reason and every result should be visible.
            </p>
            <p>
              I&apos;m drawn to your POD structure because it means real
              mentorship and collaboration, not just being handed tasks in
              isolation. I&apos;ve worked both agency-side and freelance, and
              I know the value of learning within a team that&apos;s invested
              in growing its people.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <blockquote className="mt-8 pl-6 border-l-4 border-teal text-navy text-xl font-medium leading-relaxed">
            What I&apos;d bring as an intern isn&apos;t just another pair of hands.
            It&apos;s a design perspective that most SEO teams lack. I can audit a
            page for technical SEO and also tell you why the layout is killing
            your conversion rate. That&apos;s the kind of cross-functional thinking
            that makes campaigns succeed.
          </blockquote>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
