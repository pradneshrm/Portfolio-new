import { useEffect } from 'react';
import { trackPortfolioEvent } from '../lib/portfolioAnalytics';

/**
 * Google Analytics 4.
 *
 * Replace PLACEHOLDER_MEASUREMENT_ID with your real Measurement ID.
 * Until then, this component does nothing.
 */
const PLACEHOLDER_MEASUREMENT_ID = 'G-XXXXXXXXXX';
const MEASUREMENT_ID: string = 'G-E4V2RCZCHM';

export default function PortfolioAnalyticsSetup() {
  useEffect(() => {
    if (
      MEASUREMENT_ID === PLACEHOLDER_MEASUREMENT_ID ||
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

  // Log a page_view through the custom engagement-score/event pipeline too,
  // since gtag's own send_page_view only reports to GA4 directly.
  useEffect(() => {
    trackPortfolioEvent('page_view');
  }, []);

  return null;
}
