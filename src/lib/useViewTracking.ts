import { useEffect, useRef } from 'react';
import { trackPortfolioEvent, type PortfolioEventName } from './portfolioAnalytics';

/**
 * Fires `eventName` once, the first time the returned ref's element
 * scrolls into the viewport. Used for "view" style events (case studies,
 * dashboards) as opposed to click events.
 */
export function useViewTracking<T extends HTMLElement>(
  eventName: PortfolioEventName,
  params: Record<string, string | number | boolean> = {}
) {
  const ref = useRef<T | null>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || firedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !firedRef.current) {
            firedRef.current = true;
            trackPortfolioEvent(eventName, params);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
