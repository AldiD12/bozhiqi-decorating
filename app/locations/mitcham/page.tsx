import type { Metadata } from 'next';
import LocationPageTemplate from '@/app/components/LocationPageTemplate';
import { getLocationBySlug } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Painters & Decorators in Mitcham (CR4) | Bozhiqi',
  description:
    'Professional painting & decorating in Mitcham. 9.78/10 on Checkatrade from 55 reviews. Serving Mitcham CR4 and surrounding Merton areas. Interior, exterior, wallpaper & plastering. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/locations/mitcham',
  },
  openGraph: {
    title: 'Painters & Decorators in Mitcham (CR4) | Bozhiqi',
    description: 'Professional painting & decorating in Mitcham. 9.78/10 on Checkatrade from 55 reviews. Serving Mitcham CR4 and surrounding Merton areas.',
    url: 'https://bozhiqidecorating.co.uk/locations/mitcham',
  },
};

export default function MitchamPage() {
  const location = getLocationBySlug('mitcham')!;
  return <LocationPageTemplate location={location} />;
}
