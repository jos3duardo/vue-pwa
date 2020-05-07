self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Installer')
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate')
});

self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetch', e.request.url)
});
