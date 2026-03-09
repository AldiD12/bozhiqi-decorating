import type { Metadata } from 'next';
import LocationPageTemplate from '@/app/components/LocationPageTemplate';
import { getLocationBySlug } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Painters & Decorators in Southgate (N14) | Bozhiqi',
  description:
    'Professional painting & decorating in Southgate. 9.78/10 on Checkatrade from 55 reviews. Serving Southgate N14 and surrounding Enfield areas. Interior, exterior, wallpaper & plastering. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/locations/southgate',
  },
  openGraph: {
    title: 'Painters & Decorators in Southgate (N14) | Bozhiqi',
    description: 'Professional painting & decorating in Southgate. 9.78/10 on Checkatrade from 55 reviews. Serving Southgate N14 and surrounding Enfield areas.',
    url: 'https://bozhiqidecorating.co.uk/locations/southgate',
  },
};

export default function SouthgatePage() {
  const location = getLocationBySlug('southgate')!;
  return <LocationPageTemplate location={location} />;
}
