import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FAQAccordion from '@/app/components/FAQAccordion';
import { reviews } from '@/app/data/reviews';

export const metadata: Metadata = {
  title: 'How to Choose a Painter and Decorator in North London (2026 Guide) | Bozhiqi',
  description:
    'Complete buyer\'s guide to hiring a painter and decorator in London. What to check, questions to ask, red flags to avoid, and how to get accurate quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/blog/choose-painter-decorator-north-london-2026',
  },
  openGraph: {
    title: 'How to Choose a Painter and Decorator in North London (2026 Guide)',
    description:
      'Complete buyer\'s guide to hiring a painter and decorator in London. What to check, questions to ask, and red flags to avoid.',
    url: 'https://bozhiqidecorating.co.uk/blog/choose-painter-decorator-north-london-2026',
  },
};

const faqs = [
  {
    question: 'Should I get a written quote before a painter starts work?',
    answer:
      'Always. A written, itemised quote protects both parties. It should state the scope of work, the specific paint products being used, the number of coats, the price (total, not just a day rate), and any exclusions. Never proceed based on a verbal estimate alone — if the price is not in writing, it is not fixed.',
  },
  {
    question: 'How do I check if a painter and decorator is insured?',
    answer:
      'Ask to see a copy of their public liability insurance certificate before work begins. A professional contractor carries at minimum £1 million public liability cover. If they hesitate or cannot provide documentation, do not hire them — any damage caused to your property would be your financial responsibility.',
  },
  {
    question: 'Is Checkatrade reliable for finding painters in London?',
    answer:
      'Checkatrade is one of the better vetting platforms in the UK. All members must pass identity checks and provide proof of insurance and qualifications. Customer reviews are independently verified — meaning only confirmed customers who paid for work can leave feedback. A consistently high score across a large number of reviews (50+) is a strong indicator of quality.',
  },
  {
    question: 'What is a reasonable day rate for a painter and decorator in London?',
    answer:
      'London day rates for experienced decorators typically range from £180–£280 per day. Be cautious of rates significantly below this — they may indicate inexperience, cutting corners on materials, or a lack of insurance. Many professional decorators quote per-project rather than per-day, which gives you cost certainty.',
  },
];

export default function ChoosePainterDecoratorPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How to Choose a Painter and Decorator in North London (2026 Guide)',
    image: 'https://bozhiqidecorating.co.uk/images/interior-painting-living-room-fireplace-period-cornicing.webp',
    datePublished: '2026-03-01T08:00:00+00:00',
    dateModified: '2026-03-01T08:00:00+00:00',
    author: {
      '@type': 'Person',
      name: 'Jetmir Bozhiqi',
      url: 'https://bozhiqidecorating.co.uk/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bozhiqi Painting & Decorating',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bozhiqidecorating.co.uk/images/favicon-bozhiqi.png',
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Breadcrumb */}
      <section className="bg-[#faf8f5] py-4">
        <div className="max-w-content mx-auto px-4">
          <nav className="text-sm text-[#6b7280]">
            <Link href="/" className="hover:text-[#b8860b]">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-[#b8860b]">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-[#3d3d3d]">How to Choose a Painter Decorator London</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-[#b8860b] bg-[#b8860b]/10 border border-[#b8860b]/25 px-2 py-1">
                  Hiring Guide
                </span>
                <span className="text-[#6b7280] text-sm">March 1, 2026</span>
                <span className="text-[#6b7280] text-sm">•</span>
                <span className="text-[#6b7280] text-sm">9 min read</span>
                <span className="text-[#6b7280] text-sm">•</span>
                <span className="text-[#6b7280] text-sm">By Jetmir Bozhiqi</span>
              </div>
              <h1 className="font-serif text-[#0f172a] mb-4 text-4xl md:text-6xl font-normal tracking-tight">
                How to Choose a Painter and Decorator in North London
              </h1>
              <p className="text-[#3d3d3d] text-lg md:text-xl leading-relaxed">
                Choosing the right decorator is as important as the project itself. A poor choice means
                wasted money and walls that need redoing. This guide covers exactly what to look for,
                what to ask, and the red flags that should make you walk away.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8 shadow-xl">
              <Image
                src="/images/interior-painting-living-room-fireplace-period-cornicing.webp"
                alt="Professionally decorated living room with painted cornicing and fireplace in period London home"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white">
        <div className="max-w-content mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">

              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                The painting and decorating market in London is large and unregulated. Anyone can call
                themselves a decorator and start taking bookings tomorrow — there is no licensing requirement,
                no mandatory qualification, and no central body that enforces standards. That makes the
                process of choosing well more important than in other trades.
              </p>

              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                The good news: the things that separate a professional from a cowboy are not hard to identify
                if you know what to look for. Here is the checklist I would use if I were a homeowner
                hiring someone for my own property.
              </p>

              <div className="brass-divider" aria-hidden="true" />
              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Step 1: Verify Before You Ask for Quotes</h2>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Public liability insurance</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                This is non-negotiable. A decorator working in your home without public liability insurance
                means any damage they cause — spilled paint on a carpet, a dropped ladder through a window,
                a wall cracked by drilling — becomes your financial problem to resolve. Ask for the insurance
                certificate before work starts, not after. Any professional contractor will have this
                documentation ready.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Checkatrade or similar verified platform profile</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Verified platforms like Checkatrade confirm identity, insurance, and credentials before
                a contractor can appear in search results. They also independently verify that reviewers
                are genuine customers who paid for the work. A profile with 30+ verified reviews and a
                consistent score above 9/10 is a strong signal. Be sceptical of profiles with only a handful
                of reviews — legitimate contractors working regularly in London accumulate reviews quickly.
              </p>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Bozhiqi Painting & Decorating has {reviews.checkatrade.count} verified reviews on Checkatrade
                with a {reviews.checkatrade.score}/{reviews.checkatrade.outOf} score — you can read them all on our{' '}
                <Link href="/reviews" className="text-[#b8860b] hover:underline">reviews page</Link>.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Portfolio of completed work</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                Any decorator with several years of experience should be able to show you photographs of
                completed projects. Look for clean cut-in lines, even coverage, no runs or drips, and
                neat work around fixtures and fittings. If they cannot show you examples, or if the photos
                are vague, that is a signal worth taking seriously.
              </p>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Step 2: The Quote Process</h2>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Only accept quotes after a site visit</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Accurate decorating quotes cannot be produced from photographs or descriptions alone. Wall
                condition, access, ceiling height, number of coats required, and the extent of preparation
                work must be assessed in person. A contractor who gives you a fixed price via WhatsApp
                without visiting either has no intention of doing the work properly, or will add extras
                once they arrive.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Get the quote in writing with a paint specification</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                A professional quote should include: the full scope of work, the specific paint products
                being used (brand and product name), the number of coats, the total price, and any
                exclusions. If the quote says &quot;paint as agreed&quot; rather than specifying the product,
                ask for clarification. You should know whether you are getting Dulux Trade emulsion or
                something from a discount wholesaler — the difference in durability is significant.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Get three quotes, but do not default to the cheapest</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                Three quotes give you a realistic sense of market rate. A quote that is 30–40% below the
                others usually means one of three things: the contractor is cutting preparation short,
                using inferior materials, or has underestimated the work and will raise the price mid-project.
                The middle or upper quote from a well-reviewed contractor is almost always the better
                investment over a 5-year horizon.
              </p>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Step 3: Questions to Ask</h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    q: 'What preparation will you do before painting?',
                    why: 'The answer should include: cleaning, sanding, filling, priming bare areas. If they say "just put the paint on", that is a red flag.',
                  },
                  {
                    q: 'What paint products will you use, and why did you choose them?',
                    why: 'A professional should be able to name specific products and explain the choice. Vague answers like "good quality paint" are not good enough.',
                  },
                  {
                    q: 'How many coats are included?',
                    why: 'For a standard repaint over existing paint: one mist coat and two topcoats. For dark-to-light colour changes: sometimes three topcoats. Anything less than two topcoats is cutting corners.',
                  },
                  {
                    q: 'Are you able to carry out any plastering work the walls might need?',
                    why: 'A decorator who cannot plaster means you may need to source and coordinate a separate trade. A decorator who does both simplifies the process considerably.',
                  },
                  {
                    q: 'What happens if you find additional work once you start?',
                    why: 'A professional will tell you about unexpected issues (e.g. failed plaster, damp) and agree any additional cost with you before proceeding. Unexpected add-ons without discussion are a warning sign.',
                  },
                  {
                    q: 'Do you clean up at the end of each day?',
                    why: 'A professional leaves the working area tidy at the end of each day — floors covered, tools stored, no paint smears on skirting or switches. Ask about their site discipline.',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-[#faf8f5] rounded-xl p-5 border border-[#e8e4df]">
                    <h4 className="font-serif text-[#1a1a2e] mb-2">&ldquo;{item.q}&rdquo;</h4>
                    <p className="text-[#6b7280] text-sm leading-relaxed"><strong>Why ask: </strong>{item.why}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Red Flags: When to Walk Away</h2>

              <div className="bg-[#fef2f2] rounded-xl p-6 border border-[#fecaca] mb-8">
                <ul className="space-y-3 text-[#3d3d3d] text-sm">
                  {[
                    'Requests cash payment upfront — a small deposit is reasonable; paying for all work before it starts is not',
                    'Cannot provide insurance documentation when asked',
                    'Gives a fixed quote without visiting the property',
                    'Cannot name the specific paint products they intend to use',
                    'Has no verified reviews, or only generic five-star reviews with no detail',
                    'Is evasive about what preparation is included',
                    'Significantly undercuts all other quotes without a clear explanation',
                    'Pressures you to decide immediately or claims the price is only available today',
                  ].map((flag, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#ef4444] font-bold flex-shrink-0">✗</span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">What Good Looks Like</h2>

              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                The best decorating jobs in London share the same characteristics: thorough preparation,
                the right product for each surface, clean application with no shortcuts, and a contractor
                who communicates clearly throughout. After {reviews.yearsExperience} years working across
                areas including{' '}
                <Link href="/locations/southgate" className="text-[#b8860b] hover:underline">Southgate</Link>,{' '}
                <Link href="/locations/enfield" className="text-[#b8860b] hover:underline">Enfield</Link>,{' '}
                <Link href="/locations/wimbledon" className="text-[#b8860b] hover:underline">Wimbledon</Link>,{' '}
                <Link href="/locations/clapham" className="text-[#b8860b] hover:underline">Clapham</Link>, and{' '}
                <Link href="/locations/kingston" className="text-[#b8860b] hover:underline">Kingston</Link>,
                those are the standards I hold my own work to.
              </p>

              <div className="bg-[#1a1a2e] rounded-2xl p-8 text-white mb-8">
                <h3 className="font-serif text-white text-xl mb-4">What to Expect from Bozhiqi Painting & Decorating</h3>
                <ul className="space-y-3 text-[#e8e4df] text-sm">
                  {[
                    `${reviews.checkatrade.score}/${reviews.checkatrade.outOf} on Checkatrade — ${reviews.checkatrade.count} verified reviews`,
                    'Full public liability insurance — certificate available on request',
                    'Free site visit with a written, itemised fixed-price quote',
                    'Named paint specification included in every quote',
                    'Plastering and decorating under one contractor — no third parties to coordinate',
                    'Daily clean-up and respectful treatment of your home',
                    'Response to enquiries within 45 minutes during business hours',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#b8860b] font-bold flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#faf8f5] section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="brass-divider mx-auto" aria-hidden="true" />
          <h2 className="font-serif text-[#1a1a2e] text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a2e] section-py">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="font-serif text-white mb-4">Ready to Get a Quote from a Decorator You Can Trust?</h2>
          <p className="text-[#e8e4df] mb-8 max-w-xl mx-auto">
            Free site visit, written fixed-price quotation, full paint specification, and{' '}
            {reviews.yearsExperience} years of verified London experience.{' '}
            {reviews.checkatrade.summary} on Checkatrade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#9a7009] transition-all"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:07828288449"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all"
            >
              Call 07828 288 449
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
