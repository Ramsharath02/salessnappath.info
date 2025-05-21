import React from 'react';
import Container from '../components/Container';
import { Target, Zap, Trophy, Users } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Actionable Strategies",
      description: "Get battle-tested sales techniques you can implement immediately to improve your close rates."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Time-Saving Automation",
      description: "Weekly automation tips and tools to streamline your sales process and focus on what matters."
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Proven Templates",
      description: "Access high-converting email templates, call scripts, and follow-up sequences."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Network",
      description: "Insights from top-performing sales leaders and successful SaaS companies."
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Join Our Newsletter?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to excel in modern B2B sales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;