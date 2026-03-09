import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import Image from 'next/image';
import FAQAccordion from '@/app/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Woodwork Painting London | Doors, Skirting & Frames | Bozhiqi',
  description:
    'Professional woodwork painting across London. Skirting boards, door frames, bannisters, window frames. Gloss & satinwood specialists. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/services/woodwork-painting',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Woodwork Painting',
  serviceType: 'Woodwork Painting & Finishing',
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
    question: 'What is the difference between gloss, satinwood, and eggshell for woodwork?',
    answer:
      'Gloss is the most durable and highest sheen — traditional for skirting boards and door frames, extremely hard-wearing and washable. Satinwood offers a mid-sheen finish that is slightly softer in appearance, popular in contemporary interiors. Eggshell is the flattest of the three, used on woodwork where a low-sheen, sophisticated look is preferred, often with premium paints like Farrow & Ball or Little Greene.',
  },
  {
    question: 'How do you prepare old woodwork before painting?',
    answer:
      'Proper preparation is essential. We sand all surfaces to provide a key for the new paint, fill any dents, holes, or splits, treat any knots with knotting solution to prevent resin bleed-through, and apply the appropriate primer or undercoat. On old gloss woodwork, we use a de-glosser or sand back before priming to ensure the new paint bonds correctly.',
  },
  {
    question: 'Can you paint over old gloss without sanding?',
    answer:
      'We strongly advise against it, and we do not do it ourselves. Paint applied over un-sanded high-gloss woodwork will peel within months. Proper sanding back, cleaning, and priming is the only way to achieve a finish that lasts.',
  },
];

export default function WoodworkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-[#1a1a2e] text-white py-12 md:py-20">
        <div className="max-w-content mx-auto px-4 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <Breadcrumb items={[{ name: 'Services', href: '/services' }, { name: 'Woodwork Painting', href: '/services/woodwork-painting' }]} />
            <h1 className="font-serif text-white mt-4">Woodwork Painting & Finishing</h1>
            <p className="text-[#e8e4df] text-lg mt-4 max-w-2xl">
              Skirting boards, door frames, window frames, bannisters, and architrave finished to an immaculate standard — properly prepared, properly painted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="bg-[#b8860b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#9a7009] transition-all text-center">Get a Free Quote</Link>
              <a href="tel:07828288449" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all text-center">Call 07828 288 449</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
              <Image
                src="/images/interior-painting-hallway-stained-glass-woodwork.webp"
                alt="Period hallway with freshly painted white walls and black woodwork around stained glass door"
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
            <h2 className="font-serif text-[#1a1a2e]">Professional Woodwork Painting in London</h2>
            <p>
              Woodwork is the detail that distinguishes a competent decorating job from a truly exceptional one.
              Crisp, smooth skirting boards, perfectly cut-in door frames, and cleanly finished window reveals
              are the hallmarks of a professional finish. Conversely, runs, drips, brush marks, and uneven
              coverage on woodwork immediately compromise the appearance of an otherwise well-decorated room.
            </p>
            <p>
              Jetmir Bozhiqi&apos;s background in high-end residential decorating has given him an exacting
              standard when it comes to woodwork. Every surface is prepared correctly — sanded, filled, primed —
              before a single coat of finish is applied. The result is smooth, even coverage that looks as
              good in five years as it does the day it is painted.
            </p>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Woodwork We Paint</h2>
            <ul className="space-y-2 pl-4">
              <li><strong>Skirting boards</strong> — all profiles from simple chamfer to elaborate Victorian mouldings</li>
              <li><strong>Architrave</strong> — door surround mouldings painted to match or complement the door colour</li>
              <li><strong>Door frames & reveals</strong> — including painted door linings</li>
              <li><strong>Interior & exterior doors</strong> — both sides, all panels and mouldings</li>
              <li><strong>Window frames & sills</strong> — timber and some uPVC windows (with specialist primer)</li>
              <li><strong>Bannisters & spindles</strong> — staircases painted in gloss or satinwood, spindles by brush for precision</li>
              <li><strong>Dado rails</strong> — period feature rails painted to complement the room scheme</li>
              <li><strong>Picture rails</strong> — high-level rail detail requiring careful access and precise cutting in</li>
              <li><strong>Coving & ceiling roses</strong> — painted to a clean, sharp line</li>
            </ul>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Our Preparation Process</h2>
            <p>
              We begin by sanding all woodwork to remove the sheen from existing paint and provide a key for the
              new coat. Any dents, holes, or splits are filled with flexible filler and sanded smooth once dry.
              <strong>Knotting solution</strong> is applied to any exposed knots in bare or newly planed timber
              to prevent resin bleeding through the paint — a common cause of persistent staining.
            </p>
            <p>
              We then apply the appropriate primer or undercoat for the surface and intended finish paint.
              Oil-based undercoat for traditional gloss; specialist water-based primer for modern satinwood
              and eggshell systems. Only once the substrate is correctly prepared do we apply the finish coats
              — typically two, lightly sanded between coats for a flawless result.
            </p>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Paint Brands for Woodwork</h2>
            <p>
              For traditional gloss woodwork, we use professional trade paints including <strong>Dulux Trade</strong>
              and <strong>Crown Trade</strong> for their durability and ease of application. For premium projects
              where a low-sheen, sophisticated finish is required, we work with <strong>Farrow & Ball</strong>,
              <strong>Little Greene</strong>, and <strong>Mylands</strong> eggshell — brands that provide
              exceptional depth of colour and a finish that ages beautifully.
            </p>

            <h2 className="font-serif text-[#1a1a2e] mt-8">Areas We Serve</h2>
            <p>
              We paint woodwork throughout North London — including{' '}
              <Link href="/locations/southgate" className="text-[#b8860b] hover:underline">Southgate</Link>,{' '}
              <Link href="/locations/finchley" className="text-[#b8860b] hover:underline">Finchley</Link>, and{' '}
              <Link href="/locations/enfield" className="text-[#b8860b] hover:underline">Enfield</Link> —
              and South London, including{' '}
              <Link href="/locations/clapham" className="text-[#b8860b] hover:underline">Clapham</Link>,{' '}
              <Link href="/locations/wimbledon" className="text-[#b8860b] hover:underline">Wimbledon</Link>, and{' '}
              <Link href="/locations/kingston" className="text-[#b8860b] hover:underline">Kingston</Link>.
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
          <h2 className="font-serif text-white mb-4">Get a Woodwork Painting Quote</h2>
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
