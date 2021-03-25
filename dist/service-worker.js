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
    "revision": "d0cb3cc95a579e531ae2428fd7fc7321"
  },
  {
    "url": "assets/css/2.styles.2510cf4b.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.a2e7a8c4.css",
    "revision": "4799e47e4e7567ebf68cf29932c3b9af"
  },
  {
    "url": "assets/css/6.styles.d05118c3.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.f9095636.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.60d58c51.css",
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
    "url": "assets/js/10.63e25497.js",
    "revision": "5f29105c4444be71e2d2e1ee5457dd9c"
  },
  {
    "url": "assets/js/11.b5d67195.js",
    "revision": "adff62ea34bc2a056644194d69365e05"
  },
  {
    "url": "assets/js/12.88118e1c.js",
    "revision": "a32b26bd6c3204b5dfe1fb0284fb3b56"
  },
  {
    "url": "assets/js/13.eb473d1a.js",
    "revision": "c9f8e8655df5a7625e8890d2560729f5"
  },
  {
    "url": "assets/js/14.dc260227.js",
    "revision": "b00b1a4c5b9f4014980df91ccc94d36d"
  },
  {
    "url": "assets/js/15.e139b341.js",
    "revision": "87c21b6ad7bc5dd45563d1702740d803"
  },
  {
    "url": "assets/js/16.91636369.js",
    "revision": "9b8b947a305e84975fa85e845d2b4d20"
  },
  {
    "url": "assets/js/17.1a70ae54.js",
    "revision": "b658b1bfea50c33af21071fc29af8488"
  },
  {
    "url": "assets/js/18.bd8fe2a7.js",
    "revision": "75cba7ab0c57360e413adad1c5be1f25"
  },
  {
    "url": "assets/js/19.5b0b5d1b.js",
    "revision": "873d98618b6b05636ec5a2ae8fb0f243"
  },
  {
    "url": "assets/js/20.179212c7.js",
    "revision": "e80729b66163f17e507e55748efc6615"
  },
  {
    "url": "assets/js/21.d5878a39.js",
    "revision": "ff0841be9db74f2556fd6cea61f71830"
  },
  {
    "url": "assets/js/22.74125262.js",
    "revision": "78effea2ae26d0f96d787b81d559b12b"
  },
  {
    "url": "assets/js/23.e65f9d60.js",
    "revision": "6524707c3717a8a8eae55b84193c2219"
  },
  {
    "url": "assets/js/24.9c74214a.js",
    "revision": "64e11586b47d9a6afdaac1e71790be61"
  },
  {
    "url": "assets/js/25.860d40b6.js",
    "revision": "9128e53fea55ea1e33d23e4857a57140"
  },
  {
    "url": "assets/js/26.6e45775a.js",
    "revision": "176af036db675967a27c55b68b6e0d06"
  },
  {
    "url": "assets/js/27.d5b903e1.js",
    "revision": "ba0c721b257f38d759dbe81be0e6f915"
  },
  {
    "url": "assets/js/28.099d72db.js",
    "revision": "84446bd89e50afa821be72138fa99356"
  },
  {
    "url": "assets/js/29.c178872e.js",
    "revision": "92d51872c4337f525dde136505ee6d1e"
  },
  {
    "url": "assets/js/30.9e0e1b5f.js",
    "revision": "eeda0d21dc76324aab7f7c058811a665"
  },
  {
    "url": "assets/js/31.82c5170e.js",
    "revision": "937b3ce046f1d6b9696398392a3faddd"
  },
  {
    "url": "assets/js/32.364f2536.js",
    "revision": "7465286c4b4f14fb590a9bbbe71eb6ac"
  },
  {
    "url": "assets/js/33.51c3e47c.js",
    "revision": "5f982d6b1bcdba00aa3ee31567052a81"
  },
  {
    "url": "assets/js/34.da8bb92d.js",
    "revision": "d84446fa62b03e4d5655714bbdc14f2b"
  },
  {
    "url": "assets/js/35.cef739d9.js",
    "revision": "70a75ac93074240b95e9ab673a2bd4af"
  },
  {
    "url": "assets/js/36.07944bdd.js",
    "revision": "8e175789b39ad322c8c585b8f7175a87"
  },
  {
    "url": "assets/js/37.ecb449ed.js",
    "revision": "e25674f16d9a572c802769d3d24e06a2"
  },
  {
    "url": "assets/js/38.eb9edb38.js",
    "revision": "28f8b6709bc40e790d3a5748de625fe9"
  },
  {
    "url": "assets/js/39.7b63ac19.js",
    "revision": "92bae6cc8eb87cb4985168d5dd1309a2"
  },
  {
    "url": "assets/js/40.3c9900e1.js",
    "revision": "9aa1602b63570a4c549626cae433175b"
  },
  {
    "url": "assets/js/41.472ab898.js",
    "revision": "c4b740bbcdd15c7f8bce4a0bce48b8ff"
  },
  {
    "url": "assets/js/42.abc9b6ca.js",
    "revision": "93805f3613fbf983927de2c47d855495"
  },
  {
    "url": "assets/js/43.0e990234.js",
    "revision": "fbee73854ad0fa53af4e8caad824e9d1"
  },
  {
    "url": "assets/js/44.ee1dabdc.js",
    "revision": "27f813c962209183bea928d3f0847520"
  },
  {
    "url": "assets/js/45.26f113d9.js",
    "revision": "e0b9c922344f0f01525031f14057b470"
  },
  {
    "url": "assets/js/46.706261e1.js",
    "revision": "56de4674f8c9bd0c836a4c66079b94f1"
  },
  {
    "url": "assets/js/47.b6ee0421.js",
    "revision": "dc8e910e222a252ca065e5d1a504e976"
  },
  {
    "url": "assets/js/48.c447fa6a.js",
    "revision": "5f252c0ae0c8d1fbb2ea93dbf7c3929d"
  },
  {
    "url": "assets/js/49.8da56064.js",
    "revision": "1907e38d92c1e49769042b2c814260e1"
  },
  {
    "url": "assets/js/5.a2e7a8c4.js",
    "revision": "44ffa21108ce9a40a08e16bf5852ecdf"
  },
  {
    "url": "assets/js/50.095e3422.js",
    "revision": "44bb054e1989f7d944a4d3e6f4686676"
  },
  {
    "url": "assets/js/51.276f79b9.js",
    "revision": "f4b8ee44b2a4673de3ba497ab0fcca1c"
  },
  {
    "url": "assets/js/52.635fd765.js",
    "revision": "81643bb87b0a0b63b8e03174c3cad5e1"
  },
  {
    "url": "assets/js/53.3665857b.js",
    "revision": "e16d85624e9cb682bd80bf9becc799c9"
  },
  {
    "url": "assets/js/54.74d2f5ef.js",
    "revision": "328721ae681654ecdbb0668acb2daeea"
  },
  {
    "url": "assets/js/55.c05499a3.js",
    "revision": "f625f26d9ab4d70ca400526edc235823"
  },
  {
    "url": "assets/js/6.d05118c3.js",
    "revision": "6017134dbfd3d3afb244aa655452df9e"
  },
  {
    "url": "assets/js/7.f9095636.js",
    "revision": "36aab030427295684267d438cca51d86"
  },
  {
    "url": "assets/js/8.60d58c51.js",
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
    "url": "assets/js/chunk-libs.2510cf4b.js",
    "revision": "f2f2d53451f8341b3217107e3da2cdf3"
  },
  {
    "url": "assets/js/runtime.067bd577.js",
    "revision": "783799c04f70021d0978f8d684963045"
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
    "revision": "1307c6b8662f3d1f6f59add034aec24f"
  },
  {
    "url": "nav/code/index.html",
    "revision": "0e1a1f52b953b3e54921f507451ff53a"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "498d5d82797d8964f6bcc89e8552d120"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "750d95a00f59cf3ee6da4b826bbd00a9"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "71bb5919bc7704bb385e15d08d129a47"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "c529d71ad6c8cce01eeb115447c9c6d9"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "621be3891a7a0550d6297614115bda05"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "706810f5fff4b5f1bb24ab374357f3b3"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "1d8788c625a82f936191236aafb4777f"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "3a97cd6f5b6973a9ba85dead9a57966b"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "7a565e5fcfa462cafc66f0ce7f22ffe1"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "2acc7e1c771e88fa2ddfd06c6ea85ad7"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "14fa5c89a49360ee2231c9919e75c6fb"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "9d9d5391291f483509a52968469517fe"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "7a58da8a8e98f014b72e9669a1258e9a"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "dd4a5a53130b789a5b8408869556a5a5"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "d49a952045279c2ba561f64725ddfe24"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "db3af57bcba7465668f15fa7b1116daa"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "9d4dcfd9292891da06292d3ca5171c34"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "a1a3cb179e0a7cbd0fbdc35113cf8772"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "3add000d367a7586a6243bb1efac317a"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "7932266960225295f34cd79a2d5859be"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "67ebf9ab5eecd0013a857a73951cc293"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "d2dbd512633393d5acf8dee3af7af6b1"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "9fe584845a735a208a3b6a9e8f9d27ca"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "bc2e9e58604262c9bcbd67fc77b75759"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "67d727523865d0b390003d75e0387a8e"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "5aaeb5f7ddb13c935b4e7ee9f030fd2c"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "3a443dc041b1e82bb9dea048cb817fba"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "e0922ac648a560540411033fdbbf0864"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "10544c530e11f22459653bea16f1c762"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "d421933d04fa3c92f99b1e226e9cf05b"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "a18dcadb023d13f29783d9129dd7f0a5"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "621826430c4cc46d4e0ca755ce96c972"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "a171131ed99ed8047d5975e08e62c23b"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "0e94b9379d2dc374f28f63d86a1bc66a"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "3ccadf23b94977a6e3b9b5bf3f8da6ae"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "bb265dca180d94d0472faaf36598a665"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "716eb1911532fb873459870107afaafc"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "7ad474b9bbdf117a2cde2c35116e3443"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "2b007f312684d00f57dfea538baa4744"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "53135949b16ce8e28736bfdfb5dc2164"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "6a3e122f61825c34fa5e4c33b233565a"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "bdfab5e15c9059b3a07fe37ce596cd9c"
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
