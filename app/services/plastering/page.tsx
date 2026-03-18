import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import Image from 'next/image';
import FAQAccordion from '@/app/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Plastering Services London | Bozhiqi Painting & Decorating',
  description:
    'Professional plastering across London. Skim coats, bonding, Artex removal, crack repair, coving. 15 years experience. 9.78/10 Checkatrade. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/services/plastering',
  },
  openGraph: {
    title: 'Plastering Services London | Bozhiqi Painting & Decorating',
    description: 'Professional plastering across London. Skim coats, bonding, Artex removal, crack repair, coving. 15 years experience.',
    url: 'https://bozhiqidecorating.co.uk/services/plastering',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Plastering',
  serviceType: 'Plastering & Wall Repairs',
  image: 'https://bozhiqidecorating.co.uk/images/plastering-painting-hallway-arched-ceiling.webp',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Bozhiqi Painting & Decorating',
    url: 'https://bozhiqidecorating.co.uk',
    telephone: '+447828288449',
  },
  areaServed: { '@type': 'City', name: 'London' },
};

const faqs = [
  {
    question: 'How long does new plaster need to dry before painting?',
    answer:
      'New plaster should be allowed to dry for a minimum of 4-6 weeks before applying a full emulsion coat. The first coat should always be a mist coat — a diluted emulsion (approximately 10% water added) — which allows moisture to escape and the plaster to cure correctly. Applying full-strength paint too early causes blistering, cracking, and peeling.',
  },
  {
    question: 'Can you skim over existing plaster rather than fully replastering?',
    answer:
      'In most cases, yes. A skim coat applies 2-3mm of finish plaster over an existing substrate, smoothing imperfections without the cost and disruption of full replastering. We assess the existing surface first to ensure it is sound and suitable for skimming.',
  },
  {
    question: 'How do you remove Artex?',
    answer:
      'Artex applied before 1984 may contain asbestos and must be tested before removal. For Artex confirmed to be asbestos-free, we typically skim plaster over it rather than attempting removal, which avoids the mess and potential damage of scraping. Where removal is necessary on modern Artex, we use a steamer and specialist tools.',
  },
];

export default function PlasteringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-[#1a1a2e] text-white py-12 md:py-20">
        <div className="max-w-content mx-auto px-4 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <Breadcrumb items={[{ name: 'Services', href: '/services' }, { name: 'Plastering', href: '/services/plastering' }]} />
            <h1 className="font-serif text-white mt-4">Plastering & Wall Repairs</h1>
            <p className="text-[#e8e4df] text-lg mt-4 max-w-2xl">
              Smooth walls are the foundation of a perfect finish. Skim coats, bonding, crack repair, Artex removal, and coving installation across London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="bg-[#b8860b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#9a7009] transition-all text-center">Get a Free Quote</Link>
              <a href="tel:07828288449" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all text-center">Call 07828 288 449</a>
            </div>
          </div>
          <div className="relative -mx-4 md:mx-0 aspect-[16/10] md:aspect-[4/3] md:rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.4)] mt-8 md:mt-0">
            <Image
              src="/images/plastering-painting-hallway-arched-ceiling.webp"
              alt="Hallway with freshly plastered and painted arched vaulted ceiling"
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
            <h2 className="font-serif text-[#1a1a2e]">Plastering Services in London</h2>
            <p>
              The quality of a paint job begins with the quality of the surface. No matter how skilled the painter or
              how premium the paint, uneven walls, unfilled cracks, or a rough finish will show through the final coat.
              This is why Bozhiqi Painting & Decorating offers comprehensive plastering services as part of our
              complete decorating offer.
            </p>
            <p>
              Jetmir Bozhiqi is as experienced with plaster as he is with paint. Over 15 years of residential
              decorating work, he has developed a thorough understanding of how walls need to be prepared to
              achieve the flawless, magazine-quality results his clients expect.
            </p>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Plastering Services We Offer</h2>
            <ul className="space-y-2 pl-4">
              <li><strong>Skim coat</strong> — 2-3mm finish coat over existing plaster or plasterboard for a smooth, paint-ready surface</li>
              <li><strong>Bonding coat</strong> — intermediate coat used on difficult or porous substrates before skimming</li>
              <li><strong>Plasterboard fixing</strong> — dot and dab or screw-fixed to masonry walls, then skimmed</li>
              <li><strong>Artex removal or overskim</strong> — skim over textured ceilings for a flat, modern finish</li>
              <li><strong>Crack repair</strong> — filling and skimming over hairline and structural cracks using appropriate scrim tape and filler</li>
              <li><strong>Coving installation</strong> — cornice and coving fitted and finished to a seamless standard</li>
              <li><strong>PVA priming</strong> — sealing porous surfaces before skimming to prevent suction issues</li>
              <li><strong>Float and set</strong> — full two-coat plastering on new or stripped masonry walls</li>
            </ul>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Artex — A Common London Problem</h2>
            <p>
              Thousands of London homes built or renovated between the 1960s and 1990s have Artex textured
              ceilings. While period-appropriate when installed, the stippled surface feels dated and makes
              rooms feel smaller and darker. We offer two solutions: overskim plastering (applying a skim coat
              directly over the Artex to create a smooth ceiling) or, where Artex testing confirms no asbestos,
              careful scraping followed by plastering.
            </p>
            <p>
              Note: Artex installed before 1984 may contain chrysotile asbestos. We can advise on testing
              requirements before any work begins — safety always comes first.
            </p>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Areas We Serve</h2>
            <p>
              We carry out plastering work across North London — including{' '}
              <Link href="/locations/southgate" className="text-[#b8860b] hover:underline">Southgate</Link>,{' '}
              <Link href="/locations/finchley" className="text-[#b8860b] hover:underline">Finchley</Link>, and{' '}
              <Link href="/locations/enfield" className="text-[#b8860b] hover:underline">Enfield</Link> —
              and South London, including{' '}
              <Link href="/locations/mitcham" className="text-[#b8860b] hover:underline">Mitcham</Link>,{' '}
              <Link href="/locations/streatham" className="text-[#b8860b] hover:underline">Streatham</Link>, and{' '}
              <Link href="/locations/wallington" className="text-[#b8860b] hover:underline">Wallington</Link>.
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
          <h2 className="font-serif text-white mb-4">Get a Plastering Quote</h2>
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
