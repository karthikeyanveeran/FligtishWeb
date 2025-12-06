import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPin, Mail, Send, Check, Calendar, Users, Briefcase, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  company: z.string().optional(),
  subject: z.string().min(1, { message: 'Please select a subject' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [selectedOffice, setSelectedOffice] = React.useState('india');
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const subjectOptions = [
    { value: '', label: 'Select a subject', disabled: true },
    { value: 'insurance', label: 'Insurance Solutions' },
    { value: 'loans', label: 'Financial Services' },
    { value: 'documents', label: 'Document Management' },
    { value: 'api', label: 'API Solutions' },
    { value: 'ai', label: 'AI Solutions' },
    { value: 'partnership', label: 'Enterprise Partnership' },
    { value: 'support', label: 'Technical Support' },
    { value: 'other', label: 'Other' },
  ];

  const offices = [
    {
      id: 'global',
      name: 'Global Operations',
      address: '1250 Aviation Blvd, Suite 300, Los Angeles, CA 90045, USA',
      email: 'corporate@flightishglobal.com',
      hours: 'Monday-Friday: 9am-6pm PST',
    },
    {
      id: 'usa',
      name: 'USA Office',
      address: '1250 Aviation Blvd, Suite 300, Los Angeles, CA 90045, USA',
      email: 'corporate@flightishglobal.com',
      hours: 'Monday-Friday: 9am-6pm PST',
    },
    {
      id: 'australia',
      name: 'Australia Office',
      address: '85 William Street, Sydney, NSW 2000, Australia',
      email: 'corporate@flightishglobal.com',
      hours: 'Monday-Friday: 9am-6pm AEST',
    },
    {
      id: 'india',
      name: 'Global Headquarters',
      address: 'D142, SBIOA Unity Enclave, Mambakkam, Chennai, India',
      email: 'corporate@flightishglobal.com',
      hours: 'Monday-Friday: 9am-6pm IST',
    },
  ];

  const currentOffice = offices.find(office => office.id === selectedOffice) || offices[0];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20 enterprise-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Enterprise Solutions
          </motion.h1>
          <motion.p 
            className="text-lg text-secondary-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect with our enterprise team to discuss AI solutions, API integrations, and digital transformation for your organization.
          </motion.p>
        </div>

        {/* Office Selector */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {offices.map((office) => (
              <button
                key={office.id}
                onClick={() => setSelectedOffice(office.id)}
                className={`p-4 rounded-lg text-center transition-all ${
                  selectedOffice === office.id 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'bg-white text-secondary-700 hover:bg-primary-50'
                }`}
              >
                <h3 className="font-medium text-sm md:text-base">{office.name}</h3>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full overflow-hidden card-enterprise">
              <div className="h-40 bg-gradient-to-r from-primary-800 to-accent-800 relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-2xl font-bold text-white">
                    {currentOffice.name}
                  </h2>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex">
                    <MapPin className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-secondary-900 mb-1">Address</h3>
                      <p className="text-secondary-600">{currentOffice.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Mail className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-secondary-900 mb-1">Email</h3>
                      <a href="mailto:corporate@flightishglobal.com" className="text-primary-600 hover:text-primary-800 transition-colors">
                        corporate@flightishglobal.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Calendar className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-secondary-900 mb-1">Business Hours</h3>
                      <p className="text-secondary-600">{currentOffice.hours}</p>
                      <p className="text-secondary-600 mt-1">Saturday-Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-secondary-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com/company/flightishglobal" target="_blank" rel="noopener noreferrer" className="bg-primary-50 hover:bg-primary-100 text-primary-600 p-3 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://twitter.com/flightishglobal" target="_blank" rel="noopener noreferrer" className="bg-primary-50 hover:bg-primary-100 text-primary-600 p-3 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a href="https://facebook.com/flightishglobal" target="_blank" rel="noopener noreferrer" className="bg-primary-50 hover:bg-primary-100 text-primary-600 p-3 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="https://instagram.com/flightishglobal" target="_blank" rel="noopener noreferrer" className="bg-primary-50 hover:bg-primary-100 text-primary-600 p-3 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden card-enterprise">
              <CardHeader className="bg-gradient-to-r from-primary-700 to-accent-700 text-white">
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-primary-100 mt-2">
                  Fill out the form below and our enterprise team will get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                {isSubmitted ? (
                  <motion.div 
                    className="bg-success-50 border border-success-200 rounded-md p-6 flex items-start"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="h-6 w-6 text-success-600 mr-4 mt-0.5" />
                    <div>
                      <h3 className="text-success-800 font-medium text-lg">Message Sent Successfully!</h3>
                      <p className="text-success-700 mt-2">
                        Thank you for contacting LA FLIGHTISH GLOBAL. Our team will review your message and get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Input
                          label="Full Name"
                          leftIcon={<Users className="h-4 w-4 text-secondary-500" />}
                          {...register('name')}
                          error={errors.name?.message}
                          fullWidth
                          placeholder="John Smith"
                        />
                      </div>
                      
                      <div>
                        <Input
                          label="Email Address"
                          type="email"
                          leftIcon={<Mail className="h-4 w-4 text-secondary-500" />}
                          {...register('email')}
                          error={errors.email?.message}
                          fullWidth
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Input
                          label="Company (Optional)"
                          leftIcon={<Briefcase className="h-4 w-4 text-secondary-500" />}
                          {...register('company')}
                          fullWidth
                          placeholder="Your Company"
                        />
                      </div>
                      
                      <div>
                        <Select
                          label="Subject"
                          leftIcon={<MessageSquare className="h-4 w-4 text-secondary-500" />}
                          options={subjectOptions}
                          {...register('subject')}
                          error={errors.subject?.message}
                          fullWidth
                        />
                      </div>
                    </div>
                    
                    <Textarea
                      label="Message"
                      rows={6}
                      {...register('message')}
                      error={errors.message?.message}
                      fullWidth
                      placeholder="Please describe how we can help you..."
                    />
                    
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-xs text-secondary-500">
                        By submitting this form, you agree to our <Link to="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>.
                      </p>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="btn-enterprise bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700"
                        disabled={isSubmitting}
                        icon={<Send className="h-5 w-5" />}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Frequently Asked Questions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/70 backdrop-blur-sm p-5 rounded-lg shadow-md border border-gray-100">
                  <h4 className="font-medium text-primary-700">How quickly will I receive a response?</h4>
                  <p className="text-secondary-600 text-sm mt-1">We prioritize enterprise inquiries and typically respond within 12 business hours.</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-5 rounded-lg shadow-md border border-gray-100">
                  <h4 className="font-medium text-primary-700">Do you offer custom enterprise AI solutions?</h4>
                  <p className="text-secondary-600 text-sm mt-1">Yes, we provide tailored AI solutions for enterprise clients with dedicated implementation teams.</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-5 rounded-lg shadow-md border border-gray-100">
                  <h4 className="font-medium text-primary-700">How can I schedule an executive demo?</h4>
                  <p className="text-secondary-600 text-sm mt-1">Select "Enterprise Partnership" in the subject field and our executive team will arrange a personalized demonstration.</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-5 rounded-lg shadow-md border border-gray-100">
                  <h4 className="font-medium text-primary-700">Do you offer enterprise SLAs?</h4>
                  <p className="text-secondary-600 text-sm mt-1">Yes, we provide custom SLAs for enterprise clients with 24/7 dedicated support options. Contact our <Link to="/api-solutions" className="text-primary-600 hover:underline">Enterprise Team</Link> for details.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;