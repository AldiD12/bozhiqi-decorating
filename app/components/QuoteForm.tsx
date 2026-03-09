'use client';

import { useState } from 'react';

const services = [
  'Interior Painting',
  'Exterior Painting',
  'Wallpaper Installation',
  'Plastering',
  'Woodwork Painting',
  'Other',
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    postcode: '',
    details: '',
    name: '',
    phone: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(26,26,46,0.06)]">
        <div className="w-16 h-16 bg-[#166534] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-[#1a1a2e] mb-2">Thank you, {formData.name}!</h3>
        <p className="text-[#6b7280]">We&apos;ll be in touch within 45 minutes. If you need to speak to us immediately, call <a href="tel:07828288449" className="text-[#b8860b] font-semibold">07828 288 449</a>.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(26,26,46,0.06)] overflow-hidden">
      {/* Progress bar */}
      <div className="bg-[#faf8f5] px-6 py-4 border-b border-[#e8e4df]">
        <div className="flex items-center gap-2 mb-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                s <= step ? 'bg-[#b8860b]' : 'bg-[#e8e4df]'
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-[#6b7280] font-semibold">Step {step} of 4</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {/* Step 1: Service */}
        {step === 1 && (
          <div>
            <h3 className="font-serif text-xl text-[#1a1a2e] mb-4">What do you need?</h3>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, service });
                    handleNext();
                  }}
                  className={`text-left px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                    formData.service === service
                      ? 'border-[#b8860b] bg-[#b8860b]/5 text-[#b8860b]'
                      : 'border-[#e8e4df] text-[#3d3d3d] hover:border-[#b8860b]'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Postcode */}
        {step === 2 && (
          <div>
            <h3 className="font-serif text-xl text-[#1a1a2e] mb-4">Your postcode?</h3>
            <input
              type="text"
              value={formData.postcode}
              onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
              placeholder="e.g. N14 5AB"
              className="w-full border-2 border-[#e8e4df] rounded-xl px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#b8860b] transition-colors"
              required
            />
            <div className="flex gap-3 mt-4">
              <button type="button" onClick={handleBack} className="flex-1 border-2 border-[#e8e4df] text-[#6b7280] py-3 rounded-xl font-semibold">Back</button>
              <button type="button" onClick={handleNext} disabled={!formData.postcode} className="flex-1 bg-[#b8860b] text-white py-3 rounded-xl font-semibold disabled:opacity-50">Next</button>
            </div>
          </div>
        )}

        {/* Step 3: Details */}
        {step === 3 && (
          <div>
            <h3 className="font-serif text-xl text-[#1a1a2e] mb-4">Tell us about your project</h3>
            <textarea
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="e.g. 3-bed house, all rooms need painting, currently magnolia throughout..."
              rows={4}
              className="w-full border-2 border-[#e8e4df] rounded-xl px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#b8860b] transition-colors resize-none"
            />
            <div className="flex gap-3 mt-4">
              <button type="button" onClick={handleBack} className="flex-1 border-2 border-[#e8e4df] text-[#6b7280] py-3 rounded-xl font-semibold">Back</button>
              <button type="button" onClick={handleNext} className="flex-1 bg-[#b8860b] text-white py-3 rounded-xl font-semibold">Next</button>
            </div>
          </div>
        )}

        {/* Step 4: Contact */}
        {step === 4 && (
          <div>
            <h3 className="font-serif text-xl text-[#1a1a2e] mb-4">Your contact details</h3>
            <div className="space-y-3">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full name"
                className="w-full border-2 border-[#e8e4df] rounded-xl px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#b8860b] transition-colors"
                required
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone number"
                className="w-full border-2 border-[#e8e4df] rounded-xl px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#b8860b] transition-colors"
                required
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email address"
                className="w-full border-2 border-[#e8e4df] rounded-xl px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#b8860b] transition-colors"
                required
              />
            </div>
            <div className="flex gap-3 mt-4">
              <button type="button" onClick={handleBack} className="flex-1 border-2 border-[#e8e4df] text-[#6b7280] py-3 rounded-xl font-semibold">Back</button>
              <button type="submit" className="flex-2 bg-[#b8860b] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#9a7009] transition-colors">
                Send My Request
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
