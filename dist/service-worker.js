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
    "revision": "4c4bdb8fd89dad3902c9e1ae2fe00fbb"
  },
  {
    "url": "assets/css/0.styles.760f537a.css",
    "revision": "3290bd9581f33dc8b9225a7f3d8a6e08"
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
    "url": "assets/js/2.f70b1027.js",
    "revision": "c0623f52331e2944d971d9d390331ad7"
  },
  {
    "url": "assets/js/3.aafa4ee2.js",
    "revision": "10b1986f45e4668a94da25bd6f89f3ee"
  },
  {
    "url": "assets/js/4.390549d2.js",
    "revision": "a8e069b87741d536cee33ce19bc8e466"
  },
  {
    "url": "assets/js/5.3822e91c.js",
    "revision": "056320a5792829fa3f14fcf23e2fe7f7"
  },
  {
    "url": "assets/js/6.0731a117.js",
    "revision": "b7f0fb9db0ea7c9dcda82625ab3b2ec4"
  },
  {
    "url": "assets/js/7.97723ca9.js",
    "revision": "55c3b9a3ec6bc10912fda8dce1f6ac8c"
  },
  {
    "url": "assets/js/8.b2d0fd0d.js",
    "revision": "3167d9ebe9385ac7d852ed4f78259cdd"
  },
  {
    "url": "assets/js/9.a241b0bf.js",
    "revision": "0d153815a8c66f0828db8373640705a5"
  },
  {
    "url": "assets/js/app.3c139f8d.js",
    "revision": "139f3dcb8f0c7d7069aa66afb0b6e651"
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
    "revision": "fd919b65c46f0f8ca3be886fb732fd04"
  },
  {
    "url": "web/javascript/javascript.html",
    "revision": "eb04f13f79e870a90ca370b65060b7cb"
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
