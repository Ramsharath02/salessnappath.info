import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import AnimatedFlowSection from './sections/AnimatedFlowSection';
import TestimonialsSection from './sections/TestimonialsSection';
import IntegrationsSection from './sections/IntegrationsSection';
import PricingSection from './sections/PricingSection';
import CtaSection from './sections/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AnimatedFlowSection />
        <TestimonialsSection />
        <IntegrationsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;