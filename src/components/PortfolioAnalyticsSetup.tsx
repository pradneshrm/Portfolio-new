import { useEffect } from 'react';
import { trackPortfolioEvent } from '../lib/portfolioAnalytics';
import { initVisitorAlert } from '../lib/visitorAlert';

/**
 * Google Analytics 4.
 *
 * The gtag.js loader itself now lives directly in index.html so it loads
 * before React even mounts (see <head>). That's more reliable than
 * injecting it from a React effect, since it still fires even if the app
 * throws during render. This component fires the custom engagement event
 * on top of gtag's own automatic page_view, and arms the visitor alert
 * (which itself fires later, when the visitor leaves).
 */
export default function PortfolioAnalyticsSetup() {
  useEffect(() => {
    trackPortfolioEvent('page_view');
    initVisitorAlert();
  }, []);

  return null;
}
