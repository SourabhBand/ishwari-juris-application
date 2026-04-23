export function Footer() {
  return (
    <footer className="py-8 px-6 bg-navy border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <p>Designed & Built by Ishwari Gupte, 2026</p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:ishwarigupte19@gmail.com"
            className="hover:text-teal transition-colors"
          >
            ishwarigupte19@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/ishwari-gupte"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-white/20">
          Built with Next.js + Tailwind CSS. Deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
