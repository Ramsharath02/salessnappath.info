import React from 'react';
import { Activity } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Activity className="h-6 w-6 text-blue-600" />
      <span className="text-xl font-bold text-gray-900">SalesSnapPath</span>
    </div>
  );
};

export default Logo;