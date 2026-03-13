'use client';

import Link from 'next/link';
import { events } from '@/app/lib/track';
import { reviews } from '@/app/data/reviews';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-[#faf8f5]" aria-label="Site footer">
      <div className="max-w-content mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-serif text-2xl text-[#faf8f5] mb-2">Bozhiqi</div>
            <div className="text-sm text-[#6b7280] mb-4">Painting & Decorating</div>
            <p className="text-sm text-[#e8e4df] leading-relaxed">
              {reviews.yearsExperience} years of meticulous painting & decorating across North & South London. Fully insured. Checkatrade verified.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services links">
            <h3 className="font-semibold text-[#b8860b] mb-4 text-sm uppercase tracking-wider font-sans">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/interior-painting" className="text-[#e8e4df] hover:text-[#b8860b] transition-colors">Interior Painting</Link></li>
              <li><Link href="/services/exterior-painting" className="text-[#e8e4df] hover:text-[#b8860b] transition-colors">Exterior Painting</Link></li>
              <li><Link href="/services/wallpaper-installation" className="text-[#e8e4df] hover:text-[#b8860b] transition-colors">Wallpaper Installation</Link></li>
              <li><Link href="/services/plastering" className="text-[#e8e4df] hover:text-[#b8860b] transition-colors">Plastering</Link></li>
              <li><Link href="/services/woodwork-painting" className="text-[#e8e4df] hover:text-[#b8860b] transition-colors">Woodwork Painting</Link></li>
              <li className="pt-2 border-t border-[#2d2d4e] mt-2"><Link href="/reviews" className="text-[#b8860b] hover:underline text-xs">Read all reviews →</Link></li>
            </ul>
          </nav>

          {/* Areas */}
          <nav aria-label="Location links">
            <h3 className="font-semibold text-[#b8860b] mb-4 text-sm uppercase tracking-wider font-sans">Areas We Serve</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/locations/southgate" className="text-[#e8e4df] hover:text-[#b8860b] transition-colors">Southgate</Link></li>
              <li><Link href="/locations/finchley" className="text-[#e8e4df] hover:text-[#b8860b] transition-colors">Finchley</Link></li>
              <li><Link href="/locations/enfield" className="text-[#e8e4df] hover:text-[#b8860b] transition-colors">Enfield</Link></li>
              <li><Link href="/locations/wimbledon" className="text-[#e8e4df] hover:text-[#b8860b] transition-colors">Wimbledon</Link></li>
              <li><Link href="/locations/clapham" className="text-[#e8e4df] hover:text-[#b8860b] transition-colors">Clapham</Link></li>
              <li><Link href="/locations" className="text-[#b8860b] hover:underline text-xs">View all areas →</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#b8860b] mb-4 text-sm uppercase tracking-wider font-sans">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:07828288449"
                  onClick={events.callClick}
                  aria-label="Call us on 07828 288 449"
                  className="text-[#e8e4df] hover:text-[#b8860b] transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  07828 288 449
                </a>
              </li>
              <li>
                <a href="mailto:jetmir@bozhiqidecorating.co.uk" className="text-[#e8e4df] hover:text-[#b8860b] transition-colors flex items-center gap-2 break-all">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  jetmir@bozhiqidecorating.co.uk
                </a>
              </li>
              <li className="text-[#e8e4df]">Based in Southgate, North London</li>
            </ul>

            <div className="mt-6">
              <a
                href={reviews.checkatrade.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={events.checkatradeClick}
                aria-label="View our Checkatrade profile (opens in new tab)"
                className="inline-block text-xs border border-[#b8860b] text-[#b8860b] px-3 py-1.5 rounded hover:bg-[#b8860b] hover:text-white transition-colors"
              >
                View on Checkatrade ↗
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2d2d4e] mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#6b7280]">
          <p>&copy; 2026 Bozhiqi Painting & Decorating. All rights reserved.</p>
          <nav aria-label="Legal links">
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-[#b8860b] transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-[#b8860b] transition-colors">Get a Quote</Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
