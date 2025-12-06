import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { BookOpen, Code, CheckCircle, AlertCircle, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export const IntegrationGuidePage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Register & Get API Key',
      description: 'Create a developer account and generate your API credentials',
      details: [
        'Visit the dashboard',
        'Create a new application',
        'Generate API key (save securely)',
        'Configure IP whitelist',
        'Set webhook endpoints'
      ]
    },
    {
      title: 'Sandbox Testing',
      description: 'Test your integration with mock data in sandbox environment',
      details: [
        'Use sandbox.flightishglobal.com',
        'Test all API endpoints',
        'Verify error handling',
        'Test webhook delivery',
        'Load testing (up to 1000 req/sec)'
      ]
    },
    {
      title: 'Security Review',
      description: 'Our team reviews your implementation for security compliance',
      details: [
        'Code review',
        'Security audit',
        'Compliance check',
        'Performance validation',
        'Approval (24-48 hours)'
      ]
    },
    {
      title: 'Production Launch',
      description: 'Switch to production and start processing real transactions',
      details: [
        'Update API endpoints',
        'Switch to production keys',
        'Enable monitoring',
        'Set up alerts',
        'Go live!'
      ]
    }
  ];

  const commonIssues = [
    {
      issue: 'Authentication Failed (401)',
      cause: 'Invalid or missing API key',
      solution: 'Verify API key is correct and included in apikey header'
    },
    {
      issue: 'IP Not Whitelisted (403)',
      cause: 'Request from unauthorized IP address',
      solution: 'Add your IP to whitelist in dashboard settings'
    },
    {
      issue: 'Rate Limit Exceeded (429)',
      cause: 'Too many requests in short time',
      solution: 'Implement exponential backoff and request queuing'
    },
    {
      issue: 'Invalid Request (400)',
      cause: 'Malformed request or missing required fields',
      solution: 'Validate request format against API specification'
    },
    {
      issue: 'Timeout',
      cause: 'Request taking too long',
      solution: 'Increase timeout, check network, or optimize query'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Integration Guide | FLIGHTISH GLOBAL</title>
        <meta name="description" content="Step-by-step guide to integrate with FLIGHTISH GLOBAL API" />
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
              <span className="text-sm font-semibold text-primary-200">Getting Started</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Integration Guide
            </h1>
            <p className="text-lg text-primary-100">
              Complete step-by-step guide to integrate with FLIGHTISH GLOBAL API
            </p>
          </motion.div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-12">Integration Steps</h2>

            {/* Step Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              {steps.map((step, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    activeStep === i
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 bg-white hover:border-primary-300'
                  }`}
                >
                  <div className={`text-2xl font-bold mb-2 ${
                    activeStep === i ? 'text-primary-600' : 'text-secondary-600'
                  }`}>
                    {i + 1}
                  </div>
                  <p className="font-semibold text-primary-800 text-sm">{step.title}</p>
                </motion.button>
              ))}
            </div>

            {/* Step Details */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Step {activeStep + 1}: {steps[activeStep].title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-secondary-700">
                    {steps[activeStep].description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-primary-800 mb-4">What to do:</h4>
                    <ul className="space-y-3">
                      {steps[activeStep].details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-success-600 flex-shrink-0" />
                          <span className="text-secondary-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {activeStep < steps.length - 1 && (
                    <button
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="mt-6 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    >
                      Next Step →
                    </button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-8">Code Examples</h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary-600" />
                    Basic Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`// Initialize client
const client = new FlightishClient({
  apiKey: 'your_api_key',
  environment: 'production' // or 'sandbox'
});

// All requests automatically include the API key
const results = await client.hotels.search({...});`}</code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`try {
  const results = await client.hotels.search(query);
} catch (error) {
  if (error.code === 'RATE_LIMIT_EXCEEDED') {
    // Implement exponential backoff
    await delay(Math.pow(2, retryCount) * 1000);
    return retry();
  } else if (error.code === 'UNAUTHORIZED') {
    // Check API key
    console.error('Invalid API key');
  } else {
    // Handle other errors
    console.error(error.message);
  }
}`}</code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Webhook Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return hash === signature;
}

// In your webhook handler
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-flightish-signature'];
  const payload = req.rawBody;
  
  if (!verifyWebhook(payload, signature, WEBHOOK_SECRET)) {
    return res.status(401).send('Unauthorized');
  }
  
  // Process webhook
  res.send('OK');
});`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-8">Troubleshooting</h2>

            <div className="space-y-4">
              {commonIssues.map((item, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="h-6 w-6 text-warning-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary-800 mb-2">{item.issue}</h4>
                        <p className="text-secondary-600 mb-3">
                          <span className="font-semibold">Cause:</span> {item.cause}
                        </p>
                        <p className="text-secondary-600">
                          <span className="font-semibold">Solution:</span> {item.solution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-8">Best Practices</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: 'Security',
                  points: [
                    'Never expose API keys in client-side code',
                    'Use environment variables for credentials',
                    'Rotate keys regularly',
                    'Enable IP whitelisting'
                  ]
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: 'Performance',
                  points: [
                    'Implement request caching',
                    'Use pagination for large datasets',
                    'Batch requests when possible',
                    'Monitor response times'
                  ]
                },
                {
                  icon: <AlertCircle className="h-6 w-6" />,
                  title: 'Error Handling',
                  points: [
                    'Implement exponential backoff',
                    'Log all errors for debugging',
                    'Set appropriate timeouts',
                    'Handle rate limiting gracefully'
                  ]
                },
                {
                  icon: <CheckCircle className="h-6 w-6" />,
                  title: 'Monitoring',
                  points: [
                    'Track API usage metrics',
                    'Set up error alerts',
                    'Monitor latency',
                    'Review logs regularly'
                  ]
                }
              ].map((practice, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-primary-600">{practice.icon}</div>
                      <h3 className="text-lg font-semibold text-primary-800">{practice.title}</h3>
                    </div>
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
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Our technical team is available 24/7 to assist with integration
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-primary-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrationGuidePage;