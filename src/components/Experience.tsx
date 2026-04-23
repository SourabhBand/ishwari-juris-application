import { AnimateOnScroll } from './AnimateOnScroll';

const BLOCKS = [
  {
    label: 'Agency',
    title: 'Client work at scale',
    body:
      "I've worked at a design agency on websites and brand identities for clients across industries. Agency work is where I learned to translate a brief into decisions that hold up through development, and to keep project managers, copywriters, and developers on the same page when the brief kept evolving. It's also where I learned that most of a project's outcome is decided in the first two meetings, so I try to get the questions right up front.",
  },
  {
    label: 'Freelance',
    title: 'Closer to the client',
    body:
      "Freelance is where I worked more directly with clients, without an account manager in between. Kickoff calls, scoping, Figma handoff, feedback loops, follow-up. The closer loop has taught me to ask better questions up front, because an unclear brief on day one is not going to get clearer on day fourteen.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 md:py-28 px-6 bg-gray-light"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <h2
            id="experience-heading"
            className="text-3xl md:text-4xl font-bold text-navy text-center mb-4"
          >
            Where I&apos;ve worked.
          </h2>
          <p className="text-charcoal/60 text-center max-w-2xl mx-auto mb-16">
            Two modes, both of them useful. The resume has the specifics.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {BLOCKS.map((block, i) => (
            <AnimateOnScroll key={block.label} animation="fade-up" delay={i * 150}>
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-charcoal/10 h-full">
                <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-teal bg-teal/10 px-3 py-1 rounded-full mb-5">
                  {block.label}
                </span>
                <h3 className="text-xl font-bold text-navy mb-4 leading-snug">
                  {block.title}
                </h3>
                <p className="text-charcoal/75 leading-relaxed">
                  {block.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
