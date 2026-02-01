import HeroBackground from '~/components/HeroBackground';
import IphoneMock from '~/components/IphoneMock';
import { PrimaryButton, SecondaryButton, SectionHeading, BodyText } from './ui';
import { useWaitlist } from '~/contexts/WaitlistContext';

const Hero = () => {
  const { openModal } = useWaitlist();
  return (
    <section data-hero className="relative flex items-center overflow-hidden pt-10 sm:pt-14">
      {/* Background decorative elements */}
      <div data-hero-bg-container className="absolute inset-0 w-full h-full overflow-hidden">
        <HeroBackground />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left pb-10">
            <SectionHeading size="xl" className=" font-satoshi mb-6 leading-tight" as="h1">
              Never Miss Another Call,{' '}
              <span className="font-satoshi text-valencia-500">Ever.</span>
            </SectionHeading>
            <BodyText size="lg" className="mb-8 max-w-2xl">
              CallKaira is your 24/7 AI receptionist answering every call instantly, capturing leads,
              scheduling appointments, and providing exceptional customer experiences—no humans needed.
            </BodyText>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <PrimaryButton
                onClick={openModal}
                variant="large"
                className="text-lg"
              >
                Join the Waitlist
              </PrimaryButton>
              {/* <SecondaryButton
                to="#demo"
                className="text-lg"
              >
                Watch Demo
              </SecondaryButton> */}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Early access available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">No commitment required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Be the first to know</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* iPhone Mockup positioned at bottom */}
              <IphoneMock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
