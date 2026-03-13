import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FAQAccordion from '@/app/components/FAQAccordion';
import { reviews } from '@/app/data/reviews';

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Paint a Room in London? (2026 Prices) | Bozhiqi',
  description: 
    'Complete breakdown of room painting costs in London for 2026. Real prices from £250-£1,000+ based on room size, paint quality, and complexity.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/blog/room-painting-costs-london-2026',
  },
  openGraph: {
    title: 'How Much Does It Cost to Paint a Room in London? (2026 Prices)',
    description: 
      'Complete breakdown of room painting costs in London for 2026. Real prices from £250-£1,000+ based on room size, paint quality, and complexity.',
    url: 'https://bozhiqidecorating.co.uk/blog/room-painting-costs-london-2026',
  },
};

const faqs = [
  {
    question: 'Why do painting costs vary so much in London?',
    answer: 'Room size, ceiling height, wall condition, paint quality, and preparation requirements all affect costs. A small bedroom with good walls might cost £250, while a large living room needing extensive prep could reach £1,000+.',
  },
  {
    question: 'What\'s included in a typical room painting quote?',
    answer: 'Professional quotes should include surface preparation, primer, two topcoats, cutting in around fixtures, and cleanup. Materials, labour, and any necessary repairs should be clearly itemized.',
  },
  {
    question: 'Is it worth paying extra for premium paint?',
    answer: 'Premium paints like Farrow & Ball offer superior coverage, durability, and finish quality. They typically add £50-£150 to material costs but can last twice as long as budget alternatives.',
  },
  {
    question: 'How can I reduce room painting costs?',
    answer: 'Clear the room yourself, choose standard colours, ensure walls are in good condition, and get multiple quotes. However, don\'t compromise on preparation quality as this affects longevity.',
  },
];

const pricingData = [
  {
    roomType: 'Small Bedroom',
    size: '3m x 3m',
    standardCost: '£250 - £400',
    premiumCost: '£350 - £550',
    notes: 'Single bed room, standard ceiling height',
  },
  {
    roomType: 'Large Bedroom',
    size: '4m x 4m',
    standardCost: '£350 - £550',
    premiumCost: '£450 - £700',
    notes: 'Double bed room, may include fitted wardrobes',
  },
  {
    roomType: 'Living Room',
    size: '5m x 4m',
    standardCost: '£450 - £700',
    premiumCost: '£600 - £950',
    notes: 'Standard lounge, includes feature wall option',
  },
  {
    roomType: 'Large Living Room',
    size: '6m x 5m+',
    standardCost: '£600 - £900',
    premiumCost: '£800 - £1,200',
    notes: 'Open plan or high ceilings, complex cutting in',
  },
  {
    roomType: 'Kitchen',
    size: '3m x 4m',
    standardCost: '£300 - £500',
    premiumCost: '£400 - £650',
    notes: 'Walls only, extensive cutting around units',
  },
  {
    roomType: 'Bathroom',
    size: '2m x 2m',
    standardCost: '£200 - £350',
    premiumCost: '£280 - £450',
    notes: 'Moisture-resistant paint, detailed work around fixtures',
  },
];

export default function RoomPaintingCostsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does It Cost to Paint a Room in London? (2026 Prices)',
    image: 'https://bozhiqidecorating.co.uk/images/interior-painting-open-plan-dining-room-neutral.webp',
    datePublished: '2026-03-10T08:00:00+00:00',
    dateModified: '2026-03-10T08:00:00+00:00',
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
            <span className="text-[#3d3d3d]">Room Painting Costs London 2026</span>
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
                <span className="text-[#6b7280] text-sm">March 10, 2026</span>
                <span className="text-[#6b7280] text-sm">•</span>
                <span className="text-[#6b7280] text-sm">8 min read</span>
                <span className="text-[#6b7280] text-sm">•</span>
                <span className="text-[#6b7280] text-sm">By Jetmir Bozhiqi</span>
              </div>
              <h1 className="font-serif text-[#0f172a] mb-4 text-4xl md:text-6xl font-normal tracking-tight">
                How Much Does It Cost to Paint a Room in London? (2026 Prices)
              </h1>
              <p className="text-[#3d3d3d] text-lg md:text-xl leading-relaxed">
                Complete breakdown of room painting costs in London for 2026, based on real project data 
                from {reviews.yearsExperience} years of professional decorating experience.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8 shadow-xl">
              <Image
                src="/images/interior-painting-open-plan-dining-room-neutral.webp"
                alt="Professional room painting showing neutral walls in open plan dining room"
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
                If you're planning to paint a room in London, you're probably wondering about costs. After completing 
                hundreds of room painting projects across North and South London, I can give you the real numbers 
                based on actual project data from 2026.
              </p>

              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                <strong>The short answer:</strong> Room painting in London typically costs between £250 for a small 
                bedroom and £1,200+ for a large living room with premium finishes. But there's much more to consider.
              </p>

              <div className="brass-divider" aria-hidden="true" />
              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">2026 Room Painting Costs: Complete Breakdown</h2>

              <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#e8e4df] mb-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#e8e4df]">
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Room Type</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Size</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Standard Paint</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Premium Paint</th>
                      <th className="text-left py-3 font-serif text-[#1a1a2e]">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.map((row, index) => (
                      <tr key={index} className="border-b border-[#e8e4df]/50">
                        <td className="py-3 font-semibold text-[#1a1a2e]">{row.roomType}</td>
                        <td className="py-3 text-[#6b7280]">{row.size}</td>
                        <td className="py-3 text-[#3d3d3d] font-semibold">{row.standardCost}</td>
                        <td className="py-3 text-[#b8860b] font-semibold">{row.premiumCost}</td>
                        <td className="py-3 text-[#6b7280] text-xs">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[#6b7280] text-sm mb-8 italic">
                *Prices include labour, materials, and VAT. Based on rooms in good condition requiring standard preparation.
              </p>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">What Affects Room Painting Costs?</h2>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">1. Room Size and Ceiling Height</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                This is the biggest cost factor. A 3m x 3m bedroom has roughly 24m² of wall area, while a 6m x 5m 
                living room has 44m² - nearly double. High ceilings (over 2.7m) add 15-25% to costs due to additional 
                surface area and access requirements.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">2. Wall Condition and Preparation</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Walls in good condition need minimal prep - just cleaning and minor filling. However, walls with 
                cracks, holes, or previous wallpaper require extensive preparation that can add £100-£300 to the project cost.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">3. Paint Quality and Brand</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Standard trade emulsions (Dulux Trade, Crown Trade) provide good coverage and durability. Premium 
                brands like Farrow & Ball, Little Greene, or Zoffany offer superior finish quality but add £50-£150 
                to material costs per room.
              </p>

              <h3 className="font-serif text-[#1a1a2e] text-xl mb-4">4. Complexity and Detail Work</h3>
              <p className="text-[#3d3d3d] leading-relaxed mb-8">
                Rooms with lots of fixtures, built-in furniture, or architectural details require more cutting-in time. 
                Kitchens and bathrooms typically cost 20-30% more per square metre due to detailed work around units and fixtures.
              </p>

              <div className="bg-[#1a1a2e] rounded-2xl p-8 text-white mb-8">
                <h3 className="font-serif text-white text-xl mb-4">💡 Professional Tip</h3>
                <p className="text-[#e8e4df] leading-relaxed">
                  The cheapest quote isn't always the best value. A £200 paint job that needs redoing in 18 months 
                  costs more than a £400 job that lasts 5+ years. Always ask about preparation methods, paint quality, 
                  and guarantees.
                </p>
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Hidden Costs to Consider</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e4df]">
                  <h4 className="font-serif text-[#1a1a2e] text-lg mb-3">Additional Preparation</h4>
                  <ul className="space-y-2 text-[#3d3d3d] text-sm">
                    <li>• Wallpaper removal: £3-£5 per m²</li>
                    <li>• Crack repair: £20-£50 per crack</li>
                    <li>• Skim coating: £15-£25 per m²</li>
                    <li>• Primer for stained walls: £30-£60</li>
                  </ul>
                </div>
                <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e4df]">
                  <h4 className="font-serif text-[#1a1a2e] text-lg mb-3">Premium Upgrades</h4>
                  <ul className="space-y-2 text-[#3d3d3d] text-sm">
                    <li>• Feature wall: £80-£150 extra</li>
                    <li>• Ceiling painting: £100-£200</li>
                    <li>• Woodwork refresh: £150-£300</li>
                    <li>• Same-day completion: 15-20% premium</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">How to Get Accurate Quotes</h2>

              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Every room is different, so accurate pricing requires a site visit. Here's what professional 
                decorators assess during quotations:
              </p>

              <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e4df] mb-8">
                <h4 className="font-serif text-[#1a1a2e] text-lg mb-4">What We Measure and Assess:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-[#3d3d3d] text-sm">
                    <li>✓ Exact wall dimensions and ceiling height</li>
                    <li>✓ Current wall condition and surface type</li>
                    <li>✓ Number and complexity of fixtures</li>
                    <li>✓ Access requirements and furniture</li>
                  </ul>
                  <ul className="space-y-2 text-[#3d3d3d] text-sm">
                    <li>✓ Existing paint condition and adhesion</li>
                    <li>✓ Cracks, holes, or damage requiring repair</li>
                    <li>✓ Your preferred paint type and finish</li>
                    <li>✓ Timeline and any special requirements</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Money-Saving Tips</h2>

              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                Here are proven ways to reduce room painting costs without compromising quality:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#b8860b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1">Clear the room yourself</h4>
                    <p className="text-[#3d3d3d] text-sm">Save £50-£100 by moving furniture and removing pictures before we arrive.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#b8860b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1">Choose standard colours</h4>
                    <p className="text-[#3d3d3d] text-sm">Custom colour matching adds £20-£40 per room. Standard whites and neutrals are more cost-effective.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#b8860b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1">Bundle multiple rooms</h4>
                    <p className="text-[#3d3d3d] text-sm">Painting 2-3 rooms together reduces per-room costs by 10-15% due to setup efficiencies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#b8860b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e] mb-1">Book during quieter periods</h4>
                    <p className="text-[#3d3d3d] text-sm">November-February often have better availability and potentially lower rates.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#b8860b]/5 border-l-4 border-[#b8860b] p-6 mb-8">
                <h4 className="font-serif text-[#1a1a2e] text-lg mb-2">⚠️ Don't Compromise On These</h4>
                <p className="text-[#3d3d3d] text-sm leading-relaxed">
                  While it's smart to save money where possible, never compromise on surface preparation, 
                  paint quality, or proper drying time between coats. These shortcuts lead to poor results 
                  and costly repainting within 1-2 years.
                </p>
              </div>

              <h2 className="font-serif text-[#1a1a2e] text-2xl mb-6">Why Choose Professional Painting?</h2>

              <p className="text-[#3d3d3d] leading-relaxed mb-6">
                DIY painting might seem cost-effective, but professional results justify the investment:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-[#1a1a2e] mb-2">Time Saving</h4>
                  <p className="text-[#6b7280] text-sm">Professional completion in 1-2 days vs 1-2 weeks DIY</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-[#1a1a2e] mb-2">Quality Guarantee</h4>
                  <p className="text-[#6b7280] text-sm">12-month guarantee on workmanship and materials</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-[#1a1a2e] mb-2">Professional Results</h4>
                  <p className="text-[#6b7280] text-sm">Perfect edges, even coverage, and long-lasting finish</p>
                </div>
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
          <h2 className="font-serif text-white mb-4">Ready for a Professional Room Painting Quote?</h2>
          <p className="text-[#e8e4df] mb-8 max-w-xl mx-auto">
            Get an accurate, fixed-price quote based on your specific room requirements. 
            {reviews.checkatrade.summary} from verified customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#9a7009] transition-all"
            >
              Get Your Free Quote
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