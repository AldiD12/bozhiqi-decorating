import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import { locations } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Areas We Cover | Painting & Decorating London | Bozhiqi',
  description:
    'Bozhiqi Painting & Decorating serves North & South London including Southgate, Finchley, Enfield, Wimbledon, Clapham, Streatham, and more. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/locations',
  },
  openGraph: {
    title: 'Areas We Cover | Painting & Decorating London | Bozhiqi',
    description: 'Bozhiqi Painting & Decorating serves North & South London. Free quotes for all areas.',
    url: 'https://bozhiqidecorating.co.uk/locations',
  },
};

const northLocations = locations.filter((l) => l.zone === 'north');
const southLocations = locations.filter((l) => l.zone === 'south');

export default function LocationsPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] text-white py-12 md:py-16">
        <div className="max-w-content mx-auto px-4">
          <Breadcrumb items={[{ name: 'Locations', href: '/locations' }]} />
          <h1 className="font-serif text-white mt-4">Areas We Cover</h1>
          <p className="text-[#e8e4df] text-lg mt-4 max-w-2xl">
            Based in Southgate, North London — serving clients across North and South London with meticulous painting & decorating.
          </p>
        </div>
      </section>

      <section className="bg-[#faf8f5] section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="brass-divider" aria-hidden="true" />
              <h2 className="font-serif text-[#1a1a2e] mb-2">North London</h2>
              <p className="text-[#6b7280] mb-6">Our primary service area — based in Southgate N14.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {northLocations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="bg-white rounded-xl p-5 border border-[#e8e4df] hover:border-[#b8860b] hover:shadow-[0_4px_20px_rgba(26,26,46,0.08)] transition-all group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-serif text-[#1a1a2e] text-lg">{location.name}</h3>
                      <span className="text-xs text-[#6b7280] bg-[#faf8f5] px-2 py-0.5 rounded font-semibold">{location.postcode}</span>
                    </div>
                    <p className="text-[#6b7280] text-sm mb-3">{location.borough} Borough</p>
                    <span className="text-[#b8860b] text-sm font-semibold group-hover:underline">View page →</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="brass-divider" aria-hidden="true" />
              <h2 className="font-serif text-[#1a1a2e] mb-2">South London</h2>
              <p className="text-[#6b7280] mb-6">We regularly travel to South London for the right project.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {southLocations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="bg-white rounded-xl p-5 border border-[#e8e4df] hover:border-[#b8860b] hover:shadow-[0_4px_20px_rgba(26,26,46,0.08)] transition-all group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-serif text-[#1a1a2e] text-lg">{location.name}</h3>
                      <span className="text-xs text-[#6b7280] bg-[#faf8f5] px-2 py-0.5 rounded font-semibold">{location.postcode}</span>
                    </div>
                    <p className="text-[#6b7280] text-sm mb-3">{location.borough} Borough</p>
                    <span className="text-[#b8860b] text-sm font-semibold group-hover:underline">View page →</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a2e] section-py">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="font-serif text-white mb-4">Don&apos;t See Your Area?</h2>
          <p className="text-[#e8e4df] mb-8 max-w-xl mx-auto">
            We may still cover your area — call us to discuss. We consider projects across Greater London.
          </p>
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
