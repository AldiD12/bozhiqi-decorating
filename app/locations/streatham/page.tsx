import type { Metadata } from 'next';
import LocationPageTemplate from '@/app/components/LocationPageTemplate';
import { getLocationBySlug } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Painters & Decorators in Streatham (SW16) | Bozhiqi',
  description:
    'Professional painting & decorating in Streatham. 9.78/10 on Checkatrade from 55 reviews. Serving Streatham SW16 and surrounding Lambeth areas. Interior, exterior, wallpaper & plastering. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/locations/streatham',
  },
  openGraph: {
    title: 'Painters & Decorators in Streatham (SW16) | Bozhiqi',
    description: 'Professional painting & decorating in Streatham. 9.78/10 on Checkatrade from 55 reviews. Serving Streatham SW16 and surrounding Lambeth areas.',
    url: 'https://bozhiqidecorating.co.uk/locations/streatham',
  },
};

export default function StreathamPage() {
  const location = getLocationBySlug('streatham')!;
  return <LocationPageTemplate location={location} />;
}
