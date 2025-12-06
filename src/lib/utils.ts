import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  const formatter = new Intl.NumberFormat(currency === 'USD' ? 'en-US' : 'en-AU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });
  
  return formatter.format(amount);
};

export const getCountryFlag = (country: string): string => {
  const flags: Record<string, string> = {
    'USA': '🇺🇸',
    'Australia': '🇦🇺',
  };
  
  return flags[country] || '';
};

export const getPaymentMethods = (region: string): string[] => {
  const methods: Record<string, string[]> = {
    'USA': ['Credit Card', 'PayPal', 'Apple Pay', 'Google Pay', 'Bank Transfer'],
    'Australia': ['Credit Card', 'BPAY', 'POLi', 'PayID', 'Bank Transfer'],
  };
  
  return methods[region] || methods['USA'];
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}