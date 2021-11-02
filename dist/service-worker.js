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
    "revision": "9df6a41f1669c05a5b9c938967349d97"
  },
  {
    "url": "assets/css/1.styles.e4c6f4b0.css",
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
    "url": "assets/css/2.styles.66020b89.css",
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
    "url": "assets/css/7.styles.f387d062.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.53b7f8dd.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/9.styles.aafc1605.css",
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
    "url": "assets/js/18.5469b234.js",
    "revision": "87cd4c61f5bb8bd3aebde0b9b5c290fa"
  },
  {
    "url": "assets/js/19.208cb7f0.js",
    "revision": "072b395fba3a337993a5705b093c8fc6"
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
    "url": "assets/js/22.21349fc5.js",
    "revision": "f68418305ff61d1e3eba830544071857"
  },
  {
    "url": "assets/js/23.fe982b53.js",
    "revision": "8f34a0c7860fa6f375ed8d86de520656"
  },
  {
    "url": "assets/js/24.a4b10571.js",
    "revision": "bd69507fe4881a5adb0711700c0a77e9"
  },
  {
    "url": "assets/js/25.06669027.js",
    "revision": "f982ede2b21ff6e3e8adab2707e2b68a"
  },
  {
    "url": "assets/js/26.b7431070.js",
    "revision": "2bba88ea2a10d35f0633cc82a22854b4"
  },
  {
    "url": "assets/js/27.df9d0b1c.js",
    "revision": "9b88c0a6c6a6e47b059a008e79875151"
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
    "url": "assets/js/48.56fb6033.js",
    "revision": "374ac1ab5e08b5faa1f6b126ac4868d2"
  },
  {
    "url": "assets/js/49.1b624ad9.js",
    "revision": "8b60cd1bb522cecfa13012eb93f3ce4e"
  },
  {
    "url": "assets/js/5.23e8bea7.js",
    "revision": "c4dc42bbc09ed5cb55b41bb11765a83e"
  },
  {
    "url": "assets/js/50.9b8d59c3.js",
    "revision": "79bd6abea18b76f76c542dd66fc10bbf"
  },
  {
    "url": "assets/js/51.96d87fdb.js",
    "revision": "f0de9a13fe4a84b5a90a597a48bfc28b"
  },
  {
    "url": "assets/js/52.7dbad109.js",
    "revision": "e9e0fd62630aadfde6b563ba60b17a70"
  },
  {
    "url": "assets/js/53.d98998ab.js",
    "revision": "76812dad0be16050a6ea0c6a57f3ea29"
  },
  {
    "url": "assets/js/54.c1b7dcca.js",
    "revision": "c6b693c6b363fdfd8d2e98d992f56e75"
  },
  {
    "url": "assets/js/55.09324fd5.js",
    "revision": "aeb7915f5c2d1526839da6ce7e6931af"
  },
  {
    "url": "assets/js/56.d3375660.js",
    "revision": "8c66421970288df525e76098e4417526"
  },
  {
    "url": "assets/js/57.cdb058b4.js",
    "revision": "23dad4dc779eadbd1ccb72d8662badaf"
  },
  {
    "url": "assets/js/58.8b8f3a7f.js",
    "revision": "dc7ba79f918301a2206535985611952c"
  },
  {
    "url": "assets/js/59.ca03c972.js",
    "revision": "1f28689b4fce7493ef3829ef0d5fdf16"
  },
  {
    "url": "assets/js/6.2e44deb6.js",
    "revision": "114b945ed8654139e0d84e1b35604bec"
  },
  {
    "url": "assets/js/60.d24198ee.js",
    "revision": "c2902cd241f343716dd2c564741bd32f"
  },
  {
    "url": "assets/js/61.662b8409.js",
    "revision": "6ecb01df303e1e9dcb2732d273adb83c"
  },
  {
    "url": "assets/js/7.f387d062.js",
    "revision": "db892126af71fbc3c1070130e2cb1ec8"
  },
  {
    "url": "assets/js/8.53b7f8dd.js",
    "revision": "1e45b1f8551e4e99b02a9d560b759e91"
  },
  {
    "url": "assets/js/9.aafc1605.js",
    "revision": "dda9bf052fe5cad3721362ae6955019f"
  },
  {
    "url": "assets/js/app.d85d545c.js",
    "revision": "5e184c11b6a274cd73a06015ff887247"
  },
  {
    "url": "assets/js/chunk-elementUI.e4c6f4b0.js",
    "revision": "aaae07d9618cf730b3654294bef81619"
  },
  {
    "url": "assets/js/chunk-libs.66020b89.js",
    "revision": "48cfb066f8c956743525fed3c3c74984"
  },
  {
    "url": "assets/js/runtime.3f6f8661.js",
    "revision": "d1b44b8af7fc7693797c54a128ba03bd"
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
    "revision": "fa3038286b8ae4d54394092d46b5915b"
  },
  {
    "url": "nav/code/index.html",
    "revision": "222e4badc5fe12cb665565984c167b9d"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "68799a0e4d799fbeda56da3cc12a8f2c"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "4dc8f276a328dfc0e756de01f81789ff"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "652e5903f385ce2a8f2ce40b6551f58a"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "b752e32b9c60d961c44a8ed799589aac"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "8fe38e0d31a70d7288970d85fd06d868"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "36647be9fe0f981c8f8ac255c96d1ad7"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "f3d5e8b6eba032b1e38ff1f9066f5dbd"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "e7b9075e965496eae67d8e4c0f5d2c51"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "46c0dc8fb4af37ab7d9c8291aedd1934"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "1355eb316a838b9e9d58747b89e93a9f"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "ecbdb48a886f815a701e8af1e769aee8"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "be94d9a19f2adcce5c9ddfb21035b500"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "e36b226c514b8e662fd0642916d296f2"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "7b3c7801eb9bd5e0cd9f66a7aaf7e554"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "e64b989e00d3627bfd49a3d57878a111"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "bcf4849a2bba13688291d0b97672a521"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "bc74ff50cbd679ad1685858177426480"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "798ecf0231e2184880f0dff4a2cffabd"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "21d8eca8744d8d92387aad6983ed1f7e"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "3376bb7065ca1edbb5091b5bdffc139b"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "c401b939ae6da65fc6ee461fc8d7f2e8"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "390c328ed7865362d93d8d5ee3f53f61"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "e613231cd77a47436d4a7582890b09d9"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "5cc11bcea7ffa0642fd519a3c611b241"
  },
  {
    "url": "sidebar/article/好文收集.html",
    "revision": "85fe35061d72332af3d8ea90bc05bb84"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "e4b86eac100f93f0a4d5380540e4b9b3"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "01768679fd1b09c1a116b2107dd45747"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "d228b4a1a66dd462a3d7b05127812a7c"
  },
  {
    "url": "sidebar/emotion/感情问题记录.html",
    "revision": "9bf883cb7fea8da2d208c849c69e51a5"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "caab0c9d5ab4fe38f936740cd34fb064"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "34b108586d5827e9890b463227c51255"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "60276a9327775886cca3459607b00e74"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "8f074423867ba0fcbfabe6ada935b4a7"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "8d2b7e7e52a7e44081626f7fde7803c9"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "b65a6c6af6ff98b92fd7d6f2eb3179ff"
  },
  {
    "url": "sidebar/manager/消极心态治疗.html",
    "revision": "2d6d3b1fdd201a93e2412e4a4a2afa9c"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "bef678dd1d187f8e083b624018bd7843"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "aac7d366b3e73569d287a06cb15ed0e4"
  },
  {
    "url": "sidebar/study/code.html",
    "revision": "788a37d2538f536fdb780a22aa213589"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "1a42aaf37a37c3341b4cc0982f33bbf6"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "766aca6acd807b88144332c10d40886c"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "88b90d53bf626b72139a1550d96897d1"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "8065f25dba6f62637fe0c12c13337362"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "f0d4d99630e55c9d91b9ff6e31ac66a0"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "6aa59090ec5bd672e40b4ae7350caac4"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "9f58b7364e1db5a619945bb61c04e769"
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
