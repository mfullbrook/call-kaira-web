import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Building, HelpCircle, Plus, X, Clock } from 'lucide-react';
import OnboardingProgress from '../components/OnboardingProgress';
import OnboardingBackground from '../components/OnboardingBackground';
import WebsiteLayout from '../layouts/WebsiteLayout';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function OnboardingStep4() {
  const navigate = useNavigate();

  const [companyInfo, setCompanyInfo] = useState({
    industry: 'Professional Services',
    companySize: '1-10 employees',
    overview: 'A growing business focused on providing excellent customer service and professional solutions.',
  });

  const [faqs, setFaqs] = useState<FAQ[]>([
    { id: '1', question: 'What are your business hours?', answer: 'We are open Monday to Friday, 9:00 AM to 6:00 PM.' },
    { id: '2', question: 'How can I schedule an appointment?', answer: 'You can call us directly or use our online booking system.' },
  ]);

  const industries = [
    'Professional Services',
    'Healthcare & Medical',
    'Legal Services',
    'Real Estate',
    'Construction & Trades',
    'Beauty & Wellness',
    'Automotive',
    'Other'
  ];

  const companySizes = [
    'Just me',
    '2-5 employees',
    '6-10 employees',
    '11-25 employees',
    '26-50 employees',
    '51-100 employees',
    '100+ employees'
  ];

  const handleNext = () => {
    // TODO: Save company info and FAQs
    navigate('/onboarding/step-5');
  };

  const handleInputChange = (field: string, value: string) => {
    setCompanyInfo(prev => ({ ...prev, [field]: value }));
  };

  const addFAQ = () => {
    const newFAQ: FAQ = {
      id: Date.now().toString(),
      question: '',
      answer: ''
    };
    setFaqs(prev => [...prev, newFAQ]);
  };

  const removeFAQ = (id: string) => {
    setFaqs(prev => prev.filter(faq => faq.id !== id));
  };

  const updateFAQ = (id: string, field: 'question' | 'answer', value: string) => {
    setFaqs(prev => prev.map(faq =>
      faq.id === id ? { ...faq, [field]: value } : faq
    ));
  };

  return (
    <WebsiteLayout showFooter={false}>
      <OnboardingBackground>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OnboardingProgress currentStep={4} totalSteps={5} />

          <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cerise-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-cerise-500" />
              </div>
              <h1 className="font-lexend font-bold text-3xl text-gray-900 mb-4">
                Business Information
              </h1>
              <p className="font-poppins text-lg text-gray-600">
                Help us understand your business better to provide the best AI assistance
              </p>
            </div>

            <div className="space-y-8">
              {/* Industry */}
              <div>
                <label className="block font-lexend font-medium text-gray-900 mb-2">
                  Industry
                </label>
                <select
                  value={companyInfo.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:border-cerise-500 focus:ring-2 focus:ring-cerise-500"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              {/* Company Size */}
              <div>
                <label className="block font-lexend font-medium text-gray-900 mb-2">
                  Company Size
                </label>
                <select
                  value={companyInfo.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:border-cerise-500 focus:ring-2 focus:ring-cerise-500"
                >
                  {companySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Business Overview */}
              <div>
                <label className="block font-lexend font-medium text-gray-900 mb-2">
                  Business Overview
                </label>
                <textarea
                  value={companyInfo.overview}
                  onChange={(e) => handleInputChange('overview', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:border-cerise-500 focus:ring-2 focus:ring-cerise-500"
                  placeholder="Describe your business, what you do, and what makes you unique..."
                />
              </div>

              {/* FAQs Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <HelpCircle className="h-5 w-5 text-cerise-500" />
                    <h2 className="font-lexend font-semibold text-xl text-gray-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <button
                    onClick={addFAQ}
                    className="flex items-center space-x-2 text-cerise-500 hover:text-cerise-600 font-poppins text-sm"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add FAQ</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {faqs.map(faq => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1 space-y-3">
                          <input
                            type="text"
                            value={faq.question}
                            onChange={(e) => updateFAQ(faq.id, 'question', e.target.value)}
                            placeholder="Question"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:border-cerise-500"
                          />
                          <textarea
                            value={faq.answer}
                            onChange={(e) => updateFAQ(faq.id, 'answer', e.target.value)}
                            placeholder="Answer"
                            rows={2}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:border-cerise-500"
                          />
                        </div>
                        <button
                          onClick={() => removeFAQ(faq.id)}
                          className="ml-2 p-1 text-gray-400 hover:text-red-500"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-cerise-500 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-cerise-600 transition-all duration-300 flex items-center justify-center group"
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
