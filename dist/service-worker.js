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
    "revision": "a453f7f29251a7440b9e6431923423fd"
  },
  {
    "url": "assets/css/0.styles.f5ba617d.css",
    "revision": "86da6950619d8d03a85ec5e950b875b0"
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
    "url": "assets/js/10.d28858d4.js",
    "revision": "861daa667c2984419c9d21ae0b2d1ac7"
  },
  {
    "url": "assets/js/11.d6fbb459.js",
    "revision": "17cf467ffc486126eab259db848f93db"
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
    "url": "assets/js/4.45974063.js",
    "revision": "57423366cc054672ad89a25a693569cf"
  },
  {
    "url": "assets/js/5.44d3ba30.js",
    "revision": "819dbf90636d56dc5630fa1bd9b33948"
  },
  {
    "url": "assets/js/6.9e1e44e7.js",
    "revision": "26a47fa5ed8b84a3f3b86b1cbc4a96e4"
  },
  {
    "url": "assets/js/7.f62ba62c.js",
    "revision": "8b02ae4466e6770595f9fd9cc7ba3f20"
  },
  {
    "url": "assets/js/8.0d2cb042.js",
    "revision": "8da8a24a9855038e24b69e5fdc782f2b"
  },
  {
    "url": "assets/js/9.524e61e2.js",
    "revision": "2dd8b26b4045dd3f221a0ef0a041ec08"
  },
  {
    "url": "assets/js/app.e4726781.js",
    "revision": "3a1d86308b1e39ea4f7e1206a2ab15a4"
  },
  {
    "url": "deployment/docker/index.html",
    "revision": "9f46911567ae38066dd0d78e2b84af37"
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
    "revision": "d7d55b9d03887a6b21268d7a4f62e0c6"
  },
  {
    "url": "web/javascript/javascript.html",
    "revision": "5c7f2e8f59e6d637adf9cef0b700323c"
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
