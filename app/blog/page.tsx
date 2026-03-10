import type { Metadata } from 'next';
import Link from 'next/link';
import { reviews } from '@/app/data/reviews';

export const metadata: Metadata = {
  title: 'Painting & Decorating Blog | Expert Tips & Guides | Bozhiqi',
  description: 
    `Expert painting and decorating advice from ${reviews.yearsExperience} years of experience. Costs, tips, and guides for London homeowners.`,
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/blog',
  },
  openGraph: {
    title: 'Painting & Decorating Blog | Expert Tips & Guides',
    description: 
      `Expert painting and decorating advice from ${reviews.yearsExperience} years of experience. Costs, tips, and guides for London homeowners.`,
    url: 'https://bozhiqidecorating.co.uk/blog',
  },
};

const blogPosts = [
  {
    title: 'How Much Does It Cost to Paint a Room in London? (2026 Prices)',
    excerpt: 'Complete breakdown of room painting costs in London, from small bedrooms to large living spaces. Real prices from actual projects.',
    href: '/blog/room-painting-costs-london-2026',
    date: '2026-03-10',
    readTime: '8 min read',
    category: 'Pricing',
  },
  {
    title: 'Painting vs Wallpaper: Which Is Better for Your London Home? (2026)',
    excerpt: 'Expert comparison of painting versus wallpaper for London homes. Costs, durability, and which option suits different rooms.',
    href: '/blog/painting-vs-wallpaper-london-2026',
    date: '2026-03-08',
    readTime: '6 min read',
    category: 'Design',
  },
  {
    title: 'How Much Does Exterior House Painting Cost in London? (2026 Guide)',
    excerpt: 'Comprehensive guide to exterior painting costs in London. From terraced houses to detached properties.',
    href: '/blog/exterior-painting-costs-london-2026',
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Pricing',
  },
  {
    title: 'Do I Need a Plasterer Before Painting? When to Plaster vs When to Just Paint',
    excerpt: 'Expert guide on when walls need plastering before painting. Save money by understanding what your walls actually need.',
    href: '/blog/plasterer-before-painting-guide',
    date: '2026-03-03',
    readTime: '7 min read',
    category: 'Preparation',
  },
  {
    title: 'How to Choose a Painter and Decorator in North London (2026 Guide)',
    excerpt: 'Complete buyer\'s guide to hiring a painter and decorator. What to look for, questions to ask, and red flags to avoid.',
    href: '/blog/choose-painter-decorator-north-london-2026',
    date: '2026-03-01',
    readTime: '9 min read',
    category: 'Hiring',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white">
        <div className="max-w-content mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-10 h-[3px] bg-[#b8860b] rounded mb-5 mx-auto" aria-hidden="true" />
            <h1 className="font-serif text-white mb-6">
              Painting & Decorating Expert Advice
            </h1>
            <p className="text-[#e8e4df] text-lg mb-8 leading-relaxed">
              {reviews.yearsExperience} years of professional experience distilled into practical guides, 
              honest pricing, and expert tips for London homeowners.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Pricing Guides', 'Expert Tips', 'Real Projects', 'Honest Advice'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-[#b8860b] bg-[#b8860b]/10 border border-[#b8860b]/25 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-white section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {blogPosts.map((post) => (
                <article key={post.href} className="bg-[#faf8f5] rounded-2xl p-8 border border-[#e8e4df] hover:shadow-[0_8px_32px_rgba(26,26,46,0.08)] transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-[#b8860b] bg-[#b8860b]/10 border border-[#b8860b]/25 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-[#6b7280] text-sm">{post.date}</span>
                    <span className="text-[#6b7280] text-sm">•</span>
                    <span className="text-[#6b7280] text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-[#1a1a2e] text-2xl mb-3 hover:text-[#b8860b] transition-colors">
                    <Link href={post.href}>{post.title}</Link>
                  </h2>
                  <p className="text-[#3d3d3d] leading-relaxed mb-4">{post.excerpt}</p>
                  <Link 
                    href={post.href}
                    className="inline-flex items-center gap-2 text-[#b8860b] font-semibold hover:underline"
                  >
                    Read Full Article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a2e] section-py">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="font-serif text-white mb-4">Need Professional Advice for Your Project?</h2>
          <p className="text-[#e8e4df] mb-8 max-w-xl mx-auto">
            Get expert guidance and a fixed-price quote for your painting and decorating project.
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