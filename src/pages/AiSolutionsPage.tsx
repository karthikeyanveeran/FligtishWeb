import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Network, 
  Database, 
  Code, 
  Search,
  Bot,
  Cpu,
  FileText,
  BarChart,
  Layers,
  Zap,
  CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';

export const AiSolutionsPage: React.FC = () => {
  const aiFrameworks = [
    {
      name: "LangChain",
      description: "A framework for developing applications powered by language models, providing tools to connect LLMs with external data sources and allowing them to interact with their environment.",
      features: [
        "Chain-of-thought reasoning",
        "Document retrieval integration",
        "Prompt management",
        "Agent-based workflows"
      ],
      icon: <Network className="h-8 w-8 text-primary-600" />
    },
    {
      name: "Retrieval-Augmented Generation (RAG)",
      description: "A technique that enhances LLM outputs by retrieving relevant information from external knowledge sources before generating responses, improving accuracy and reducing hallucinations.",
      features: [
        "Document indexing and embedding",
        "Semantic search capabilities",
        "Context-aware responses",
        "Real-time knowledge integration"
      ],
      icon: <Search className="h-8 w-8 text-primary-600" />
    }
  ];

  const llmConcepts = [
    {
      name: "Transformer Architecture",
      description: "The foundation of modern LLMs, using self-attention mechanisms to process sequential data and understand contextual relationships between words.",
      icon: <Layers className="h-6 w-6 text-primary-600" />
    },
    {
      name: "Prompt Engineering",
      description: "The practice of designing effective inputs to guide LLM behavior and outputs, including techniques like few-shot learning and chain-of-thought prompting.",
      icon: <FileText className="h-6 w-6 text-primary-600" />
    },
    {
      name: "Fine-tuning",
      description: "The process of adapting pre-trained models to specific domains or tasks by training on specialized datasets.",
      icon: <Zap className="h-6 w-6 text-primary-600" />
    },
    {
      name: "Embeddings",
      description: "Vector representations of text that capture semantic meaning, enabling similarity comparisons and information retrieval.",
      icon: <BarChart className="h-6 w-6 text-primary-600" />
    }
  ];

  const mlConcepts = [
    {
      name: "Supervised Learning",
      description: "Training models on labeled data to make predictions or classifications based on input features.",
      icon: <CheckCircle className="h-6 w-6 text-primary-600" />
    },
    {
      name: "Neural Networks",
      description: "Computational models inspired by the human brain, consisting of layers of interconnected nodes that process and transform data.",
      icon: <Network className="h-6 w-6 text-primary-600" />
    },
    {
      name: "Natural Language Processing",
      description: "The field focused on enabling computers to understand, interpret, and generate human language.",
      icon: <Bot className="h-6 w-6 text-primary-600" />
    },
    {
      name: "Vector Databases",
      description: "Specialized databases optimized for storing and querying high-dimensional vector data, essential for semantic search applications.",
      icon: <Database className="h-6 w-6 text-primary-600" />
    }
  ];

  const enterpriseAPIs = [
    {
      title: "Intelligent Document Processing API",
      description: "Extract, classify, and validate travel documents, passports, visas, and insurance policies with 99.2% accuracy using computer vision and NLP.",
      icon: <FileText className="h-8 w-8 text-primary-600" />,
      endpoints: ["/v3/ai/document-extract", "/v3/ai/document-classify", "/v3/ai/document-validate"],
      metrics: ["99.2% Accuracy", "<2s Processing", "150+ Document Types"],
      problems: ["Manual document verification taking 15-20 min per application", "Human error in data extraction (8-12% error rate)", "Compliance risks from missed document expiry dates"],
      solution: "Automated extraction and validation reduces processing time to <2 seconds with 99.2% accuracy, eliminating manual errors and ensuring compliance.",
      roi: "$2.8M annual savings for 100K applications/year"
    },
    {
      title: "Fraud Detection & Risk Scoring API",
      description: "Real-time fraud detection for bookings, insurance claims, and loan applications using behavioral analytics and anomaly detection.",
      icon: <Brain className="h-8 w-8 text-primary-600" />,
      endpoints: ["/v3/ai/fraud-detect", "/v3/ai/risk-score", "/v3/ai/anomaly-detect"],
      metrics: ["96% Fraud Detection", "0.3% False Positives", "Real-time Scoring"],
      problems: ["$4.5M annual fraud losses", "Manual review bottlenecks (2-3 days)", "High false positive rates (15-20%) causing customer friction"],
      solution: "ML models analyze 200+ signals in real-time, detecting 96% of fraud with only 0.3% false positives, enabling instant approvals for legitimate customers.",
      roi: "$3.2M fraud prevention + $1.1M operational savings annually"
    },
    {
      title: "Conversational AI & Virtual Agent API",
      description: "Multi-lingual AI agents handling customer inquiries, bookings, claims processing, and support across voice, chat, and email channels.",
      icon: <Bot className="h-8 w-8 text-primary-600" />,
      endpoints: ["/v3/ai/chat", "/v3/ai/voice", "/v3/ai/intent-classify"],
      metrics: ["85% Automation Rate", "40+ Languages", "<500ms Response"],
      problems: ["Customer support costs $8-12 per interaction", "24/7 coverage requiring 3 shifts", "Average wait time 8-12 minutes during peak"],
      solution: "AI agents handle 85% of inquiries automatically in 40+ languages with <500ms response time, escalating only complex cases to humans.",
      roi: "$5.6M annual savings on 700K interactions/year"
    },
    {
      title: "Predictive Analytics & Demand Forecasting API",
      description: "Forecast travel demand, pricing optimization, and inventory management using time-series analysis and external data signals.",
      icon: <BarChart className="h-8 w-8 text-primary-600" />,
      endpoints: ["/v3/ai/demand-forecast", "/v3/ai/price-optimize", "/v3/ai/inventory-predict"],
      metrics: ["94% Forecast Accuracy", "8-12% Revenue Lift", "Real-time Updates"],
      problems: ["Suboptimal pricing leaving 8-12% revenue on table", "Inventory imbalances causing 15% waste", "Manual forecasting taking 2-3 days per route"],
      solution: "ML models analyze historical data, seasonality, events, and 50+ external signals to optimize pricing and inventory in real-time.",
      roi: "$7.2M revenue increase + $1.8M cost reduction annually"
    },
    {
      title: "Personalization & Recommendation Engine API",
      description: "Hyper-personalized travel recommendations, upsells, and dynamic content using collaborative filtering and deep learning.",
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      endpoints: ["/v3/ai/recommend", "/v3/ai/personalize", "/v3/ai/next-best-action"],
      metrics: ["3.2x CTR Improvement", "22% Conversion Lift", "Real-time Personalization"],
      problems: ["Generic offers with 0.8% conversion rate", "Missed upsell opportunities (avg $45 per booking)", "High cart abandonment (68%)"],
      solution: "Deep learning models analyze user behavior, preferences, and context to deliver personalized recommendations with 3.2x higher engagement.",
      roi: "$4.5M incremental revenue from 15% conversion improvement"
    },
    {
      title: "Sentiment Analysis & Voice of Customer API",
      description: "Analyze customer feedback, reviews, and social media to extract insights, detect issues, and predict churn using NLP.",
      icon: <Network className="h-8 w-8 text-primary-600" />,
      endpoints: ["/v3/ai/sentiment", "/v3/ai/topic-extract", "/v3/ai/churn-predict"],
      metrics: ["92% Sentiment Accuracy", "Real-time Analysis", "25+ Languages"],
      problems: ["Manual review of 10K+ monthly reviews taking 40+ hours", "Delayed issue detection (avg 2-3 weeks)", "Customer churn costing $2.5M annually"],
      solution: "NLP models analyze all feedback in real-time, extracting actionable insights and predicting churn risk to enable proactive retention.",
      roi: "$1.8M churn reduction + $180K operational savings annually"
    }
  ];

  const useCases = [
    {
      title: "Intelligent Document Processing",
      description: "Automatically extract, classify, and process information from travel documents, insurance policies, and financial statements.",
      icon: <FileText className="h-8 w-8 text-primary-600" />
    },
    {
      title: "Personalized Travel Recommendations",
      description: "Provide tailored travel suggestions based on customer preferences, past behavior, and current trends.",
      icon: <Bot className="h-8 w-8 text-primary-600" />
    },
    {
      title: "Risk Assessment Automation",
      description: "Analyze customer data and travel patterns to automatically assess insurance risks and recommend appropriate coverage.",
      icon: <BarChart className="h-8 w-8 text-primary-600" />
    },
    {
      title: "Conversational Customer Support",
      description: "Deploy AI assistants that can handle customer inquiries, process claims, and provide real-time support across multiple languages.",
      icon: <Zap className="h-8 w-8 text-primary-600" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions | LA FLIGHTISH GLOBAL</title>
        <meta name="description" content="Advanced GenAI solutions including LangChain and RAG implementations for the travel and financial services industry." />
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
              Advanced <span className="text-accent-500">GenAI Solutions</span> for Travel Industry
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 mx-auto max-w-3xl">
              Leverage cutting-edge AI frameworks like LangChain and RAG to transform your travel and financial services with intelligent automation and personalized experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
                onClick={() => window.location.href = '/contact'}
              >
                Talk to AI Specialist
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GenAI Frameworks */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              GenAI Frameworks We Implement
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              We leverage state-of-the-art generative AI frameworks to build intelligent solutions for the travel and financial services industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {aiFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 rounded-full bg-primary-50 p-4 inline-block">
                      {framework.icon}
                    </div>
                    <CardTitle className="text-2xl">{framework.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-600 mb-6">{framework.description}</p>
                    <h4 className="font-semibold text-primary-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {framework.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-secondary-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LLM Concepts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Large Language Model Concepts
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Understanding the core technologies that power our AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {llmConcepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="rounded-full bg-primary-50 p-3 mr-3">
                        {concept.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-primary-800">{concept.name}</h3>
                    </div>
                    <p className="text-secondary-600">{concept.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ML Concepts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Machine Learning Concepts
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              The foundational ML technologies that enable our intelligent travel and financial solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mlConcepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="rounded-full bg-primary-50 p-3 mr-3">
                        {concept.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-primary-800">{concept.name}</h3>
                    </div>
                    <p className="text-secondary-600">{concept.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise GenAI APIs */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise GenAI APIs That Solve Real Problems
            </h2>
            <p className="text-lg text-primary-100 max-w-3xl mx-auto">
              Production-ready APIs with proven ROI, solving critical business challenges in travel and financial services.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {enterpriseAPIs.map((api, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/95 backdrop-blur">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="rounded-full bg-primary-50 p-4 flex-shrink-0">
                            {api.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-primary-800 mb-2">{api.title}</h3>
                            <p className="text-secondary-600">{api.description}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-error-700 mb-3 flex items-center gap-2">
                            <span className="text-xl">⚠️</span> Problems Solved:
                          </h4>
                          <ul className="space-y-2">
                            {api.problems.map((problem, i) => (
                              <li key={i} className="flex items-start gap-2 text-secondary-700">
                                <span className="text-error-600 mt-1">•</span>
                                <span>{problem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-success-700 mb-3 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" /> Solution:
                          </h4>
                          <p className="text-secondary-700">{api.solution}</p>
                        </div>

                        <div className="bg-success-50 border border-success-200 rounded-lg p-4">
                          <h4 className="font-semibold text-success-800 mb-1">ROI Impact:</h4>
                          <p className="text-success-700 text-lg font-bold">{api.roi}</p>
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                          <div>
                            <h4 className="font-semibold text-primary-800 mb-3">API Endpoints:</h4>
                            <div className="space-y-2">
                              {api.endpoints.map((endpoint, i) => (
                                <code key={i} className="block text-xs bg-white px-3 py-2 rounded border border-gray-200 text-primary-700">
                                  {endpoint}
                                </code>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-primary-800 mb-3">Key Metrics:</h4>
                            <div className="space-y-2">
                              {api.metrics.map((metric, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-success-600" />
                                  <span className="text-sm text-secondary-700">{metric}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button variant="primary" fullWidth>
                            View API Docs
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              AI Solutions for Travel Industry
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Real-world applications of our GenAI frameworks in travel and financial services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
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
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-800 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-secondary-600">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Our team of AI specialists can help you implement custom GenAI solutions tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
                onClick={() => window.location.href = '/contact'}
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AiSolutionsPage;