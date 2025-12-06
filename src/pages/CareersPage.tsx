import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Briefcase, MapPin, DollarSign, Users, Heart, Zap, CheckCircle, Search, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';

export const CareersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', resume: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$150K - $200K',
      experience: '5+ years',
      description: 'Build scalable travel platform features using React and Node.js'
    },
    {
      id: 2,
      title: 'Machine Learning Engineer',
      department: 'AI/ML',
      location: 'Remote',
      type: 'Full-time',
      salary: '$160K - $220K',
      experience: '4+ years',
      description: 'Develop AI models for travel recommendations and pricing optimization'
    },
    {
      id: 3,
      title: 'Cloud Architect',
      department: 'Infrastructure',
      location: 'Sydney, Australia',
      type: 'Full-time',
      salary: 'AUD 180K - 240K',
      experience: '6+ years',
      description: 'Design and manage multi-cloud infrastructure for global platform'
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'Chennai, India',
      type: 'Full-time',
      salary: '₹25L - 35L',
      experience: '5+ years',
      description: 'Lead product strategy for travel insurance and financial services'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130K - $170K',
      experience: '3+ years',
      description: 'Implement CI/CD pipelines and manage Kubernetes infrastructure'
    },
    {
      id: 6,
      title: 'QA Automation Lead',
      department: 'Quality',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$120K - $160K',
      experience: '4+ years',
      description: 'Lead QA automation strategy and build testing frameworks'
    },
    {
      id: 7,
      title: 'Data Scientist',
      department: 'AI/ML',
      location: 'Remote',
      type: 'Full-time',
      salary: '$140K - $190K',
      experience: '3+ years',
      description: 'Analyze travel data and build predictive models'
    },
    {
      id: 8,
      title: 'Business Analyst',
      department: 'Business',
      location: 'Sydney, Australia',
      type: 'Full-time',
      salary: 'AUD 120K - 160K',
      experience: '3+ years',
      description: 'Gather requirements and design solutions for travel products'
    }
  ];

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
    { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive medical and dental coverage' },
    { icon: '🏖️', title: 'Unlimited PTO', desc: 'Flexible time off policy' },
    { icon: '📚', title: 'Learning Budget', desc: '$2000/year for professional development' },
    { icon: '🏠', title: 'Remote Work', desc: 'Flexible work from home options' },
    { icon: '🎯', title: 'Career Growth', desc: 'Clear career progression paths' },
    { icon: '🤝', title: 'Team Culture', desc: 'Collaborative and inclusive environment' },
    { icon: '✈️', title: 'Travel Perks', desc: 'Discounts on travel services' }
  ];

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'Engineering', name: 'Engineering' },
    { id: 'AI/ML', name: 'AI/ML' },
    { id: 'Infrastructure', name: 'Infrastructure' },
    { id: 'Product', name: 'Product' },
    { id: 'Quality', name: 'Quality' },
    { id: 'Business', name: 'Business' }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'all' || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setShowApplyModal(true);
    setIsSubmitted(false);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', { job: selectedJob, ...formData });
    setIsSubmitted(true);
    setTimeout(() => {
      setShowApplyModal(false);
      setFormData({ name: '', email: '', resume: '', message: '' });
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Careers | FLIGHTISH GLOBAL</title>
        <meta name="description" content="Join our team and build the future of travel technology" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-lg text-primary-100">
              Build the future of travel technology with a talented, global team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold text-primary-800 mb-2">{benefit.title}</h3>
                  <p className="text-secondary-600 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Open Positions</h2>

          {/* Search and Filter */}
          <div className="max-w-5xl mx-auto mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-secondary-400" />
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                fullWidth
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {departments.map(dept => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedDept === dept.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="max-w-5xl mx-auto space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-primary-800 mb-2">{job.title}</h3>
                          <p className="text-secondary-600 mb-4">{job.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-1 text-secondary-600">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1 text-secondary-600">
                              <Briefcase className="h-4 w-4" />
                              {job.type}
                            </div>
                            <div className="flex items-center gap-1 text-secondary-600">
                              <DollarSign className="h-4 w-4" />
                              {job.salary}
                            </div>
                            <div className="flex items-center gap-1 text-secondary-600">
                              <Users className="h-4 w-4" />
                              {job.experience}
                            </div>
                          </div>
                        </div>
                        <Button variant="primary" onClick={() => handleApplyClick(job)}>Apply Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-secondary-600">No jobs found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Innovation',
                desc: 'We embrace new technologies and creative solutions to solve complex problems'
              },
              {
                title: 'Collaboration',
                desc: 'We work together across teams and geographies to achieve common goals'
              },
              {
                title: 'Excellence',
                desc: 'We strive for the highest quality in everything we do'
              },
              {
                title: 'Integrity',
                desc: 'We act with honesty and transparency in all our dealings'
              },
              {
                title: 'Diversity',
                desc: 'We celebrate diverse perspectives and foster an inclusive environment'
              },
              {
                title: 'Growth',
                desc: 'We invest in our people and support continuous learning and development'
              }
            ].map((value, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">{value.title}</h3>
                  <p className="text-secondary-600">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                city: 'Los Angeles',
                country: 'USA',
                address: '1250 Aviation Blvd, Suite 300',
                teams: ['Engineering', 'Product', 'Sales']
              },
              {
                city: 'Sydney',
                country: 'Australia',
                address: '85 William Street',
                teams: ['Engineering', 'Operations', 'Support']
              },
              {
                city: 'Chennai',
                country: 'India',
                address: 'D142, SBIOA Unity Enclave',
                teams: ['Engineering', 'AI/ML', 'QA', 'Operations']
              }
            ].map((location, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">
                    {location.city}, {location.country}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">{location.address}</p>
                  <div>
                    <p className="text-xs font-semibold text-primary-600 mb-2">Teams:</p>
                    <div className="flex flex-wrap gap-2">
                      {location.teams.map((team, j) => (
                        <span key={j} className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs">
                          {team}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Join FLIGHTISH GLOBAL and help shape the future of travel technology
          </p>
          <Button size="lg" variant="secondary">View All Positions</Button>
        </div>
      </section>

      {/* Apply Modal */}
      {showApplyModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setShowApplyModal(false)}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-primary-800">Apply for {selectedJob?.title}</h2>
              <button
                onClick={() => setShowApplyModal(false)}
                className="text-secondary-600 hover:text-secondary-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="h-16 w-16 text-success-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary-800 mb-2">Application Submitted!</h3>
                  <p className="text-secondary-600">
                    Thank you for applying. Our team will review your application and contact you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-5">
                  <Input
                    label="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    fullWidth
                    placeholder="Your name"
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    fullWidth
                    placeholder="your@email.com"
                  />

                  <Input
                    label="Resume/CV Link"
                    value={formData.resume}
                    onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                    required
                    fullWidth
                    placeholder="https://..."
                  />

                  <Textarea
                    label="Cover Letter / Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    fullWidth
                    placeholder="Tell us why you're interested in this role..."
                  />

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      fullWidth
                      onClick={() => setShowApplyModal(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary" fullWidth>
                      Submit Application
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CareersPage;
