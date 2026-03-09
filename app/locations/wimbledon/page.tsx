import type { Metadata } from 'next';
import LocationPageTemplate from '@/app/components/LocationPageTemplate';
import { getLocationBySlug } from '@/app/data/locations';

export const metadata: Metadata = {
  title: 'Painters & Decorators in Wimbledon (SW19, SW20) | Bozhiqi',
  description:
    'Professional painting & decorating in Wimbledon. 9.78/10 on Checkatrade from 55 reviews. Serving Wimbledon SW19, SW20 and Merton areas. Interior, exterior, wallpaper & plastering. Free quotes.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/locations/wimbledon',
  },
  openGraph: {
    title: 'Painters & Decorators in Wimbledon (SW19, SW20) | Bozhiqi',
    description: 'Professional painting & decorating in Wimbledon. 9.78/10 on Checkatrade from 55 reviews. Serving Wimbledon SW19, SW20 and Merton areas.',
    url: 'https://bozhiqidecorating.co.uk/locations/wimbledon',
  },
};

export default function WimbledonPage() {
  const location = getLocationBySlug('wimbledon')!;
  return <LocationPageTemplate location={location} />;
}
