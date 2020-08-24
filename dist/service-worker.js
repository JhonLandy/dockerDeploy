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
    "revision": "32215dcb371f3ed2e14dae18a735d49a"
  },
  {
    "url": "assets/css/0.styles.4897d6f7.css",
    "revision": "45463a94627ba44faa49b2ffe8b4cbfe"
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
    "url": "assets/js/10.4fe7a8eb.js",
    "revision": "d856badfe6b0de0bf711993f62c99b98"
  },
  {
    "url": "assets/js/11.d1bcead7.js",
    "revision": "5eafdea42aa868be206355a54d2f0463"
  },
  {
    "url": "assets/js/12.e27854de.js",
    "revision": "8cadfeda2f6e8cd9fcfaa30ed4271840"
  },
  {
    "url": "assets/js/13.60d9754d.js",
    "revision": "9424e1064911a089fc19fde05a895b76"
  },
  {
    "url": "assets/js/2.6c4f4514.js",
    "revision": "85af6215f5341775beddb9348716cd7d"
  },
  {
    "url": "assets/js/3.2ce69e2a.js",
    "revision": "60d7e0923db6963332c0712b65ab225b"
  },
  {
    "url": "assets/js/4.374c3d86.js",
    "revision": "8d140ebe6786c383b6c0c1396f44d53f"
  },
  {
    "url": "assets/js/5.e7772888.js",
    "revision": "8444228e2504af5cb24d7fbb50e4db24"
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
    "url": "assets/js/9.371d5755.js",
    "revision": "c5b1474539a1bf75d867dfccf302c459"
  },
  {
    "url": "assets/js/app.a6d1f569.js",
    "revision": "942c57bbc800f15223398852b1028912"
  },
  {
    "url": "deployment/docker/base/index.html",
    "revision": "91f2f35be962dfa0d0bf2fe97ff67da3"
  },
  {
    "url": "deployment/git/command/index.html",
    "revision": "4d9d5b70fcb234117aeeb95261fbbf14"
  },
  {
    "url": "deployment/git/standard/index.html",
    "revision": "a76d020a9571e0c86b4efc61d9e14c33"
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
    "revision": "34b1e99406b631fa6b6c089268b7cc8d"
  },
  {
    "url": "web/css/layout/index.html",
    "revision": "b43986bd8365a4534c0afbbc8910f01f"
  },
  {
    "url": "web/javascript/ES6/index.html",
    "revision": "1bca8f3e30a4ba632d46b9156f34009f"
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
