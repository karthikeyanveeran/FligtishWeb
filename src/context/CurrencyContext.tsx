import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRegion } from './RegionContext';

type Currency = 'USD' | 'AUD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { region } = useRegion();
  const [currency, setCurrency] = useState<Currency>(region === 'USA' ? 'USD' : 'AUD');

  useEffect(() => {
    // Update currency when region changes
    setCurrency(region === 'USA' ? 'USD' : 'AUD');
  }, [region]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};