import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center bg-navy dot-pattern overflow-hidden pt-28 md:pt-24"
    >
      {/* Teal glow accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-lime/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Headshot — top-left, aligned with the nav brand */}
      <div
        className="hero-animate absolute top-20 md:top-24 left-0 right-0 z-20 pointer-events-none"
        style={{ animationDelay: '0ms' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative inline-block w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden ring-2 ring-teal/40 shadow-[0_0_40px_rgba(81,219,227,0.25)] pointer-events-auto">
            <Image
              src="/ishwari-gupte.png"
              alt="Ishwari Gupte"
              fill
              sizes="(min-width: 1024px) 112px, (min-width: 768px) 96px, 80px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="hero-animate" style={{ animationDelay: '100ms' }}>
          <p className="text-teal text-sm md:text-base font-medium tracking-[0.15em] uppercase mb-6">
            SEO Intern Applicant &middot; Juris Digital
          </p>
        </div>

        <div className="hero-animate" style={{ animationDelay: '200ms' }}>
          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            Learning SEO from{' '}
            <span className="text-shimmer">first principles</span>
            <span className="text-teal animate-pulse">.</span>
          </h1>
        </div>

        <div className="hero-animate" style={{ animationDelay: '400ms' }}>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            I&apos;m Ishwari Gupte, applying for the SEO Intern role at Juris
            Digital. I&apos;ve spent the last few years designing and building
            websites, and that&apos;s how I got curious about SEO. Figuring out
            why pages rank, or don&apos;t, is what I want to spend the next year
            getting better at.
          </p>
        </div>

        <div className="hero-animate" style={{ animationDelay: '600ms' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#work"
              className="px-8 py-3.5 bg-lime text-navy font-semibold rounded-full hover:bg-lime-dark transition-colors text-sm tracking-wide"
            >
              See My Work
            </a>
            <a
              href="/ishwari-gupte-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border-2 border-teal text-teal font-semibold rounded-full hover:bg-teal/10 transition-colors text-sm tracking-wide"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-teal rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
