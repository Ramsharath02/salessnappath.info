import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 max-w-4xl animate-fade-in">
            Close Deals Faster With Smart Sales Paths.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
            AI-powered lead nurturing & workflow automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="group">
              Get Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative w-full max-w-5xl rounded-lg shadow-xl overflow-hidden animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-orange-500/20 rounded-lg"></div>
            <img 
              src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg" 
              alt="SalesSnapPath Dashboard" 
              className="w-full h-auto relative z-10 rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/90 to-white/0 pointer-events-none"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;