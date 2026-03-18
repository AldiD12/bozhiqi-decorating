import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import FAQAccordion from '@/app/components/FAQAccordion';
import NearbyLocations from '@/app/components/NearbyLocations';
import { Location, getNearbyLocations } from '@/app/data/locations';
import { reviews } from '@/app/data/reviews';

interface LocationPageTemplateProps {
  location: Location;
}

export default function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const nearby = getNearbyLocations(location);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Bozhiqi Painting & Decorating',
    image: 'https://bozhiqidecorating.co.uk/images/bozhiqi-hero.webp',
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
      ratingValue: reviews.checkatrade.score,
      reviewCount: String(reviews.checkatrade.count),
      bestRating: reviews.checkatrade.outOf,
      worstRating: '1',
    },
    priceRange: '££',
  };


  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero — text + photo */}
      <section className="bg-[#1a1a2e] text-white">
        <div className="max-w-content mx-auto px-4 pt-10 md:py-20 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div className="pb-8 md:pb-0">
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
              {reviews.checkatrade.score}/10 on Checkatrade. Fully insured. Free quotes.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#b8860b] font-semibold mt-4 mb-6">
              <span>{reviews.google.short}</span>
              <span className="text-[#6b7280]">|</span>
              <span>{reviews.checkatrade.short}</span>
              <span className="text-[#6b7280]">|</span>
              <span>{reviews.yearsExperience} Years Experience</span>
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

          {/* Hero image — full bleed on mobile, rounded on desktop */}
          <div className="relative -mx-4 md:mx-0 aspect-[16/10] md:aspect-[4/3] md:rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
            <Image
              src={location.heroImage}
              alt={location.heroImageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Unique intro — genuinely different per location */}
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="brass-divider" aria-hidden="true" />
            <h2 className="font-serif text-[#1a1a2e] mb-6">Painting & Decorating in {location.name}</h2>
            <p className="text-[#3d3d3d] leading-relaxed mb-5 text-lg">
              {location.intro}
            </p>
            <p className="text-[#3d3d3d] leading-relaxed mb-5">
              {location.localChallenge}
            </p>
            <p className="text-[#3d3d3d] leading-relaxed mb-8">
              {location.projectFocus}
            </p>

            {/* Housing types as visual tags */}
            <div>
              <p className="text-sm font-semibold text-[#6b7280] uppercase tracking-wider mb-3">Property types we work on in {location.name}</p>
              <div className="flex flex-wrap gap-2">
                {location.housingTypes.map((type) => (
                  <span key={type} className="text-sm bg-[#faf8f5] border border-[#e8e4df] text-[#3d3d3d] px-3 py-1.5 rounded-full">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paint & materials note — unique per location */}
      <section className="bg-[#faf8f5] section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-[#e8e4df] shadow-[0_4px_20px_rgba(26,26,46,0.05)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#b8860b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-[#1a1a2e] text-xl mb-3">Our approach in {location.name}</h3>
                  <p className="text-[#3d3d3d] leading-relaxed">{location.paintNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="brass-divider mx-auto" aria-hidden="true" />
          <h2 className="font-serif text-[#1a1a2e] text-center mb-10">Services in {location.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Interior Painting', href: '/services/interior-painting', desc: 'Emulsion, eggshell, and specialist finishes for every room' },
              { title: 'Exterior Painting', href: '/services/exterior-painting', desc: 'Masonry, weathershield, and exterior woodwork painting' },
              { title: 'Wallpaper Installation', href: '/services/wallpaper-installation', desc: 'All paper types, feature walls, pattern matching' },
              { title: 'Plastering', href: '/services/plastering', desc: 'Skim coats, Artex removal, crack repair, and coving' },
              { title: 'Woodwork Painting', href: '/services/woodwork-painting', desc: 'Skirting boards, door frames, bannisters, and windows' },
            ].map((service) => (
              <Link key={service.href} href={service.href} className="bg-[#faf8f5] rounded-xl p-5 border border-[#e8e4df] hover:border-[#b8860b] hover:shadow-[0_4px_20px_rgba(26,26,46,0.08)] transition-all group">
                <h3 className="font-serif text-[#1a1a2e] text-lg mb-2">{service.title}</h3>
                <p className="text-[#6b7280] text-sm mb-3">{service.desc}</p>
                <span className="text-[#b8860b] text-sm font-semibold group-hover:underline">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#faf8f5] section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="brass-divider mx-auto" aria-hidden="true" />
          <h2 className="font-serif text-[#1a1a2e] text-center mb-10">How We Work in {location.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Free site visit',
                desc: `We visit your ${location.name} property, assess the condition of all surfaces, discuss your preferences, and provide a detailed fixed-price quotation. No obligation, no hard sell.`,
              },
              {
                step: '02',
                title: 'Thorough preparation',
                desc: 'Surfaces are cleaned, filled, sanded, and primed before any topcoat is applied. This is the stage most decorators cut short — we never do.',
              },
              {
                step: '03',
                title: 'Flawless finish',
                desc: "Precise application, clean edges, and a meticulous walk-through with you at the end. We don't leave until you are completely satisfied.",
              },
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
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="brass-divider mx-auto" aria-hidden="true" />
            <h2 className="font-serif text-[#1a1a2e] mb-4">Trusted by London Homeowners</h2>
            <div className="flex justify-center gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-[#b8860b] text-2xl">★</span>)}
            </div>
            <p className="text-[#6b7280] mb-6">
              {reviews.checkatrade.summary} · {reviews.google.score} stars on Google
            </p>
            <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e4df] text-left">
              <p className="text-[#3d3d3d] italic leading-relaxed mb-4">
                &ldquo;Jetmir was punctual every single day, incredibly tidy, and the finish is absolutely beautiful. He transformed our Victorian terrace and we couldn&apos;t be happier with the result. Highly recommended to anyone in the area.&rdquo;
              </p>
              <p className="font-semibold text-[#1a1a2e] text-sm">Verified Checkatrade Review</p>
            </div>
            <a
              href={reviews.checkatrade.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 border-2 border-[#b8860b] text-[#b8860b] font-semibold px-6 py-3 rounded-lg hover:bg-[#b8860b] hover:text-white transition-all"
            >
              Read All {reviews.checkatrade.count} Reviews on Checkatrade
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearby.length > 0 && (
        <section className="bg-[#faf8f5] section-py">
          <div className="max-w-content mx-auto px-4">
            <h2 className="font-serif text-[#1a1a2e] mb-6">Nearby Areas We Also Serve</h2>
            <NearbyLocations locations={nearby} />
          </div>
        </section>
      )}

      {/* FAQ — unique per location */}
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="brass-divider mx-auto" aria-hidden="true" />
          <h2 className="font-serif text-[#1a1a2e] text-center mb-10">Questions About Our Work in {location.name}</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={location.faqs} includeSchema={false} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a2e] section-py">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="font-serif text-white mb-4">Get a Free Quote in {location.name}</h2>
          <p className="text-[#e8e4df] mb-8 max-w-xl mx-auto">
            Fixed-price quotation after a site visit. Response within 45 minutes. Fully insured and Checkatrade verified.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#9a7009] transition-all">
              Request a Free Quote
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
