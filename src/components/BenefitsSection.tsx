import { Target, BarChart3, Zap } from 'lucide-react';

type Benefit = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: Target,
    title: '10 Verified Creator Matches',
    description:
      'Instantly see the best-performing creators aligned with your brand identity and values.',
  },
  {
    icon: BarChart3,
    title: 'Actionable Insights',
    description:
      'Understand why each creator matches your brand - based on content, tone, and audience overlap.',
  },
  {
    icon: Zap,
    title: 'Faster Campaign Results',
    description:
      'Save hours of research and discover creators who already drive ROI in your industry.',
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
                <div className="mb-5">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#E40DA8] to-[#7424B3]">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#233C42] mb-3">{benefit.title}</h3>
                <p className="text-[#233C42]/70 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
