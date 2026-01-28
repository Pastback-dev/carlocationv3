import { motion } from 'framer-motion';
import { ClipboardList, Radar, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Tell Us Your Needs',
    description: 'Share your budget, preferred features, and what matters most to you in a car. Our smart form guides you through the process.',
    color: 'from-primary to-electric-cyan',
  },
  {
    number: '02',
    icon: Radar,
    title: 'We Scan the Market',
    description: 'Our AI instantly analyzes thousands of listings across all major platforms, comparing prices, features, and reliability ratings.',
    color: 'from-electric-cyan to-primary',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Get Perfect Matches',
    description: 'Receive a curated list of the best cars that match your criteria, complete with market insights and price analysis.',
    color: 'from-primary to-electric-cyan',
  },
];

export const HowItWorksSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-electric-cyan/5 blur-[80px]" />
      </div>

      <div className="container-premium relative z-10">
        {/* Header */}
        <div
          ref={ref}
          // Removed motion for performance
          className="mb-20 text-center"
        >
          <p
            // Removed motion for performance
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Simple Process
          </p>
          <h2
            // Removed motion for performance
            className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            How It <span className="text-gradient">Works</span>
          </h2>
          <p
            // Removed motion for performance
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Three simple steps to find your dream car at the best price.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (removed motion) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block">
            <div
              className="h-full w-full origin-top bg-gradient-to-b from-primary via-electric-cyan to-primary"
            />
          </div>

          <div
            // Removed motion for performance
            className="relative space-y-12 lg:space-y-24"
          >
            {steps.map((step, index) => (
              <div
                key={index}
                // Removed motion for performance
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div
                    // Removed motion for performance
                    className="glass-card p-8"
                  >
                    <div className={`mb-4 flex items-center gap-4 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <span className="text-4xl font-bold text-gradient">{step.number}</span>
                      <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${step.color} p-3`}>
                        <step.icon className="h-full w-full text-white" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Center Icon (Desktop) */}
                <div className="relative hidden lg:flex">
                  <div
                    // Removed motion for performance
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-electric-cyan shadow-glow"
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="hidden flex-1 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;