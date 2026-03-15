import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FAQAccordion from '@/app/components/FAQAccordion';
import { reviews } from '@/app/data/reviews';

export const metadata: Metadata = {
  title: 'Painting vs Wallpaper: Which Is Better for Your London Home? (2026) | Bozhiqi',
  description:
    'Expert comparison of painting versus wallpaper for London homes. Real costs, durability, and which option suits each room — from a decorator with 15 years of experience.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/blog/painting-vs-wallpaper-london-2026',
  },
  openGraph: {
    title: 'Painting vs Wallpaper: Which Is Better for Your London Home? (2026)',
    description:
      'Expert comparison of painting versus wallpaper for London homes. Real costs, durability, and which option suits each room.',
    url: 'https://bozhiqidecorating.co.uk/blog/painting-vs-wallpaper-london-2026',
  },
};

const faqs = [
  {
    question: 'Is wallpaper cheaper than painting in London?',
    answer:
      'Not usually. A painted feature wall costs £80–£150 in labour. A wallpapered feature wall using mid-range paper costs £200–£500 in labour plus £30–£120 for the paper itself. Standard wallpaper for a full room adds up quickly — expect £400–£900 including materials. Painting a full room typically costs £250–£700 depending on size.',
  },
  {
    question: 'How long does wallpaper last compared to paint?',
    answer:
      'Quality wallpaper — properly hung on prepared walls — lasts 10–15 years. A professionally painted room using trade-grade emulsion lasts 5–8 years before requiring a refresh. Wallpaper has the longer lifespan but is harder to change and more expensive to replace.',
  },
  {
    question: 'Can you wallpaper over painted walls?',
    answer:
      'Yes, in most cases. The painted surface must be in good condition — no flaking, peeling, or damp. We lightly sand shiny painted surfaces before papering to help adhesion. Wallpapering directly over heavily textured paint is not advised; the surface should be skimmed smooth first.',
  },
  {
    question: 'Which is better for period properties in London?',
    answer:
      'Both work beautifully in period properties. Wallpaper suits Victorian and Edwardian reception rooms where pattern and texture add historical authenticity. Paint suits spaces where you want to highlight architectural features — coving, cornicing, panelling — without competing pattern. Many period homes use both: wallpapered reception rooms and painted bedrooms.',
  },
];

export default function PaintingVsWallpaperPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Painting vs Wallpaper: Which Is Better for Your London Home? (2026)',
    image: 'https://bozhiqidecorating.co.uk/images/interior-painting-panelled-reception-room-herringbone.webp',
    datePublished: '2026-03-08T08:00:00+00:00',
    dateModified: '2026-03-08T08:00:00+00:00',
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
            <span className="text-[#3d3d3d]">Painting vs Wallpaper</span>
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
                  Design
                </span>
                <span className="text-[#6b7280] text-sm">March 8, 2026</span>
                <span className="text-[#6b7280] text-sm">•</span>
                <span className="text-[#6b7280] text-sm">6 min read</span>
                <span className="text-[#6b7280] text-sm">•</span>
                <span className="text-[#6b7280] text-sm">By Jetmir Bozhiqi</span>
              </div>
              <h1 className="font-serif text-[#0f172a] mb-4 text-4xl md:text-6xl font-normal tracking-tight">
                Painting vs Wallpaper: Which Is Better for Your London Home?
              </h1>
              <p className="text-[#3d3d3d] text-lg md:text-xl leading-relaxed">
                After {reviews.yearsExperience} years painting and papering London homes, I get asked this question
                on almost every quote. Here is my honest answer — with real costs and room-by-room guidance.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8 shadow-xl">
              <Image
                src="/images/interior-painting-panelled-reception-room-herringbone.webp"
                alt="Elegantly decorated London reception room with painted panelling and herringbone floor"
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
                The short answer: <strong>it depends on the room, the look you want, and your budget.</strong> Both
                have genuine strengths. But the decision is less complicated than it seems once you understand
                what each option actually involves — and costs.
              </p>

              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                I have hung thousands of metres of wallpaper and painted hundreds of rooms across North and South
                London. Here is what I have learned.
              </p>

              <div className="brass-divider" aria-hidden="true" />
              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">The Cost Comparison</h2>

              <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#e8e4df] mb-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#e8e4df]">
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Scope</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Paint (labour + materials)</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Wallpaper (labour + materials)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { scope: 'Feature wall', paint: '£80 – £150', paper: '£230 – £620' },
                      { scope: 'Small bedroom (full room)', paint: '£250 – £400', paper: '£450 – £750' },
                      { scope: 'Large bedroom (full room)', paint: '£350 – £550', paper: '£600 – £1,000' },
                      { scope: 'Living room / reception', paint: '£450 – £700', paper: '£700 – £1,300' },
                      { scope: 'Hallway (papered walls only)', paint: '£200 – £350', paper: '£350 – £700' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#e8e4df]/50">
                        <td className="py-3 font-semibold text-[#1a1a2e]">{row.scope}</td>
                        <td className="py-3 text-[#3d3d3d] font-semibold">{row.paint}</td>
                        <td className="py-3 text-[#b8860b] font-semibold">{row.paper}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#6b7280] text-sm mb-8 italic">
                *Wallpaper costs assume mid-range paper (£20–£50 per roll). Designer papers (Farrow & Ball, Cole & Son,
                Little Greene) can add £100–£400+ to material costs alone.
              </p>

              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                Wallpaper is almost always more expensive upfront. The higher cost reflects additional labour time
                (pattern matching, precision hanging, cutting around architrave and switches), plus the material cost
                of the paper itself. A standard room takes 1–2 days to paint; the same room wallpapered takes 2–3 days.
              </p>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Where Wallpaper Wins</h2>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Pattern, texture, and depth</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Paint cannot replicate the visual depth of a well-chosen wallpaper. Textured papers — grasscloth,
                linen weave, embossed patterns — add a tactile quality that paint simply cannot match. For a
                statement reception room or a feature wall that becomes a genuine focal point, wallpaper is the
                stronger choice.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Covering imperfect walls</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Counterintuitively, wallpaper can disguise walls that are not perfectly smooth. Heavily textured
                papers — anaglypta, woodchip, thick embossed designs — conceal uneven surfaces that paint would
                expose. On walls that would need extensive skimming before painting, papering can sometimes be
                more cost-effective.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Period properties</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Victorian and Edwardian homes in areas like{' '}
                <Link href="/locations/finchley" className="text-[#b8860b] hover:underline">Finchley</Link>,{' '}
                <Link href="/locations/southgate" className="text-[#b8860b] hover:underline">Southgate</Link>, and{' '}
                <Link href="/locations/wimbledon" className="text-[#b8860b] hover:underline">Wimbledon</Link>{' '}
                often have large, high-ceilinged reception rooms where patterned wallpaper
                feels historically appropriate. A well-chosen paper in these spaces adds character that flat
                paint often cannot.
              </p>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Where Paint Wins</h2>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Flexibility and ease of change</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Paint is far easier to update. Want a different colour in a few years? One coat of primer and two
                topcoats. Changing wallpaper means stripping (which can damage plaster), cleaning, re-lining the
                walls, and starting from scratch — costing as much as the original installation.
                If your taste changes frequently, paint is the practical choice.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Kitchens and bathrooms</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                High-moisture rooms are generally not suitable for standard wallpaper. Steam from cooking and
                bathing lifts adhesive, causes seams to open, and promotes mould behind the paper. Specialist
                vinyl-coated wallpapers exist for wet areas but are limited in design choice. For kitchens and
                bathrooms, a high-quality moisture-resistant paint — or tiles — is the practical solution.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">Highlighting architectural detail</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                London period properties are full of coving, cornicing, ceiling roses, panelling, and picture
                rails. Paint allows you to highlight these features with contrasting colours — painting coving
                in a different shade, or using a deeper tone in a panelled alcove. Wallpaper competes with
                these features; paint works with them.
              </p>

              <div className="bg-[#1a1a2e] rounded-2xl p-8 text-white mb-8">
                <h3 className="font-serif text-white text-xl mb-4">The Approach I Recommend Most Often</h3>
                <p className="text-[#e8e4df] leading-relaxed">
                  Use both. Paint the ceiling and woodwork throughout. Wallpaper one key feature wall —
                  the chimney breast in the living room, the head wall in the main bedroom — and paint the
                  remaining walls in a complementary colour. This gives you the impact of wallpaper without
                  the cost and commitment of papering an entire room. It is also the most forgiving approach
                  if the paper ever needs replacing.
                </p>
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Room-by-Room Recommendation</h2>

              <div className="space-y-4 mb-8">
                {[
                  { room: 'Living room / reception', rec: 'Feature wall in wallpaper, remaining walls painted. Best balance of impact and cost.' },
                  { room: 'Main bedroom', rec: 'Wallpapered head wall above bed if you want a statement. Otherwise paint throughout — calmer and easier to refresh.' },
                  { room: 'Second bedrooms / children\'s rooms', rec: 'Paint. Children\'s taste changes; paint is far cheaper to update.' },
                  { room: 'Hallway & stairs', rec: 'Either works well. A durable painted finish is practical given the daily wear. Wallpaper adds impact if the hallway is the first impression.' },
                  { room: 'Kitchen', rec: 'Paint (moisture-resistant where needed). Wallpaper is not suitable unless it is a specialist vinyl-coated product.' },
                  { room: 'Bathroom', rec: 'Paint with a moisture-resistant formulation. Tiles for splashback areas.' },
                  { room: 'Home office / study', rec: 'Either. A textured or patterned paper on one wall creates a distinctive backdrop for video calls.' },
                ].map((item, i) => (
                  <div key={i} className="bg-[#faf8f5] rounded-xl p-5 border border-[#e8e4df] flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-[#b8860b] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{i + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-serif text-[#1a1a2e] mb-1">{item.room}</h4>
                      <p className="text-[#3d3d3d] text-sm leading-relaxed">{item.rec}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">The Preparation Question</h2>

              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                One thing most guides skip: both options require proper wall preparation. Paint
                applied to cracked, damp, or dirty walls will fail. Wallpaper hung on uneven or
                inadequately primed surfaces will peel. The preparation stage — filling, sanding,
                priming, and in some cases skimming — is the same regardless of the finish you choose.
              </p>

              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                If your walls are in poor condition, consider addressing the underlying issues first. Bozhiqi
                Painting & Decorating offers a complete{' '}
                <Link href="/services/plaster-to-paint" className="text-[#b8860b] hover:underline">
                  plaster-to-paint service
                </Link>{' '}
                — we skim the walls smooth, allow them to cure, then apply your chosen finish. It is
                more cost-effective than paying separately for a plasterer and a decorator.
              </p>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Which Should You Choose?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e4df]">
                  <h4 className="font-serif text-[#1a1a2e] text-lg mb-3">Choose paint if you…</h4>
                  <ul className="space-y-2 text-[#3d3d3d] text-sm">
                    <li>• Want flexibility to redecorate in a few years</li>
                    <li>• Have a kitchen, bathroom, or wet room</li>
                    <li>• Are working to a tighter budget</li>
                    <li>• Want to highlight period architectural features</li>
                    <li>• Prefer a clean, minimal aesthetic</li>
                  </ul>
                </div>
                <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e4df]">
                  <h4 className="font-serif text-[#1a1a2e] text-lg mb-3">Choose wallpaper if you…</h4>
                  <ul className="space-y-2 text-[#3d3d3d] text-sm">
                    <li>• Want a statement room that feels finished and distinctive</li>
                    <li>• Have a period reception room that suits pattern</li>
                    <li>• Are creating a feature wall as a focal point</li>
                    <li>• Have walls that need texture to disguise imperfections</li>
                    <li>• Are prepared to invest for a 10+ year lifespan</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                Both{' '}
                <Link href="/services/interior-painting" className="text-[#b8860b] hover:underline">interior painting</Link>{' '}
                and{' '}
                <Link href="/services/wallpaper-installation" className="text-[#b8860b] hover:underline">wallpaper installation</Link>{' '}
                are core services at Bozhiqi Painting & Decorating. If you are unsure which option suits
                your space, I am happy to advise during a free site visit — with no obligation to book.
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
          <h2 className="font-serif text-white mb-4">Not Sure Which Option Is Right for Your Room?</h2>
          <p className="text-[#e8e4df] mb-8 max-w-xl mx-auto">
            Free site visit across London. I will assess your walls, discuss your goals, and give you an
            honest recommendation — and a fixed-price quote for whichever option you choose.{' '}
            {reviews.checkatrade.summary} on Checkatrade.
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
