import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FAQAccordion from '@/app/components/FAQAccordion';
import { reviews } from '@/app/data/reviews';

export const metadata: Metadata = {
  title: 'Plaster to Paint Service London | Complete Wall Specialist | Bozhiqi',
  description: 
    `Complete wall service from bare plaster to perfect paint finish. One team, one call. ${reviews.checkatrade.summary}. Free quotes in North London.`,
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/services/plaster-to-paint',
  },
  openGraph: {
    title: 'Plaster to Paint Service London | Complete Wall Specialist',
    description: 
      `Complete wall service from bare plaster to perfect paint finish. One team, one call. ${reviews.checkatrade.summary}.`,
    url: 'https://bozhiqidecorating.co.uk/services/plaster-to-paint',
  },
};

const faqs = [
  {
    question: 'Can you plaster and paint in the same visit?',
    answer: 'Yes, but proper drying time is essential. We typically plaster on day one, allow 24-48 hours for complete drying, then apply mist coat and topcoats. This ensures the best possible finish without cracking or peeling.',
  },
  {
    question: 'Do I need to hire separate plasterer and painter?',
    answer: 'Not with Bozhiqi. Most decorators can\'t plaster, and most plasterers don\'t paint. We do both to professional standards, saving you the hassle of coordinating multiple tradesmen and ensuring perfect compatibility between prep and finish.',
  },
  {
    question: 'What\'s included in your plaster-to-paint service?',
    answer: 'Complete wall preparation including crack repair, skim coating, sanding smooth, mist coat application, and two topcoats of premium emulsion. We also handle all dust protection and cleanup.',
  },
  {
    question: 'How much does plaster-to-paint cost in London?',
    answer: 'Costs vary by room size and wall condition. A typical bedroom (3m x 4m) ranges from £800-£1,200 including materials. We provide fixed-price quotes after assessing your specific requirements.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Wall Assessment',
    description: 'We inspect existing surfaces, identify problem areas, and determine the best approach for your specific walls.',
  },
  {
    step: '02', 
    title: 'Professional Plastering',
    description: 'Skim coating, crack repair, and surface preparation using premium materials. All work to British Standard specifications.',
  },
  {
    step: '03',
    title: 'Proper Drying Time',
    description: 'We allow adequate drying time between plaster and paint - never rushing the process that causes future problems.',
  },
  {
    step: '04',
    title: 'Perfect Paint Finish',
    description: 'Mist coat followed by two topcoats of premium emulsion, applied with precision for a flawless, long-lasting finish.',
  },
];

export default function PlasterToPaintPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white">
        <div className="max-w-content mx-auto px-4 pt-10 md:py-20 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div className="pb-8 md:pb-0">
            <div className="w-10 h-[3px] bg-[#b8860b] rounded mb-5" aria-hidden="true" />
            <h1 className="font-serif text-white mb-6">
              Complete Wall Specialist: Plaster to Paint
            </h1>
            <p className="text-[#e8e4df] text-lg mb-6 leading-relaxed">
              From bare walls to beautiful finishes. One team, one call, complete service. 
              Professional plastering and painting under one roof.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#b8860b] font-semibold mb-6">
              <span>{reviews.google.short}</span>
              <span className="text-[#6b7280]">|</span>
              <span>{reviews.checkatrade.short}</span>
              <span className="text-[#6b7280]">|</span>
              <span>{reviews.yearsExperience} Years Experience</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-[#b8860b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#9a7009] transition-all text-center"
              >
                Get a Free Quote
              </Link>
              <a 
                href="tel:07828288449" 
                className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all text-center"
              >
                Call 07828 288 449
              </a>
            </div>
          </div>

          <div className="relative -mx-4 md:mx-0 aspect-[16/10] md:aspect-[4/3] md:rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
            <Image
              src="/images/plastering-bathroom-venetian-plaster-warm-finish.webp"
              alt="Professional plastering and painting service showing smooth wall finish"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="brass-divider" aria-hidden="true" />
            <h2 className="font-serif text-[#1a1a2e] mb-6">Why Most Decorators Can't Offer This Service</h2>
            <p className="text-[#3d3d3d] leading-relaxed mb-5 text-lg">
              Most painting and decorating companies don't offer plastering. It's a specialist skill that requires different tools, 
              materials, and expertise. This means you typically need to hire two separate tradesmen.
            </p>
            <p className="text-[#3d3d3d] leading-relaxed mb-5">
              The problem? Coordinating schedules, ensuring compatibility between prep and finish work, and dealing with 
              potential finger-pointing if something goes wrong. "The plasterer says it's the painter's fault, 
              the painter blames the plaster."
            </p>
            <p className="text-[#3d3d3d] leading-relaxed mb-8">
              With Bozhiqi, you get both services from one experienced professional. We take full responsibility 
              for the entire process, from bare wall to perfect finish.
            </p>

            <div className="bg-[#faf8f5] rounded-2xl p-8 border border-[#e8e4df]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#b8860b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-[#1a1a2e] text-xl mb-3">The Bozhiqi Advantage</h3>
                  <p className="text-[#3d3d3d] leading-relaxed">
                    Professional plasterer AND painter in one. No coordination headaches, no compatibility issues, 
                    no finger-pointing. One team, one quote, one guarantee covering the entire job.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#faf8f5] section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="brass-divider mx-auto" aria-hidden="true" />
          <h2 className="font-serif text-[#1a1a2e] text-center mb-10">Our Complete Wall Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-[#b8860b] rounded-full flex items-center justify-center mx-auto mb-4 font-serif text-white text-lg">
                  {item.step}
                </div>
                <h3 className="font-serif text-[#1a1a2e] text-lg mb-2">{item.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="brass-divider" aria-hidden="true" />
            <h2 className="font-serif text-[#1a1a2e] mb-8">What's Included in Our Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-[#1a1a2e] text-lg mb-4">Plastering Work</h3>
                <ul className="space-y-2 text-[#3d3d3d]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8860b] mt-1">•</span>
                    Skim coating over existing surfaces
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8860b] mt-1">•</span>
                    Crack repair and surface preparation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8860b] mt-1">•</span>
                    Artex removal and smoothing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8860b] mt-1">•</span>
                    Coving and decorative plasterwork
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-[#1a1a2e] text-lg mb-4">Painting Work</h3>
                <ul className="space-y-2 text-[#3d3d3d]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8860b] mt-1">•</span>
                    Proper mist coat application
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8860b] mt-1">•</span>
                    Two topcoats of premium emulsion
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8860b] mt-1">•</span>
                    Cutting in and precision edging
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b8860b] mt-1">•</span>
                    Complete dust protection and cleanup
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="bg-[#faf8f5] section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="brass-divider mx-auto" aria-hidden="true" />
          <h2 className="font-serif text-[#1a1a2e] text-center mb-10">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: '/images/plastering-painting-hallway-arched-ceiling.webp',
                alt: 'Hallway with professional plastering and painting showing arched ceiling detail',
                title: 'Victorian Hallway Restoration',
                location: 'Muswell Hill, N10',
              },
              {
                src: '/images/interior-painting-entrance-hall-staircase-neutral.webp', 
                alt: 'Entrance hall and staircase with fresh plaster and neutral paint finish',
                title: 'Complete Hall Renovation',
                location: 'Southgate, N14',
              },
              {
                src: '/images/plastering-bathroom-venetian-plaster-warm-finish.webp',
                alt: 'Bathroom with venetian plaster and warm paint finish',
                title: 'Bathroom Plaster & Paint',
                location: 'Barnet, EN5',
              },
            ].map((project) => (
              <div key={project.src} className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(26,26,46,0.06)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-[#1a1a2e] mb-1">{project.title}</h3>
                  <p className="text-[#6b7280] text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-py">
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
          <h2 className="font-serif text-white mb-4">Ready for Complete Wall Service?</h2>
          <p className="text-[#e8e4df] mb-8 max-w-xl mx-auto">
            Get a fixed-price quote for your plaster-to-paint project. One team, one call, complete service from bare walls to beautiful finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-[#b8860b] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#9a7009] transition-all"
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