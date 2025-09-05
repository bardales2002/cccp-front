// public/js/index.js
const form = document.getElementById('loginForm');
const errorBox = document.getElementById('error');

// Normalizo la base (por si algún día lleva / al final)
const API = (window.API_BASE || '').replace(/\/$/, '');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorBox.textContent = '';

  const data = Object.fromEntries(new FormData(form).entries());

  try {
    const res = await fetch(`${API}/api/login`, {   // <-- usa API_BASE aquí
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',                       // <-- imprescindible para cookies
      body: JSON.stringify(data)
    });

    const json = await res.json();
    if (!json.ok) {
      errorBox.textContent = json.message || 'Error de autenticación';
      return;
    }

    // 2) tras login, ve al backend para que él sirva /dashboard protegido
    location.href = `${API}/dashboard`;
  } catch {
    errorBox.textContent = 'No se pudo conectar con el servidor';
  }
});
