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
    "revision": "de2caf99ba062c98553afdeba7851e65"
  },
  {
    "url": "assets/css/0.styles.19121a98.css",
    "revision": "a7c6df6a49c23f448bd1c16986c18d3c"
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
    "url": "assets/js/10.f75aceb0.js",
    "revision": "4a68f025e4074efd0b441cf0d9792e9f"
  },
  {
    "url": "assets/js/11.ca6e2b21.js",
    "revision": "e46a33aaf75fccca8c7ffabff672bd04"
  },
  {
    "url": "assets/js/2.1c7b78d3.js",
    "revision": "644aa74edef53992520416a475b75a3c"
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
    "url": "assets/js/9.908c7747.js",
    "revision": "95cbd6c8ea6caa860cbc8d18a32ae980"
  },
  {
    "url": "assets/js/app.47792a99.js",
    "revision": "6d80ee1fc3c6aa88a1946bb66c443b32"
  },
  {
    "url": "deployment/docker/base/index.html",
    "revision": "10cce4185e45bca96b63c381140c8cdf"
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
    "revision": "8549bd53f6729040f0768780ae89282f"
  },
  {
    "url": "web/javascript/ES6/index.html",
    "revision": "7076f2604f663fb4efc6eea2628bfd06"
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
