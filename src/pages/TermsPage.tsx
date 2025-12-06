import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FileText, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

export const TermsPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState('1');

  const sections = [
    {
      id: '1',
      title: '1. Acceptance of Terms',
      content: `By accessing and using the FLIGHTISH GLOBAL platform, website, and services (collectively, "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Services. FLIGHTISH GLOBAL reserves the right to modify these Terms at any time. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.`
    },
    {
      id: '2',
      title: '2. Service Description',
      content: `FLIGHTISH GLOBAL provides an enterprise-grade API platform offering:
• Hotel booking and management services
• Travel insurance solutions
• Financial services and travel loans
• Document management and digital wallet
• AI-powered travel solutions

The Services are provided on an "as-is" and "as-available" basis. We make no warranties, express or implied, regarding the Services.`
    },
    {
      id: '3',
      title: '3. User Accounts and Registration',
      content: `To access certain Services, you must create an account and provide accurate, complete, and current information. You are responsible for:
• Maintaining the confidentiality of your account credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized access
• Complying with all applicable laws and regulations

You agree not to create accounts for unlawful purposes or in violation of these Terms.`
    },
    {
      id: '4',
      title: '4. API Usage and Rate Limiting',
      content: `Standard API accounts are limited to 10,000 requests per minute. Enterprise customers may request higher limits. You agree to:
• Not exceed rate limits without prior written consent
• Implement exponential backoff for rate limit errors
• Not attempt to circumvent rate limiting mechanisms
• Monitor your API usage and adjust accordingly

Excessive usage may result in account suspension without notice.`
    },
    {
      id: '5',
      title: '5. Intellectual Property Rights',
      content: `All content, features, and functionality of the Services, including but not limited to software, text, graphics, logos, and images, are owned by FLIGHTISH GLOBAL or its licensors and are protected by international copyright, trademark, and other intellectual property laws.

You are granted a limited, non-exclusive, non-transferable license to use the Services for your internal business purposes. You may not:
• Reproduce, modify, or distribute any content
• Reverse engineer or decompile the Services
• Remove any proprietary notices or labels
• Use the Services for competitive purposes`
    },
    {
      id: '6',
      title: '6. Data Protection and Privacy',
      content: `FLIGHTISH GLOBAL is committed to protecting your data in compliance with:
• GDPR (General Data Protection Regulation)
• CCPA (California Consumer Privacy Act)
• PCI-DSS (Payment Card Industry Data Security Standard)
• ISO 27001 (Information Security Management)

We implement industry-standard security measures including encryption, access controls, and regular security audits. For detailed information, see our Privacy Policy.`
    },
    {
      id: '7',
      title: '7. Security and Compliance',
      content: `You are responsible for:
• Securing your API keys and credentials
• Implementing IP whitelisting
• Rotating credentials regularly
• Monitoring for unauthorized access
• Reporting security vulnerabilities immediately

FLIGHTISH GLOBAL maintains SOC2 Type II certification and undergoes regular security audits. We provide 24/7 monitoring and automatic failover mechanisms.`
    },
    {
      id: '8',
      title: '8. Payment Terms',
      content: `Payment terms vary by service tier:
• Standard: Monthly billing
• Enterprise: Custom billing arrangements
• All fees are exclusive of applicable taxes
• Invoices are due within 30 days of issuance
• Late payments may result in service suspension

Refunds are not provided for partial months. Cancellation must be requested in writing 30 days before the billing cycle.`
    },
    {
      id: '9',
      title: '9. Service Level Agreement (SLA)',
      content: `FLIGHTISH GLOBAL guarantees:
• 99.99% uptime for production services
• Average response time <100ms
• 24/7 technical support
• Automatic failover and redundancy

SLA credits are the sole remedy for service unavailability. Credits are calculated as a percentage of monthly fees based on downtime duration.`
    },
    {
      id: '10',
      title: '10. Limitation of Liability',
      content: `To the maximum extent permitted by law, FLIGHTISH GLOBAL shall not be liable for:
• Indirect, incidental, special, or consequential damages
• Loss of profits, revenue, data, or business opportunities
• Damages arising from unauthorized access or data breaches
• Third-party claims or actions

Total liability shall not exceed the fees paid in the 12 months preceding the claim.`
    },
    {
      id: '11',
      title: '11. Indemnification',
      content: `You agree to indemnify and hold harmless FLIGHTISH GLOBAL from any claims, damages, or costs arising from:
• Your use of the Services
• Your violation of these Terms
• Your violation of applicable laws
• Your infringement of third-party rights
• Your content or data

This includes reasonable attorneys' fees and court costs.`
    },
    {
      id: '12',
      title: '12. Prohibited Activities',
      content: `You agree not to:
• Use the Services for illegal purposes
• Transmit malware or harmful code
• Attempt unauthorized access or hacking
• Interfere with service availability
• Scrape or harvest data
• Reverse engineer the platform
• Use the Services for competitive intelligence
• Violate any applicable laws or regulations`
    },
    {
      id: '13',
      title: '13. Webhooks and Event Notifications',
      content: `FLIGHTISH GLOBAL provides webhook functionality for real-time event notifications. You agree to:
• Maintain a valid webhook endpoint
• Respond to webhook requests within 30 seconds
• Implement signature verification using HMAC-SHA256
• Handle duplicate events gracefully
• Implement exponential backoff for retries

We reserve the right to disable webhooks for endpoints that consistently fail.`
    },
    {
      id: '14',
      title: '14. Third-Party Services',
      content: `The Services may integrate with third-party services including payment processors, insurance providers, and financial institutions. You agree to:
• Comply with third-party terms and conditions
• Provide necessary authorizations and consents
• Accept responsibility for third-party actions
• Understand that FLIGHTISH GLOBAL is not liable for third-party services

FLIGHTISH GLOBAL is not responsible for third-party service availability or performance.`
    },
    {
      id: '15',
      title: '15. Termination',
      content: `Either party may terminate the agreement:
• For convenience with 30 days written notice
• Immediately for material breach
• Immediately if you violate these Terms

Upon termination:
• Your access to the Services ceases immediately
• You remain liable for outstanding fees
• Certain provisions survive termination
• We may delete your data after 90 days`
    },
    {
      id: '16',
      title: '16. Dispute Resolution',
      content: `Any disputes shall be resolved through:
1. Good faith negotiation (30 days)
2. Mediation (if negotiation fails)
3. Binding arbitration under AAA rules
4. Venue in Los Angeles, California

You waive the right to jury trial and class action. Arbitration costs are split equally unless otherwise determined.`
    },
    {
      id: '17',
      title: '17. Governing Law',
      content: `These Terms are governed by the laws of the State of California, without regard to conflict of law principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.

For international users, local laws may apply in addition to these Terms.`
    },
    {
      id: '18',
      title: '18. Severability',
      content: `If any provision of these Terms is found to be invalid or unenforceable, such provision shall be modified to the minimum extent necessary to make it valid, or if not possible, severed. The remaining provisions shall continue in full force and effect.`
    },
    {
      id: '19',
      title: '19. Entire Agreement',
      content: `These Terms, together with our Privacy Policy and any other agreements you have with FLIGHTISH GLOBAL, constitute the entire agreement regarding the Services and supersede all prior agreements and understandings.`
    },
    {
      id: '20',
      title: '20. Contact Information',
      content: `For questions regarding these Terms, contact:

FLIGHTISH GLOBAL PRIVATE LIMITED
Email: legal@flightishglobal.com
Phone: +1-800-FLIGHTISH
Address: D142, SBIOA Unity Enclave, Mambakkam, Chennai, India

USA Office: 1250 Aviation Blvd, Suite 300, Los Angeles, CA 90045
Australia Office: 85 William Street, Sydney, NSW 2000`
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service | FLIGHTISH GLOBAL</title>
        <meta name="description" content="Enterprise-grade Terms of Service for FLIGHTISH GLOBAL API platform" />
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
              <FileText className="h-8 w-8" />
              <span className="text-sm font-semibold text-primary-200">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
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

      {/* Footer Info */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">Important Notice</h3>
              <p className="text-primary-700 text-sm mb-4">
                These Terms of Service are binding and enforceable. By using FLIGHTISH GLOBAL Services, you acknowledge that you have read, understood, and agree to be bound by all provisions herein.
              </p>
              <p className="text-primary-700 text-sm">
                For questions or concerns, please contact our legal team at legal@flightishglobal.com or call +1-800-FLIGHTISH.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Related Documents</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/privacy" className="text-primary-600 hover:text-primary-800">Privacy Policy</a></li>
                  <li><a href="/cookies" className="text-primary-600 hover:text-primary-800">Cookie Policy</a></li>
                  <li><a href="/sla" className="text-primary-600 hover:text-primary-800">SLA Agreement</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/contact" className="text-primary-600 hover:text-primary-800">Contact Us</a></li>
                  <li><a href="/api-status" className="text-primary-600 hover:text-primary-800">System Status</a></li>
                  <li><a href="/documentation" className="text-primary-600 hover:text-primary-800">Documentation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary-800 mb-2">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="text-primary-600 hover:text-primary-800">About Us</a></li>
                  <li><a href="/" className="text-primary-600 hover:text-primary-800">Home</a></li>
                  <li><span className="text-secondary-600">© 2024 FLIGHTISH GLOBAL</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;