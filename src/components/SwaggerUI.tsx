import React, { useEffect } from 'react';

export const SwaggerUI: React.FC = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://unpkg.com/swagger-ui-dist@4/swagger-ui-bundle.js';
    script1.async = true;
    
    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/swagger-ui-dist@4/swagger-ui-standalone-preset.js';
    script2.async = true;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/swagger-ui-dist@4/swagger-ui.css';

    document.head.appendChild(link);
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    script2.onload = () => {
      (window as any).ui = (window as any).SwaggerUIBundle({
        url: '/api/swagger.yaml',
        dom_id: '#swagger-ui',
        presets: [
          (window as any).SwaggerUIBundle.presets.apis,
          (window as any).SwaggerUIStandalonePreset
        ],
        layout: 'BaseLayout',
        deepLinking: true,
        tryItOutEnabled: true
      });
    };

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return <div id="swagger-ui" style={{ minHeight: '800px' }} />;
};

export default SwaggerUI;