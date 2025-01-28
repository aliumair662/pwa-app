const CACHE_NAME = 'my-pwa-cache-v1';

const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/offline.html',
  
  ];
  
// Install the service worker and cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching files for offline usage...');
      console.log('Request:', event.request.url);
      console.log('Response from cache:', cachedResponse);
      return cache.addAll(ASSETS_TO_CACHE);
    }).catch((error) => {
      console.error('Error caching files:', error);
    })
  );
});

// Activate service worker
self.addEventListener('activate', (event) => {
  console.log('Service worker activated');
  console.log('Request:', event.request.url);
  console.log('Response from cache:', cachedResponse);
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
      console.log('Request:', event.request.url);
      console.log('Response from cache:', cachedResponse);
      return caches.match('/offline.html');
    })
  );
});
