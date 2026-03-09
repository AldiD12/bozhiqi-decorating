import Link from 'next/link';
import { Location } from '@/app/data/locations';

interface NearbyLocationsProps {
  locations: Location[];
}

const anchorTemplates = [
  (name: string) => `Painters & Decorators in ${name}`,
  (name: string) => `${name} Decorating Services`,
  (name: string) => `Our team near ${name}`,
  (name: string) => `Recent work in ${name}`,
  (name: string) => `Serving ${name} and surrounding areas`,
];

function getAnchorText(location: Location, index: number): string {
  const templateIndex = index % anchorTemplates.length;
  return anchorTemplates[templateIndex](location.name);
}

export default function NearbyLocations({ locations }: NearbyLocationsProps) {
  if (locations.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {locations.map((location, index) => (
        <Link
          key={location.slug}
          href={`/locations/${location.slug}`}
          className="inline-block border border-[#e8e4df] text-[#3d3d3d] hover:border-[#b8860b] hover:text-[#b8860b] px-4 py-2 rounded-lg text-sm font-semibold transition-all"
        >
          {getAnchorText(location, index)}
        </Link>
      ))}
    </div>
  );
}
