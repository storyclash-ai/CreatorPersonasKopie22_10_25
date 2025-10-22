import { useEffect, useMemo, useRef, useState } from 'react';
import { Tag, Search, BarChart3, Users, UserCircle, RotateCcw } from 'lucide-react';

type Step = {
  icon: React.ElementType;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  { icon: Tag, title: 'Brand Input', desc: 'Enter your brand or website to get started.' },
  { icon: Search, title: 'Brand Match', desc: 'AI detects your brand profile instantly.' },
  { icon: BarChart3, title: 'Markets & Competitors', desc: 'We analyze markets & spot competitors.' },
  { icon: Users, title: 'Collaborations', desc: 'Discover known creator collaborations.' },
  { icon: UserCircle, title: 'Creator Personas', desc: 'Get 10 brand-fit creator matches.' },
];

const STEP_MS = 2200;

export default function JourneyExplainer() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !playing) return;
    timerRef.current = window.setInterval(() => {
      setActive((i) => (i + 1) % STEPS.length);
    }, STEP_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [playing, prefersReducedMotion]);

  const progress = ((active + 1) / STEPS.length) * 100;

  return (
    <section
      className="mx-auto max-w-5xl rounded-3xl bg-white shadow-sm ring-1 ring-black/5 px-6 py-8 md:px-10 md:py-10"
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
      aria-label="How Creator Personas Works"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#233C42]">
            How We Turn Your Brand Into Creator Matches
          </h3>
          <p className="mt-1 text-[#233C42]/70">
            From brand input to 10 creator matches - automatically.
          </p>
        </div>
        <button
          aria-label="Replay"
          onClick={() => {
            setActive(0);
            setPlaying(true);
          }}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-sm text-[#233C42] hover:bg-gray-50 transition-colors"
        >
          <RotateCcw size={16} /> Replay
        </button>
      </div>

      <div className="mb-6 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#E40DA8] to-[#7424B3] transition-[width] duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === active;
          return (
            <div key={i} className="flex flex-col items-center text-center">
              <div
                className={[
                  'h-20 w-20 rounded-full grid place-items-center bg-white ring-1 ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]',
                  'transition-transform duration-300 ease-out',
                  isActive ? 'scale-105' : 'scale-100',
                ].join(' ')}
                aria-current={isActive ? 'step' : undefined}
              >
                <div
                  className={[
                    'h-12 w-12 rounded-full grid place-items-center transition-colors',
                    isActive
                      ? 'bg-gradient-to-br from-[#E40DA8] to-[#7424B3] text-white'
                      : 'bg-white text-[#C8C9CF]',
                  ].join(' ')}
                >
                  <Icon strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-4 text-[17px] font-semibold text-[#233C42]">
                {s.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#233C42]/70">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>

      <p className="sr-only">
        The timeline auto-advances through five steps. Hover to pause. Use Replay to restart.
      </p>
    </section>
  );
}
