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
    "revision": "9cfe771e2256eab31541290d3cc3ce70"
  },
  {
    "url": "assets/css/1.styles.e4c6f4b0.css",
    "revision": "e705277dceeb593357afa54f125c1f55"
  },
  {
    "url": "assets/css/10.styles.5823eb55.css",
    "revision": "bd36b1dd758cce4882177d7d307318cc"
  },
  {
    "url": "assets/css/11.styles.4490537e.css",
    "revision": "8560b7952c93c4d634d9cd5ec02a4c92"
  },
  {
    "url": "assets/css/2.styles.c5aa2d12.css",
    "revision": "be4249466728e0e5acbe6cabe5c399a5"
  },
  {
    "url": "assets/css/4.styles.3bf4261c.css",
    "revision": "db3af59f4aeeab6f8a8acc3e4f38c1cf"
  },
  {
    "url": "assets/css/5.styles.dc5d0932.css",
    "revision": "4799e47e4e7567ebf68cf29932c3b9af"
  },
  {
    "url": "assets/css/6.styles.194557f9.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.f387d062.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.d3f9f724.css",
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
    "url": "assets/js/10.5823eb55.js",
    "revision": "cdae5629d3252c22d08811217daa8e90"
  },
  {
    "url": "assets/js/11.4490537e.js",
    "revision": "c9c4eb2f46fe7954c72446955f071e4c"
  },
  {
    "url": "assets/js/12.e16970c4.js",
    "revision": "ac524c1fefeb10eda4ac6e88dd7a3c1b"
  },
  {
    "url": "assets/js/13.877fb654.js",
    "revision": "32f18eecefa7d6e72f2436c850becf7d"
  },
  {
    "url": "assets/js/14.052b32ff.js",
    "revision": "8ff6c0d636768df34b8f96dc6608a956"
  },
  {
    "url": "assets/js/15.a3dd9b51.js",
    "revision": "104c2a5d13e35f24cef8835d7419c2f0"
  },
  {
    "url": "assets/js/16.4f5e8809.js",
    "revision": "5d50a274bbb397e1a95b9b812cbf3645"
  },
  {
    "url": "assets/js/17.d470873e.js",
    "revision": "3c2b08c4d48680cd7f86068a0469476c"
  },
  {
    "url": "assets/js/18.03c501f9.js",
    "revision": "4ca5d0a7bb2f7f32372aa1f01e1fb9c7"
  },
  {
    "url": "assets/js/19.7b0913de.js",
    "revision": "072b395fba3a337993a5705b093c8fc6"
  },
  {
    "url": "assets/js/20.7d3c1bd0.js",
    "revision": "01f5a3df4a093079336e4dfcd97d932c"
  },
  {
    "url": "assets/js/21.8447cbc0.js",
    "revision": "296100fc1e8168d18a5c7a3f9c8b004d"
  },
  {
    "url": "assets/js/22.8f05d187.js",
    "revision": "323fcaf562e04314ccab99136afd1963"
  },
  {
    "url": "assets/js/23.899d085d.js",
    "revision": "70f7445b1b3a40a941fed01603384be2"
  },
  {
    "url": "assets/js/24.1f532b84.js",
    "revision": "bd69507fe4881a5adb0711700c0a77e9"
  },
  {
    "url": "assets/js/25.f07fde06.js",
    "revision": "f982ede2b21ff6e3e8adab2707e2b68a"
  },
  {
    "url": "assets/js/26.99c58090.js",
    "revision": "2bba88ea2a10d35f0633cc82a22854b4"
  },
  {
    "url": "assets/js/27.9f6dd006.js",
    "revision": "9b88c0a6c6a6e47b059a008e79875151"
  },
  {
    "url": "assets/js/28.bc56a1f7.js",
    "revision": "d653996048bfb4b8ebddcfad4512ba10"
  },
  {
    "url": "assets/js/29.39883221.js",
    "revision": "44ffe6223643168e02c703e5f1562004"
  },
  {
    "url": "assets/js/30.6d4cd29a.js",
    "revision": "3523f5cfac9e67509add254fb07508d7"
  },
  {
    "url": "assets/js/31.fce6feaf.js",
    "revision": "7c14dcab80913462d46285367e23ec88"
  },
  {
    "url": "assets/js/32.8809997c.js",
    "revision": "3169b117d2325b26cb37fbb4b60515cc"
  },
  {
    "url": "assets/js/33.9a82f433.js",
    "revision": "634faf0b8ddefaadb8aad2fd213322ec"
  },
  {
    "url": "assets/js/34.8b5dcefd.js",
    "revision": "f599e5649de8a8bc0a53d647a76294de"
  },
  {
    "url": "assets/js/35.2000d471.js",
    "revision": "4bf42528ee33050ef8cd669674f93ec9"
  },
  {
    "url": "assets/js/36.fc497ad9.js",
    "revision": "2227e8ec6633e644c673e7dd9e1246a4"
  },
  {
    "url": "assets/js/37.b6dc4977.js",
    "revision": "95fb560e7f42447dc1e77383eff4b801"
  },
  {
    "url": "assets/js/38.e04717df.js",
    "revision": "dfa8853aaa8c8bceb648b75423198166"
  },
  {
    "url": "assets/js/39.4f182731.js",
    "revision": "ec1a05c85ae1499508d48333eb25c7d1"
  },
  {
    "url": "assets/js/40.7159c349.js",
    "revision": "cbaa4f3d63c3974dc623329b5a30750e"
  },
  {
    "url": "assets/js/41.2ad7596d.js",
    "revision": "6456619f26e90f0961c6077a4b799c9a"
  },
  {
    "url": "assets/js/42.0c089120.js",
    "revision": "eb08258d3ec4ef27e647199e46cde298"
  },
  {
    "url": "assets/js/43.ac90938c.js",
    "revision": "34963a17ad3a46215a56ff7f6a809a9e"
  },
  {
    "url": "assets/js/44.32d5d91c.js",
    "revision": "57805ffdeb15b78cb84c29ff5d70f931"
  },
  {
    "url": "assets/js/45.bd5e1616.js",
    "revision": "5917483b16bb3ed4149c0513f6516f58"
  },
  {
    "url": "assets/js/46.39d679fc.js",
    "revision": "4dc68297831c4a8da5352f606ee1cb6c"
  },
  {
    "url": "assets/js/47.ea4a1407.js",
    "revision": "e3dfb99a7c96cba3c08ee5e27a803fb8"
  },
  {
    "url": "assets/js/48.de034493.js",
    "revision": "7daca36d2a6207238786175c404cecc3"
  },
  {
    "url": "assets/js/49.4af47288.js",
    "revision": "56b165c0d765ed89461589832e8cfd6f"
  },
  {
    "url": "assets/js/5.dc5d0932.js",
    "revision": "c4dc42bbc09ed5cb55b41bb11765a83e"
  },
  {
    "url": "assets/js/50.f44459a4.js",
    "revision": "79bd6abea18b76f76c542dd66fc10bbf"
  },
  {
    "url": "assets/js/51.9518c99a.js",
    "revision": "f0de9a13fe4a84b5a90a597a48bfc28b"
  },
  {
    "url": "assets/js/52.7f853f2b.js",
    "revision": "e9e0fd62630aadfde6b563ba60b17a70"
  },
  {
    "url": "assets/js/53.c5550c78.js",
    "revision": "76812dad0be16050a6ea0c6a57f3ea29"
  },
  {
    "url": "assets/js/54.07720184.js",
    "revision": "83737a0f0ce39c4e790f01003c21d7de"
  },
  {
    "url": "assets/js/55.5eba5847.js",
    "revision": "aeb7915f5c2d1526839da6ce7e6931af"
  },
  {
    "url": "assets/js/56.eb6d61aa.js",
    "revision": "8c66421970288df525e76098e4417526"
  },
  {
    "url": "assets/js/57.0d79ba7b.js",
    "revision": "23dad4dc779eadbd1ccb72d8662badaf"
  },
  {
    "url": "assets/js/58.291dbf05.js",
    "revision": "dc7ba79f918301a2206535985611952c"
  },
  {
    "url": "assets/js/59.9e02f316.js",
    "revision": "1f28689b4fce7493ef3829ef0d5fdf16"
  },
  {
    "url": "assets/js/6.194557f9.js",
    "revision": "114b945ed8654139e0d84e1b35604bec"
  },
  {
    "url": "assets/js/60.43f05c31.js",
    "revision": "c2902cd241f343716dd2c564741bd32f"
  },
  {
    "url": "assets/js/61.311398b7.js",
    "revision": "6ecb01df303e1e9dcb2732d273adb83c"
  },
  {
    "url": "assets/js/7.f387d062.js",
    "revision": "db892126af71fbc3c1070130e2cb1ec8"
  },
  {
    "url": "assets/js/8.d3f9f724.js",
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
    "url": "assets/js/chunk-libs.c5aa2d12.js",
    "revision": "019b31064daa1b6be390486765b3f58d"
  },
  {
    "url": "assets/js/runtime.cc9ba383.js",
    "revision": "781ef40513b4385606d995898f59c886"
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
    "revision": "59042c38898dccf1579531be1b72fa72"
  },
  {
    "url": "nav/code/index.html",
    "revision": "7287e09f1d8e391c485b24428950eccc"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "defdccb3e0ec46ebe3cb8a1bc997afa4"
  },
  {
    "url": "nav/code/remark/index.html",
    "revision": "e4039674012a0250585d5021dbaf435f"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "ef530e77415a22c9290de57db11dad85"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "c4ccc34bd3c48fc42e08c86824e78bbf"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "5159fcd4d5ae2599a30b717f6d130f64"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "e8f75099ca1909d4a8eef1a3765ccc08"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "3a82ef8fef9324bf4e456beec12a24fe"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "6b7df64bb957814c933e7991459fe695"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "a25b684151765bd6ad06112e7ed5f57e"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "e8682ac8cf786743aaf907e0be7ecd6f"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "77377d2c0c98b8340a6a6bb7b5007352"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "51ffcb28026c5dbee9fa9fe7b4bea515"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "8ac68420f68b7dbdefdb0cc55a917adb"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "8d92b1e69657befc070523996efc6a9c"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "ad1aeac47a026376f40ad234101c8949"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "11101fe196157ed7cb3c9a2a16abc327"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "dc6d5d998319ad912f251545c844ad57"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "e3c907cd1055f0f473e567ec219589aa"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "73cd796cd9b2a8780ef7894c43cf05a2"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "1bd8c7a1ba985efde69bfb81ff2e20c2"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "6fe8d0e488a85e1be92b900ecbf9fd47"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "86f57d23aba30b9a67e59aff90d7a7f1"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "798b19f970d228df21321d417d090447"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "6e42be64fd2dfbb59f4db6568521c0e3"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "df92fc1d8d41f8ff0ad8b719589b879d"
  },
  {
    "url": "sidebar/article/好文收集.html",
    "revision": "dba87e6b86e65969bb4ada90e7e122e6"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "a8e6922358eb840361299f8efb1e7a73"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "a1a9a038ef34705b9f64ff08b89646e3"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "9a45f41d15444cb81b6a2e8e37da7e36"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "3482414003c3e6b35fefdc3091eec839"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "b9846b915b6d10eaaa9e555ea7f5e10b"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "7578394db6e83a214b848166338eaf2e"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "8928d9525be3f3244a56e6b5f793d9b0"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "0b1bb0e8ea477804f2b9f39fa6e6aca4"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "e454699181390f0a8011a7f4a0574d1b"
  },
  {
    "url": "sidebar/manager/消极心态治疗.html",
    "revision": "1f75b97360c8723f8f5ca98d938cbe66"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "208f217d785deb5d6341776ec96f38e9"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "f70f28df59b62b7fce9381f91990799d"
  },
  {
    "url": "sidebar/study/code.html",
    "revision": "88f408c577b225bde473de605a798214"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "0b445528f6ae7ba23553b558e5770a39"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "ac90e15e6acb79641675b4f5bad043ad"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "2e955b60442e0e61fc205f9a6a065341"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "42af1976a291a8966bbac89e04dd2b60"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "6dfce30a2b49ae82b038d0691db112b8"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "64004f3770c1722f9aec5735c02eb779"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "5a80a73816abd383a9ba06d9365a23d6"
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
