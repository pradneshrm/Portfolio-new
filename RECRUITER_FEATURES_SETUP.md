# Recruiter features setup

## 1. Documents

Place these real PDF files in `public/documents/`:

- `resume.pdf`
- `cover-letter.pdf`
- `lor-manager-1.pdf`

The Career Documents section is already wired into `src/App.tsx`.

## 2. Google Analytics

Open `src/components/PortfolioAnalyticsSetup.tsx`.

Replace:

`G-XXXXXXXXXX`

with your GA4 Measurement ID.

The component will then load GA4 and the custom interaction events in
`src/lib/portfolioAnalytics.ts` will be sent to GA4.

## 3. GitHub Pages

`vite.config.*` has been configured with:

`base: '/Portfolio-new/'`

Do not remove this unless the repository name changes.

## 4. Deployment

Commit and push the changes. GitHub Actions should build and deploy the site.
Wait for both build and deploy jobs to show green.

## 5. Privacy

Do not add code that attempts to collect IP addresses, exact GPS coordinates,
or personally identifying visitor information. Do not publish an LOR without
the author's permission.
