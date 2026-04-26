/* ============================================================
   VOCAL ACADEMY — SERVICE WORKER  v1.1
   ============================================================ */

const CACHE_NAME = 'vocal-academy-v2';
const OFFLINE_URL = '/offline.html';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/login.html',
  '/dashboard.html',
  '/toefl-test.html',
  '/admin.html',
  '/css/styles.css',
  '/js/app.js',
  '/js/i18n.js',
  '/locales/en.json',
  '/locales/dari.json',
  '/locales/pashto.json',
  '/manifest.json',
  '/offline.html',
  '/icons/maskable_icon_x48.png',
  '/icons/maskable_icon_x72.png',
  '/icons/maskable_icon_x96.png',
  '/icons/maskable_icon_x128.png',
  '/icons/maskable_icon_x192.png',
  '/icons/maskable_icon_x384.png',
  '/icons/maskable_icon_x512.png'
];

self.addEventListener('install', event => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS).catch(err => console.warn('[SW] Pre-cache partial fail:', err)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (url.hostname.includes('supabase.co')) return;
  if (url.protocol === 'chrome-extension:') return;

  // ── CDN / Fonts: stale-while-revalidate ──────────────────────────────────
  if (url.hostname.includes('fonts.googleapis.com') ||
      url.hostname.includes('fonts.gstatic.com') ||
      url.hostname.includes('cdn.jsdelivr.net')) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(res => {
          // Clone BEFORE returning so we can put it in cache
          if (res && res.status === 200) {
            const toCache = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(request, toCache));
          }
          return res;
        });
      })
    );
    return;
  }

  // ── Navigation: network-first, fall back to cache then offline ───────────
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(res => {
          // Clone BEFORE returning so we can put it in cache
          if (res && res.status === 200) {
            const toCache = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(request, toCache));
          }
          return res;
        })
        .catch(() => caches.match(request).then(cached => cached || caches.match(OFFLINE_URL)))
    );
    return;
  }

  // ── All other GET requests: cache-first, fall back to network ────────────
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(res => {
        // Clone BEFORE returning so we can put it in cache
        if (res && res.status === 200 && res.type !== 'opaque') {
          const toCache = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(request, toCache));
        }
        return res;
      }).catch(() => {
        if (request.destination === 'image') {
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#f0f0f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-size="14">Offline</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        }
      });
    })
  );
});

self.addEventListener('push', event => {
  if (!event.data) return;
  const data = event.data.json().catch(() => ({}));
  event.waitUntil(self.registration.showNotification(data.title || 'Vocal Academy', {
    body: data.body || 'You have a new notification.',
    icon: '/icons/maskable_icon_x192.png',
    badge: '/icons/maskable_icon_x96.png',
    data: { url: data.url || '/' },
    vibrate: [100, 50, 100]
  }));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const c of list) if (c.url === targetUrl && 'focus' in c) return c.focus();
      if (clients.openWindow) return clients.openWindow(targetUrl);
    })
  );
});