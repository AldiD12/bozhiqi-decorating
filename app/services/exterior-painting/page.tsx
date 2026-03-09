import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import Image from 'next/image';
import FAQAccordion from '@/app/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Exterior Painting London | Bozhiqi Painting & Decorating',
  description:
    'Professional exterior painting across London. Masonry, render, pebbledash, fascias & soffits. 15 years experience. 9.78/10 Checkatrade. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/services/exterior-painting',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Exterior Painting',
  serviceType: 'Exterior Painting & Property Maintenance',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bozhiqi Painting & Decorating',
    url: 'https://bozhiqidecorating.co.uk',
    telephone: '+447828288449',
  },
  areaServed: { '@type': 'City', name: 'London' },
  description: 'Professional exterior painting including masonry, render, pebbledash, fascias, soffits, and exterior woodwork. Dulux Weathershield specialists.',
};

const faqs = [
  {
    question: 'What is the best time of year for exterior painting in London?',
    answer:
      'We recommend exterior painting between April and October when temperatures are consistently above 10°C and rainfall is lower. However, we monitor forecasts carefully and can often work through the cooler months on sheltered surfaces. We never apply exterior paint in frost, rain, or temperatures below 5°C.',
  },
  {
    question: 'How long will exterior paint last?',
    answer:
      'With proper surface preparation and a quality paint system such as Dulux Weathershield or Sandtex, exterior paint should last 8-12 years before requiring a full repaint. Annual touch-ups to exposed areas can extend this significantly.',
  },
  {
    question: 'Do you pressure wash before painting?',
    answer:
      'Yes, pressure washing is a standard part of our exterior preparation process. We remove all dirt, algae, moss, and loose paint before we begin any painting work. This is essential for paint adhesion and a lasting finish.',
  },
];

export default function ExteriorPaintingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-[#1a1a2e] text-white py-12 md:py-20">
        <div className="max-w-content mx-auto px-4 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <Breadcrumb items={[{ name: 'Services', href: '/services' }, { name: 'Exterior Painting', href: '/services/exterior-painting' }]} />
            <h1 className="font-serif text-white mt-4">Exterior Painting & Property Maintenance</h1>
            <p className="text-[#e8e4df] text-lg mt-4 max-w-2xl">
              Weather-resistant masonry and woodwork painting that protects your property and maintains its value for years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="bg-[#b8860b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#9a7009] transition-all text-center">Get a Free Quote</Link>
              <a href="tel:07828288449" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all text-center">Call 07828 288 449</a>
            </div>
          </div>
          <div className="relative -mx-4 md:mx-0 aspect-[16/10] md:aspect-[4/3] md:rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.4)] mt-8 md:mt-0">
            <Image
              src="/images/exterior-painting-detached-house-north-london.webp"
              alt="Full exterior repaint of large detached house in North London"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto prose-body space-y-5 text-[#3d3d3d] leading-relaxed">
            <h2 className="font-serif text-[#1a1a2e]">Professional Exterior Painting in London</h2>
            <p>
              Exterior painting is one of the most impactful investments you can make in your property. A fresh,
              well-applied masonry paint system not only transforms the appearance of your home — it provides
              essential protection against the damp, freeze-thaw cycles, and UV degradation that are constant
              threats to London properties.
            </p>
            <p>
              Exterior painting is also where preparation matters most. Paint applied to a dirty, damp, or
              poorly primed surface will fail within a season. Our exterior painting process begins with
              thorough pressure washing to remove algae, moss, and loose material, followed by careful
              assessment of the masonry for cracks, spalling, or water ingress. We treat and repair before
              we ever open a tin of paint.
            </p>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Exterior Surfaces We Paint</h2>
            <p>We handle all types of London residential exterior surfaces, including:</p>
            <ul className="space-y-2 pl-4">
              <li><strong>Masonry paint</strong> — brick, stone, and blockwork rendered with breathable masonry systems</li>
              <li><strong>Render & pebbledash</strong> — specialist preparation and weathershield application for rendered surfaces</li>
              <li><strong>Fascias & soffits</strong> — uPVC and timber fascias cleaned, primed, and painted</li>
              <li><strong>Guttering</strong> — painted to match or complement the property colour scheme</li>
              <li><strong>Exterior woodwork</strong> — window frames, doors, garden gates, and fences</li>
              <li><strong>Garage doors</strong> — up-and-over and sectional doors in gloss or specialist exterior paint</li>
            </ul>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Paint Systems We Use</h2>
            <p>
              We work exclusively with professional-grade exterior paint systems designed for the British climate.
              Our preferred products include <strong>Dulux Weathershield</strong>, <strong>Sandtex</strong>,
              and breathable masonry paint for older properties. We match the paint system to the substrate —
              a breathable paint on a Victorian brick house, a more elastic coating on rendered surfaces that
              may continue to move.
            </p>
            <p>
              For period properties, we are experienced in applying <strong>limewash</strong> and traditional
              mineral paints that allow old masonry to breathe correctly and avoid the moisture trapping that
              causes so many problems with modern paints on historic buildings.
            </p>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Areas We Cover</h2>
            <p>
              We carry out exterior painting throughout North London — including{' '}
              <Link href="/locations/southgate" className="text-[#b8860b] hover:underline">Southgate</Link>,{' '}
              <Link href="/locations/enfield" className="text-[#b8860b] hover:underline">Enfield</Link>, and{' '}
              <Link href="/locations/finchley" className="text-[#b8860b] hover:underline">Finchley</Link> —
              and South London, including{' '}
              <Link href="/locations/wimbledon" className="text-[#b8860b] hover:underline">Wimbledon</Link>,{' '}
              <Link href="/locations/kingston" className="text-[#b8860b] hover:underline">Kingston</Link>, and{' '}
              <Link href="/locations/purley" className="text-[#b8860b] hover:underline">Purley</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="brass-divider mx-auto" aria-hidden="true" />
          <h2 className="font-serif text-[#1a1a2e] text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] section-py">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="font-serif text-white mb-4">Get an Exterior Painting Quote</h2>
          <p className="text-[#e8e4df] mb-8">Free site visit, fixed-price quotation. Response within 45 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#9a7009] transition-all">Get a Free Quote</Link>
            <a href="tel:07828288449" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all">Call 07828 288 449</a>
          </div>
        </div>
      </section>
    </>
  );
}
