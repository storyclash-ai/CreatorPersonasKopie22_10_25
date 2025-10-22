import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Tag,
  Search,
  BarChart3,
  Users,
  UserCircle,
} from 'lucide-react';

type Step = {
  icon: React.ReactNode;
  title: string;
  caption: string;
};

const steps: Step[] = [
  {
    icon: <Tag className="w-5 h-5" />,
    title: 'Brand Input',
    caption: 'Enter your brand or website to get started.',
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: 'Brand Match',
    caption: 'AI detects your brand profile instantly.',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Markets & Competitors',
    caption: 'We analyze markets and spot competitors.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Collaborations',
    caption: 'Discover known creator collaborations.',
  },
  {
    icon: <UserCircle className="w-5 h-5" />,
    title: 'Creator Personas',
    caption: 'Get 10 brand-fit creator matches.',
  },
];

const lineColor = '#E7E8EC';
const gradA = '#E40DA8';
const gradB = '#7424B3';

export default function ExplainerAnimation() {
  const prefersReducedMotion = useReducedMotion();

  const keyframes = useMemo(() => {
    const n = steps.length - 1;
    return Array.from({ length: n + 1 }, (_, i) => (i / n) * 100);
  }, []);

  return (
    <section
      aria-label="How Creator Personas works"
      className="relative max-w-5xl mx-auto mt-10 md:mt-12 px-4"
    >
      <div className="rounded-2xl border border-black/5 bg-white shadow-[0_1px_20px_-8px_rgba(0,0,0,0.15)]">
        <div className="p-5 md:p-7">
          <div className="mb-6 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-[#233C42]">
              See the journey in 12 seconds
            </h3>
            <p className="text-sm md:text-base text-[#233C42]/70 mt-1">
              From brand input to 10 creator matches - automatically.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="h-[2px] w-full bg-[#E7E8EC]" />

            {!prefersReducedMotion && (
              <motion.div
                className="absolute top-0 left-0 h-[2px] bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${gradA}, ${gradB})`,
                }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
              />
            )}

            <div className="relative -mt-3 grid grid-cols-5 gap-2">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="col-span-1 flex flex-col items-center text-center group py-4 md:py-5"
                >
                  <div className="relative">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white shadow-sm ring-1 ring-black/10 grid place-items-center text-[#C8C9CF]">
                      {s.icon}
                    </div>

                    {!prefersReducedMotion && i < steps.length && (
                      <motion.span
                        className="absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 h-3 w-3 rounded-full"
                        style={{
                          background:
                            'radial-gradient(circle, #ffffff 0%, #ffffff 40%, rgba(255,255,255,0) 70%)',
                          boxShadow:
                            '0 0 0 2px rgba(228,13,168,0.20), 0 0 16px rgba(116,36,179,0.35)',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          times: [0, 0.5, 1],
                          duration: 12,
                          ease: 'easeOut',
                          repeat: Infinity,
                          delay: (i * 12) / (steps.length - 1),
                        }}
                        aria-hidden
                      />
                    )}
                  </div>

                  <div className="mt-3">
                    <div className="text-sm md:text-[15px] font-semibold text-[#233C42]">
                      {s.title}
                    </div>
                    <div className="text-xs md:text-sm text-[#233C42]/65 mt-1 max-w-[14rem]">
                      {s.caption}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="sr-only">
            The animation shows five steps from brand input to creator matches.
          </p>
        </div>
      </div>
    </section>
  );
}
