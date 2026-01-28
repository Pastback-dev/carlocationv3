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
  // The ThemeToggle component already handles setting the initial theme based on localStorage
  // and document.documentElement.classList. This useEffect is redundant.
  // useEffect(() => {
  //   document.documentElement.classList.add('dark');
  // }, []);

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