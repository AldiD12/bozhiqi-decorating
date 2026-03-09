import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import Image from 'next/image';
import FAQAccordion from '@/app/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Wallpaper Installation London | Bozhiqi Painting & Decorating',
  description:
    'Professional wallpaper installation across London. All paper types, pattern matching, feature walls. 15 years experience. 9.78/10 Checkatrade. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/services/wallpaper-installation',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wallpaper Installation',
  serviceType: 'Wallpaper Installation & Hanging',
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
    question: 'Can you hang wallpaper on freshly plastered walls?',
    answer:
      'Yes, but new plaster must be fully dry before wallpapering — this typically takes 4-6 weeks for a skim coat. We also recommend sizing the wall first (applying a diluted paste solution) to reduce suction and achieve a better bond. Hanging wallpaper on wet or unsealed plaster will cause it to peel prematurely.',
  },
  {
    question: 'How do I know how many rolls I need?',
    answer:
      'During our site visit we will measure the walls and calculate the exact number of rolls required, allowing for pattern matching. The pattern repeat can significantly affect the quantity needed — we account for this in our specification so you order the correct amount.',
  },
  {
    question: 'Can you remove old wallpaper before hanging new paper?',
    answer:
      'Yes, wallpaper removal is part of our service. We use a steamer where necessary to remove stubborn layers. After stripping, we prepare the walls by filling, sanding, and sizing before hanging the new paper to ensure a perfect result.',
  },
];

export default function WallpaperPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-[#1a1a2e] text-white py-12 md:py-20">
        <div className="max-w-content mx-auto px-4 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <Breadcrumb items={[{ name: 'Services', href: '/services' }, { name: 'Wallpaper Installation', href: '/services/wallpaper-installation' }]} />
            <h1 className="font-serif text-white mt-4">Professional Wallpaper Installation</h1>
            <p className="text-[#e8e4df] text-lg mt-4 max-w-2xl">
              Precision hanging of all wallpaper types — from lining paper to luxury fabric — with meticulous pattern matching throughout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="bg-[#b8860b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#9a7009] transition-all text-center">Get a Free Quote</Link>
              <a href="tel:07828288449" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all text-center">Call 07828 288 449</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
              <Image
                src="/images/interior-painting-panelled-reception-room-herringbone.webp"
                alt="Freshly decorated reception room with wall panelling, herringbone floor and recessed lighting"
                fill
                priority
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto prose-body space-y-5 text-[#3d3d3d] leading-relaxed">
            <h2 className="font-serif text-[#1a1a2e]">Wallpaper Installation Across London</h2>
            <p>
              A beautifully hung wallpaper transforms a room in a way that paint alone cannot. Whether you are
              creating a striking feature wall in a dining room, adding texture to a hallway, or papering all
              four walls of a master bedroom in a luxury fabric wallpaper, the quality of the installation
              determines the result.
            </p>
            <p>
              Jetmir Bozhiqi has 15 years of experience hanging wallpaper of all types, in properties across
              London. He handles everything from straightforward paste-the-wall vinyl papers to technically
              demanding luxury wallpapers with complex pattern repeats, non-woven backings, and delicate surfaces
              that require careful handling.
            </p>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Wallpaper Types We Hang</h2>
            <ul className="space-y-2 pl-4">
              <li><strong>Lining paper</strong> — essential preparation layer for a smooth painted or papered finish</li>
              <li><strong>Paste-the-wall wallpaper</strong> — non-woven papers that paste directly to the wall</li>
              <li><strong>Paste-the-paper wallpaper</strong> — traditional papers requiring careful soaking and booking</li>
              <li><strong>Vinyl wallpaper</strong> — durable, washable, ideal for hallways and bathrooms</li>
              <li><strong>Textured wallpaper</strong> — embossed, Anaglypta, and relief papers</li>
              <li><strong>Fabric-backed wallpaper</strong> — luxury grasscloth, silk, and woven papers</li>
              <li><strong>Feature walls</strong> — large-pattern papers and mural wallpapers</li>
            </ul>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Pattern Matching</h2>
            <p>
              Pattern matching is where amateur papering falls apart. A complex pattern repeat can waste
              significant material if not planned correctly, and mis-matched seams are immediately visible.
              We plan the layout of each room before cutting a single length, ensuring patterns align across
              seams, at focal points, and above and below any obstacles such as door frames and window reveals.
            </p>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Preparation: The Difference That Matters</h2>
            <p>
              Wallpaper is only as good as the surface beneath it. We begin every wallpapering project by
              assessing the walls, filling any cracks or holes, sanding smooth, and applying a sizing solution.
              <strong>Sizing</strong> — applying a diluted paste solution to the wall — reduces suction,
              seals the surface, and allows us to reposition the paper without it grabbing immediately.
              For new plaster, we recommend allowing a full 4-6 weeks of drying time before papering.
            </p>
            <p>
              Where old wallpaper is present, we strip it completely using a steamer where necessary, and
              prepare the wall properly before hanging new paper. Papering over old wallpaper leads to
              bubbling, seam lifting, and eventual failure — we never recommend it.
            </p>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Areas We Serve</h2>
            <p>
              We hang wallpaper across North London — including{' '}
              <Link href="/locations/southgate" className="text-[#b8860b] hover:underline">Southgate</Link>,{' '}
              <Link href="/locations/finchley" className="text-[#b8860b] hover:underline">Finchley</Link>, and{' '}
              <Link href="/locations/enfield" className="text-[#b8860b] hover:underline">Enfield</Link> —
              and South London, including{' '}
              <Link href="/locations/clapham" className="text-[#b8860b] hover:underline">Clapham</Link>,{' '}
              <Link href="/locations/streatham" className="text-[#b8860b] hover:underline">Streatham</Link>, and{' '}
              <Link href="/locations/wimbledon" className="text-[#b8860b] hover:underline">Wimbledon</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-16">
        <div className="max-w-content mx-auto px-4">
          <h2 className="font-serif text-[#1a1a2e] text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="font-serif text-white mb-4">Get a Wallpaper Installation Quote</h2>
          <p className="text-[#e8e4df] mb-8">Free site visit and fixed-price quotation. Response within 45 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#9a7009] transition-all">Get a Free Quote</Link>
            <a href="tel:07828288449" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all">Call 07828 288 449</a>
          </div>
        </div>
      </section>
    </>
  );
}
