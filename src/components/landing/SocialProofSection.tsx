import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { AnimatedCounter } from './AnimatedCounter';
import { useScrollAnimation, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    id: 1,
    name: 'Michael Chen',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'CarMatch Pro saved me over $5,000 on my Tesla purchase. Their market analysis was spot-on, and the entire process was seamless. Highly recommended!',
    rating: 5,
    savings: 5200,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'I was overwhelmed by options until I found CarMatch. They narrowed down the perfect BMW for my needs in just 48 hours. The personalized service is unmatched.',
    rating: 5,
    savings: 3800,
  },
  {
    id: 3,
    name: 'David Park',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    content: 'The transparency in pricing was refreshing. I knew exactly what I was paying for and why. Got my Mercedes C-Class below market value!',
    rating: 5,
    savings: 4500,
  },
];

const socialProofStats = [
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 10000, suffix: '+', label: 'Cars Analyzed' },
  { value: 2, suffix: 'M+', prefix: '$', label: 'Client Savings' },
];

export const SocialProofSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      
      <div className="container-premium relative z-10">
        {/* Stats Bar */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-20 grid gap-8 sm:grid-cols-3"
        >
          {socialProofStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="glass-card p-8 text-center"
            >
              <div className="mb-2 text-4xl font-bold text-gradient sm:text-5xl">
                <AnimatedCounter 
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  duration={2.5}
                />
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.p
            variants={staggerItem}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Testimonials
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Trusted by <span className="text-gradient">Hundreds</span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card p-8 text-center md:p-12">
                    {/* Quote Icon */}
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-electric-cyan/20">
                      <Quote className="h-7 w-7 text-primary" />
                    </div>

                    {/* Content */}
                    <p className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="mb-6 flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex flex-col items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="mb-4 h-16 w-16 rounded-full border-2 border-primary/30 object-cover"
                      />
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <div className="mt-2 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                        Saved ${testimonial.savings.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:shadow-glow"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:shadow-glow"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
