import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen max-w-full overflow-x-hidden bg-[#E5FCD4] text-black">
      {/* Top Border Accent */}
      <div className="h-1 w-full bg-[#1B4332]" />

      {/* Navbar */}
      <header className="bg-white shadow-sm w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 w-full">
          <a href="/" className="text-2xl font-bold tracking-tight text-black hover:text-gray-700 transition">
            Greenprint
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="/dashboard" className="text-black transition hover:text-gray-600">
              Dashboard
            </a>
            <a href="/transactions" className="text-black transition hover:text-gray-600">
              Transactions
            </a>
            <a href="/insights" className="text-black transition hover:text-gray-600">
              Insights
            </a>
            <a href="/actions" className="text-black transition hover:text-gray-600">
              Actions
            </a>
            <a href="/settings" className="text-black transition hover:text-gray-600">
              Settings
            </a>
            <a href="/login" className="text-black transition hover:text-gray-600">
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 py-12 w-full">
        <h1 className="text-4xl font-bold text-[#1B4332] mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: October 2025</p>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-800">
          <p className="text-lg leading-relaxed">
            GreenPrint ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your information when you use our website, mobile application, and related services (collectively, the "Service").
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Information We Collect</h2>
            <p className="mb-4">We collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Account Information:</strong> Name, email address, and login credentials when you create an account.
              </li>
              <li>
                <strong>Usage Data:</strong> Interactions with the site, such as page visits, time on page, and clicked elements, to help us improve our experience.
              </li>
              <li>
                <strong>Financial Data (Simulated or Linked):</strong> If you connect your Capital One or other supported account, we may access transaction data for the sole purpose of calculating environmental impact metrics.
              </li>
              <li>
                <strong>Device and Technical Data:</strong> Browser type, operating system, IP address, and cookies for performance and security.
              </li>
            </ul>
            <p className="mt-4 text-sm italic text-gray-700">
              We do not collect sensitive financial details like card numbers, banking passwords, or personal identification numbers.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use collected data to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and improve the Service.</li>
              <li>Estimate and visualize your carbon footprint.</li>
              <li>Deliver personalized insights and sustainability recommendations.</li>
              <li>Maintain the security and integrity of our systems.</li>
              <li>Communicate updates, product changes, or relevant sustainability tips (you can opt out at any time).</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">How We Share Information</h2>
            <p className="mb-4">
              We <strong>do not sell</strong> your personal data. We only share limited data with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Service Providers:</strong> For hosting, analytics, and carbon footprint calculations (e.g., AWS, Climatiq API).
              </li>
              <li>
                <strong>Legal Compliance:</strong> If required by law or to protect our rights.
              </li>
              <li>
                <strong>Aggregated Insights:</strong> De-identified statistics (e.g., average user footprint) may be shared for research or reporting purposes.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Data Security</h2>
            <p>
              We use encryption, secure connections (HTTPS), and cloud infrastructure with sustainability-focused providers to safeguard your data.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Your Choices</h2>
            <p className="mb-4">You can:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Update or delete your account at any time.</li>
              <li>Request data export or erasure by contacting us at <a href="mailto:privacy@carbonledger.com" className="text-[#1B4332] underline hover:text-gray-700">privacy@carbonledger.com</a>.</li>
              <li>Opt out of non-essential communications.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Cookies</h2>
            <p>
              We use minimal cookies for analytics and user authentication. You can disable cookies in your browser, though some features may not work as intended.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Children's Privacy</h2>
            <p>
              Our Service is not directed to children under 13, and we do not knowingly collect their personal information.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Changes to This Policy</h2>
            <p>
              We may update this policy to reflect changes in technology or legal requirements. Updates will be posted with a revised "last updated" date.
            </p>
          </section>

          <section className="mt-8 p-6 bg-white/70 rounded-lg border border-[#E1E6E2]">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Contact</h2>
            <p>
              If you have questions about this policy or your data, contact us at{' '}
              <a href="mailto:privacy@carbonledger.com" className="text-[#1B4332] underline hover:text-gray-700">
                privacy@carbonledger.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block rounded-full bg-black px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:opacity-90"
          >
            Back to Home
          </a>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#1B4332] py-8 text-white w-full mt-12">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm w-full">
          <p>&copy; 2025 Greenprint. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

