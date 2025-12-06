import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Banknote, 
  Calculator, 
  Calendar, 
  CreditCard, 
  Check,
  DollarSign,
  CalendarClock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { formatCurrency } from '../lib/utils';
import { useRegion } from '../context/RegionContext';
import { useCurrency } from '../context/CurrencyContext';

const loanCalculatorSchema = z.object({
  loanAmount: z.string().min(1, { message: 'Please enter a loan amount' }),
  loanTerm: z.string().min(1, { message: 'Please select a loan term' }),
  creditScore: z.string().min(1, { message: 'Please select a credit score range' }),
});

type LoanCalculatorData = z.infer<typeof loanCalculatorSchema>;

export const LoansPage: React.FC = () => {
  const { region } = useRegion();
  const { currency } = useCurrency();
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [interestRate, setInterestRate] = useState<number | null>(null);
  const [totalRepayment, setTotalRepayment] = useState<number | null>(null);
  const [loanAmount, setLoanAmount] = useState<number>(3000);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoanCalculatorData>({
    resolver: zodResolver(loanCalculatorSchema),
    defaultValues: {
      loanAmount: '3000',
      loanTerm: '12',
      creditScore: 'good',
    },
  });

  const onSubmit = (data: LoanCalculatorData) => {
    const amount = parseFloat(data.loanAmount);
    const term = parseInt(data.loanTerm);
    
    // Determine interest rate based on credit score
    let rate = 0;
    switch (data.creditScore) {
      case 'excellent': rate = 0.069; break; // 6.9%
      case 'good': rate = 0.089; break;      // 8.9%
      case 'fair': rate = 0.119; break;      // 11.9%
      case 'poor': rate = 0.159; break;      // 15.9%
    }
    
    // Calculate monthly payment
    const monthlyRate = rate / 12;
    const payment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
    
    setLoanAmount(amount);
    setMonthlyPayment(payment);
    setInterestRate(rate * 100);
    setTotalRepayment(payment * term);
  };

  const loanTermOptions = [
    { value: '3', label: '3 months' },
    { value: '6', label: '6 months' },
    { value: '12', label: '12 months' },
    { value: '18', label: '18 months' },
    { value: '24', label: '24 months' },
    { value: '36', label: '36 months' },
  ];

  const creditScoreOptions = [
    { value: 'excellent', label: 'Excellent (720+)' },
    { value: 'good', label: 'Good (690-719)' },
    { value: 'fair', label: 'Fair (630-689)' },
    { value: 'poor', label: 'Poor (below 630)' },
  ];

  const loanFeatures = [
    {
      title: 'Quick Approval',
      description: 'Get approved in as little as 24 hours with our streamlined application process.',
      icon: <Check className="h-8 w-8 text-success-500" />,
    },
    {
      title: 'Competitive Rates',
      description: 'Enjoy market-leading interest rates tailored to your credit profile.',
      icon: <DollarSign className="h-8 w-8 text-success-500" />,
    },
    {
      title: 'Flexible Terms',
      description: 'Choose repayment terms from 3 to 36 months to fit your financial situation.',
      icon: <CalendarClock className="h-8 w-8 text-success-500" />,
    },
  ];

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
            Travel Loans
          </h1>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Finance your dream vacation with flexible travel loans designed for {region === 'USA' ? 'US' : 'Australian'} travelers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Loan Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-primary-600" />
                  Loan Calculator
                </CardTitle>
                <CardDescription>
                  Estimate your monthly payments and see available rates
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Input
                    label={`Loan Amount (${currency})`}
                    type="number"
                    leftIcon={<Banknote className="h-4 w-4 text-secondary-500" />}
                    {...register('loanAmount')}
                    error={errors.loanAmount?.message}
                    fullWidth
                    min="500"
                    max="10000"
                    step="100"
                  />
                  
                  <Select
                    label="Loan Term"
                    leftIcon={<Calendar className="h-4 w-4 text-secondary-500" />}
                    options={loanTermOptions}
                    {...register('loanTerm')}
                    error={errors.loanTerm?.message}
                    fullWidth
                  />
                  
                  <Select
                    label="Credit Score"
                    leftIcon={<CreditCard className="h-4 w-4 text-secondary-500" />}
                    options={creditScoreOptions}
                    {...register('creditScore')}
                    error={errors.creditScore?.message}
                    fullWidth
                  />
                  
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                  >
                    Calculate
                  </Button>
                </form>
                
                {monthlyPayment !== null && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 bg-primary-50 p-4 rounded-md"
                  >
                    <h3 className="font-semibold text-primary-800 mb-3">Loan Estimate</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-secondary-700">Monthly Payment:</span>
                        <span className="font-medium text-primary-800">
                          {formatCurrency(monthlyPayment, currency)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-700">Interest Rate:</span>
                        <span className="font-medium text-primary-800">{interestRate?.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-700">Total Repayment:</span>
                        <span className="font-medium text-primary-800">
                          {formatCurrency(totalRepayment || 0, currency)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-700">Total Interest:</span>
                        <span className="font-medium text-primary-800">
                          {formatCurrency((totalRepayment || 0) - loanAmount, currency)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Loan Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                Travel Now, Pay Later
              </h2>
              <p className="text-secondary-600 mb-6">
                Our travel loans offer a simple way to finance your vacation without draining your savings. With competitive rates and flexible terms, you can make your dream trip a reality today.
              </p>
              
              <div className="space-y-6">
                {loanFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start"
                  >
                    <div className="mr-4 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800 mb-1">{feature.title}</h3>
                      <p className="text-secondary-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>How to Apply</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-primary-600 font-semibold mr-4">
                    1
                  </div>
                  <p className="text-secondary-700">Fill out our simple online application form</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-primary-600 font-semibold mr-4">
                    2
                  </div>
                  <p className="text-secondary-700">Get pre-approved within 24 hours</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-primary-600 font-semibold mr-4">
                    3
                  </div>
                  <p className="text-secondary-700">Receive funds directly in your bank account</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center text-primary-600 font-semibold mr-4">
                    4
                  </div>
                  <p className="text-secondary-700">Enjoy your trip and make convenient monthly payments</p>
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-gray-50">
                <Button variant="primary" fullWidth>
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">
            Loan Requirements
          </h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-primary-800 mb-4 flex items-center">
                    <Check className="h-5 w-5 mr-2 text-success-500" />
                    Eligibility Criteria
                  </h3>
                  <ul className="space-y-2 text-secondary-700">
                    <li>• {region === 'USA' ? 'US citizenship or permanent residency' : 'Australian citizenship or permanent residency'}</li>
                    <li>• Age 18 or older</li>
                    <li>• Regular source of income</li>
                    <li>• Active bank account</li>
                    <li>• Credit score of 630 or higher (preferred)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-primary-800 mb-4 flex items-center">
                    <Check className="h-5 w-5 mr-2 text-success-500" />
                    Required Documents
                  </h3>
                  <ul className="space-y-2 text-secondary-700">
                    <li>• Government-issued ID</li>
                    <li>• Proof of address (utility bill, lease)</li>
                    <li>• Proof of income (pay stubs, tax returns)</li>
                    <li>• Bank statements (last 3 months)</li>
                    <li>• Travel itinerary (for verification)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};