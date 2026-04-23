import { AnimateOnScroll } from './AnimateOnScroll';

const PILLARS = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19" cy="24" r="12" stroke="#51DBE3" strokeWidth="2" fill="none" />
        <circle cx="29" cy="24" r="12" stroke="#51DBE3" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: 'UX Is SEO',
    description:
      "Google is mostly trying to figure out if a user is having a good time. That's what Core Web Vitals, E-E-A-T, and the helpful-content guidelines all come down to. Design is the thing that decides the answer, so design is where most of the work sits.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 12L8 24L14 36" stroke="#51DBE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 12L40 24L34 36" stroke="#51DBE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 10L20 38" stroke="#51DBE3" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Technical Eye',
    description:
      "Clean HTML is just legible thinking. A heading hierarchy is the same outline I'd sketch in a wireframe, written where a crawler can read it. I don't treat markup as a separate technical concern. It's part of how the design gets built.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 34L10 18C10 16.9 10.9 16 12 16H20L22 20H36C37.1 20 38 20.9 38 22V34C38 35.1 37.1 36 36 36H12C10.9 36 10 35.1 10 34Z" stroke="#51DBE3" strokeWidth="2" fill="none" />
        <circle cx="30" cy="28" r="5" stroke="#51DBE3" strokeWidth="2" fill="none" />
        <path d="M34 32L38 36" stroke="#51DBE3" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Content That Connects',
    description:
      "Keywords are the words people already type when they want what you offer. Figuring out which ones, then making sure the page actually answers them, is most of on-page SEO. I've done the sitemap work, the meta descriptions, and internal linking on real client sites.",
  },
];

export function ValueProp() {
  return (
    <section
      id="value"
      aria-labelledby="value-heading"
      className="py-20 md:py-28 px-6 bg-gray-light"
    >
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <h2
            id="value-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy text-center max-w-3xl mx-auto mb-16 leading-snug"
          >
            A page ranks when users like it.{' '}
            <span className="text-teal">Design decides that.</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {PILLARS.map((pillar, i) => (
            <AnimateOnScroll key={pillar.title} animation="fade-up" delay={i * 150}>
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
