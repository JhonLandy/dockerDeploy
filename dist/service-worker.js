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
    "revision": "f8407ed6d73516eb74142a5b13a35689"
  },
  {
    "url": "assets/css/2.styles.2edb850a.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.3d1421a9.css",
    "revision": "080fc45c1bd2663e7786aee9937345b0"
  },
  {
    "url": "assets/css/6.styles.0e872e07.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.afabd8d8.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.26af096c.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.c5f19824.css",
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
    "url": "assets/js/37.a54a7fa7.js",
    "revision": "65776693867b3714421556b2b938c7d5"
  },
  {
    "url": "assets/js/38.5b19b961.js",
    "revision": "3fdfc42e2216d6be2f0ce35cc8c3cfaa"
  },
  {
    "url": "assets/js/39.0ef291de.js",
    "revision": "0245ba7754127289f702b9a448dc31f1"
  },
  {
    "url": "assets/js/40.a27631d9.js",
    "revision": "ff5ce0289a8664ae7258ef79ebdb1e00"
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
    "url": "assets/js/43.d9c73dc6.js",
    "revision": "bc84188cec4a67774efa52bb8a0f1360"
  },
  {
    "url": "assets/js/44.75c51213.js",
    "revision": "13e49b00b9492aa5b71d30ecb3aaed8d"
  },
  {
    "url": "assets/js/45.87175f74.js",
    "revision": "431248a40f265d066e7975240c44af81"
  },
  {
    "url": "assets/js/5.3d1421a9.js",
    "revision": "058b646bd7ce3614d3151f2290a9c1f6"
  },
  {
    "url": "assets/js/6.0e872e07.js",
    "revision": "e2db7d5b8d9f18c6aedf05466345fcc1"
  },
  {
    "url": "assets/js/7.afabd8d8.js",
    "revision": "3b53216db6fd99cbe6064cb79d52fc72"
  },
  {
    "url": "assets/js/8.26af096c.js",
    "revision": "00ba93e17ad10c6ea3a3bc5706a3de2a"
  },
  {
    "url": "assets/js/9.c5f19824.js",
    "revision": "3062a6edb58cbfcb651e762e9df1d9b0"
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
    "url": "assets/js/chunk-libs.2edb850a.js",
    "revision": "9794ce7fd0e68847a38e3e2d5d9e015b"
  },
  {
    "url": "assets/js/runtime.f9acbe5a.js",
    "revision": "6afda917734fb3e25faea6a229059dbb"
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
    "revision": "c054a41edd271aa0748ff7d2f6984e84"
  },
  {
    "url": "nav/code/index.html",
    "revision": "067a88b2c5719c42871d4056efdd9a68"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "6ec3bfd65e7e073e513965784800286b"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "fc5d60513477e49346a0b81bea3ff3c7"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "dfd0bfbcdc8c5d6a900ba847926b008a"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "d60ab3307fccbff00fc1067ce27f2fb8"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "824d0bc14112bdce8facb067c356f4eb"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "2d16f03ade40a528f8829edb3dd6ba66"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "c3b73f47e26eee2ef41ffca0ef91b8e0"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "1068a19b4596c9d5ca898db291c7b9d5"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "0156df73c00305b4bcd5ca21ccc4c72a"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "8c1c491245d9f3bb092c7f67ec7f906f"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "7cfc20d480206dabd0697dfd50b90bfa"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "215a601602347f1d820247e9d62b3919"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "f9240c6609a01c3a834f5a30c1e35b0c"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "5089e81d4ff1d4cf2725afad12d065e0"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "bb37dfd36b7098d3187edb46a76c446d"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "b632940c7e14d8356d59d5db87494cf8"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "81e998d122583874ac337967286833ab"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "eddcf1f243ec33822fa75cef70e1a6d6"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "fe2dddf215b3153e9ab93513b516054a"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "d5b1a20df9d687c420d72bba7dc621ac"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "f0118959809ccf1ae7ee5d803d9e6dd8"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "4c909362226391354b1ac262917b8038"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "e2e8b587860c83a117b976cd08fa150b"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "acdc4b721e0516750ac0d03b85bf715c"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "563a9752feb95276f1d516063dbb4f1a"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "34702d36ff49426deecb81dce3f1ee27"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "cd1b390d4223d7ee3780af2e9845c45b"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "bacb1ebc5a7d03b003cba8ffcfe7d536"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "653d92843c5d509d00ba6b05703817eb"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "98bbc4c35b74ad8126367730a03635b7"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "b1ced2f80196f3621dd7af53b8982e8b"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "5f234bc2b05ed943db99c8c7eeca346a"
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
