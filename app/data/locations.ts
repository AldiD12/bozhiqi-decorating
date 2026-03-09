export interface Location {
  slug: string;
  name: string;
  postcode: string;
  coordinates: { lat: number; lng: number };
  zone: 'north' | 'south';
  nearby: string[];
  borough: string;
  landmarks: string[];
  housingTypes: string[];
  localChallenge: string;
}

export const locations: Location[] = [
  {
    slug: 'southgate',
    name: 'Southgate',
    postcode: 'N14',
    coordinates: { lat: 51.6322, lng: -0.1275 },
    zone: 'north',
    nearby: ['finchley', 'enfield'],
    borough: 'Enfield',
    landmarks: ['Southgate Underground Station', 'Grovelands Park', 'Broomfield Park'],
    housingTypes: ['1930s semis', 'Art Deco properties', 'Victorian terraces', 'Edwardian family homes'],
    localChallenge: 'Many Southgate properties feature original Art Deco features and period mouldings that require specialist preparation and careful paint application to preserve their character.',
  },
  {
    slug: 'finchley',
    name: 'Finchley',
    postcode: 'N3, N12',
    coordinates: { lat: 51.5993, lng: -0.1869 },
    zone: 'north',
    nearby: ['southgate', 'enfield'],
    borough: 'Barnet',
    landmarks: ['Victoria Park', 'Avenue House', 'Finchley Central Station'],
    housingTypes: ['Victorian terraces', 'Edwardian semis', '1930s family homes', 'modern apartments'],
    localChallenge: 'Finchley homes often have high ceilings and original cornicing that need careful preparation before painting to prevent cracking and ensure a lasting finish.',
  },
  {
    slug: 'enfield',
    name: 'Enfield',
    postcode: 'EN1, EN2, EN3',
    coordinates: { lat: 51.6538, lng: -0.0799 },
    zone: 'north',
    nearby: ['southgate', 'finchley'],
    borough: 'Enfield',
    landmarks: ['Enfield Town Park', 'Palace Gardens Shopping Centre', 'Forty Hall'],
    housingTypes: ['Victorian terraces', 'post-war semis', 'new-build estates', 'period properties'],
    localChallenge: 'Enfield properties frequently suffer from damp-related paint issues due to their proximity to the Lee Valley — proper wall preparation and moisture-resistant primers are essential.',
  },
  {
    slug: 'wimbledon',
    name: 'Wimbledon',
    postcode: 'SW19, SW20',
    coordinates: { lat: 51.4214, lng: -0.2064 },
    zone: 'south',
    nearby: ['mitcham', 'kingston'],
    borough: 'Merton',
    landmarks: ['Wimbledon Common', 'Wimbledon Village', 'Wimbledon Theatre'],
    housingTypes: ['Victorian villas', 'Edwardian family homes', 'period conversions', 'modern townhouses'],
    localChallenge: 'Wimbledon Village properties command premium values and homeowners expect a meticulous, magazine-quality finish with premium paints like Farrow & Ball and Little Greene.',
  },
  {
    slug: 'mitcham',
    name: 'Mitcham',
    postcode: 'CR4',
    coordinates: { lat: 51.4009, lng: -0.1713 },
    zone: 'south',
    nearby: ['streatham', 'wallington'],
    borough: 'Merton',
    landmarks: ['Mitcham Common', 'Mitcham Cricket Green'],
    housingTypes: ['Victorian terraces', 'post-war estates', 'ex-council properties', '1930s semis'],
    localChallenge: 'Many Mitcham properties have textured Artex ceilings and dated wallpaper that require careful removal and thorough surface preparation before decorating.',
  },
  {
    slug: 'streatham',
    name: 'Streatham',
    postcode: 'SW16',
    coordinates: { lat: 51.4279, lng: -0.1235 },
    zone: 'south',
    nearby: ['clapham', 'mitcham'],
    borough: 'Lambeth',
    landmarks: ['Streatham Common', 'Streatham Hill Theatre', 'The Rookery'],
    housingTypes: ['Victorian conversions', 'Edwardian terraces', 'period maisonettes', 'new-build flats'],
    localChallenge: 'Streatham Victorian conversions often have high ceilings and period features that need sensitive restoration alongside modern decorating techniques.',
  },
  {
    slug: 'clapham',
    name: 'Clapham',
    postcode: 'SW4, SW11',
    coordinates: { lat: 51.4627, lng: -0.1386 },
    zone: 'south',
    nearby: ['streatham', 'wimbledon'],
    borough: 'Lambeth',
    landmarks: ['Clapham Common', 'Clapham Junction', 'Northcote Road'],
    housingTypes: ['Victorian terraces', 'Georgian townhouses', 'period conversions', 'modern apartments'],
    localChallenge: 'Clapham homeowners often invest in premium interior finishes and expect consultant-level colour advice alongside flawless application — attention to detail is everything here.',
  },
  {
    slug: 'kingston',
    name: 'Kingston upon Thames',
    postcode: 'KT1, KT2',
    coordinates: { lat: 51.4123, lng: -0.3007 },
    zone: 'south',
    nearby: ['wimbledon', 'purley'],
    borough: 'Kingston upon Thames',
    landmarks: ['Kingston Market Place', 'Hampton Court Palace', 'Bushy Park'],
    housingTypes: ['Victorian villas', 'Edwardian properties', 'riverside homes', 'modern developments'],
    localChallenge: 'Kingston properties near the Thames require exterior paint systems that can withstand higher moisture levels — breathable masonry paint and thorough preparation are essential.',
  },
  {
    slug: 'purley',
    name: 'Purley',
    postcode: 'CR8',
    coordinates: { lat: 51.3374, lng: -0.1149 },
    zone: 'south',
    nearby: ['wallington', 'mitcham'],
    borough: 'Croydon',
    landmarks: ['Purley Way', 'Riddlesdown Common', 'Kenley Aerodrome'],
    housingTypes: ['1930s detached homes', 'bungalows', 'family houses', 'period properties'],
    localChallenge: 'Purley has many large detached properties with extensive exterior surfaces — efficient scheduling and weather-resistant paint systems ensure these projects are completed on time.',
  },
  {
    slug: 'wallington',
    name: 'Wallington',
    postcode: 'SM6',
    coordinates: { lat: 51.3607, lng: -0.1520 },
    zone: 'south',
    nearby: ['purley', 'mitcham'],
    borough: 'Sutton',
    landmarks: ['Beddington Park', 'Wallington High Street'],
    housingTypes: ['1930s semis', 'Victorian terraces', 'post-war properties', 'new-build estates'],
    localChallenge: 'Wallington properties often have pebbledash and rendered exteriors that need specialist preparation and weather-resistant finishes to maintain their appearance.',
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getNearbyLocations(location: Location): Location[] {
  return location.nearby
    .map((slug) => getLocationBySlug(slug))
    .filter((l): l is Location => l !== undefined);
}
