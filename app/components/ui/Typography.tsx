import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className = '',
  size = 'md',
  as: Component = 'h2'
}) => {
  const sizeClasses = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl lg:text-6xl'
  };

  const classes = `font-bold ${sizeClasses[size]} text-gray-900 ${className}`;

  return <Component className={classes}>{children}</Component>;
};

interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'light' | 'white';
  as?: 'p' | 'span' | 'div';
}

export const BodyText: React.FC<BodyTextProps> = ({
  children,
  className = '',
  size = 'md',
  color = 'default',
  as: Component = 'p'
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg sm:text-xl'
  };

  const colorClasses = {
    default: 'text-gray-600',
    light: 'text-gray-700',
    white: 'text-white'
  };

  const classes = `${sizeClasses[size]} ${colorClasses[color]} ${className}`;

  return <Component className={classes}>{children}</Component>;
};