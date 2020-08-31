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
    "revision": "f3259c03447059a3730c070aad22b689"
  },
  {
    "url": "assets/css/0.styles.a77f6b93.css",
    "revision": "f9a8b7a807dd77673c2cd4e860bda89e"
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
    "url": "assets/js/10.b41a9951.js",
    "revision": "77b58e921c0b4a2fcc8ac6af9216d10c"
  },
  {
    "url": "assets/js/11.b120e9e1.js",
    "revision": "51d57a6544fc8e55a3d8d7f0f19f93d7"
  },
  {
    "url": "assets/js/12.ef58998f.js",
    "revision": "0824dd159172600f3ed9e9670c77d6b6"
  },
  {
    "url": "assets/js/13.2c263e9f.js",
    "revision": "cf665345a0971ee668f3ae1ced83b9ce"
  },
  {
    "url": "assets/js/14.64999b5d.js",
    "revision": "a67ef29c8da81692ff8c6df7384eae1e"
  },
  {
    "url": "assets/js/15.be9cfc40.js",
    "revision": "29c819738ced3b462a2d9cc0eb5be9ab"
  },
  {
    "url": "assets/js/16.e82d6c6c.js",
    "revision": "6fa026c7f5c7ad3275190d6ba7df31dc"
  },
  {
    "url": "assets/js/17.78ad9b43.js",
    "revision": "e299f11d7f0dcd4809139fa9250b062f"
  },
  {
    "url": "assets/js/18.e80bf7f7.js",
    "revision": "b5ad584badacb9bbbd0a9bbc19874b79"
  },
  {
    "url": "assets/js/2.5d3e38c9.js",
    "revision": "f3985a946bb447917442470e6fc0fcce"
  },
  {
    "url": "assets/js/3.3df6a61b.js",
    "revision": "e0f6700a8fefca3b51947f7a662388b4"
  },
  {
    "url": "assets/js/4.2218be53.js",
    "revision": "7fcf52685c3e78564fc1efb0e4f0e409"
  },
  {
    "url": "assets/js/5.42453676.js",
    "revision": "cf861f875b0408ee6a97579266599d6c"
  },
  {
    "url": "assets/js/6.538f1779.js",
    "revision": "81cd0b5365e722741f5140315b7de97a"
  },
  {
    "url": "assets/js/7.83803401.js",
    "revision": "9e992960638b3d61aff95043f5f890d8"
  },
  {
    "url": "assets/js/8.1f2fe495.js",
    "revision": "579e3d8d4e4f3f258b896c2b19efb5e0"
  },
  {
    "url": "assets/js/9.da33f28d.js",
    "revision": "b08c5826fe3495120880435040818f87"
  },
  {
    "url": "assets/js/app.a9c0a1f1.js",
    "revision": "b87d7e8f6fa391415acc6da7a721b0be"
  },
  {
    "url": "code/index.html",
    "revision": "038e364ce27031e7738c901d2da059b5"
  },
  {
    "url": "deployment/docker/base/index.html",
    "revision": "1481e2679ff4b7900f4038468975351a"
  },
  {
    "url": "deployment/git/command/index.html",
    "revision": "097ba6076296baad875e42b2d6ddf481"
  },
  {
    "url": "deployment/git/ssh/index.html",
    "revision": "368f9bb0ed51b57c105a2eb0e1a31f76"
  },
  {
    "url": "deployment/git/standard/index.html",
    "revision": "2f8a965cd596d2125e5741ea3cd80d83"
  },
  {
    "url": "fronttalk/fourteen/index.html",
    "revision": "50223b3a15e636dc670ccbc15fba272f"
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
    "revision": "f00d3b318fed1d416ac9b6857bdf1316"
  },
  {
    "url": "web/css/animation/index.html",
    "revision": "0a1695957e728238e54917c924ae6b53"
  },
  {
    "url": "web/css/layout/index.html",
    "revision": "6e4dcd47298b942c0e5d6a2f2f53d795"
  },
  {
    "url": "web/javascript/ES6/index.html",
    "revision": "203a1363519039c24c629ebf143df600"
  },
  {
    "url": "web/typescript/index.html",
    "revision": "043c9ee3f0e8415a59724b71dc69e1bf"
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
