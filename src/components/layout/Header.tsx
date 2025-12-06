import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useRegion } from '../../context/RegionContext';
import { useCurrency } from '../../context/CurrencyContext';
import { Logo } from '../ui/Logo';
import logoImage from '../../assets/Logo 2.png';

interface HeaderProps {
  toggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleMobileMenu }) => {
  const location = useLocation();
  const { region, setRegion } = useRegion();
  const { currency, setCurrency } = useCurrency();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [regionMenuOpen, setRegionMenuOpen] = React.useState(false);
  const [currencyMenuOpen, setCurrencyMenuOpen] = React.useState(false);

  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (key: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

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
      { name: 'Manpower Augmentation', path: '/manpower' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-200 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logoImage} alt="LA FLIGHTISH GLOBAL" className="h-10 w-auto" />
              <span className="text-xl font-bold text-primary-800 hidden sm:block">
                LA FLIGHTISH GLOBAL
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {Object.entries(navigation).map(([key, items]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-sm font-medium text-secondary-700 hover:text-primary-600 capitalize">
                  {key}
                </button>
                {activeDropdown === key && (
                  <div 
                    className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-secondary-600 hover:bg-primary-50 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};