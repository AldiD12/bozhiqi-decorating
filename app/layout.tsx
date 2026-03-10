import type { Metadata } from 'next';
import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import TrustBar from '@/app/components/TrustBar';
import MobileStickyFooter from '@/app/components/MobileStickyFooter';
import CookieBanner from '@/app/components/CookieBanner';
import GoogleAnalytics from '@/app/components/GoogleAnalytics';
import { reviews } from '@/app/data/reviews';

export const metadata: Metadata = {
  metadataBase: new URL('https://bozhiqidecorating.co.uk'),
  title: {
    default: 'Painters & Decorators in North London | Bozhiqi',
    template: '%s | Bozhiqi Painting & Decorating',
  },
  description:
    `Professional painting & decorating in North London. ${reviews.checkatrade.summary}. ${reviews.yearsExperience} years experience. Get a free quote today.`,
  openGraph: {
    siteName: 'Bozhiqi Painting & Decorating',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://bozhiqidecorating.co.uk/#organization',
  name: 'Bozhiqi Painting & Decorating',
  url: 'https://bozhiqidecorating.co.uk',
  telephone: '+447828288449',
  email: 'jetmir@bozhiqidecorating.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Southgate, London',
    addressRegion: 'Greater London',
    postalCode: 'N14',
    addressCountry: 'GB',
  },
  foundingDate: '2011',
  founder: {
    '@type': 'Person',
    name: 'Jetmir Bozhiqi',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: reviews.google.score,
    reviewCount: String(reviews.google.count),
    bestRating: reviews.google.outOf,
    worstRating: '1',
  },
  priceRange: '££',
  image: 'https://bozhiqidecorating.co.uk/images/bozhiqi-hero.webp',
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Source+Sans+3:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <GoogleAnalytics />
        <TrustBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileStickyFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
