import { ReactNode } from 'react';

interface OnboardingBackgroundProps {
  children: ReactNode;
  className?: string;
}

const OnboardingBackground = ({ children, className = '' }: OnboardingBackgroundProps) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-valencia-50 via-white to-purple-50 py-8 ${className}`}>
      {children}
    </div>
  );
};

export default OnboardingBackground;
