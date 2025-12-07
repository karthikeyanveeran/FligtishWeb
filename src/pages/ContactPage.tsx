import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPin, Mail, Send, CheckCircle, Calendar, Users, Briefcase, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
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

  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const subjectOptions = [
    { value: '', label: 'Select a subject', disabled: true },
    { value: 'enterprise', label: 'Enterprise Solutions' },
    { value: 'api', label: 'API Integration' },
    { value: 'ai', label: 'AI Solutions' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'support', label: 'Technical Support' },
    { value: 'other', label: 'Other' },
  ];

  const offices = [
    { id: 'global', name: 'Global Headquarters', address: 'D142, SBIOA Unity Enclave, Mambakkam, Chennai, India', hours: 'Mon-Fri: 9am-6pm IST' },
  ];

  const currentOffice = offices[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full mb-4 text-sm">
              <CheckCircle className="h-4 w-4" />
              <span>Trusted by 500+ Enterprises</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Transform Your Business</h1>
            <p className="text-lg text-primary-100 mb-6">Connect with our enterprise team for AI solutions and digital innovation</p>
            <div className="flex justify-center gap-8 text-sm">
              <div><span className="font-bold text-xl">$5B+</span> Savings</div>
              <div><span className="font-bold text-xl">99.99%</span> Uptime</div>
              <div><span className="font-bold text-xl">&lt;4hrs</span> Response</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Enterprise Sales', desc: 'For 500+ employee orgs', time: '<4 hours', color: 'primary' },
              { icon: Briefcase, title: 'Partnerships', desc: 'Strategic integrations', time: '<24 hours', color: 'accent' },
              { icon: MessageSquare, title: '24/7 Support', desc: 'Technical assistance', time: '<15 minutes', color: 'success' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-${item.color}-500 h-full`}>
                  <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-500 to-${item.color}-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <div className={`flex items-center gap-2 text-${item.color}-600 font-semibold`}>
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Response: {item.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center"><MapPin className="h-5 w-5 text-primary-600" /></div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                    </div>
                    <p className="text-gray-600 ml-13">{currentOffice.address}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center"><Mail className="h-5 w-5 text-primary-600" /></div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                    </div>
                    <a href="mailto:corporate@flightishglobal.com" className="text-primary-600 hover:text-primary-700 font-medium ml-13">corporate@flightishglobal.com</a>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center"><Calendar className="h-5 w-5 text-primary-600" /></div>
                      <h3 className="font-semibold text-gray-900">Hours</h3>
                    </div>
                    <p className="text-gray-600 ml-13">{currentOffice.hours}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                  <p className="text-gray-600">Our enterprise team responds within <strong className="text-primary-600">4 hours</strong></p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">🔒 SOC2</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">✓ GDPR</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">🛡️ ISO 27001</span>
                  </div>
                </div>
                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-success-50 border border-success-200 rounded-xl p-6 flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-success-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-success-800 font-semibold text-lg mb-2">Message Sent Successfully!</h3>
                      <p className="text-success-700">Our team will respond within 4 hours.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Full Name" leftIcon={<Users className="h-4 w-4 text-secondary-500" />} {...register('name')} error={errors.name?.message} fullWidth placeholder="John Smith" />
                      <Input label="Email" type="email" leftIcon={<Mail className="h-4 w-4 text-secondary-500" />} {...register('email')} error={errors.email?.message} fullWidth placeholder="john@company.com" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input label="Company (Optional)" leftIcon={<Briefcase className="h-4 w-4 text-secondary-500" />} {...register('company')} fullWidth placeholder="Your Company" />
                      <Select label="Subject" leftIcon={<MessageSquare className="h-4 w-4 text-secondary-500" />} options={subjectOptions} {...register('subject')} error={errors.subject?.message} fullWidth />
                    </div>
                    <Textarea label="Message" rows={6} {...register('message')} error={errors.message?.message} fullWidth placeholder="Tell us about your project..." />
                    <div className="flex items-center justify-between pt-4">
                      <p className="text-xs text-secondary-500">By submitting, you agree to our <Link to="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link></p>
                      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} icon={<Send className="h-5 w-5" />}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Leading Enterprises Choose Us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '500+', label: 'Airlines & Travel Companies' },
                { value: '$5B+', label: 'Annual Savings Generated' },
                { value: '99.99%', label: 'System Uptime SLA' },
                { value: '24/7', label: 'Enterprise Support' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
