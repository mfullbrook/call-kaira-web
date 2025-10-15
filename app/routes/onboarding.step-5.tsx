import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Phone, ArrowRight, Heart, ThumbsUp, Settings, X } from 'lucide-react';
import OnboardingProgress from '../components/OnboardingProgress';
import OnboardingBackground from '../components/OnboardingBackground';
import WebsiteLayout from '../layouts/WebsiteLayout';

export default function OnboardingStep5() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('UK');
  const [callStatus, setCallStatus] = useState<'waiting' | 'calling' | 'ended'>('waiting');
  const [feedback, setFeedback] = useState<string | null>(null);

  const testNumbers = {
    UK: '+44 20 3808 5555',
    US: '+1 (555) 123-4567',
    EU: '+31 20 123 4567'
  };

  const handleStartTest = () => {
    if (phoneNumber.trim()) {
      // Simulate call flow
      setTimeout(() => setCallStatus('calling'), 1000);
      setTimeout(() => setCallStatus('ended'), 8000);
    }
  };

  const handleFeedback = (type: string) => {
    setFeedback(type);

    // TODO: Send feedback to API
    console.log('User feedback:', type);

    if (type === 'love-it') {
      // TODO: Redirect to sign up with double credits
      alert('Awesome! You\'ll get double the free credits. Redirecting to sign up...');
      // navigate('/signup?credits=double');
    } else if (type === 'like-it') {
      alert('Great! You can continue testing during your trial period.');
      // navigate('/signup');
    } else if (type === 'test-more') {
      navigate('/onboarding/step-3'); // Go back to configurations
    } else if (type === 'not-convinced') {
      alert('No problem! Your data will be deleted. Thanks for trying CallKaira.');
      navigate('/');
    }
  };

  return (
    <WebsiteLayout showFooter={false}>
      <OnboardingBackground>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OnboardingProgress currentStep={5} totalSteps={5} />

          <div className="bg-white rounded-2xl border border-gray-300 p-8 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cerise-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-cerise-500" />
              </div>
              <h1 className="font-lexend font-bold text-3xl text-gray-900 mb-4">
                Test Your AI Assistant
              </h1>
              <p className="font-poppins text-lg text-gray-600">
                Ready to experience CallKaira in action? Give us your phone number and call our test line.
              </p>
            </div>

            {callStatus === 'waiting' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-lexend font-medium text-gray-900 mb-2">
                      Country
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:border-cerise-500 focus:ring-2 focus:ring-cerise-500"
                    >
                      <option value="UK">🇬🇧 UK</option>
                      <option value="US">🇺🇸 US</option>
                      <option value="EU">🇪🇺 EU</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-lexend font-medium text-gray-900 mb-2">
                      Your Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:border-cerise-500 focus:ring-2 focus:ring-cerise-500"
                    />
                  </div>
                </div>

                <div className="bg-cerise-50 rounded-lg p-6">
                  <h3 className="font-lexend font-semibold text-cerise-900 mb-3">
                    Test Number for {country}:
                  </h3>
                  <div className="bg-white rounded-lg p-4 border border-cerise-200">
                    <p className="font-poppins text-2xl font-bold text-cerise-600 text-center">
                      {testNumbers[country as keyof typeof testNumbers]}
                    </p>
                  </div>
                  <p className="font-poppins text-cerise-700 text-sm mt-3 text-center">
                    Call this number to test your AI assistant
                  </p>
                </div>

                <button
                  onClick={handleStartTest}
                  disabled={!phoneNumber.trim()}
                  className="w-full bg-cerise-500 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-cerise-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
                >
                  I'm Ready to Test
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {callStatus === 'calling' && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-cerise-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Phone className="h-12 w-12 text-white" />
                </div>
                <h2 className="font-lexend font-bold text-2xl text-gray-900 mb-4">
                  Call in Progress
                </h2>
                <p className="font-poppins text-lg text-gray-600">
                  Your AI assistant is handling the call...
                </p>
              </div>
            )}

            {callStatus === 'ended' && !feedback && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-lexend font-bold text-2xl text-gray-900 mb-4">
                    How was your call experience?
                  </h2>
                  <p className="font-poppins text-lg text-gray-600">
                    Your feedback helps us improve CallKaira
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleFeedback('love-it')}
                    className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl hover:border-green-300 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Heart className="h-6 w-6 text-green-600" />
                      <h3 className="font-lexend font-semibold text-green-900">
                        Love it! Sign me up now
                      </h3>
                    </div>
                    <p className="font-poppins text-green-700 text-sm">
                      Get double the free credits
                    </p>
                  </button>

                  <button
                    onClick={() => handleFeedback('like-it')}
                    className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl hover:border-blue-300 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <ThumbsUp className="h-6 w-6 text-blue-600" />
                      <h3 className="font-lexend font-semibold text-blue-900">
                        I like it, but want to try more
                      </h3>
                    </div>
                    <p className="font-poppins text-blue-700 text-sm">
                      Continue with your trial
                    </p>
                  </button>

                  <button
                    onClick={() => handleFeedback('test-more')}
                    className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-xl hover:border-orange-300 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Settings className="h-6 w-6 text-orange-600" />
                      <h3 className="font-lexend font-semibold text-orange-900">
                        I want to test more configurations
                      </h3>
                    </div>
                    <p className="font-poppins text-orange-700 text-sm">
                      Go back and adjust settings
                    </p>
                  </button>

                  <button
                    onClick={() => handleFeedback('not-convinced')}
                    className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <X className="h-6 w-6 text-gray-600" />
                      <h3 className="font-lexend font-semibold text-gray-900">
                        Not convinced, delete my data
                      </h3>
                    </div>
                    <p className="font-poppins text-gray-700 text-sm">
                      I'll stick with regular voicemail
                    </p>
                  </button>
                </div>
              </div>
            )}

            {feedback && (
              <div className="text-center py-12">
                <h2 className="font-lexend font-bold text-2xl text-gray-900 mb-4">
                  Thank you for your feedback!
                </h2>
                <p className="font-poppins text-lg text-gray-600">
                  We appreciate you taking the time to test CallKaira.
                </p>
              </div>
            )}
          </div>
        </div>
      </OnboardingBackground>
    </WebsiteLayout>
  );
}
