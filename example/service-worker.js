let cacheName = 'conhecendo-service-workers';
let filesToCache = [
  '/',
  'index.html',
  'style.css'
]

//save files in cache
self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Installer')
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  )
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate')
});

//if not network
self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetch', e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (response) {
        return response || fetch(e.request)
    })
  )
});
