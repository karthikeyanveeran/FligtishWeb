import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Code, Download, Server, Shield, Zap, BookOpen, GitBranch, Package } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { SwaggerUI } from '../components/SwaggerUI';

export const ApiDocsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('swagger');
  const [apiVersion, setApiVersion] = useState('v3');

  const sdks = [
    { name: 'Python', icon: '🐍', version: '3.0.0', download: '/sdks/flightish-python-3.0.0.tar.gz' },
    { name: 'JavaScript/Node.js', icon: '📦', version: '3.0.0', download: '/sdks/flightish-js-3.0.0.tgz' },
    { name: 'PHP', icon: '🐘', version: '3.0.0', download: '/sdks/flightish-php-3.0.0.zip' },
    { name: 'Java', icon: '☕', version: '3.0.0', download: '/sdks/flightish-java-3.0.0.jar' },
    { name: 'Go', icon: '🔷', version: '3.0.0', download: '/sdks/flightish-go-3.0.0.tar.gz' },
    { name: 'Ruby', icon: '💎', version: '3.0.0', download: '/sdks/flightish-ruby-3.0.0.gem' },
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
    { event: 'booking.created', description: 'Triggered when a new booking is created', category: 'Booking' },
    { event: 'booking.confirmed', description: 'Triggered when booking is confirmed', category: 'Booking' },
    { event: 'booking.cancelled', description: 'Triggered when booking is cancelled', category: 'Booking' },
    { event: 'booking.modified', description: 'Triggered when booking details are modified', category: 'Booking' },
    { event: 'payment.received', description: 'Triggered when payment is received', category: 'Payment' },
    { event: 'payment.failed', description: 'Triggered when payment fails', category: 'Payment' },
    { event: 'payment.refunded', description: 'Triggered when payment is refunded', category: 'Payment' },
    { event: 'hotel.updated', description: 'Triggered when hotel information is updated', category: 'Hotel' },
    { event: 'hotel.availability.changed', description: 'Triggered when room availability changes', category: 'Hotel' },
    { event: 'insurance.purchased', description: 'Triggered when travel insurance is purchased', category: 'Insurance' },
    { event: 'loan.approved', description: 'Triggered when travel loan is approved', category: 'Loan' },
    { event: 'document.uploaded', description: 'Triggered when travel document is uploaded', category: 'Document' }
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
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-primary-200">API Version:</span>
                <select 
                  value={apiVersion} 
                  onChange={(e) => setApiVersion(e.target.value)}
                  className="bg-primary-600 text-white px-3 py-1 rounded border border-primary-500 text-sm font-semibold"
                >
                  <option value="v3">v3.0.0 (Latest)</option>
                  <option value="v2">v2.5.0</option>
                  <option value="v1">v1.8.0 (Legacy)</option>
                </select>
              </div>
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
              { label: 'API Endpoints', value: '45+' },
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
          {/* Version Info Banner */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-primary-900">API Version {apiVersion}</h3>
                <p className="text-sm text-primary-700 mt-1">
                  {apiVersion === 'v3' && 'Latest stable release with AI-powered features, enhanced security, and GraphQL support'}
                  {apiVersion === 'v2' && 'Stable release with REST API, webhooks, and real-time updates'}
                  {apiVersion === 'v1' && 'Legacy version - Migration to v3 recommended by Q4 2025'}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                apiVersion === 'v3' ? 'bg-success-100 text-success-800' :
                apiVersion === 'v2' ? 'bg-info-100 text-info-800' :
                'bg-warning-100 text-warning-800'
              }`}>
                {apiVersion === 'v3' ? 'LATEST' : apiVersion === 'v2' ? 'STABLE' : 'LEGACY'}
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            {[
              { id: 'swagger', label: 'Interactive API', icon: <Code className="h-4 w-4" /> },
              { id: 'versions', label: 'API Versions', icon: <GitBranch className="h-4 w-4" /> },
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

          {/* API Versions Tab */}
          {activeTab === 'versions' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-primary-600" />
                    API Version Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold">Feature</th>
                          <th className="text-center py-3 px-4 font-semibold">v3.0.0</th>
                          <th className="text-center py-3 px-4 font-semibold">v2.5.0</th>
                          <th className="text-center py-3 px-4 font-semibold">v1.8.0</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { feature: 'REST API', v3: true, v2: true, v1: true },
                          { feature: 'GraphQL API', v3: true, v2: false, v1: false },
                          { feature: 'AI-Powered Search', v3: true, v2: false, v1: false },
                          { feature: 'Real-time Webhooks', v3: true, v2: true, v1: false },
                          { feature: 'Batch Operations', v3: true, v2: true, v1: false },
                          { feature: 'Rate Limit', v3: '10K/min', v2: '5K/min', v1: '1K/min' },
                          { feature: 'Response Time', v3: '<50ms', v2: '<100ms', v1: '<200ms' },
                          { feature: 'OAuth 2.0', v3: true, v2: true, v1: false },
                          { feature: 'API Key Auth', v3: true, v2: true, v1: true },
                          { feature: 'Pagination', v3: 'Cursor-based', v2: 'Offset-based', v1: 'Page-based' },
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium">{row.feature}</td>
                            <td className="py-3 px-4 text-center">
                              {typeof row.v3 === 'boolean' ? (
                                row.v3 ? <span className="text-success-600 text-xl">✓</span> : <span className="text-gray-300 text-xl">✗</span>
                              ) : (
                                <code className="text-xs bg-success-50 text-success-700 px-2 py-1 rounded">{row.v3}</code>
                              )}
                            </td>
                            <td className="py-3 px-4 text-center">
                              {typeof row.v2 === 'boolean' ? (
                                row.v2 ? <span className="text-success-600 text-xl">✓</span> : <span className="text-gray-300 text-xl">✗</span>
                              ) : (
                                <code className="text-xs bg-info-50 text-info-700 px-2 py-1 rounded">{row.v2}</code>
                              )}
                            </td>
                            <td className="py-3 px-4 text-center">
                              {typeof row.v1 === 'boolean' ? (
                                row.v1 ? <span className="text-success-600 text-xl">✓</span> : <span className="text-gray-300 text-xl">✗</span>
                              ) : (
                                <code className="text-xs bg-warning-50 text-warning-700 px-2 py-1 rounded">{row.v1}</code>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-primary-800">v3.0.0</h3>
                      <span className="bg-success-100 text-success-800 text-xs font-bold px-2 py-1 rounded">LATEST</span>
                    </div>
                    <p className="text-sm text-secondary-600 mb-4">Released: January 2025</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-success-600 mt-0.5">•</span>
                        <span>GraphQL API support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success-600 mt-0.5">•</span>
                        <span>AI-powered recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success-600 mt-0.5">•</span>
                        <span>Enhanced security (OAuth 2.1)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success-600 mt-0.5">•</span>
                        <span>Real-time data streaming</span>
                      </li>
                    </ul>
                    <Button variant="primary" fullWidth className="mt-4">Use v3</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-primary-800">v2.5.0</h3>
                      <span className="bg-info-100 text-info-800 text-xs font-bold px-2 py-1 rounded">STABLE</span>
                    </div>
                    <p className="text-sm text-secondary-600 mb-4">Released: June 2024</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-info-600 mt-0.5">•</span>
                        <span>REST API with webhooks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-info-600 mt-0.5">•</span>
                        <span>Batch operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-info-600 mt-0.5">•</span>
                        <span>OAuth 2.0 authentication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-info-600 mt-0.5">•</span>
                        <span>Advanced filtering</span>
                      </li>
                    </ul>
                    <Button variant="outline" fullWidth className="mt-4">Use v2</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-primary-800">v1.8.0</h3>
                      <span className="bg-warning-100 text-warning-800 text-xs font-bold px-2 py-1 rounded">LEGACY</span>
                    </div>
                    <p className="text-sm text-secondary-600 mb-4">Released: March 2023</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-warning-600 mt-0.5">•</span>
                        <span>Basic REST API</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warning-600 mt-0.5">•</span>
                        <span>API key authentication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warning-600 mt-0.5">•</span>
                        <span>Limited rate limits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warning-600 mt-0.5">•</span>
                        <span>EOL: Q4 2025</span>
                      </li>
                    </ul>
                    <Button variant="outline" fullWidth className="mt-4" disabled>Deprecated</Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Swagger Tab */}
          {activeTab === 'swagger' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              {/* Quick Start Guide */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-primary-600">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 font-bold">1</span>
                      </div>
                      <h3 className="font-bold text-gray-900">Get API Key</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Sign up for free API access with 10K requests/month</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded block">Authorization: Bearer YOUR_KEY</code>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent-600">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                        <span className="text-accent-600 font-bold">2</span>
                      </div>
                      <h3 className="font-bold text-gray-900">Try Endpoints</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Test all endpoints directly in the browser below</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded block">Click "Try it out" button</code>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-success-600">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
                        <span className="text-success-600 font-bold">3</span>
                      </div>
                      <h3 className="font-bold text-gray-900">Integrate</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Copy code samples and integrate into your app</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded block">View SDKs tab for libraries</code>
                  </CardContent>
                </Card>
              </div>

              {/* API Stats */}
              <Card className="bg-gradient-to-r from-primary-50 to-accent-50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary-600">45+</div>
                      <div className="text-sm text-gray-600">Endpoints</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">&lt;50ms</div>
                      <div className="text-sm text-gray-600">Avg Response</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">99.99%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">10K/min</div>
                      <div className="text-sm text-gray-600">Rate Limit</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">REST+GraphQL</div>
                      <div className="text-sm text-gray-600">Protocols</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Swagger UI */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary-600" />
                      Interactive API Explorer - v{apiVersion}
                    </CardTitle>
                    <div className="flex gap-2">
                      <button className="text-sm px-3 py-1 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors">
                        Download OpenAPI Spec
                      </button>
                      <button className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        View Postman Collection
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-900 mb-1">Authentication Required</h4>
                        <p className="text-sm text-yellow-800">Most endpoints require an API key. Click "Authorize" button below and enter your key to test authenticated endpoints.</p>
                      </div>
                    </div>
                  </div>
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
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-mono font-semibold text-primary-800">{webhook.event}</h4>
                              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded">{webhook.category}</span>
                            </div>
                            <p className="text-secondary-600 text-sm">{webhook.description}</p>
                          </div>
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded text-primary-700 ml-4">
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