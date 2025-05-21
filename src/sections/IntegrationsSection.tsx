import React from 'react';
import Container from '../components/Container';

const IntegrationsSection: React.FC = () => {
  const integrations = [
    { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
    { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
    { name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
    { name: 'Zoom', logo: 'https://cdn.worldvectorlogo.com/logos/zoom-5.svg' },
    { name: 'Microsoft Teams', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg' },
    { name: 'Gmail', logo: 'https://cdn.worldvectorlogo.com/logos/gmail-icon-2.svg' }
  ];

  return (
    <section id="integrations" className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Works With Your Favorite Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate with your existing tech stack
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg h-24 w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={integration.logo} 
                alt={`${integration.name} logo`} 
                className="h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IntegrationsSection;