import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';
import { checkatradeReviews } from '@/app/data/checkatrade-reviews';
import { reviews } from '@/app/data/reviews';

export const metadata: Metadata = {
  title: `Customer Reviews | ${reviews.checkatrade.score}/10 on Checkatrade | Bozhiqi`,
  description: `Read all ${reviews.checkatrade.count} verified reviews for Bozhiqi Painting & Decorating. ${reviews.checkatrade.summary}. Real feedback from London homeowners. Free quotes.`,
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/reviews',
  },
  openGraph: {
    title: `Customer Reviews | ${reviews.checkatrade.score}/10 on Checkatrade | Bozhiqi`,
    description: `Read all ${reviews.checkatrade.count} verified reviews for Bozhiqi Painting & Decorating. ${reviews.checkatrade.summary}.`,
    url: 'https://bozhiqidecorating.co.uk/reviews',
  },
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function renderStars(ratingOutOf10: number) {
  const stars5 = Math.round((ratingOutOf10 / 10) * 5);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < stars5 ? 'text-[#b8860b]' : 'text-[#e8e4df]'}>★</span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const verifiedCount = checkatradeReviews.filter((r) => r.verified).length;

  const aggregateSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Bozhiqi Painting & Decorating',
    url: 'https://bozhiqidecorating.co.uk',
    telephone: '+447828288449',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviews.checkatrade.score,
      reviewCount: String(checkatradeReviews.length),
      bestRating: '10',
      worstRating: '1',
    },
    review: checkatradeReviews.map((r) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '10',
        worstRating: '1',
      },
      author: {
        '@type': 'Person',
        name: r.reviewer || 'Checkatrade Customer',
      },
      datePublished: r.date,
      reviewBody: r.text,
      publisher: {
        '@type': 'Organization',
        name: 'Checkatrade',
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-12 md:py-16">
        <div className="max-w-content mx-auto px-4">
          <Breadcrumb items={[{ name: 'Reviews', href: '/reviews' }]} />
          <h1 className="font-serif text-white mt-4">Customer Reviews</h1>
          <p className="text-[#e8e4df] text-lg mt-4 max-w-2xl">
            {reviews.checkatrade.summary}. Read what London homeowners say about working with Jetmir.
          </p>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="bg-[#faf8f5] py-10 border-b border-[#e8e4df]">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            <div>
              <div className="font-serif text-[#b8860b] text-3xl">{reviews.checkatrade.score}</div>
              <div className="text-[#6b7280] text-xs mt-1">Out of 10</div>
            </div>
            <div>
              <div className="font-serif text-[#b8860b] text-3xl">{checkatradeReviews.length}</div>
              <div className="text-[#6b7280] text-xs mt-1">Total Reviews</div>
            </div>
            <div>
              <div className="font-serif text-[#b8860b] text-3xl">{verifiedCount}</div>
              <div className="text-[#6b7280] text-xs mt-1">Verified Reviews</div>
            </div>
            <div>
              <div className="font-serif text-[#b8860b] text-3xl">{reviews.yearsExperience}</div>
              <div className="text-[#6b7280] text-xs mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {checkatradeReviews.map((review, index) => (
              <div
                key={index}
                className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e4df] flex flex-col"
              >
                {/* Header: rating + date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {renderStars(review.rating)}
                    <span className="text-[#b8860b] font-semibold text-sm">
                      {review.rating}/10
                    </span>
                  </div>
                  {review.verified && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#166534] bg-[#166534]/10 px-2 py-0.5 rounded">
                      Verified
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif text-[#1a1a2e] text-lg mb-2 leading-snug">
                  {review.title}
                </h3>

                {/* Review text */}
                <p className="text-[#3d3d3d] text-sm leading-relaxed flex-grow mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Footer: reviewer + location + date */}
                <div className="flex items-center justify-between text-xs text-[#6b7280] pt-3 border-t border-[#e8e4df]">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#1a1a2e]">
                      {review.reviewer || 'Checkatrade Customer'}
                    </span>
                    {review.location && (
                      <>
                        <span>·</span>
                        <span>{review.location}</span>
                      </>
                    )}
                  </div>
                  <span>{formatDate(review.date)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Checkatrade CTA */}
          <div className="text-center mt-12">
            <p className="text-[#6b7280] text-sm mb-4">
              All reviews are from real customers on Checkatrade — the UK&apos;s largest trade review platform.
            </p>
            <a
              href={reviews.checkatrade.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#b8860b] text-[#b8860b] font-semibold px-6 py-3 rounded-lg hover:bg-[#b8860b] hover:text-white transition-all"
            >
              View Us on Checkatrade ↗
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a2e] section-py">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="font-serif text-white mb-4">Ready to Join Our Happy Customers?</h2>
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
