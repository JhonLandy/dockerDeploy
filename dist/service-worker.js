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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "45c771683d618104d13be1776dd53753"
  },
  {
    "url": "assets/css/0.styles.737871b1.css",
    "revision": "06a45d5b51da5965e7f3858d32ec871b"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.762d6de6.js",
    "revision": "195bfbbd5a2722bdf3a3d6f4fde19795"
  },
  {
    "url": "assets/js/3.4a5763ee.js",
    "revision": "28e6bcd52aed0ac6226dba6e498dcf0a"
  },
  {
    "url": "assets/js/4.94d4c5f2.js",
    "revision": "4beb1cbadb4005b96ff9c89b42d31267"
  },
  {
    "url": "assets/js/5.e54c371f.js",
    "revision": "df0b338252ce4d19eeff469d73e52371"
  },
  {
    "url": "assets/js/6.8e07a6f9.js",
    "revision": "954c4f4aac0ae78c801810591e1575bc"
  },
  {
    "url": "assets/js/7.0dd941bd.js",
    "revision": "16ae0f2bb572cfc11937988eb84dc3cf"
  },
  {
    "url": "assets/js/8.11c2de77.js",
    "revision": "3a5add674650b632c953384e6b34db97"
  },
  {
    "url": "assets/js/9.c38a7a94.js",
    "revision": "b5127ee6aa042a6b4f720bca0edd2546"
  },
  {
    "url": "assets/js/app.4aafb1f8.js",
    "revision": "a4931c8d10a48d545de9c39f23bdcdb3"
  },
  {
    "url": "images/head/mine.jpg",
    "revision": "1383cfaa29701f54ed90ca3fd10fd261"
  },
  {
    "url": "images/head/mine.png",
    "revision": "7f824fd01f5d9a65a3bbcda372b0d427"
  },
  {
    "url": "images/home/home.jpg",
    "revision": "91db154ae0c2bc9fcb87778e8ae4489d"
  },
  {
    "url": "index.html",
    "revision": "b9d4ebc3430f9be3435d33098dd0a42d"
  },
  {
    "url": "web/javascript/javascript.html",
    "revision": "59b05de9035b36cee4f85aaf8fcdb9f4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
