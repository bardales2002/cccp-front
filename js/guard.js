// js/guard.js
(async () => {
  try {
    const r = await fetch(`${window.API_BASE}/api/me`, { credentials: 'include' });
    const j = await r.json();
    if (!j.ok) window.location.href = '/'; // sin sesión -> vuelve al login
  } catch {
    window.location.href = '/';
  }
})();