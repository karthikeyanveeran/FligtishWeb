import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Users, Briefcase, TrendingUp, CheckCircle, Globe, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const ManpowerPage: React.FC = () => {
  const services = [
    {
      title: 'Software Development',
      description: 'Full-stack developers, frontend specialists, backend engineers, and DevOps professionals',
      roles: ['Senior Developers', 'Full-Stack Engineers', 'DevOps Engineers', 'QA Specialists']
    },
    {
      title: 'Data & AI',
      description: 'Data scientists, ML engineers, and analytics specialists for advanced solutions',
      roles: ['Data Scientists', 'ML Engineers', 'Data Engineers', 'Analytics Specialists']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'AWS, Azure, and GCP certified professionals for cloud architecture and management',
      roles: ['Cloud Architects', 'Cloud Engineers', 'Infrastructure Specialists', 'Security Engineers']
    },
    {
      title: 'Project Management',
      description: 'Experienced PMs, Scrum Masters, and technical leads for project delivery',
      roles: ['Project Managers', 'Scrum Masters', 'Technical Leads', 'Product Managers']
    },
    {
      title: 'Quality Assurance',
      description: 'QA engineers, test automation specialists, and quality assurance leads',
      roles: ['QA Engineers', 'Test Automation', 'QA Leads', 'Performance Testers']
    },
    {
      title: 'Business Analysis',
      description: 'Business analysts and solution architects for requirement gathering and design',
      roles: ['Business Analysts', 'Solution Architects', 'Systems Analysts', 'Requirements Engineers']
    }
  ];

  const benefits = [
    { icon: '💰', title: 'Competitive Pricing', desc: 'Cost-effective rates without compromising quality' },
    { icon: '⚡', title: 'Quick Onboarding', desc: 'Resources available within 2-4 weeks' },
    { icon: '🎯', title: 'Skill Matching', desc: 'Carefully vetted professionals matched to your needs' },
    { icon: '📈', title: 'Scalability', desc: 'Scale team up or down based on project requirements' },
    { icon: '🌍', title: 'Global Talent', desc: 'Access to talent across US, Australia, and India' },
    { icon: '✅', title: 'Quality Assurance', desc: '100% satisfaction guarantee with replacement option' }
  ];

  const engagementModels = [
    {
      name: 'Dedicated Team',
      description: 'Full-time dedicated resources working exclusively on your project',
      features: ['Exclusive focus', 'Team lead included', 'Flexible scaling', 'Direct management']
    },
    {
      name: 'Staff Augmentation',
      description: 'Augment your existing team with specialized professionals',
      features: ['Flexible duration', 'Skill-specific', 'Seamless integration', 'Pay-as-you-go']
    },
    {
      name: 'Project-Based',
      description: 'Complete project delivery with fixed scope and timeline',
      features: ['Fixed price', 'Defined scope', 'Quality guarantee', 'Turnkey solution']
    }
  ];

  const expertise = [
    { category: 'Technologies', items: ['React', 'Node.js', 'Python', 'Java', 'AWS', 'Azure', 'Kubernetes', 'Docker'] },
    { category: 'Industries', items: ['Travel & Tourism', 'FinTech', 'E-commerce', 'Healthcare', 'SaaS', 'Enterprise'] },
    { category: 'Methodologies', items: ['Agile', 'Scrum', 'Kanban', 'DevOps', 'CI/CD', 'Lean'] }
  ];

  return (
    <>
      <Helmet>
        <title>Manpower Augmentation | FLIGHTISH GLOBAL</title>
        <meta name="description" content="Enterprise staffing and manpower augmentation services" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Manpower Augmentation</h1>
            <p className="text-lg text-primary-100">
              Scale your team with vetted, experienced professionals across all technical domains
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary-600" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-secondary-600">{service.description}</p>
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-2">Available Roles:</h4>
                      <ul className="space-y-1">
                        {service.roles.map((role, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-secondary-700">
                            <CheckCircle className="h-4 w-4 text-success-600" />
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Engagement Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {engagementModels.map((model, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{model.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-secondary-600">{model.description}</p>
                  <ul className="space-y-2">
                    {model.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" fullWidth>Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold text-primary-800 mb-2">{benefit.title}</h3>
                  <p className="text-secondary-600 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {expertise.map((exp, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{exp.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {exp.items.map((item, j) => (
                      <span key={j} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: '1', title: 'Requirement Analysis', desc: 'Understand your project needs and team requirements' },
                { step: '2', title: 'Candidate Screening', desc: 'Identify and vet qualified professionals' },
                { step: '3', title: 'Interview & Selection', desc: 'Technical interviews and skill assessment' },
                { step: '4', title: 'Onboarding', desc: 'Seamless integration with your team' },
                { step: '5', title: 'Ongoing Support', desc: 'Continuous monitoring and performance management' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-600 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-800">{item.title}</h3>
                    <p className="text-secondary-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Scale Your Team Today</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Get access to vetted professionals and scale your development team quickly
          </p>
          <Button size="lg" variant="secondary">Request Consultation</Button>
        </div>
      </section>
    </>
  );
};

export default ManpowerPage;