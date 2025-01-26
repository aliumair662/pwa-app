const CACHE_NAME = 'my-pwa-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/static/js/bundle.js',
  '/static/css/main.css', // Add other assets as needed
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching files: ', ASSETS_TO_CACHE);
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching: ', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log('Returning cached response for:', event.request.url);
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        console.log('Caching new resource:', event.request.url);
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => {
      console.log('Failed to fetch:', event.request.url);
      return caches.match('/offline.html');
    })
  );
});
