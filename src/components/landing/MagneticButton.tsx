import React, { useMemo, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
  onClick?: () => void;
  strength?: number;
}

export const MagneticButton = ({
  children,
  className,
  variant = 'primary',
  onClick,
  strength = 0.3,
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Disable "magnetic" effect on touch devices / reduced motion.
  const isCoarsePointer = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(pointer: coarse)')?.matches ?? false;
  }, []);
  const magneticEnabled = !shouldReduceMotion && !isCoarsePointer;

  // Use motion values so mousemove doesn't re-render React.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magneticEnabled) return;
    if (!buttonRef.current) return;

    // Throttle to one update per frame.
    if (rafRef.current != null) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((clientX - centerX) * strength);
      y.set((clientY - centerY) * strength);
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={magneticEnabled ? { x: springX, y: springY } : undefined}
      className={cn(
        'relative overflow-hidden font-semibold transition-all duration-300',
        variant === 'primary' && [
          'rounded-xl px-8 py-4 text-white',
          'bg-gradient-to-r from-electric-blue to-electric-cyan',
          'hover:shadow-glow-lg hover:scale-105',
          'before:absolute before:inset-0 before:bg-gradient-to-r before:from-electric-cyan before:to-electric-blue',
          'before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100',
        ],
        variant === 'ghost' && [
          'rounded-xl border border-primary/50 px-8 py-4',
          'text-primary hover:border-primary hover:bg-primary/10',
          'hover:shadow-glow',
        ],
        className
      )}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Glow effect */}
      {variant === 'primary' && magneticEnabled && (
        <motion.div
          className="absolute inset-0 -z-10 opacity-0"
          animate={{
            opacity: 0.5,
          }}
          style={{
            background: 'radial-gradient(circle at center, hsl(var(--electric-glow) / 0.6) 0%, transparent 70%)',
            // blur is expensive; keep small and only when magnetic is enabled
            filter: 'blur(12px)',
          }}
        />
      )}
    </motion.button>
  );
};

export default MagneticButton;
