// Opt-in form handler. AJAX POST (JSON) to the emailit-worker, honeypot guard, inline
// success/error states, no page navigation. Falls back to a normal form post without JS.
import { OPTIN_ENDPOINT } from '../config/site.js';

function initOptin(form) {
  const status = form.querySelector('[data-optin-status]');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // honeypot: if filled, silently pretend success (it is a bot)
    if (form.querySelector('[name="url"]')?.value) {
      if (status) status.textContent = 'Thanks, check your inbox.';
      return;
    }

    const email = form.querySelector('[name="email"]').value.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { fail('Please enter a valid email address.'); return; }

    const magnet = form.querySelector('[name="magnet"]')?.value || 'citation-cheat-sheet';
    const magnetUrl = `${location.origin}/cheat-sheets/${magnet}.pdf`;
    button.disabled = true;
    if (status) status.textContent = 'Sending...';

    try {
      const res = await fetch(OPTIN_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          magnet,
          magnetUrl,
          source: '_site=citationgenerator.store',
          message: `Citation cheat-sheet opt-in. Magnet: ${magnet}. Download: ${magnetUrl}. Page: ${location.pathname}`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      // deliver instantly regardless: the PDF is public, the email is the capture + backup copy
      if (res.ok && data.ok !== false) done(magnet);
      else if (res.status === 0 || !res.status) fail('Could not reach the server, but you can download it now.', magnet);
      else fail('Something went wrong sending the email, but your cheat sheet is ready below.', magnet);
    } catch (err) {
      fail('Could not reach the server. Please try again.');
    } finally {
      button.disabled = false;
    }
  });

  function dl(magnet) {
    return ` <a href="/cheat-sheets/${magnet}.pdf" download class="underline font-medium text-white">Download your cheat sheet</a>.`;
  }
  function done(magnet) {
    form.reset();
    if (status) { status.innerHTML = 'Thanks. We also emailed you a copy.' + dl(magnet); status.className = 'text-sm text-[var(--color-accent)] mt-2'; }
  }
  function fail(msg, magnet) {
    if (status) { status.innerHTML = msg + (magnet ? dl(magnet) : ''); status.className = 'text-sm text-red-300 mt-2'; }
  }
}

document.querySelectorAll('[data-optin]').forEach(initOptin);
