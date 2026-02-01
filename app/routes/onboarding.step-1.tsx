import { useCallback, memo } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, User } from 'lucide-react';
import OnboardingProgress from '../components/OnboardingProgress';
import OnboardingBackground from '../components/OnboardingBackground';
import Step1Form from '../components/onboarding/Step1Form';
import { countriesDictToArray } from '@mfullbrook/call-kaira-frontend-commons';
import WebsiteLayout from '../layouts/WebsiteLayout';

// Memoized component to prevent unnecessary re-renders
const SectionUseAsIndividual = memo(({ onClick }: { onClick: () => void }) => (
  <div className="mt-8 pt-8 border-t border-gray-200">
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-gray-50 to-valencia-50 rounded-xl p-6 cursor-pointer hover:shadow-md transition-all duration-300 border border-gray-200"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-valencia-500 rounded-xl flex items-center justify-center">
          <User className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">
            Use CallKaira as an individual
          </h3>
          <p className="text-gray-600 text-sm">
            Perfect for freelancers and solo professionals
          </p>
        </div>
        <ArrowRight className="h-5 w-5 text-valencia-500 ml-auto" />
      </div>
    </div>
  </div>
));

SectionUseAsIndividual.displayName = 'SectionUseAsIndividual';

export default function OnboardingStep1() {
  const navigate = useNavigate();

  // TODO: Fetch supported countries and onboarding data from API
  const supportedCountries = {
    'GB': 'United Kingdom',
    'US': 'United States'
  };

  const onboarding = {
    country: null,
    businessName: null,
    placeId: null
  };

  const handleIndividualFlow = useCallback(() => {
    // TODO: For now, redirect to step 2 - individual flow can be implemented later
    navigate('/onboarding/step-2');
  }, [navigate]);

  return (
    <WebsiteLayout showFooter={false}>
      <OnboardingBackground>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OnboardingProgress currentStep={1} totalSteps={5} />

          <div className="bg-white rounded-2xl border border-gray-300 p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="font-bold text-3xl text-gray-900 mb-4">
                Let's Get Started
              </h1>
              <p className="text-lg text-gray-600">
                Tell us about your business so we can customize CallKaira for you
              </p>
            </div>

            <Step1Form
              supportedCountries={countriesDictToArray(supportedCountries)}
              onboarding={onboarding}
            />

            <SectionUseAsIndividual onClick={handleIndividualFlow} />
          </div>
        </div>
      </OnboardingBackground>
    </WebsiteLayout>
  );
}
