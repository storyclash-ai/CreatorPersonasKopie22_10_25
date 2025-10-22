import { Zap, TrendingUp, Cpu } from 'lucide-react';

type Benefit = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: Zap,
    title: '100× Faster Discovery',
    description:
      'Automate research with rich persona profiles to surface ideal creators in seconds — not hours of manual work.',
  },
  {
    icon: TrendingUp,
    title: '20% More Revenue per Creator',
    description:
      'Identify high-performing creators based on what truly drives results in your industry. Customers see ~20% more revenue per collaboration.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Creator Insights',
    description:
      'Understand why creators match your brand — audience fit, content style, and engagement potential — with clear, actionable data.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-20 bg-[#FAFAFB]">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#233C42]">
            What You'll Get From Your AI-Powered Creator Match
          </h2>
          <p className="mt-3 text-lg text-[#233C42]/70 max-w-3xl mx-auto">
            From data to results – here's what your personalized Creator Persona delivers.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-black/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out"
              >
                <div className="mb-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-fuchsia-400/15 to-violet-400/15 ring-1 ring-violet-300/30 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-violet-600" strokeWidth={2} fill="currentColor" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-[#233C42]">{benefit.title}</h3>
                <p className="mt-3 text-[#233C42]/80 leading-relaxed sm:min-h-[96px]">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
