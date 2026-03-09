import type { Metadata } from 'next';
import LocationPageTemplate from '@/app/components/LocationPageTemplate';
import { getLocationBySlug } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Painters & Decorators in Finchley (N3, N12) | Bozhiqi',
  description:
    'Professional painting & decorating in Finchley. 9.78/10 on Checkatrade from 55 reviews. Serving Finchley N3, N12 and surrounding Barnet areas. Interior, exterior, wallpaper & plastering. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/locations/finchley',
  },
  openGraph: {
    title: 'Painters & Decorators in Finchley (N3, N12) | Bozhiqi',
    description: 'Professional painting & decorating in Finchley. 9.78/10 on Checkatrade from 55 reviews. Serving Finchley N3, N12 and surrounding Barnet areas.',
    url: 'https://bozhiqidecorating.co.uk/locations/finchley',
  },
};

export default function FinchleyPage() {
  const location = getLocationBySlug('finchley')!;
  return <LocationPageTemplate location={location} />;
}
