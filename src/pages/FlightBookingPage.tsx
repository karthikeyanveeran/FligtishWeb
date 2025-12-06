import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Plane, 
  Calendar, 
  Users, 
  Search,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { useRegion } from '../context/RegionContext';
import { useCurrency } from '../context/CurrencyContext';
import { formatCurrency } from '../lib/utils';

const flightSearchSchema = z.object({
  from: z.string().min(3, { message: 'Please enter departure city' }),
  to: z.string().min(3, { message: 'Please enter destination city' }),
  departDate: z.string().min(1, { message: 'Please select departure date' }),
  returnDate: z.string().optional(),
  passengers: z.string().min(1, { message: 'Please select number of passengers' }),
  cabinClass: z.string().min(1, { message: 'Please select cabin class' }),
});

type FlightSearchData = z.infer<typeof flightSearchSchema>;

interface FlightResult {
  id: string;
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: number;
}

export const FlightBookingPage: React.FC = () => {
  const { region } = useRegion();
  const { currency } = useCurrency();
  const [searchResults, setSearchResults] = useState<FlightResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FlightSearchData>({
    resolver: zodResolver(flightSearchSchema),
    defaultValues: {
      cabinClass: 'economy',
      passengers: '1',
    },
  });

  const onSubmit = async (data: FlightSearchData) => {
    setIsSearching(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock flight results
    const mockResults: FlightResult[] = [
      {
        id: '1',
        airline: 'American Airlines',
        flightNumber: 'AA1234',
        departureTime: '08:30',
        arrivalTime: '11:45',
        duration: '3h 15m',
        price: currency === 'USD' ? 349.99 : 529.99,
        stops: 0,
      },
      {
        id: '2',
        airline: 'United Airlines',
        flightNumber: 'UA5678',
        departureTime: '10:15',
        arrivalTime: '13:50',
        duration: '3h 35m',
        price: currency === 'USD' ? 299.99 : 459.99,
        stops: 0,
      },
      {
        id: '3',
        airline: 'Delta Airlines',
        flightNumber: 'DL9012',
        departureTime: '12:45',
        arrivalTime: '16:30',
        duration: '3h 45m',
        price: currency === 'USD' ? 329.99 : 499.99,
        stops: 1,
      },
      {
        id: '4',
        airline: 'Qantas',
        flightNumber: 'QF3456',
        departureTime: '14:20',
        arrivalTime: '18:05',
        duration: '3h 45m',
        price: currency === 'USD' ? 389.99 : 589.99,
        stops: 0,
      },
      {
        id: '5',
        airline: 'Virgin Australia',
        flightNumber: 'VA7890',
        departureTime: '16:40',
        arrivalTime: '20:15',
        duration: '3h 35m',
        price: currency === 'USD' ? 319.99 : 479.99,
        stops: 1,
      },
    ];
    
    setSearchResults(mockResults);
    setIsSearching(false);
    setHasSearched(true);
  };

  const passengerOptions = [
    { value: '1', label: '1 Passenger' },
    { value: '2', label: '2 Passengers' },
    { value: '3', label: '3 Passengers' },
    { value: '4', label: '4 Passengers' },
    { value: '5', label: '5 Passengers' },
    { value: '6', label: '6 Passengers' },
  ];

  const cabinClassOptions = [
    { value: 'economy', label: 'Economy' },
    { value: 'premium', label: 'Premium Economy' },
    { value: 'business', label: 'Business Class' },
    { value: 'first', label: 'First Class' },
  ];

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Book Your Flight
          </h1>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Find the best deals on flights with major carriers in the {region === 'USA' ? 'United States' : 'Australia'}.
          </p>
        </motion.div>

        {/* Flight Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input
                    label="From"
                    placeholder="Enter city or airport"
                    leftIcon={<Plane className="h-4 w-4 text-secondary-500" />}
                    {...register('from')}
                    error={errors.from?.message}
                    fullWidth
                  />
                  
                  <Input
                    label="To"
                    placeholder="Enter city or airport"
                    leftIcon={<Plane className="h-4 w-4 text-secondary-500 transform rotate-90" />}
                    {...register('to')}
                    error={errors.to?.message}
                    fullWidth
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input
                    label="Departure Date"
                    type="date"
                    leftIcon={<Calendar className="h-4 w-4 text-secondary-500" />}
                    {...register('departDate')}
                    error={errors.departDate?.message}
                    fullWidth
                  />
                  
                  <Input
                    label="Return Date (Optional)"
                    type="date"
                    leftIcon={<Calendar className="h-4 w-4 text-secondary-500" />}
                    {...register('returnDate')}
                    error={errors.returnDate?.message}
                    fullWidth
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Select
                    label="Passengers"
                    leftIcon={<Users className="h-4 w-4 text-secondary-500" />}
                    options={passengerOptions}
                    {...register('passengers')}
                    error={errors.passengers?.message}
                    fullWidth
                  />
                  
                  <Select
                    label="Cabin Class"
                    options={cabinClassOptions}
                    {...register('cabinClass')}
                    error={errors.cabinClass?.message}
                    fullWidth
                  />
                </div>
                
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="px-8"
                    disabled={isSearching}
                    icon={<Search className="h-5 w-5" />}
                  >
                    {isSearching ? 'Searching...' : 'Search Flights'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Flight Results */}
        {hasSearched && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-primary-800 mb-6">
              Flight Results
            </h2>
            
            {searchResults.length === 0 ? (
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-secondary-600">No flights found matching your criteria. Please try different dates or destinations.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {searchResults.map((flight, index) => (
                  <motion.div
                    key={flight.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                          <div className="mb-4 md:mb-0">
                            <div className="text-lg font-semibold text-primary-800 mb-1">
                              {flight.airline} • {flight.flightNumber}
                            </div>
                            <div className="flex items-center text-secondary-700">
                              <span className="text-lg font-medium">{flight.departureTime}</span>
                              <ArrowRight className="h-4 w-4 mx-2" />
                              <span className="text-lg font-medium">{flight.arrivalTime}</span>
                              <span className="ml-4 text-secondary-500">({flight.duration})</span>
                            </div>
                            <div className="text-sm text-secondary-500 mt-1">
                              {flight.stops === 0 ? 'Nonstop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end">
                            <div className="text-2xl font-bold text-primary-800 mb-2">
                              {formatCurrency(flight.price, currency)}
                            </div>
                            <Button variant="primary" size="md">
                              Select
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                <div className="mt-8 text-center">
                  <p className="text-secondary-600 mb-4">
                    Protect your journey with travel insurance
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/insurance'}
                  >
                    Explore Insurance Options
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};