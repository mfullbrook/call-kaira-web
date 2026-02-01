import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  children,
  className = '',
  padding = 'lg',
  shadow = 'lg',
  hover = true
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6', 
    lg: 'p-8'
  };

  const shadowClasses = {
    sm: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-lg'
  };

  const hoverClass = hover ? 'hover:shadow-xl transition-all duration-300' : '';

  const classes = `bg-white rounded-2xl ${paddingClasses[padding]} ${shadowClasses[shadow]} ${hoverClass} ${className}`;

  return <div className={classes}>{children}</div>;
};

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'cerise' | 'gray' | 'blue';
  padding?: 'sm' | 'md' | 'lg';
}

export const GradientCard: React.FC<GradientCardProps> = ({
  children,
  className = '',
  variant = 'cerise',
  padding = 'lg'
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const gradientClasses = {
    cerise: 'bg-gradient-to-br from-gray-50 to-valencia-50',
    gray: 'bg-gradient-to-br from-gray-50 to-gray-100', 
    blue: 'bg-gradient-to-br from-blue-50 to-indigo-50'
  };

  const classes = `${gradientClasses[variant]} rounded-2xl ${paddingClasses[padding]} ${className}`;

  return <div className={classes}>{children}</div>;
};

interface StepCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  step: string;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  Icon,
  title,
  description,
  step,
  className = ''
}) => {
  return (
    <FeatureCard className={`h-full ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 bg-valencia-500 rounded-xl flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span className="font-bold text-3xl text-valencia-200">{step}</span>
      </div>
      
      <h3 className="font-semibold text-xl text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </FeatureCard>
  );
};