// Minimális service worker: csak azért kell, hogy a Chrome alkalmazásként telepíthesse.
// Semmit nem tárol el, mindig a friss oldalt tölti be.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
