/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "e5b961adae71c4d5a8009611b6b3a21c"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "2819a60c39651778fa8886655fff5a3d"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "0c92bb27c4018aad0717e959c07b376b"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "fce87b5fda7856a3e7ec3b0e311cf28e"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "e4981b3a838ec55235b62d4b19e78197"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "5ee86780d227848e68647a1d1b8e3b45"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "3071240a503289c9d3c51c54572b4222"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "b7f03a19d8e46172f95eb702d721bad8"
  },
  {
    "url": "index.css",
    "revision": "d8a62f678e4f6ede39f6f75bae8fb1a9"
  },
  {
    "url": "index.html",
    "revision": "fd9b2ed30a778289badaab3888d4e387"
  },
  {
    "url": "index.js",
    "revision": "e80c84d20a00417ebc417dc0db09c331"
  },
  {
    "url": "/",
    "revision": "ab45f479894c4b33627bc6623ae5f8d3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");
