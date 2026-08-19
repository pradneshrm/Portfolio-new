/**
 * EmailJS config (https://emailjs.com) — used ONLY for automated visitor
 * alerts, kept separate from Formspree (which handles real contact-form
 * submissions in formspree.ts). Free tier: 200 requests/month, 2 templates.
 *
 * Setup:
 * 1. Sign up at emailjs.com (free).
 * 2. Add an Email Service (e.g. connect your Gmail) -> copy its Service ID.
 * 3. Create a template. Paste in the converted subject/body (see chat)
 *    using EmailJS's {{variable}} syntax for: device, browser, source,
 *    landing_page, case_studies, dashboards, resume_clicked,
 *    cover_letter_clicked, lor_clicked, linkedin_clicked, contact_clicked,
 *    engagement_score. Location fields (country/region/city) are
 *    intentionally excluded - see RECRUITER_FEATURES_SETUP.md's privacy
 *    note (no IP/geo lookups). Copy the Template ID.
 * 4. Account > General -> copy your Public Key.
 * 5. Fill in the three values below.
 */
export const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
export const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
