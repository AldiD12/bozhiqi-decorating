import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/app/components/FAQAccordion';
import { locations } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Painters & Decorators in North London | Bozhiqi',
  description:
    'Professional painting & decorating in North London. 9.78/10 on Checkatrade from 55 reviews. 15 years experience. Get a free quote today.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/',
  },
  openGraph: {
    title: 'Painters & Decorators in North London | Bozhiqi',
    description:
      'Professional painting & decorating in North London. 9.78/10 on Checkatrade from 55 reviews. 15 years experience.',
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
      <section className="bg-[#1a1a2e] text-white">
        <div className="max-w-content mx-auto px-4 py-16 md:py-24 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <h1 className="font-serif text-white mb-6 leading-tight">
              Professional Painters &amp; Decorators in North London
            </h1>
            <p className="text-[#e8e4df] text-lg leading-relaxed mb-8">
              Meticulous painting, wallpaper installation, and plastering across North &amp; South London.
              Clean finishes, on time, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-lg text-center hover:bg-[#9a7009] transition-all hover:scale-[1.02] text-lg"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:07828288449"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-center hover:bg-white hover:text-[#1a1a2e] transition-all text-lg"
              >
                Call 07828 288 449
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#b8860b] font-semibold">
              <span>★★★★★ 5.0 Google</span>
              <span className="text-[#6b7280]">|</span>
              <span>9.78/10 Checkatrade</span>
              <span className="text-[#6b7280]">|</span>
              <span>15 Years Experience</span>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="bg-[#2d2d4e] rounded-2xl h-96 w-full flex items-center justify-center text-[#e8e4df] text-sm">
              <p className="text-center px-8 leading-relaxed">
                Project photography will be added here — contact us for a portfolio viewing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain & Agitation */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-[#1a1a2e] mb-6">Tired of Unreliable Decorators?</h2>
            <p className="text-[#3d3d3d] text-lg leading-relaxed mb-6">
              You&apos;ve been let down before. A decorator who doesn&apos;t show up, cuts corners on
              preparation, leaves a mess, or disappears before the job is done.
            </p>
            <p className="text-[#3d3d3d] text-lg leading-relaxed mb-10">
              Jetmir Bozhiqi has been delivering meticulous, punctual, and respectful decorating services
              to London homeowners for 15 years. With a 9.78/10 score on Checkatrade from 55 verified
              reviews, the results speak for themselves.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'On time, every time', desc: 'Punctual and respectful of your schedule' },
                { label: 'Dust-free preparation', desc: 'Your home left clean at the end of every day' },
                { label: '12-month guarantee', desc: 'We stand behind every brush stroke' },
              ].map((item) => (
                <div key={item.label} className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e4df]">
                  <div className="w-8 h-1 bg-[#b8860b] rounded mb-3"></div>
                  <p className="font-serif text-[#1a1a2e] text-lg mb-1">{item.label}</p>
                  <p className="text-[#6b7280] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-[#faf8f5] py-16 md:py-20">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-[#1a1a2e] mb-4">Our Services</h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">
              From a single feature wall to a complete exterior repaint — we deliver flawless results on every project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(26,26,46,0.06)] hover:shadow-[0_8px_30px_rgba(26,26,46,0.1)] transition-all group"
              >
                <h3 className="font-serif text-[#1a1a2e] text-xl mb-2">{service.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="text-[#b8860b] text-sm font-semibold group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
            <Link
              href="/services"
              className="bg-[#1a1a2e] rounded-xl p-6 text-white flex flex-col justify-center items-center text-center hover:bg-[#2d2d4e] transition-all"
            >
              <p className="font-serif text-xl mb-2">All Services</p>
              <p className="text-[#e8e4df] text-sm">Wall prep, ceiling painting, touch-ups & more</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-12">
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

      {/* Reviews */}
      <section className="bg-[#faf8f5] py-16 md:py-20">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-[#1a1a2e] mb-4">What Our Clients Say</h2>
            <p className="text-[#6b7280]">9.78/10 on Checkatrade from 55 verified reviews</p>
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
          <div className="text-center mt-8">
            <a
              href="https://www.checkatrade.com/trades/bozhiqi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#b8860b] text-[#b8860b] font-semibold px-6 py-3 rounded-lg hover:bg-[#b8860b] hover:text-white transition-all"
            >
              Read All 55 Reviews on Checkatrade
            </a>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-10">
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
      <section className="bg-[#faf8f5] py-16 md:py-20">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-[#1a1a2e] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="bg-[#1a1a2e] py-16 md:py-20">
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
