import { User, Users, Phone, Clock, Moon, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import WebsiteLayout from '../layouts/WebsiteLayout';

export default function Solutions() {
  const useCases = [
    {
      icon: User,
      title: "Just You",
      description: "Perfect for solo professionals who need reliable call handling",
      features: [
        "Personal call screening",
        "Message taking and forwarding",
        "Appointment scheduling",
        "Emergency call routing"
      ]
    },
    {
      icon: Users,
      title: "As a Receptionist",
      description: "Professional front desk experience for your business",
      features: [
        "Professional greeting and branding",
        "Call routing to team members",
        "Lead qualification and capture",
        "Multi-department handling"
      ]
    }
  ];

  const options = [
    {
      icon: Phone,
      title: "AI Answers All Calls",
      description: "Complete call handling solution - every call is answered professionally",
      benefits: [
        "24/7 availability",
        "Consistent professional service",
        "No missed opportunities",
        "Reduced operational costs"
      ],
      popular: true
    },
    {
      icon: Clock,
      title: "Handle Missed Calls",
      description: "Smart alternative to voicemail - AI calls back missed callers",
      benefits: [
        "Proactive customer service",
        "Better than voicemail",
        "Captures leads you'd otherwise lose",
        "Maintains personal touch"
      ],
      popular: false
    },
    {
      icon: Moon,
      title: "Out of Hours Coverage",
      description: "After-hours and weekend call handling when you're unavailable",
      benefits: [
        "Never miss urgent calls",
        "Emergency call routing",
        "Weekend and holiday coverage",
        "Work-life balance protection"
      ],
      popular: false
    }
  ];

  return (
    <WebsiteLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cerise-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-lexend font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            AI Call Solutions for Every Business Need
          </h1>
          <p className="font-poppins text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how CallKaira's AI can transform your call handling with flexible solutions
            tailored to your specific requirements.
          </p>
        </div>
      </section>

      {/* AI is answering for */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-lexend font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              AI is Answering For
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're a solo professional or managing a team, CallKaira adapts to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-cerise-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-cerise-500 rounded-2xl flex items-center justify-center mb-6">
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-lexend font-semibold text-2xl text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="font-poppins text-gray-600 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cerise-500 flex-shrink-0" />
                      <span className="font-poppins text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-lexend font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Choose Your Call Handling Option
            </h2>
            <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible solutions that work exactly how you want them to
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {options.map((option, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${option.popular ? 'ring-2 ring-cerise-500 transform scale-105' : ''}`}>
                {option.popular && (
                  <div className="bg-cerise-500 text-white text-center py-2 px-4 rounded-t-2xl font-poppins font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="w-12 h-12 bg-cerise-500 rounded-xl flex items-center justify-center mb-6">
                    <option.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="font-lexend font-semibold text-xl text-gray-900 mb-4">
                    {option.title}
                  </h3>
                  <p className="font-poppins text-gray-600 mb-6">
                    {option.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-cerise-500 mt-0.5 flex-shrink-0" />
                        <span className="font-poppins text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/onboarding"
                    className={`w-full py-3 px-6 rounded-full font-poppins font-semibold transition-all duration-300 flex items-center justify-center group ${
                      option.popular
                        ? 'bg-cerise-500 text-white hover:bg-cerise-600'
                        : 'border-2 border-cerise-500 text-cerise-500 hover:bg-cerise-500 hover:text-white'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cerise-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-lexend font-bold text-3xl sm:text-4xl mb-6">
            Ready to Choose Your Solution?
          </h2>
          <p className="font-poppins text-xl mb-8 opacity-90">
            Start your free trial today and see which option works best for your business
          </p>

          <Link
            to="/onboarding"
            className="inline-flex items-center bg-white text-cerise-500 px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </WebsiteLayout>
  );
}
