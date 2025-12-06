import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Server, Lock, Zap, Globe, Clock, Shield, Database, Award, Users, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { useRegion } from '../context/RegionContext';

export const HomePage: React.FC = () => {
  const { region } = useRegion();

  return (
    <>
      <Helmet>
        <title>LA FLIGHTISH GLOBAL | Travel Insurance & Financial API Solutions</title>
        <meta name="description" content="Leading API integration platform for travel insurance, financial products, and travel services across US and Australia." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Unified API Platform for <span className="text-accent-500">Travel Financial Services</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 mx-auto max-w-3xl">
              Connect to our comprehensive API suite for travel insurance, financial products, and flight booking services. Trusted by over 500+ {region === 'USA' ? 'US' : 'Australian'} service providers since 2020.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = '/documentation'}
              >
                View API Documentation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
                onClick={() => window.location.href = '/contact'}
              >
                Get API Access
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Enterprise-Grade API Solutions
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our APIs provide seamless access to a comprehensive suite of travel and financial services with over 50 million API calls processed monthly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-primary-600" />,
                title: "RESTful API Architecture",
                description: "Modern, well-documented REST APIs with predictable resource-oriented URLs and JSON responses."
              },
              {
                icon: <Server className="h-8 w-8 text-primary-600" />,
                title: "99.99% Uptime SLA",
                description: "Enterprise-grade infrastructure with guaranteed high availability and performance."
              },
              {
                icon: <Lock className="h-8 w-8 text-primary-600" />,
                title: "Bank-Grade Security",
                description: "SOC2 certified with end-to-end encryption and comprehensive security measures."
              },
              {
                icon: <Zap className="h-8 w-8 text-primary-600" />,
                title: "Real-Time Processing",
                description: "Instant quote generation and policy issuance with sub-second response times."
              },
              {
                icon: <Globe className="h-8 w-8 text-primary-600" />,
                title: "Global Coverage",
                description: "Extensive network of insurance providers and financial institutions across US and Australia."
              },
              {
                icon: <Clock className="h-8 w-8 text-primary-600" />,
                title: "24/7 Support",
                description: "Dedicated technical support team available round the clock for API integration assistance."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 rounded-full bg-primary-50 p-4 inline-block">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Comprehensive API Suite
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Integrate our full range of travel and financial services into your applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">
                    Insurance API
                  </h3>
                  <ul className="space-y-2 text-secondary-600 mb-6">
                    <li>• Multi-carrier quote comparison</li>
                    <li>• Policy issuance and management</li>
                    <li>• Claims processing integration</li>
                    <li>• Real-time policy updates</li>
                  </ul>
                  <Link to="/documentation/insurance">
                    <Button variant="outline" fullWidth>
                      View Documentation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Database className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">
                    Financial Services API
                  </h3>
                  <ul className="space-y-2 text-secondary-600 mb-6">
                    <li>• Loan application processing</li>
                    <li>• Credit score assessment</li>
                    <li>• Payment processing</li>
                    <li>• Transaction management</li>
                  </ul>
                  <Link to="/documentation/financial">
                    <Button variant="outline" fullWidth>
                      View Documentation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">
                    Travel Services API
                  </h3>
                  <ul className="space-y-2 text-secondary-600 mb-6">
                    <li>• Flight booking engine</li>
                    <li>• Travel document verification</li>
                    <li>• Itinerary management</li>
                    <li>• Travel alerts integration</li>
                  </ul>
                  <Link to="/documentation/travel">
                    <Button variant="outline" fullWidth>
                      View Documentation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Quick Integration Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Get started with our APIs in four simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Register Account",
                description: "Create your developer account and get API credentials"
              },
              {
                step: "2",
                title: "Choose APIs",
                description: "Select the API services that match your needs"
              },
              {
                step: "3",
                title: "Test Integration",
                description: "Use our sandbox environment to test your integration"
              },
              {
                step: "4",
                title: "Go Live",
                description: "Switch to production and start processing real transactions"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Join industry leaders like TravelSmart, FinanceJet, and GlobalTrip using our APIs to power their travel and financial services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Sales
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
                onClick={() => window.location.href = '/documentation'}
              >
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};