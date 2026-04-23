import { AnimateOnScroll } from './AnimateOnScroll';

const SKILL_CATEGORIES = [
  {
    label: 'SEO Fundamentals',
    color: 'teal',
    skills: [
      'On-Page SEO',
      'Off-Page SEO',
      'Technical SEO',
      'Keyword Research',
      'Content Strategy',
      'Local SEO',
      'Google Analytics',
      'Search Console',
      'Schema Markup',
      'Google Business Profile',
    ],
  },
  {
    label: 'Design & Development',
    color: 'lime',
    skills: [
      'UI/UX Design',
      'Figma',
      'WordPress',
      'Responsive Design',
      'Page Speed Optimization',
      'Claude',
      'ChatGPT',
      'AI-assisted Workflows',
    ],
  },
  {
    label: 'Work & Communication',
    color: 'white',
    skills: [
      'Agency Experience',
      'Freelance Experience',
      'Client Communication',
      'Accountability',
      'Content Publishing',
      'Self-Directed Learning',
      'Cross-Team Collaboration',
    ],
  },
];

const chipStyles: Record<string, string> = {
  teal: 'border-teal/40 text-teal hover:border-teal hover:shadow-[0_0_12px_rgba(81,219,227,0.2)]',
  lime: 'border-lime/40 text-lime hover:border-lime hover:shadow-[0_0_12px_rgba(167,237,79,0.2)]',
  white: 'border-white/30 text-white/80 hover:border-white/60 hover:shadow-[0_0_12px_rgba(255,255,255,0.1)]',
};

export function SkillsGrid() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 md:py-28 px-6 bg-navy"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Things I can do today.
          </h2>
        </AnimateOnScroll>

        <div className="space-y-12">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <AnimateOnScroll key={cat.label} animation="fade-up" delay={catIdx * 100}>
              <div>
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-muted mb-4">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 border rounded-full text-sm font-medium transition-all duration-300 cursor-default hover:scale-[1.03] ${chipStyles[cat.color]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
