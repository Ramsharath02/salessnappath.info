import React, { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Snap Into Smarter Sales—Weekly Strategies Delivered
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join 10,000+ sales professionals receiving actionable insights, proven templates, 
            and winning strategies—delivered fresh to your inbox every Tuesday.
          </p>

          {isSubscribed ? (
            <div className="bg-green-50 p-6 rounded-lg border border-green-100 animate-fade-in">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Welcome to the SalesSnapPath Community!
              </h3>
              <p className="text-gray-600">
                Check your inbox for a confirmation email and your first sales insight package.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <Button type="submit" variant="primary" className="flex-shrink-0">
                  Subscribe <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          )}

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
            <span className="flex items-center">
              <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
              Free Weekly Newsletter
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
              Unsubscribe Anytime
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
              No Spam
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;