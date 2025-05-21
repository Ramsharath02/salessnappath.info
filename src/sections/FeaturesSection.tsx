import React from 'react';
import Container from '../components/Container';
import { LineChart, MessageSquare, BarChart3 } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Lead Tracking",
      description: "Track and monitor lead interactions in real-time. Get insights into lead behavior and engagement with your sales process."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Auto Follow-ups",
      description: "Automate personalized follow-ups based on lead behavior. Never miss an opportunity to connect at the right moment."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Pipeline Snapshots",
      description: "Get a clear view of your entire sales pipeline. Identify bottlenecks and opportunities with powerful analytics."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features Built for Modern Sales Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to streamline your sales process and close more deals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;