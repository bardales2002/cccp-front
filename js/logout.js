// js/logout.js
(() => {
  const API   = (window.API_BASE   || '').replace(/\/$/, '');
  const FRONT = (window.FRONT_BASE || '').replace(/\/$/, '');

  const btn = document.getElementById('logoutBtn');
  if (!btn) return; // Solo actúa si existe el botón

  btn.addEventListener('click', async () => {
    btn.disabled = true;
    try {
      await fetch(`${API}/api/logout`, {
        method: 'POST',
        credentials: 'include', // importante: manda la cookie 'sid'
      });
    } catch (_) {
      // aunque falle la request, vamos a mandar al login
    }
    // Redirige al login del FRONT (Cloudflare Pages)
    window.location.href = `${FRONT}/`;
  });
})();
