'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [status, setStatus] = useState<'pending' | 'accepted' | 'declined' | 'loading'>('loading');

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent');
    if (stored === 'accepted' || stored === 'declined') {
      setStatus(stored);
    } else {
      setStatus('pending');
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setStatus('accepted');
    // Fire consent update to gtag if present
    if (typeof window !== 'undefined' && typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag!('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setStatus('declined');
  };

  if (status !== 'pending') return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:bottom-4 md:left-4 md:right-4 md:max-w-lg"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="bg-[#1a1a2e] text-[#faf8f5] p-5 md:rounded-xl shadow-[0_-4px_24px_rgba(0,0,0,0.2)] md:shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
        <p className="text-sm leading-relaxed mb-4">
          We use cookies to understand how visitors use our site. No advertising or tracking cookies — only
          anonymous analytics to help us improve.{' '}
          <Link href="/privacy-policy" className="text-[#b8860b] hover:underline">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 bg-[#b8860b] text-white text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-[#9a7009] transition-colors"
            aria-label="Accept cookies"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="flex-1 border border-[#6b7280] text-[#e8e4df] text-sm font-semibold py-2.5 px-4 rounded-lg hover:border-[#faf8f5] transition-colors"
            aria-label="Decline non-essential cookies"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
