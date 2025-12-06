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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </CurrencyProvider>
    </RegionProvider>
  );
}

export default App;