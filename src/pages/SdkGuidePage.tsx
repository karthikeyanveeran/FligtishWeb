import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Package, Copy, CheckCircle, Code, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export const SdkGuidePage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedSdk, setSelectedSdk] = useState('python');

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const sdkGuides = {
    python: {
      name: 'Python',
      icon: '🐍',
      install: 'pip install flightish-sdk',
      example: `from flightish import FlightishClient

client = FlightishClient(api_key='your_api_key')

# Search hotels
results = client.hotels.search(
    checkin_date='2024-04-27',
    checkout_date='2024-04-28',
    rooms=[{'adults': 2, 'children': 0}],
    nationality='106',
    currency='INR'
)

# Book a hotel
booking = client.hotels.book(
    hotel_id='16391872',
    room_id='room_123',
    guest_info={
        'first_name': 'John',
        'last_name': 'Doe',
        'email': 'john@example.com',
        'phone': '+1234567890'
    }
)`,
      docs: 'https://github.com/flightish/python-sdk'
    },
    javascript: {
      name: 'JavaScript/Node.js',
      icon: '📦',
      install: 'npm install @flightish/sdk',
      example: `const FlightishClient = require('@flightish/sdk');

const client = new FlightishClient({
  apiKey: 'your_api_key'
});

// Search hotels
const results = await client.hotels.search({
  checkinDate: '2024-04-27',
  checkoutDate: '2024-04-28',
  roomInfo: [{ numberOfAdults: 2, numberOfChild: 0 }],
  searchCriteria: {
    nationality: '106',
    currency: 'INR'
  }
});

// Book a hotel
const booking = await client.hotels.book({
  hotelId: '16391872',
  roomId: 'room_123',
  guestInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1234567890'
  }
});`,
      docs: 'https://github.com/flightish/js-sdk'
    },
    php: {
      name: 'PHP',
      icon: '🐘',
      install: 'composer require flightish/sdk',
      example: `<?php
require 'vendor/autoload.php';

use Flightish\\Client;

$client = new Client(['apiKey' => 'your_api_key']);

// Search hotels
$results = $client->hotels->search([
    'checkinDate' => '2024-04-27',
    'checkoutDate' => '2024-04-28',
    'roomInfo' => [['numberOfAdults' => 2, 'numberOfChild' => 0]],
    'searchCriteria' => [
        'nationality' => '106',
        'currency' => 'INR'
    ]
]);

// Book a hotel
$booking = $client->hotels->book([
    'hotelId' => '16391872',
    'roomId' => 'room_123',
    'guestInfo' => [
        'firstName' => 'John',
        'lastName' => 'Doe',
        'email' => 'john@example.com',
        'phone' => '+1234567890'
    ]
]);
?>`,
      docs: 'https://github.com/flightish/php-sdk'
    },
    java: {
      name: 'Java',
      icon: '☕',
      install: 'Add to pom.xml: <dependency><groupId>com.flightish</groupId><artifactId>sdk</artifactId><version>2.0.0</version></dependency>',
      example: `import com.flightish.client.FlightishClient;
import com.flightish.models.*;

FlightishClient client = new FlightishClient("your_api_key");

// Search hotels
HotelSearchRequest request = new HotelSearchRequest()
    .setCheckinDate("2024-04-27")
    .setCheckoutDate("2024-04-28")
    .setNationality("106")
    .setCurrency("INR");

HotelSearchResponse results = client.hotels().search(request);

// Book a hotel
BookingRequest bookingReq = new BookingRequest()
    .setHotelId("16391872")
    .setRoomId("room_123")
    .setGuestInfo(new GuestInfo()
        .setFirstName("John")
        .setLastName("Doe")
        .setEmail("john@example.com")
        .setPhone("+1234567890"));

BookingConfirmation booking = client.hotels().book(bookingReq);`,
      docs: 'https://github.com/flightish/java-sdk'
    }
  };

  const currentSdk = sdkGuides[selectedSdk as keyof typeof sdkGuides];

  return (
    <>
      <Helmet>
        <title>SDK Guide | FLIGHTISH GLOBAL</title>
        <meta name="description" content="Official SDKs for FLIGHTISH GLOBAL API" />
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
              <Package className="h-8 w-8" />
              <span className="text-sm font-semibold text-primary-200">Developer Tools</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Official SDKs
            </h1>
            <p className="text-lg text-primary-100">
              Simplify integration with our official SDKs for popular programming languages
            </p>
          </motion.div>
        </div>
      </section>

      {/* SDK Selection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-primary-800 mb-8">Choose Your Language</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {Object.entries(sdkGuides).map(([key, sdk]) => (
                <motion.button
                  key={key}
                  onClick={() => setSelectedSdk(key)}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    selectedSdk === key
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 bg-white hover:border-primary-300'
                  }`}
                >
                  <div className="text-4xl mb-2">{sdk.icon}</div>
                  <p className="font-semibold text-primary-800">{sdk.name}</p>
                </motion.button>
              ))}
            </div>

            {/* SDK Details */}
            <motion.div
              key={selectedSdk}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Installation */}
              <Card>
                <CardHeader>
                  <CardTitle>Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{currentSdk.install}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(currentSdk.install, 'install')}
                      className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded"
                    >
                      {copiedCode === 'install' ? (
                        <CheckCircle className="h-4 w-4 text-success-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Start */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Start Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm max-h-96">
                      <code>{currentSdk.example}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(currentSdk.example, 'example')}
                      className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded"
                    >
                      {copiedCode === 'example' ? (
                        <CheckCircle className="h-4 w-4 text-success-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a
                    href={currentSdk.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-800 font-semibold"
                  >
                    <GitBranch className="h-4 w-4" />
                    View on GitHub
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-800 font-semibold"
                  >
                    <Code className="h-4 w-4" />
                    Full API Reference
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-8">Best Practices</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Error Handling',
                  description: 'Always wrap API calls in try-catch blocks and handle specific error types'
                },
                {
                  title: 'Rate Limiting',
                  description: 'Implement exponential backoff for rate limit errors (429)'
                },
                {
                  title: 'Timeouts',
                  description: 'Set appropriate timeout values for your use case'
                },
                {
                  title: 'Logging',
                  description: 'Log all API requests and responses for debugging'
                },
                {
                  title: 'Caching',
                  description: 'Cache reference data like nationalities and currencies'
                },
                {
                  title: 'Testing',
                  description: 'Always test in sandbox environment before production'
                }
              ].map((practice, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">{practice.title}</h3>
                    <p className="text-secondary-600">{practice.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Check our documentation or contact support for SDK-specific questions
            </p>
            <button className="bg-white text-primary-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SdkGuidePage;