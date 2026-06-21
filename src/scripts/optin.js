// Opt-in form handler. AJAX POST (JSON) to the emailit-worker, honeypot guard, inline
// success/error states, no page navigation. Falls back to a normal form post without JS.
import { OPTIN_ENDPOINT } from '../config/site.js';

function initOptin(form) {
  const status = form.querySelector('[data-optin-status]');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // honeypot: if filled, silently pretend success (it is a bot)
    if (form.querySelector('[name="url"]')?.value) { done('Thanks, check your inbox.'); return; }

    const email = form.querySelector('[name="email"]').value.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { fail('Please enter a valid email address.'); return; }

    const magnet = form.querySelector('[name="magnet"]')?.value || 'citation-cheat-sheet';
    button.disabled = true;
    if (status) status.textContent = 'Sending...';

    try {
      const res = await fetch(OPTIN_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          magnet,
          source: '_site=citationgenerator.store',
          message: `Citation cheat-sheet opt-in. Magnet: ${magnet}. Page: ${location.pathname}`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok !== false) done('Thanks. Check your inbox for the cheat sheet.');
      else fail('Something went wrong. Please try again in a moment.');
    } catch (err) {
      fail('Could not reach the server. Please try again.');
    } finally {
      button.disabled = false;
    }
  });

  function done(msg) {
    form.reset();
    if (status) { status.textContent = msg; status.className = 'text-sm text-[var(--color-accent)] mt-2'; }
  }
  function fail(msg) {
    if (status) { status.textContent = msg; status.className = 'text-sm text-red-300 mt-2'; }
  }
}

document.querySelectorAll('[data-optin]').forEach(initOptin);
