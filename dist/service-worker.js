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
    "revision": "858270f38b3d2147b5cea508468b0899"
  },
  {
    "url": "assets/css/2.styles.224ece00.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.830024e0.css",
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
    "url": "assets/js/10.dcc6c847.js",
    "revision": "f3307c9041db4b919f6f292789a138a7"
  },
  {
    "url": "assets/js/11.374cd8ce.js",
    "revision": "b15785a45c0e4fc0a0bf9f0a2af0a20d"
  },
  {
    "url": "assets/js/12.ad351b03.js",
    "revision": "ee402954ddbbbd59c1b68d840bd10d2e"
  },
  {
    "url": "assets/js/13.4776badf.js",
    "revision": "54724024bf4b5c853c3ea3008d57cdd1"
  },
  {
    "url": "assets/js/14.115839d1.js",
    "revision": "e45f5d36f97434ba82d29557e969389e"
  },
  {
    "url": "assets/js/15.fb045e06.js",
    "revision": "a28b57a09824ace78712f9a97d6d265f"
  },
  {
    "url": "assets/js/16.bda7eb49.js",
    "revision": "92ec9ad2b678e7e4c894671e6c98e6ea"
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
    "url": "assets/js/22.07afe41d.js",
    "revision": "bd11be01475503867668615db0518dac"
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
    "url": "assets/js/28.c1d8a0e6.js",
    "revision": "7e5a16b7ab8f36755630edccf47d4cf6"
  },
  {
    "url": "assets/js/29.d26faff5.js",
    "revision": "c0c9c85847caf99decfbf985223f8314"
  },
  {
    "url": "assets/js/30.4027bcf9.js",
    "revision": "69e35ed79057526d35e879b3d707bfa8"
  },
  {
    "url": "assets/js/31.7ace2c61.js",
    "revision": "7fa8d6a7354cb80ecf0eadc896a9f49b"
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
    "url": "assets/js/41.d77c1d00.js",
    "revision": "7a4fe10e547511aff81522678750be55"
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
    "url": "assets/js/5.830024e0.js",
    "revision": "2f69cc4e8b83969785743e1608c4d851"
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
    "url": "assets/js/chunk-libs.224ece00.js",
    "revision": "a496a73425fef8c12ae9e6a26303ff83"
  },
  {
    "url": "assets/js/runtime.e01d8011.js",
    "revision": "bc5391e1feca8a8cb203cc4d9f7f75de"
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
    "revision": "c9f8c520cf78fd748b9c3cea271636df"
  },
  {
    "url": "nav/code/index.html",
    "revision": "05be28965f4e124202bbcc3a3475fe93"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "4e66abfc8109f002d1d94d2f97440408"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "4d8c7df8a22f04ba926cd635c048a0f2"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "16585217f2ea801948d2917490b0a99d"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "21c2490d307ebebd85c8224343fff7e6"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "5a41ed2b5fd4a5f26d53bfb4bf0c6502"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "b81a4db6e55e5a1ba9eb9f4e7693bcb0"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "ceeab4ee4fe5887272c5e6f7034edbf1"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "d81b8527b5e900d8f0360fe45fb83cf3"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "ab650a05a5be2479789735e4bcc172df"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "1ddf189563ee3584952adc0658856c7f"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "f303fe318f6edb3fb1ff2e5fe5ad9187"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "7f2935d9e66a38b64f8ec4c902bbac39"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "8cefadcfaee7071b85266e2a84a11735"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "011025c47a50df435d2058b7f16dd9f4"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "4948a001301edd162b8735d31ccf3fbd"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "c9a1033de3f71d969fd06ef536569e1a"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "005e570679a557a244b48fed5d6c7d75"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "31a261db04a7b4e1309ec93adfdd3555"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "c446a54cd16b878a767c8f79f9ba8e9b"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "397f464f8c2473a564deb32ec8bb6327"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "4eceac26aec2e042f5210c02f5fea65b"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "f3d7c9445f5720280f9d5353045a48ab"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "60275436d4c00d94299fd020a8816e61"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "bd19f3de8be65ae75f8eafd714eb6864"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "4f353ca83d937a504afc2da4ac4d3bc4"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "a083a4500e1c3abde34699bf3bff8f73"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "a4a84bbe780af57de4490190f1a8caaa"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "9b54fcc68e4fe7186497df58fab17051"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "9b28c5c718400b3e87715659b8d19d0f"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI.html",
    "revision": "3815a2e0248e4f02eafe2f2a7810cc20"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "6448c821bd2b7a00520fec5930cd521c"
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
