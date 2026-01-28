import { motion } from 'framer-motion';
import { Search, Shield, Target, Clock } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { useScrollAnimation, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

const trustItems = [
  {
    icon: Search,
    title: 'Smart Market Analysis',
    description: 'Our AI scans thousands of listings daily to find the best deals across all major platforms.',
  },
  {
    icon: Shield,
    title: 'Best Price Guarantee',
    description: 'We ensure you get the most competitive market price with transparent pricing analysis.',
  },
  {
    icon: Target,
    title: 'Expert Recommendations',
    description: 'Personalized suggestions based on your specific requirements, budget, and preferences.',
  },
  {
    icon: Clock,
    title: 'Time & Money Saving',
    description: 'Skip hours of research. Get curated options in minutes, saving you time and money.',
  },
];

export const TrustSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="trust" className="section-padding relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      
      <div className="container-premium relative z-10">
        {/* Header */}
        <div
          ref={ref}
          // Removed motion for performance
          className="mb-16 text-center"
        >
          <p
            // Removed motion for performance
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Why Choose Us
          </p>
          <h2
            // Removed motion for performance
            className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            We analyze the market{' '}
            <span className="text-gradient">so you don't have to.</span>
          </h2>
          <p
            // Removed motion for performance
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Our cutting-edge technology and automotive expertise combine to deliver 
            unmatched car buying insights and recommendations.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          // Removed motion for performance
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustItems.map((item, index) => (
            <div key={index} /* Removed motion for performance */>
              <GlassCard className="h-full">
                <div className="flex flex-col items-start">
                  {/* Icon */}
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-electric-cyan/20 ring-1 ring-primary/20">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;