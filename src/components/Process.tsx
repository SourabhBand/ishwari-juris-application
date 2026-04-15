import { AnimateOnScroll } from './AnimateOnScroll';

const STEPS = [
  {
    number: '01',
    title: 'Research & Audit',
    description:
      'Analyze the current site, competitors, and keyword landscape. Tools: Google Search Console, Analytics, Ahrefs, Screaming Frog.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture',
    description:
      'Map keywords to pages. Plan content hierarchy, internal linking, and technical fixes. UX informs every decision.',
  },
  {
    number: '03',
    title: 'On-Page Optimization',
    description:
      'Title tags, meta descriptions, heading structure, image alt text, schema markup. Every element serves both users and crawlers.',
  },
  {
    number: '04',
    title: 'Content & Design',
    description:
      'Create content that satisfies search intent while being visually engaging. Design layouts that improve dwell time and reduce bounce rate.',
  },
  {
    number: '05',
    title: 'Measure & Iterate',
    description:
      'Track rankings, traffic, and conversions. Use data to refine the approach. SEO is never done.',
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-20 md:py-28 px-6 bg-navy"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            How I Approach SEO
          </h2>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (mobile) / horizontal line (desktop) */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-teal/20" />
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-teal/20" />

          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {STEPS.map((step, i) => (
              <AnimateOnScroll key={step.number} animation="fade-up" delay={i * 120}>
                <div className="relative flex md:flex-col items-start md:items-center md:text-center gap-5 md:gap-0">
                  {/* Dot */}
                  <div className="relative z-10 w-12 h-12 md:mb-5 rounded-full bg-navy border-2 border-teal flex items-center justify-center flex-shrink-0">
                    <span className="text-teal text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
