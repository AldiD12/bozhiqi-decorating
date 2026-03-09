import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About Jetmir Bozhiqi | 15 Years Experience | Bozhiqi',
  description:
    'Meet Jetmir Bozhiqi — 15 years of professional painting & decorating across London. Fully insured, Checkatrade verified, dedicated to flawless finishes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/about',
  },
  openGraph: {
    title: 'About Jetmir Bozhiqi | 15 Years Experience | Bozhiqi',
    description:
      'Meet Jetmir Bozhiqi — 15 years of professional painting & decorating across London. Fully insured, Checkatrade verified.',
    url: 'https://bozhiqidecorating.co.uk/about',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jetmir Bozhiqi',
  jobTitle: 'Professional Painter & Decorator',
  worksFor: {
    '@type': 'ProfessionalService',
    name: 'Bozhiqi Painting & Decorating',
    url: 'https://bozhiqidecorating.co.uk',
  },
  sameAs: ['https://www.checkatrade.com/trades/bozhiqi'],
  description:
    '15 years of professional painting & decorating across London. Fully insured, Checkatrade verified.',
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-12 md:py-16">
        <div className="max-w-content mx-auto px-4">
          <Breadcrumb items={[{ name: 'About', href: '/about' }]} />
          <h1 className="font-serif text-white mt-4">About Jetmir Bozhiqi</h1>
          <p className="text-[#e8e4df] text-lg mt-4 max-w-2xl">
            15 years of meticulous painting & decorating, built on punctuality, craftsmanship, and respect for your home.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#faf8f5] rounded-2xl p-8 border border-[#e8e4df] mb-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-[#b8860b] rounded-full flex items-center justify-center text-white font-serif text-2xl flex-shrink-0">
                  JB
                </div>
                <div>
                  <h2 className="font-serif text-[#1a1a2e] text-2xl">Jetmir Bozhiqi</h2>
                  <p className="text-[#6b7280]">Founder & Lead Decorator · 15 Years Experience</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                {[
                  { label: '15+', sub: 'Years Experience' },
                  { label: '9.78', sub: 'Checkatrade Score' },
                  { label: '55+', sub: 'Verified Reviews' },
                  { label: '100%', sub: 'Fully Insured' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-serif text-[#b8860b] text-2xl">{stat.label}</div>
                    <div className="text-[#6b7280] text-xs mt-1">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose-body space-y-5 text-[#3d3d3d] leading-relaxed">
              <p>
                Jetmir Bozhiqi founded Bozhiqi Painting & Decorating in 2011 after over a decade of working across
                some of London&apos;s finest residential properties. What started as a small, hands-on operation
                built on word-of-mouth recommendations has grown into one of North London&apos;s most trusted
                decorating services — without ever compromising on the standards that built that reputation.
              </p>
              <p>
                Jetmir leads every project personally. He is not a company that sends different tradespeople to each
                job — when you book with Bozhiqi, you get Jetmir. That consistency means one point of contact, one
                set of standards, and the knowledge that the person who quoted your job is the person who will
                complete it.
              </p>
              <p>
                His approach is rooted in three principles: thorough preparation, meticulous application, and
                complete transparency. Fixed-price quotations mean no surprises. Every project begins with
                comprehensive surface preparation — filling, sanding, priming — because Jetmir knows that the
                quality of a paint job is determined long before the first top coat is applied.
              </p>
              <p>
                Jetmir works with premium paint brands including Farrow & Ball, Little Greene, Dulux Trade, Crown
                Trade, and Mylands. He regularly advises clients on colour selection and paint finishes, drawing on
                15 years of practical experience to help you achieve the look you have in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#faf8f5] section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-12">
            <div className="brass-divider mx-auto" aria-hidden="true" />
            <h2 className="font-serif text-[#1a1a2e] mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Punctuality',
                description:
                  'We arrive when we say we will, every day. Your schedule matters. We plan our work around your life, not the other way around.',
              },
              {
                title: 'Cleanliness',
                description:
                  'Your home is left clean at the end of every working day. Dust sheets, careful masking, and a thorough clean-up are standard practice — not an afterthought.',
              },
              {
                title: 'Attention to Detail',
                description:
                  'Perfect cutting in. Smooth, even coverage. Crisp lines. We notice the things that others miss, and we fix them before we consider a job complete.',
              },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(26,26,46,0.06)]">
                <div className="w-8 h-1 bg-[#b8860b] rounded mb-4"></div>
                <h3 className="font-serif text-[#1a1a2e] text-xl mb-3">{value.title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4 max-w-3xl">
          <div className="brass-divider mx-auto mb-0" aria-hidden="true" />
          <h2 className="font-serif text-[#1a1a2e] mb-8 text-center">Credentials & Accreditations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Checkatrade Verified', detail: '9.78/10 from 55 reviews' },
              { label: 'MyBuilder Recommended', detail: '2 verified reviews' },
              { label: 'Fully Public Liability Insured', detail: 'All projects covered' },
              { label: '15 Years Professional Experience', detail: 'Since 2011' },
              { label: '12-Month Workmanship Guarantee', detail: 'Standard on every job' },
              { label: 'Fixed-Price Quotations', detail: 'No hidden extras, ever' },
            ].map((cred) => (
              <div key={cred.label} className="flex items-start gap-3 bg-[#faf8f5] rounded-xl p-4 border border-[#e8e4df]">
                <div className="w-5 h-5 rounded-full bg-[#b8860b] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a2e] text-sm">{cred.label}</p>
                  <p className="text-[#6b7280] text-xs">{cred.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a2e] section-py">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="font-serif text-white mb-4">Work With Jetmir</h2>
          <p className="text-[#e8e4df] mb-8 max-w-xl mx-auto">
            Get a free, fixed-price quotation. We typically respond within 45 minutes.
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
