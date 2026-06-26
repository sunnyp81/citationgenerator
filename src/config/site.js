// Site-level config. Set OPTIN_ENDPOINT to the deployed emailit-worker URL and make sure
// citationgenerator.store is in that worker's ALLOWED_ORIGINS env var, plus a verified
// EmailIt sending domain + OWNER address. Until then opt-in posts will be rejected by CORS.
export const OPTIN_ENDPOINT = 'https://emailit.sunnypatel.co.uk';

// Paste the GA4 measurement id (G-XXXXXXXX) to enable analytics + outbound-click events.
// Empty = no analytics loaded. Mark `affiliate_click` as a key event in the GA4 UI.
export const GA_MEASUREMENT_ID = '';

// Demand-test mode. While false, partner buttons point at plain homepage URLs and only
// fire a GA event, so we measure click intent before joining any affiliate program.
// Flip true once Grammarly/Quetext are approved and the AFF hrefs below carry real ids.
export const AFFILIATE_LIVE = false;
