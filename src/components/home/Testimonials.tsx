import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  imageSrc: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Business Traveler',
      location: 'New York, USA',
      content: 'LA FLIGHTISH has been a game-changer for my frequent business trips. Their insurance coverage saved me thousands when I had an emergency in Tokyo.',
      rating: 5,
      imageSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Adventure Seeker',
      location: 'Los Angeles, USA',
      content: 'The travel loan I got through LA FLIGHTISH made my dream African safari possible. The application was seamless and the rates were better than my bank.',
      rating: 5,
      imageSrc: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emma Thompson',
      role: 'Family Traveler',
      location: 'Sydney, Australia',
      content: 'Planning a family trip to Europe was stressful until I found LA FLIGHTISH. Their comprehensive insurance package gave us peace of mind throughout our journey.',
      rating: 4,
      imageSrc: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Wilson',
      role: 'Digital Nomad',
      location: 'Melbourne, Australia',
      content: 'As someone who works remotely while traveling, having reliable travel insurance is essential. LA FLIGHTISH provides exactly what I need at competitive rates.',
      rating: 5,
      imageSrc: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Hear from travelers who have experienced the LA FLIGHTISH GLOBAL difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-lg shadow-card border border-gray-100 p-6"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-accent-500 fill-accent-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-secondary-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-primary-800">{testimonial.name}</h4>
                  <p className="text-sm text-secondary-600">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl font-medium text-primary-800 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who trust LA FLIGHTISH GLOBAL for their travel financial needs.
          </p>
        </div>
      </div>
    </section>
  );
};