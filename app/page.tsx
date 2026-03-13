import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FAQAccordion from '@/app/components/FAQAccordion';
import { locations } from '@/app/data/locations';
import { reviews } from '@/app/data/reviews';

export const metadata: Metadata = {
  title: 'Painters & Decorators in North London | Bozhiqi',
  description:
    `Professional painting & decorating in North London. ${reviews.checkatrade.summary}. ${reviews.yearsExperience} years experience. Get a free quote today.`,
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/',
  },
  openGraph: {
    title: 'Painters & Decorators in North London | Bozhiqi',
    description:
      `Professional painting & decorating in North London. ${reviews.checkatrade.summary}. ${reviews.yearsExperience} years experience.`,
    url: 'https://bozhiqidecorating.co.uk/',
  },
};

const services = [
  {
    title: 'Interior Painting',
    description: 'Flawless emulsion, eggshell, and gloss finishes for every room in your home.',
    href: '/services/interior-painting',
  },
  {
    title: 'Exterior Painting',
    description: 'Weather-resistant masonry and woodwork painting that protects your property for years.',
    href: '/services/exterior-painting',
  },
  {
    title: 'Wallpaper Installation',
    description: 'Precision hanging of all wallpaper types, including complex pattern matching.',
    href: '/services/wallpaper-installation',
  },
  {
    title: 'Plastering',
    description: 'Skim coats, bonding, crack repair, and Artex removal for perfectly smooth walls.',
    href: '/services/plastering',
  },
  {
    title: 'Woodwork Painting',
    description: 'Skirting boards, door frames, bannisters, and window frames finished to perfection.',
    href: '/services/woodwork-painting',
  },
];

const faqs = [
  {
    question: 'How do I get a quote from Bozhiqi Painting & Decorating?',
    answer:
      'Simply call us on 07828 288 449, send a WhatsApp message, or fill in our online quote form. We aim to respond within 45 minutes and can usually visit for a fixed-price quotation within 48 hours.',
  },
  {
    question: 'Are you fully insured?',
    answer:
      'Yes, we carry full public liability insurance for every project we undertake, giving you complete peace of mind.',
  },
  {
    question: 'Do you work across all of London?',
    answer:
      'We are based in Southgate, North London, and regularly work across North London (Southgate, Finchley, Enfield) and South London (Wimbledon, Clapham, Streatham, Kingston, and surrounding areas).',
  },
  {
    question: 'What paint brands do you use?',
    answer:
      'We work with premium brands including Farrow & Ball, Little Greene, Dulux Trade, Crown Trade, Mylands, and Dulux Heritage. We are happy to use any paint you prefer, or advise on the best product for your project.',
  },
  {
    question: 'Do you offer a guarantee on your work?',
    answer:
      'Yes, all our work comes with a 12-month workmanship guarantee as standard. If any issue arises from our preparation or application, we return and fix it at no extra cost.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0f172a] text-white overflow-hidden min-h-[80vh] flex items-center justify-center">
        {/* Heritage Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/exterior-painting-detached-house-north-london.webp"
            alt="Professional exterior painting by Bozhiqi in North London"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-[#faf8f5] font-sans text-xs tracking-[0.4em] mb-4 block uppercase">Established Craftsmanship</span>
          
          <h1 className="text-[#faf8f5] font-serif text-4xl md:text-5xl mb-8 leading-tight">
            British Heritage <br/> Painting &amp; Decorating
          </h1>
          
          <p className="text-[#faf8f5]/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Meticulous painting, wallpaper installation, and plastering across North &amp; South London. Clean finishes, on time, every time.
          </p>
          
          <Link
            href="/contact"
            className="inline-block bg-[#b8860b] text-[#faf8f5] px-10 py-4 font-sans text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#b8860b]/90 transition-all duration-300"
          >
            Request a Consultation
          </Link>
        </div>
      </section>

      {/* Heritage Trust Indicators */}
      <section className="bg-[#0f172a] py-10 px-6 border-t border-[#0f172a]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 opacity-80 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-[#b8860b] flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-[#faf8f5] font-sans text-[10px] tracking-widest uppercase">{reviews.google.short}</span>
          </div>
          
          <div className="w-px h-12 bg-[#b8860b] hidden md:block"></div>
          
          <div className="flex flex-col items-center">
            <div className="text-[#b8860b] flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-[#faf8f5] font-sans text-[10px] tracking-widest uppercase">{reviews.checkatrade.short}</span>
          </div>
          
          <div className="w-px h-12 bg-[#b8860b] hidden md:block"></div>
          
          <div className="flex flex-col items-center">
            <span className="text-[#faf8f5] font-serif text-lg tracking-wider mb-1 italic">{reviews.yearsExperience} Years</span>
            <span className="text-[#faf8f5] font-sans text-[10px] tracking-widest uppercase">Experience</span>
          </div>
          
          <div className="w-px h-12 bg-[#b8860b] hidden md:block"></div>
          
          <div className="flex flex-col items-center">
            <span className="text-[#faf8f5] font-serif text-lg tracking-wider mb-1 italic">Fully</span>
            <span className="text-[#faf8f5] font-sans text-[10px] tracking-widest uppercase">Insured</span>
          </div>
        </div>
      </section>

      {/* Heritage & Craft Section */}
      <section className="py-24 px-8 bg-[#faf8f5]">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-serif text-3xl text-[#0f172a] mb-8 leading-snug">The Pursuit of Architectural Perfection</h2>
          <div className="w-16 h-px bg-[#b8860b] mx-auto mb-10"></div>
          <p className="text-[#0f172a] font-sans leading-relaxed text-lg mb-12 font-light">
            At Bozhiqi, we honor the architectural integrity of London&apos;s most prestigious residences. Using traditional methods and the finest British paints, our artisans deliver a finish that is not merely applied, but curated.
          </p>
          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="text-left">
              <h3 className="font-serif text-xl text-[#0f172a] mb-4">I. Heritage Pigments</h3>
              <p className="text-[#0f172a] font-sans text-sm leading-relaxed opacity-80">
                We exclusively utilize high-pigment palettes from Farrow &amp; Ball and Little Greene, ensuring deep, light-responsive color that matures gracefully over decades.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-left">
              <h3 className="font-serif text-xl text-[#0f172a] mb-4">II. Master Surface Preparation</h3>
              <p className="text-[#0f172a] font-sans text-sm leading-relaxed opacity-80">
                The soul of the finish lies in what is unseen. Our meticulous preparation process involves multiple stages of hand-sanding and priming for structural permanence.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-left">
              <h3 className="font-serif text-xl text-[#0f172a] mb-4">III. Punctual Excellence</h3>
              <p className="text-[#0f172a] font-sans text-sm leading-relaxed opacity-80">
                With {reviews.yearsExperience} years serving London homeowners and a {reviews.checkatrade.score}/10 score on Checkatrade from {reviews.checkatrade.count} verified reviews, reliability is our foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-[#b8860b]">
        {[
          {
            src: '/images/interior-painting-panelled-reception-room-herringbone.webp',
            alt: 'Fine detailing on cornices',
          },
          {
            src: '/images/exterior-painting-victorian-terraces-white-blue-london.webp',
            alt: 'Victorian terraced houses repainted white and blue',
          },
          {
            src: '/images/interior-painting-kitchen-navy-shaker-cabinets.webp',
            alt: 'Bespoke cabinetry finish',
          },
          {
            src: '/images/plastering-painting-hallway-arched-ceiling.webp',
            alt: 'Hallway with arched plastered and painted ceiling',
          },
        ].map((photo) => (
          <div key={photo.src} className="relative h-[50vh] overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        ))}
      </section>

      {/* Services Overview */}
      <section className="bg-[#0f172a] py-24 md:py-32 relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-opacity='0.1'%3E%3Crect fill='%23ffffff' width='1' height='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#b8860b] font-sans text-xs tracking-[0.4em] mb-6 block uppercase">Architectural Services</span>
            <h2 className="font-serif text-[#faf8f5] mb-6 text-4xl md:text-6xl font-normal leading-tight">
              Craftsmanship<br/>Refined
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#b8860b]/20">
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-[#0f172a] p-12 md:p-16 group hover:bg-[#faf8f5] transition-all duration-500 ease-out relative overflow-hidden"
              >
                {/* Service number */}
                <div className="absolute top-8 right-8 text-[#b8860b]/30 group-hover:text-[#b8860b] font-serif text-6xl md:text-8xl leading-none transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-serif text-[#faf8f5] group-hover:text-[#0f172a] text-2xl md:text-3xl mb-6 font-normal transition-colors duration-500 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#faf8f5]/70 group-hover:text-[#0f172a]/70 text-base leading-relaxed mb-8 transition-colors duration-500 max-w-sm">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-[#b8860b] group-hover:w-20 transition-all duration-500"></div>
                    <span className="text-[#b8860b] font-sans text-sm tracking-[0.2em] uppercase font-semibold">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* All Services - Special treatment */}
            <Link
              href="/services"
              className="bg-[#b8860b] p-12 md:p-16 group hover:bg-[#faf8f5] transition-all duration-500 ease-out relative overflow-hidden md:col-span-2"
            >
              <div className="text-center">
                <div className="w-24 h-px bg-[#0f172a]/30 group-hover:bg-[#b8860b] mx-auto mb-8 transition-colors duration-500"></div>
                <h3 className="font-serif text-[#0f172a] group-hover:text-[#0f172a] text-3xl md:text-4xl mb-4 font-normal">
                  Complete Portfolio
                </h3>
                <p className="text-[#0f172a]/70 group-hover:text-[#0f172a]/70 text-lg max-w-md mx-auto">
                  Wall preparation, ceiling restoration, period features, and bespoke finishes
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Complete Wall Specialist */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-[2px] bg-brass mx-auto mb-8" aria-hidden="true" />
            <div className="text-center mb-10">
              <h2 className="font-serif text-oxford mb-4 text-h2-mobile md:text-h2-desktop font-normal tracking-tight">Complete Wall Specialist</h2>
              <p className="text-muted text-body-mobile md:text-body-desktop max-w-2xl mx-auto">
                Most painters can't plaster. Most plasterers don't paint. We do both — professionally.
              </p>
            </div>
            
            <div className="bg-ivory rounded-lg p-8 md:p-12 border border-slate-100 shadow-sm mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-serif text-oxford text-2xl mb-4 font-normal">From Bare Wall to Beautiful Finish</h3>
                  <p className="text-slate leading-relaxed mb-4 text-body-mobile md:text-body-desktop">
                    Why hire two separate tradesmen when you can get both services from one experienced professional? 
                    Our plaster-to-paint service eliminates coordination headaches and ensures perfect compatibility 
                    between preparation and finish.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brass"></div>
                      <span className="text-slate text-sm">Professional plastering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brass"></div>
                      <span className="text-slate text-sm">Perfect paint finish</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brass"></div>
                      <span className="text-slate text-sm">One team, one quote</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brass"></div>
                      <span className="text-slate text-sm">Complete guarantee</span>
                    </div>
                  </div>
                  <Link 
                    href="/services/plaster-to-paint" 
                    className="inline-flex items-center gap-2 bg-brass text-white font-semibold px-6 py-3 hover:bg-brass/90 transition-all duration-300 ease-in-out"
                  >
                    Learn More About Our Complete Wall Service
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/plastering-painting-hallway-arched-ceiling.webp"
                    alt="Professional plastering and painting service showing complete wall transformation"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-oxford/80 backdrop-blur-sm text-white text-label font-semibold px-3 py-1.5 border border-white/10 uppercase tracking-wider">
                    Complete Wall Service
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted text-sm mb-4">
                <strong>Why choose our complete wall service?</strong> No coordination between different tradesmen, 
                no compatibility issues, no finger-pointing if something goes wrong. One professional, one guarantee, perfect results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-12">
            <div className="brass-divider mx-auto" aria-hidden="true" />
            <h2 className="font-serif text-[#1a1a2e] mb-4">Our 3-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Consultation',
                description:
                  'We visit your property, assess the work, discuss your preferences, and provide a detailed fixed-price quotation. No surprises.',
              },
              {
                step: '02',
                title: 'Preparation',
                description:
                  'Thorough preparation is the foundation of a lasting finish. We protect your furniture, fill cracks, sand surfaces, and prime — properly.',
              },
              {
                step: '03',
                title: 'Flawless Finish',
                description:
                  "Precise application, clean edges, and a meticulous final inspection. We don't leave until you're completely satisfied.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-4 font-serif text-white text-xl">
                  {item.step}
                </div>
                <h3 className="font-serif text-[#1a1a2e] text-xl mb-3">{item.title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showreel Video */}
      <section className="bg-[#1a1a2e] section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-8">
            <div className="brass-divider mx-auto" aria-hidden="true" />
            <h2 className="font-serif text-white mb-3">See Our Work in Action</h2>
            <p className="text-[#c8c4be] max-w-xl mx-auto">
              A short look at recent projects — from preparation through to the final finish.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden max-w-3xl mx-auto shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/exterior-painting-detached-house-north-london.webp"
              className="w-full aspect-video object-cover"
              aria-label="Bozhiqi Painting & Decorating project showreel"
            >
              <source src="/videos/bozhiqi-painting-decorating-showreel.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#faf8f5] section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-10">
            <div className="brass-divider mx-auto" aria-hidden="true" />
            <h2 className="font-serif text-[#1a1a2e] mb-3">What Our Clients Say</h2>
            <p className="text-[#6b7280]">{reviews.checkatrade.summary}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                reviewer: 'Sarah M.',
                location: 'Southgate',
                text: 'Jetmir decorated our entire house — every room immaculate. He was punctual every day, careful with our furniture, and the finish is absolutely beautiful. Highly recommended.',
              },
              {
                reviewer: 'David P.',
                location: 'Finchley',
                text: 'Professional from start to finish. Fixed-price quote, no hidden extras, arrived when he said he would. The plastering and painting in our living room looks magazine-perfect.',
              },
              {
                reviewer: 'Emma T.',
                location: 'Wimbledon',
                text: 'Tricky period features that needed careful attention. Jetmir took his time and the cornicing and ceiling rose look original. Exactly the standard we hoped for.',
              },
            ].map((review) => (
              <div key={review.reviewer} className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(26,26,46,0.06)]">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#b8860b] text-lg">★</span>
                  ))}
                </div>
                <p className="text-[#3d3d3d] leading-relaxed mb-4 text-sm italic">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#1a1a2e] text-sm">{review.reviewer}</p>
                  <p className="text-[#6b7280] text-xs">{review.location} · Verified on Checkatrade</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reviews"
              className="inline-block bg-[#b8860b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#9a7009] transition-all"
            >
              Read All {reviews.checkatrade.count} Reviews
            </Link>
            <a
              href={reviews.checkatrade.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#b8860b] text-[#b8860b] font-semibold px-6 py-3 rounded-lg hover:bg-[#b8860b] hover:text-white transition-all"
            >
              View on Checkatrade ↗
            </a>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-10">
            <div className="brass-divider mx-auto" aria-hidden="true" />
            <h2 className="font-serif text-[#1a1a2e] mb-4">Areas We Cover</h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">
              Based in Southgate, North London, we serve clients across North and South London.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-[#faf8f5] border border-[#e8e4df] rounded-lg px-4 py-3 text-center text-sm font-semibold text-[#3d3d3d] hover:border-[#b8860b] hover:text-[#b8860b] transition-all"
              >
                {location.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/locations" className="text-[#b8860b] font-semibold hover:underline">
              View all locations →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#faf8f5] section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-10">
            <div className="brass-divider mx-auto" aria-hidden="true" />
            <h2 className="font-serif text-[#1a1a2e] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="bg-[#1a1a2e] section-py">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="font-serif text-white mb-4">Ready to Refresh Your Home?</h2>
          <p className="text-[#e8e4df] text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation quotation. We typically respond within 45 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#9a7009] transition-all hover:scale-[1.02] text-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:07828288449"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all text-lg"
            >
              Call 07828 288 449
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
