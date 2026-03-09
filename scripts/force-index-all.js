/**
 * force-index-all.js
 * Submit all 22 pages to the Google Indexing API.
 *
 * SETUP (one-time):
 *   1. Create a Service Account in Google Cloud Console
 *      https://console.cloud.google.com/iam-admin/serviceaccounts
 *   2. Enable the "Indexing API" for the project
 *   3. Download the JSON key file → save as scripts/google-indexing-key.json
 *   4. In Google Search Console → Settings → Users and permissions
 *      → Add the service account email as an OWNER (not just user)
 *   5. npm install googleapis  (in project root)
 *
 * USAGE:
 *   node scripts/force-index-all.js
 *
 * The script submits each URL with a 1-second delay between requests
 * to avoid hitting API rate limits (200 requests/day quota).
 */

const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const BASE_URL = 'https://bozhiqidecorating.co.uk';

const PAGES = [
  '/',
  '/about',
  '/contact',
  '/gallery',
  '/services',
  '/services/interior-painting',
  '/services/exterior-painting',
  '/services/wallpaper-installation',
  '/services/plastering',
  '/services/woodwork-painting',
  '/locations',
  '/locations/southgate',
  '/locations/finchley',
  '/locations/enfield',
  '/locations/wimbledon',
  '/locations/mitcham',
  '/locations/streatham',
  '/locations/clapham',
  '/locations/kingston',
  '/locations/purley',
  '/locations/wallington',
  '/privacy-policy',
];

const KEY_FILE = path.join(__dirname, 'google-indexing-key.json');

async function main() {
  // Verify key file exists
  if (!fs.existsSync(KEY_FILE)) {
    console.error('ERROR: Service account key not found at scripts/google-indexing-key.json');
    console.error('See setup instructions at the top of this file.');
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const client = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: client });

  console.log(`\nSubmitting ${PAGES.length} URLs to Google Indexing API...\n`);

  let success = 0;
  let failed = 0;

  for (const page of PAGES) {
    const url = `${BASE_URL}${page}`;
    try {
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✓  ${url}  (${res.data.urlNotificationMetadata?.latestUpdate?.notifyTime || 'submitted'})`);
      success++;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`✗  ${url}  — ${message}`);
      failed++;
    }

    // 1-second delay between requests
    if (PAGES.indexOf(page) < PAGES.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  console.log(`\n─────────────────────────────────`);
  console.log(`Submitted: ${success} / ${PAGES.length}`);
  if (failed > 0) console.log(`Failed:    ${failed} (check errors above)`);
  console.log(`\nNote: Google's Indexing API allows 200 requests/day.`);
  console.log(`Run again after 24 hours if you need to resubmit.`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
