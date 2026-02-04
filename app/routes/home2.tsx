import type { Route } from './+types/home2';
import { DarkNavbar } from '~/components/home/DarkNavbar';
import { DarkFooter } from '~/components/home/DarkFooter';
import { HeroSection } from '~/components/home/HeroSection';
import { StatsSection } from '~/components/home/StatsSection';
import { ProblemSection } from '~/components/home/ProblemSection';
import { HowItWorksSection } from '~/components/home/HowItWorksSection';
import { HearRobinSection } from '~/components/home/HearRobinSection';
import { FeaturesBentoSection } from '~/components/home/FeaturesBentoSection';
import { IcpHighlightSection } from '~/components/home/IcpHighlightSection';
import { Testimonials } from '~/components/Testimonials';
import { SetupStepsSection } from '~/components/home/SetupStepsSection';
import { PricingSection } from '~/components/home/PricingSection';
import { FAQSection } from '~/components/home/FAQSection';
import { CTASection } from '~/components/home/CTASection';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CallKaira - AI Voice Answering for UK Businesses' },
    {
      name: 'description',
      content: 'AI voice answering that feels human. Robin answers 24/7, filters spam, and sends you concise summaries instantly via WhatsApp.',
    },
  ];
}

export default function Home2() {
  return (
    <div className="dark-theme bg-[#0B0F19] text-[#F8FAFC] antialiased selection:bg-[#D9342B] selection:text-white overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-grid-subtle pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <DarkNavbar />

        <main className="flex-1">
          <HeroSection />
          <StatsSection />
          <ProblemSection />
          <HowItWorksSection />
          <HearRobinSection />
          <FeaturesBentoSection />
          <IcpHighlightSection />
          <Testimonials />
          <SetupStepsSection />
          <PricingSection />
          <FAQSection />
          <CTASection />
        </main>

        <DarkFooter />
      </div>
    </div>
  );
}
