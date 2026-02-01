import React from 'react';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import WaitlistModal from '~/components/WaitlistModal';
import { WaitlistProvider, useWaitlist } from '~/contexts/WaitlistContext';

interface WebsiteLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

function WebsiteLayoutInner({ children, showFooter = true }: WebsiteLayoutProps) {
  const { isModalOpen, closeModal } = useWaitlist();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {children}
      {showFooter && <Footer />}
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

function WebsiteLayout({ children, showFooter = true }: WebsiteLayoutProps) {
  return (
    <WaitlistProvider>
      <WebsiteLayoutInner showFooter={showFooter}>
        {children}
      </WebsiteLayoutInner>
    </WaitlistProvider>
  );
}

export default WebsiteLayout;
