import React from "react";
import {
  Tag,
  Search,
  BarChart3,
  Users,
  UserCircle,
} from "lucide-react";

type Step = {
  label: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  active?: boolean;
};

const steps: Step[] = [
  {
    icon: Tag,
    label: "STEP 1",
    title: "Brand Profile Detection",
    desc: "With just your brand website, we analyze your products, values, and target audience to build your foundation.",
  },
  {
    icon: Search,
    label: "STEP 2",
    title: "Marketing Footprint Analysis",
    desc: "Our AI enhances your profile based on your historical social media and influencer marketing activities.",
    active: true,
  },
  {
    icon: BarChart3,
    label: "STEP 3",
    title: "Market & Competitor Analysis",
    desc: "We analyze markets, campaigns, and competitors to identify your ideal creator strategy and segments.",
  },
  {
    icon: Users,
    label: "STEP 4",
    title: "Creator Matches",
    desc: "With rich data insights, our recommendation engine surfaces creators that perfectly match your brand's style, audience, and goals.",
  },
  {
    icon: UserCircle,
    label: "STEP 5",
    title: "Get Brand-Fit Creator Matches",
    desc: "Receive a ready-to-use list of creators tailored to your brand, without filters, settings, or manual research.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 md:px-8 -mt-4">
      <div className="bg-white stepper-elevated">
        <header className="text-center pt-10 pb-8 px-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#233C42]">
            How Creator Personas Work - From Brand Insight to Perfect Creator Match
          </h2>
          <p className="mt-3 text-[#233C42]/70 max-w-3xl mx-auto">
            Our AI builds your creator persona and connects you with the
            best-matching creators for your brand.
          </p>
        </header>

        <div className="relative px-6 pb-6">
          {/* Mehrfarbige Timeline mit Markern */}
          <div className="absolute left-6 right-6 top-10">
            <div className="relative">
              <div className="h-1 w-full rounded-full bg-gradient-to-r from-amber-400 via-cyan-500 via-purple-600 to-pink-500" />
              {/* Dezente Marker bei 25/50/75 % */}
              <span className="absolute left-1/4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/90 ring-1 ring-black/5" />
              <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/90 ring-1 ring-black/5" />
              <span className="absolute left-3/4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/90 ring-1 ring-black/5" />
            </div>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = !!s.active;

              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div
                    tabIndex={0}
                    aria-label={`${s.label}: ${s.title}`}
                    className={[
                      "relative z-10 h-20 w-20 rounded-full flex items-center justify-center",
                      "bg-white shadow-sm ring-1 transition-transform duration-200 ease-out",
                      "hover:scale-[1.03] focus:scale-[1.03] focus-visible:outline-none cursor-default",
                      isActive ? "ring-gray-300" : "ring-gray-200",
                    ].join(" ")}
                  >
                    <Icon
                      strokeWidth={1.5}
                      className="h-8 w-8 text-gray-700"
                    />
                  </div>

                  <div className="mt-4 text-[11px] tracking-wide uppercase text-[#233C42]/50">
                    {s.label}
                  </div>
                  <div className="mt-1 text-[17px] font-semibold text-[#233C42]">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#233C42]/70">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-0.5 mx-6 mb-6 rounded rail-animated" />
      </div>
    </section>
  );
}
