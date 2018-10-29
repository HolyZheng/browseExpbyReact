importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
// set the prefix and suffix of our sw's name
workbox.core.setCacheNameDetails({
  prefix: 'browse-exp',
  suffix: 'v1.0.0',
});
// have our sw update and control a web page as soon as possible.
workbox.skipWaiting();
workbox.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


// cache our data, and use networkFirst strategy.
workbox.routing.registerRoute(
  new RegExp('.*experiments\?.*'), 
  workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
  new RegExp('.*experiments/\\d'),
  workbox.strategies.networkFirst()  
)
workbox.routing.registerRoute(
  new RegExp('.*experiment_types.*'),
  workbox.strategies.networkFirst()
)

