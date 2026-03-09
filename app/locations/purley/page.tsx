import type { Metadata } from 'next';
import LocationPageTemplate from '@/app/components/LocationPageTemplate';
import { getLocationBySlug } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Painters & Decorators in Purley (CR8) | Bozhiqi',
  description:
    'Professional painting & decorating in Purley. 9.78/10 on Checkatrade from 55 reviews. Serving Purley CR8 and surrounding Croydon areas. Interior, exterior, wallpaper & plastering. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/locations/purley',
  },
  openGraph: {
    title: 'Painters & Decorators in Purley (CR8) | Bozhiqi',
    description: 'Professional painting & decorating in Purley. 9.78/10 on Checkatrade from 55 reviews. Serving Purley CR8 and surrounding Croydon areas.',
    url: 'https://bozhiqidecorating.co.uk/locations/purley',
  },
};

export default function PurleyPage() {
  const location = getLocationBySlug('purley')!;
  return <LocationPageTemplate location={location} />;
}
