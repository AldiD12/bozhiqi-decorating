import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Our Services | Painting & Decorating London | Bozhiqi',
  description:
    'Professional interior painting, exterior painting, wallpaper installation, plastering, and woodwork finishing across North & South London.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/services',
  },
  openGraph: {
    title: 'Our Services | Painting & Decorating London | Bozhiqi',
    description:
      'Professional interior painting, exterior painting, wallpaper installation, plastering, and woodwork finishing across North & South London.',
    url: 'https://bozhiqidecorating.co.uk/services',
  },
};

const services = [
  {
    title: 'Interior Painting',
    description:
      'From single rooms to whole-house redecorations — emulsion, eggshell, gloss, and specialist finishes. We use premium brands including Farrow & Ball, Dulux Trade, and Crown Trade.',
    href: '/services/interior-painting',
    highlights: ['Emulsion & eggshell', 'Ceiling painting', 'Feature walls', 'Farrow & Ball specialists'],
  },
  {
    title: 'Exterior Painting',
    description:
      'Weather-resistant masonry paint, weathershield systems, and exterior woodwork finishing. Proper preparation including pressure washing and priming for a finish that lasts.',
    href: '/services/exterior-painting',
    highlights: ['Masonry painting', 'Fascias & soffits', 'Render & pebbledash', 'Dulux Weathershield'],
  },
  {
    title: 'Wallpaper Installation',
    description:
      'Precision hanging of all paper types — lining paper, paste-the-wall, vinyl, and luxury fabrics. Complex pattern matching handled with care and expertise.',
    href: '/services/wallpaper-installation',
    highlights: ['Feature walls', 'Pattern matching', 'Wallpaper removal', 'All paper types'],
  },
  {
    title: 'Plastering',
    description:
      'Skim coats, bonding, plasterboard, dot and dab, crack repair, Artex removal, and coving installation. A smooth wall is the foundation of a perfect finish.',
    href: '/services/plastering',
    highlights: ['Skim & bonding coats', 'Artex removal', 'Crack repair', 'Coving installation'],
  },
  {
    title: 'Woodwork Painting',
    description:
      'Skirting boards, architrave, door frames, window frames, bannisters, and spindles finished in gloss, satinwood, or eggshell. Properly prepared, properly painted.',
    href: '/services/woodwork-painting',
    highlights: ['Skirting boards', 'Door & window frames', 'Bannisters & spindles', 'Gloss & satinwood'],
  },
];

const secondaryServices = [
  'Wall preparation & filling',
  'Crack filling & repair',
  'Ceiling painting',
  'Fence & garden painting',
  'Touch-up & maintenance work',
  'Colour consultation',
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-12 md:py-16">
        <div className="max-w-content mx-auto px-4">
          <Breadcrumb items={[{ name: 'Services', href: '/services' }]} />
          <h1 className="font-serif text-white mt-4">Our Painting & Decorating Services</h1>
          <p className="text-[#e8e4df] text-lg mt-4 max-w-2xl">
            From a single room refresh to a complete whole-house redecoration — 15 years of meticulous craftsmanship across London.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#faf8f5] py-16 md:py-20">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(26,26,46,0.06)] hover:shadow-[0_8px_30px_rgba(26,26,46,0.1)] transition-all group"
              >
                <h2 className="font-serif text-[#1a1a2e] text-2xl mb-3">{service.title}</h2>
                <p className="text-[#3d3d3d] leading-relaxed mb-5">{service.description}</p>
                <ul className="grid grid-cols-2 gap-2 mb-5">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-[#6b7280]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b8860b] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="text-[#b8860b] font-semibold group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Services */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-[#1a1a2e] mb-4 text-center">Also Available</h2>
            <p className="text-[#6b7280] text-center mb-8">
              In addition to our core services, we handle a range of additional decorating tasks.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {secondaryServices.map((service) => (
                <div key={service} className="flex items-center gap-2 bg-[#faf8f5] rounded-lg p-4 border border-[#e8e4df]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b8860b] flex-shrink-0" />
                  <span className="text-sm text-[#3d3d3d] font-semibold">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="font-serif text-white mb-4">Get a Fixed-Price Quote</h2>
          <p className="text-[#e8e4df] mb-8 max-w-xl mx-auto">
            Not sure which service you need? Call us and we&apos;ll advise you — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#9a7009] transition-all hover:scale-[1.02]"
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
