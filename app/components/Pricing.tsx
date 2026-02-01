import { Check } from 'lucide-react';
import { PrimaryButton, SecondaryButton, SectionHeading, BodyText, FeatureCard } from './ui';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "£25",
      period: "/month",
      minutes: "100 minutes",
      description: "Perfect for small businesses getting started",
      features: [
        "AI call answering",
        "FAQ handling",
        "Call recording & transcription",
        "Email notifications",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "£45",
      period: "/month",
      minutes: "300 minutes",
      description: "Ideal for growing businesses with higher call volumes",
      features: [
        "Everything in Starter",
        "Appointment scheduling",
        "Multilingual support",
        "SMS & WhatsApp notifications",
        "Calendar integrations",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Pro",
      price: "£85",
      period: "/month",
      minutes: "700 minutes",
      description: "Complete solution for established businesses",
      features: [
        "Everything in Growth",
        "Advanced analytics",
        "CRM integrations",
        "Custom workflows",
        "API access",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading size="lg" className="mb-4">
            Transparent and Affordable Pricing
          </SectionHeading>
          <BodyText size="lg" className="max-w-2xl mx-auto mb-8">
            Choose the plan that fits your business needs. No hidden fees, no setup costs.
          </BodyText>
          <div className="inline-flex items-center bg-valencia-100 text-valencia-700 px-4 py-2 rounded-full font-medium">
            <span>60 Free Minutes — No Credit Card Required</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <FeatureCard key={index} className={`flex flex-col ${plan.popular ? 'ring-2 ring-valencia-500 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="bg-valencia-500 text-white text-center py-2 px-4 -mx-8 -mt-8 mb-8 rounded-t-2xl font-medium">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col flex-1">
                <h3 className="font-semibold text-2xl text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <BodyText className="mb-6">
                  {plan.description}
                </BodyText>

                <div className="flex items-baseline mb-6">
                  <span className="font-bold text-4xl text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>

                <div className="bg-valencia-50 text-valencia-700 px-4 py-2 rounded-lg font-medium text-center mb-6">
                  {plan.minutes}
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-valencia-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.popular ? (
                  <PrimaryButton
                    href="/get-started"
                    className="w-full mt-auto"
                  >
                    Get Started
                  </PrimaryButton>
                ) : (
                  <SecondaryButton
                    href="/get-started"
                    className="w-full mt-auto"
                    showArrow={true}
                  >
                    Get Started
                  </SecondaryButton>
                )}
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
