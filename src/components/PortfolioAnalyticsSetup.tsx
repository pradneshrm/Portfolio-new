import { useEffect } from 'react';

/**
 * Google Analytics 4.
 *
 * Replace G-XXXXXXXXXX with your real Measurement ID.
 * Until then, this component does nothing.
 */
const MEASUREMENT_ID = 'G-E4V2RCZCHM';

export default function PortfolioAnalyticsSetup() {
  useEffect(() => {
    if (
      MEASUREMENT_ID === 'G-XXXXXXXXXX' ||
      document.querySelector('script[data-portfolio-ga4="true"]')
    ) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.dataset.portfolioGa4 = 'true';
    document.head.appendChild(script);

    const inline = document.createElement('script');
    inline.dataset.portfolioGa4 = 'true';
    inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){window.dataLayer.push(arguments);}
      window.gtag('js', new Date());
      window.gtag('config', '${MEASUREMENT_ID}', {
        anonymize_ip: true,
        send_page_view: true
      });
    `;
    document.head.appendChild(inline);
  }, []);

  return null;
}
