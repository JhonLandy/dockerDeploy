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
    "revision": "161dbd6ca15775742b716e015c38f2d8"
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
    "url": "assets/css/2.styles.1b0adde5.css",
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
    "url": "assets/css/7.styles.7c9d3919.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.7b2f7b62.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/9.styles.7d28aa2e.css",
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
    "url": "assets/js/12.8ad8238c.js",
    "revision": "ac524c1fefeb10eda4ac6e88dd7a3c1b"
  },
  {
    "url": "assets/js/13.568f1d78.js",
    "revision": "1254334955cc7b4340d736ee2a9efce7"
  },
  {
    "url": "assets/js/14.671e37be.js",
    "revision": "6a51de11b5fb11d6e50bf6a3361a6d54"
  },
  {
    "url": "assets/js/15.d9f1ad32.js",
    "revision": "2672f6de022d5c7e1379960882795757"
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
    "url": "assets/js/20.99190716.js",
    "revision": "29667d5ec95073103cc0b92fa29e3d19"
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
    "url": "assets/js/26.7cae0b01.js",
    "revision": "b30805ba9ab49a51f9fa3ecd068cd858"
  },
  {
    "url": "assets/js/27.9ceb6089.js",
    "revision": "be9523a9f16e067e058e96ff5ecf6906"
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
    "url": "assets/js/34.608e9c28.js",
    "revision": "07bcdf5b33a4ed2af5e7c5b7797bce11"
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
    "url": "assets/js/45.4bead14c.js",
    "revision": "cb9c3c1fd72f466ff111b1744affbee3"
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
    "url": "assets/js/51.cae4a9e1.js",
    "revision": "a242f1943a055818f996e9450add93ea"
  },
  {
    "url": "assets/js/52.f175e9ae.js",
    "revision": "a06c92bdb91490400cf2fe738ee6aa26"
  },
  {
    "url": "assets/js/53.ab0f7780.js",
    "revision": "1c0b61091a3aefd22de9575716469495"
  },
  {
    "url": "assets/js/54.748d885e.js",
    "revision": "67352db3f94db83aa289fd3de558f66c"
  },
  {
    "url": "assets/js/55.d5a1477f.js",
    "revision": "ca56f4def48d47f63ad882cbd36a3126"
  },
  {
    "url": "assets/js/56.a6e05733.js",
    "revision": "6ca55c931ab5e2cacfcf78417a4cade6"
  },
  {
    "url": "assets/js/57.9e489729.js",
    "revision": "23dad4dc779eadbd1ccb72d8662badaf"
  },
  {
    "url": "assets/js/58.9b693504.js",
    "revision": "66388ed790fbbef31a1aca36b7a07659"
  },
  {
    "url": "assets/js/59.ae06119c.js",
    "revision": "a6d273458acd2bcfed0a22c2c45544fc"
  },
  {
    "url": "assets/js/6.2e44deb6.js",
    "revision": "114b945ed8654139e0d84e1b35604bec"
  },
  {
    "url": "assets/js/7.7c9d3919.js",
    "revision": "022892a4dcea094b6385c7f394beb617"
  },
  {
    "url": "assets/js/8.7b2f7b62.js",
    "revision": "e0dd39bcec94503eac26b55ea4cc4656"
  },
  {
    "url": "assets/js/9.7d28aa2e.js",
    "revision": "55ae648cf981bc74bcf650e3d6e00ec5"
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
    "url": "assets/js/chunk-libs.1b0adde5.js",
    "revision": "dafd062ddd879c1efa47c2705a553f6e"
  },
  {
    "url": "assets/js/runtime.00e9135f.js",
    "revision": "599c81f2feaaebf4520c3c34360642d8"
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
    "revision": "6661efdd4736d74b56661adc7f089a53"
  },
  {
    "url": "nav/code/index.html",
    "revision": "b5f84426d9925f192a185ebfd4872447"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "2e7533bd271bd5794937f2e7f2681422"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "821972ecde487a672ec052348914ed24"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "f21808c763e62c28d9c04c9ca61d9f56"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "b01a7ba5f56e8e8302b4b0b7f9745239"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "57c8c775f593d8b8d910037109a40e57"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "b47a9506f6e9bfebd026b7ea322ce7b5"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "76f0c5020e2293d6485f8b9c491c9443"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "a653b09599ae75b4ec7a81f469e4cd7a"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "3ff2ff7af8513f0e1bc06548488d8b21"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "b2bd6f74bab06afa2124f3bb643b737d"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "40e7242599f6a28c4a82dc2ed7ef12a6"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "c3469d25cf4f699389fcb26b35490dcd"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "8c861d3c9ed8331f83a8914ce7eef8c4"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "48e2c573c8d7149633d64d4773242c06"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "8f4748c1e78f0bc7682a7ac9df4bb8e7"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "f7bd2cbfb19570692daa613710878d6a"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "b3b11c9b26ec7127f306e9822b85af28"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "e7bea280ec46efcc000b530c1854d135"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "f6831df5e6faaf4ecff104a280f487d6"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "b535b5af77827350c968e019f668fe0d"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "6c60041063f025f4af2531588a99eabe"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "ea7838f823eda08595b2dac6bc6e8e15"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "353309c78e199ce169ab58f70ef3aa7e"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "dc24d04fcf5bf080aee7889e813c866f"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "8bdba950a02d02b197a30348b35ef453"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "671ab8adad0564bef0d49afc4568cd04"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "5923de4693b38e1e2c58ecc67aa486f0"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "b2c8ed6129dfb636210524c30a7a1c13"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "10f22a0e003af0dc7ace354cfc05bed7"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "0d3a9efae75bb74aab3fd7cd484f3d44"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "a6b24913b41a60d17ff710e64131770e"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "75d121e7527db5fa40d2f6df6744ceef"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "e49ac3a1a5217c95740212b25fb75e8c"
  },
  {
    "url": "sidebar/manager/消极心态治疗.html",
    "revision": "fe4fa7ce171af0008573f012c4ed53fd"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "f778c3f053d9580cecd1d6e31e0efdce"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "b0dcfdf0a11ec5b1945348da2f4beca8"
  },
  {
    "url": "sidebar/study/code.html",
    "revision": "75ae587bcc4724a18a479820c16333f3"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "55e6323cecc677c56bd345b8cb06e9d6"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "b4e657ed1750af7310c7b505fff99afe"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "aeec0418932e2ad5eeb10decc912d3ff"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "67cbd1fc7fd3a285a4544d8197fe5d22"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "e42852d1a79a56a5938a88fad5c977f0"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "ac8f508671accd9d0b0656dced44f9c5"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "4aa20abd9fb55c93ff38362f8d9a7045"
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
