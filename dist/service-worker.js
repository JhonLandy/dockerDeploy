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
    "revision": "6c808c64b6d9234407b6423472305dca"
  },
  {
    "url": "assets/css/2.styles.161a85a2.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.62ce20dc.css",
    "revision": "4799e47e4e7567ebf68cf29932c3b9af"
  },
  {
    "url": "assets/css/6.styles.04a85d65.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.db88ae95.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.7e2677ec.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.109c9a54.css",
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
    "url": "assets/js/10.0e6d6eaf.js",
    "revision": "8c9bd8a7c46103d667f26feb37ca7bff"
  },
  {
    "url": "assets/js/11.0799adce.js",
    "revision": "31aa0b75fc102a1ab377eaac0feacee8"
  },
  {
    "url": "assets/js/12.46ed49c4.js",
    "revision": "802718f512103e79f72cbb5e444c9a49"
  },
  {
    "url": "assets/js/13.73a24d99.js",
    "revision": "e80807ec57be75a442fe5ed02cee2caf"
  },
  {
    "url": "assets/js/14.a89115bc.js",
    "revision": "46583817cb51668fd5b2990c178d5879"
  },
  {
    "url": "assets/js/15.308d52b9.js",
    "revision": "119425f4acea20deea103d300683f2ad"
  },
  {
    "url": "assets/js/16.8f4ab64d.js",
    "revision": "3f61155fe59f7c930aaad6505cdcdd3c"
  },
  {
    "url": "assets/js/17.27013971.js",
    "revision": "c42abe9b367ca039a1723f802bf40605"
  },
  {
    "url": "assets/js/18.2618904e.js",
    "revision": "5eafe60ea3ec33d8f9949f4a977f4d7a"
  },
  {
    "url": "assets/js/19.44ca03ab.js",
    "revision": "d9218ef37d5ee7ebff305314b8873a74"
  },
  {
    "url": "assets/js/20.8cff65e1.js",
    "revision": "b9039c48ab3354508b64ccb98590156b"
  },
  {
    "url": "assets/js/21.3b42a1ec.js",
    "revision": "d4fe6064e2dfccf59da1aa6ed0c87650"
  },
  {
    "url": "assets/js/22.f518db9d.js",
    "revision": "fb86655f76e7508e2a5eca0918296519"
  },
  {
    "url": "assets/js/23.a20f1828.js",
    "revision": "75ce3d850b5b2edf6f9c5303d31f56fe"
  },
  {
    "url": "assets/js/24.489d6ecb.js",
    "revision": "897367ceac75de9bd19cfb215aaad6a3"
  },
  {
    "url": "assets/js/25.45ed5364.js",
    "revision": "9b7f23cf7bb60575e7bd14fd79cfa810"
  },
  {
    "url": "assets/js/26.7346acc0.js",
    "revision": "253b8ad386b78392c180bbaee97bf926"
  },
  {
    "url": "assets/js/27.0e4f44fa.js",
    "revision": "a41ddd9947fe138a9fe53153f95112f4"
  },
  {
    "url": "assets/js/28.93444448.js",
    "revision": "d6a7577ef936f1f9b300b397c21bfc4f"
  },
  {
    "url": "assets/js/29.61202ea5.js",
    "revision": "ba43b80937fa945e28eb086b1db4fb0f"
  },
  {
    "url": "assets/js/30.7119f8df.js",
    "revision": "5a736a7361636769c5d35aba64d4059c"
  },
  {
    "url": "assets/js/31.c7441454.js",
    "revision": "c2752d127e3fd18b8515d4c8be47cf7f"
  },
  {
    "url": "assets/js/32.2cd622ed.js",
    "revision": "6528b9272f4b81341794b2c6c87a2947"
  },
  {
    "url": "assets/js/33.330f824a.js",
    "revision": "8d4226a9fc2977a84829b16f5d458a9e"
  },
  {
    "url": "assets/js/34.10320493.js",
    "revision": "362c6702cd9e0202e56063708e431842"
  },
  {
    "url": "assets/js/35.e0fbd0be.js",
    "revision": "52fb487c473f2c0356d27f6d369d44f2"
  },
  {
    "url": "assets/js/36.f9a6067a.js",
    "revision": "06dfd98632efdc209796e860f28adee9"
  },
  {
    "url": "assets/js/37.1b3f5d90.js",
    "revision": "875e0adcdf1b305d1a8ec365573a00e9"
  },
  {
    "url": "assets/js/38.c8c66df5.js",
    "revision": "892e93cf2f09d60fba285a6f46f325eb"
  },
  {
    "url": "assets/js/39.a29a4ee6.js",
    "revision": "3bb40f743be9de9bae0b735f71529e32"
  },
  {
    "url": "assets/js/40.3edcbbb4.js",
    "revision": "3ae6a058aecb4c11c80048fe746fe3d8"
  },
  {
    "url": "assets/js/41.bb1428d8.js",
    "revision": "c5c9e2943f03ff7a6157d55a93fb4b92"
  },
  {
    "url": "assets/js/42.c99fa673.js",
    "revision": "d3c6bb58a388d1cd473283f48be48f57"
  },
  {
    "url": "assets/js/43.a5e152f7.js",
    "revision": "8f1e9106a490e88af4928b32507191d3"
  },
  {
    "url": "assets/js/44.6dcf6d12.js",
    "revision": "72dc9a69927a1d8b0da66552d473b5a0"
  },
  {
    "url": "assets/js/45.699b4e4e.js",
    "revision": "14188899e8d7005c86736224cec91299"
  },
  {
    "url": "assets/js/46.ebdc5ffb.js",
    "revision": "3116691a59a3c44b0abecf9a81b91398"
  },
  {
    "url": "assets/js/47.7579e4ae.js",
    "revision": "8b0a51844d403c03c370824b9b681ee7"
  },
  {
    "url": "assets/js/48.629747c4.js",
    "revision": "bff5d89b3d80f0270fff47284c7915a7"
  },
  {
    "url": "assets/js/49.e38e7bdf.js",
    "revision": "12eb0310f81b21230557066d0b938b21"
  },
  {
    "url": "assets/js/5.62ce20dc.js",
    "revision": "35952863f4d235831fa64e775130a12c"
  },
  {
    "url": "assets/js/50.0a470271.js",
    "revision": "459bb39a1d2da051182d24f55b129721"
  },
  {
    "url": "assets/js/51.f530c928.js",
    "revision": "97cb36a288b625d2c45b3b0b2680ae8c"
  },
  {
    "url": "assets/js/52.0405c84c.js",
    "revision": "80c66de77c3c4c532a1f16a4d19e7196"
  },
  {
    "url": "assets/js/53.5e436dd6.js",
    "revision": "1bc10fc3b1c5078dc7a4f977cc2b5641"
  },
  {
    "url": "assets/js/54.57049fef.js",
    "revision": "a57c33a15092003ca6cd3f0edb9ff989"
  },
  {
    "url": "assets/js/55.0ebfb06e.js",
    "revision": "c7f686e1ca2b74a006a9578c7f234b6a"
  },
  {
    "url": "assets/js/6.04a85d65.js",
    "revision": "18409a5867e14525a154875b2877d3a4"
  },
  {
    "url": "assets/js/7.db88ae95.js",
    "revision": "e607eb3a94aa33b8b68622e99e1e4277"
  },
  {
    "url": "assets/js/8.7e2677ec.js",
    "revision": "597589c992cd6240ecee997c770cc42a"
  },
  {
    "url": "assets/js/9.109c9a54.js",
    "revision": "45709e68423c010ec210a7579587c1c9"
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
    "url": "assets/js/chunk-libs.161a85a2.js",
    "revision": "e6a556642d0e31ff32d1065305800af8"
  },
  {
    "url": "assets/js/runtime.edae6621.js",
    "revision": "39131b69374089d6a0317774cec96ecd"
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
    "revision": "32f17a65518a73756e6cfcbaf943db23"
  },
  {
    "url": "nav/code/index.html",
    "revision": "21405defe9f93ce8ca59e1b4668c5972"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "7f85ce274cdfcab01e78f4ffe0f65ff9"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "cc8810b4e52049b1c4c79cc33152eb92"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "7276a2e05c044778d7caf4d2cebbc25d"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "00c27dd7163d979f2148d88fba28bb50"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "74feba8f046c4a27ac70fe2ad8f5bcfb"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "5f16a3d3b489b4344efa895d4b7b4898"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "efc5e7b22384fec117d8916b6cd757fb"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "08d86742a88ed24ce44a771c627e7d69"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "3dcabbc6ed6a71b1e8d50e8e6ea31720"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "ea41751ee60d86e0fc1bcdd50cac0acc"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "6f6ea6ca034108f04d5f924f5c4a9735"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "3cfbb3bc9fbe973cba0e10d6516a30ad"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "50792314332103208fbb4d76c1c74027"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "5d97fcdb25cea128fce3b99292192abe"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "faa80ea5f46da93c377732b93dee4a39"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "506bc25ff3ca6ff92cab50fb34a04e43"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "57eb9e8cd69ec066ea340fe33a1d26b1"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "07d0f97e5944fe9ec6fce334c8e3d902"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "4ed0f81fd64417c806523816016b7ac7"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "4a1d144aed6de3039895eef36c4bfb0a"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "44d97a7406b034a9fc920c394ea60778"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "f9fc6a9286edd18dd23d0be3824827f6"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "fa6b0cb69568e66c8046a65ec69764d3"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "9effbc7410efc63cb1c69ad318a05921"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "63bf554fb2f8c77b8be846b9c3bb9f8e"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "0e99af55e569b81bb660d24381381d1e"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "942570a3c254ce6bc968e9691413546c"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "39e2d74bb7ae8ff649e09c384e09d2fc"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "4d12bb97285b08687410afa011df93a3"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "08303e2cc5d5a08c7f42f4582018ab41"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "fb46f5efb9ff94c2570056099d5c1417"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "733520db21003e693047e005f406414e"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "aec5bfa28d9c71abe0601db705fd6f72"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "0e14e697fa979a70d573797aedb920e5"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "b16590e30f3f1fdc196951ed6b1bf3ce"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "f7e5e8f19437884c3dc39e98fbe68f26"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "bd17584f679e4bd8ef26e10081119435"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "ff4a4fa0aed686751727b26afa99bc54"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "7b1d97c4fd32ea3207b8ade3d9e4a9b5"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "74646c2f6e78905b0b48e605d661bf6e"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "83fbc013ca3011ef43223bd3ad03d673"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "80f9eca7e9dedb5e1522d580db3a39db"
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
