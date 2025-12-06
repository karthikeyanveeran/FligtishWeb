import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { FlightBookingPage } from './pages/FlightBookingPage';
import { InsurancePage } from './pages/InsurancePage';
import { LoansPage } from './pages/LoansPage';
import { DocumentWalletPage } from './pages/DocumentWalletPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { ApiSolutionsPage } from './pages/ApiSolutionsPage';
import { AiSolutionsPage } from './pages/AiSolutionsPage';
import { AirlineSolutionsPage } from './pages/AirlineSolutionsPage';
import { CareersPage } from './pages/CareersPage';
import { ManpowerPage } from './pages/ManpowerPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ApiDocumentationPage } from './pages/ApiDocumentationPage';
import { ApiChangelogPage } from './pages/ApiChangelogPage';
import { ApiStatusPage } from './pages/ApiStatusPage';
import { SdkGuidePage } from './pages/SdkGuidePage';
import { IntegrationGuidePage } from './pages/IntegrationGuidePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RegionProvider } from './context/RegionContext';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
  return (
    <RegionProvider>
      <CurrencyProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flights" element={<FlightBookingPage />} />
            <Route path="/insurance" element={<InsurancePage />} />
            <Route path="/loans" element={<LoansPage />} />
            <Route path="/documents" element={<DocumentWalletPage />} />
            <Route path="/api-solutions" element={<ApiSolutionsPage />} />
            <Route path="/ai-solutions" element={<AiSolutionsPage />} />
            <Route path="/airline-solutions" element={<AirlineSolutionsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/manpower" element={<ManpowerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/api-docs" element={<ApiDocumentationPage />} />
            <Route path="/api-changelog" element={<ApiChangelogPage />} />
            <Route path="/api-status" element={<ApiStatusPage />} />
            <Route path="/sdk-guide" element={<SdkGuidePage />} />
            <Route path="/integration-guide" element={<IntegrationGuidePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </CurrencyProvider>
    </RegionProvider>
  );
}

export default App;