const CACHE_NAME = 'my-pwa-cache-v1';

const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/favicon.ico',
    '/logo192.png', 
    '/logo512.png', 
    '/offline.html',
    '/static/js/main.ca09a6a9.js', // Replace with actual hashed file
    '/static/css/main.0d92217d.css', // Replace with actual hashed file
  ];
  
// Install the service worker and cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching files for offline usage...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).catch((error) => {
      console.error('Error caching files:', error);
    })
  );
});

// Activate service worker
self.addEventListener('activate', (event) => {
  console.log('Service worker activated');
  event.waitUntil(self.clients.claim());
});

// Fetch event - Serve from cache if available, else fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;  // Return from cache
      }

      return fetch(event.request).then((networkResponse) => {
        // Cache the new resources
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => {
      // If offline, serve offline.html
      return caches.match('/offline.html');
    })
  );
});
