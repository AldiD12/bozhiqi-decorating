import type { Metadata } from 'next';
import LocationPageTemplate from '@/app/components/LocationPageTemplate';
import { getLocationBySlug } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Painters & Decorators in Enfield (EN1, EN2, EN3) | Bozhiqi',
  description:
    'Professional painting & decorating in Enfield. 9.78/10 on Checkatrade from 55 reviews. Serving Enfield EN1, EN2, EN3 and surrounding areas. Interior, exterior, wallpaper & plastering. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/locations/enfield',
  },
  openGraph: {
    title: 'Painters & Decorators in Enfield (EN1, EN2, EN3) | Bozhiqi',
    description: 'Professional painting & decorating in Enfield. 9.78/10 on Checkatrade from 55 reviews. Serving Enfield EN1, EN2, EN3 and surrounding areas.',
    url: 'https://bozhiqidecorating.co.uk/locations/enfield',
  },
};

export default function EnfieldPage() {
  const location = getLocationBySlug('enfield')!;
  return <LocationPageTemplate location={location} />;
}
