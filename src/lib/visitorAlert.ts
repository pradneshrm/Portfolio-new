import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from './emailjs';
import { getSessionEngagementSnapshot } from './portfolioAnalytics';

/**
 * Sends a "visitor alert" email once per browser session, via EmailJS -
 * a separate channel from the Formspree-powered contact form, so contact
 * inquiries and automated visit alerts don't share one inbox pipeline or
 * one quota.
 *
 * Fires when the visitor leaves the page (tab hidden / closed), not on
 * arrival - an alert sent at page-load would always report zero clicks,
 * since nothing has happened yet. Firing on exit lets it report what the
 * visitor actually did during the visit.
 *
 * Uses only non-identifying context already available client-side:
 * device type, browser family, referrer hostname, landing page, and this
 * session's own on-page interaction counts. Deliberately does NOT collect
 * or infer country/region/city, since that requires an IP-based
 * geolocation lookup, which RECRUITER_FEATURES_SETUP.md explicitly says
 * this project should not do.
 */

function getDeviceType(ua: string): string {
  if (/tablet|ipad/i.test(ua)) return 'Tablet';
  if (/mobile|android|iphone/i.test(ua)) return 'Mobile';
  return 'Desktop';
}

function getBrowser(ua: string): string {
  if (/edg\//i.test(ua)) return 'Edge';
  if (/chrome\//i.test(ua) && !/edg\//i.test(ua)) return 'Chrome';
  if (/firefox\//i.test(ua)) return 'Firefox';
  if (/safari\//i.test(ua) && !/chrome\//i.test(ua)) return 'Safari';
  return 'Other';
}

function getTrafficSource(): string {
  if (!document.referrer) return 'Direct / typed URL';
  try {
    return new URL(document.referrer).hostname || 'Direct / typed URL';
  } catch {
    return 'Direct / typed URL';
  }
}

const SESSION_FLAG = 'portfolio_visitor_alert_sent';

function buildPayload() {
  const ua = navigator.userAgent;
  const snap = getSessionEngagementSnapshot();

  return {
    service_id: EMAILJS_SERVICE_ID,
    template_id: EMAILJS_TEMPLATE_ID,
    user_id: EMAILJS_PUBLIC_KEY,
    template_params: {
      device: getDeviceType(ua),
      browser: getBrowser(ua),
      source: getTrafficSource(),
      landing_page: window.location.pathname,
      case_studies: snap.caseStudies,
      dashboards: snap.dashboards,
      resume_clicked: snap.resumeClicked ? 'Yes' : 'No',
      cover_letter_clicked: snap.coverLetterClicked ? 'Yes' : 'No',
      lor_clicked: snap.lorClicked ? 'Yes' : 'No',
      linkedin_clicked: snap.linkedinClicked ? 'Yes' : 'No',
      contact_clicked: snap.contactClicked ? 'Yes' : 'No',
      engagement_score: snap.engagementScore,
    },
  };
}

function fireAlert() {
  try {
    if (sessionStorage.getItem(SESSION_FLAG)) return; // once per visit/session
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') return; // not configured yet
    sessionStorage.setItem(SESSION_FLAG, 'true');

    const body = JSON.stringify(buildPayload());

    // sendBeacon is the reliable way to fire a request during page unload -
    // fetch() often gets cancelled mid-flight when the tab closes.
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: 'application/json' });
      navigator.sendBeacon('https://api.emailjs.com/api/v1.0/email/send', blob);
    } else {
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Alerts must never break the portfolio for the visitor.
  }
}

/**
 * Call once, on app mount. Listens for the visitor leaving (tab hidden or
 * page unload) and sends the alert at that point, once per session.
 */
export function initVisitorAlert() {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') fireAlert();
  });
  window.addEventListener('pagehide', fireAlert);
}
