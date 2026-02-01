import React from 'react';
import { Wrench, Heart, Scale, ShoppingBag, Building, Scissors } from 'lucide-react';
import { SectionHeading, BodyText, GradientCard, IconContainer } from './ui';

const Professions = () => {
  const professions = [
    {
      icon: Wrench,
      title: "Trades & Home Services",
      subtitle: "Plumbers, electricians, locksmiths, handymen",
      description: "Answers every call 24/7 so you never miss work. Handles FAQs, gives directions, takes structured job enquiries, and triages emergencies.",
      features: [
        "Answers FAQs (pricing ranges, service areas, availability guidance)",
        "Takes structured job enquiries and texts summary + next steps",
        "After-hours: triages urgent calls and can transfer to on-call number",
        "In-hours: can transfer callers directly to you or your team"
      ],
      note: "Great fit if you want fewer voicemails and clearer, actionable leads."
    },
    {
      icon: Heart,
      title: "Clinics & Local Healthcare (admin only)",
      subtitle: "Dental, physio, chiropractic, opticians, veterinary reception",
      description: "Greets patients and answers non-medical FAQs. Captures structured enquiry details and triages urgent situations.",
      features: [
        "Answers non-medical FAQs (hours, location/parking, documents to bring)",
        "Captures structured enquiry details and sends tidy text summary",
        "After-hours: triages urgent situations to on-call number if provided",
        "In-hours: can transfer calls to reception"
      ],
      note: "CallKaira does not provide medical advice or access clinical systems."
    },
    {
      icon: Scale,
      title: "Professional Services",
      subtitle: "Legal, accounting, consulting, design studios, agencies",
      description: "Professional first impression on every call. Gathers structured intake details and manages call routing efficiently.",
      features: [
        "Answers FAQs (services offered, office hours, 'do you take new clients?')",
        "Gathers structured intake details and texts crisp summary",
        "In-hours call transfer to the right person/number",
        "After-hours: captures enquiries and flags time-sensitive matters"
      ],
      note: "Result: cleaner pipeline, fewer interruptions, faster follow-ups."
    },
    {
      icon: ShoppingBag,
      title: "Local Retail & E-Commerce Support",
      subtitle: "Boutiques, repair shops, specialty stores, online sellers",
      description: "Answers common questions and takes structured enquiries. Highlights urgent issues for your attention.",
      features: [
        "Answers 'are you open?', directions, parking, return window questions",
        "Takes structured enquiries and sends text summary",
        "In-hours: can transfer calls to your store line",
        "After-hours: captures interest and highlights urgent issues"
      ],
      note: "No order lookups or payment handling—yet."
    },
    {
      icon: Building,
      title: "Property & Real Estate",
      subtitle: "Lettings, estate agents, property management",
      description: "Handles viewing requests and maintenance reports. Triages property emergencies efficiently.",
      features: [
        "Handles common questions (viewing times, office hours, application steps)",
        "Captures structured viewing requests and maintenance reports",
        "After-hours: triages emergencies to on-call contractor if provided",
        "In-hours: transfers callers to your team"
      ],
      note: "Outcome: faster tenant/buyer routing, fewer repeated calls."
    },
    {
      icon: Scissors,
      title: "Salons, Studios & Appointments",
      subtitle: "Hair, beauty, barbers, fitness, massage",
      description: "Answers service questions and takes structured booking enquiries with clear summaries.",
      features: [
        "Answers hours, location, parking, prep instructions, basic service info",
        "Takes structured booking enquiries and sends clear text summary",
        "In-hours transfer to front desk; after-hours capture requests",
        "Triages time-sensitive requests for priority attention"
      ],
      note: "No calendar access or live scheduling—yet."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading size="lg" className="mb-4">
            Built for real-world calls — today
          </SectionHeading>
          <BodyText size="lg" className="max-w-2xl mx-auto">
            CallKaira answers your phone, handles common questions, knows your opening hours, gives directions, takes structured messages/enquiries, and sends concise summaries with next actions by text.
          </BodyText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professions.map((profession, index) => (
            <GradientCard key={index} variant="cerise" className="hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-4">
                  <IconContainer Icon={profession.icon} className="flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-gray-900 mb-1">
                      {profession.title}
                    </h3>
                    <p className="text-valencia-600 text-sm font-medium mb-3">
                      {profession.subtitle}
                    </p>
                  </div>
                </div>

                <BodyText className="mb-4">
                  {profession.description}
                </BodyText>

                <ul className="space-y-2 mb-4">
                  {profession.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-valencia-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {profession.note && (
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600 italic">
                      {profession.note}
                    </p>
                  </div>
                )}
              </div>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professions;
