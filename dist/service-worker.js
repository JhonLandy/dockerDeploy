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
    "revision": "79168e5a96f4c0631469291d2370dcec"
  },
  {
    "url": "assets/css/0.styles.89d2253f.css",
    "revision": "6b969e596c44bcf25795b00981b77cbd"
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
    "url": "assets/js/10.029487d7.js",
    "revision": "e6c9e12cf8778b3533f8ce825f3813c7"
  },
  {
    "url": "assets/js/11.ca6e2b21.js",
    "revision": "e46a33aaf75fccca8c7ffabff672bd04"
  },
  {
    "url": "assets/js/2.f723dd09.js",
    "revision": "b1c616005811d7b47a0f86e8ddfe22c3"
  },
  {
    "url": "assets/js/3.0d18efdf.js",
    "revision": "a902e1aa6341a0a901a5ab8cfc374984"
  },
  {
    "url": "assets/js/4.a6f21470.js",
    "revision": "dd15fa3bd59ec6668b5d8713c9e516a1"
  },
  {
    "url": "assets/js/5.4896ef0b.js",
    "revision": "cd165f12e63d95393eac131b8c0ec846"
  },
  {
    "url": "assets/js/6.75bba5ae.js",
    "revision": "a8e6d13b7f21f25705abd82ad1481c09"
  },
  {
    "url": "assets/js/7.5546731a.js",
    "revision": "c1509c089cf8fc43cf6c9c9a1cfaceec"
  },
  {
    "url": "assets/js/8.dcb2edcb.js",
    "revision": "ed5ce0690b992038172091a3f33b7267"
  },
  {
    "url": "assets/js/9.2f604000.js",
    "revision": "703a8104811d4ab4d696c1721de6a2cf"
  },
  {
    "url": "assets/js/app.883314a8.js",
    "revision": "8a598ac5bf22b063d52aa816cb1fe17d"
  },
  {
    "url": "deployment/docker/base/index.html",
    "revision": "aad6ae2cdb3d4e7fc361c3de4f14ea5d"
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
    "revision": "ef14d5c937071b426122716303306aae"
  },
  {
    "url": "web/javascript/ES6/index.html",
    "revision": "8042af7291aaf8f74eabeb5c9264c26d"
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
