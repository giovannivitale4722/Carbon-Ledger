import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen max-w-full overflow-x-hidden bg-[#E5FCD4] text-black">
      {/* Top Border Accent */}
      <div className="h-1 w-full bg-[#1B4332]" />

      {/* Navbar */}
      <header className="bg-white shadow-sm w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 w-full">
          <div className="text-2xl font-bold tracking-tight text-black">Greenprint</div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="/dashboard-demo" className="text-black transition hover:text-gray-600">
              Dashboard
            </a>
            <a href="/transactions-demo" className="text-black transition hover:text-gray-600">
              Transactions
            </a>
            <a href="/insights-demo" className="text-black transition hover:text-gray-600">
              Insights
            </a>
            <a href="/actions-demo" className="text-black transition hover:text-gray-600">
              Actions
            </a>
            <a href="/settings-demo" className="text-black transition hover:text-gray-600">
              Settings
            </a>
            <a href="/login" className="text-black transition hover:text-gray-600">
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-10 text-center md:pt-16 w-full">
        <h1 className="mx-auto max-w-3xl text-5xl font-extrabold leading-tight text-black md:text-6xl">
          Turn your spending into climate action
        </h1>
        <p className="mx-auto max-w-2xl mt-4 text-lg text-gray-600 md:text-xl">
          Eco-conscious finance at your fingertips
        </p>
        <div className="mt-10 flex items-center justify-center">
          <a
            href="/login"
            className="rounded-full bg-black px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:opacity-90"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-3 lg:grid-cols-3 w-full">
        <div className="rounded-xl bg-white/70 p-6 shadow-sm ring-1 ring-[#E1E6E2] backdrop-blur-sm transition hover:shadow-md">
          <div className="mb-4 flex items-center justify-center">
            <img
              src="/images/p5.png"
              alt="Hands Around the Globe"
              className="h-[60px] w-[60px] object-contain"
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            GreenPrint transforms your everyday transactions into measurable climate impact, helping you see how your spending shapes the world.
          </p>
        </div>

        <div className="rounded-xl bg-white/70 p-6 shadow-sm ring-1 ring-[#E1E6E2] backdrop-blur-sm transition hover:shadow-md">
          <div className="mb-4 flex items-center justify-center">
            <img
              src="/images/p6.png"
              alt="Cloud, Gear, and Leaves"
              className="h-[60px] w-[60px] object-contain"
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            Our AWS-powered backend and open-data integrations make carbon tracking efficient, transparent, and environmentally responsible.
          </p>
        </div>

        <div className="rounded-xl bg-white/70 p-6 shadow-sm ring-1 ring-[#E1E6E2] backdrop-blur-sm transition hover:shadow-md">
          <div className="mb-4 flex items-center justify-center">
            <img
              src="/images/p4.png"
              alt="Hands Holding a Sprout"
              className="h-[60px] w-[60px] object-contain"
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            Get personalized recommendations that turn small lifestyle choices into lasting sustainability wins — one purchase at a time.
          </p>
        </div>

        <div className="rounded-xl bg-white/70 p-6 shadow-sm ring-1 ring-[#E1E6E2] backdrop-blur-sm transition hover:shadow-md">
          <div className="mb-4 flex items-center justify-center">
            <img
              src="/images/p3.png"
              alt="Globe with Magnifying Glass and Chart"
              className="h-[60px] w-[60px] object-contain"
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            Your finances, reimagined as a carbon dashboard — visualize where your emissions come from and how to reduce them over time.
          </p>
        </div>

        <div className="rounded-xl bg-white/70 p-6 shadow-sm ring-1 ring-[#E1E6E2] backdrop-blur-sm transition hover:shadow-md">
          <div className="mb-4 flex items-center justify-center">
            <img
              src="/images/p2.png"
              alt="Credit Card, Leaf, and Arrows"
              className="h-[60px] w-[60px] object-contain"
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            GreenPrint bridges fintech and the environment — connecting your wallet to a cleaner future through transparent, data-driven insights.
          </p>
        </div>

        <div className="rounded-xl bg-white/70 p-6 shadow-sm ring-1 ring-[#E1E6E2] backdrop-blur-sm transition hover:shadow-md">
          <div className="mb-4 flex items-center justify-center">
            <img
              src="/images/p1.png"
              alt="Smart, Data-Driven Sustainability"
              className="h-[60px] w-[60px] object-contain"
            />
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            GreenPrint uses data analytics and smart algorithms to translate your financial activity into environmental insight—helping you understand, predict, and reduce your carbon footprint with precision.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B4332] py-8 text-white w-full">
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