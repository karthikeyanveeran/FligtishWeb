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
  
  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Flights', path: '/flights' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Loans', path: '/loans' },
    { name: 'Documents', path: '/documents' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about' },
  ];

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

        <nav className="p-4">
          <ul className="space-y-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "block py-2 text-base font-medium hover:text-primary-600",
                    location.pathname === item.path
                      ? "text-primary-600"
                      : "text-secondary-600"
                  )}
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-4 border-t pt-4">
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