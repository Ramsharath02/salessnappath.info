import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './sections/HeroSection';
import BenefitsSection from './sections/BenefitsSection';
import PreviewSection from './sections/PreviewSection';
import TestimonialsSection from './sections/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <PreviewSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;