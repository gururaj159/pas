self.addEventListener('fetch', (event) => {
  // This is a "dummy" service worker that allows installation
  event.respondWith(fetch(event.request));
});
