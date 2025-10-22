import React from "react";
import {
  BoltIcon,
  ArrowTrendingUpIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";

export default function BenefitsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <header className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#233C42]">
          Automate Creator Discovery and Save 10+ Hours Per Week
        </h2>
        <p className="mt-3 text-[#233C42]/80 max-w-3xl mx-auto leading-relaxed">
          Build reusable creator personas for every product, market, and campaign. Our AI
          instantly matches you with high-performing influencers while you focus on
          strategy, not spreadsheets.
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        <div className="md:border-r md:border-[#233C42]/10 pr-0 md:pr-10">
          <div className="mb-6">
            <div className="h-14 w-14 rounded-full bg-gradient-to-r from-fuchsia-400/15 to-violet-400/15 ring-1 ring-violet-300/30 flex items-center justify-center">
              <BoltIcon className="h-8 w-8 text-violet-600" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-[#233C42]">
            Faster Creator Discovery
          </h3>
          <p className="mt-3 text-[#233C42]/80 leading-relaxed sm:min-h-[100px]">
            Use rich persona profiles to automate discovery and surface ideal creators in seconds
            so your team can focus on strategy instead of spreadsheets.
          </p>
        </div>

        <div className="md:border-r md:border-[#233C42]/10 pr-0 md:pr-10">
          <div className="mb-6">
            <div className="h-14 w-14 rounded-full bg-gradient-to-r from-fuchsia-400/15 to-violet-400/15 ring-1 ring-violet-300/30 flex items-center justify-center">
              <ArrowTrendingUpIcon className="h-8 w-8 text-violet-600" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-[#233C42]">
            More Revenue per Creator
          </h3>
          <p className="mt-3 text-[#233C42]/80 leading-relaxed sm:min-h-[100px]">
            Identify high-performing creators based on what really drives results in your industry.
            Teams typically see around 20% more revenue per collaboration.
          </p>
        </div>

        <div className="">
          <div className="mb-6">
            <div className="h-14 w-14 rounded-full bg-gradient-to-r from-fuchsia-400/15 to-violet-400/15 ring-1 ring-violet-300/30 flex items-center justify-center">
              <CpuChipIcon className="h-8 w-8 text-violet-600" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-[#233C42]">
            AI-Powered Insights
          </h3>
          <p className="mt-3 text-[#233C42]/80 leading-relaxed sm:min-h-[100px]">
            Understand why creators match your brand — audience fit, content style, and engagement
            potential — and act on clear, actionable data without spreadsheets.
          </p>
        </div>
      </div>
    </section>
  );
}
