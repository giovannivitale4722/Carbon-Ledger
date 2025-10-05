import React from 'react';

export default function TermsOfServicePage() {
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
        <h1 className="text-4xl font-bold text-[#1B4332] mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: October 2025</p>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-800">
          <p className="text-lg leading-relaxed">
            Welcome to GreenPrint. By accessing or using our website and services ("Service"), you agree to these Terms of Service ("Terms"). Please read them carefully.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Acceptance of Terms</h2>
            <p>
              By using the Service, you confirm that you are at least 13 years old and legally capable of entering into this agreement.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Description of Service</h2>
            <p>
              GreenPrint provides analytics and educational tools to help users estimate the environmental impact of their spending patterns. The Service is intended for informational purposes only and does not constitute financial or environmental advice.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Service lawfully and ethically.</li>
              <li>Not interfere with or disrupt our systems or other users.</li>
              <li>Not reverse-engineer or resell the Service.</li>
              <li>Provide accurate and lawful information when creating an account.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Account and Access</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately if you suspect unauthorized access.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Intellectual Property</h2>
            <p>
              All trademarks, logos, software, and content on this site are the property of GreenPrint or its licensors. You may not copy, modify, or distribute any materials without permission.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Third-Party Services</h2>
            <p>
              Our Service may integrate with third-party APIs (such as Capital One Nessie or Climatiq). We are not responsible for their data handling or availability. Your use of those integrations is governed by their own terms.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, GreenPrint shall not be liable for any indirect, incidental, or consequential damages arising from your use or inability to use the Service.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Disclaimer of Warranties</h2>
            <p>
              The Service is provided "as is" and "as available." We do not guarantee accuracy, reliability, or uninterrupted access. Environmental metrics are estimates based on third-party data sources.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Termination</h2>
            <p>
              We may suspend or terminate access if you violate these Terms or misuse the Service. You may also delete your account at any time.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Governing Law</h2>
            <p>
              These Terms are governed by the laws of Massachusetts, USA, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mt-8 p-6 bg-white/70 rounded-lg border border-[#E1E6E2]">
            <h2 className="text-2xl font-bold text-[#1B4332] mb-4">Contact</h2>
            <p>
              For questions or disputes related to these Terms, contact us at{' '}
              <a href="mailto:legal@carbonledger.com" className="text-[#1B4332] underline hover:text-gray-700">
                legal@carbonledger.com
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

