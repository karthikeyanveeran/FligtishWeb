import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Plane, TrendingUp, Zap, BarChart3, AlertCircle, Users, Fuel, Package, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const AirlineSolutionsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('operations');

  const operationsSolutions = [
    {
      title: 'Predictive Maintenance Intelligence',
      description: 'ML-powered predictive analytics for aircraft maintenance scheduling and component failure prevention',
      features: [
        'Real-time sensor data analysis from avionics systems',
        'Predictive failure detection with 94% accuracy',
        'Automated maintenance scheduling optimization',
        'Compliance tracking and regulatory reporting',
        'Reduces unscheduled downtime by 40%',
        'ROI improvement: $2.5M+ annually per aircraft fleet'
      ],
      metrics: ['94% Accuracy', '40% Downtime Reduction', '$2.5M+ Annual ROI']
    },
    {
      title: 'Crew Scheduling & Optimization',
      description: 'Advanced workforce management with regulatory compliance, fatigue risk management, and cost optimization',
      features: [
        'Automated crew pairing with FDAP/CASS compliance',
        'Fatigue Risk Management System (FRMS) integration',
        'Real-time schedule adjustments for disruptions',
        'Multi-constraint optimization (rest, duty, qualifications)',
        'Reduces crew costs by 12-15%',
        'Improves schedule reliability to 99.2%'
      ],
      metrics: ['12-15% Cost Reduction', '99.2% Reliability', 'FDAP Compliant']
    },
    {
      title: 'Flight Operations Optimization',
      description: 'Real-time flight planning and execution optimization for fuel efficiency and on-time performance',
      features: [
        'Dynamic flight path optimization using weather data',
        'Fuel burn prediction and consumption monitoring',
        'Departure delay prediction and mitigation',
        'Gate assignment optimization',
        'Fuel savings: 3-5% per flight',
        'On-time performance improvement: 2-3%'
      ],
      metrics: ['3-5% Fuel Savings', '2-3% OTP Improvement', 'Real-time Optimization']
    }
  ];

  const revenueSolutions = [
    {
      title: 'Dynamic Revenue Management',
      description: 'AI-driven pricing engine with demand forecasting and inventory optimization',
      features: [
        'Real-time demand forecasting using historical and external data',
        'Competitive pricing intelligence and market analysis',
        'Overbooking optimization with no-show prediction',
        'Ancillary revenue optimization (baggage, seats, services)',
        'Revenue uplift: 4-6% per quarter',
        'Inventory utilization improvement: 8-12%'
      ],
      metrics: ['4-6% Revenue Uplift', '8-12% Utilization Gain', 'Real-time Pricing']
    },
    {
      title: 'Passenger Demand Forecasting',
      description: 'Predictive analytics for route-level demand with seasonal and event-based modeling',
      features: [
        'Multi-factor demand prediction (events, holidays, weather)',
        'Route profitability analysis and optimization',
        'Capacity planning and fleet deployment',
        'Booking curve analysis and trend detection',
        'Forecast accuracy: 92-95%',
        'Enables proactive capacity adjustments'
      ],
      metrics: ['92-95% Accuracy', 'Proactive Planning', 'Multi-factor Analysis']
    },
    {
      title: 'Ancillary Services Optimization',
      description: 'Personalized upselling and cross-selling engine for ancillary revenue maximization',
      features: [
        'Passenger segmentation and preference modeling',
        'Personalized offer recommendations',
        'Seat selection and upgrade optimization',
        'Baggage and service bundling intelligence',
        'Ancillary revenue increase: 15-25%',
        'Customer satisfaction improvement: +8%'
      ],
      metrics: ['15-25% Revenue Increase', '+8% Satisfaction', 'Personalized Offers']
    }
  ];

  const customerSolutions = [
    {
      title: 'Predictive Passenger Analytics',
      description: 'Behavioral analytics and churn prediction for customer retention and loyalty optimization',
      features: [
        'Passenger lifetime value prediction',
        'Churn risk identification and intervention',
        'Loyalty program optimization',
        'Personalized communication and offers',
        'Reduces churn by 18-22%',
        'Increases loyalty program engagement by 35%'
      ],
      metrics: ['18-22% Churn Reduction', '+35% Engagement', 'LTV Optimization']
    },
    {
      title: 'Baggage Handling Intelligence',
      description: 'Computer vision and IoT-based baggage tracking with automated sorting and loss prevention',
      features: [
        'Real-time baggage tracking via RFID and computer vision',
        'Automated baggage sorting and routing',
        'Mishandling prediction and prevention',
        'Lost baggage recovery optimization',
        'Reduces mishandling by 60-70%',
        'Baggage claim resolution time: <24 hours'
      ],
      metrics: ['60-70% Mishandling Reduction', '<24hr Resolution', 'Real-time Tracking']
    },
    {
      title: 'Passenger Flow & Airport Operations',
      description: 'Predictive analytics for airport congestion, queue management, and passenger experience optimization',
      features: [
        'Real-time passenger flow prediction',
        'Queue length forecasting and dynamic routing',
        'Check-in and security wait time optimization',
        'Boarding process optimization',
        'Reduces passenger wait times by 25-30%',
        'Improves airport throughput by 15-20%'
      ],
      metrics: ['25-30% Wait Time Reduction', '15-20% Throughput Gain', 'Real-time Routing']
    }
  ];

  const sustainabilitySolutions = [
    {
      title: 'Fuel Optimization & Emissions Tracking',
      description: 'AI-powered fuel efficiency and carbon footprint monitoring for sustainability compliance',
      features: [
        'Flight-level fuel burn optimization',
        'Route optimization for minimum emissions',
        'Carbon offset tracking and reporting',
        'Regulatory compliance (CORSIA, EU ETS)',
        'Fuel cost reduction: 3-5%',
        'Carbon emissions reduction: 5-8%'
      ],
      metrics: ['3-5% Fuel Reduction', '5-8% Emissions Cut', 'CORSIA Compliant']
    },
    {
      title: 'Sustainable Operations Planning',
      description: 'Environmental impact modeling and sustainable fleet management',
      features: [
        'Aircraft utilization optimization for efficiency',
        'Ground operations emissions reduction',
        'Sustainable aviation fuel (SAF) integration planning',
        'ESG reporting and sustainability metrics',
        'Supports net-zero 2050 targets',
        'Improves ESG ratings and investor confidence'
      ],
      metrics: ['Net-Zero Ready', 'ESG Compliant', 'SAF Integration']
    }
  ];

  const categories = [
    { id: 'operations', label: 'Operations', icon: <Plane className="h-4 w-4" /> },
    { id: 'revenue', label: 'Revenue Management', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'customer', label: 'Customer Experience', icon: <Users className="h-4 w-4" /> },
    { id: 'sustainability', label: 'Sustainability', icon: <Fuel className="h-4 w-4" /> }
  ];

  const renderSolutions = () => {
    const solutionMap = {
      operations: operationsSolutions,
      revenue: revenueSolutions,
      customer: customerSolutions,
      sustainability: sustainabilitySolutions
    };
    return solutionMap[activeCategory as keyof typeof solutionMap] || [];
  };

  return (
    <>
      <Helmet>
        <title>Airline Solutions | FLIGHTISH GLOBAL</title>
        <meta name="description" content="Enterprise AI solutions for airlines - predictive maintenance, revenue management, operations optimization" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <Plane className="h-16 w-16 text-primary-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise AI for Airlines</h1>
            <p className="text-lg text-primary-100 mb-6">
              Proven AI solutions delivering measurable ROI across operations, revenue management, customer experience, and sustainability
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-primary-600 px-4 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4" />
                <span>500+ Airlines Worldwide</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-600 px-4 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4" />
                <span>$5B+ Annual Savings Generated</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-600 px-4 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4" />
                <span>99.99% System Uptime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {renderSolutions().map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                    <p className="text-sm text-secondary-600 mt-2">{solution.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-primary-700 mb-3">Key Capabilities</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, j) => (
                          <li key={j} className="flex gap-2 text-sm text-secondary-700">
                            <CheckCircle className="h-4 w-4 text-success-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {solution.metrics.map((metric, j) => (
                          <span key={j} className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Implementation Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  phase: 'Phase 1: Assessment',
                  duration: '2-4 weeks',
                  items: ['Current systems audit', 'Data readiness assessment', 'ROI modeling', 'Stakeholder alignment']
                },
                {
                  phase: 'Phase 2: Integration',
                  duration: '4-8 weeks',
                  items: ['API integration with existing systems', 'Data pipeline setup', 'Model training', 'Security & compliance validation']
                },
                {
                  phase: 'Phase 3: Deployment',
                  duration: '2-4 weeks',
                  items: ['Pilot deployment', 'Performance monitoring', 'Team training', 'Go-live support']
                },
                {
                  phase: 'Phase 4: Optimization',
                  duration: 'Ongoing',
                  items: ['Continuous model improvement', 'Performance tuning', 'Feature expansion', 'ROI tracking']
                }
              ].map((phase, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    {i < 3 && <div className="w-1 h-16 bg-primary-200 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-semibold text-primary-800">{phase.phase}</h3>
                    <p className="text-sm text-secondary-600 mb-3">{phase.duration}</p>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-secondary-700">
                          <ArrowRight className="h-3 w-3 text-primary-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Enterprise-Grade Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <AlertCircle className="h-8 w-8 text-primary-600" />,
                title: 'Security & Compliance',
                items: ['SOC2 Type II', 'GDPR Compliant', 'ISO 27001', 'Data Encryption']
              },
              {
                icon: <Zap className="h-8 w-8 text-primary-600" />,
                title: 'Performance',
                items: ['99.99% Uptime SLA', '<100ms Latency', 'Auto-scaling', 'Multi-region']
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-primary-600" />,
                title: 'Analytics',
                items: ['Real-time Dashboards', 'Custom Reports', 'Predictive Insights', 'ROI Tracking']
              },
              {
                icon: <Users className="h-8 w-8 text-primary-600" />,
                title: 'Support',
                items: ['24/7 Technical Support', 'Dedicated Account Manager', 'SLA-backed Response', 'Training & Onboarding']
              }
            ].map((feature, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-primary-800 mb-3">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, j) => (
                      <li key={j} className="text-sm text-secondary-600 flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-success-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Enterprise Customer Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">$12.5M</div>
                <p className="text-secondary-700">Annual cost savings from predictive maintenance and fuel optimization</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">4.2%</div>
                <p className="text-secondary-700">Revenue increase through dynamic pricing and ancillary optimization</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">99.2%</div>
                <p className="text-secondary-700">On-time performance improvement with flight operations optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Airline Operations?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our aviation AI specialists to discuss your specific operational challenges and ROI opportunities
          </p>
          <Button size="lg" variant="secondary">Schedule Enterprise Consultation</Button>
        </div>
      </section>
    </>
  );
};

export default AirlineSolutionsPage;
