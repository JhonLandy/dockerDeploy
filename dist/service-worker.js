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
    "revision": "c01d683f38e9feec71abc5b0a4e2f6c9"
  },
  {
    "url": "assets/css/2.styles.9228073f.css",
    "revision": "d2c4e6c8f2e188a273c79653548f10da"
  },
  {
    "url": "assets/css/4.styles.1367e7e7.css",
    "revision": "ed0000583a914e5821fb53bc8f351f41"
  },
  {
    "url": "assets/css/5.styles.0ca3eff2.css",
    "revision": "4799e47e4e7567ebf68cf29932c3b9af"
  },
  {
    "url": "assets/css/6.styles.66965081.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.f9095636.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.4a637a0d.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.e092abfe.css",
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
    "url": "assets/img/16pic_9349989_s.e3e09d23.png",
    "revision": "e3e09d2326b904e177fffe31cc5f5ca9"
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
    "url": "assets/img/html5.a2eaf051.jpeg",
    "revision": "a2eaf0519e990cc35d2748661c38edc4"
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
    "url": "assets/img/niuniu.a01b0649.jpg",
    "revision": "a01b0649a71fcefcf095cce6d2b0e4a0"
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
    "url": "assets/img/scorder.6332a379.png",
    "revision": "6332a379e5acaa5ee95685944e0ddb55"
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
    "url": "assets/img/test2.89ec9eaa.jpg",
    "revision": "89ec9eaae873b085cef4cec061825ccb"
  },
  {
    "url": "assets/img/testresult.8843a16c.jpg",
    "revision": "8843a16c63d0f673422df61f0f234904"
  },
  {
    "url": "assets/js/10.d7ea89d5.js",
    "revision": "e7deaa5e6069c5d27688cf751b0fa768"
  },
  {
    "url": "assets/js/11.f945d1ff.js",
    "revision": "063e1d498f6ba3f4f8e152d3b23d62a2"
  },
  {
    "url": "assets/js/12.ad45f321.js",
    "revision": "06c7a1ce8568d1e40ca0b163a778ce37"
  },
  {
    "url": "assets/js/13.3cc50a8d.js",
    "revision": "ddb778ac5f07351f5977c0568a6bee6e"
  },
  {
    "url": "assets/js/14.d89afb1c.js",
    "revision": "850a65f94a6a27ac587b1a99eae9c8c7"
  },
  {
    "url": "assets/js/15.d2adf71d.js",
    "revision": "13fae6db93e0000e39b0c0ae8a82ba7a"
  },
  {
    "url": "assets/js/16.39094046.js",
    "revision": "b4cd6bd94f8b6a76916613d4b2148b95"
  },
  {
    "url": "assets/js/17.9c62712f.js",
    "revision": "b658b1bfea50c33af21071fc29af8488"
  },
  {
    "url": "assets/js/18.ece6c5b0.js",
    "revision": "9987d12bac299fc089ae18978ae2cdba"
  },
  {
    "url": "assets/js/19.4feb39ac.js",
    "revision": "de4f18aa1ea7d02b30bd293893b8f723"
  },
  {
    "url": "assets/js/20.ff594855.js",
    "revision": "f856c776fc665ce0c61a9d951351e0e3"
  },
  {
    "url": "assets/js/21.b6cba25f.js",
    "revision": "2be5c942d2ded1c52e14bfc17c923116"
  },
  {
    "url": "assets/js/22.e9deaf4b.js",
    "revision": "ea5538f1bea56047a62275c0f9e400f8"
  },
  {
    "url": "assets/js/23.4cffb790.js",
    "revision": "6524707c3717a8a8eae55b84193c2219"
  },
  {
    "url": "assets/js/24.e990cc02.js",
    "revision": "64e11586b47d9a6afdaac1e71790be61"
  },
  {
    "url": "assets/js/25.dc75c35b.js",
    "revision": "9128e53fea55ea1e33d23e4857a57140"
  },
  {
    "url": "assets/js/26.6e45775a.js",
    "revision": "176af036db675967a27c55b68b6e0d06"
  },
  {
    "url": "assets/js/27.9568b643.js",
    "revision": "ba0c721b257f38d759dbe81be0e6f915"
  },
  {
    "url": "assets/js/28.3a42d7c7.js",
    "revision": "84446bd89e50afa821be72138fa99356"
  },
  {
    "url": "assets/js/29.dd93ed1d.js",
    "revision": "53b828275bf13db745bcc0818af66e23"
  },
  {
    "url": "assets/js/30.7a78fdc0.js",
    "revision": "0669ba181f6cc013e5ad351423768f0a"
  },
  {
    "url": "assets/js/31.59fbe8e7.js",
    "revision": "88e5ba158bbddd053fe8352f45fe4286"
  },
  {
    "url": "assets/js/32.33e09da3.js",
    "revision": "1edb99300628e081ecc84b6faca3b25e"
  },
  {
    "url": "assets/js/33.baf6ee2b.js",
    "revision": "1e887db7e9cad6f228165b75e1343c05"
  },
  {
    "url": "assets/js/34.91c56244.js",
    "revision": "09afe8672994f89995faebb310067c05"
  },
  {
    "url": "assets/js/35.56af71d9.js",
    "revision": "f7c0bde9d2f2dbed658b073db45eeb51"
  },
  {
    "url": "assets/js/36.7b6fe15e.js",
    "revision": "b9da5182610340f09897c1cff278578b"
  },
  {
    "url": "assets/js/37.c74c46d1.js",
    "revision": "e8a2a5ea0d5c0612c3880448609f3d0d"
  },
  {
    "url": "assets/js/38.668c1808.js",
    "revision": "40217acd3b181a7c12f8360cfa96aad2"
  },
  {
    "url": "assets/js/39.ab6c2041.js",
    "revision": "0e3397145e3db0d238fdedfeddd1216b"
  },
  {
    "url": "assets/js/40.deb27e6b.js",
    "revision": "9aa1602b63570a4c549626cae433175b"
  },
  {
    "url": "assets/js/41.94fd58ed.js",
    "revision": "27aee5c35b0a2f16b67aa893e7378fcb"
  },
  {
    "url": "assets/js/42.dc0d6a99.js",
    "revision": "93805f3613fbf983927de2c47d855495"
  },
  {
    "url": "assets/js/43.04569635.js",
    "revision": "d34d85608a5d00c55da46be22efaa0a2"
  },
  {
    "url": "assets/js/44.b60bf58e.js",
    "revision": "d828b5f3b1f0c8d92266db25c3ab9b96"
  },
  {
    "url": "assets/js/45.02bc7f42.js",
    "revision": "34b21440a4fe6d53978999ad91f42e9c"
  },
  {
    "url": "assets/js/46.03dbc0ed.js",
    "revision": "56de4674f8c9bd0c836a4c66079b94f1"
  },
  {
    "url": "assets/js/47.8a7f04a1.js",
    "revision": "dc8e910e222a252ca065e5d1a504e976"
  },
  {
    "url": "assets/js/48.e4395a1d.js",
    "revision": "5f252c0ae0c8d1fbb2ea93dbf7c3929d"
  },
  {
    "url": "assets/js/49.40a79a54.js",
    "revision": "9e2a8911ffae837f81dec2a47645c0e0"
  },
  {
    "url": "assets/js/5.0ca3eff2.js",
    "revision": "8314979299e80fc7ffad4098b3406723"
  },
  {
    "url": "assets/js/50.2e752492.js",
    "revision": "44bb054e1989f7d944a4d3e6f4686676"
  },
  {
    "url": "assets/js/51.3aa3013d.js",
    "revision": "50fdc2e4db697a4b9772b640470ba225"
  },
  {
    "url": "assets/js/52.1c81e5f1.js",
    "revision": "fb2ab3e47050b3f81399353344a512a5"
  },
  {
    "url": "assets/js/53.9faf23f3.js",
    "revision": "be6bb5036326b4392acf47a32391cf5f"
  },
  {
    "url": "assets/js/54.4d9aec2c.js",
    "revision": "328721ae681654ecdbb0668acb2daeea"
  },
  {
    "url": "assets/js/55.05a81511.js",
    "revision": "f625f26d9ab4d70ca400526edc235823"
  },
  {
    "url": "assets/js/6.66965081.js",
    "revision": "6017134dbfd3d3afb244aa655452df9e"
  },
  {
    "url": "assets/js/7.f9095636.js",
    "revision": "36aab030427295684267d438cca51d86"
  },
  {
    "url": "assets/js/8.4a637a0d.js",
    "revision": "ba8ad4caf15b41be7165b63a23cc93af"
  },
  {
    "url": "assets/js/9.e092abfe.js",
    "revision": "baa93aab37a344b5b0d32694f70fc587"
  },
  {
    "url": "assets/js/app.280189ca.js",
    "revision": "f0992974767f0d2371d4ed480e7807df"
  },
  {
    "url": "assets/js/chunk-elementUI.93e00502.js",
    "revision": "2ad094d8e2c0d32835026c44030721bf"
  },
  {
    "url": "assets/js/chunk-libs.9228073f.js",
    "revision": "d639bf037e5d7d425fc5c8333d7812b5"
  },
  {
    "url": "assets/js/runtime.024124ac.js",
    "revision": "aa699815d931eebc7b827c700b26a6dc"
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
    "url": "images/home/16pic_9349989_s.png",
    "revision": "d040010eed68257e2c0ffd9672b810c6"
  },
  {
    "url": "images/home/computer.jpg",
    "revision": "97ae1c5927263d0105cf36e7da744750"
  },
  {
    "url": "images/home/html5.jpeg",
    "revision": "c1cc4e65f0b6a3602b29303fc54c97fa"
  },
  {
    "url": "images/home/html5.jpg",
    "revision": "7e44b57641afaf7aa8fd87604a94f39e"
  },
  {
    "url": "images/home/mockup.jpg",
    "revision": "8f0ebcb1b2685810cb910ed0a2980f16"
  },
  {
    "url": "images/home/niu.png",
    "revision": "b55eab3c8cf7ddfd80cd7162ffae8c5e"
  },
  {
    "url": "images/home/niuniu.jpg",
    "revision": "1792a09e876a5d3c045542b59aef149c"
  },
  {
    "url": "images/home/shibuyasky.jpg",
    "revision": "77d3e465755dd1e46e93c7a145e26c43"
  },
  {
    "url": "images/home/vue.png",
    "revision": "1edf13fafa9bab2e621bb1733501a314"
  },
  {
    "url": "images/home/webworker.jpg",
    "revision": "7f6acf3d207c6ebca3593fb7ac38a920"
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
    "url": "images/sidebar/css/sc.png",
    "revision": "9366a7616e8400768f454bc0b1019de2"
  },
  {
    "url": "images/sidebar/css/scorder.png",
    "revision": "adc4481dfa173ce1500017f64e992e98"
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
    "url": "images/sidebar/jest/test2.jpg",
    "revision": "6c436acf42ebfbbfe6653c2c47320f42"
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
    "revision": "1895e64578a53d964befe81a39745f2f"
  },
  {
    "url": "nav/code/index.html",
    "revision": "0c7fcdb821c879822d13eab20312c641"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "c1b71b4c6b09d0807d6bf3747d3ba81c"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "5b0a6f0221efe703f9bb688d0ad5b200"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "929af64734fa917418692afbaf8d5a8f"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "980b9ab9343860121588ae2f8b246f1c"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "2492b9da7ff56d05285b66e9222c8aa0"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "1ac16eb42086d6e289826ac35df19412"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "1f22b07766bc4a3474d5080f978d9cf6"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "515708758ed9ade49be8bac9b3c13ac0"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "f918cfeb50d4e9e6c8aeed0e52f4363e"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "b38a86ffb956f2da46475b1909622f60"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "4e2317a7ee91d17ecaee935c841c97b6"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "c61b5b1f6360d078a0ee68d1dcf95cf3"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "2e36f3b7a1e8d3350b1c01afb46a9c21"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "a29ac2bcaac783581e8914f1b1324cb1"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "d7ee5cefe53a04f599e0cc7a56426188"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "cff83122f7e258064f0ec3e06aba2dcc"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "6e85339f0f04c373c70a085748cd8ebe"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "8d82c53d59187faf028e5a16f3f4d176"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "6e2406aadb8c9d8fdaa5cc42550f86d1"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "0f413b4f164cdd93dbbb708dd84e2bdb"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "0809770ef60a0755ece3acb6577f393f"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "0310a150dbf6cb634419872edcec3536"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "44ffe4ae24bc4592f6ad2cdd771d3962"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "a0a261d91fa3570db1a61125560b7ec0"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "ba41caf4a236dcb95619a167231d1d0e"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "59dda5b582f61b7d2077adebe84f4f19"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "ab51bb762ab0a964f7865644001b1be9"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "f227a54a29a1c4cac9ad3feda15286e8"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "23a4fa75b6c26da66a84cc0775fd00db"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "2854013ef80490adb6b192211876b2f8"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "8c08b2e97d893604cb32e573c2484395"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "24f41fbdf148f9a227df03a156ae6904"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "1e35b4fb4bbdd4d451072adc2a74047e"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "3c4a66f7edf7704eabc00b0ab50ca93c"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "82f3a8a43b776c477e4a78a0b2c5ab3b"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "d478c1c089ae1e713e766d8196bbf298"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "7f490b91aa9819a6eac9ba07717246fe"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "dd3ffd09d15bcf93c46350c0fbafec81"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "75d688f211ccfeacbf077219a1c32fbc"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "31f365f2283445853a063bdea99ee2ad"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "19a90707ee7d34a51ab16f3a28b3a026"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "6da78f21d39704aea39a0399dadc3c5f"
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
