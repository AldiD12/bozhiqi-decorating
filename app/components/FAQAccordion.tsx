'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  includeSchema?: boolean;
}

export default function FAQAccordion({ items, includeSchema = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl border border-[#e8e4df] overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-[#faf8f5] transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-serif text-[#1a1a2e] text-lg">{item.question}</span>
              <svg
                className={`w-5 h-5 flex-shrink-0 text-[#b8860b] transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-[#3d3d3d] leading-relaxed border-t border-[#e8e4df]">
                <p className="pt-4">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
