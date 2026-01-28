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
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute -left-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/30 blur-[100px]"
          animate={
            !shouldReduceMotion && isInView
              ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
              : undefined
          }
          transition={shouldReduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-20 top-1/4 h-[300px] w-[300px] rounded-full bg-electric-cyan/20 blur-[80px]"
          animate={
            !shouldReduceMotion && isInView
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }
              : undefined
          }
          transition={shouldReduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
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
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span>Start Your Journey Today</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            Make the{' '}
            <span className="text-gradient">Smartest Car Decision</span>
            {' '}Today.
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-10 text-lg text-muted-foreground sm:text-xl"
          >
            Join hundreds of satisfied clients who found their perfect car at the best market price.
            Your dream car is just one click away.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
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
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
