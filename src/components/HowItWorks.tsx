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
    title: "Enter Your Brand",
    desc: "Tell us about your brand or website. We analyze your tone, audience, and positioning.",
  },
  {
    icon: Search,
    label: "STEP 2",
    title: "Brand Profile Detection",
    desc: "Our AI builds your brand profile automatically based on how you communicate and perform online.",
    active: true,
  },
  {
    icon: BarChart3,
    label: "STEP 3",
    title: "Market & Competitor Analysis",
    desc: "We analyze markets, campaigns, and competitors to identify your ideal creator segment.",
  },
  {
    icon: Users,
    label: "STEP 4",
    title: "Creator Matches",
    desc: "Instantly see creators that perfectly match your brand's style, audience, and values.",
  },
  {
    icon: UserCircle,
    label: "STEP 5",
    title: "Get Brand-Fit Creator Matches",
    desc: "Receive a ready-to-use list of creators tailored to your brand - instantly, no manual research needed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 md:px-8 -mt-4">
      <div className="bg-white stepper-elevated">
        <header className="text-center pt-10 pb-8 px-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#233C42]">
            How Creator Personas Works - From Brand Insight to Perfect Creator Match
          </h2>
          <p className="mt-3 text-[#233C42]/70 max-w-3xl mx-auto">
            Our AI builds your creator persona and instantly connects you with the
            best-matching creators for your brand.
          </p>
        </header>

        <div className="relative px-6 pb-6">
          <div className="absolute left-6 right-6 top-10 h-[2px] bg-[#E9EAEA]">
            <div
              className="h-full bg-gradient-to-r from-[#E40DA8] to-[#7424B3] rounded-full animate-line"
              style={{ width: "46%" }}
            />
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
                      "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] ring-1 ring-black/5",
                      "transition-transform duration-200 ease-out",
                      "hover:scale-[1.03] focus:scale-[1.03] focus-visible:outline-none cursor-default",
                      isActive ? "ring-0" : "",
                    ].join(" ")}
                    style={
                      isActive
                        ? {
                            boxShadow:
                              "0 1px 2px rgba(0,0,0,.04), inset 0 0 0 2px rgba(228,13,168,.15)",
                          }
                        : undefined
                    }
                  >
                    <div
                      className={[
                        "grid place-items-center h-12 w-12 rounded-full",
                        isActive
                          ? "bg-gradient-to-br from-[#E40DA8] to-[#7424B3] text-white"
                          : "bg-white",
                      ].join(" ")}
                    >
                      <Icon
                        strokeWidth={1.5}
                        className={
                          isActive
                            ? "text-white"
                            : "text-[#C8C9CF] group-hover:text-[#9ea2a8]"
                        }
                      />
                    </div>

                    {isActive && (
                      <span
                        className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-transparent"
                        style={{
                          boxShadow:
                            "0 0 0 6px rgba(228,13,168,.08), 0 0 0 12px rgba(116,36,179,.05)",
                        }}
                      />
                    )}
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
