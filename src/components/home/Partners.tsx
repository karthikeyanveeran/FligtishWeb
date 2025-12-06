import React from 'react';
import { motion } from 'framer-motion';

export const Partners: React.FC = () => {
  // Using simple text logos for demo purposes
  const partners = [
    { name: 'American Airlines', logo: 'American Airlines' },
    { name: 'Qantas', logo: 'Qantas' },
    { name: 'Delta', logo: 'Delta' },
    { name: 'Virgin Australia', logo: 'Virgin Australia' },
    { name: 'Allianz', logo: 'Allianz' },
    { name: 'Travel Guard', logo: 'Travel Guard' },
    { name: 'World Nomads', logo: 'World Nomads' },
    { name: 'Chubb', logo: 'Chubb' },
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-primary-800 mb-12">
          Our Trusted Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="h-16 flex items-center justify-center px-8 grayscale hover:grayscale-0 transition-all">
                <span className="text-xl font-bold text-secondary-600">{partner.logo}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};