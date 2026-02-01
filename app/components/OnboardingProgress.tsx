import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router';

interface OnboardingProgressProps {
  currentStep: number;
  totalSteps?: number;
}

const OnboardingProgress: React.FC<OnboardingProgressProps> = ({
  currentStep,
  totalSteps = 5
}) => {
  const navigate = useNavigate();

  const steps = [
    'Company Details',
    'Website',
    'Call Handling',
    'Company Info',
    'Test Your AI'
  ];

  const stepRoutes = [
    '/onboarding/step-1',
    '/onboarding/step-2',
    '/onboarding/step-3',
    '/onboarding/step-4',
    '/onboarding/step-5',
  ];

  const handleStepClick = (stepNumber: number) => {
    if (stepNumber < currentStep) {
      navigate(stepRoutes[stepNumber - 1]);
    }
  };

  // Map totalSteps to Tailwind grid-cols classes
  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
  }[totalSteps] || 'grid-cols-5';

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex items-center">
        <div className={`grid ${gridColsClass} gap-4 w-full`}>
          {steps.slice(0, totalSteps).map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={index} className="flex flex-col items-center">
              <div className="flex flex-col items-center relative w-full">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-200 ${
                  isCompleted
                    ? 'bg-valencia-500 text-white cursor-pointer hover:bg-valencia-600'
                    : isCurrent
                      ? 'bg-valencia-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                }`}
                  onClick={() => handleStepClick(stepNumber)}
                >
                  {isCompleted ? <Check className="h-5 w-5" /> : stepNumber}
                </div>
                <span className={`mt-2 text-xs text-center whitespace-nowrap ${
                  isCurrent ? 'text-valencia-600 font-medium' : 'text-gray-500'
                } max-w-full`}>
                  {step}
                </span>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </div>
  );
};

export default OnboardingProgress;
