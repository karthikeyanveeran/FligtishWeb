import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  animate?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  interactive = false,
  animate = true,
}) => {
  const baseClasses = "bg-white rounded-lg shadow-card overflow-hidden";
  const interactiveClasses = interactive 
    ? "cursor-pointer transition-all hover:shadow-card-hover transform hover:-translate-y-1" 
    : "";

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(baseClasses, interactiveClasses, className)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cn(baseClasses, interactiveClasses, className)}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn("px-6 py-4 border-b border-gray-100", className)}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => {
  return (
    <h3 className={cn("text-lg font-semibold text-primary-800", className)}>
      {children}
    </h3>
  );
};

export const CardDescription: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => {
  return (
    <p className={cn("text-sm text-secondary-600 mt-1", className)}>
      {children}
    </p>
  );
};

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn("px-6 py-4", className)}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn("px-6 py-4 border-t border-gray-100 bg-gray-50", className)}>
      {children}
    </div>
  );
};