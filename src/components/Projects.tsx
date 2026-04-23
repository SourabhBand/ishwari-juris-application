import { AnimateOnScroll } from './AnimateOnScroll';

interface ProjectCardProps {
  tag: string;
  title: string;
  url: string;
  description: string;
  bullets: string[];
  gradient: string;
}

function ProjectCard({ tag, title, url, description, bullets, gradient }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-light">
      {/* Browser mockup frame */}
      <div className="bg-charcoal/5 border-b border-charcoal/10">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md px-3 py-1 text-xs text-charcoal/50 truncate border border-charcoal/10">
              {url}
            </div>
          </div>
        </div>
      </div>
      {/* Gradient placeholder for screenshot */}
      <div className={`h-48 md:h-64 ${gradient}`} />

      {/* Content */}
      <div className="p-6 md:p-8">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-teal bg-teal/10 px-3 py-1 rounded-full mb-4">
          {tag}
        </span>
        <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
        <p className="text-charcoal/70 mb-5 leading-relaxed">{description}</p>
        <ul className="space-y-2.5 mb-6">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-charcoal/80">
              <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
        <a
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
        >
          View Live Site
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-20 md:py-28 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fade-up">
          <h2
            id="work-heading"
            className="text-3xl md:text-4xl font-bold text-navy text-center mb-4"
          >
            Two sites I&apos;ve worked on.
          </h2>
          <p className="text-charcoal/60 text-center max-w-2xl mx-auto mb-16">
            Both are live. I worked on them as an SEO intern. What I
            contributed and how I thought about it.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimateOnScroll animation="fade-up" delay={100}>
            <ProjectCard
              tag="Design + SEO | Wildlife Tourism"
              title="Junglee Journeys"
              url="junglee-journeys-web.vercel.app"
              description="A wildlife safari company in India. Keyword research, site structure, content hierarchy, and the metadata work. I also helped with the UI design in Figma."
              bullets={[
                'Contributed to keyword research that shaped page structure and copy',
                'Helped write SEO metadata (title tags, meta descriptions, OpenGraph)',
                'Structured heading hierarchy (H1 > H2 > H3) for crawlability',
                'Built semantic HTML with proper landmark elements',
                'Optimized images with next/image for Core Web Vitals',
              ]}
              gradient="bg-gradient-to-br from-[#081d01] via-[#0d2a05] to-[#e79e23]/30"
            />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={250}>
            <ProjectCard
              tag="SEO Implementation | Local Business (Canada)"
              title="Fortress Windows"
              url="fortresswindowsinc.com"
              description="A Toronto window and door installer, 37 years in business. I worked on their live WordPress site as an SEO intern. It now ranks for target keywords in the Canadian market."
              bullets={[
                'Implemented Google Analytics tracking and Search Console verification',
                'Structured heading hierarchy across all pages',
                'Ensured full responsive design for mobile-first indexing',
                'On-page optimization for local search terms',
                'Content structure for service pages targeting buyer intent',
                'Site is live and ranking for targeted Canadian keywords',
              ]}
              gradient="bg-gradient-to-br from-[#1a1a1a] via-[#EB1020]/20 to-[#333]"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
