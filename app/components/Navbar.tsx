import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useUser } from '../hooks/use-user';
import { useWaitlist } from '~/contexts/WaitlistContext';
import { LogoType } from '@call-kaira/frontend-commons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useUser();
  const { openModal } = useWaitlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 border-b b-px ${
      isScrolled
        ? 'bg-white/60 backdrop-blur-xl border-cerise-200/30'
        : 'bg-white border-cerise-300/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <LogoType />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/solutions" className={`font-poppins hover:text-cerise-500 transition-colors ${location.pathname === '/solutions' ? 'text-cerise-500' : 'text-gray-700'}`}>
              Solutions
            </Link>
            <Link to="/built-for-you" className={`font-poppins hover:text-cerise-500 transition-colors ${location.pathname === '/built-for-you' ? 'text-cerise-500' : 'text-gray-700'}`}>
              Built For You
            </Link>
            <a href="/resources" className="font-poppins text-gray-700 hover:text-cerise-500 transition-colors">
              Resources
            </a>

            <button
              onClick={openModal}
              className="bg-cerise-500 text-white px-6 py-2 rounded-full font-poppins font-medium hover:bg-cerise-600 transition-colors"
            >
              Join the waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-cerise-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/solutions" className={`block font-poppins hover:text-cerise-500 transition-colors ${location.pathname === '/solutions' ? 'text-cerise-500' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
              Solutions
            </Link>
            <Link to="/built-for-you" className={`block font-poppins hover:text-cerise-500 transition-colors ${location.pathname === '/built-for-you' ? 'text-cerise-500' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
              Built For You
            </Link>
            <a href="/resources" className="block font-poppins text-gray-700 hover:text-cerise-500 transition-colors">
              Resources
            </a>
            <button
              onClick={() => {
                openModal();
                setIsMenuOpen(false);
              }}
              className="w-full bg-cerise-500 text-white px-6 py-2 rounded-full font-poppins font-medium hover:bg-cerise-600 transition-colors text-left"
            >
              Join the waitlist
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
