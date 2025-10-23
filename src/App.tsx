import React, { useState } from 'react';
import { ChevronDown, Play, ArrowRight, Menu, X } from 'lucide-react';
import HowItWorks from './components/HowItWorks';
import LogoMarquee from './components/LogoMarquee';
import LeadForm from './components/LeadForm';
import { scrollToLeadForm } from './utils/scrollTo';

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="shrink-0">
      <div className="rounded-full p-[2.5px] bg-gradient-to-br from-[#FF59D2] via-[#A855F7] to-[#6D28D9] shadow-[0_6px_20px_rgba(108,43,217,0.25)]">
        <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-white/95 ring-1 ring-black/5 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [heroInput, setHeroInput] = useState('');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const input = formData.get('domain') as string;
    setHeroInput(input);

    const isEmail = input.includes('@');

    const url = new URL(window.location.href);
    if (isEmail) {
      url.searchParams.set('email', input);
      url.searchParams.delete('website');
    } else {
      url.searchParams.set('website', input);
      url.searchParams.delete('email');
    }
    window.history.pushState({}, '', url);

    scrollToLeadForm(96);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="https://www.storyclash.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Storyclash-ai-grau.svg"
                  alt="Storyclash.ai"
                  className="h-7 w-auto"
                />
              </a>
              <div className="border-l border-gray-200 h-5 mx-3" aria-hidden="true"></div>
              <img
                src="/assets/Creator Persona alleine.svg"
                alt="Creator Personas"
                className="h-7 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="hidden md:block">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  scrollToLeadForm(96);
                }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md"
              >
                ✨ Analyze My Brand →
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToLeadForm(96);
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold text-center shadow-md"
                >
                  ✨ Analyze My Brand →
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <section id="hero" className="relative isolate bg-gradient-to-b from-white to-[#F8F3FF] pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 md:mb-8">
              <img
                src="/Storyclash_ai_logo_icons copy.svg"
                alt="Storyclash AI Icon"
                className="h-10 w-auto mx-auto"
              />
            </div>

            <h1 className="text-balance font-semibold tracking-tight text-[#0E1621] leading-[1.06] md:leading-[1.08] lg:leading-[1.08] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Skip the <span className="text-pink-500">Search</span> Get the <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">Match</span>
            </h1>

            <p className="mx-auto mt-6 md:mt-8 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-[#233C42]/75">
              Storyclash AI surfaces creators who perfectly match your brand, without any manual research. No filters, no settings: just fool-proof recommendations. Try it free.
            </p>

            <div className="mx-auto mt-8 md:mt-10 lg:mt-12 max-w-2xl">
              <form onSubmit={handleHeroSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-4">
                <input
                  type="text"
                  name="domain"
                  placeholder="Enter your domain…"
                  className="flex-1 h-12 sm:h-14 rounded-2xl border border-black/10 bg-white/90 px-4 text-base md:text-lg placeholder:text-[#233C42]/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                  required
                />
                <button
                  type="submit"
                  className="h-12 sm:h-14 rounded-2xl px-6 md:px-8 text-base md:text-lg font-medium bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-md hover:shadow-lg transition-shadow"
                >
                  ✨ Analyze My Brand →
                </button>
              </form>

              <p className="mt-3 text-center text-sm text-[#233C42]/55">
                🔒 Your data is safe. We'll only use it to set up your trial.
              </p>
            </div>

            <div className="mt-12 md:mt-16 lg:mt-20"></div>
          </div>
        </div>
      </section>

      <div className="py-24">
        <HowItWorks />
      </div>

      <section className="py-16 md:py-24 px-6 bg-[#FAFAFB] relative" style={{ boxShadow: 'inset 0 1px 0 rgba(0,0,0,0.03)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B1C1E] mb-4 leading-tight">
              Automate Creator Discovery and Save 10+ Hours Per Week
            </h2>
            <p className="text-lg text-[#4A4C57] max-w-[700px] mx-auto leading-relaxed">
              Build reusable creator personas for every product, market, and campaign. Our AI matches you with high-performing influencers while you focus on strategy, not spreadsheets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="py-8 md:py-0 md:px-8 lg:px-12">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full p-[2px] bg-gradient-to-br from-[#FF59D2] via-[#A855F7] to-[#6D28D9] shadow-[0_6px_20px_rgba(108,43,217,0.25)] mb-5">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-violet-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M13 4L4 13l5 1 1 5 9-9-6-1 1-5z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-[#233C42] leading-snug">
                  Faster Creator<br />Searches
                </h3>

                <p className="mt-3 text-[#233C42]/80 leading-relaxed max-w-xs">
                  Use rich persona profiles to automate discovery and surface ideal creators in seconds,
                  so your team can focus on strategy instead of spreadsheets.
                </p>
              </div>
            </div>

            <div className="py-8 md:py-0 md:px-8 lg:px-12">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full p-[2px] bg-gradient-to-br from-[#FF59D2] via-[#A855F7] to-[#6D28D9] shadow-[0_6px_20px_rgba(108,43,217,0.25)] mb-5">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-violet-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 17l6-6 4 4 8-8" />
                      <path d="M21 21H3" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-[#233C42] leading-snug">
                  Grow Revenue<br />per Creator
                </h3>

                <p className="mt-3 text-[#233C42]/80 leading-relaxed max-w-xs">
                  Identify high-performing creators based on what actually drives results in your
                  industry. Teams typically see around 20% more revenue per collaboration.
                </p>
              </div>
            </div>

            <div className="py-8 md:py-0 md:px-8 lg:px-12">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full p-[2px] bg-gradient-to-br from-[#FF59D2] via-[#A855F7] to-[#6D28D9] shadow-[0_6px_20px_rgba(108,43,217,0.25)] mb-5">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-violet-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M9 9a3 3 0 116 0v1h1a3 3 0 013 3v1a6 6 0 01-6 6h-2a6 6 0 01-6-6v-1a3 3 0 013-3h1V9z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-[#233C42] leading-snug">
                  AI-Powered Creator<br />Insights
                </h3>

                <p className="mt-3 text-[#233C42]/80 leading-relaxed max-w-xs">
                  Understand why creators match your brand - audience fit, content style, and engagement
                  potential - and act on clear, actionable data without spreadsheets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500 mb-8">
          </p>
          <LeadForm prefillValue={heroInput} />
        </div>
      </section>

      <section aria-label="Trust teaser" className="relative mt-20 md:mt-24">
        <div className="h-8 bg-gradient-to-b from-transparent to-[#FAFAFB]" />

        <div className="mx-auto max-w-4xl rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm px-6 py-10 md:px-10 md:py-12 text-center">
          <h2 className="text-[22px] md:text-[28px] leading-tight font-semibold text-[#233C42]">
            Trusted by 500+ Leading Brands Worldwide
          </h2>
          <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg">
            Storyclash AI powers creator discovery and analytics for global brands -
            helping teams make smarter influencer decisions in seconds.
          </p>
        </div>

        <div className="h-12 md:h-16 bg-gradient-to-b from-[#FAFAFB] to-white" />
      </section>

      <footer className="bg-gray-50 border-t border-gray-100 py-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            Powered by AI • Built by{' '}
            <a
              href="https://storyclash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Storyclash.com
            </a>
          </p>

          <div className="mt-3 text-center text-xs text-gray-500">
            <a
              href="https://www.storyclash.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="mx-2 text-gray-400">|</span>
            <a
              href="https://www.storyclash.com/imprint"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              Imprint
            </a>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-500">
              © 2025 Storyclash GmbH
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
