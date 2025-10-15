import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import WebsiteLayout from '../layouts/WebsiteLayout';

export default function PricingPage() {
  return (
    <WebsiteLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cerise-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-lexend font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business needs. No hidden fees, no setup costs,
            and you can change or cancel anytime.
          </p>
        </div>
      </section>

      <Pricing />
      <FAQ />
      <FinalCTA />
    </WebsiteLayout>
  );
}
