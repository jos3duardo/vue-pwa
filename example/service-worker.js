let cacheName = 'conhecendo-service-workers';
let filesToCache = [
  '/',
  'index.html',
  'style.css'
]


self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Installer')
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
    })
  )
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate')
});

self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetch', e.request.url)
});
