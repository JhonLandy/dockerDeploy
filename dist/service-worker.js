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
    "revision": "cc2e1bca1592fb990b7516736742e960"
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
    "url": "assets/js/app.5fa127e7.js",
    "revision": "aa5bb03fcaf910b4b7bc1f472c167da6"
  },
  {
    "url": "code/index.html",
    "revision": "4da5e72c9ff9e85b7ccb9f185e105ddc"
  },
  {
    "url": "deployment/docker/base/index.html",
    "revision": "400a78cc7ae663802d670cc23ab7e087"
  },
  {
    "url": "deployment/git/command/index.html",
    "revision": "54e1e9136ccc597cb55da60c382cb65d"
  },
  {
    "url": "deployment/git/ssh/index.html",
    "revision": "78084c3cbdfa0a0e11280de3eed2300e"
  },
  {
    "url": "deployment/git/standard/index.html",
    "revision": "cc22b2e5dffba7156e4da26f6be9d083"
  },
  {
    "url": "fronttalk/fourteen/index.html",
    "revision": "e05ada674fa01e8dc83d678432eaec22"
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
    "revision": "b46d034bd2e526f19b30e71c82594b32"
  },
  {
    "url": "web/css/animation/index.html",
    "revision": "822a662de8a5f53dba92ff8e0b88fa84"
  },
  {
    "url": "web/css/layout/index.html",
    "revision": "7500916bde3133986e719772392dd14b"
  },
  {
    "url": "web/javascript/ES6/index.html",
    "revision": "46c3d48f0258efde7232f8929a000a82"
  },
  {
    "url": "web/typescript/index.html",
    "revision": "ec632805fbe333e821f36990f9d6bc08"
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
