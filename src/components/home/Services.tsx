import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  PlaneTakeoff, 
  Shield, 
  Banknote, 
  FileText, 
  Globe, 
  Landmark,
  Clock,
  HeartPulse
} from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { formatCurrency } from '../../lib/utils';
import { useCurrency } from '../../context/CurrencyContext';

export const Services: React.FC = () => {
  const { currency } = useCurrency();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const serviceCards = [
    {
      title: 'Flight Booking',
      description: 'Book flights with major airlines worldwide with exclusive discounts and flexible change options.',
      icon: <PlaneTakeoff className="h-6 w-6 text-primary-600" />,
      link: '/flights',
      color: 'bg-blue-50'
    },
    {
      title: 'Travel Insurance',
      description: 'Compare and purchase comprehensive travel insurance plans from top providers.',
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      link: '/insurance',
      color: 'bg-green-50'
    },
    {
      title: 'Travel Loans',
      description: 'Get quick approval on travel loans with competitive interest rates and flexible repayment options.',
      icon: <Banknote className="h-6 w-6 text-primary-600" />,
      link: '/loans',
      color: 'bg-yellow-50'
    },
    {
      title: 'Document Wallet',
      description: 'Securely store and access all your travel documents in one digital location.',
      icon: <FileText className="h-6 w-6 text-primary-600" />,
      link: '/documents',
      color: 'bg-purple-50'
    },
    {
      title: 'International Coverage',
      description: 'Specialized insurance plans for international travelers with global emergency assistance.',
      icon: <Globe className="h-6 w-6 text-primary-600" />,
      link: '/insurance',
      color: 'bg-indigo-50'
    },
    {
      title: 'Financial Protection',
      description: 'Trip cancellation coverage and financial protection against unexpected events.',
      icon: <Landmark className="h-6 w-6 text-primary-600" />,
      link: '/insurance',
      color: 'bg-red-50'
    },
    {
      title: 'Last-Minute Deals',
      description: 'Special discounts for last-minute bookings and emergency travel arrangements.',
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      link: '/flights',
      color: 'bg-teal-50'
    },
    {
      title: 'Medical Coverage',
      description: 'Comprehensive medical coverage including emergency evacuation and hospital stays.',
      icon: <HeartPulse className="h-6 w-6 text-primary-600" />,
      link: '/insurance',
      color: 'bg-pink-50'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            LA FLIGHTISH GLOBAL offers a complete suite of travel financial services designed to make your journey safe, secure, and affordable.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceCards.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 }
                }
              }}
            >
              <Link to={service.link}>
                <Card interactive className="h-full transition-all duration-200">
                  <CardContent className="p-6">
                    <div className={`${service.color} rounded-full p-3 inline-block mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-lg text-primary-600 font-medium mb-4">
            Insurance plans starting from {formatCurrency(currency === 'USD' ? 59.99 : 89.99, currency)}
          </p>
          <Link 
            to="/insurance" 
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
          >
            Compare Plans
          </Link>
        </div>
      </div>
    </section>
  );
};