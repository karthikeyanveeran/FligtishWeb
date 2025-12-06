import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Globe, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useRegion } from '../../context/RegionContext';
import { useCurrency } from '../../context/CurrencyContext';

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const location = useLocation();
  const { region, setRegion } = useRegion();
  const { currency, setCurrency } = useCurrency();
  
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);

  const navigation = {
    solutions: [
      { name: 'Travel Insurance', path: '/insurance' },
      { name: 'Travel Loans', path: '/loans' },
      { name: 'Document Wallet', path: '/documents' },
      { name: 'Airline Solutions', path: '/airline-solutions' },
    ],
    technology: [
      { name: 'API Solutions', path: '/api-solutions' },
      { name: 'AI Solutions', path: '/ai-solutions' },
    ],
    developers: [
      { name: 'API Documentation', path: '/api-docs' },
      { name: 'SDK Guide', path: '/sdk-guide' },
      { name: 'Integration Guide', path: '/integration-guide' },
      { name: 'API Status', path: '/api-status' },
      { name: 'Changelog', path: '/api-changelog' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Manpower Services', path: '/manpower' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-primary-800">Menu</h2>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-secondary-600 hover:bg-primary-50 hover:text-primary-600 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-4 overflow-y-auto max-h-[calc(100vh-200px)]">
          <div className="space-y-2">
            {Object.entries(navigation).map(([key, items]) => (
              <div key={key}>
                <button
                  onClick={() => setExpandedSection(expandedSection === key ? null : key)}
                  className="w-full flex items-center justify-between py-2 px-3 text-left font-medium text-secondary-700 hover:bg-primary-50 rounded-lg capitalize"
                >
                  {key}
                  <span className="text-xs">{expandedSection === key ? '▼' : '▶'}</span>
                </button>
                {expandedSection === key && (
                  <div className="ml-4 mt-1 space-y-1">
                    {items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={cn(
                          "block py-2 px-3 text-sm rounded-lg",
                          location.pathname === item.path
                            ? "bg-primary-100 text-primary-700 font-medium"
                            : "text-secondary-600 hover:bg-gray-50"
                        )}
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-4 border-t pt-4">
            {/* Region selector */}
            <div>
              <div className="flex items-center mb-2">
                <Globe className="h-4 w-4 mr-2 text-primary-600" />
                <span className="font-medium text-primary-800">Region</span>
              </div>
              <div className="space-y-2 pl-6">
                <button
                  onClick={() => setRegion('USA')}
                  className={cn(
                    "block w-full text-left py-1",
                    region === 'USA' ? "text-primary-600 font-medium" : "text-secondary-600"
                  )}
                >
                  🇺🇸 United States
                </button>
                <button
                  onClick={() => setRegion('Australia')}
                  className={cn(
                    "block w-full text-left py-1",
                    region === 'Australia' ? "text-primary-600 font-medium" : "text-secondary-600"
                  )}
                >
                  🇦🇺 Australia
                </button>
              </div>
            </div>

            {/* Currency selector */}
            <div>
              <div className="flex items-center mb-2">
                <DollarSign className="h-4 w-4 mr-2 text-primary-600" />
                <span className="font-medium text-primary-800">Currency</span>
              </div>
              <div className="space-y-2 pl-6">
                <button
                  onClick={() => setCurrency('USD')}
                  className={cn(
                    "block w-full text-left py-1",
                    currency === 'USD' ? "text-primary-600 font-medium" : "text-secondary-600"
                  )}
                >
                  $ USD - US Dollar
                </button>
                <button
                  onClick={() => setCurrency('AUD')}
                  className={cn(
                    "block w-full text-left py-1",
                    currency === 'AUD' ? "text-primary-600 font-medium" : "text-secondary-600"
                  )}
                >
                  $ AUD - Australian Dollar
                </button>
              </div>
            </div>
          </div>
        </nav>
      </motion.div>
    </motion.div>
  );
};