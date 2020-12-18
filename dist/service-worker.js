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
    "revision": "39271e15befb3af46844e7a78f9f966e"
  },
  {
    "url": "assets/css/2.styles.540413a3.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.876a1bc7.css",
    "revision": "d9761abd54055be5182e0cab9642cc43"
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
    "url": "assets/js/5.876a1bc7.js",
    "revision": "9570b35f0cff15eab95b7f5a4566dc6c"
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
    "url": "assets/js/chunk-libs.540413a3.js",
    "revision": "0c86803c71d3f185c080e85d1f2be7d1"
  },
  {
    "url": "assets/js/runtime.59ea080b.js",
    "revision": "ac78bd784858f97f589308d8912cb422"
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
    "revision": "a445d82ca9d399952959ecdbcbee6c93"
  },
  {
    "url": "nav/code/index.html",
    "revision": "29f5710cc2c369df5dd6113c980704b0"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "25d79fd2b08b6acc27c3c3e77993712f"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "4a0fbcae1b4f6114ebf9613641801a5c"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "1d5c296dbab950e358a4bbcb4f594f9f"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "7afb15f8a7797f273332cd6814da4ace"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "536c29a0d5c5f6e3b66df5ebb6695c0a"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "4a1ceab1eed311d75f35313d423d968d"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "c3eea225908ae5e543bab06cbf6a52d2"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "5f31188f0fc8c5b63e16238bca4d6bb4"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "7c2aba77f3794b548076819ee3013fd7"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "67ce31ce3e1b87ec7d41cc20f5893319"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "2aa2636c99e044d663b48a29b3f8c0f0"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "af97b7c0f2f26212eed3aba634c39a52"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "f597e69efeca17bf84b7d1391ca81383"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "ba9545feb3457049ba71a6262b0468ab"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "d72ca236dee82284fda694df2c4cfeaf"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "b295ff6e9e7234fd05f2f212da9544d4"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "9afdb44cca6f8e2db58d651fa2cb856d"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "433216e06de3ae1ead936d6c157d8f44"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "1de226d2fc30fca25650aad6ce20b307"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "b9aee93018c610d37866642662c20423"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "38de6e362cb7d399eae21dbcc60856f6"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "1b5cb2fe571585139ddb20bc63428e02"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "bf98e55ed1c17003380404df12c92a32"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "b76ec7aedd69177f69493f4268e220d7"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "894ae6cf3073d5a579b1d07c8835536f"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "435d3c745dd5407c3e982963aab2734b"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "7c7daef9e5f729d3a72336f4119e2434"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "1c0f91646c15f152d5f8db1aeef03618"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "a5928d25835feb30c2d20a12bdb00809"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI.html",
    "revision": "b7d18c157a3980181b3dbc413d5b1e76"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "674dfc9724c806d511392889559127a0"
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
