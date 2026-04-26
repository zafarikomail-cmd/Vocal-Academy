/* ============================================================
   VOCAL ACADEMY — PWA REGISTRATION & INSTALL PROMPT  v1.0
   Add <script src="/pwa-register.js"></script> before </body>
   in every HTML page.
   ============================================================ */

/* ── 1. Register Service Worker ── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('[PWA] Service Worker registered:', reg.scope);
        setInterval(() => reg.update(), 60000);
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller)
              showUpdateBanner();
          });
        });
      })
      .catch(err => console.error('[PWA] SW registration failed:', err));
  });
}

/* ── 2. Install Prompt ── */
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  setTimeout(() => {
    if (deferredPrompt && !window.matchMedia('(display-mode: standalone)').matches)
      showInstallBanner();
  }, 3000);
});

function showInstallBanner() {
  if (sessionStorage.getItem('pwa-install-dismissed')) return;
  const banner = document.createElement('div');
  banner.id = 'pwa-install-banner';
  banner.innerHTML = `
    <div style="
      position:fixed; bottom:20px; left:50%; transform:translateX(-50%);
      background:#1a1a2e; color:white; padding:14px 20px; border-radius:14px;
      display:flex; align-items:center; gap:12px;
      box-shadow:0 8px 32px rgba(0,0,0,0.3); z-index:99999;
      max-width:380px; width:calc(100% - 40px); font-family:'DM Sans',sans-serif;">
      <img src="/icons/maskable_icon_x96.png" width="40" height="40"
           style="border-radius:10px;flex-shrink:0;" alt="Vocal Academy"/>
      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;font-size:0.9rem;margin-bottom:2px;">Install Vocal Academy</div>
        <div style="font-size:0.78rem;opacity:0.75;">Add to your home screen for quick access</div>
      </div>
      <button id="pwa-install-btn" style="
        background:#2d7d7d; color:white; border:none; padding:8px 14px;
        border-radius:8px; font-weight:600; font-size:0.82rem; cursor:pointer; flex-shrink:0;">
        Install
      </button>
      <button id="pwa-dismiss-btn" style="
        background:none; border:none; color:rgba(255,255,255,0.6);
        cursor:pointer; font-size:1.2rem; line-height:1; padding:0 4px; flex-shrink:0;">
        ✕
      </button>
    </div>`;
  document.body.appendChild(banner);

  document.getElementById('pwa-install-btn').addEventListener('click', () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
    }
    banner.remove();
  });

  document.getElementById('pwa-dismiss-btn').addEventListener('click', () => {
    sessionStorage.setItem('pwa-install-dismissed', '1');
    banner.remove();
  });
}

/* ── 3. Update Banner ── */
function showUpdateBanner() {
  const banner = document.createElement('div');
  banner.innerHTML = `
    <div style="
      position:fixed; top:16px; left:50%; transform:translateX(-50%);
      background:#2d7d7d; color:white; padding:12px 20px; border-radius:12px;
      display:flex; align-items:center; gap:12px;
      box-shadow:0 4px 20px rgba(0,0,0,0.2); z-index:99999;
      font-family:'DM Sans',sans-serif; font-size:0.88rem;">
      🎉 A new version of Vocal Academy is available!
      <button onclick="window.location.reload()" style="
        background:white; color:#2d7d7d; border:none; padding:6px 14px;
        border-radius:7px; font-weight:700; cursor:pointer; font-size:0.82rem;">
        Update Now
      </button>
    </div>`;
  document.body.appendChild(banner);
}

/* ── 4. Detect Standalone Mode ── */
window.addEventListener('DOMContentLoaded', () => {
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;
  if (isStandalone) document.documentElement.classList.add('pwa-standalone');
});

/* ── 5. Track install ── */
window.addEventListener('appinstalled', () => {
  console.log('[PWA] Vocal Academy was installed!');
  deferredPrompt = null;
});
