import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FAQAccordion from '@/app/components/FAQAccordion';
import { reviews } from '@/app/data/reviews';

export const metadata: Metadata = {
  title: 'How Much Does Exterior House Painting Cost in London? (2026 Guide) | Bozhiqi',
  description:
    'Complete 2026 guide to exterior house painting costs in London. Real prices for terraced, semi-detached, and detached properties from a professional decorator.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/blog/exterior-painting-costs-london-2026',
  },
  openGraph: {
    title: 'How Much Does Exterior House Painting Cost in London? (2026 Guide)',
    description:
      'Complete 2026 guide to exterior house painting costs in London. Real prices for terraced, semi-detached, and detached properties.',
    url: 'https://bozhiqidecorating.co.uk/blog/exterior-painting-costs-london-2026',
  },
};

const faqs = [
  {
    question: 'How long does exterior painting last in London?',
    answer:
      'With proper preparation and a quality paint system such as Dulux Weathershield or Sandtex, exterior paint should last 8–12 years before requiring a full repaint. London\'s weather is relatively mild but damp — choosing a breathable, weather-resistant product is essential. Annual touch-ups to exposed window sills and high-wear areas extend the life further.',
  },
  {
    question: 'What is the best time of year for exterior painting in London?',
    answer:
      'April through October is optimal. Temperatures should be consistently above 10°C and the surface must be dry. We never apply exterior paint in frost, rain, or temperatures below 5°C. Booking for spring (March–May) means you capture the full summer season after completion.',
  },
  {
    question: 'Do I need to pressure wash before exterior painting?',
    answer:
      'Yes, always. Pressure washing removes algae, moss, dirt, and loose paint — all of which prevent proper paint adhesion. Skipping this step is the most common reason exterior paint fails prematurely. It is a standard part of our exterior preparation process, included in every quote.',
  },
  {
    question: 'Does exterior painting add value to a property?',
    answer:
      'Kerb appeal directly affects sale valuations. Estate agents and buyers form an opinion within seconds. A fresh exterior paint job on a London terraced house typically costs £800–£1,500 and can add several thousand pounds to the perceived — and achieved — sale value. It is consistently one of the highest-return pre-sale improvements.',
  },
];

const pricingData = [
  {
    propertyType: 'Victorian terraced house',
    description: '2 storeys, brick/render front',
    labourCost: '£800 – £1,200',
    materials: '£150 – £250',
    totalRange: '£950 – £1,450',
    days: '2–3 days',
  },
  {
    propertyType: 'Edwardian terraced house',
    description: '2 storeys, larger frontage',
    labourCost: '£950 – £1,400',
    materials: '£180 – £280',
    totalRange: '£1,130 – £1,680',
    days: '3 days',
  },
  {
    propertyType: 'Semi-detached house',
    description: '2–3 storeys, side return included',
    labourCost: '£1,100 – £1,800',
    materials: '£200 – £350',
    totalRange: '£1,300 – £2,150',
    days: '3–4 days',
  },
  {
    propertyType: 'Detached house',
    description: 'Full external render or masonry',
    labourCost: '£1,600 – £2,800',
    materials: '£300 – £500',
    totalRange: '£1,900 – £3,300',
    days: '4–6 days',
  },
  {
    propertyType: 'Period conversion / flat',
    description: 'Front elevation and shared areas only',
    labourCost: '£400 – £700',
    materials: '£80 – £150',
    totalRange: '£480 – £850',
    days: '1–2 days',
  },
];

export default function ExteriorPaintingCostsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How Much Does Exterior House Painting Cost in London? (2026 Guide)',
    image: 'https://bozhiqidecorating.co.uk/images/exterior-painting-detached-house-north-london.webp',
    datePublished: '2026-03-05T08:00:00+00:00',
    dateModified: '2026-03-05T08:00:00+00:00',
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
            <span className="text-[#3d3d3d]">Exterior Painting Costs London 2026</span>
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
                  Pricing Guide
                </span>
                <span className="text-[#6b7280] text-sm">March 5, 2026</span>
                <span className="text-[#6b7280] text-sm">•</span>
                <span className="text-[#6b7280] text-sm">10 min read</span>
                <span className="text-[#6b7280] text-sm">•</span>
                <span className="text-[#6b7280] text-sm">By Jetmir Bozhiqi</span>
              </div>
              <h1 className="font-serif text-[#0f172a] mb-4 text-4xl md:text-6xl font-normal tracking-tight">
                How Much Does Exterior House Painting Cost in London? (2026 Guide)
              </h1>
              <p className="text-[#3d3d3d] text-lg md:text-xl leading-relaxed">
                Real 2026 prices for exterior house painting in London, broken down by property type.
                Based on {reviews.yearsExperience} years of professional exterior painting projects
                across North and South London.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8 shadow-xl">
              <Image
                src="/images/exterior-painting-detached-house-north-london.webp"
                alt="Full exterior repaint of large detached house in North London"
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
                Exterior painting is seasonal, high-impact, and — done properly — a long-term investment in
                your property. It is also one of the projects where quotes vary wildly, because the scope
                varies wildly. A front door refresh costs a few hundred pounds. A full masonry repaint of
                a detached North London house can cost £3,000+.
              </p>

              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                <strong>The quick answer for a typical London semi-detached house: £1,300–£2,150 all in</strong>,
                including pressure washing, preparation, masonry paint, and labour. Below is the full breakdown.
              </p>

              <div className="brass-divider" aria-hidden="true" />
              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">2026 Exterior Painting Costs by Property Type</h2>

              <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#e8e4df] mb-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#e8e4df]">
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Property</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Description</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Labour</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Materials</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Total</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((row, index) => (
                      <tr key={index} className="border-b border-[#e8e4df]/50">
                        <td className="py-3 font-semibold text-[#1a1a2e]">{row.propertyType}</td>
                        <td className="py-3 text-[#6b7280] text-xs">{row.description}</td>
                        <td className="py-3 text-[#3d3d3d]">{row.labourCost}</td>
                        <td className="py-3 text-[#3d3d3d]">{row.materials}</td>
                        <td className="py-3 text-[#b8860b] font-semibold">{row.totalRange}</td>
                        <td className="py-3 text-[#6b7280] text-xs">{row.days}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#6b7280] text-sm mb-8 italic">
                *Prices assume standard masonry or render exterior, ground level to first-floor eaves.
                Three-storey properties, scaffolding requirements, or specialist surfaces add to the total.
                All prices include VAT.
              </p>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">What Drives the Cost?</h2>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">1. Surface area and height</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                The total paintable surface area is the primary cost driver. A Victorian terraced house in{' '}
                <Link href="/locations/finchley" className="text-[#b8860b] hover:underline">Finchley</Link>{' '}
                might have 45m² of exterior wall; a detached house in{' '}
                <Link href="/locations/wimbledon" className="text-[#b8860b] hover:underline">Wimbledon</Link>{' '}
                might have 180m². Beyond two storeys, scaffolding or a MEWP (cherry picker) is required —
                adding £300–£800 to the project cost.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">2. Surface condition and type</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Smooth rendered surfaces are quickest to paint. Pebbledash requires significantly more
                material and time to achieve proper coverage. Bare or previously unpainted masonry needs
                a stabilising primer coat before topcoating. Cracked or spalling render should be repaired
                before painting — repairs cost £50–£200 depending on extent, but are essential for a
                lasting result.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">3. Preparation requirements</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Preparation is non-negotiable for exterior work. Our standard exterior process includes
                pressure washing, treatment of any algae or moss, filling cracks, priming bare areas, and
                masking windows and fixtures. Preparation typically accounts for 30–40% of the total
                project time. Skipping it is why so many exterior paint jobs fail within 2–3 years.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">4. Paint product</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                We work with Dulux Weathershield, Sandtex, and breathable masonry paints for older
                properties. Weathershield carries a 15-year protection guarantee when properly applied.
                Cheaper masonry paints are available but they require more coats and fail sooner —
                a false economy. For a Victorian brick house, we use breathable paint specifically to
                prevent the moisture trapping that causes damp and spalling.
              </p>

              <div className="bg-[#1a1a2e] rounded-2xl p-8 text-white mb-8">
                <h3 className="font-serif text-white text-xl mb-4">The Cost of Getting It Wrong</h3>
                <p className="text-[#e8e4df] leading-relaxed">
                  Badly applied exterior paint typically fails within 2–3 years. You will see peeling,
                  blistering, or flaking — often caused by painting in unsuitable weather, skipping primer,
                  or using the wrong product for the substrate. Stripping and repainting from scratch costs
                  as much or more than getting it right first time. Always ask for the paint specification
                  before accepting a quote — a contractor who cannot tell you exactly what product they are
                  using is a red flag.
                </p>
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Additional Exterior Surfaces</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e4df]">
                  <h4 className="font-serif text-[#1a1a2e] text-lg mb-3">Woodwork (per item)</h4>
                  <ul className="space-y-2 text-[#3d3d3d] text-sm">
                    <li>• Front door (both sides): £120 – £200</li>
                    <li>• Sash window (each): £80 – £140</li>
                    <li>• Casement window (each): £60 – £100</li>
                    <li>• Fascias & soffits (per linear metre): £8 – £15</li>
                    <li>• Gate or fence panel (each): £40 – £80</li>
                  </ul>
                </div>
                <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e4df]">
                  <h4 className="font-serif text-[#1a1a2e] text-lg mb-3">Extras to budget for</h4>
                  <ul className="space-y-2 text-[#3d3d3d] text-sm">
                    <li>• Scaffolding (3+ storey): £300 – £800</li>
                    <li>• Render crack repairs: £50 – £200</li>
                    <li>• Algae / moss treatment: £80 – £150</li>
                    <li>• Pointing repairs: £100 – £300</li>
                    <li>• Colour consultation: Usually included</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">When to Book — and Why Spring Matters</h2>

              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                The best exterior painting window in London is <strong>April through September</strong>.
                Demand peaks from May onwards once the weather settles — good contractors book up 4–8 weeks
                in advance through summer. If you are planning an exterior repaint for the 2026 season,
                the time to get quotes is <strong>February or March</strong>, when availability is better
                and you are not competing with every other homeowner on your street.
              </p>

              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                We cover exterior painting across{' '}
                <Link href="/locations/enfield" className="text-[#b8860b] hover:underline">Enfield</Link>,{' '}
                <Link href="/locations/southgate" className="text-[#b8860b] hover:underline">Southgate</Link>,{' '}
                <Link href="/locations/purley" className="text-[#b8860b] hover:underline">Purley</Link>,{' '}
                <Link href="/locations/kingston" className="text-[#b8860b] hover:underline">Kingston</Link>, and
                throughout North and South London. Find your area on our{' '}
                <Link href="/locations" className="text-[#b8860b] hover:underline">locations page</Link>.
              </p>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">How to Get an Accurate Quote</h2>

              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Exterior painting cannot be quoted accurately from photos alone. Surface condition, access
                requirements, and the extent of preparation work need to be assessed in person. Our process:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { step: '01', title: 'Free site visit', desc: 'We inspect the exterior surfaces, measure the area, assess condition, and discuss your goals and colour preferences.' },
                  { step: '02', title: 'Fixed-price quotation', desc: 'You receive a written, itemised quote with the exact paint specification. No hidden extras — the price you agree is the price you pay.' },
                  { step: '03', title: 'Scheduled start date', desc: 'We monitor the forecast and confirm a start date when the weather window is suitable. We never rush exterior work to meet an arbitrary schedule.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 bg-[#faf8f5] rounded-xl p-5 border border-[#e8e4df]">
                    <div className="w-10 h-10 bg-[#b8860b] rounded-full flex items-center justify-center flex-shrink-0 font-serif text-white">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-serif text-[#1a1a2e] mb-1">{item.title}</h4>
                      <p className="text-[#3d3d3d] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                Learn more about the full scope of our{' '}
                <Link href="/services/exterior-painting" className="text-[#b8860b] hover:underline">
                  exterior painting service
                </Link>
                , including the paint systems we use and the surfaces we cover.
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
          <h2 className="font-serif text-white mb-4">Get an Exterior Painting Quote This Spring</h2>
          <p className="text-[#e8e4df] mb-8 max-w-xl mx-auto">
            Free site visit, fixed-price quotation, and a full paint specification before you commit.
            Spring slots fill quickly — get in touch now to secure your preferred date.{' '}
            {reviews.checkatrade.summary} on Checkatrade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#9a7009] transition-all"
            >
              Get a Free Quote
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
