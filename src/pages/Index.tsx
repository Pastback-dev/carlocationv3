import { useEffect } from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { TrustSection } from '@/components/landing/TrustSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { FeaturedCarsSection } from '@/components/landing/FeaturedCarsSection';
import { WhyChooseUsSection } from '@/components/landing/WhyChooseUsSection';
import { SocialProofSection } from '@/components/landing/SocialProofSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  useEffect(() => {
    // Default to dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <HowItWorksSection />
        <FeaturedCarsSection />
        <WhyChooseUsSection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
