import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  title: string;
  company: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "SalesSnapPath revolutionized our sales process. We've seen a 40% increase in lead conversion and saved countless hours on follow-ups.",
      name: "Sarah Johnson",
      title: "Sales Director",
      company: "TechFlow Inc.",
      rating: 5
    },
    {
      id: 2,
      content: "The pipeline snapshots give us instant visibility into deals that need attention. Our team is more proactive and closing rates have improved significantly.",
      name: "Michael Chen",
      title: "VP of Sales",
      company: "GrowthMakers",
      rating: 5
    },
    {
      id: 3,
      content: "The automated follow-ups are perfectly timed and feel personal. Our customers often comment on how responsive our sales team is.",
      name: "Jessica Patel",
      title: "Sales Operations Manager",
      company: "InnovateX",
      rating: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setIsPaused(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsPaused(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-blue-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of sales teams already improving their process
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col items-center min-h-[200px]">
            <div className="mb-6 flex">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-center text-gray-700 italic mb-8">
              "{testimonials[activeIndex].content}"
            </blockquote>
            
            <div className="text-center">
              <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
              <p className="text-gray-600">{testimonials[activeIndex].title}, {testimonials[activeIndex].company}</p>
            </div>
          </div>
          
          <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between">
            <button 
              onClick={handlePrev}
              className="bg-white rounded-full shadow-md p-2 text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="bg-white rounded-full shadow-md p-2 text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;