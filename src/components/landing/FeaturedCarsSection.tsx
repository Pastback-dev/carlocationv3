import { motion, useReducedMotion } from 'framer-motion';
import { Star, Fuel, Users, Calendar, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { GlassCard } from './GlassCard';
import { useScrollAnimation, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';

const featuredCars = [
  {
    id: 1,
    name: 'Tesla Model 3',
    price: 42990,
    marketAvg: 45500,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop',
    rating: 4.9,
    year: 2024,
    fuel: 'Electric',
    seats: 5,
    highlights: ['Autopilot', 'Long Range', 'Premium Interior'],
    bestChoice: true,
  },
  {
    id: 2,
    name: 'BMW 3 Series',
    price: 46800,
    marketAvg: 49200,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
    rating: 4.7,
    year: 2024,
    fuel: 'Hybrid',
    seats: 5,
    highlights: ['M Sport Package', 'iDrive 8', 'Leather Seats'],
    bestChoice: false,
  },
  {
    id: 3,
    name: 'Mercedes C-Class',
    price: 48500,
    marketAvg: 51000,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
    rating: 4.8,
    year: 2024,
    fuel: 'Hybrid',
    seats: 5,
    highlights: ['AMG Line', 'MBUX', 'Panoramic Roof'],
    bestChoice: false,
  },
  {
    id: 4,
    name: 'Audi A4',
    price: 44200,
    marketAvg: 46800,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
    rating: 4.6,
    year: 2024,
    fuel: 'Petrol',
    seats: 5,
    highlights: ['Quattro AWD', 'Virtual Cockpit', 'S Line'],
    bestChoice: false,
  },
];

export const FeaturedCarsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCar = () => setActiveIndex((prev) => (prev + 1) % featuredCars.length);
  const prevCar = () => setActiveIndex((prev) => (prev - 1 + featuredCars.length) % featuredCars.length);

  return (
    <section id="featured-cars" className="section-padding relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
      
      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.p
            variants={staggerItem}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Top Picks
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Featured <span className="text-gradient">Recommendations</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Hand-picked vehicles with exceptional value and verified market pricing.
          </motion.p>
        </motion.div>

        {/* Cars Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {featuredCars.map((car, index) => (
            <motion.div key={car.id} variants={staggerItem}>
              <GlassCard className="group h-full overflow-hidden p-0">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Best Choice Badge */}
                  {car.bestChoice && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-electric-cyan px-3 py-1 text-xs font-semibold text-white shadow-glow animate-glow-pulse"
                    >
                      <Award className="h-3 w-3" />
                      Best Choice
                    </motion.div>
                  )}

                  {/* Savings Badge */}
                  <div className="absolute bottom-3 left-3 rounded-lg bg-green-500/90 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    Save ${(car.marketAvg - car.price).toLocaleString()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Title & Price */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-foreground">{car.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gradient">
                        ${car.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${car.marketAvg.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {car.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel className="h-3 w-3" />
                      {car.fuel}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {car.seats}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(car.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{car.rating}</span>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1">
                    {car.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-border bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation (Mobile) */}
        <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
          <motion.button
            whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
            onClick={prevCar}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <div className="flex gap-2">
            {featuredCars.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === activeIndex ? 'w-6 bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
          <motion.button
            whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
            onClick={nextCar}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarsSection;
