import { motion, useReducedMotion } from 'framer-motion';
import { BarChart3, Eye, Heart, Gem } from 'lucide-react';
import { useScrollAnimation, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';
import { AnimatedCounter } from './AnimatedCounter';

const features = [
  {
    icon: BarChart3,
    title: 'Market Intelligence',
    description: 'Real-time data analysis across 50+ platforms to find the best deals and pricing trends.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'See exactly how we calculate value scores and why we recommend specific vehicles.',
  },
  {
    icon: Heart,
    title: 'Personalized Service',
    description: 'Recommendations tailored to your lifestyle, preferences, and long-term ownership goals.',
  },
  {
    icon: Gem,
    title: 'Premium Experience',
    description: 'White-glove service from initial consultation to final purchase and beyond.',
  },
];

const stats = [
  { value: 50, suffix: '+', label: 'Data Sources' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 2500, suffix: '+', label: 'Cars Matched' },
  { value: 4.9, suffix: '/5', label: 'Average Rating' },
];

export const WhyChooseUsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="why-us" className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]"
          animate={
            !shouldReduceMotion && isInView
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
              : { scale: 1, opacity: 0.3 }
          }
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Content */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.p
              variants={staggerItem}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
            >
              The Difference
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Why <span className="text-gradient">Choose Us</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="mb-10 text-lg text-muted-foreground"
            >
              We combine cutting-edge technology with automotive expertise to deliver 
              an unmatched car buying experience.
            </motion.p>

            {/* Features List */}
            <motion.div
              variants={staggerContainer}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-electric-cyan/20 ring-1 ring-primary/20 transition-all group-hover:ring-primary/50 group-hover:shadow-glow">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Stats & Visual */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInRight}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="glass-card group p-6 text-center transition-all hover:border-primary/30 hover:shadow-glow"
                >
                  <div className="mb-2 text-3xl font-bold text-gradient sm:text-4xl">
                    <AnimatedCounter 
                      target={stat.value} 
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 to-electric-cyan/10 blur-3xl"
              animate={
                !shouldReduceMotion && isInView
                  ? {
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.6, 0.4],
                    }
                  : { scale: 1, opacity: 0.4 }
              }
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-br from-electric-cyan/20 to-primary/10 blur-2xl"
              animate={
                !shouldReduceMotion && isInView
                  ? {
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }
                  : { scale: 1, opacity: 0.3 }
              }
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;