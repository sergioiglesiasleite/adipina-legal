const CACHE = 'adipina-v11';
const FILES = ['./', './index.html', './styles.css', './app.js', './game.js', './content.js', './icon.svg', './icon-192.png', './icon-512.png', './manifest.webmanifest',
  './ui/mascotas.webp',
  // Client modules and the content bank: everything the single-phone mode needs offline. A test checks this list.
  './client/canvas.js', './client/dialogs.js', './client/icons.js', './client/platform.js', './client/qr.js', './client/room.js', './client/sound.js', './client/state.js', './client/stats.js', './client/store.js', './client/util.js', './client/views.js', './content/actions.js', './content/animals.js', './content/art.js', './content/body.js', './content/books.js', './content/cartoons.js', './content/christmas.js', './content/cinema.js', './content/clothes.js', './content/emotions.js', './content/famous.js', './content/festivities.js', './content/fiction.js', './content/food.js', './content/games.js', './content/halloween.js', './content/heroes.js', './content/history.js', './content/internet.js', './content/jobs.js', './content/music.js', './content/myths.js', './content/nature.js', './content/objects.js', './content/places.js', './content/prehistory.js', './content/sayings.js', './content/school.js', './content/science.js', './content/series.js', './content/spain.js', './content/sports.js', './content/television.js', './content/toys.js', './content/transport.js', './content/travel.js'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('adipina-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin || url.pathname.startsWith('/api/') || url.pathname.startsWith('/functions/v1/adipina')) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok) { const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy)); }
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || (event.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
