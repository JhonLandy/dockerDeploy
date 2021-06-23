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
    "revision": "f86b4f377edd5ee585eacfac6c10812b"
  },
  {
    "url": "assets/css/1.styles.2730ca7d.css",
    "revision": "e705277dceeb593357afa54f125c1f55"
  },
  {
    "url": "assets/css/10.styles.580e20d4.css",
    "revision": "bd36b1dd758cce4882177d7d307318cc"
  },
  {
    "url": "assets/css/11.styles.3c21455d.css",
    "revision": "8560b7952c93c4d634d9cd5ec02a4c92"
  },
  {
    "url": "assets/css/2.styles.770b80bc.css",
    "revision": "be4249466728e0e5acbe6cabe5c399a5"
  },
  {
    "url": "assets/css/4.styles.3bf4261c.css",
    "revision": "db3af59f4aeeab6f8a8acc3e4f38c1cf"
  },
  {
    "url": "assets/css/5.styles.23e8bea7.css",
    "revision": "4799e47e4e7567ebf68cf29932c3b9af"
  },
  {
    "url": "assets/css/6.styles.2e44deb6.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.bdf45703.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.7b2f7b62.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/9.styles.119ef27b.css",
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
    "url": "assets/js/10.580e20d4.js",
    "revision": "cdae5629d3252c22d08811217daa8e90"
  },
  {
    "url": "assets/js/11.3c21455d.js",
    "revision": "c9c4eb2f46fe7954c72446955f071e4c"
  },
  {
    "url": "assets/js/12.9415725c.js",
    "revision": "dfdacd707fea41351be66295141dae6a"
  },
  {
    "url": "assets/js/13.a747ee36.js",
    "revision": "98929c73557f63f07c595fe668105ffd"
  },
  {
    "url": "assets/js/14.671e37be.js",
    "revision": "6a51de11b5fb11d6e50bf6a3361a6d54"
  },
  {
    "url": "assets/js/15.3d8f84c8.js",
    "revision": "8090b1c1e4b7d9fb24eeab3a1df31afb"
  },
  {
    "url": "assets/js/16.bab55e26.js",
    "revision": "d134d58e801c0d8b6f2aeb6abcfdef64"
  },
  {
    "url": "assets/js/17.b9855ce3.js",
    "revision": "d38b632ffaa56b8a41efba1101eadabd"
  },
  {
    "url": "assets/js/18.7b378074.js",
    "revision": "d197988eb29770a750c673279e4e8921"
  },
  {
    "url": "assets/js/19.826c7def.js",
    "revision": "5f4f7c93da62d72ab2985317c8fa4743"
  },
  {
    "url": "assets/js/20.54aa7dbe.js",
    "revision": "41eddbbe240da50b1f8a6d1d79f7e719"
  },
  {
    "url": "assets/js/21.97ee73e9.js",
    "revision": "bf729dc9545131bc8f698895ad736a29"
  },
  {
    "url": "assets/js/22.d6d2cd1f.js",
    "revision": "a697b864acc8396a4f560825ccfa62ae"
  },
  {
    "url": "assets/js/23.e21397da.js",
    "revision": "80f7c84b4701a40e2b1996790ca606bc"
  },
  {
    "url": "assets/js/24.f01f5d9a.js",
    "revision": "b536fcd1627b94527ced468516d2f36a"
  },
  {
    "url": "assets/js/25.4548ac89.js",
    "revision": "1c7d19d48952f40f9d5752aec715954e"
  },
  {
    "url": "assets/js/26.f2baef78.js",
    "revision": "6c0687eca7d6fde8f688c45f4a79d801"
  },
  {
    "url": "assets/js/27.6fd620e7.js",
    "revision": "9562d86c05bec4c29c9ca3cbc32dcebc"
  },
  {
    "url": "assets/js/28.bc56a1f7.js",
    "revision": "d653996048bfb4b8ebddcfad4512ba10"
  },
  {
    "url": "assets/js/29.e4b24851.js",
    "revision": "44ffe6223643168e02c703e5f1562004"
  },
  {
    "url": "assets/js/30.2470bad2.js",
    "revision": "3523f5cfac9e67509add254fb07508d7"
  },
  {
    "url": "assets/js/31.f368adf0.js",
    "revision": "7c14dcab80913462d46285367e23ec88"
  },
  {
    "url": "assets/js/32.18673a2c.js",
    "revision": "38e5fd44cf0d9d9c8b40c98bc825649f"
  },
  {
    "url": "assets/js/33.5c55e4fd.js",
    "revision": "b079f9b9d48526fb4a8b6c38fbd7e480"
  },
  {
    "url": "assets/js/34.be9910a8.js",
    "revision": "fd2ebaf5396d39212ed84fc91707edf6"
  },
  {
    "url": "assets/js/35.343420cb.js",
    "revision": "7a4f3d041c149c1adeac2ac08f708f0b"
  },
  {
    "url": "assets/js/36.dca05b16.js",
    "revision": "99286d03b1550d44416ab94c553bd6b8"
  },
  {
    "url": "assets/js/37.6d7edcc0.js",
    "revision": "db35ef6c31262f2373146d423a38379c"
  },
  {
    "url": "assets/js/38.57639507.js",
    "revision": "4cb50acde8879196ea4a949605df912a"
  },
  {
    "url": "assets/js/39.c2e5a701.js",
    "revision": "def7b2ec6c1c2565c1d0d0e8aee75428"
  },
  {
    "url": "assets/js/40.d1707db7.js",
    "revision": "435ed30871c6c7638f757a74bc4dbd4b"
  },
  {
    "url": "assets/js/41.3877d148.js",
    "revision": "8561e45e96c52ed868865979afce3ff1"
  },
  {
    "url": "assets/js/42.e86a3856.js",
    "revision": "2ec1a9413df2b4bae2970d69663220ee"
  },
  {
    "url": "assets/js/43.850595b0.js",
    "revision": "e763901ad5c11f717c1c03c571d21b30"
  },
  {
    "url": "assets/js/44.f1bfac5a.js",
    "revision": "1feb710862f72dec60be801d66fe2296"
  },
  {
    "url": "assets/js/45.8503f25a.js",
    "revision": "861e45bcbc74b405e98edfd27d09f039"
  },
  {
    "url": "assets/js/46.7d0570b1.js",
    "revision": "06e8de247336b13e4bd1eed186e22da2"
  },
  {
    "url": "assets/js/47.33456936.js",
    "revision": "434eaa6216c7bc531dbebab429e5750d"
  },
  {
    "url": "assets/js/48.e1cce0c3.js",
    "revision": "7ed71af0564e65a0fbe3957d6b8a1157"
  },
  {
    "url": "assets/js/49.dbec85f4.js",
    "revision": "3a1bbedfd633d2555c50f419ce0e7b1b"
  },
  {
    "url": "assets/js/5.23e8bea7.js",
    "revision": "c4dc42bbc09ed5cb55b41bb11765a83e"
  },
  {
    "url": "assets/js/50.df3376c0.js",
    "revision": "aee92821bd5b40f1ff1d1670250f2a5b"
  },
  {
    "url": "assets/js/51.b9f36c6b.js",
    "revision": "63528c168723e00c8954e657c19c4d0c"
  },
  {
    "url": "assets/js/52.f87ea25b.js",
    "revision": "ec26a5d39f76972133f83348e9f30aa2"
  },
  {
    "url": "assets/js/53.8da200ed.js",
    "revision": "7b0a08b18adedc698ec283ff164f902a"
  },
  {
    "url": "assets/js/54.6a3b0b31.js",
    "revision": "fca8e49ed5c68f4080cbb899b27b8824"
  },
  {
    "url": "assets/js/55.ef8dd766.js",
    "revision": "ca56f4def48d47f63ad882cbd36a3126"
  },
  {
    "url": "assets/js/56.1bf49756.js",
    "revision": "607a65cbd0174cc8fb13a8376943f6b2"
  },
  {
    "url": "assets/js/57.2d3ddb82.js",
    "revision": "4d5ba1f1c0ad8ff656587ff43a51d4aa"
  },
  {
    "url": "assets/js/6.2e44deb6.js",
    "revision": "114b945ed8654139e0d84e1b35604bec"
  },
  {
    "url": "assets/js/7.bdf45703.js",
    "revision": "bc946ecfc3f0c5c4ea61efd6b2c98dc0"
  },
  {
    "url": "assets/js/8.7b2f7b62.js",
    "revision": "e0dd39bcec94503eac26b55ea4cc4656"
  },
  {
    "url": "assets/js/9.119ef27b.js",
    "revision": "1601bc6507f4f2bcc80899b873c1fa3a"
  },
  {
    "url": "assets/js/app.d85d545c.js",
    "revision": "5e184c11b6a274cd73a06015ff887247"
  },
  {
    "url": "assets/js/chunk-elementUI.2730ca7d.js",
    "revision": "a675353294a28e74c171aefa1647ed56"
  },
  {
    "url": "assets/js/chunk-libs.770b80bc.js",
    "revision": "6340f213316f4144e358f207a36c86c5"
  },
  {
    "url": "assets/js/runtime.02c768ab.js",
    "revision": "38c8821bfd2c78d0d2bba11d162da101"
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
    "revision": "89730830371ee74e63acd6826bf16c8b"
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
    "revision": "37ffd28083ea8e84e98a2802fbdc1842"
  },
  {
    "url": "nav/code/index.html",
    "revision": "cbb7169c954911604b3bfcb0acb2776d"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "915ec433cf8a1128e2664a0a6cb21b62"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "0ea72dc85c55e538802e3c8053e2a68f"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "f47a221a78e969b1c895f3fdeaba85a2"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "05333f5408124f3f24861f579ab84129"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "eff424e5e4bfbbfc8b7495fa7bf7e319"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "1f75bcd14394e4075b87c69813e852e1"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "ae4f53de7adf86ea0f6c1d6a3269a5de"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "1169ec5591d2350e2c4128bbe5116528"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "bb7a51fe3d62064ec7ef460084a54c65"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "0881c19d1e3fd4cb13a03753ea7f1ad0"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "52977ea0da8c1dc900e595977190d970"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "6d53de7e31c5ea1ae03e8afa780cadb6"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "f12e6a07619a214926cd819db4aa9ebf"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "de3563ca18fd253c7dbbb21351116901"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "18754f3762ddb34652b9399fdbc7b811"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "f693e9de70720856cf8588db36c23164"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "7f0adc1a6f8eb6969528f60bff2b69b4"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "5e6e154fa5158c2e83d0bc7b52cae0d3"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "53102c1f4e09463c5a99f36b06cd8b08"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "cbd66de86b2974f71e77d6dd2ef32f4b"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "83d1875879870b18a10a339623601ce2"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "d468b9dfecb6aa8f81598234fb31f757"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "e631dcb45c30539a94b0df19f4d6712f"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "910cc28846196161948197efdd9f4c32"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "b5974b2d04d89aaec6108e0693c73da1"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "e7bc856237169f000c9395e1873e41d3"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "2fb0e2f790a07ce7472e7369b488e1f2"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "f9602469d291d1e8e94d6d8fd7495a62"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "086b237151f72d8d2b6ca6d44241f9b0"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "95b52760d653e0e565c2f65f411525d9"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "0eeea7bd75ef5333113fa1563664840e"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "bd34eaeeecc83750cdfab380460e17c4"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "df17e13f3bc56a6a7696a09c28f3e387"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "71d52af5ff097aadefd2f12580b7a34a"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "45ae1eb8d4f92f5bbf5f73ad7ae38192"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "0e3b57b3e7764e05f407c494b8e73302"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "32dfe225ba208bb5a2de8509351c32d3"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "dc68676006d0f4a68d0e14e751ef80d2"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "16f5d72763711f116e9a09a940708287"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "df13c76cffa959d19faa32c349bb3148"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "07f7c8e1c412aeacabd4f1999d619312"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "83a0358f9b39428e737d6677e0775c96"
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
