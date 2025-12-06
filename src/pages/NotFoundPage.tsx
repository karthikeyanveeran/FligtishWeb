import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, FileText } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

export const NotFoundPage: React.FC = () => {
  const popularPages = [
    { name: 'API Documentation', path: '/documentation', icon: <FileText className="h-4 w-4" /> },
    { name: 'API Solutions', path: '/api-solutions', icon: <Search className="h-4 w-4" /> },
    { name: 'Contact Us', path: '/contact', icon: <Home className="h-4 w-4" /> },
    { name: 'About Us', path: '/about', icon: <Home className="h-4 w-4" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Page Not Found | LA FLIGHTISH GLOBAL</title>
        <meta name="description" content="The page you're looking for doesn't exist. Find what you need from our popular pages." />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* 404 Illustration */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="text-8xl md:text-9xl font-bold text-primary-200 mb-4">404</div>
              <div className="w-32 h-1 bg-accent-500 mx-auto rounded-full"></div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-lg text-secondary-600 mb-6">
                The page you're looking for doesn't exist or has been moved. 
                Don't worry, let's get you back on track.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <Link to="/">
                <Button size="lg" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Go Home
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.history.back()}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
            </motion.div>

            {/* Popular Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-xl font-semibold text-primary-800 mb-6">
                Or visit one of our popular pages:
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                {popularPages.map((page, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <Link to={page.path}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="text-primary-600">
                              {page.icon}
                            </div>
                            <span className="font-medium text-primary-800">
                              {page.name}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-primary-800 mb-2">
                Need Help?
              </h3>
              <p className="text-secondary-600 mb-4">
                If you believe this is an error or need assistance finding what you're looking for, 
                our support team is here to help.
              </p>
              <Link to="/contact">
                <Button variant="outline">
                  Contact Support
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;