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
    "revision": "d49a9b80a7cb8c1c4f06c51051cd6ba4"
  },
  {
    "url": "assets/css/0.styles.eb04c32e.css",
    "revision": "be284298536829706093bcc9c671514c"
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
    "url": "assets/img/mine.7f824fd0.png",
    "revision": "7f824fd01f5d9a65a3bbcda372b0d427"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7d901836.js",
    "revision": "862ef8753557fe02a966bcbe8316dd59"
  },
  {
    "url": "assets/js/11.6a639bc2.js",
    "revision": "78b7bc553389e42af9e9c9056c1ab784"
  },
  {
    "url": "assets/js/2.f9e77bc6.js",
    "revision": "9a0850cb65fdd5fad4c4fbdecd98bc65"
  },
  {
    "url": "assets/js/3.4fdab63b.js",
    "revision": "f248588a6bec5ebeff19a2b167e44d00"
  },
  {
    "url": "assets/js/4.9400bf95.js",
    "revision": "7b33d883f8f7186d2ef117a32b7b2f83"
  },
  {
    "url": "assets/js/5.94c73fac.js",
    "revision": "80a4c057d75a4a7280f1e28ff1801a88"
  },
  {
    "url": "assets/js/6.8dca5fac.js",
    "revision": "a79ab049c9128869589d499763d4d53e"
  },
  {
    "url": "assets/js/7.969d08d2.js",
    "revision": "a254b8892ae8ade23632e61b6ce663ad"
  },
  {
    "url": "assets/js/8.5fb56134.js",
    "revision": "970c1e60e01bb2a4e9794d69ce0a4e55"
  },
  {
    "url": "assets/js/9.c9b2e4c4.js",
    "revision": "ca35ca49c904aabc19c388872e40557f"
  },
  {
    "url": "assets/js/app.5e581281.js",
    "revision": "ede7113a28ce64ffb59f656a1e2dcb93"
  },
  {
    "url": "deployment/docker/base/index.html",
    "revision": "df8cc7acc5c82f4956802ab0cf0c9db9"
  },
  {
    "url": "images/head/mine.png",
    "revision": "7f824fd01f5d9a65a3bbcda372b0d427"
  },
  {
    "url": "images/home/computer.jpg",
    "revision": "97ae1c5927263d0105cf36e7da744750"
  },
  {
    "url": "images/home/mockup.jpg",
    "revision": "8f0ebcb1b2685810cb910ed0a2980f16"
  },
  {
    "url": "images/home/shibuyasky.jpg",
    "revision": "77d3e465755dd1e46e93c7a145e26c43"
  },
  {
    "url": "index.html",
    "revision": "dd71111d5c61f0760cf8cb9b6e899b88"
  },
  {
    "url": "web/css/layout/index.html",
    "revision": "4f68db54a0871faaf79dd1656f48132d"
  },
  {
    "url": "web/javascript/ES6/index.html",
    "revision": "27b78ccc6d36723c9ca437fffaa848e9"
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
