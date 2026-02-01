import React from 'react';
import { Settings, Zap, Bell } from 'lucide-react';
import { SectionHeading, BodyText, FeatureCard, IconContainer } from './ui';

const HowItWorks = () => {
  const steps = [
    {
      icon: Settings,
      title: "Quick Onboarding",
      description: "Fill in basic details about your business, customize your greeting, and configure FAQs.",
      step: "01"
    },
    {
      icon: Zap,
      title: "Instant Activation",
      description: "Forward your existing number or choose a new one—no developer needed.",
      step: "02"
    },
    {
      icon: Bell,
      title: "Seamless Handling & Notifications",
      description: "Receive instant call summaries, recordings, and real-time notifications via SMS, WhatsApp, or email.",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading size="lg" className="mb-4">
            Simple 3-Step Setup
          </SectionHeading>
          <BodyText size="lg" className="max-w-2xl mx-auto">
            Get your AI receptionist up and running in minutes, not hours
          </BodyText>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <FeatureCard className="h-full">
                <div className="flex items-center justify-between mb-6">
                  <IconContainer Icon={step.icon} />
                  <span className="font-bold text-3xl text-valencia-200">{step.step}</span>
                </div>
                
                <h3 className="font-semibold text-xl text-gray-900 mb-4">
                  {step.title}
                </h3>
                <BodyText className="leading-relaxed">
                  {step.description}
                </BodyText>
              </FeatureCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;