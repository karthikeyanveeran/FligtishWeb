import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Code, Download, Server, Shield, Zap, BookOpen, GitBranch, Package } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { SwaggerUI } from '../components/SwaggerUI';

export const ApiDocsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('swagger');

  const sdks = [
    { name: 'Python', icon: '🐍', version: '2.0.0', download: '/sdks/flightish-python-2.0.0.tar.gz' },
    { name: 'JavaScript/Node.js', icon: '📦', version: '2.0.0', download: '/sdks/flightish-js-2.0.0.tgz' },
    { name: 'PHP', icon: '🐘', version: '2.0.0', download: '/sdks/flightish-php-2.0.0.zip' },
    { name: 'Java', icon: '☕', version: '2.0.0', download: '/sdks/flightish-java-2.0.0.jar' },
  ];

  const environments = [
    {
      name: 'Production',
      url: 'https://api.flightishglobal.com',
      description: 'Live environment for production transactions',
      badge: 'LIVE'
    },
    {
      name: 'Sandbox',
      url: 'https://sandbox.flightishglobal.com',
      description: 'Testing environment with mock data',
      badge: 'TEST'
    },
    {
      name: 'Staging',
      url: 'https://staging.flightishglobal.com',
      description: 'Pre-production environment',
      badge: 'STAGING'
    }
  ];

  const webhookEvents = [
    { event: 'booking.created', description: 'Triggered when a new booking is created' },
    { event: 'booking.confirmed', description: 'Triggered when booking is confirmed' },
    { event: 'booking.cancelled', description: 'Triggered when booking is cancelled' },
    { event: 'payment.received', description: 'Triggered when payment is received' },
    { event: 'hotel.updated', description: 'Triggered when hotel information is updated' }
  ];

  return (
    <>
      <Helmet>
        <title>API Documentation | FLIGHTISH GLOBAL</title>
        <meta name="description" content="Enterprise-grade API documentation with Swagger UI, SDKs, and webhooks" />
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
              <BookOpen className="h-8 w-8" />
              <span className="text-sm font-semibold text-primary-200">API v2.0.0</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              API Documentation
            </h1>
            <p className="text-lg text-primary-100 mb-8">
              Complete reference for FLIGHTISH GLOBAL Hotel Management System API
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                Get API Key
              </Button>
              <a href="/integration-guide">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                  Integration Guide
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'API Endpoints', value: '15+' },
              { label: 'Response Time', value: '<100ms' },
              { label: 'Uptime SLA', value: '99.99%' },
              { label: 'Rate Limit', value: '10K/min' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-primary-800">{stat.value}</p>
                <p className="text-secondary-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            {[
              { id: 'swagger', label: 'Interactive API', icon: <Code className="h-4 w-4" /> },
              { id: 'environments', label: 'Environments', icon: <Server className="h-4 w-4" /> },
              { id: 'sdks', label: 'SDKs', icon: <Package className="h-4 w-4" /> },
              { id: 'webhooks', label: 'Webhooks', icon: <Zap className="h-4 w-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-secondary-600 hover:text-secondary-900'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Swagger Tab */}
          {activeTab === 'swagger' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary-600" />
                    Interactive API Explorer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SwaggerUI />
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Environments Tab */}
          {activeTab === 'environments' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {environments.map((env, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-primary-800">{env.name}</h3>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${
                          env.badge === 'LIVE' ? 'bg-success-100 text-success-800' :
                          env.badge === 'TEST' ? 'bg-info-100 text-info-800' :
                          'bg-warning-100 text-warning-800'
                        }`}>
                          {env.badge}
                        </span>
                      </div>
                      <p className="text-secondary-600 mb-4">{env.description}</p>
                      <code className="block bg-gray-100 p-3 rounded text-sm break-all text-primary-700 mb-4">
                        {env.url}
                      </code>
                      <Button variant="outline" fullWidth>
                        View Docs
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Environment Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Production Environment</h4>
                    <p className="text-blue-800 text-sm mb-3">Use for live transactions and real data</p>
                    <code className="block bg-white p-2 rounded text-sm border border-blue-200">
                      BASE_URL=https://api.flightishglobal.com
                    </code>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Sandbox Environment</h4>
                    <p className="text-green-800 text-sm mb-3">Use for testing with mock data</p>
                    <code className="block bg-white p-2 rounded text-sm border border-green-200">
                      BASE_URL=https://sandbox.flightishglobal.com
                    </code>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* SDKs Tab */}
          {activeTab === 'sdks' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sdks.map((sdk, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{sdk.icon}</span>
                        <div>
                          <h3 className="text-lg font-semibold text-primary-800">{sdk.name}</h3>
                          <p className="text-sm text-secondary-600">v{sdk.version}</p>
                        </div>
                      </div>
                      <p className="text-secondary-600 mb-4">
                        Official SDK for {sdk.name} with full API support
                      </p>
                      <div className="space-y-2">
                        <Button variant="outline" fullWidth className="flex items-center justify-center gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                        <Button variant="outline" fullWidth>
                          View on GitHub
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Installation Examples</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Python</h4>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                      <code>pip install flightish-sdk</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">JavaScript/Node.js</h4>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                      <code>npm install @flightish/sdk</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">PHP</h4>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                      <code>composer require flightish/sdk</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Webhooks Tab */}
          {activeTab === 'webhooks' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary-600" />
                    Webhook Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {webhookEvents.map((webhook, i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-mono font-semibold text-primary-800">{webhook.event}</h4>
                            <p className="text-secondary-600 text-sm mt-1">{webhook.description}</p>
                          </div>
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded text-primary-700">
                            POST
                          </code>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Webhook Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Webhook Payload Example</h4>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                      <code>{`{
  "event": "booking.created",
  "timestamp": "2024-03-20T10:30:00Z",
  "data": {
    "bookingId": "BK123456",
    "hotelId": "HT789",
    "status": "CONFIRMED"
  }
}`}</code>
                    </pre>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Security</h4>
                    <p className="text-yellow-800 text-sm">
                      All webhooks are signed with HMAC-SHA256. Verify the signature using your webhook secret.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary-800 mb-8">Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'API Key Security',
                  points: ['Store keys in environment variables', 'Rotate keys regularly', 'Use IP whitelisting']
                },
                {
                  title: 'Error Handling',
                  points: ['Implement exponential backoff', 'Log all errors', 'Monitor rate limits']
                },
                {
                  title: 'Performance',
                  points: ['Cache responses when possible', 'Use pagination', 'Batch requests']
                },
                {
                  title: 'Monitoring',
                  points: ['Track API usage', 'Set up alerts', 'Monitor latency']
                }
              ].map((practice, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary-800 mb-4">{practice.title}</h3>
                    <ul className="space-y-2">
                      {practice.points.map((point, j) => (
                        <li key={j} className="flex items-center gap-2 text-secondary-700">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Our technical support team is available 24/7 to assist with API integration
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                View Status Page
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ApiDocsPage;