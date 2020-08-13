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
    "revision": "4cff195eb5457f1871f2ee35b01f845c"
  },
  {
    "url": "assets/css/0.styles.c3292ac3.css",
    "revision": "6568f1485e6344754f4edbce780b42e4"
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
    "url": "assets/js/10.5ecbc7f0.js",
    "revision": "8e2588ba48e03cf0082f05e5269dcb2b"
  },
  {
    "url": "assets/js/2.baed253a.js",
    "revision": "26fb9411a9dc8b125874a057e6a6d991"
  },
  {
    "url": "assets/js/3.921c3a74.js",
    "revision": "9f5e869df7fce78b1d971609a2a7ad76"
  },
  {
    "url": "assets/js/4.29d68560.js",
    "revision": "de144aadcf60b8c44d7ea46d288049cb"
  },
  {
    "url": "assets/js/5.44d3ba30.js",
    "revision": "819dbf90636d56dc5630fa1bd9b33948"
  },
  {
    "url": "assets/js/6.1fcff92b.js",
    "revision": "61b54e646070a1cc338fc7034f1ff228"
  },
  {
    "url": "assets/js/7.f62ba62c.js",
    "revision": "8b02ae4466e6770595f9fd9cc7ba3f20"
  },
  {
    "url": "assets/js/8.7381d898.js",
    "revision": "087ee463ccdb5a48de87f8ce2fb87b13"
  },
  {
    "url": "assets/js/9.d4aa2474.js",
    "revision": "4724f1078c1eeb1e2fcb330880693dd1"
  },
  {
    "url": "assets/js/app.bed3e3cf.js",
    "revision": "f96e04e0a7a4a38854476d5aba77be36"
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
    "revision": "56859b6dd878de115a7c262ec3e0682b"
  },
  {
    "url": "web/javascript/javascript.html",
    "revision": "bfe51a34a16153749c0b12455f5bfaf4"
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
