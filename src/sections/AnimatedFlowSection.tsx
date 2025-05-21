import React from 'react';
import Container from '../components/Container';
import { ArrowRight, UserCheck, Mail, LineChart, CheckCircle } from 'lucide-react';

const FlowItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}> = ({ icon, title, description, isLast = false }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-4 animate-fade-in-up">
      <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full z-10">
        {icon}
      </div>
      
      {!isLast && (
        <div className="absolute left-5 top-16 h-16 w-0.5 bg-blue-200 md:hidden"></div>
      )}
      
      {!isLast && (
        <div className="absolute left-10 top-5 md:left-auto md:top-auto md:bottom-auto h-0.5 w-8 bg-blue-200 hidden md:block"></div>
      )}
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const AnimatedFlowSection: React.FC = () => {
  const flowItems = [
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Lead Qualification",
      description: "Automatically qualify leads based on their behavior and engagement."
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Smart Follow-ups",
      description: "AI schedules perfect timing for personalized follow-up messages."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Activity Tracking",
      description: "Monitor all interactions and responses in real-time."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Deal Closing",
      description: "Guide prospects through your sales process to successful closure."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How SalesSnapPath Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            An automated sales journey that feels personal at every step
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="hidden md:block absolute top-5 left-14 right-14 h-0.5 bg-blue-200 z-0"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
            {flowItems.map((item, index) => (
              <FlowItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                isLast={index === flowItems.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AnimatedFlowSection;