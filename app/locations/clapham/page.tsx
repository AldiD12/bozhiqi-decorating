import type { Metadata } from 'next';
import LocationPageTemplate from '@/app/components/LocationPageTemplate';
import { getLocationBySlug } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Painters & Decorators in Clapham (SW4, SW11) | Bozhiqi',
  description:
    'Professional painting & decorating in Clapham. 9.78/10 on Checkatrade from 55 reviews. Serving Clapham SW4, SW11 and Lambeth areas. Interior, exterior, wallpaper & plastering. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/locations/clapham',
  },
  openGraph: {
    title: 'Painters & Decorators in Clapham (SW4, SW11) | Bozhiqi',
    description: 'Professional painting & decorating in Clapham. 9.78/10 on Checkatrade from 55 reviews. Serving Clapham SW4, SW11 and Lambeth areas.',
    url: 'https://bozhiqidecorating.co.uk/locations/clapham',
  },
};

export default function ClaphamPage() {
  const location = getLocationBySlug('clapham')!;
  return <LocationPageTemplate location={location} />;
}
