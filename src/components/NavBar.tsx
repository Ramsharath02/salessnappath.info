import React from 'react';
import { Activity } from 'lucide-react';
import Container from './Container';
import Button from './Button';

const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">SalesSnapPath</span>
          </div>
          
          <nav className="flex items-center space-x-6">
            <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Benefits
            </a>
            <a href="#preview" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Preview
            </a>
            <Button variant="primary" size="sm">Subscribe Now</Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default NavBar;