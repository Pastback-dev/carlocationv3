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
      {/* Static Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        
        {/* Static Orbs (removed motion) */}
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-electric-cyan/15 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Static Car Silhouette (removed motion) */}
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
        <div
          // Removed motion for performance
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Car Recommendations</span>
            <div className="h-1.5 w-1.5 motion-safe:animate-pulse rounded-full bg-primary" />
          </div>
        </div>

        {/* Headline */}
        <h1
          // Removed motion for performance
          className="mb-6 max-w-5xl text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-foreground">Find the </span>
          <span className="text-gradient">Perfect Car</span>
          <br />
          <span className="text-foreground">at the </span>
          <span className="text-gradient">Best Market Price</span>
        </h1>

        {/* Subheadline */}
        <p
          // Removed motion for performance
          className="mb-10 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl"
        >
          Our intelligent system analyzes thousands of listings in real-time to deliver 
          personalized car recommendations tailored to your budget and needs.
        </p>

        {/* CTAs */}
        <div
          // Removed motion for performance
          className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
        >
          <MagneticButton variant="primary" onClick={() => navigate('/zenith')}>
            Get My Recommendation
            <ArrowRight className="h-5 w-5" />
          </MagneticButton>
          
          <MagneticButton variant="ghost" onClick={() => scrollToSection('#how-it-works')}>
            Explore How It Works
          </MagneticButton>
        </div>

        {/* Stats */}
        <div
          // Removed motion for performance
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
        </div>

        {/* Scroll Indicator */}
        <div
          // Removed motion for performance
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('#trust')}
            // Removed motion for performance
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;