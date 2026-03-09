import type { Metadata } from 'next';
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
  },
};

const placeholderProjects = [
  { title: 'Victorian Terrace Interior', location: 'Finchley, N3', category: 'Interior Painting' },
  { title: 'Feature Wall — Farrow & Ball', location: 'Wimbledon, SW19', category: 'Interior Painting' },
  { title: 'Full Exterior Repaint', location: 'Southgate, N14', category: 'Exterior Painting' },
  { title: 'Wallpaper Installation', location: 'Clapham, SW4', category: 'Wallpaper' },
  { title: 'Skim & Redecorate', location: 'Enfield, EN1', category: 'Plastering' },
  { title: 'Skirting & Door Frames', location: 'Streatham, SW16', category: 'Woodwork' },
  { title: 'Period Property Restoration', location: 'Kingston, KT1', category: 'Interior Painting' },
  { title: 'Luxury Bedroom Redecoration', location: 'Wimbledon Village, SW19', category: 'Interior Painting' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-12 md:py-16">
        <div className="max-w-content mx-auto px-4">
          <Breadcrumb items={[{ name: 'Gallery', href: '/gallery' }]} />
          <h1 className="font-serif text-white mt-4">Our Work</h1>
          <p className="text-[#e8e4df] text-lg mt-4 max-w-2xl">
            A selection of recent painting & decorating projects across North and South London.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#faf8f5] py-16 md:py-20">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderProjects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(26,26,46,0.06)] group"
              >
                {/* Photo placeholder */}
                <div className="aspect-[4/3] bg-[#2d2d4e] flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-6">
                    <div className="text-[#6b7280] text-sm font-semibold uppercase tracking-wider mb-1">
                      {project.category}
                    </div>
                    <p className="text-[#e8e4df] text-xs">Photo coming soon</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#b8860b] font-semibold uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-[#1a1a2e] text-lg mb-1">{project.title}</h3>
                  <p className="text-[#6b7280] text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 bg-white rounded-xl p-8 border border-[#e8e4df]">
            <p className="text-[#3d3d3d] mb-4 leading-relaxed">
              We are continuously updating our gallery with new project photography. To view our full portfolio,
              please visit our Checkatrade profile or get in touch directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.checkatrade.com/trades/bozhiqi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#b8860b] text-[#b8860b] font-semibold px-6 py-3 rounded-lg hover:bg-[#b8860b] hover:text-white transition-all"
              >
                View Checkatrade Portfolio
              </a>
              <Link
                href="/contact"
                className="inline-block bg-[#1a1a2e] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2d2d4e] transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
