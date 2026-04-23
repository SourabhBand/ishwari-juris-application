import { AnimateOnScroll } from './AnimateOnScroll';

export function CTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-28 px-6 bg-navy"
    >
      <div className="max-w-2xl mx-auto">
        <AnimateOnScroll animation="scale-in">
          <div className="gradient-border p-8 md:p-12 text-center">
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Let&apos;s Talk
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              I&apos;d like to learn more about the team and the work. Email is
              fastest. LinkedIn works too.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="mailto:ishwarigupte19@gmail.com"
                className="px-8 py-3.5 bg-lime text-navy font-semibold rounded-full hover:bg-lime-dark transition-colors text-sm tracking-wide"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/ishwari-gupte"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border-2 border-teal text-teal font-semibold rounded-full hover:bg-teal/10 transition-colors text-sm tracking-wide"
              >
                LinkedIn
              </a>
            </div>

            <a
              href="/ishwari-gupte-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-teal transition-colors underline underline-offset-4"
            >
              Download Resume (PDF)
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay={400}>
          <p className="mt-8 text-center text-xs text-white/30 max-w-lg mx-auto leading-relaxed">
            P.S. This page is its own writing sample. I designed and built it
            in Next.js with Tailwind. If you view the source, you&apos;ll find
            semantic HTML, a proper heading hierarchy, optimized images, and
            structured data. I wanted the portfolio to be the proof.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
