import type { Metadata } from 'next';
import LocationPageTemplate from '@/app/components/LocationPageTemplate';
import { getLocationBySlug } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Painters & Decorators in Wallington (SM6) | Bozhiqi',
  description:
    'Professional painting & decorating in Wallington. 9.78/10 on Checkatrade from 55 reviews. Serving Wallington SM6 and surrounding Sutton areas. Interior, exterior, wallpaper & plastering. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/locations/wallington',
  },
  openGraph: {
    title: 'Painters & Decorators in Wallington (SM6) | Bozhiqi',
    description: 'Professional painting & decorating in Wallington. 9.78/10 on Checkatrade from 55 reviews. Serving Wallington SM6 and surrounding Sutton areas.',
    url: 'https://bozhiqidecorating.co.uk/locations/wallington',
  },
};

export default function WallingtonPage() {
  const location = getLocationBySlug('wallington')!;
  return <LocationPageTemplate location={location} />;
}
