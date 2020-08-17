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
    "revision": "b92e2bc8df339877fb4bf92206ae0189"
  },
  {
    "url": "assets/css/0.styles.765f8c21.css",
    "revision": "b3e323e7ee305310fd5a769f64ca750b"
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
    "url": "assets/js/10.d021257f.js",
    "revision": "8f00915d8a4d4cef4fde344bcd1ca7b3"
  },
  {
    "url": "assets/js/11.d6fbb459.js",
    "revision": "17cf467ffc486126eab259db848f93db"
  },
  {
    "url": "assets/js/2.1ba72eef.js",
    "revision": "fc4971f0bf76f0a72bc1e112ec6c0806"
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
    "url": "assets/js/8.f4798ece.js",
    "revision": "e9f17b1953ed5407d0f8269cafc94323"
  },
  {
    "url": "assets/js/9.2f604000.js",
    "revision": "703a8104811d4ab4d696c1721de6a2cf"
  },
  {
    "url": "assets/js/app.0418a045.js",
    "revision": "3fec3f02aa059cc12cc4e80bccad6115"
  },
  {
    "url": "deployment/docker/base/index.html",
    "revision": "2ea7baaa56ab061fb7e4faca4b430c0b"
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
    "url": "images/home/computer.jpg",
    "revision": "8d9d8b27d5f6a5ac5290019eb4a0fd08"
  },
  {
    "url": "images/home/mockup.jpg",
    "revision": "00c9888479e6334acc230e3ae0665fd5"
  },
  {
    "url": "images/home/shibuyasky.jpg",
    "revision": "fa78c5d16d93ab2f6272d334ebe49fde"
  },
  {
    "url": "index.html",
    "revision": "1152df5469dda1f64b687e30ebfd1381"
  },
  {
    "url": "web/javascript/ES6/index.html",
    "revision": "5881f192eb60f03349c41ca1d18584a7"
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
