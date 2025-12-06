import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Server, 
  Lock, 
  Zap, 
  Globe, 
  Clock, 
  Shield, 
  Database,
  Layers,
  Terminal,
  FileCode,
  CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';
import { useRegion } from '../context/RegionContext';

export const ApiSolutionsPage: React.FC = () => {
  const { region } = useRegion();

  const apiEndpoints = [
    {
      name: "Insurance Quote API",
      endpoint: "/api/v1/insurance/quotes",
      description: "Generate multi-carrier insurance quotes with a single API call",
      method: "POST"
    },
    {
      name: "Policy Issuance API",
      endpoint: "/api/v1/insurance/policies",
      description: "Issue insurance policies with complete documentation",
      method: "POST"
    },
    {
      name: "Loan Application API",
      endpoint: "/api/v1/loans/applications",
      description: "Submit and process travel loan applications",
      method: "POST"
    },
    {
      name: "Flight Search API",
      endpoint: "/api/v1/flights/search",
      description: "Search available flights across multiple carriers",
      method: "GET"
    },
    {
      name: "Document Storage API",
      endpoint: "/api/v1/documents",
      description: "Securely store and retrieve travel documents",
      method: "POST/GET"
    }
  ];

  const clientLogos = [
    { name: "TravelSmart", industry: "Online Travel Agency" },
    { name: "FinanceJet", industry: "Financial Services" },
    { name: "GlobalTrip", industry: "Travel Insurance" },
    { name: "VacayPay", industry: "Payment Processing" },
    { name: "JourneyGuard", industry: "Travel Security" },
    { name: "FlightFinder", industry: "Flight Comparison" }
  ];

  return (
    <>
      <Helmet>
        <title>API Solutions | LA FLIGHTISH GLOBAL</title>
        <meta name="description" content="Enterprise-grade API solutions for travel insurance, financial services, and flight booking integration." />
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
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Enterprise API Solutions for <span className="text-accent-500">Travel Industry</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 mx-auto max-w-3xl">
              Integrate our powerful APIs to offer travel insurance, financial services, and flight bookings directly in your applications. Built for {region === 'USA' ? 'US' : 'Australian'} businesses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = '/documentation'}
              >
                API Documentation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
                onClick={() => window.location.href = '/contact'}
              >
                Request API Access
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.99%", label: "Uptime SLA" },
              { value: "50M+", label: "Monthly API Calls" },
              { value: "500+", label: "Integration Partners" },
              { value: "<100ms", label: "Average Response Time" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-primary-800">{stat.value}</p>
                <p className="text-secondary-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
              Enterprise-Grade API Features
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our APIs are built with enterprise needs in mind, offering security, reliability, and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-primary-600" />,
                title: "RESTful Architecture",
                description: "Modern, well-documented REST APIs with predictable resource-oriented URLs and JSON responses."
              },
              {
                icon: <Server className="h-8 w-8 text-primary-600" />,
                title: "High Availability",
                description: "Multi-region deployment with automatic failover and 99.99% guaranteed uptime SLA."
              },
              {
                icon: <Lock className="h-8 w-8 text-primary-600" />,
                title: "Enterprise Security",
                description: "SOC2 certified with OAuth 2.0, API keys, IP whitelisting, and end-to-end encryption."
              },
              {
                icon: <Zap className="h-8 w-8 text-primary-600" />,
                title: "High Performance",
                description: "Sub-100ms response times with global CDN and optimized database queries."
              },
              {
                icon: <Layers className="h-8 w-8 text-primary-600" />,
                title: "Scalable Infrastructure",
                description: "Auto-scaling architecture that handles millions of requests per day with consistent performance."
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

      {/* API Endpoints */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Key API Endpoints
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Explore our comprehensive suite of API endpoints designed for travel and financial services.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">API Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">Endpoint</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">Method</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {apiEndpoints.map((api, index) => (
                      <motion.tr 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-800">{api.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-secondary-700">{api.endpoint}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            api.method.includes('POST') ? 'bg-success-100 text-success-800' : 'bg-info-100 text-info-800'
                          }`}>
                            {api.method}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-secondary-700">{api.description}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <CardFooter className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="text-center w-full">
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/documentation'}
                  >
                    View Full API Documentation
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Integration Process
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Get started with our APIs in four simple steps.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-primary-100 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    icon: <FileCode className="h-8 w-8 text-primary-600" />,
                    title: "Register Account",
                    description: "Create your developer account and complete the verification process to get API credentials."
                  },
                  {
                    icon: <Terminal className="h-8 w-8 text-primary-600" />,
                    title: "Sandbox Testing",
                    description: "Use our sandbox environment to test your integration with sample data before going live."
                  },
                  {
                    icon: <CheckCircle className="h-8 w-8 text-primary-600" />,
                    title: "Compliance Review",
                    description: "Our team reviews your integration to ensure compliance with security and regulatory standards."
                  },
                  {
                    icon: <Zap className="h-8 w-8 text-primary-600" />,
                    title: "Production Launch",
                    description: "Switch to production credentials and start processing real transactions with your customers."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative z-10"
                  >
                    <div className="text-center">
                      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-primary-100">
                        <div className="bg-primary-50 rounded-full p-3">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-primary-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-secondary-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Join hundreds of companies that rely on our API solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 w-full aspect-square flex items-center justify-center p-4">
                  <div className="text-center">
                    <p className="font-bold text-primary-800 text-lg">{client.name}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-secondary-600">{client.industry}</p>
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
              Ready to Integrate Our APIs?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Get in touch with our integration team to discuss your specific requirements and get started.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Integration Team
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
                onClick={() => window.location.href = '/documentation'}
              >
                View API Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ApiSolutionsPage;