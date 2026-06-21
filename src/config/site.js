// Site-level config. Set OPTIN_ENDPOINT to the deployed emailit-worker URL and make sure
// citationgenerator.store is in that worker's ALLOWED_ORIGINS env var, plus a verified
// EmailIt sending domain + OWNER address. Until then opt-in posts will be rejected by CORS.
export const OPTIN_ENDPOINT = 'https://emailit.sunnypatel.co.uk';
