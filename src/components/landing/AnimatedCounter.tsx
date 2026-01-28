import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform, useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter = ({
  target,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hasAnimated, setHasAnimated] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  });
  
  const display = useTransform(spring, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(target);
      setHasAnimated(true);
      return;
    }

    if (isInView && !hasAnimated) {
      spring.set(target);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, spring, target, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const unsubscribe = display.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [display, shouldReduceMotion]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView && !shouldReduceMotion ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {prefix}
      {shouldReduceMotion ? target.toLocaleString() : displayValue.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;