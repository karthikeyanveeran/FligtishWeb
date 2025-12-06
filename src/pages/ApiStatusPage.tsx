import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Activity, CheckCircle, AlertCircle, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export const ApiStatusPage: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      name: 'Hotel Search API',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastIncident: '2024-03-15'
    },
    {
      name: 'Hotel Booking API',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '52ms',
      lastIncident: '2024-03-10'
    },
    {
      name: 'Reference Data API',
      status: 'operational',
      uptime: '100%',
      responseTime: '12ms',
      lastIncident: 'None'
    },
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '8ms',
      lastIncident: '2024-02-28'
    },
    {
      name: 'Webhook Service',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '120ms',
      lastIncident: '2024-03-18'
    },
    {
      name: 'Sandbox Environment',
      status: 'operational',
      uptime: '99.90%',
      responseTime: '65ms',
      lastIncident: '2024-03-19'
    }
  ];

  const incidents = [
    {
      date: '2024-03-19',
      title: 'Sandbox Environment Maintenance',
      description: 'Scheduled maintenance on sandbox servers',
      duration: '15 minutes',
      status: 'resolved'
    },
    {
      date: '2024-03-18',
      title: 'Webhook Delivery Delay',
      description: 'Temporary delay in webhook delivery due to high volume',
      duration: '8 minutes',
      status: 'resolved'
    },
    {
      date: '2024-03-15',
      title: 'Hotel Search API Latency',
      description: 'Increased response times on hotel search endpoint',
      duration: '12 minutes',
      status: 'resolved'
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'operational': return 'text-success-600';
      case 'degraded': return 'text-warning-600';
      case 'down': return 'text-error-600';
      default: return 'text-secondary-600';
    }
  };

  const getStatusBg = (status: string) => {
    switch(status) {
      case 'operational': return 'bg-success-50';
      case 'degraded': return 'bg-warning-50';
      case 'down': return 'bg-error-50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <>
      <Helmet>
        <title>API Status | FLIGHTISH GLOBAL</title>
        <meta name="description" content="Real-time API status and monitoring" />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <Activity className="h-8 w-8" />
              <span className="text-sm font-semibold text-primary-200">System Status</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              API Status & Monitoring
            </h1>
            <p className="text-lg text-primary-100">
              Real-time status of all FLIGHTISH GLOBAL API services
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-3 h-3 bg-success-400 rounded-full animate-pulse"></div>
              <span className="text-primary-100">All systems operational</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Overall Uptime', value: '99.97%', icon: <TrendingUp className="h-6 w-6" /> },
              { label: 'Avg Response Time', value: '52ms', icon: <Clock className="h-6 w-6" /> },
              { label: 'Active Services', value: '6/6', icon: <CheckCircle className="h-6 w-6" /> },
              { label: 'Last Updated', value: currentTime.toLocaleTimeString(), icon: <Activity className="h-6 w-6" /> }
            ].map((stat, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary-600">{stat.icon}</div>
                    <p className="text-secondary-600 text-sm">{stat.label}</p>
                  </div>
                  <p className="text-2xl font-bold text-primary-800">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-8">Service Status</h2>
            
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className={getStatusBg(service.status)}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-3 h-3 rounded-full ${
                            service.status === 'operational' ? 'bg-success-500' :
                            service.status === 'degraded' ? 'bg-warning-500' :
                            'bg-error-500'
                          }`}></div>
                          <div>
                            <h3 className="font-semibold text-primary-800">{service.name}</h3>
                            <p className="text-sm text-secondary-600">
                              Last incident: {service.lastIncident}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${getStatusColor(service.status)}`}>
                            {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                          </p>
                          <div className="flex gap-6 mt-2 text-sm text-secondary-600">
                            <span>Uptime: {service.uptime}</span>
                            <span>Response: {service.responseTime}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Incidents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-8">Recent Incidents</h2>
            
            <div className="space-y-4">
              {incidents.map((incident, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CheckCircle className="h-5 w-5 text-success-600" />
                          <h3 className="font-semibold text-primary-800">{incident.title}</h3>
                          <span className="text-xs bg-success-100 text-success-800 px-2 py-1 rounded">
                            RESOLVED
                          </span>
                        </div>
                        <p className="text-secondary-600 mb-2">{incident.description}</p>
                        <div className="flex gap-4 text-sm text-secondary-600">
                          <span>Date: {incident.date}</span>
                          <span>Duration: {incident.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-8">Scheduled Maintenance</h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <AlertCircle className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
                  <p className="text-secondary-600">
                    No scheduled maintenance at this time
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-primary-100 mb-8">
              Subscribe to status updates and incident notifications
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-3 bg-white text-primary-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApiStatusPage;