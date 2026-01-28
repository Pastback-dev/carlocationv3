import { useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
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
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'py-3' : 'py-5'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 border-b transition-all duration-300',
            isScrolled 
              ? 'bg-background/80 border-border/50' 
              : 'bg-transparent border-transparent'
          )}
          // Removed backdropFilter for performance
        />
        
        <div className="container-premium relative flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold"
            // Removed whileHover/whileTap for performance
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-electric-cyan">
              <Car className="h-5 w-5 text-white" />
            </div>
            <span className="text-gradient">CarMatch</span>
            <span className="text-foreground">Pro</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                // Removed initial/animate/transition for performance
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-electric-cyan transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <button
              // Removed initial/animate/transition for performance
              className="hidden rounded-xl bg-gradient-to-r from-primary to-electric-cyan px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-glow hover:scale-105 md:block"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 md:hidden"
              // Removed whileTap for performance
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 pt-20">
          {navLinks.map((link, index) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-semibold text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </button>
          ))}
          
          <button
            className="mt-4 rounded-xl bg-gradient-to-r from-primary to-electric-cyan px-8 py-4 text-lg font-semibold text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;