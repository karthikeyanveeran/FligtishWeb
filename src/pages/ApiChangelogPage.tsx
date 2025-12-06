import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { GitBranch, CheckCircle, AlertCircle, Zap, Bug, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export const ApiChangelogPage: React.FC = () => {
  const [expandedVersion, setExpandedVersion] = useState('2.0.0');

  const versions = [
    {
      version: '2.0.0',
      date: '2024-03-20',
      status: 'CURRENT',
      highlights: 'Major release with new hotel booking endpoints',
      changes: [
        { type: 'feature', title: 'New Hotel Booking API', description: 'Complete hotel booking workflow with real-time availability' },
        { type: 'feature', title: 'Webhook Support', description: 'Real-time event notifications for booking updates' },
        { type: 'improvement', title: 'Performance Optimization', description: 'Reduced response time by 40%' },
        { type: 'security', title: 'Enhanced Security', description: 'Added IP whitelisting and rate limiting' }
      ]
    },
    {
      version: '1.5.0',
      date: '2024-02-15',
      status: 'STABLE',
      highlights: 'Bug fixes and performance improvements',
      changes: [
        { type: 'bugfix', title: 'Fixed search pagination', description: 'Resolved issue with large result sets' },
        { type: 'improvement', title: 'Improved error messages', description: 'More descriptive error responses' },
        { type: 'feature', title: 'Added currency conversion', description: 'Real-time currency exchange rates' }
      ]
    },
    {
      version: '1.4.0',
      date: '2024-01-10',
      status: 'DEPRECATED',
      highlights: 'Legacy version - upgrade recommended',
      changes: [
        { type: 'feature', title: 'Initial reference data endpoints', description: 'Nationalities and currencies' },
        { type: 'feature', title: 'Basic hotel search', description: 'Search by city and dates' }
      ]
    }
  ];

  const getChangeIcon = (type: string) => {
    switch(type) {
      case 'feature': return <Zap className="h-4 w-4 text-success-600" />;
      case 'improvement': return <CheckCircle className="h-4 w-4 text-info-600" />;
      case 'bugfix': return <Bug className="h-4 w-4 text-warning-600" />;
      case 'security': return <Shield className="h-4 w-4 text-error-600" />;
      default: return <AlertCircle className="h-4 w-4 text-secondary-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'CURRENT': return 'bg-success-100 text-success-800';
      case 'STABLE': return 'bg-info-100 text-info-800';
      case 'DEPRECATED': return 'bg-warning-100 text-warning-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Helmet>
        <title>API Changelog | FLIGHTISH GLOBAL</title>
        <meta name="description" content="API version history and changelog" />
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
              <GitBranch className="h-8 w-8" />
              <span className="text-sm font-semibold text-primary-200">Version Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              API Changelog
            </h1>
            <p className="text-lg text-primary-100">
              Track all updates, improvements, and changes to the FLIGHTISH GLOBAL API
            </p>
          </motion.div>
        </div>
      </section>

      {/* Version Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {versions.map((v, index) => (
                <motion.div
                  key={v.version}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setExpandedVersion(expandedVersion === v.version ? '' : v.version)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold text-primary-800">v{v.version}</h3>
                              <span className={`text-xs font-bold px-3 py-1 rounded-full ${getStatusBadge(v.status)}`}>
                                {v.status}
                              </span>
                            </div>
                            <p className="text-secondary-600 text-sm">Released {v.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary-800">{v.highlights}</p>
                        </div>
                      </div>
                    </CardHeader>

                    {expandedVersion === v.version && (
                      <CardContent className="border-t border-gray-200 pt-6">
                        <div className="space-y-3">
                          {v.changes.map((change, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <div className="mt-1">
                                {getChangeIcon(change.type)}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-primary-800">{change.title}</h4>
                                <p className="text-secondary-600 text-sm">{change.description}</p>
                              </div>
                              <span className="text-xs font-semibold text-secondary-600 uppercase whitespace-nowrap">
                                {change.type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-8">Upgrade Guide</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upgrading from v1.x to v2.0</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Breaking Changes</h4>
                    <ul className="space-y-2 text-secondary-700">
                      <li>• Response format updated to include metadata</li>
                      <li>• Authentication header changed from X-API-Key to apikey</li>
                      <li>• Pagination parameters renamed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Migration Steps</h4>
                    <ol className="space-y-2 text-secondary-700">
                      <li>1. Update API endpoint URLs to v2 endpoints</li>
                      <li>2. Update authentication headers</li>
                      <li>3. Test in sandbox environment</li>
                      <li>4. Deploy to production</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Deprecation Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-secondary-700">
                    We maintain backward compatibility for at least 12 months after a new major version release.
                  </p>
                  <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
                    <h4 className="font-semibold text-warning-900 mb-2">v1.4.0 Deprecation Notice</h4>
                    <p className="text-warning-800 text-sm">
                      v1.4.0 will be deprecated on 2024-12-31. Please upgrade to v2.0.0 before this date.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Migration Support?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Our technical team can help you upgrade to the latest API version
            </p>
            <button className="bg-white text-primary-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApiChangelogPage;