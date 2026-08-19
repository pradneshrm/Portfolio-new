/**
 * Privacy-conscious portfolio interaction analytics.
 *
 * Tracks interactions such as resume, cover-letter, LOR, LinkedIn,
 * email, case-study and dashboard clicks.
 *
 * This custom code does NOT collect IP addresses, exact GPS coordinates,
 * or personally identifying visitor information.
 */

export type PortfolioEventName =
  | 'page_view'
  | 'resume_click'
  | 'cover_letter_click'
  | 'lor_click'
  | 'linkedin_click'
  | 'email_click'
  | 'case_study_view'
  | 'dashboard_view'
  | 'contact_click';

export function trackPortfolioEvent(
  eventName: PortfolioEventName,
  params: Record<string, string | number | boolean> = {}
) {
  try {
    const w = window as Window & {
      gtag?: (...args: unknown[]) => void;
    };

    if (typeof w.gtag === 'function') {
      w.gtag('event', eventName, {
        ...params,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    const points: Record<PortfolioEventName, number> = {
      page_view: 1,
      resume_click: 8,
      cover_letter_click: 5,
      lor_click: 5,
      linkedin_click: 6,
      email_click: 10,
      case_study_view: 4,
      dashboard_view: 4,
      contact_click: 10,
    };

    const current = Number(
      window.localStorage.getItem('portfolio_engagement_score') || '0'
    );

    window.localStorage.setItem(
      'portfolio_engagement_score',
      String(current + (points[eventName] || 0))
    );

    // Per-event counts for this browser session, used by the visitor
    // alert to report what actually happened during THIS visit (the
    // engagement_score above accumulates across all past visits).
    const key = `portfolio_session_${eventName}`;
    const sessionCount = Number(window.sessionStorage.getItem(key) || '0');
    window.sessionStorage.setItem(key, String(sessionCount + 1));
  } catch {
    // Analytics must never break the portfolio.
  }
}

/** Snapshot of this session's engagement, read back by the visitor alert. */
export function getSessionEngagementSnapshot() {
  const get = (name: PortfolioEventName) =>
    Number(window.sessionStorage.getItem(`portfolio_session_${name}`) || '0');

  return {
    caseStudies: get('case_study_view'),
    dashboards: get('dashboard_view'),
    resumeClicked: get('resume_click') > 0,
    coverLetterClicked: get('cover_letter_click') > 0,
    lorClicked: get('lor_click') > 0,
    linkedinClicked: get('linkedin_click') > 0,
    contactClicked: get('contact_click') > 0 || get('email_click') > 0,
    engagementScore: Number(
      window.localStorage.getItem('portfolio_engagement_score') || '0'
    ),
  };
}
