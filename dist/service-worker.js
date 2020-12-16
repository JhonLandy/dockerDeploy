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
    "revision": "ed635ba2a0144dcdbe535c4c6c69522a"
  },
  {
    "url": "assets/css/2.styles.fee77c00.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.3b4cc1d8.css",
    "revision": "1cae6ede4ed8de2abde44ffae1d84d5a"
  },
  {
    "url": "assets/css/6.styles.0e872e07.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.92d2c1dc.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.26af096c.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.35048f3e.css",
    "revision": "70586d9ff10af0c43cc17cf648d93698"
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
    "url": "assets/img/adjacency-lists.35fd593a.png",
    "revision": "35fd593acbd708487097e24c5b38fc43"
  },
  {
    "url": "assets/img/bars.7034b50f.png",
    "revision": "7034b50f73d054836b400fbec48315ad"
  },
  {
    "url": "assets/img/eventloop.91bb5a6d.gif",
    "revision": "91bb5a6db47fde9ac4f1634c772d9fac"
  },
  {
    "url": "assets/img/graph-input.5aee2e11.png",
    "revision": "5aee2e11ec34431a495f820193beb070"
  },
  {
    "url": "assets/img/insertion.237bcb0e.png",
    "revision": "237bcb0ec06dbc8b1fdcd844699a4033"
  },
  {
    "url": "assets/img/lifecycle.ca6594f5.png",
    "revision": "ca6594f5afd63257f86ddffde635e7a4"
  },
  {
    "url": "assets/img/merge.2eb6042d.png",
    "revision": "2eb6042d11119b1de7bb39a3613cdd4f"
  },
  {
    "url": "assets/img/mergesortBU.a978b9bd.png",
    "revision": "a978b9bd80dc03f9494e6a1a9f2ffe1d"
  },
  {
    "url": "assets/img/mergesortTD.2df0cda5.png",
    "revision": "2df0cda543c78cabffae95aa945d1e28"
  },
  {
    "url": "assets/img/origin-upstream.55d70183.png",
    "revision": "55d70183d4d17fc61cf7fc8dc9f42cf9"
  },
  {
    "url": "assets/img/quicksort.ceae7063.png",
    "revision": "ceae706337d16f795fda3666e0abbcf5"
  },
  {
    "url": "assets/img/reactprocess.043150d7.png",
    "revision": "043150d776364d6ab4303ff7caa0c4f4"
  },
  {
    "url": "assets/img/render.ee2c6c44.jpg",
    "revision": "ee2c6c442a5c9be33a205c7c8a490f2c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/selection.e8f57bf1.png",
    "revision": "e8f57bf154b86227d605451d0ad63fd4"
  },
  {
    "url": "assets/img/shell.66e23e7a.png",
    "revision": "66e23e7a536bc512b8ca5bee376f0495"
  },
  {
    "url": "assets/img/testresult.8843a16c.jpg",
    "revision": "8843a16c63d0f673422df61f0f234904"
  },
  {
    "url": "assets/js/10.eabbb89d.js",
    "revision": "48753aa85dba1d8c0ee29b604cbbcd81"
  },
  {
    "url": "assets/js/11.b0bc21f1.js",
    "revision": "f3105abb4972b03b0fc2a83cd5d3534f"
  },
  {
    "url": "assets/js/12.98efce2d.js",
    "revision": "3139791c412681e9df6f4bfa821f7e5c"
  },
  {
    "url": "assets/js/13.600c51dc.js",
    "revision": "fe6b2b362e48021cf20b133bf38aa68e"
  },
  {
    "url": "assets/js/14.eb0b7516.js",
    "revision": "1d606dfdaf147cf19336e25342db3873"
  },
  {
    "url": "assets/js/15.8bd4b695.js",
    "revision": "c2ef340ffd6ef94796237266b180430d"
  },
  {
    "url": "assets/js/16.cfff673e.js",
    "revision": "040112900900d50ea526abfcb936bd00"
  },
  {
    "url": "assets/js/17.b4a5419c.js",
    "revision": "b1836b6ed3e6d9c054e9a57657055b1d"
  },
  {
    "url": "assets/js/18.04187ca8.js",
    "revision": "50eefe14140c6703afa8befd60940c08"
  },
  {
    "url": "assets/js/19.d85ea0d1.js",
    "revision": "31799c16ff1cc9543194f0e51012a42c"
  },
  {
    "url": "assets/js/20.ff4a2bd3.js",
    "revision": "7e669c6a2d7d8e5d5103c3c89893a645"
  },
  {
    "url": "assets/js/21.b51d12e0.js",
    "revision": "bf79fe7d914102a624a2c9d3f228b005"
  },
  {
    "url": "assets/js/22.1ccd779e.js",
    "revision": "9e6819ce9852b1cdd7a969fd9018512f"
  },
  {
    "url": "assets/js/23.9ebe6e71.js",
    "revision": "7782658514827eed0628fe241822eff8"
  },
  {
    "url": "assets/js/24.8e2a89c4.js",
    "revision": "813663c5c3914448ea407b7a368bf89b"
  },
  {
    "url": "assets/js/25.b67b5eb3.js",
    "revision": "bdb9b8efe6c6e5d184de464cadf46221"
  },
  {
    "url": "assets/js/26.3306d57b.js",
    "revision": "a2506f366f23c454046c51c94677f3a9"
  },
  {
    "url": "assets/js/27.6a222735.js",
    "revision": "af1644a8678bcdca80e66c7c0431a82a"
  },
  {
    "url": "assets/js/28.34e5e2f3.js",
    "revision": "db678ccaa6bfd5e554e2463b12f92680"
  },
  {
    "url": "assets/js/29.4f9f13bd.js",
    "revision": "c9a8f08e9124e6a1a957d0a94a340111"
  },
  {
    "url": "assets/js/30.0af9cc5f.js",
    "revision": "461f0d28f2843347b68700c7b8518e7c"
  },
  {
    "url": "assets/js/31.5238b09d.js",
    "revision": "297617e6d4de6bde6e9e3cca6c1df440"
  },
  {
    "url": "assets/js/32.038069ea.js",
    "revision": "bbb8e5166d9c0ff8b8c8a7a041ae9fc8"
  },
  {
    "url": "assets/js/33.a8607770.js",
    "revision": "203ffed1746e3cd617251c65a5d68f68"
  },
  {
    "url": "assets/js/34.bb219895.js",
    "revision": "0d77262aaa6212ead89dcbe5f8a96b24"
  },
  {
    "url": "assets/js/35.8333effc.js",
    "revision": "3f005f67a4f9a561d64232ac0d45fb89"
  },
  {
    "url": "assets/js/36.9da81280.js",
    "revision": "1f2895755e46b572566d0a57c443d59d"
  },
  {
    "url": "assets/js/37.22a8d820.js",
    "revision": "882d3d898976c81cb43c7c7e66208f55"
  },
  {
    "url": "assets/js/38.3d8ff296.js",
    "revision": "1433e17162ca967a2e7c5adc88a0ac03"
  },
  {
    "url": "assets/js/39.66b903cd.js",
    "revision": "e2e49399aa9da27b9ca6ca420760d8e6"
  },
  {
    "url": "assets/js/40.dcab5f64.js",
    "revision": "87f42b142abe3ad976bed553c5fc348f"
  },
  {
    "url": "assets/js/41.39c02ef0.js",
    "revision": "2992591f1ec2e0f826ec5545a98316e2"
  },
  {
    "url": "assets/js/42.29c4ff26.js",
    "revision": "4844fee9983fc02a9f45922a17d00079"
  },
  {
    "url": "assets/js/43.302eeea6.js",
    "revision": "8344ebc0f2f6c58fc6e70ed72254f76b"
  },
  {
    "url": "assets/js/44.c6fa560e.js",
    "revision": "2a20d39c7f077e5d1696c777f064520e"
  },
  {
    "url": "assets/js/5.3b4cc1d8.js",
    "revision": "456acf817860fd6295c04f0580becad5"
  },
  {
    "url": "assets/js/6.0e872e07.js",
    "revision": "e2db7d5b8d9f18c6aedf05466345fcc1"
  },
  {
    "url": "assets/js/7.92d2c1dc.js",
    "revision": "a1e97a1fdc1f367887db87bdbff9e987"
  },
  {
    "url": "assets/js/8.26af096c.js",
    "revision": "00ba93e17ad10c6ea3a3bc5706a3de2a"
  },
  {
    "url": "assets/js/9.35048f3e.js",
    "revision": "580c2b374cc08e914eadca0dc6bd9337"
  },
  {
    "url": "assets/js/app.6cd4050f.js",
    "revision": "2bd6060d6fac5d6b47ca44281369b389"
  },
  {
    "url": "assets/js/chunk-elementUI.6ed22acb.js",
    "revision": "1fc1edcde0bcbea67a7622f4a084e74c"
  },
  {
    "url": "assets/js/chunk-libs.fee77c00.js",
    "revision": "ece786fb23bd5cca8c5fd03243bc0db0"
  },
  {
    "url": "assets/js/runtime.e8d22e9d.js",
    "revision": "71c2463cc0882e0699399e7f956422b6"
  },
  {
    "url": "images/code/1604035974.jpg",
    "revision": "bcb32c7c89c628c72d42109ee104a421"
  },
  {
    "url": "images/code/23tree-anatomy.png",
    "revision": "3641a3ae76e6edcd6040610ae4875dc4"
  },
  {
    "url": "images/code/adjacency-lists.png",
    "revision": "8df51a00dce29bbf354e778889fe9ca4"
  },
  {
    "url": "images/code/bars.png",
    "revision": "e18f7b1c1fbbf9370a5d21039810cad4"
  },
  {
    "url": "images/code/graph-input.png",
    "revision": "30cdfe2477deb76b6e54bf4de7560e83"
  },
  {
    "url": "images/code/h-sorted.png",
    "revision": "58f37bb61fd93c9d4ddd19e91ab35d70"
  },
  {
    "url": "images/code/insertion.png",
    "revision": "0dc151e6e98011b3387c908817d4b9ac"
  },
  {
    "url": "images/code/merge.png",
    "revision": "cc2191ea1e9e9ba9c403e1a342f0b7ee"
  },
  {
    "url": "images/code/mergesortBU.png",
    "revision": "7b75626747ab5855d31e6eda8634bfe4"
  },
  {
    "url": "images/code/mergesortTD.png",
    "revision": "62b68c89c600f2bbf41ce454e8e35a05"
  },
  {
    "url": "images/code/partitioning-overview.png",
    "revision": "9bad24d23d5b92e4a4e9790eb260f7a5"
  },
  {
    "url": "images/code/partitioning3-overview.png",
    "revision": "03ac1071a6cae190ba8c7187fa7c8ffe"
  },
  {
    "url": "images/code/quicksort.png",
    "revision": "e58479677bc8b2ddce2e4ba91a2523c9"
  },
  {
    "url": "images/code/selection.png",
    "revision": "388ad62ff8636e15db86ef4e54f6ddc4"
  },
  {
    "url": "images/code/shell.png",
    "revision": "0e110674a2beb3041925d71acdefdca6"
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
    "url": "images/react/reactprocess.png",
    "revision": "80251dc0c1285c4ed15cff62e0ea05ef"
  },
  {
    "url": "images/sidebar/browers/render.jpg",
    "revision": "fc676777d5463f6f7f640f5674d8644d"
  },
  {
    "url": "images/sidebar/git/origin-upstream.png",
    "revision": "c0285318a1a42508336e27cfb70f390f"
  },
  {
    "url": "images/sidebar/javascript/eventloop.gif",
    "revision": "778d214a75a2a7a0abd63b891d357b4f"
  },
  {
    "url": "images/sidebar/jest/testresult.jpg",
    "revision": "a5937ea69f5b0f1c3fe1f909dfa6af69"
  },
  {
    "url": "images/web/lifecycle.png",
    "revision": "6f2c97f045ba988851b02056c01c8d62"
  },
  {
    "url": "index.html",
    "revision": "75a3be5ddd0aaaacaee20649b6bacd0e"
  },
  {
    "url": "nav/code/index.html",
    "revision": "7de8413096859a3c510cc51dc99b589f"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "3b74a556beae074d61f1d370f2420e85"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "61ab3c649ce071c699499bf491c17a5b"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "b356e79b32fe667b1638691a8e368f5f"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "519cf36cf3658420a98393ad61d793e9"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "456a418548c87253b14932f50952e5a8"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "e433be04705060ea82ed7b8888385c80"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "8f72fe3b59f3b63bdb1dd984989cc8fe"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "63992066432be940569992a01929f686"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "2958d1ce5b569d9e7d6f631f74bfde93"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "e654ef69a4956bd19ca49feee8785555"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "a5b72ec9074f7b15ca02c0faa1a1218a"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "e4a097bdfcc6481ee6815c53870f0d09"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "65158bed62e3dd142620295685688878"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "b08b8c86559a53f6d164e2417099fdff"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "b5b60cf30b999d721e3616bc10408a0e"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "6508bb984ce834caa4c95c9399b8ef67"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "e1b6f52aa0be60375b6a0c2245830a3a"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "022b7e9cda0436159ca8f09a96cb604f"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "4eb1e9b9272d2744b50cb489f9dd92c4"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "ff7fe9ce64a968d626e8c1b736bf2db4"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "1499e787f3c7c2bc54f6b4eabdd45da0"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "0b7d0d5ee0cbeac0c9fc4c14911e9175"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "75add94a97ba944c8b36f2e3242b37c0"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "399eb98c39dc8657feff43d0c0cf56c9"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "0c475465e88e8777378b39395442784b"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "c0ddc509a096f81d9571d4062faf9f0a"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "34355d7febe65112adc0d074656d8bc8"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "c0efde0d21dc7b169c0e2525f4a22231"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "693fd87929c414324504d02e8b939a0e"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI.html",
    "revision": "760f2d7a998c3765fb556fb415fb91f7"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "bd1b556523592d54b49fb9ea911dff90"
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
