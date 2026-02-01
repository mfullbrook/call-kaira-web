import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, User, Users, Phone, Clock, Moon, Check } from 'lucide-react';
import OnboardingProgress from '../components/OnboardingProgress';
import OnboardingBackground from '../components/OnboardingBackground';
import WebsiteLayout from '../layouts/WebsiteLayout';

export default function OnboardingStep3() {
  const navigate = useNavigate();
  const [answeringFor, setAnsweringFor] = useState<'individual' | 'receptionist'>('individual');
  const [callOption, setCallOption] = useState<'all' | 'missed' | 'hours'>('all');
  const [callFeatures, setCallFeatures] = useState<string[]>(['hours']);

  const handleNext = () => {
    // TODO: Save selections to API
    navigate('/onboarding/step-4');
  };

  const toggleCallFeature = (feature: string) => {
    setCallFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <WebsiteLayout showFooter={false}>
      <OnboardingBackground>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OnboardingProgress currentStep={3} totalSteps={5} />

          <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="font-bold text-3xl text-gray-900 mb-4">
                Call Handling Features
              </h1>
              <p className="text-lg text-gray-600">
                Configure how you want CallKaira to handle your calls
              </p>
            </div>

            <div className="space-y-8">
              {/* AI is answering for */}
              <div>
                <h2 className="font-semibold text-xl text-gray-900 mb-4">
                  AI is answering for:
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div
                    onClick={() => setAnsweringFor('individual')}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      answeringFor === 'individual'
                        ? 'border-valencia-500 bg-valencia-50'
                        : 'border-gray-200 hover:border-valencia-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <User className={`h-6 w-6 ${answeringFor === 'individual' ? 'text-valencia-500' : 'text-gray-500'}`} />
                      <h3 className="font-semibold text-lg text-gray-900">
                        Just you
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Perfect for solo professionals who need reliable call handling
                    </p>
                  </div>

                  <div
                    onClick={() => setAnsweringFor('receptionist')}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      answeringFor === 'receptionist'
                        ? 'border-valencia-500 bg-valencia-50'
                        : 'border-gray-200 hover:border-valencia-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <Users className={`h-6 w-6 ${answeringFor === 'receptionist' ? 'text-valencia-500' : 'text-gray-500'}`} />
                      <h3 className="font-semibold text-lg text-gray-900">
                        As a receptionist
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Professional front desk experience for your business
                    </p>
                  </div>
                </div>
              </div>

              {/* Call handling options */}
              <div>
                <h2 className="font-semibold text-xl text-gray-900 mb-4">
                  Then Kyra answers the call:
                </h2>
                <div className="space-y-4">
                  <div
                    onClick={() => setCallOption('all')}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      callOption === 'all'
                        ? 'border-valencia-500 bg-valencia-50'
                        : 'border-gray-200 hover:border-valencia-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Phone className={`h-6 w-6 ${callOption === 'all' ? 'text-valencia-500' : 'text-gray-500'}`} />
                      <h3 className="font-semibold text-lg text-gray-900">
                        AI to answer all calls
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Complete call handling solution - every call is answered professionally
                    </p>
                  </div>

                  <div
                    onClick={() => setCallOption('missed')}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      callOption === 'missed'
                        ? 'border-valencia-500 bg-valencia-50'
                        : 'border-gray-200 hover:border-valencia-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className={`h-6 w-6 ${callOption === 'missed' ? 'text-valencia-500' : 'text-gray-500'}`} />
                      <h3 className="font-semibold text-lg text-gray-900">
                        AI to handle missed calls instead of voicemail
                      </h3>
                      <span className="bg-valencia-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                    <p className="text-gray-600">
                      Smart alternative to voicemail - AI can answer frequently asked questions and capture leads effectively
                    </p>
                  </div>
                </div>
              </div>

              {/* Call handling features */}
              <div>
                <h2 className="font-semibold text-xl text-gray-900 mb-4">
                  Call handling features:
                </h2>
                <div className="space-y-4">
                  <div
                    onClick={() => toggleCallFeature('hours')}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      callFeatures.includes('hours')
                        ? 'border-valencia-500 bg-valencia-50'
                        : 'border-gray-200 hover:border-valencia-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                        callFeatures.includes('hours')
                          ? 'bg-valencia-500 border-valencia-500'
                          : 'border-gray-400'
                      }`}>
                        {callFeatures.includes('hours') && (
                          <Check className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <Moon className={`h-6 w-6 ${callFeatures.includes('hours') ? 'text-valencia-500' : 'text-gray-500'}`} />
                      <h3 className="font-semibold text-lg text-gray-900">
                        AI to handle out of hours calls
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      After-hours and weekend call handling when you're unavailable
                    </p>
                  </div>

                  <div
                    onClick={() => toggleCallFeature('urgent')}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      callFeatures.includes('urgent')
                        ? 'border-valencia-500 bg-valencia-50'
                        : 'border-gray-200 hover:border-valencia-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                        callFeatures.includes('urgent')
                          ? 'bg-valencia-500 border-valencia-500'
                          : 'border-gray-400'
                      }`}>
                        {callFeatures.includes('urgent') && (
                          <Check className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <Phone className={`h-6 w-6 ${callFeatures.includes('urgent') ? 'text-valencia-500' : 'text-gray-500'}`} />
                      <h3 className="font-semibold text-lg text-gray-900">
                        Transfer urgent calls
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Automatically transfer urgent or priority calls to your phone when available
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-valencia-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-valencia-600 transition-all duration-300 flex items-center justify-center group"
              >
                Continue
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </OnboardingBackground>
    </WebsiteLayout>
  );
}
