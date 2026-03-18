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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    siteName: 'Bozhiqi Painting & Decorating',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/exterior-painting-detached-house-north-london.webp',
        width: 1200,
        height: 630,
        alt: 'Bozhiqi Painting & Decorating in North London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Painters & Decorators in North London | Bozhiqi',
    description: `Professional painting & decorating in North London. ${reviews.checkatrade.summary}. ${reviews.yearsExperience} years experience. Get a free quote today.`,
    images: ['/images/exterior-painting-detached-house-north-london.webp'],
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
    ratingValue: reviews.checkatrade.score,
    reviewCount: String(reviews.checkatrade.count),
    bestRating: reviews.checkatrade.outOf,
    worstRating: '1',
  },
  priceRange: '££',
  image: 'https://bozhiqidecorating.co.uk/images/bozhiqi-hero.webp',
  sameAs: [
    reviews.checkatrade.url,
    'https://www.google.com/search?q=Bozhiqi+Painting+%26+Decorating&stick=H4sIAAAAAAAA_-NgU1I1qDBJTDOxNEwzMU4zSDIzTUuxMqgwM7VMNjEzskxLNDA1TzI0WMQq65RflZFZmKkQkJiZV5KZl66gpuCSmpxflAjiAADhwPNfSQAAAA&hl=en&mat=CR5kC1IdLw0MElYBTVDHnnJ90VsAk7AoynZssXw63_oEkRhD6SZ5u7f3PQlVdmbBaRPvnHCY4kPSXbH-FxnlrJU3sJBB5xtOsphG5x8pcxGvpZePn0WnifdwzYVyuG0asQ&authuser=0'
  ],
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
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Source+Sans+3:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased font-sans">
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
