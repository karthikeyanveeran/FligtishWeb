import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Shield, ChevronDown } from 'lucide-react';
import { Card } from '../components/ui/Card';

export const PrivacyPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState('1');

  const sections = [
    {
      id: '1',
      title: '1. Information We Collect',
      content: `We collect information you provide directly:
• Account registration data (name, email, phone)
• API keys and credentials
• Payment information
• Support requests and communications
• Usage data and analytics
• Device and browser information
• IP addresses and location data

We collect this information to provide, maintain, and improve our Services.`
    },
    {
      id: '2',
      title: '2. How We Use Your Information',
      content: `We use collected information to:
• Provide and maintain the Services
• Process transactions and send billing information
• Send technical notices and support messages
• Respond to your inquiries and requests
• Monitor and analyze usage patterns
• Detect and prevent fraud and abuse
• Comply with legal obligations
• Improve and personalize the Services
• Send marketing communications (with consent)`
    },
    {
      id: '3',
      title: '3. Data Protection and Security',
      content: `FLIGHTISH GLOBAL implements industry-standard security measures:
• End-to-end encryption for data in transit
• AES-256 encryption for data at rest
• Regular security audits and penetration testing
• SOC2 Type II certification
• ISO 27001 compliance
• PCI-DSS Level 1 compliance
• Multi-factor authentication
• IP whitelisting and access controls
• 24/7 security monitoring

We maintain strict access controls and limit employee access to personal data.`
    },
    {
      id: '4',
      title: '4. Data Retention',
      content: `We retain your information for as long as necessary to:
• Provide the Services
• Comply with legal obligations
• Resolve disputes
• Enforce agreements

Upon account termination:
• Active data is retained for 90 days
• Backup data is retained for 30 days
• Billing records are retained for 7 years
• You may request data deletion subject to legal requirements`
    },
    {
      id: '5',
      title: '5. GDPR Compliance',
      content: `For EU residents, we comply with GDPR:
• Legal basis for processing (contract, consent, legitimate interest)
• Data subject rights (access, rectification, erasure, portability)
• Data Protection Impact Assessments
• Data Processing Agreements with partners
• Breach notification within 72 hours
• Privacy by design principles

You have the right to request access to, correction of, or deletion of your personal data.`
    },
    {
      id: '6',
      title: '6. CCPA Compliance',
      content: `For California residents, we comply with CCPA:
• Right to know what personal information is collected
• Right to delete personal information
• Right to opt-out of sale of personal information
• Right to non-discrimination for exercising CCPA rights

We do not sell personal information. To exercise your rights, contact privacy@flightishglobal.com.`
    },
    {
      id: '7',
      title: '7. Third-Party Sharing',
      content: `We share information with:
• Service providers (payment processors, hosting providers)
• Business partners (insurance providers, financial institutions)
• Legal authorities (when required by law)
• Acquirers (in case of merger or acquisition)

We do not sell personal information to third parties. All third parties are bound by confidentiality agreements.`
    },
    {
      id: '8',
      title: '8. Cookies and Tracking',
      content: `We use cookies and similar technologies to:
• Remember your preferences
• Understand how you use the Services
• Improve user experience
• Prevent fraud and abuse

You can control cookies through your browser settings. Disabling cookies may affect Service functionality.`
    },
    {
      id: '9',
      title: '9. International Data Transfers',
      content: `Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have different data protection laws.

For international transfers, we use:
• Standard contractual clauses
• Adequacy decisions
• Your explicit consent

By using the Services, you consent to such transfers.`
    },
    {
      id: '10',
      title: '10. Children\'s Privacy',
      content: `The Services are not intended for individuals under 18 years old. We do not knowingly collect information from children. If we become aware that a child has provided information, we will delete it immediately.

Parents or guardians who believe their child has provided information should contact us immediately.`
    },
    {
      id: '11',
      title: '11. Your Privacy Rights',
      content: `You have the right to:
• Access your personal information
• Correct inaccurate information
• Request deletion of your information
• Opt-out of marketing communications
• Request a copy of your data
• Withdraw consent at any time
• Lodge a complaint with your data protection authority

To exercise these rights, contact privacy@flightishglobal.com.`
    },
    {
      id: '12',
      title: '12. Data Breach Notification',
      content: `In the event of a data breach:
• We will notify affected individuals within 72 hours
• We will provide details of the breach and steps taken
• We will offer credit monitoring services if applicable
• We will cooperate with law enforcement

You can report suspected breaches to security@flightishglobal.com.`
    },
    {
      id: '13',
      title: '13. Third-Party Links',
      content: `The Services may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing information.

This Privacy Policy applies only to information collected through our Services.`
    },
    {
      id: '14',
      title: '14. Business Transfers',
      content: `If FLIGHTISH GLOBAL is involved in a merger, acquisition, bankruptcy, or asset sale:
• Your information may be transferred as part of the transaction
• We will provide notice before your information becomes subject to a different privacy policy
• You will have the opportunity to opt-out`
    },
    {
      id: '15',
      title: '15. Policy Updates',
      content: `We may update this Privacy Policy periodically. We will notify you of material changes by:
• Posting the updated policy on our website
• Updating the "Last Updated" date
• Sending you an email notification
• Requiring your consent if required by law

Your continued use of the Services constitutes acceptance of the updated policy.`
    },
    {
      id: '16',
      title: '16. Contact Us',
      content: `For privacy-related questions or concerns:

Email: privacy@flightishglobal.com
Phone: +1-800-FLIGHTISH
Address: D142, SBIOA Unity Enclave, Mambakkam, Chennai, India

Data Protection Officer: dpo@flightishglobal.com
EU Representative: eu-representative@flightishglobal.com

We will respond to your inquiry within 30 days.`
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | FLIGHTISH GLOBAL</title>
        <meta name="description" content="Enterprise-grade Privacy Policy for FLIGHTISH GLOBAL" />
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
              <Shield className="h-8 w-8" />
              <span className="text-sm font-semibold text-primary-200">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-primary-100">
              Effective Date: March 20, 2024 | Last Updated: March 20, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-secondary-600 mb-4 font-semibold">Quick Navigation:</p>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setExpandedSection(section.id)}
                  className="px-3 py-1 text-sm bg-primary-50 text-primary-700 rounded hover:bg-primary-100 transition-colors"
                >
                  {section.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-4">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setExpandedSection(expandedSection === section.id ? '' : section.id)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-primary-800">{section.title}</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-secondary-600 transition-transform ${
                          expandedSection === section.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {expandedSection === section.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <p className="text-secondary-700 whitespace-pre-wrap leading-relaxed">
                          {section.content}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-success-50 border border-success-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-success-800 mb-3">Your Privacy Matters</h3>
              <p className="text-success-700 text-sm">
                FLIGHTISH GLOBAL is committed to protecting your privacy and ensuring transparency in how we handle your data. We comply with GDPR, CCPA, and other international privacy regulations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;