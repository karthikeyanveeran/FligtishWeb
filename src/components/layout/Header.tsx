import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useRegion } from '../../context/RegionContext';
import { useCurrency } from '../../context/CurrencyContext';
import { Logo } from '../ui/Logo';

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

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Loans', path: '/loans' },
    { name: 'Documents', path: '/documents' },
    { name: 'API Solutions', path: '/api-solutions' },
    { name: 'AI Solutions', path: '/ai-solutions' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-200 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo className="h-10 w-auto" />
              <div className="ml-2 hidden sm:block">
                <span className="text-lg font-bold text-primary-800">
                  LA FLIGHTISH GLOBAL
                </span>
                <span className="block text-xs text-accent-500">EST. 2018</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600",
                  location.pathname === item.path
                    ? "text-primary-600"
                    : "text-secondary-600"
                )}
              >
                {item.name}
              </Link>
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