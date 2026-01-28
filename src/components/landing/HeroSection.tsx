import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MagneticButton } from './MagneticButton';

export const HeroSection = () => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]"
          animate={
            shouldReduceMotion
              ? { x: 0, y: 0, scale: 1 }
              : {
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.2, 1],
                }
          }
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-electric-cyan/15 blur-[100px]"
          animate={
            shouldReduceMotion
              ? { x: 0, y: 0, scale: 1 }
              : {
                  x: [0, -80, 0],
                  y: [0, -60, 0],
                  scale: [1, 1.3, 1],
                }
          }
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]"
          animate={
            shouldReduceMotion
              ? { scale: 1, opacity: 0.3 }
              : {
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
          }
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Car Silhouettes */}
        <div
          className="absolute right-[10%] top-[20%] text-primary/10"
        >
          <svg width="200" height="80" viewBox="0 0 200 80" fill="currentColor">
            <path d="M180 55c0-5.5-4.5-10-10-10h-10l-15-20c-2.5-3.3-6.4-5.3-10.5-5.3H65.5c-4.1 0-8 2-10.5 5.3L40 45H30c-5.5 0-10 4.5-10 10v10c0 2.8 2.2 5 5 5h10c0 8.3 6.7 15 15 15s15-6.7 15-15h70c0 8.3 6.7 15 15 15s15-6.7 15-15h10c2.8 0 5-2.2 5-5V55z"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container-premium relative z-10 flex min-h-screen flex-col items-center justify-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Car Recommendations</span>
            <div className="h-1.5 w-1.5 motion-safe:animate-pulse rounded-full bg-primary" />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 max-w-5xl text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-foreground">Find the </span>
          <span className="text-gradient">Perfect Car</span>
          <br />
          <span className="text-foreground">at the </span>
          <span className="text-gradient">Best Market Price</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl"
        >
          Our intelligent system analyzes thousands of listings in real-time to deliver 
          personalized car recommendations tailored to your budget and needs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
        >
          <MagneticButton variant="primary" onClick={() => navigate('/zenith')}>
            Get My Recommendation
            <ArrowRight className="h-5 w-5" />
          </MagneticButton>
          
          <MagneticButton variant="ghost" onClick={() => scrollToSection('#how-it-works')}>
            Explore How It Works
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 sm:gap-16"
        >
          {[
            { value: '10K+', label: 'Cars Analyzed' },
            { value: '500+', label: 'Happy Clients' },
            { value: '99%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gradient sm:text-3xl">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#trust')}
            animate={shouldReduceMotion ? { y: 0 } : { y: [0, 10, 0] }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <ChevronDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;