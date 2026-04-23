import { AnimateOnScroll } from './AnimateOnScroll';

const STEPS = [
  {
    number: '01',
    title: 'Research & Audit',
    description:
      "Start by understanding what's already there. The current site, the competition, what people are searching for. Tools: Search Console, Analytics, Ahrefs, Screaming Frog.",
  },
  {
    number: '02',
    title: 'Strategy & Architecture',
    description:
      'Match keywords to pages. Plan the hierarchy, the internal links, and the technical fixes. Every decision gets checked against the user experience.',
  },
  {
    number: '03',
    title: 'On-Page Optimization',
    description:
      'Title tags, meta descriptions, heading structure, alt text, schema. Each element has to work for a reader and a crawler at the same time.',
  },
  {
    number: '04',
    title: 'Content & Design',
    description:
      'Write content that answers the question someone actually typed. Design layouts that give them a reason to stay.',
  },
  {
    number: '05',
    title: 'Measure & Iterate',
    description:
      "Track rankings, traffic, and conversions. Let the data tell you what to change. SEO isn't a project you finish. It's one you keep showing up to.",
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
