'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { events } from '@/app/lib/track';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/locations', label: 'Areas' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? 'shadow-[0_2px_12px_rgba(26,26,46,0.08)]' : ''
      }`}
    >
      <div className="max-w-content mx-auto px-4 flex items-center justify-between h-20 md:h-24">
        <Link href="/" className="flex items-center" aria-label="Bozhiqi Painting & Decorating — home">
          <Image
            src="/logo.png"
            alt="Bozhiqi Painting & Decorating"
            width={200}
            height={60}
            className="h-12 w-auto md:h-14 lg:h-16"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#3d3d3d] hover:text-[#b8860b] text-sm font-semibold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:07828288449"
            onClick={events.callClick}
            aria-label="Call us on 07828 288 449"
            className="text-sm font-semibold text-[#3d3d3d] hover:text-[#b8860b] transition-colors"
          >
            07828 288 449
          </a>
          <Link
            href="/contact"
            className="bg-[#b8860b] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#9a7009] transition-all hover:scale-[1.02]"
          >
            Free Quote
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-[#1a1a2e] rounded-lg hover:bg-[#faf8f5] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden bg-white border-t border-[#e8e4df] shadow-lg transition-all duration-200 overflow-hidden ${
          menuOpen ? 'max-h-[500px]' : 'max-h-0 border-t-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#3d3d3d] font-semibold py-3 border-b border-[#e8e4df] hover:text-[#b8860b] transition-colors"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-3">
            <a
              href="tel:07828288449"
              onClick={() => { events.callClick(); setMenuOpen(false); }}
              aria-label="Call us on 07828 288 449"
              className="text-center border-2 border-[#1a1a2e] text-[#1a1a2e] font-semibold py-3 rounded-lg hover:bg-[#1a1a2e] hover:text-white transition-colors"
              tabIndex={menuOpen ? 0 : -1}
            >
              Call 07828 288 449
            </a>
            <Link
              href="/contact"
              className="text-center bg-[#b8860b] text-white font-semibold py-3 rounded-lg hover:bg-[#9a7009] transition-colors"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
