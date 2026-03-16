'use client';

import { useState } from 'react';
import { events } from '@/app/lib/track';

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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed');
      events.quoteFormComplete(formData.service);
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please call us on 07828 288 449.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(26,26,46,0.06)]" role="status" aria-live="polite">
        <div className="w-16 h-16 bg-[#166534] rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-[#1a1a2e] mb-2">Thank you, {formData.name}!</h3>
        <p className="text-[#6b7280]">
          We&apos;ll be in touch within 45 minutes. If you need to speak to us immediately, call{' '}
          <a href="tel:07828288449" className="text-[#b8860b] font-semibold">07828 288 449</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(26,26,46,0.06)] overflow-hidden">
      {/* Progress bar */}
      <div className="bg-[#faf8f5] px-6 py-4 border-b border-[#e8e4df]" aria-hidden="true">
        <div className="flex items-center gap-2 mb-2" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={4} aria-label={`Step ${step} of 4`}>
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

      <form onSubmit={handleSubmit} className="p-6" noValidate>
        {/* Step 1: Service */}
        {step === 1 && (
          <fieldset>
            <legend className="font-serif text-xl text-[#1a1a2e] mb-4">What do you need?</legend>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, service });
                    events.quoteFormStart();
                    handleNext();
                  }}
                  aria-pressed={formData.service === service}
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
          </fieldset>
        )}

        {/* Step 2: Postcode */}
        {step === 2 && (
          <div>
            <h3 className="font-serif text-xl text-[#1a1a2e] mb-4" id="postcode-label">Your postcode?</h3>
            <input
              type="text"
              id="postcode"
              value={formData.postcode}
              onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
              placeholder="e.g. N14 5AB"
              aria-labelledby="postcode-label"
              aria-required="true"
              autoComplete="postal-code"
              className="w-full border-2 border-[#e8e4df] rounded-xl px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#b8860b] transition-colors"
              required
            />
            <div className="flex gap-3 mt-4">
              <button type="button" onClick={handleBack} aria-label="Go back to step 1" className="flex-1 border-2 border-[#e8e4df] text-[#6b7280] py-3 rounded-xl font-semibold hover:border-[#3d3d3d] transition-colors">Back</button>
              <button type="button" onClick={handleNext} disabled={!formData.postcode} aria-label="Continue to step 3" className="flex-1 bg-[#b8860b] text-white py-3 rounded-xl font-semibold disabled:opacity-50 hover:bg-[#9a7009] transition-colors">Next</button>
            </div>
          </div>
        )}

        {/* Step 3: Details */}
        {step === 3 && (
          <div>
            <h3 className="font-serif text-xl text-[#1a1a2e] mb-4" id="details-label">Tell us about your project</h3>
            <textarea
              id="details"
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="e.g. 3-bed house, all rooms need painting, currently magnolia throughout..."
              rows={4}
              aria-labelledby="details-label"
              className="w-full border-2 border-[#e8e4df] rounded-xl px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#b8860b] transition-colors resize-none"
            />
            <div className="flex gap-3 mt-4">
              <button type="button" onClick={handleBack} aria-label="Go back to step 2" className="flex-1 border-2 border-[#e8e4df] text-[#6b7280] py-3 rounded-xl font-semibold hover:border-[#3d3d3d] transition-colors">Back</button>
              <button type="button" onClick={handleNext} aria-label="Continue to step 4" className="flex-1 bg-[#b8860b] text-white py-3 rounded-xl font-semibold hover:bg-[#9a7009] transition-colors">Next</button>
            </div>
          </div>
        )}

        {/* Step 4: Contact */}
        {step === 4 && (
          <div>
            <h3 className="font-serif text-xl text-[#1a1a2e] mb-4">Your contact details</h3>
            <div className="space-y-3">
              <label className="block">
                <span className="sr-only">Full name</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full name"
                  aria-label="Full name"
                  aria-required="true"
                  autoComplete="name"
                  className="w-full border-2 border-[#e8e4df] rounded-xl px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#b8860b] transition-colors"
                  required
                />
              </label>
              <label className="block">
                <span className="sr-only">Phone number</span>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Phone number"
                  aria-label="Phone number"
                  aria-required="true"
                  autoComplete="tel"
                  className="w-full border-2 border-[#e8e4df] rounded-xl px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#b8860b] transition-colors"
                  required
                />
              </label>
              <label className="block">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email address"
                  aria-label="Email address"
                  aria-required="true"
                  autoComplete="email"
                  className="w-full border-2 border-[#e8e4df] rounded-xl px-4 py-3 text-[#3d3d3d] focus:outline-none focus:border-[#b8860b] transition-colors"
                  required
                />
              </label>
            </div>
            {submitError && (
              <p className="text-red-600 text-sm mt-3">{submitError}</p>
            )}
            <div className="flex gap-3 mt-4">
              <button type="button" onClick={handleBack} aria-label="Go back to step 3" className="flex-1 border-2 border-[#e8e4df] text-[#6b7280] py-3 rounded-xl font-semibold hover:border-[#3d3d3d] transition-colors">Back</button>
              <button type="submit" disabled={submitting} className="flex-1 bg-[#b8860b] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#9a7009] transition-colors disabled:opacity-60">
                {submitting ? 'Sending…' : 'Send My Request'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
