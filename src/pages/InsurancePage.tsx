import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  HeartPulse, 
  Luggage, 
  Ban, 
  Clock, 
  Globe, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Select';
import { formatCurrency } from '../lib/utils';
import { useRegion } from '../context/RegionContext';
import { useCurrency } from '../context/CurrencyContext';

interface InsurancePlan {
  id: string;
  name: string;
  description: string;
  price: number;
  featured: boolean;
  coverage: {
    medical: string;
    cancellation: string;
    baggage: string;
    delay: string;
  };
  features: string[];
  limitations: string[];
  provider: string;
}

export const InsurancePage: React.FC = () => {
  const { region } = useRegion();
  const { currency } = useCurrency();
  const [tripDuration, setTripDuration] = useState('7');
  const [travelerAge, setTravelerAge] = useState('30-39');
  
  const insurancePlans: InsurancePlan[] = [
    {
      id: 'basic',
      name: 'Basic Protection',
      description: 'Essential coverage for budget-conscious travelers',
      price: currency === 'USD' ? 59.99 : 89.99,
      featured: false,
      coverage: {
        medical: currency === 'USD' ? '$50,000' : 'AUD 75,000',
        cancellation: currency === 'USD' ? '$1,000' : 'AUD 1,500',
        baggage: currency === 'USD' ? '$500' : 'AUD 750',
        delay: currency === 'USD' ? '$200' : 'AUD 300',
      },
      features: [
        'Emergency medical expenses',
        'Trip cancellation coverage',
        'Baggage loss protection',
        '24/7 emergency assistance',
      ],
      limitations: [
        'Limited coverage for adventure activities',
        'Pre-existing conditions not covered',
        'No coverage for electronic devices over $300',
      ],
      provider: region === 'USA' ? 'SafeTravel USA' : 'AusGuard Insurance',
    },
    {
      id: 'premium',
      name: 'Premium Coverage',
      description: 'Comprehensive protection with enhanced benefits',
      price: currency === 'USD' ? 89.99 : 139.99,
      featured: true,
      coverage: {
        medical: currency === 'USD' ? '$250,000' : 'AUD 375,000',
        cancellation: currency === 'USD' ? '$5,000' : 'AUD 7,500',
        baggage: currency === 'USD' ? '$2,500' : 'AUD 3,750',
        delay: currency === 'USD' ? '$500' : 'AUD 750',
      },
      features: [
        'Extensive medical coverage',
        'Full trip cancellation reimbursement',
        'Enhanced baggage protection',
        'Trip delay compensation',
        'Coverage for most adventure activities',
        'Rental car damage coverage',
        'Pre-existing conditions covered (with conditions)',
      ],
      limitations: [
        'Some extreme sports require additional coverage',
        'Maximum trip duration of 45 days',
      ],
      provider: region === 'USA' ? 'TravelGuard Pro' : 'Qantas Insurance',
    },
    {
      id: 'elite',
      name: 'Elite Traveler',
      description: 'Premium coverage for discerning travelers',
      price: currency === 'USD' ? 159.99 : 249.99,
      featured: false,
      coverage: {
        medical: currency === 'USD' ? '$1,000,000' : 'AUD 1,500,000',
        cancellation: currency === 'USD' ? '$10,000' : 'AUD 15,000',
        baggage: currency === 'USD' ? '$5,000' : 'AUD 7,500',
        delay: currency === 'USD' ? '$1,000' : 'AUD 1,500',
      },
      features: [
        'Premium medical evacuation coverage',
        'Cancel for any reason option',
        'Premium baggage protection including electronics',
        'Generous travel delay compensation',
        'Coverage for all adventure activities',
        'Rental car coverage included',
        'Pre-existing conditions covered',
        'Concierge services',
        'Primary coverage (no deductible)',
      ],
      limitations: [
        'Higher cost premium',
      ],
      provider: region === 'USA' ? 'Allianz Global' : 'Cover-More Elite',
    }
  ];

  const durationOptions = [
    { value: '3', label: '1-3 days' },
    { value: '7', label: '4-7 days' },
    { value: '14', label: '8-14 days' },
    { value: '30', label: '15-30 days' },
    { value: '60', label: '31-60 days' },
    { value: '90', label: '61-90 days' },
  ];

  const ageOptions = [
    { value: '0-17', label: 'Under 18' },
    { value: '18-29', label: '18-29' },
    { value: '30-39', label: '30-39' },
    { value: '40-49', label: '40-49' },
    { value: '50-59', label: '50-59' },
    { value: '60-69', label: '60-69' },
    { value: '70+', label: '70+' },
  ];

  // Adjust price based on duration and age
  const calculateAdjustedPrice = (basePrice: number, duration: string, age: string): number => {
    let multiplier = 1;
    
    // Duration factor
    switch (duration) {
      case '3': multiplier *= 0.6; break;
      case '7': multiplier *= 1; break;
      case '14': multiplier *= 1.5; break;
      case '30': multiplier *= 2.2; break;
      case '60': multiplier *= 3.5; break;
      case '90': multiplier *= 4.8; break;
    }
    
    // Age factor
    switch (age) {
      case '0-17': multiplier *= 0.8; break;
      case '18-29': multiplier *= 0.9; break;
      case '30-39': multiplier *= 1; break;
      case '40-49': multiplier *= 1.1; break;
      case '50-59': multiplier *= 1.3; break;
      case '60-69': multiplier *= 1.6; break;
      case '70+': multiplier *= 2.2; break;
    }
    
    return +(basePrice * multiplier).toFixed(2);
  };

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Travel Insurance
          </h1>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Protect your journey with comprehensive travel insurance tailored for {region === 'USA' ? 'American' : 'Australian'} travelers.
          </p>
        </motion.div>

        {/* Plan Customization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Customize Your Plan</CardTitle>
              <CardDescription>Adjust details to get personalized quotes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Trip Duration"
                  options={durationOptions}
                  value={tripDuration}
                  onChange={(value) => setTripDuration(value)}
                  fullWidth
                />
                <Select
                  label="Traveler Age"
                  options={ageOptions}
                  value={travelerAge}
                  onChange={(value) => setTravelerAge(value)}
                  fullWidth
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Insurance Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {insurancePlans.map((plan, index) => {
            const adjustedPrice = calculateAdjustedPrice(plan.price, tripDuration, travelerAge);
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full ${plan.featured ? 'border-primary-500 shadow-lg' : ''} relative`}>
                  {plan.featured && (
                    <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className={plan.featured ? 'bg-primary-50' : ''}>
                    <CardTitle className="flex items-center">
                      <Shield className={`h-5 w-5 mr-2 ${plan.featured ? 'text-primary-600' : 'text-secondary-600'}`} />
                      {plan.name}
                    </CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="mb-6 text-center">
                      <p className="text-3xl font-bold text-primary-800">
                        {formatCurrency(adjustedPrice, currency)}
                      </p>
                      <p className="text-sm text-secondary-500">For your selected trip duration</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="flex items-center text-secondary-700">
                          <HeartPulse className="h-4 w-4 mr-2 text-primary-600" />
                          Medical Coverage
                        </span>
                        <span className="font-medium">{plan.coverage.medical}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="flex items-center text-secondary-700">
                          <Ban className="h-4 w-4 mr-2 text-primary-600" />
                          Trip Cancellation
                        </span>
                        <span className="font-medium">{plan.coverage.cancellation}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="flex items-center text-secondary-700">
                          <Luggage className="h-4 w-4 mr-2 text-primary-600" />
                          Baggage Coverage
                        </span>
                        <span className="font-medium">{plan.coverage.baggage}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="flex items-center text-secondary-700">
                          <Clock className="h-4 w-4 mr-2 text-primary-600" />
                          Delay Coverage
                        </span>
                        <span className="font-medium">{plan.coverage.delay}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="flex items-center text-secondary-700">
                          <Globe className="h-4 w-4 mr-2 text-primary-600" />
                          Provider
                        </span>
                        <span className="font-medium">{plan.provider}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-medium text-primary-800">Key Features:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-secondary-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {plan.limitations.length > 0 && (
                      <div className="space-y-3 mb-6">
                        <h4 className="font-medium text-primary-800">Limitations:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start">
                              <AlertCircle className="h-5 w-5 text-warning-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-secondary-700">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter className={`p-6 ${plan.featured ? 'bg-primary-50' : 'bg-gray-50'}`}>
                    <Button
                      variant={plan.featured ? 'primary' : 'outline'}
                      fullWidth
                    >
                      {plan.featured ? 'Select This Plan' : 'View Details'}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-primary-800 mb-4">
            Why Choose LA FLIGHTISH Insurance?
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            Our insurance plans are specifically designed for travelers from {region}, offering comprehensive protection that meets local regulations and provides peace of mind during your journey.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Check className="h-6 w-6 text-success-500 mb-3" />
              <h3 className="font-semibold text-primary-800 mb-2">24/7 Global Assistance</h3>
              <p className="text-secondary-600">
                Access emergency help anywhere, anytime with our global support network.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Check className="h-6 w-6 text-success-500 mb-3" />
              <h3 className="font-semibold text-primary-800 mb-2">Fast Claims Processing</h3>
              <p className="text-secondary-600">
                Our streamlined digital claims process gets you reimbursed quickly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Check className="h-6 w-6 text-success-500 mb-3" />
              <h3 className="font-semibold text-primary-800 mb-2">Customizable Coverage</h3>
              <p className="text-secondary-600">
                Tailor your plan to your specific travel needs and budget.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};