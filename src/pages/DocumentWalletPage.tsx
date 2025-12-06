import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Upload, 
  Trash2, 
  Eye, 
  Download, 
  Plus,
  FolderOpen,
  Lock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

interface Document {
  id: string;
  name: string;
  type: string;
  date: string;
  size: string;
}

export const DocumentWalletPage: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: '1',
      name: 'Passport.pdf',
      type: 'Passport',
      date: '2023-05-15',
      size: '2.4 MB',
    },
    {
      id: '2',
      name: 'Travel_Insurance_Policy.pdf',
      type: 'Insurance',
      date: '2023-07-22',
      size: '1.8 MB',
    },
    {
      id: '3',
      name: 'Medical_Certificate.pdf',
      type: 'Medical',
      date: '2023-06-12',
      size: '1.5 MB',
    },
    {
      id: '4',
      name: 'Hotel_Reservation.pdf',
      type: 'Accommodation',
      date: '2023-08-06',
      size: '1.2 MB',
    },
    {
      id: '5',
      name: 'Drivers_License.pdf',
      type: 'Identification',
      date: '2023-04-18',
      size: '1.7 MB',
    },
    {
      id: '6',
      name: 'Travel_Visa_India.pdf',
      type: 'Visa',
      date: '2023-07-30',
      size: '0.8 MB',
    },
  ]);

  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const handleDeleteDocument = (id: string) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  const handleUploadDocument = () => {
    // Simulate uploading a new document
    const newDocument: Document = {
      id: (documents.length + 1).toString(),
      name: 'New_Document.pdf',
      type: 'Other',
      date: new Date().toISOString().split('T')[0],
      size: '1.1 MB',
    };
    
    setDocuments([...documents, newDocument]);
  };

  const filteredDocuments = selectedFilter === 'all' 
    ? documents 
    : documents.filter(doc => doc.type.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            AI-Powered Document Wallet
          </h1>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Securely store, manage, and analyze all your travel documents with our intelligent document processing system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FolderOpen className="h-5 w-5 mr-2 text-primary-600" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="divide-y divide-gray-100">
                  {[
                    { id: 'all', name: 'All Documents' },
                    { id: 'passport', name: 'Passport' },
                    { id: 'insurance', name: 'Insurance' },
                    { id: 'visa', name: 'Visa Documents' },
                    { id: 'medical', name: 'Medical Records' },
                    { id: 'identification', name: 'ID Documents' },
                    { id: 'financial', name: 'Financial Documents' },
                    { id: 'accommodation', name: 'Accommodation' },
                    { id: 'other', name: 'Other' },
                  ].map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedFilter(category.id)}
                        className={`w-full py-3 px-6 text-left hover:bg-gray-50 transition-colors ${
                          selectedFilter === category.id ? 'bg-primary-50 text-primary-700 font-medium' : 'text-secondary-700'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 space-y-3">
                <Button
                  variant="primary"
                  fullWidth
                  icon={<Plus className="h-4 w-4" />}
                  onClick={handleUploadDocument}
                >
                  Upload Document
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  icon={<FileText className="h-4 w-4" />}
                >
                  Scan Document with AI
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Document List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>
                    {selectedFilter === 'all' ? 'All Documents' : `${selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)} Documents`}
                  </CardTitle>
                  <div className="relative max-w-xs">
                    <Input
                      placeholder="Search documents..."
                      className="pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-5 w-5 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <CardDescription>
                  {filteredDocuments.length} {filteredDocuments.length === 1 ? 'document' : 'documents'} found
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {filteredDocuments.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 text-secondary-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-secondary-900 mb-1">No documents found</h3>
                    <p className="text-secondary-500">
                      {selectedFilter === 'all' 
                        ? 'You haven\'t uploaded any documents yet.' 
                        : `You don't have any ${selectedFilter} documents.`}
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      icon={<Upload className="h-4 w-4" />}
                      onClick={handleUploadDocument}
                    >
                      Upload Document
                    </Button>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                            Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                            Size
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-secondary-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredDocuments.map((document) => (
                          <tr key={document.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <FileText className="h-5 w-5 text-secondary-400 mr-3" />
                                <span className="text-secondary-900 font-medium">{document.name}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-secondary-700">
                              {document.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-secondary-700">
                              {document.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-secondary-700">
                              {document.size}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                              <div className="flex justify-end space-x-2">
                                <button className="text-primary-600 hover:text-primary-800">
                                  <Eye className="h-5 w-5" />
                                </button>
                                <button className="text-primary-600 hover:text-primary-800">
                                  <Download className="h-5 w-5" />
                                </button>
                                <button 
                                  className="text-error-600 hover:text-error-800"
                                  onClick={() => handleDeleteDocument(document.id)}
                                >
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 space-y-4"
            >
              <Card className="bg-primary-50 border-primary-100">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary-100 p-3 rounded-full">
                      <Lock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800 text-lg mb-2">Secure Document Storage</h3>
                      <p className="text-primary-700">
                        All your documents are encrypted with AES-256 encryption and stored securely. Only you can access them through your account. 
                        We use bank-level security to protect your sensitive information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-accent-50 border-accent-100">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-accent-100 p-3 rounded-full">
                      <FileText className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-accent-800 text-lg mb-2">AI-Powered Document Analysis</h3>
                      <p className="text-accent-700">
                        Our advanced LangChain and RAG-powered document processing automatically extracts key information, validates document authenticity, and alerts you about expiring documents or missing information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};