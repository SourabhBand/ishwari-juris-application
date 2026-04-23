import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ishwari Gupte · Resume · SEO Intern Applicant at Juris Digital',
  description:
    'Resume of Ishwari Gupte. Designer with SEO internship experience, applying for the SEO Intern role at Juris Digital.',
  robots: { index: false, follow: false },
};

const SEO_SKILLS = [
  'On-Page SEO',
  'Technical SEO',
  'Keyword Research',
  'Search Console',
  'Google Analytics',
  'Ahrefs',
  'Screaming Frog',
  'Schema Markup',
  'Local SEO',
];

const DESIGN_SKILLS = [
  'UI/UX Design',
  'Figma',
  'Adobe Illustrator',
  'Photoshop',
  'After Effects',
  'Next.js',
  'HTML/CSS',
  'WordPress',
  'Claude',
  'ChatGPT',
];

const WORK_SKILLS = [
  'Agency Experience',
  'Freelance Experience',
  'Client Communication',
  'Accountability',
  'Self-Directed Learning',
];

const EXPERIENCE = [
  {
    role: 'Senior Designer',
    company: 'Brnd.me (Mensa Brands)',
    dates: '2024 – Present',
    bullets: [
      'Product packaging design for D2C portfolio brands',
      'Amazon A+ content and brand-store designs',
    ],
  },
  {
    role: 'SEO Intern',
    company: 'Junglee Journeys',
    dates: '2025',
    bullets: [
      'Contributed to keyword research that shaped page structure and copy',
      'On-page SEO: metadata, heading hierarchy, semantic HTML',
      'Image optimization with next/image for Core Web Vitals',
      'Helped with the UI design in Figma',
    ],
  },
  {
    role: 'SEO Intern',
    company: 'Fortress Windows (Toronto)',
    dates: '2024 – 2025',
    bullets: [
      'On-page SEO for a live WordPress site that now ranks for target keywords in the Canadian market',
      'Heading hierarchy and responsive implementation across all pages',
      'Buyer-intent content structure for service pages',
    ],
  },
  {
    role: 'Graphic & UI Designer',
    company: 'DDB Mudra',
    dates: '2022 – 2024',
    bullets: [
      'Social media marketing design and graphic design',
      'Brands: Volkswagen, Royal Enfield, Flipkart, Clean & Clear, Signature, Royal Challengers Bangalore',
    ],
  },
  {
    role: 'Freelance Designer',
    company: 'Various clients',
    dates: '2018 – Present',
    bullets: [
      'Current freelance engagement: Final Funnel',
      'UI design: TrooCheck, Khel Kabaddi, FoodZilla, LeonStride, Sapper',
      'Communication and UX design: LTIMindtree',
      'Brand and graphic design: Affinity X, MyAmichi, Radon, Memahaut',
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top utility bar, hidden in print */}
      <div className="print:hidden bg-navy text-white/70 text-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="hover:text-teal transition-colors inline-flex items-center gap-2"
          >
            <span aria-hidden="true">←</span> Back to portfolio
          </Link>
          <span className="text-white/40 hidden sm:inline">
            Tip: press Ctrl/Cmd + P to save as PDF
          </span>
        </div>
      </div>

      <article className="max-w-6xl mx-auto grid md:grid-cols-[320px_1fr]">
        {/* Sidebar */}
        <aside className="bg-navy text-white p-8 md:p-10 print:bg-white print:text-charcoal print:p-4">
          {/* Headshot */}
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-teal/40 mb-6 print:ring-charcoal/20">
            <Image
              src="/ishwari-gupte.png"
              alt="Ishwari Gupte"
              fill
              sizes="112px"
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-1 leading-tight">
            Ishwari Gupte
          </h1>
          <p className="text-teal text-sm font-medium mb-8 print:text-charcoal/70">
            UI/UX Designer. SEO Intern Applicant.
          </p>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-xs uppercase tracking-[0.15em] text-gray-muted font-semibold mb-3 print:text-charcoal/60">
              Contact
            </h2>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a
                  href="mailto:ishwarigupte19@gmail.com"
                  className="hover:text-teal transition-colors break-all"
                >
                  ishwarigupte19@gmail.com
                </a>
              </li>
              <li>+91 9049084939</li>
              <li>
                <Link
                  href="/"
                  className="hover:text-teal transition-colors break-all"
                >
                  ishwari-juris-application.vercel.app
                </Link>
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-xs uppercase tracking-[0.15em] text-gray-muted font-semibold mb-3 print:text-charcoal/60">
              SEO Fundamentals
            </h2>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {SEO_SKILLS.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 border border-teal/40 text-teal rounded-full print:border-charcoal/30 print:text-charcoal"
                >
                  {s}
                </span>
              ))}
            </div>

            <h2 className="text-xs uppercase tracking-[0.15em] text-gray-muted font-semibold mb-3 print:text-charcoal/60">
              Design &amp; Tools
            </h2>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {DESIGN_SKILLS.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 border border-lime/40 text-lime rounded-full print:border-charcoal/30 print:text-charcoal"
                >
                  {s}
                </span>
              ))}
            </div>

            <h2 className="text-xs uppercase tracking-[0.15em] text-gray-muted font-semibold mb-3 print:text-charcoal/60">
              Work &amp; Communication
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {WORK_SKILLS.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 border border-white/30 text-white/80 rounded-full print:border-charcoal/30 print:text-charcoal"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-gray-muted font-semibold mb-3 print:text-charcoal/60">
              Education
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold">B.F.A in Applied Arts</p>
                <p className="text-white/70 print:text-charcoal/70">
                  Illustration &middot; VIIT, Pune &middot; 2017
                </p>
              </div>
              <div>
                <p className="font-semibold">G.D in Applied Arts</p>
                <p className="text-white/70 print:text-charcoal/70">
                  Illustration &middot; Abhinav Kala Mahavidyalaya, Pune &middot; 2015
                </p>
              </div>
            </div>
          </section>
        </aside>

        {/* Main */}
        <section className="p-8 md:p-12 print:p-6">
          <header className="mb-10">
            <h2 className="text-xs uppercase tracking-[0.15em] text-teal font-semibold mb-4 print:text-charcoal/60">
              About
            </h2>
            <p className="text-charcoal/80 leading-relaxed">
              I&apos;ve spent the last few years designing websites, brand
              identities, and product packaging. That work is how I got curious
              about SEO. The closer you look at any page on the web, the more
              design and ranking turn out to be deciding the same thing:
              whether the user stays. I&apos;d like to spend the next year
              sharpening the SEO side of that story at Juris Digital.
            </p>
          </header>

          <div>
            <h2 className="text-xs uppercase tracking-[0.15em] text-teal font-semibold mb-6 print:text-charcoal/60">
              Experience
            </h2>
            <div className="space-y-8">
              {EXPERIENCE.map((job) => (
                <article
                  key={job.company + job.role}
                  className="border-l-2 border-teal/30 pl-5 print:border-charcoal/30 print:break-inside-avoid"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-navy">
                        {job.role}
                      </h3>
                      <p className="text-charcoal/70">{job.company}</p>
                    </div>
                    <p className="text-sm text-gray-muted font-medium">
                      {job.dates}
                    </p>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-charcoal/80 list-disc pl-5 marker:text-teal print:marker:text-charcoal">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
