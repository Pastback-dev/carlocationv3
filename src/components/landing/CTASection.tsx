import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation';

export const CTASection = () => {
  const { ref, isInView } = useScrollAnimation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-electric-cyan/10" />
        
        {/* Static Orbs (removed motion) */}
        <div
          className="absolute -left-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/30 blur-[100px]"
        />
        <div
          className="absolute -right-20 top-1/4 h-[300px] w-[300px] rounded-full bg-electric-cyan/20 blur-[80px]"
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-premium relative z-10">
        <div
          ref={ref}
          // Removed motion for performance
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div
            // Removed motion for performance
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span>Start Your Journey Today</span>
          </div>

          {/* Headline */}
          <h2
            // Removed motion for performance
            className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            Make the{' '}
            <span className="text-gradient">Smartest Car Decision</span>
            {' '}Today.
          </h2>

          {/* Subheadline */}
          <p
            // Removed motion for performance
            className="mb-10 text-lg text-muted-foreground sm:text-xl"
          >
            Join hundreds of satisfied clients who found their perfect car at the best market price.
            Your dream car is just one click away.
          </p>

          {/* CTA Button */}
          <div
            // Removed motion for performance
            className="flex flex-col items-center gap-4"
          >
            <MagneticButton variant="primary" strength={0.4}>
              <span className="relative z-10 flex items-center gap-2 text-lg">
                Get My Free Recommendation
                <ArrowRight className="h-5 w-5" />
              </span>
            </MagneticButton>
            
            <p className="text-sm text-muted-foreground">
              No credit card required • Free consultation • Expert guidance
            </p>
          </div>

          {/* Trust Indicators */}
          <div
            // Removed motion for performance
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span>Instant Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span>No Obligation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;