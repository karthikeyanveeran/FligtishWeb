import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  GlobeIcon,
  ShieldIcon,
  HeartIcon,
  UserIcon,
  BookOpenIcon
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Newsletter Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-primary-700 rounded-xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-primary-900/30"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-primary-100 max-w-md">
                  Subscribe to our newsletter for the latest updates on AI innovations, travel solutions, and industry insights.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 min-w-[250px]"
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-white text-primary-800 font-medium rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Logo className="h-10 w-auto text-white" />
              <div className="ml-3">
                <span className="text-xl font-bold">LA FLIGHTISH GLOBAL</span>
                <span className="block text-xs text-primary-200">EST. 2018</span>
              </div>
            </div>
            <p className="mb-6 text-primary-100 text-lg">
              Your trusted partner for travel insurance, loans, financial services, and cutting-edge AI & API solutions across the US, Australia, and India since 2018.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="https://facebook.com/flightishglobal" target="_blank" rel="noopener noreferrer" className="bg-primary-700 hover:bg-primary-600 p-3 rounded-full text-white transition-colors">
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com/flightishglobal" target="_blank" rel="noopener noreferrer" className="bg-primary-700 hover:bg-primary-600 p-3 rounded-full text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com/flightishglobal" target="_blank" rel="noopener noreferrer" className="bg-primary-700 hover:bg-primary-600 p-3 rounded-full text-white transition-colors">
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com/company/flightishglobal" target="_blank" rel="noopener noreferrer" className="bg-primary-700 hover:bg-primary-600 p-3 rounded-full text-white transition-colors">
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>

            <div className="flex items-center">
              <MailIcon className="h-5 w-5 mr-2 text-primary-200" />
              <a href="mailto:corporate@flightishglobal.com" className="hover:text-white transition-colors">
                corporate@flightishglobal.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary-700 pb-2 flex items-center">
              <GlobeIcon className="h-5 w-5 mr-2 text-primary-300" />
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/insurance" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link to="/loans" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  Travel Loans
                </Link>
              </li>
              <li>
                <Link to="/documents" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  Document Wallet
                </Link>
              </li>
              <li>
                <Link to="/api-solutions" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  API Solutions
                </Link>
              </li>
              <li>
                <Link to="/ai-solutions" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary-700 pb-2 flex items-center">
              <BookOpenIcon className="h-5 w-5 mr-2 text-primary-300" />
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/manpower" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  Manpower Services
                </Link>
              </li>
              <li>
                <Link to="/airline-solutions" className="text-primary-200 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  Airline Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary-700 pb-2 flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2 text-primary-300" />
              Offices
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 mt-2"></span>
                <div>
                  <span className="font-medium text-white">Global Headquarters</span><br />
                  <span className="text-sm text-primary-200">D142, SBIOA Unity Enclave<br />Mambakkam, Chennai, India</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 mt-2"></span>
                <div>
                  <span className="font-medium text-white">USA Office</span><br />
                  <span className="text-sm text-primary-200">1250 Aviation Blvd, Suite 300<br />Los Angeles, CA 90045</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 mt-2"></span>
                <div>
                  <span className="font-medium text-white">Australia Office</span><br />
                  <span className="text-sm text-primary-200">85 William Street<br />Sydney, NSW 2000</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 md:mb-0">
              <Link to="/privacy" className="text-sm text-primary-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/api-docs" className="text-sm text-primary-200 hover:text-white transition-colors">
                API Documentation
              </Link>
              <Link to="/api-status" className="text-sm text-primary-200 hover:text-white transition-colors">
                API Status
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldIcon className="h-4 w-4 text-primary-300" />
              <span className="text-sm text-primary-200">IATA Accredited Agency #14012655</span>
            </div>
          </div>
          <div className="mt-6 text-center md:text-left text-xs text-primary-300">
            <p className="mb-2">&copy; {new Date().getFullYear()} LA FLIGHTISH GLOBAL PRIVATE LIMITED. All rights reserved.</p>
            <p>LA FLIGHTISH GLOBAL is registered in the United States, Australia, and India. Insurance products are underwritten by our partner insurance companies. Our AI and API services comply with PCI-DSS, SOC2, ISO 27001, and GDPR standards.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};