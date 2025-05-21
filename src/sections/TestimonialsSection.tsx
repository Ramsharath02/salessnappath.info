import React from 'react';
import Container from '../components/Container';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content: "The weekly automation tips alone have saved my team 10+ hours per week. This newsletter is gold for modern sales teams.",
      name: "Alex Chen",
      title: "Sales Director",
      company: "TechScale Solutions",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      content: "Finally, a newsletter that delivers actual value instead of fluff. The templates and scripts are worth their weight in gold.",
      name: "Sarah Miller",
      title: "SDR Manager",
      company: "GrowthForce",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Sales Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of sales professionals improving their game every week
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 relative"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;