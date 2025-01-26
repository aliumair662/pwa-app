const CACHE_NAME = 'my-pwa-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/static/js/bundle.js',
  '/static/css/main.css', // Add other assets as needed
  '/logo192.png',   // Ensure this icon is cached
  '/logo512.png',   // Ensure this icon is cached
  '/offline.html'        // Fallback page when offline
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching files');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate service worker
self.addEventListener('activate', (event) => {
  console.log('Service worker activated');
  event.waitUntil(self.clients.claim());
});

// Fetch event - Serve cached files if available, otherwise fetch from the network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        // Cache new resources
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => {
      // If offline, return offline.html
      return caches.match('/offline.html');
    })
  );
});
