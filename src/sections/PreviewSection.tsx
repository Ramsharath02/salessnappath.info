import React from 'react';
import Container from '../components/Container';
import { Mail, MessageSquare, LineChart } from 'lucide-react';

const PreviewSection: React.FC = () => {
  const previewItems = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Cold Email Mastery",
      description: "How to write cold emails that get 70%+ open rates and real responses."
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Discovery Call Guide",
      description: "The exact questions that uncover real pain points and buying signals."
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Pipeline Analysis",
      description: "Simple framework to identify and fix pipeline bottlenecks fast."
    }
  ];

  return (
    <section id="preview" className="py-16 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              This Week's Issue
            </h2>
            <p className="text-xl text-gray-600">
              A sneak peek into the valuable insights you'll receive
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {previewItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PreviewSection;