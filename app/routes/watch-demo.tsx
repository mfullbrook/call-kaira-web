import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import { Link } from 'react-router';
import WebsiteLayout from '../layouts/WebsiteLayout';

export default function WatchDemo() {
  const demoFeatures = [
    {
      title: "Natural Conversation Flow",
      description: "See how CallKaira handles complex customer inquiries with natural, human-like responses"
    },
    {
      title: "Smart Call Routing",
      description: "Watch AI intelligently decide when to transfer urgent calls and when to handle them directly"
    },
    {
      title: "Lead Capture",
      description: "See how every important customer detail is captured and organized automatically"
    },
    {
      title: "Multi-language Support",
      description: "Demonstration of CallKaira handling calls in multiple languages seamlessly"
    }
  ];

  const realScenarios = [
    "Emergency plumbing call with immediate routing",
    "Routine appointment scheduling for a salon",
    "Price inquiry for construction project",
    "After-hours medical practice call handling"
  ];

  return (
    <WebsiteLayout>
      {/* Hero Section with Video */}
      <section className="py-20 bg-gradient-to-br from-cerise-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-lexend font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              See CallKaira in Action
            </h1>
            <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how CallKaira transforms your business calls with AI-powered conversations
              that sound completely natural and professional.
            </p>
          </div>

          {/* YouTube Video Player */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Placeholder - Replace with actual YouTube embed */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-center">
                  <div className="w-20 h-20 bg-cerise-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-cerise-600 transition-colors cursor-pointer">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <p className="text-white font-poppins text-lg">CallKaira Demo Video</p>
                  <p className="text-gray-300 font-poppins text-sm mt-2">Click to play</p>
                </div>
              </div>

              {/* Uncomment and replace with actual YouTube video ID when ready */}
              {/*
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="CallKaira Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>
          </div>

          {/* Video Stats */}
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 mb-16">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cerise-500 rounded-full"></div>
              <span className="font-poppins">3 minute demo</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cerise-500 rounded-full"></div>
              <span className="font-poppins">Real call examples</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cerise-500 rounded-full"></div>
              <span className="font-poppins">No signup required</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll See Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-lexend font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              What You'll See in the Demo
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
              Get a complete overview of CallKaira's capabilities and see real examples of AI handling business calls
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {demoFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-cerise-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cerise-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-lexend font-semibold text-xl text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-poppins text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Real Scenarios */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-lexend font-semibold text-2xl text-gray-900 mb-6 text-center">
              Real Business Scenarios Demonstrated
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {realScenarios.map((scenario, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cerise-500 rounded-full flex-shrink-0"></div>
                  <span className="font-poppins text-gray-700">{scenario}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cerise-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-lexend font-bold text-3xl sm:text-4xl mb-6">
            Ready to Try CallKaira for Your Business?
          </h2>
          <p className="font-poppins text-xl mb-8 opacity-90">
            Start your free trial today and experience the difference AI can make
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/onboarding"
              className="inline-flex items-center bg-white text-cerise-500 px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-white hover:text-cerise-500 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </WebsiteLayout>
  );
}
