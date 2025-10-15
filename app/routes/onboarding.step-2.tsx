import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Globe } from 'lucide-react';
import OnboardingProgress from '../components/OnboardingProgress';
import OnboardingBackground from '../components/OnboardingBackground';
import LearningProgress from '../components/LearningProgress';
import WebsiteLayout from '../layouts/WebsiteLayout';
import SubmitButton from '../components/onboarding/SubmitButton';

interface ProgressItem {
  id: string;
  label: string;
  completed: boolean;
  stage?: string;
}

export default function OnboardingStep2() {
  const navigate = useNavigate();
  const [website, setWebsite] = useState('');
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);
  const [websiteCrawlStarted, setWebsiteCrawlStarted] = useState(false);
  const [websiteCrawlId, setWebsiteCrawlId] = useState<number | undefined>(undefined);
  const [progressItems, setProgressItems] = useState<ProgressItem[]>([
    { id: 'fetching', label: 'Fetching website map', completed: false, stage: 'fetching' },
    { id: 'scraping', label: 'Scraping web pages', completed: false, stage: 'scraping' },
    { id: 'extracting', label: 'Extracting data about your business', completed: false, stage: 'extracting' },
    { id: 'configuring', label: 'Configuring your Kaira assistant', completed: false, stage: 'configuring' },
  ]);

  const validateUrl = (url: string): boolean => {
    try {
      const formattedUrl = formatWebsiteUrl(url);
      new URL(formattedUrl);
      return true;
    } catch {
      return false;
    }
  };

  const formatWebsiteUrl = (url: string) => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return `https://${url}`;
    }
    return url;
  };

  const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWebsite(value);
    setError('');

    if (value.trim() && !validateUrl(value)) {
      setError('Please enter a valid website address e.g. www.example.com');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    try {
      // TODO: Make API call to start website crawl
      // const response = await api.updateWebsite({
      //   business_website: formatWebsiteUrl(website)
      // });
      // setWebsiteCrawlId(response.website_crawl.id);

      // For now, simulate the crawl start
      setWebsiteCrawlStarted(true);
    } catch (error) {
      console.error('Error starting website crawl:', error);
      setError('Failed to start website analysis. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const handleItemComplete = (itemId: string) => {
    setProgressItems(prev =>
      prev.map(item =>
        item.id === itemId
          ? { ...item, completed: true }
          : item
      )
    );
  };

  const handleAllComplete = () => {
    navigate('/onboarding/step-3');
  };

  const handleSkip = () => {
    navigate('/onboarding/step-3');
  };

  return (
    <WebsiteLayout showFooter={false}>
      <OnboardingBackground>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OnboardingProgress currentStep={2} totalSteps={5} />

          <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cerise-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-cerise-500" />
              </div>
              <h1 className="font-lexend font-bold text-3xl text-gray-900 mb-4">
                Your Website
              </h1>
              <p className="font-poppins text-lg text-gray-600">
                We'll analyze your website to understand your business and create a personalized AI assistant
              </p>
            </div>

            {!websiteCrawlStarted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-lexend font-medium text-gray-900 mb-2">
                    Website Address
                  </label>
                  <input
                    type="url"
                    name="business_website"
                    value={website}
                    onChange={handleWebsiteChange}
                    placeholder="www.yourcompany.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins focus:outline-none focus:border-cerise-500 focus:ring-2 focus:ring-cerise-500"
                  />
                  {error && (
                    <p className="mt-2 text-red-600 font-poppins text-sm">
                      {error}
                    </p>
                  )}
                </div>

                <SubmitButton
                  type="submit"
                  disabled={!website.trim() || !validateUrl(website)}
                  processing={processing}
                  text="Begin AI Extraction"
                  processingText="Scraping..."
                />

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="text-gray-500 hover:text-cerise-500 font-poppins text-sm underline inline-flex items-center"
                  >
                    I don't have a website yet, skip this step for now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <LearningProgress
                  items={progressItems}
                  onItemComplete={handleItemComplete}
                  onAllComplete={handleAllComplete}
                  startFromIndex={0}
                  websiteCrawlId={websiteCrawlId}
                  onError={(error) => {
                    console.error('LearningProgress error:', error);
                    setError('An error occurred during website analysis. Please try again.');
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </OnboardingBackground>
    </WebsiteLayout>
  );
}
