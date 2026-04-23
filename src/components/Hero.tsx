import { AnimateOnScroll } from './AnimateOnScroll';

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center bg-navy dot-pattern overflow-hidden"
    >
      {/* Teal glow accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-lime/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="hero-animate" style={{ animationDelay: '0ms' }}>
          <p className="text-teal text-sm md:text-base font-medium tracking-[0.15em] uppercase mb-6">
            UI/UX Designer &middot; Learning SEO by Building &middot; Applying to Juris Digital
          </p>
        </div>

        <div className="hero-animate" style={{ animationDelay: '200ms' }}>
          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            SEO is a{' '}
            <span className="text-shimmer">design</span>
            {' '}problem
            <span className="text-teal animate-pulse">.</span>
          </h1>
        </div>

        <div className="hero-animate" style={{ animationDelay: '400ms' }}>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            I&apos;m Ishwari Gupte. I design interfaces, and I&apos;ve been learning SEO
            by building real sites. Once you look at what Google is actually measuring
            (speed, readability, structure, whether people stay), most of it turns out
            to be the same things a good designer is already thinking about.
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
