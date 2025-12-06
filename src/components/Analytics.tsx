import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
      });
    }
    
    // Log for development
    console.log('Page view:', location.pathname);
  }, [location]);

  return null;
};
