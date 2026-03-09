import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import FAQAccordion from '@/app/components/FAQAccordion';
import NearbyLocations from '@/app/components/NearbyLocations';
import { Location, getNearbyLocations } from '@/app/data/locations';

interface LocationPageTemplateProps {
  location: Location;
}

export default function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const nearby = getNearbyLocations(location);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Bozhiqi Painting & Decorating',
    url: `https://bozhiqidecorating.co.uk/locations/${location.slug}`,
    telephone: '+447828288449',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
      geoRadius: '8000',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '1',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '££',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bozhiqidecorating.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://bozhiqidecorating.co.uk/locations' },
      { '@type': 'ListItem', position: 3, name: location.name, item: `https://bozhiqidecorating.co.uk/locations/${location.slug}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do Bozhiqi Painting & Decorating cover ${location.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, we regularly carry out painting, decorating, and plastering work across ${location.name} and surrounding areas. Contact us for a free, no-obligation quote.`,
        },
      },
      {
        '@type': 'Question',
        name: `Are you fully insured for work in ${location.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we carry full public liability insurance for every project we undertake, giving you complete peace of mind.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer a guarantee on your work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all our work comes with a 12-month workmanship guarantee as standard. If any issue arises from our preparation or application, we return and fix it at no extra cost.',
        },
      },
    ],
  };

  const faqs = [
    {
      question: `Do Bozhiqi Painting & Decorating cover ${location.name}?`,
      answer: `Yes, we regularly carry out painting, decorating, and plastering work across ${location.name} and surrounding areas. Contact us for a free, no-obligation quote.`,
    },
    {
      question: `Are you fully insured for work in ${location.name}?`,
      answer: 'Yes, we carry full public liability insurance for every project we undertake, giving you complete peace of mind.',
    },
    {
      question: 'Do you offer a guarantee on your work?',
      answer: 'Yes, all our work comes with a 12-month workmanship guarantee as standard. If any issue arises from our preparation or application, we return and fix it at no extra cost.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-12 md:py-16">
        <div className="max-w-content mx-auto px-4">
          <Breadcrumb
            items={[
              { name: 'Locations', href: '/locations' },
              { name: location.name, href: `/locations/${location.slug}` },
            ]}
          />
          <div className="mt-4 flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-[#b8860b] text-white px-2 py-1 rounded font-semibold">{location.postcode}</span>
            <span className="text-xs bg-[#2d2d4e] text-[#e8e4df] px-2 py-1 rounded font-semibold">{location.borough} Borough</span>
          </div>
          <h1 className="font-serif text-white">Painters & Decorators in {location.name}</h1>
          <p className="text-[#e8e4df] text-lg mt-4 max-w-2xl">
            Professional painting, decorating, and plastering in {location.name} ({location.postcode}).
            9.78/10 on Checkatrade. Fully insured. Free quotes.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#b8860b] font-semibold mt-4 mb-6">
            <span>★★★★★ 5.0 Google</span>
            <span className="text-[#6b7280]">|</span>
            <span>9.78/10 Checkatrade</span>
            <span className="text-[#6b7280]">|</span>
            <span>15 Years Experience</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#b8860b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#9a7009] transition-all text-center">
              Get a Free Quote
            </Link>
            <a href="tel:07828288449" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all text-center">
              Call 07828 288 449
            </a>
          </div>
        </div>
      </section>

      {/* Local Hook */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-[#1a1a2e] mb-6">Painting & Decorating in {location.name}</h2>
            <p className="text-[#3d3d3d] leading-relaxed mb-5">
              Bozhiqi Painting & Decorating is a trusted name for homeowners in {location.name} looking for
              meticulous, reliable painting and decorating services. With 15 years of experience working in
              properties across {location.borough} and Greater London, we understand the unique character of
              {location.name} homes.
            </p>
            <p className="text-[#3d3d3d] leading-relaxed mb-5">
              {location.localChallenge}
            </p>
            <p className="text-[#3d3d3d] leading-relaxed mb-5">
              {location.name} is home to a range of property types including {location.housingTypes.join(', ')}.
              Each property type presents its own decorating challenges, and our 15 years of experience means
              we know how to approach each one correctly — with the right materials, the right preparation,
              and the right technique.
            </p>
            {location.landmarks.length > 0 && (
              <p className="text-[#3d3d3d] leading-relaxed">
                Whether you are close to {location.landmarks.slice(0, 2).join(' or ')}, we serve the whole
                of {location.name} and surrounding {location.borough} areas.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#faf8f5] py-16">
        <div className="max-w-content mx-auto px-4">
          <h2 className="font-serif text-[#1a1a2e] text-center mb-10">Services in {location.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Interior Painting', href: '/services/interior-painting', desc: 'Emulsion, eggshell, and specialist finishes' },
              { title: 'Exterior Painting', href: '/services/exterior-painting', desc: 'Masonry, weathershield, and exterior woodwork' },
              { title: 'Wallpaper Installation', href: '/services/wallpaper-installation', desc: 'All paper types, feature walls, pattern matching' },
              { title: 'Plastering', href: '/services/plastering', desc: 'Skim coats, Artex removal, crack repair' },
              { title: 'Woodwork Painting', href: '/services/woodwork-painting', desc: 'Skirting boards, door frames, bannisters' },
            ].map((service) => (
              <Link key={service.href} href={service.href} className="bg-white rounded-xl p-5 border border-[#e8e4df] hover:border-[#b8860b] transition-all group">
                <h3 className="font-serif text-[#1a1a2e] text-lg mb-2">{service.title}</h3>
                <p className="text-[#6b7280] text-sm mb-3">{service.desc}</p>
                <span className="text-[#b8860b] text-sm font-semibold group-hover:underline">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4">
          <h2 className="font-serif text-[#1a1a2e] text-center mb-10">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Consultation', desc: `We visit your ${location.name} property, assess the work, and provide a detailed fixed-price quotation.` },
              { step: '02', title: 'Preparation', desc: 'Thorough surface preparation — filling, sanding, priming — the foundation of a lasting finish.' },
              { step: '03', title: 'Flawless Finish', desc: "Precise application, clean edges, and a meticulous final check. We don't leave until you're satisfied." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-4 font-serif text-white text-lg">{item.step}</div>
                <h3 className="font-serif text-[#1a1a2e] text-lg mb-2">{item.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#faf8f5] py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-[#1a1a2e] mb-4">Trusted by London Homeowners</h2>
            <div className="flex justify-center gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-[#b8860b] text-2xl">★</span>)}
            </div>
            <p className="text-[#6b7280] mb-6">
              9.78/10 on Checkatrade from 55 verified reviews · 5.0 stars on Google
            </p>
            <div className="bg-white rounded-xl p-6 border border-[#e8e4df] text-left">
              <p className="text-[#3d3d3d] italic leading-relaxed mb-4">
                &ldquo;Jetmir was punctual every single day, incredibly tidy, and the finish is absolutely beautiful. He transformed our Victorian terrace and we couldn&apos;t be happier with the result. Highly recommended to anyone in the area.&rdquo;
              </p>
              <p className="font-semibold text-[#1a1a2e] text-sm">Verified Checkatrade Review</p>
            </div>
            <a
              href="https://www.checkatrade.com/trades/bozhiqi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 border-2 border-[#b8860b] text-[#b8860b] font-semibold px-6 py-3 rounded-lg hover:bg-[#b8860b] hover:text-white transition-all"
            >
              Read All 55 Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearby.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-content mx-auto px-4">
            <h2 className="font-serif text-[#1a1a2e] mb-6">Nearby Areas We Also Serve</h2>
            <NearbyLocations locations={nearby} />
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-[#faf8f5] py-16">
        <div className="max-w-content mx-auto px-4">
          <h2 className="font-serif text-[#1a1a2e] text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} includeSchema={false} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a2e] py-16">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="font-serif text-white mb-4">Get a Free Quote in {location.name}</h2>
          <p className="text-[#e8e4df] mb-8">Fixed-price quotation. Response within 45 minutes. Fully insured.</p>
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
