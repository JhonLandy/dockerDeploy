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
    "revision": "b5b99663df3fa89539e7a367c238bac6"
  },
  {
    "url": "assets/css/0.styles.1bf77872.css",
    "revision": "dda1bc1198b6900e37cebd18591b1a95"
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
    "url": "assets/js/10.06a3c6bf.js",
    "revision": "19e21b702ecde39fe708b46bfe3e338f"
  },
  {
    "url": "assets/js/11.ef8a534d.js",
    "revision": "ce2c45b4ef4ef8a5a66ebc56059edb47"
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
    "url": "assets/js/2.76e8fac6.js",
    "revision": "d4c967ab27083fbcc9e0cd1ebcc1f84f"
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
    "url": "assets/js/8.ababdd93.js",
    "revision": "942271007756aaf02f9a68cd25dba503"
  },
  {
    "url": "assets/js/9.ddb63b47.js",
    "revision": "21e7a69f8f79eb90d3bf0ea975d6685f"
  },
  {
    "url": "assets/js/app.4e61e074.js",
    "revision": "0c41fc53707cdac9ed2f04e7d747ab70"
  },
  {
    "url": "deployment/docker/base/index.html",
    "revision": "e003f35f13a77247606afe258af2a280"
  },
  {
    "url": "deployment/git/command/index.html",
    "revision": "6b2066687c670d90b3655b98a86a4d3f"
  },
  {
    "url": "deployment/git/standard/index.html",
    "revision": "b4ce15b81dd6b61a2e5838eb4355ff3f"
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
    "revision": "7f5418a5964d7e4f61989f6c3a91f2a8"
  },
  {
    "url": "web/css/layout/index.html",
    "revision": "d79ef2e9b0bafee35382b1929dc6ae74"
  },
  {
    "url": "web/javascript/ES6/index.html",
    "revision": "995b738495e9c8b52d24fb7f4212f16f"
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
