import React from 'react';
import { Globe, Shield, Zap } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-8' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <Globe className="text-primary-600" size="90%" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Zap className="text-accent-500 transform translate-x-1" size="45%" />
      </div>
    </div>
  );
};