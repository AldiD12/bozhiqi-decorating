import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FAQAccordion from '@/app/components/FAQAccordion';
import { reviews } from '@/app/data/reviews';

export const metadata: Metadata = {
  title: 'Do I Need a Plasterer Before Painting? When to Plaster vs Just Paint | Bozhiqi',
  description:
    'Expert guide on when walls need plastering before painting. Learn to identify what your walls actually need — and avoid paying for work you don\'t.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/blog/plasterer-before-painting-guide',
  },
  openGraph: {
    title: 'Do I Need a Plasterer Before Painting? When to Plaster vs Just Paint',
    description:
      'Expert guide on when walls need plastering before painting. Learn to identify what your walls actually need.',
    url: 'https://bozhiqidecorating.co.uk/blog/plasterer-before-painting-guide',
  },
};

const faqs = [
  {
    question: 'Can I paint directly over bare plaster?',
    answer:
      'Yes, but only once it has fully dried — typically 4–6 weeks for new plaster. The first coat must be a mist coat: emulsion diluted with approximately 10% water. This allows moisture to escape and prevents blistering. Applying full-strength paint over green (undried) plaster is one of the most common decorating mistakes and will cause peeling within weeks.',
  },
  {
    question: 'What does a skim coat cost in London?',
    answer:
      'A skim coat costs approximately £15–£25 per m² in London, including materials and labour. A typical bedroom (approximately 40m² of wall area) would cost £600–£1,000 to skim. Ceilings are priced similarly. Where we are skimming and then painting, the combined cost is often more competitive than hiring a plasterer and decorator separately.',
  },
  {
    question: 'How long after plastering can I paint?',
    answer:
      'Minimum 4 weeks for new plaster applied over plasterboard. 6 weeks is preferable for thick backing coats or plaster on masonry, which holds more moisture. The plaster should be an even, light pink/cream colour throughout with no darker damp patches before you paint. Rushing this stage causes blistering, cracking, and adhesion failure.',
  },
  {
    question: 'Is it better to skim plaster or fill and sand?',
    answer:
      'For walls with many small cracks and imperfections across the whole surface, skimming gives a superior result and is often more cost-effective than filling dozens of individual defects. For walls with one or two isolated cracks or dents, filling and sanding is quicker and cheaper. A professional assessment tells you which approach is right — it is not always obvious from photographs.',
  },
];

export default function PlastererBeforePaintingPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Do I Need a Plasterer Before Painting? When to Plaster vs Just Paint',
    image: 'https://bozhiqidecorating.co.uk/images/plastering-painting-hallway-arched-ceiling.webp',
    datePublished: '2026-03-03T08:00:00+00:00',
    dateModified: '2026-03-03T08:00:00+00:00',
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
            <span className="text-[#3d3d3d]">Do I Need a Plasterer Before Painting?</span>
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
                  Preparation
                </span>
                <span className="text-[#6b7280] text-sm">March 3, 2026</span>
                <span className="text-[#6b7280] text-sm">•</span>
                <span className="text-[#6b7280] text-sm">7 min read</span>
                <span className="text-[#6b7280] text-sm">•</span>
                <span className="text-[#6b7280] text-sm">By Jetmir Bozhiqi</span>
              </div>
              <h1 className="font-serif text-[#0f172a] mb-4 text-4xl md:text-6xl font-normal tracking-tight">
                Do I Need a Plasterer Before Painting?
              </h1>
              <p className="text-[#3d3d3d] text-lg md:text-xl leading-relaxed">
                One of the most common questions homeowners ask before decorating. The honest answer is:
                sometimes yes, often no — and knowing the difference saves you real money.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8 shadow-xl">
              <Image
                src="/images/plastering-painting-hallway-arched-ceiling.webp"
                alt="Hallway with freshly plastered and painted arched vaulted ceiling in London property"
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
                Most decorators will tell you that walls need to be smooth before they can be painted properly.
                That is true. What they do not always explain is that <strong>"smooth" does not always mean
                "fully replastered"</strong>. The right answer depends entirely on the current condition of
                your walls — and there is a spectrum of options between a fresh skim coat and a simple fill
                and sand.
              </p>

              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                After {reviews.yearsExperience} years of assessing London walls before decorating them,
                here is how I approach the question.
              </p>

              <div className="brass-divider" aria-hidden="true" />
              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">The Decision Framework: 4 Wall Conditions</h2>

              <div className="space-y-6 mb-10">
                <div className="bg-[#faf8f5] rounded-xl p-6 border-l-4 border-[#22c55e]">
                  <h3 className="font-serif text-[#1a1a2e] text-lg mb-2">Condition 1: Walls in good shape</h3>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed mb-3">
                    Existing paint is sound, no cracks or damp, no peeling or flaking. Surface may just be
                    dirty or dated.
                  </p>
                  <p className="font-semibold text-[#1a1a2e] text-sm">
                    What you need: <span className="text-[#22c55e]">Paint only.</span> A clean, sand, and two topcoats.
                    No plastering required.
                  </p>
                </div>

                <div className="bg-[#faf8f5] rounded-xl p-6 border-l-4 border-[#b8860b]">
                  <h3 className="font-serif text-[#1a1a2e] text-lg mb-2">Condition 2: Minor cracks and isolated damage</h3>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed mb-3">
                    A few hairline cracks, one or two holes, perhaps some old picture hook damage or a previous
                    repair that has shrunk. The overall surface is sound.
                  </p>
                  <p className="font-semibold text-[#1a1a2e] text-sm">
                    What you need: <span className="text-[#b8860b]">Fill and sand.</span> Individual defects
                    filled with fine surface filler, sanded flush, and primed. Plastering the whole wall
                    would be overkill.
                  </p>
                </div>

                <div className="bg-[#faf8f5] rounded-xl p-6 border-l-4 border-[#f97316]">
                  <h3 className="font-serif text-[#1a1a2e] text-lg mb-2">Condition 3: Multiple cracks, rough or uneven surface</h3>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed mb-3">
                    Many hairline cracks spreading across the wall, uneven texture from previous paint build-up,
                    patchy areas from old repairs, or a surface that has never been properly finished. Paint
                    will highlight rather than hide these imperfections.
                  </p>
                  <p className="font-semibold text-[#1a1a2e] text-sm">
                    What you need: <span className="text-[#f97316]">Skim coat.</span> A thin 2–3mm layer of
                    finish plaster over the existing surface creates a smooth, paint-ready substrate. This is
                    usually more cost-effective than filling dozens of defects individually.
                  </p>
                </div>

                <div className="bg-[#faf8f5] rounded-xl p-6 border-l-4 border-[#ef4444]">
                  <h3 className="font-serif text-[#1a1a2e] text-lg mb-2">Condition 4: Structural issues, damp, or failed plaster</h3>
                  <p className="text-[#3d3d3d] text-sm leading-relaxed mb-3">
                    Hollow-sounding areas when tapped, large sections of plaster pulling away from the wall,
                    active damp patches, or plaster that crumbles when probed. Skimming over failed plaster
                    is a waste of money.
                  </p>
                  <p className="font-semibold text-[#1a1a2e] text-sm">
                    What you need: <span className="text-[#ef4444]">Full replastering</span> after addressing
                    the underlying issue (damp source, structural movement). Painting over failed plaster
                    only delays the problem.
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">The Most Common London Wall Issues</h2>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Hairline cracks in Victorian and Edwardian homes</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                The most common issue in London period properties. Victorian and Edwardian lime plaster is
                flexible but moves with seasonal temperature changes, producing hairline cracks over time.
                If the cracks are superficial and stable (not growing), they do not indicate structural
                problems — they are a normal characteristic of old plaster.
              </p>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                For isolated cracks, fine surface filler and sanding is sufficient. For walls with many
                cracks spread across the whole surface, a skim coat gives a better result and
                is often the more economical option once you factor in the time to fill dozens of
                individual hairlines.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Textured ceilings (Artex)</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Artex textured ceilings are extremely common in London homes built or renovated between
                the 1960s and 1990s. You do not need to remove Artex before painting — but if you want a
                smooth ceiling, the most effective solution is to skim plaster over it rather than scrape
                it off (which is messy and risks damaging the ceiling underneath).
              </p>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                <strong>Important:</strong> Artex installed before 1984 may contain chrysotile asbestos.
                It must be tested before any attempt to remove or aggressively disturb it. Skimming over
                undisturbed Artex is generally safe and avoids this issue entirely.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Walls after wallpaper removal</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Stripping wallpaper almost always damages the surface underneath — either leaving adhesive
                residue, tearing the paper face of plasterboard, or pulling off patches of plaster. In most
                cases, walls stripped of paper need to be assessed before painting. Light damage can be
                filled and sanded; extensive damage usually warrants a skim coat for a proper result.
              </p>
              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                Painting directly onto a surface with old adhesive residue causes adhesion failure and an
                uneven finish. At minimum, a stabilising primer is needed; more often, skimming gives a
                far better outcome.
              </p>

              <div className="bg-[#b8860b]/5 border-l-4 border-[#b8860b] p-6 mb-8">
                <h4 className="font-serif text-[#1a1a2e] text-lg mb-2">The Advantage of One Contractor for Both</h4>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">
                  Most painting and decorating firms do not offer plastering, and most plasterers do not
                  decorate. Hiring separately means two site visits, two sets of fees, and the risk of
                  one trade damaging the other&apos;s work. At Bozhiqi Painting & Decorating, Jetmir handles
                  both plastering and decorating — assessing exactly what is needed, doing only the work
                  required, and taking responsibility for the complete result from bare wall to finished surface.
                  See our{' '}
                  <Link href="/services/plaster-to-paint" className="text-[#b8860b] hover:underline">
                    plaster-to-paint service
                  </Link>{' '}
                  for full details.
                </p>
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">The Preparation Costs Explained</h2>

              <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#e8e4df] mb-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#e8e4df]">
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Work type</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Typical cost</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">When it is needed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { work: 'Clean and sand walls', cost: 'Included in painting quote', when: 'All walls before painting' },
                      { work: 'Fill hairline cracks (per room)', cost: '£40 – £80', when: 'Isolated cracks, good overall surface' },
                      { work: 'Fill holes/damage (per repair)', cost: '£15 – £40', when: 'Localised damage from fixings, impacts' },
                      { work: 'Skim coat (per m²)', cost: '£15 – £25/m²', when: 'Many cracks, rough surface, post-wallpaper' },
                      { work: 'Skim coat — average bedroom', cost: '£600 – £1,000', when: 'Full room with 40m² wall area' },
                      { work: 'Skim coat — ceiling only', cost: '£250 – £500', when: 'Textured, cracked, or Artex ceiling' },
                      { work: 'Full replaster (per m²)', cost: '£25 – £45/m²', when: 'Failed plaster, damp damage, structural issues' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#e8e4df]/50">
                        <td className="py-3 font-semibold text-[#1a1a2e]">{row.work}</td>
                        <td className="py-3 text-[#b8860b] font-semibold">{row.cost}</td>
                        <td className="py-3 text-[#6b7280] text-xs">{row.when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Questions to Ask Before You Book</h2>

              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                When getting quotes for a decorating project, ask each contractor directly:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Do my walls need any plastering work before painting, and if so, what specifically?',
                  'Are you able to carry out any plastering required, or will I need to source a separate plasterer?',
                  'What preparation is included in your painting quote?',
                  'How will you treat the walls after wallpaper removal?',
                  'What happens if you discover additional preparation needs once work has started?',
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#b8860b]/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#b8860b] text-xs font-bold">?</span>
                    </div>
                    <p className="text-[#3d3d3d] text-sm leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                A decorator who cannot answer these questions clearly — or who says all walls are fine
                without inspecting them — is worth approaching with caution. Preparation is where corners
                are cut, and a beautifully applied topcoat over a poorly prepared surface will not last.
              </p>

              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                For further reading on our plastering services, visit the{' '}
                <Link href="/services/plastering" className="text-[#b8860b] hover:underline">plastering service page</Link>.
                We cover plastering and decorating projects across{' '}
                <Link href="/locations/southgate" className="text-[#b8860b] hover:underline">Southgate</Link>,{' '}
                <Link href="/locations/streatham" className="text-[#b8860b] hover:underline">Streatham</Link>,{' '}
                <Link href="/locations/mitcham" className="text-[#b8860b] hover:underline">Mitcham</Link>,{' '}
                and throughout London.
              </p>

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
          <h2 className="font-serif text-white mb-4">Not Sure What Your Walls Need?</h2>
          <p className="text-[#e8e4df] mb-8 max-w-xl mx-auto">
            A free site visit gives you a definitive answer. Jetmir will assess your walls, tell you
            exactly what preparation is needed, and provide a fixed-price quote covering everything
            from bare wall to finished surface. {reviews.checkatrade.summary} on Checkatrade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#9a7009] transition-all"
            >
              Book a Free Site Visit
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
