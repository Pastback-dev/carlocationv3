import { useState } from 'react';
import { motion, useMotionTemplate, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Car } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Featured Cars', href: '#featured-cars' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const backdropFilter = useMotionTemplate`blur(${backdropBlur}px)`;

  // Only update state when crossing threshold (avoid setState on every scroll tick).
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const next = latest > 50;
    setIsScrolled((prev) => (prev === next ? prev : next));
  });

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'py-3' : 'py-5'
        )}
      >
        <motion.div
          className={cn(
            'absolute inset-0 border-b transition-all duration-300',
            isScrolled 
              ? 'bg-background/80 border-border/50' 
              : 'bg-transparent border-transparent'
          )}
          style={{
            // Avoid dynamic blur if reduced motion (GPU heavy)
            backdropFilter: !shouldReduceMotion && isScrolled ? backdropFilter : 'none',
          }}
        />
        
        <div className="container-premium relative flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 text-xl font-bold"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-electric-cyan">
              <Car className="h-5 w-5 text-white" />
            </div>
            <span className="text-gradient">CarMatch</span>
            <span className="text-foreground">Pro</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-electric-cyan transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="hidden rounded-xl bg-gradient-to-r from-primary to-electric-cyan px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-glow hover:scale-105 md:block"
            >
              Get Started
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 md:hidden"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : '100%',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 pt-20">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : 50 
              }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="text-2xl font-semibold text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </motion.button>
          ))}
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-4 rounded-xl bg-gradient-to-r from-primary to-electric-cyan px-8 py-4 text-lg font-semibold text-white"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
