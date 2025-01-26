const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',    // Cache bundle.js (JavaScript file)
  '/static/css/main.css',    // Cache CSS file
  '/static/media/logo.svg',  // Cache any other images you might have
  '/manifest.json',          // Cache the manifest file
  '/favicon.ico',            // Cache the favicon
  // Add any other static assets you need to cache
];

// Installing service worker and caching assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);  // Cache the listed URLs
    })
  );
});

// Fetch event: Serve cached resources, or fetch from the network if not available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return the cached response if it's available
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // Otherwise, fetch the request from the network
      return fetch(event.request).catch((error) => {
        // Handle the error when the network fails (offline scenario)
        console.error('Fetch failed; returning offline page instead', error);
        return caches.match('/offline.html'); // Optionally, show an offline page if network fails
      });
    })
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];  // List of cache names to keep
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);  // Delete old caches
          }
        })
      );
    })
  );
});
