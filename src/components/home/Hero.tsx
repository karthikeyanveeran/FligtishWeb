import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plane, Shield, CreditCard } from 'lucide-react';
import { Button } from '../ui/Button';
import { useRegion } from '../../context/RegionContext';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { region } = useRegion();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Global Partner for <span className="text-accent-500">Travel Financial Services</span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-primary-100 mb-8 mx-auto max-w-3xl">
              LA FLIGHTISH GLOBAL combines travel insurance, financial products, and flight bookings in one seamless platform tailored for {region === 'USA' ? 'American' : 'Australian'} travelers.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => navigate('/flights')}
              icon={<Plane className="h-5 w-5" />}
            >
              Book Flights
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white text-white hover:bg-white/20" 
              onClick={() => navigate('/insurance')}
              icon={<Shield className="h-5 w-5" />}
            >
              Explore Insurance
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white text-white hover:bg-white/20" 
              onClick={() => navigate('/loans')}
              icon={<CreditCard className="h-5 w-5" />}
            >
              Travel Loans
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
          >
            <div className="mb-4 rounded-full bg-accent-500/20 p-3 inline-block">
              <Plane className="h-6 w-6 text-accent-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Flight Coverage</h3>
            <p className="text-primary-100">
              Access the best deals on flights with major carriers in the US and Australia, with 24/7 booking support.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
          >
            <div className="mb-4 rounded-full bg-accent-500/20 p-3 inline-block">
              <Shield className="h-6 w-6 text-accent-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Insurance</h3>
            <p className="text-primary-100">
              Compare and purchase travel insurance plans from top providers with region-specific coverage options.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
          >
            <div className="mb-4 rounded-full bg-accent-500/20 p-3 inline-block">
              <CreditCard className="h-6 w-6 text-accent-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Travel Loans</h3>
            <p className="text-primary-100">
              Get quick approval on travel loans with competitive interest rates and flexible repayment options.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};