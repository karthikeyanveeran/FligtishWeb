import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Brain, Network, Database, Shield } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About LA FLIGHTISH GLOBAL</h1>
            <p className="text-lg md:text-xl text-primary-100">
              Your trusted partner for AI-powered travel solutions, insurance products, and financial services serving the US, Australian, and Indian markets since 2018.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Story</h2>
              <p className="text-lg text-secondary-700 mb-6">
                Founded in 2018, LA FLIGHTISH GLOBAL was established with a vision to revolutionize travel services through cutting-edge AI and API solutions. What began as a startup focused on travel insurance has evolved into an industry leader in AI-powered travel technology, offering a comprehensive suite of intelligent solutions for the global travel industry.
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                Our founders, Dr. Michael Chen (AI Research) and Sarah Williams (Travel Tech), pioneering experts in artificial intelligence and travel technology, recognized the transformative potential of combining advanced machine learning with travel services. Their vision was to create intelligent systems that could understand traveler needs, predict market trends, and deliver personalized solutions at scale.
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                Our breakthrough came in 2020 with the launch of our proprietary LangChain-powered travel recommendation engine and Retrieval-Augmented Generation (RAG) systems for document processing. These innovations have redefined how travel companies handle insurance underwriting, loan approvals, and document verification.
              </p>
              <p className="text-lg text-secondary-700">
                Today, we serve over 120,000 customers and 800+ business partners across the US, Australia, and India, providing AI-powered insurance solutions, intelligent loan processing, advanced document management, and enterprise-grade API integrations that are transforming the travel industry's digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Mission</h2>
              <p className="text-lg text-secondary-700 mb-6">
                At LA FLIGHTISH GLOBAL, our mission is to harness the power of artificial intelligence to transform the travel industry, making services more intelligent, personalized, and accessible for both travelers and businesses.
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                We believe that AI technology should serve human needs by removing friction from travel experiences. Through our advanced LangChain implementations and Retrieval-Augmented Generation (RAG) systems, we're creating a future where travel services anticipate needs, adapt to changing conditions, and deliver unprecedented value.
              </p>
              <p className="text-lg text-secondary-700">
                Our commitment to AI innovation extends beyond our products – we actively contribute to the global AI community through research partnerships, open-source contributions, and educational initiatives that advance the responsible development of artificial intelligence in the travel sector.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              These principles guide everything we do at LA FLIGHTISH GLOBAL.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'AI Excellence',
                description: 'We pursue the highest standards in artificial intelligence development, continuously advancing our models and algorithms to deliver unparalleled travel solutions.',
                icon: <Brain className="h-8 w-8 text-primary-600 mb-4" />
              },
              {
                title: 'Ethical Innovation',
                description: 'We develop AI responsibly, ensuring our technologies are transparent, fair, and designed with human-centered principles that respect privacy and promote trust.',
                icon: <Shield className="h-8 w-8 text-primary-600 mb-4" />
              },
              {
                title: 'Technical Leadership',
                description: 'We pioneer advanced implementations of LangChain, RAG, and other ML frameworks, setting industry standards for intelligent travel technology.',
                icon: <Network className="h-8 w-8 text-primary-600 mb-4" />
              },
              {
                title: 'Global Impact',
                description: 'We build AI solutions that transcend borders, understanding cultural nuances and adapting to diverse market needs across our global operations.',
                icon: <Database className="h-8 w-8 text-primary-600 mb-4" />
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                {value.icon}
                <h3 className="text-xl font-semibold text-primary-800 mb-3">{value.title}</h3>
                <p className="text-secondary-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary-800 mb-4">Our AI Technology Stack</h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Powering the future of travel with advanced artificial intelligence frameworks.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-primary-800 mb-4">LangChain Framework</h3>
                <p className="text-secondary-700 mb-4">
                  Our proprietary implementation of LangChain enables sophisticated language understanding and generation capabilities across our platform. This technology powers:
                </p>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Intelligent travel recommendation systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Automated insurance policy analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Natural language interfaces for travel planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Chain-of-thought reasoning for complex travel scenarios</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Retrieval-Augmented Generation (RAG)</h3>
                <p className="text-secondary-700 mb-4">
                  Our RAG systems enhance the accuracy and relevance of AI-generated content by retrieving and incorporating real-time information from our vast knowledge base:
                </p>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Intelligent document processing and verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Context-aware travel insurance recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Real-time integration of travel regulations and requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Semantic search across travel documentation</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience the Power of AI in Travel</h2>
            <p className="text-lg text-primary-100 mb-8">
              Join hundreds of forward-thinking businesses leveraging our AI solutions to transform their travel services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Demo
                </Button>
              </Link>
              <Link to="/ai-solutions">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white/20"
                >
                  Explore AI Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};