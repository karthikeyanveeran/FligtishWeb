import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Code,
  Copy,
  CheckCircle,
  Book,
  Key,
  Shield,
  Zap,
  FileText,
  Terminal,
  Globe,
  Lock,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";

export const ApiDocumentationPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    auth: `curl -X POST "https://api.flightishglobal.com/v1/auth/token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_id": "your_client_id",
    "client_secret": "your_client_secret",
    "grant_type": "client_credentials"
  }'`,

    insurance: `curl -X POST "https://api.flightishglobal.com/v1/insurance/quotes" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "trip_type": "round_trip",
    "departure_date": "2024-06-15",
    "return_date": "2024-06-22",
    "destination": "Europe",
    "travelers": [
      {
        "age": 35,
        "coverage_amount": 100000
      }
    ]
  }'`,

    flights: `curl -X GET "https://api.flightishglobal.com/v1/flights/search" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -G \\
  -d "origin=LAX" \\
  -d "destination=JFK" \\
  -d "departure_date=2024-06-15" \\
  -d "passengers=1"`,
  };

  const endpoints = [
    {
      method: "POST",
      path: "/v1/auth/token",
      description: "Authenticate and get access token",
      category: "Authentication",
    },
    {
      method: "POST",
      path: "/v1/insurance/quotes",
      description: "Get travel insurance quotes",
      category: "Insurance",
    },
    {
      method: "POST",
      path: "/v1/insurance/policies",
      description: "Purchase insurance policy",
      category: "Insurance",
    },
    {
      method: "GET",
      path: "/v1/flights/search",
      description: "Search available flights",
      category: "Flights",
    },
    {
      method: "POST",
      path: "/v1/flights/book",
      description: "Book a flight",
      category: "Flights",
    },
    {
      method: "POST",
      path: "/v1/loans/applications",
      description: "Submit loan application",
      category: "Loans",
    },
    {
      method: "GET",
      path: "/v1/loans/status/{id}",
      description: "Check loan application status",
      category: "Loans",
    },
    {
      method: "POST",
      path: "/v1/documents/upload",
      description: "Upload travel documents",
      category: "Documents",
    },
    {
      method: "GET",
      path: "/v1/documents/{id}",
      description: "Retrieve document",
      category: "Documents",
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: <Book className="h-4 w-4" /> },
    {
      id: "authentication",
      label: "Authentication",
      icon: <Key className="h-4 w-4" />,
    },
    {
      id: "endpoints",
      label: "API Endpoints",
      icon: <Terminal className="h-4 w-4" />,
    },
    {
      id: "examples",
      label: "Code Examples",
      icon: <Code className="h-4 w-4" />,
    },
    {
      id: "errors",
      label: "Error Handling",
      icon: <Shield className="h-4 w-4" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>API Documentation | LA FLIGHTISH GLOBAL</title>
        <meta
          name="description"
          content="Complete API documentation for LA FLIGHTISH GLOBAL travel services integration."
        />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              API Documentation
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8">
              Complete guide to integrating with LA FLIGHTISH GLOBAL APIs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Get API Key
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                Download Postman Collection
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:w-1/4">
                <div className="sticky top-24">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Documentation</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <nav className="space-y-1">
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-colors ${
                              activeTab === tab.id
                                ? "bg-primary-50 text-primary-700 border-r-2 border-primary-700"
                                : "text-secondary-600 hover:bg-gray-50 hover:text-secondary-900"
                            }`}
                          >
                            {tab.icon}
                            {tab.label}
                          </button>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-3/4">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Overview Tab */}
                  {activeTab === "overview" && (
                    <div className="space-y-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Globe className="h-5 w-5 text-primary-600" />
                            API Overview
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-secondary-700">
                            The LA FLIGHTISH GLOBAL API provides programmatic
                            access to our travel services including flight
                            booking, travel insurance, loans, and document
                            management. Our RESTful API uses standard HTTP
                            methods and returns JSON responses.
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="bg-primary-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-primary-800 mb-2">
                                Base URL
                              </h4>
                              <code className="text-sm bg-white px-2 py-1 rounded">
                                https://api.flightishglobal.com
                              </code>
                            </div>
                            <div className="bg-success-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-success-800 mb-2">
                                Current Version
                              </h4>
                              <code className="text-sm bg-white px-2 py-1 rounded">
                                v1
                              </code>
                            </div>
                          </div>

                          <div className="mt-6">
                            <h4 className="font-semibold text-primary-800 mb-3">
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {[
                                "RESTful architecture with predictable URLs",
                                "JSON request and response bodies",
                                "OAuth 2.0 authentication",
                                "Comprehensive error handling",
                                "Rate limiting and throttling",
                                "Webhook support for real-time updates",
                              ].map((feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="h-4 w-4 text-success-600" />
                                  <span className="text-secondary-700">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Authentication Tab */}
                  {activeTab === "authentication" && (
                    <div className="space-y-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Lock className="h-5 w-5 text-primary-600" />
                            Authentication
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-secondary-700">
                            Our API uses OAuth 2.0 with client credentials flow
                            for authentication. You'll need to obtain an access
                            token before making API calls.
                          </p>

                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <h4 className="font-semibold text-yellow-800 mb-2">
                              Getting Started
                            </h4>
                            <ol className="list-decimal list-inside space-y-1 text-yellow-700">
                              <li>Register for an API account</li>
                              <li>Obtain your client_id and client_secret</li>
                              <li>Request an access token</li>
                              <li>Include the token in your API requests</li>
                            </ol>
                          </div>

                          <div>
                            <h4 className="font-semibold text-primary-800 mb-3">
                              Request Access Token
                            </h4>
                            <div className="relative">
                              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                <code>{codeExamples.auth}</code>
                              </pre>
                              <button
                                onClick={() =>
                                  copyToClipboard(codeExamples.auth, "auth")
                                }
                                className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded"
                              >
                                {copiedCode === "auth" ? (
                                  <CheckCircle className="h-4 w-4 text-success-400" />
                                ) : (
                                  <Copy className="h-4 w-4 text-gray-400" />
                                )}
                              </button>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-primary-800 mb-3">
                              Using the Access Token
                            </h4>
                            <p className="text-secondary-700 mb-3">
                              Include the access token in the Authorization
                              header of your requests:
                            </p>
                            <div className="bg-gray-100 p-3 rounded">
                              <code className="text-sm">
                                Authorization: Bearer YOUR_ACCESS_TOKEN
                              </code>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Endpoints Tab */}
                  {activeTab === "endpoints" && (
                    <div className="space-y-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Terminal className="h-5 w-5 text-primary-600" />
                            API Endpoints
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b border-gray-200">
                                  <th className="text-left py-3 px-4 font-semibold text-secondary-700">
                                    Method
                                  </th>
                                  <th className="text-left py-3 px-4 font-semibold text-secondary-700">
                                    Endpoint
                                  </th>
                                  <th className="text-left py-3 px-4 font-semibold text-secondary-700">
                                    Description
                                  </th>
                                  <th className="text-left py-3 px-4 font-semibold text-secondary-700">
                                    Category
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoints.map((endpoint, index) => (
                                  <tr
                                    key={index}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                  >
                                    <td className="py-3 px-4">
                                      <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                          endpoint.method === "GET"
                                            ? "bg-blue-100 text-blue-800"
                                            : endpoint.method === "POST"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-yellow-100 text-yellow-800"
                                        }`}
                                      >
                                        {endpoint.method}
                                      </span>
                                    </td>
                                    <td className="py-3 px-4 font-mono text-sm">
                                      {endpoint.path}
                                    </td>
                                    <td className="py-3 px-4 text-secondary-700">
                                      {endpoint.description}
                                    </td>
                                    <td className="py-3 px-4">
                                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-800">
                                        {endpoint.category}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Examples Tab */}
                  {activeTab === "examples" && (
                    <div className="space-y-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Code className="h-5 w-5 text-primary-600" />
                            Code Examples
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">
                          <div>
                            <h4 className="font-semibold text-primary-800 mb-3">
                              Get Insurance Quote
                            </h4>
                            <div className="relative">
                              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                <code>{codeExamples.insurance}</code>
                              </pre>
                              <button
                                onClick={() =>
                                  copyToClipboard(
                                    codeExamples.insurance,
                                    "insurance"
                                  )
                                }
                                className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded"
                              >
                                {copiedCode === "insurance" ? (
                                  <CheckCircle className="h-4 w-4 text-success-400" />
                                ) : (
                                  <Copy className="h-4 w-4 text-gray-400" />
                                )}
                              </button>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-primary-800 mb-3">
                              Search Flights
                            </h4>
                            <div className="relative">
                              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                                <code>{codeExamples.flights}</code>
                              </pre>
                              <button
                                onClick={() =>
                                  copyToClipboard(
                                    codeExamples.flights,
                                    "flights"
                                  )
                                }
                                className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded"
                              >
                                {copiedCode === "flights" ? (
                                  <CheckCircle className="h-4 w-4 text-success-400" />
                                ) : (
                                  <Copy className="h-4 w-4 text-gray-400" />
                                )}
                              </button>
                            </div>
                          </div>

                          <div className="bg-info-50 border border-info-200 rounded-lg p-4">
                            <h4 className="font-semibold text-info-800 mb-2">
                              SDK Libraries
                            </h4>
                            <p className="text-info-700 mb-3">
                              We provide official SDK libraries for popular
                              programming languages:
                            </p>
                            <ul className="space-y-1 text-info-700">
                              <li>• JavaScript/Node.js</li>
                              <li>• Python</li>
                              <li>• PHP</li>
                              <li>• Java</li>
                              <li>• C#/.NET</li>
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Error Handling Tab */}
                  {activeTab === "errors" && (
                    <div className="space-y-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary-600" />
                            Error Handling
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-secondary-700">
                            Our API uses conventional HTTP response codes to
                            indicate success or failure. Error responses include
                            detailed information to help you troubleshoot
                            issues.
                          </p>

                          <div>
                            <h4 className="font-semibold text-primary-800 mb-3">
                              HTTP Status Codes
                            </h4>
                            <div className="space-y-3">
                              {[
                                {
                                  code: "200",
                                  status: "OK",
                                  description: "Request successful",
                                },
                                {
                                  code: "400",
                                  status: "Bad Request",
                                  description: "Invalid request parameters",
                                },
                                {
                                  code: "401",
                                  status: "Unauthorized",
                                  description:
                                    "Invalid or missing authentication",
                                },
                                {
                                  code: "403",
                                  status: "Forbidden",
                                  description: "Insufficient permissions",
                                },
                                {
                                  code: "404",
                                  status: "Not Found",
                                  description: "Resource not found",
                                },
                                {
                                  code: "429",
                                  status: "Too Many Requests",
                                  description: "Rate limit exceeded",
                                },
                                {
                                  code: "500",
                                  status: "Internal Server Error",
                                  description: "Server error",
                                },
                              ].map((error, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-4 p-3 bg-gray-50 rounded"
                                >
                                  <span
                                    className={`font-mono text-sm px-2 py-1 rounded ${
                                      error.code.startsWith("2")
                                        ? "bg-success-100 text-success-800"
                                        : error.code.startsWith("4")
                                        ? "bg-warning-100 text-warning-800"
                                        : "bg-error-100 text-error-800"
                                    }`}
                                  >
                                    {error.code}
                                  </span>
                                  <div>
                                    <p className="font-semibold text-secondary-800">
                                      {error.status}
                                    </p>
                                    <p className="text-sm text-secondary-600">
                                      {error.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-primary-800 mb-3">
                              Error Response Format
                            </h4>
                            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                              <pre className="text-sm">
                                {`{
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "The departure_date parameter is required",
    "details": {
      "parameter": "departure_date",
      "expected": "YYYY-MM-DD format"
    }
  }
}`}
                              </pre>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Contact our integration team to get your API credentials and start
              building.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Get API Access
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                Contact Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ApiDocumentationPage;
