import { AnimateOnScroll } from './AnimateOnScroll';

const PRINCIPLES = [
  {
    title: 'Self-direction',
    body:
      "I don't need to be assigned the next thing. If I'm blocked, I'll say so. If I'm not, I'll keep moving and check in when I have something to show. Agency and freelance work both taught me how to run a task from kickoff to review without needing constant supervision.",
  },
  {
    title: 'Proactive communication',
    body:
      "I send updates at the rate the project needs, not the rate that feels productive to send. When something is taking longer than expected, I flag it before the deadline, not at it. When something is simple, I don't bury the simple message in two paragraphs of context.",
  },
  {
    title: 'Working across teams',
    body:
      "At the agency I worked with copywriters, developers, account managers, and clients in the same week. I try to make the next person's job easier by leaving clear notes and asking questions early rather than late.",
  },
  {
    title: 'Fluent with AI and modern tools',
    body:
      "I use the tools that are available. Claude and ChatGPT for drafting, pressure-testing ideas, and getting a second read on approaches. Figma and the standard SEO stack for the actual work. Tools don't replace thinking, but they speed it up when used well.",
  },
];

export function HowIWork() {
  return (
    <section
      id="how-i-work"
      aria-labelledby="how-i-work-heading"
      className="py-20 md:py-28 px-6 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <h2
            id="how-i-work-heading"
            className="text-3xl md:text-4xl font-bold text-navy text-center mb-4"
          >
            How I work.
          </h2>
          <p className="text-charcoal/60 text-center max-w-2xl mx-auto mb-16">
            Soft skills aren&apos;t soft. They&apos;re how the work actually ships.
          </p>
        </AnimateOnScroll>

        <div className="space-y-10 md:space-y-12">
          {PRINCIPLES.map((p, i) => (
            <AnimateOnScroll key={p.title} animation="fade-up" delay={i * 120}>
              <div className="flex flex-col md:flex-row gap-4 md:gap-10 pb-10 md:pb-12 border-b border-charcoal/10 last:border-b-0 last:pb-0">
                <div className="md:w-1/3">
                  <h3 className="text-lg md:text-xl font-semibold text-navy">
                    {p.title}
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-charcoal/80 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
