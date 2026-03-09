import type { Metadata } from 'next';
import LocationPageTemplate from '@/app/components/LocationPageTemplate';
import { getLocationBySlug } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Painters & Decorators in Kingston upon Thames (KT1, KT2) | Bozhiqi',
  description:
    'Professional painting & decorating in Kingston upon Thames. 9.78/10 on Checkatrade from 55 reviews. Serving Kingston KT1, KT2 and surrounding areas. Interior, exterior, wallpaper & plastering. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/locations/kingston',
  },
  openGraph: {
    title: 'Painters & Decorators in Kingston upon Thames (KT1, KT2) | Bozhiqi',
    description: 'Professional painting & decorating in Kingston upon Thames. 9.78/10 on Checkatrade from 55 reviews. Serving Kingston KT1, KT2 and surrounding areas.',
    url: 'https://bozhiqidecorating.co.uk/locations/kingston',
  },
};

export default function KingstonPage() {
  const location = getLocationBySlug('kingston')!;
  return <LocationPageTemplate location={location} />;
}
