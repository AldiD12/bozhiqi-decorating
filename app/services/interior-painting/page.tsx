import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import Image from 'next/image';
import FAQAccordion from '@/app/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Interior Painting London | Bozhiqi Painting & Decorating',
  description:
    'Professional interior painting across London. Emulsion, eggshell, Farrow & Ball specialists. 15 years experience. 9.78/10 Checkatrade. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/services/interior-painting',
  },
  openGraph: {
    title: 'Interior Painting London | Bozhiqi Painting & Decorating',
    description: 'Professional interior painting across London. Farrow & Ball specialists. 15 years experience.',
    url: 'https://bozhiqidecorating.co.uk/services/interior-painting',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Interior Painting',
  serviceType: 'Interior Painting & Decorating',
  image: 'https://bozhiqidecorating.co.uk/images/interior-painting-living-room-fireplace-period-cornicing.webp',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bozhiqi Painting & Decorating',
    url: 'https://bozhiqidecorating.co.uk',
    telephone: '+447828288449',
  },
  areaServed: {
    '@type': 'City',
    name: 'London',
  },
  description:
    'Professional interior painting including emulsion, eggshell, and gloss finishes for all rooms. Farrow & Ball, Little Greene, and Dulux Trade specialists.',
};

const faqs = [
  {
    question: 'How long does interior painting take?',
    answer:
      'The time depends on the size of the property and scope of work. A single room typically takes 1-2 days including preparation. A full 3-bedroom house redecoration usually takes 5-8 days. We will give you a clear timeline with your fixed-price quotation.',
  },
  {
    question: 'Do you supply the paint or do I need to buy it myself?',
    answer:
      'We can supply all paints, or we are happy to use paint you have purchased. If you supply the paint, please ensure you have sufficient quantity — we can advise on the amount needed during our site visit.',
  },
  {
    question: 'Can you help me choose colours and finishes?',
    answer:
      'Yes, absolutely. Jetmir has 15 years of experience advising clients on colour choices, paint finishes (matt, eggshell, satinwood), and which brands perform best in different settings. We are happy to offer guidance as part of your quotation visit.',
  },
];

export default function InteriorPaintingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-12 md:py-20">
        <div className="max-w-content mx-auto px-4 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <Breadcrumb
              items={[
                { name: 'Services', href: '/services' },
                { name: 'Interior Painting', href: '/services/interior-painting' },
              ]}
            />
            <h1 className="font-serif text-white mt-4">Interior Painting Across London</h1>
            <p className="text-[#e8e4df] text-lg mt-4 max-w-2xl">
              Flawless emulsion, eggshell, and specialist finishes for every room — from single bedrooms to whole-house redecorations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="bg-[#b8860b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#9a7009] transition-all text-center">
                Get a Free Quote
              </Link>
              <a href="tel:07828288449" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all text-center">
                Call 07828 288 449
              </a>
            </div>
          </div>
          <div className="relative -mx-4 md:mx-0 aspect-[16/10] md:aspect-[4/3] md:rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.4)] mt-8 md:mt-0">
            <Image
              src="/images/interior-painting-living-room-fireplace-period-cornicing.webp"
              alt="Period living room with freshly painted white walls, fireplace and herringbone floor"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose-body space-y-5 text-[#3d3d3d] leading-relaxed">
              <h2 className="font-serif text-[#1a1a2e]">Professional Interior Painting in London</h2>
              <p>
                Interior painting is the most transformative thing you can do to a property. A fresh coat of
                emulsion in the right colour can make a dark hallway feel light and spacious, turn a tired
                bedroom into a serene retreat, or give a kitchen a modern, vibrant energy. But achieving that
                transformation requires far more than opening a tin of paint.
              </p>
              <p>
                At Bozhiqi Painting & Decorating, every interior painting project begins with thorough
                preparation. We fill hairline cracks, sand imperfections, apply the correct primer or
                undercoat for the surface and paint type, and mask all surfaces carefully before a single
                brush stroke is applied. It is this meticulous preparation — the part clients rarely see —
                that determines whether a paint job lasts two years or fifteen.
              </p>

              <h2 className="font-serif text-[#1a1a2e] mt-8">Our Interior Painting Process</h2>
              <p>
                Our process has been refined over 15 years of working in London homes. We begin with a
                detailed site survey, during which we assess the condition of the walls and ceilings,
                discuss your colour and finish preferences, and identify any preparation work required.
              </p>
              <p>
                <strong>Surface preparation</strong> is where we invest the most time. We fill holes and
                cracks with appropriate filler, sand smooth once dry, and apply the correct primer. For
                new plaster, we apply a mist coat — a diluted emulsion that allows the plaster to breathe
                and absorb the paint correctly, preventing the cracking and peeling that occurs when
                full-strength paint is applied too soon.
              </p>
              <p>
                We then apply paint using the correct tools for the job. <strong>Cutting in</strong> around
                ceiling roses, coving, picture rails, skirting boards, and window reveals is done by hand
                with a brush for precision — roller lines and splatters are not something our clients ever
                have to deal with. Top coats are applied with high-quality rollers to achieve a smooth,
                even finish across large surfaces.
              </p>

              <h2 className="font-serif text-[#1a1a2e] mt-8">Paint Finishes We Work With</h2>
              <p>
                Choosing the right paint finish is as important as choosing the right colour. We work with
                the full range of interior finishes:
              </p>
              <ul className="space-y-2 pl-4">
                <li><strong>Matt emulsion</strong> — ideal for walls and ceilings, hides imperfections, elegant low-sheen finish</li>
                <li><strong>Eggshell</strong> — durable, slightly sheen, excellent for woodwork and walls in high-traffic areas</li>
                <li><strong>Satinwood</strong> — smooth, washable finish popular for skirting boards and door frames</li>
                <li><strong>Gloss</strong> — high-shine, hard-wearing, traditional woodwork finish</li>
                <li><strong>Specialist finishes</strong> — including limewash, mineral paint, and estate emulsions</li>
              </ul>

              <h2 className="font-serif text-[#1a1a2e] mt-8">Paint Brands We Use</h2>
              <p>
                We work with premium British paint brands that deliver outstanding results and longevity.
                Our preferred brands include <strong>Farrow & Ball</strong>, <strong>Little Greene</strong>,
                <strong>Dulux Trade</strong>, <strong>Crown Trade</strong>, <strong>Mylands</strong>,
                and <strong>Dulux Heritage</strong>. We are happy to use whichever brand you prefer,
                or to advise on the best option for your specific project.
              </p>

              <h2 className="font-serif text-[#1a1a2e] mt-8">Rooms & Areas We Paint</h2>
              <p>
                We paint every room and surface in a residential property, including:
              </p>
              <ul className="space-y-2 pl-4">
                <li>Living rooms and reception rooms</li>
                <li>Bedrooms and master suites</li>
                <li>Hallways, landings, and staircases</li>
                <li>Kitchens and utility rooms</li>
                <li>Bathrooms (with moisture-resistant paint)</li>
                <li>Cellar and basement conversions</li>
                <li>Ceilings including ceiling roses and coving</li>
                <li>Period features including picture rails and dado rails</li>
              </ul>

              <h2 className="font-serif text-[#1a1a2e] mt-8">Areas We Serve</h2>
              <p>
                We carry out interior painting across North London — including{' '}
                <Link href="/locations/southgate" className="text-[#b8860b] hover:underline">Southgate</Link>,{' '}
                <Link href="/locations/finchley" className="text-[#b8860b] hover:underline">Finchley</Link>, and{' '}
                <Link href="/locations/enfield" className="text-[#b8860b] hover:underline">Enfield</Link> —
                and South London, including{' '}
                <Link href="/locations/wimbledon" className="text-[#b8860b] hover:underline">Wimbledon</Link>,{' '}
                <Link href="/locations/clapham" className="text-[#b8860b] hover:underline">Clapham</Link>, and{' '}
                <Link href="/locations/streatham" className="text-[#b8860b] hover:underline">Streatham</Link>.
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
          <h2 className="font-serif text-white mb-4">Get a Fixed-Price Interior Painting Quote</h2>
          <p className="text-[#e8e4df] mb-8">We respond within 45 minutes. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#9a7009] transition-all">
              Get a Free Quote
            </Link>
            <a href="tel:07828288449" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all">
              Call 07828 288 449
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
