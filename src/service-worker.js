/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();
self.skipWaiting();


// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
// const manifest = self.__WB_MANIFEST
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('fetch', (e) => {
  console.log("In fetch listener 1", e);
  if ((e.request.url.endsWith('/receive-shares')) && (e.request.method === 'POST')) {
    console.log("In fetch listener 2");
    return e.respondWith((async () => {
      // This function is async.
      console.log("In fetch listener 3")
      const formData = await e.request.formData();
      console.log("In fetch listener 3", formData);
      // Do something with the URL…
      const url = formData.get('url');
      // Store the URL, process it, communicate it to the clients…
      // You need to redirect the user somewhere, since the path
      // /receive-shares does not actually exist.
      return Response.redirect('/', 303);
    })())
  }
  /* Your regular fetch handler */
})

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  (e) => {
    console.log(e)
    if (e.request.url.indexOf('receive-shares') !== -1) {
      return true;
    }
    return false;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// registerRoute(
//   // Return false to exempt requests from being fulfilled by index.html.
//   ({ request, url }) => {
//     console.log()
//     // If this isn't a navigation, skip.
//     if (request.mode !== 'navigate') {
//       return false;
//     } // If this is a URL that starts with /_, skip.

//     if (url.pathname.startsWith('/_')) {
//       return false;
//     } // If this looks like a URL for a resource, because it contains // a file extension, skip.

//     if (url.pathname.match(fileExtensionRegexp)) {
//       return false;
//     } // Return true to signal that we want to use the handler.

//     return true;
//   },
//   createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
// );

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// Any other custom service worker logic can go here.
