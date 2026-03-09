import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Gallery | Painting & Decorating Projects | Bozhiqi',
  description:
    'Browse our portfolio of painting & decorating projects across London. Interior, exterior, wallpaper, and plastering work by Bozhiqi Painting & Decorating.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/gallery',
  },
  openGraph: {
    title: 'Gallery | Painting & Decorating Projects | Bozhiqi',
    description: 'Browse our portfolio of painting & decorating projects across London.',
    url: 'https://bozhiqidecorating.co.uk/gallery',
    images: [
      {
        url: 'https://bozhiqidecorating.co.uk/images/exterior-painting-detached-house-north-london.webp',
        width: 1200,
        alt: 'Exterior painting of detached house in North London by Bozhiqi',
      },
    ],
  },
};

const projects = [
  {
    src: '/images/exterior-painting-detached-house-north-london.webp',
    alt: 'Full exterior repaint of large detached house in North London',
    title: 'Detached House Full Exterior',
    location: 'Southgate, N14',
    category: 'Exterior Painting',
  },
  {
    src: '/images/interior-painting-living-room-fireplace-period-cornicing.webp',
    alt: 'Interior painting of period living room with fireplace and herringbone floor',
    title: 'Period Living Room Restoration',
    location: 'Clapham, SW4',
    category: 'Interior Painting',
  },
  {
    src: '/images/exterior-painting-victorian-terraces-white-blue-london.webp',
    alt: 'Two Victorian terraced houses repainted white and blue in London',
    title: 'Victorian Terraces — White & Blue',
    location: 'Clapham, SW4',
    category: 'Exterior Painting',
  },
  {
    src: '/images/interior-painting-panelled-reception-room-herringbone.webp',
    alt: 'Freshly painted reception room with wall panelling and herringbone floor',
    title: 'Panelled Reception Room',
    location: 'Wimbledon, SW19',
    category: 'Interior Painting',
  },
  {
    src: '/images/exterior-painting-terraced-house-yellow-render.webp',
    alt: 'Bold yellow painted Victorian terraced house with dark window frames',
    title: 'Bold Colour Terraced House',
    location: 'Streatham, SW16',
    category: 'Exterior Painting',
  },
  {
    src: '/images/interior-painting-kitchen-navy-shaker-cabinets.webp',
    alt: 'Kitchen with painted navy shaker cabinets and brass handles',
    title: 'Navy Shaker Kitchen',
    location: 'Wimbledon, SW19',
    category: 'Interior Painting',
  },
  {
    src: '/images/plastering-painting-hallway-arched-ceiling.webp',
    alt: 'Plastered and painted hallway with arched vaulted ceiling',
    title: 'Arched Hallway Plaster & Paint',
    location: 'Southgate, N14',
    category: 'Plastering',
  },
  {
    src: '/images/interior-painting-open-plan-dining-room-neutral.webp',
    alt: 'Open-plan dining room with neutral painted walls and ambient lighting',
    title: 'Open-Plan Dining Room',
    location: 'Wimbledon, SW19',
    category: 'Interior Painting',
  },
  {
    src: '/images/exterior-painting-semi-detached-red-white-render.webp',
    alt: 'Semi-detached house repainted in red and white masonry paint',
    title: 'Semi-Detached Masonry Repaint',
    location: 'Southgate, N14',
    category: 'Exterior Painting',
  },
  {
    src: '/images/interior-painting-hallway-stained-glass-woodwork.webp',
    alt: 'Period hallway with freshly painted white walls and black woodwork, stained glass door',
    title: 'Period Hallway & Woodwork',
    location: 'Kingston, KT1',
    category: 'Interior Painting',
  },
  {
    src: '/images/interior-painting-entrance-hall-staircase-neutral.webp',
    alt: 'Entrance hall with painted staircase and neutral walls',
    title: 'Entrance Hall & Staircase',
    location: 'Kingston, KT1',
    category: 'Interior Painting',
  },
  {
    src: '/images/exterior-painting-scaffolding-bozhiqi-worker.webp',
    alt: 'Bozhiqi decorator on scaffolding painting Victorian terraced house exterior',
    title: 'Victorian Terrace Exterior Repaint',
    location: 'Clapham, SW4',
    category: 'Exterior Painting',
  },
  {
    src: '/images/interior-painting-bathroom-navy-panelling.webp',
    alt: 'Bathroom with painted navy lower panelling and light grey walls',
    title: 'Bathroom with Navy Panelling',
    location: 'Finchley, N12',
    category: 'Interior Painting',
  },
  {
    src: '/images/exterior-painting-commercial-shopfront-green-london.webp',
    alt: 'Commercial shopfront painted in deep green with ornate period details',
    title: 'Commercial Shopfront Repaint',
    location: 'Streatham, SW16',
    category: 'Exterior Painting',
  },
  {
    src: '/images/interior-painting-staircase-landing-neutral-walls.webp',
    alt: 'Staircase landing with freshly painted neutral walls and white woodwork',
    title: 'Staircase Landing',
    location: 'Enfield, EN1',
    category: 'Interior Painting',
  },
  {
    src: '/images/interior-painting-kitchen-matte-black-cabinets.webp',
    alt: 'Modern kitchen with matte black painted cabinets and under-cabinet lighting',
    title: 'Matte Black Kitchen Cabinets',
    location: 'Streatham, SW16',
    category: 'Interior Painting',
  },
  {
    src: '/images/exterior-painting-victorian-terraced-house-london.webp',
    alt: 'Victorian terraced house with freshly painted white render and period stonework',
    title: 'Victorian Terrace Render & Stonework',
    location: 'Finchley, N12',
    category: 'Exterior Painting',
  },
  {
    src: '/images/interior-painting-kitchen-sage-green-cabinets.webp',
    alt: 'Kitchen with painted sage green shaker cabinets and white subway tile',
    title: 'Sage Green Kitchen Cabinets',
    location: 'Finchley, N12',
    category: 'Interior Painting',
  },
  {
    src: '/images/plastering-bathroom-venetian-plaster-warm-finish.webp',
    alt: 'Bathroom with warm venetian plaster finish and bespoke vanity unit',
    title: 'Venetian Plaster Bathroom',
    location: 'Wimbledon, SW19',
    category: 'Plastering',
  },
  {
    src: '/images/interior-painting-commercial-space-exposed-beams.webp',
    alt: 'Commercial office interior with white painted walls and black exposed beams',
    title: 'Commercial Office Interior',
    location: 'Enfield, EN1',
    category: 'Interior Painting',
  },
  {
    src: '/images/interior-painting-blue-feature-wall-living-room.webp',
    alt: 'Living room with bold blue Farrow and Ball feature wall',
    title: 'Farrow & Ball Feature Wall',
    location: 'Wimbledon, SW19',
    category: 'Interior Painting',
  },
  {
    src: '/images/interior-painting-skirting-boards-bozhiqi-decorator.webp',
    alt: 'Bozhiqi decorator carefully painting skirting boards with dust sheets down',
    title: 'Skirting Boards & Coving',
    location: 'Southgate, N14',
    category: 'Woodwork Painting',
  },
  {
    src: '/images/exterior-painting-semi-detached-conservatory-london.webp',
    alt: 'Exterior painting of semi-detached house with conservatory in London',
    title: 'Semi-Detached with Conservatory',
    location: 'Finchley, N3',
    category: 'Exterior Painting',
  },
  {
    src: '/images/interior-painting-hallway-staircase-white-walls.webp',
    alt: 'Hallway and staircase with freshly painted white walls',
    title: 'Hallway & Staircase Repaint',
    location: 'Enfield, EN1',
    category: 'Interior Painting',
  },
];

const categoryColours: Record<string, string> = {
  'Interior Painting': 'text-[#1a1a2e] bg-[#1a1a2e]/[0.08] border-[#1a1a2e]/[0.15]',
  'Exterior Painting': 'text-[#b8860b] bg-[#b8860b]/10 border-[#b8860b]/25',
  'Plastering': 'text-[#166534] bg-[#166534]/[0.08] border-[#166534]/20',
  'Woodwork Painting': 'text-[#6b3a2a] bg-[#6b3a2a]/[0.08] border-[#6b3a2a]/20',
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-12 md:py-16">
        <div className="max-w-content mx-auto px-4">
          <Breadcrumb items={[{ name: 'Gallery', href: '/gallery' }]} />
          <h1 className="font-serif text-white mt-4">Our Work</h1>
          <p className="text-[#e8e4df] text-lg mt-4 max-w-2xl">
            A selection of recent painting &amp; decorating projects across North and South London.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#faf8f5] section-py">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.src}
                className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(26,26,46,0.06)] hover:shadow-[0_12px_32px_rgba(26,26,46,0.12)] hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span
                    className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-2 ${categoryColours[project.category] ?? 'text-[#6b7280] bg-[#6b7280]/[0.08] border-[#6b7280]/20'}`}
                  >
                    {project.category}
                  </span>
                  <h3 className="font-serif text-[#1a1a2e] text-lg mb-1 leading-snug">{project.title}</h3>
                  <p className="text-[#6b7280] text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-white rounded-xl p-8 border border-[#e8e4df]">
            <p className="text-[#3d3d3d] mb-4 leading-relaxed">
              Ready to transform your property? Get in touch for a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.checkatrade.com/trades/bozhiqi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#b8860b] text-[#b8860b] font-semibold px-6 py-3 rounded-lg hover:bg-[#b8860b] hover:text-white transition-all"
              >
                View Checkatrade Profile
              </a>
              <Link
                href="/contact"
                className="inline-block bg-[#1a1a2e] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2d2d4e] transition-all"
              >
                Request a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
