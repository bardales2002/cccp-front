// public/js/index.js
const form = document.getElementById('loginForm');
const errorBox = document.getElementById('error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorBox.textContent = '';

  const data = Object.fromEntries(new FormData(form).entries());

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',              // <<--- IMPORTANTE
      body: JSON.stringify(data)
    });

    const json = await res.json();
    if (!json.ok) {
      errorBox.textContent = json.message || 'Error de autenticación';
      return;
    }
    location.href = '/dashboard';
  } catch {
    errorBox.textContent = 'No se pudo conectar con el servidor';
  }
});
