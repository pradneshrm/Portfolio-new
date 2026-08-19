import { useEffect } from 'react';
import { trackPortfolioEvent } from '../lib/portfolioAnalytics';

/**
 * Google Analytics 4.
 *
 * The gtag.js loader itself now lives directly in index.html so it loads
 * before React even mounts (see <head>). That's more reliable than
 * injecting it from a React effect, since it still fires even if the app
 * throws during render. This component only fires the custom engagement
 * event on top of gtag's own automatic page_view.
 */
export default function PortfolioAnalyticsSetup() {
  useEffect(() => {
    trackPortfolioEvent('page_view');
  }, []);

  return null;
}
