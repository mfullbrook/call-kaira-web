import {
  Heart,
  Users,
  Zap,
  Hammer,
  Droplets,
  Sparkles,
  Scissors,
  Building,
  Home,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router';
import WebsiteLayout from '../layouts/WebsiteLayout';

export default function BuiltForYou() {
  const industries = [
    {
      icon: Heart,
      title: "Medical Practices",
      subtitle: "Dental, Physio, Veterinary",
      description: "HIPAA-compliant patient communication and appointment scheduling",
      workflows: [
        "Patient appointment booking",
        "Medical FAQ handling",
        "Emergency call routing",
        "Insurance verification support",
        "Prescription refill requests"
      ]
    },
    {
      icon: Users,
      title: "Recruitment",
      subtitle: "Staffing & HR Services",
      description: "Candidate screening and client communication automation",
      workflows: [
        "Initial candidate screening",
        "Interview scheduling",
        "Job inquiry handling",
        "Client consultation booking",
        "Reference check coordination"
      ]
    },
    {
      icon: Zap,
      title: "Electricians",
      subtitle: "Electrical Services",
      description: "Emergency call handling and service appointment management",
      workflows: [
        "Emergency electrical calls",
        "Service appointment booking",
        "Quote request handling",
        "Safety inspection scheduling",
        "Follow-up service calls"
      ]
    },
    {
      icon: Hammer,
      title: "Construction",
      subtitle: "Contractors & Builders",
      description: "Project inquiries and consultation scheduling",
      workflows: [
        "Project consultation booking",
        "Quote request processing",
        "Site visit scheduling",
        "Permit inquiry handling",
        "Progress update calls"
      ]
    },
    {
      icon: Droplets,
      title: "Plumbing",
      subtitle: "Plumbing Services",
      description: "24/7 emergency response and routine service booking",
      workflows: [
        "Emergency plumbing calls",
        "Routine maintenance booking",
        "Leak detection scheduling",
        "Installation consultations",
        "Water heater service calls"
      ]
    },
    {
      icon: Sparkles,
      title: "Window Cleaners",
      subtitle: "Cleaning Services",
      description: "Regular service scheduling and customer management",
      workflows: [
        "Regular cleaning schedules",
        "One-time service booking",
        "Quote requests",
        "Service area inquiries",
        "Seasonal service planning"
      ]
    },
    {
      icon: Scissors,
      title: "Salons",
      subtitle: "Beauty & Wellness",
      description: "Appointment booking and customer service automation",
      workflows: [
        "Appointment scheduling",
        "Service inquiries",
        "Cancellation handling",
        "Product availability",
        "Special event booking"
      ]
    },
    {
      icon: Building,
      title: "Property Management",
      subtitle: "Real Estate Management",
      description: "Tenant communication and maintenance request handling",
      workflows: [
        "Maintenance request intake",
        "Tenant inquiry handling",
        "Lease inquiry processing",
        "Emergency property calls",
        "Inspection scheduling"
      ]
    },
    {
      icon: Home,
      title: "Real Estate",
      subtitle: "Property Sales & Rentals",
      description: "Lead capture and showing appointment coordination",
      workflows: [
        "Property showing scheduling",
        "Lead qualification",
        "Market inquiry handling",
        "Open house coordination",
        "Buyer consultation booking"
      ]
    }
  ];

  return (
    <WebsiteLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-valencia-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Pre-Configured for Your Industry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            CallKaira comes with specialized workflows and templates designed specifically
            for your industry's unique needs and requirements.
          </p>
          <div className="inline-flex items-center bg-valencia-100 text-valencia-700 px-6 py-3 rounded-full font-medium">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>Ready-to-use industry templates included</span>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Specialized Solutions by Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each industry template includes custom greetings, FAQs, and workflows
              tailored to your specific business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-valencia-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-valencia-500 rounded-xl flex items-center justify-center mb-6">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-valencia-600 text-sm font-medium mb-4">
                  {industry.subtitle}
                </p>
                <p className="text-gray-600 mb-6">
                  {industry.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 text-sm mb-3">
                    Pre-configured workflows:
                  </h4>
                  <ul className="space-y-2">
                    {industry.workflows.slice(0, 3).map((workflow, workflowIndex) => (
                      <li key={workflowIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-valencia-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{workflow}</span>
                      </li>
                    ))}
                    {industry.workflows.length > 3 && (
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-valencia-300 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-500">
                          +{industry.workflows.length - 3} more workflows
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              What's Included in Every Industry Template
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-valencia-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-valencia-500" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Custom Greetings
              </h3>
              <p className="text-gray-600 text-sm">
                Industry-specific professional greetings that sound natural
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-valencia-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-valencia-500" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Smart FAQs
              </h3>
              <p className="text-gray-600 text-sm">
                Pre-loaded with common questions specific to your industry
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-valencia-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-valencia-500" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Workflow Automation
              </h3>
              <p className="text-gray-600 text-sm">
                Automated processes for booking, screening, and routing
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-12 h-12 bg-valencia-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building className="h-6 w-6 text-valencia-500" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Compliance Ready
              </h3>
              <p className="text-gray-600 text-sm">
                Built-in compliance features for regulated industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-valencia-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl sm:text-4xl mb-6">
            Ready to Get Started with Your Industry Template?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your industry and get up and running in minutes with pre-configured workflows
          </p>

          <Link
            to="/onboarding"
            className="inline-flex items-center bg-white text-valencia-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </WebsiteLayout>
  );
}
