// import React, { useState } from 'react';
// import Container from '../components/Container';
// import Button from '../components/Button';
// import { Check } from 'lucide-react';

// interface PricingFeature {
//   name: string;
//   starter: boolean;
//   professional: boolean;
//   enterprise: boolean;
// }

// interface PricingPlan {
//   name: string;
//   description: string;
//   price: string;
//   period: string;
//   buttonText: string;
//   buttonVariant: 'primary' | 'secondary' | 'outline';
//   popular?: boolean;
// }

// const PricingSection: React.FC = () => {
//   const [annual, setAnnual] = useState(true);
  
//   const pricingPlans: PricingPlan[] = [
//     {
//       name: 'Starter',
//       description: 'Everything you need to get started with basic sales automation',
//       price: annual ? '$49' : '$59',
//       period: annual ? '/month, billed annually' : '/month, billed monthly',
//       buttonText: 'Start Free Trial',
//       buttonVariant: 'outline'
//     },
//     {
//       name: 'Professional',
//       description: 'Advanced features for growing sales teams with higher volume',
//       price: annual ? '$99' : '$119',
//       period: annual ? '/month, billed annually' : '/month, billed monthly',
//       buttonText: 'Start Free Trial',
//       buttonVariant: 'primary',
//       popular: true
//     },
//     {
//       name: 'Enterprise',
//       description: 'Custom solutions for large teams with complex sales processes',
//       price: annual ? '$249' : '$299',
//       period: annual ? '/month, billed annually' : '/month, billed monthly',
//       buttonText: 'Contact Sales',
//       buttonVariant: 'outline'
//     }
//   ];
  
//   const features: PricingFeature[] = [
//     { name: 'Lead tracking', starter: true, professional: true, enterprise: true },
//     { name: 'Email templates', starter: true, professional: true, enterprise: true },
//     { name: 'Basic automation', starter: true, professional: true, enterprise: true },
//     { name: 'Pipeline analytics', starter: false, professional: true, enterprise: true },
//     { name: 'AI follow-ups', starter: false, professional: true, enterprise: true },
//     { name: 'Custom workflows', starter: false, professional: false, enterprise: true },
//     { name: 'API access', starter: false, professional: false, enterprise: true },
//     { name: 'Dedicated support', starter: false, professional: false, enterprise: true },
//   ];

//   return (
//     <section id="pricing" className="py-16 bg-gray-50">
//       <Container>
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Simple, Transparent Pricing
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Choose the plan that works best for your team
//           </p>
          
//           <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg mt-8">
//             <button
//               onClick={() => setAnnual(true)}
//               className={`px-4 py-2 text-sm rounded-md transition-colors ${
//                 annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
//               }`}
//             >
//               Annual Billing (20% off)
//             </button>
//             <button
//               onClick={() => setAnnual(false)}
//               className={`px-4 py-2 text-sm rounded-md transition-colors ${
//                 !annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
//               }`}
//             >
//               Monthly Billing
//             </button>
//           </div>
//         </div>
        
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {pricingPlans.map((plan, index) => (
//             <div 
//               key={index}
//               className={`bg-white rounded-xl shadow-sm border overflow-hidden transition-transform hover:scale-105 ${
//                 plan.popular ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200'
//               }`}
//             >
//               {plan.popular && (
//                 <div className="bg-blue-500 text-white text-center py-1.5 text-sm font-medium">
//                   Most Popular
//                 </div>
//               )}
              
//               <div className="p-8">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
//                 <p className="text-gray-600 mb-6">{plan.description}</p>
                
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
//                   <span className="text-gray-600 ml-1">{plan.period}</span>
//                 </div>
                
//                 <Button 
//                   variant={plan.buttonVariant} 
//                   className="w-full mb-6"
//                 >
//                   {plan.buttonText}
//                 </Button>
                
//                 <ul className="space-y-3">
//                   {features.map((feature, featureIndex) => {
//                     const included = plan.name === 'Starter' ? feature.starter :
//                                     plan.name === 'Professional' ? feature.professional :
//                                     feature.enterprise;
                    
//                     return (
//                       <li 
//                         key={featureIndex} 
//                         className={`flex items-center ${included ? 'text-gray-700' : 'text-gray-400'}`}
//                       >
//                         <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${included ? 'text-blue-500' : 'text-gray-300'}`} />
//                         <span>{feature.name}</span>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

export default PricingSection;
