import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface IconContainerProps {
  Icon: LucideIcon;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'cerise' | 'white' | 'gray';
}

export const IconContainer: React.FC<IconContainerProps> = ({
  Icon,
  className = '',
  size = 'md',
  variant = 'cerise'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  const variantClasses = {
    cerise: 'bg-valencia-500 text-white',
    white: 'bg-white text-valencia-500',
    gray: 'bg-gray-100 text-gray-600'
  };

  return (
    <div className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-xl flex items-center justify-center ${className}`}>
      <Icon className={iconSizeClasses[size]} />
    </div>
  );
};
