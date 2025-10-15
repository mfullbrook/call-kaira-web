import React from 'react';
import { Check } from 'lucide-react';
import {router} from '@inertiajs/react'
import {step1, step2, step3, step4, step5} from "../backend/routes/onboarding";

interface OnboardingProgressProps {
  currentStep: number;
}

const OnboardingProgress: React.FC<OnboardingProgressProps> = ({ currentStep }) => {
  const steps = [
    'Company Details',
    'Website',
    'Call Handling',
    'Company Info',
    'Test Your AI'
  ];

  const stepRoutes = [
    step1(),
    step2(),
    step3(),
    step4(),
    step5(),
  ];

  const handleStepClick = (stepNumber: number) => {
    if (stepNumber < currentStep) {
      router.visit(stepRoutes[stepNumber - 1]);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex items-center">
        <div className="grid grid-cols-5 gap-4 w-full">
          {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={index} className="flex flex-col items-center">
              <div className="flex flex-col items-center relative w-full">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-lexend font-semibold text-sm transition-all duration-200 ${
                  isCompleted
                    ? 'bg-cerise-500 text-white cursor-pointer hover:bg-cerise-600'
                    : isCurrent
                      ? 'bg-cerise-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                }`}
                  onClick={() => handleStepClick(stepNumber)}
                >
                  {isCompleted ? <Check className="h-5 w-5" /> : stepNumber}
                </div>
                <span className={`mt-2 text-xs font-poppins text-center whitespace-nowrap ${
                  isCurrent ? 'text-cerise-600 font-medium' : 'text-gray-500'
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
