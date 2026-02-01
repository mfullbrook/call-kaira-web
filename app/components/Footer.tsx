import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-valencia-500 p-2 rounded-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">CallKaira</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your friendly AI receptionist. Always answers. Always cheerful.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-valencia-400" />
                <span className="text-sm text-gray-400">hello@callkaira.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-valencia-400" />
                <span className="text-sm text-gray-400">London, UK</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="/solutions" className="text-gray-400 hover:text-valencia-400 transition-colors">Features</a></li>
              <li><a href="/built-for-you" className="text-gray-400 hover:text-valencia-400 transition-colors">Industries</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-valencia-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-valencia-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-valencia-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-valencia-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-valencia-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-valencia-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-valencia-400 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Kaira Ventures Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
