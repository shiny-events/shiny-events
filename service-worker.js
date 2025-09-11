// Basic offline cache + placeholder push handler (OneSignal има собствен SW файлове)
const CACHE = 'shiny-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './events.json',
  './icon-192.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method === 'GET') {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return resp;
      }).catch(() => r))
    );
  }
});

// OneSignal използва отделни SW файлове (виж OneSignalSDKWorker.js)
