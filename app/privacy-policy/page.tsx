import type { Metadata } from 'next';
import Breadcrumb from '@/app/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bozhiqi Painting & Decorating',
  description: 'Privacy Policy for Bozhiqi Painting & Decorating. How we collect, use, and protect your personal data.',
  alternates: {
    canonical: 'https://bozhiqidecorating.co.uk/privacy-policy',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] text-white py-12">
        <div className="max-w-content mx-auto px-4">
          <Breadcrumb items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />
          <h1 className="font-serif text-white mt-4">Privacy Policy</h1>
          <p className="text-[#e8e4df] mt-2">Last updated: March 2026</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="max-w-3xl mx-auto prose-body space-y-8 text-[#3d3d3d] leading-relaxed">
            <div>
              <h2 className="font-serif text-[#1a1a2e] mb-3">1. Who We Are</h2>
              <p>
                Bozhiqi Painting & Decorating is a painting and decorating business operated by Jetmir Bozhiqi,
                based in Southgate, North London. Our website is bozhiqidecorating.co.uk.
              </p>
              <p className="mt-3">
                Contact: <a href="mailto:jetmir@bozhiqidecorating.co.uk" className="text-[#b8860b] hover:underline">jetmir@bozhiqidecorating.co.uk</a> |{' '}
                <a href="tel:07828288449" className="text-[#b8860b] hover:underline">07828 288 449</a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1a1a2e] mb-3">2. What Data We Collect</h2>
              <p>When you use our quote request form or contact us directly, we may collect:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Your name</li>
                <li>Your phone number and/or email address</li>
                <li>Your postcode</li>
                <li>Details about your decorating project</li>
              </ul>
              <p className="mt-3">
                We do not collect payment information directly — all payments are handled by bank transfer or cash.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1a1a2e] mb-3">3. How We Use Your Data</h2>
              <p>We use the information you provide solely to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to your enquiry</li>
                <li>Prepare and send quotations</li>
                <li>Communicate about your project</li>
                <li>Send occasional follow-up about our services (you can opt out at any time)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[#1a1a2e] mb-3">4. Legal Basis for Processing</h2>
              <p>
                We process your personal data on the basis of your consent (when you submit a form or contact us)
                and our legitimate interests in providing decorating services to clients.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1a1a2e] mb-3">5. Data Sharing</h2>
              <p>
                We do not sell, share, or transfer your personal data to third parties except where required by law.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1a1a2e] mb-3">6. Data Retention</h2>
              <p>
                We retain customer contact information for up to 3 years following completion of a project or last
                contact, after which it is securely deleted.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1a1a2e] mb-3">7. Your Rights (GDPR)</h2>
              <p>Under the UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:jetmir@bozhiqidecorating.co.uk" className="text-[#b8860b] hover:underline">
                  jetmir@bozhiqidecorating.co.uk
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1a1a2e] mb-3">8. Cookies</h2>
              <p>
                This website uses minimal cookies necessary for the website to function. We do not use advertising
                or tracking cookies. If you have JavaScript enabled, our contact form stores your form progress
                in local browser memory only.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1a1a2e] mb-3">9. Third-Party Services</h2>
              <p>
                This website is hosted on Vercel. We use Google Maps for an embedded map on our contact page.
                Google&apos;s privacy policy applies to data processed through their services:
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#b8860b] hover:underline ml-1">
                  policies.google.com/privacy
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1a1a2e] mb-3">10. Contact & Complaints</h2>
              <p>
                If you have any concerns about how we handle your data, please contact us first at{' '}
                <a href="mailto:jetmir@bozhiqidecorating.co.uk" className="text-[#b8860b] hover:underline">
                  jetmir@bozhiqidecorating.co.uk
                </a>
                . You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO)
                at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#b8860b] hover:underline">ico.org.uk</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
