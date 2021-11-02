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
    "revision": "4e28ab76cde21ff3d9951cce27dfe52d"
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
    "url": "assets/css/2.styles.5f2002a9.css",
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
    "url": "assets/css/7.styles.96a6ba26.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.53b7f8dd.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/9.styles.b78ec1d3.css",
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
    "url": "assets/js/12.a4e2a964.js",
    "revision": "90d7c3bb168eef70673134c5ea1d0452"
  },
  {
    "url": "assets/js/13.48cf65ed.js",
    "revision": "db7608f98a42c1e8313b93fabca8d2bc"
  },
  {
    "url": "assets/js/14.692cf2ff.js",
    "revision": "d49b262e4e97f60a292ecae4e9cb31fa"
  },
  {
    "url": "assets/js/15.9f19bd9d.js",
    "revision": "7a3e79b08a05909da2742f680b9f8ac6"
  },
  {
    "url": "assets/js/16.2e0d8501.js",
    "revision": "e3b6baf68896e1d8f69fedce496196bb"
  },
  {
    "url": "assets/js/17.b1f8d56a.js",
    "revision": "b5f00467c729354782de1a5e48a975bc"
  },
  {
    "url": "assets/js/18.5469b234.js",
    "revision": "87cd4c61f5bb8bd3aebde0b9b5c290fa"
  },
  {
    "url": "assets/js/19.ff288bec.js",
    "revision": "30aca4e59e1fe30057a8478f9ead583c"
  },
  {
    "url": "assets/js/20.a0232cbd.js",
    "revision": "382238f02f3290938f40f3f1b5743f99"
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
    "url": "assets/js/24.e2affb83.js",
    "revision": "6c7e1cbe4866d05e87d2c523901be9cf"
  },
  {
    "url": "assets/js/25.cfa407b7.js",
    "revision": "e707c9a80f661940ccda29a3ca2536e9"
  },
  {
    "url": "assets/js/26.bb429ca7.js",
    "revision": "4428b95019ccc703d6f44d5dc1b72972"
  },
  {
    "url": "assets/js/27.d86e98ff.js",
    "revision": "09413bba7a954d95eefd5dec76707da4"
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
    "url": "assets/js/32.23d23070.js",
    "revision": "7eed875441554843412a8f8d242a7814"
  },
  {
    "url": "assets/js/33.89589b7c.js",
    "revision": "f8d05f74f1bbaf07268f97dad407d3be"
  },
  {
    "url": "assets/js/34.68e10052.js",
    "revision": "62985c3c79914f592c372cad9a81cf72"
  },
  {
    "url": "assets/js/35.fb2f21ab.js",
    "revision": "fa097ac039bed9d34e0e7fd6291fb7b0"
  },
  {
    "url": "assets/js/36.28584171.js",
    "revision": "1eb0376d5b4066eda820acf879372480"
  },
  {
    "url": "assets/js/37.4ca1f214.js",
    "revision": "0007f587fe0e02b408359ac69eb5fe06"
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
    "url": "assets/js/49.4c489be8.js",
    "revision": "d37eb6d268cfd1c690f013b4d3ea512f"
  },
  {
    "url": "assets/js/5.23e8bea7.js",
    "revision": "c4dc42bbc09ed5cb55b41bb11765a83e"
  },
  {
    "url": "assets/js/50.6c8c634e.js",
    "revision": "454a99393afa975b62b5ae3d089fdebd"
  },
  {
    "url": "assets/js/51.12b1430d.js",
    "revision": "0900a96b480a491c31c6565e46763936"
  },
  {
    "url": "assets/js/52.a0bd0ea4.js",
    "revision": "61208e692a0a5090a94ff88ad77255df"
  },
  {
    "url": "assets/js/53.e0c30137.js",
    "revision": "02f1ec8158bb6152caf09f2e43366188"
  },
  {
    "url": "assets/js/54.792f888f.js",
    "revision": "915ec81af0df6a23e5f569b4c224c510"
  },
  {
    "url": "assets/js/55.7d72457c.js",
    "revision": "1fe8b18e2f0547725c2925f84ab098bd"
  },
  {
    "url": "assets/js/56.a66909c3.js",
    "revision": "d8db5d2bcc4737582ea9ca7f564f3545"
  },
  {
    "url": "assets/js/57.fa79dab3.js",
    "revision": "c0b94ddfb3121287e866521c2511d908"
  },
  {
    "url": "assets/js/58.c9346dce.js",
    "revision": "7d3f8518eaabca7bbd5b86de4fe86a92"
  },
  {
    "url": "assets/js/59.1581dcf0.js",
    "revision": "56d2951a360ef16bc50aa735a6ae4088"
  },
  {
    "url": "assets/js/6.2e44deb6.js",
    "revision": "114b945ed8654139e0d84e1b35604bec"
  },
  {
    "url": "assets/js/60.bf1a2020.js",
    "revision": "5a8369cd8692d44b1c333cb34a94b9db"
  },
  {
    "url": "assets/js/7.96a6ba26.js",
    "revision": "f95e1115caf666621ac888713cc8ed53"
  },
  {
    "url": "assets/js/8.53b7f8dd.js",
    "revision": "1e45b1f8551e4e99b02a9d560b759e91"
  },
  {
    "url": "assets/js/9.b78ec1d3.js",
    "revision": "403abe7682d420e6bf474c8ad85ce8bd"
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
    "url": "assets/js/chunk-libs.5f2002a9.js",
    "revision": "2c5630130a2987bad5fdb3174e6740e5"
  },
  {
    "url": "assets/js/runtime.71fed153.js",
    "revision": "7af8b19a899653047bdd1a767cc21f7e"
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
    "revision": "f84dcfa422820599426c356d5a7c3cd2"
  },
  {
    "url": "nav/code/index.html",
    "revision": "0c36d8f569744cc632c128a4c16d0de6"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "2cfeea0b168e7d2a51fc7c2520b60ce7"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "b90ff1ea211998ce8625f25dc59ace23"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "3abf51eea5cf4f95e9c842a83de1e45e"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "8fb138596e60fd944627582c7723504c"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "d804539fa927360fee984fb9d33306b1"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "504d0456697d03f4d4d482c711c7e648"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "d7858c57a257d61c4fbc610789fe0d9f"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "3155ba51448544b6b0305f6d07be6d9f"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "5d4805a782e7fe1ea55dac708e931d7c"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "494604db56c6d970f5cd15f05e54996b"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "33f4c7eab481326c0c20d2a1dccb28ed"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "c50a8c72da6bd8902ba78a1734497a87"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "e878b8a2a12f20308f62bbcce52c5470"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "2e10f9ce6fe8a8a83a80f8125a20fc0f"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "de3562ee258db20bc3f0acd237c36e82"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "7e353ebce6fb4461fdfb0639299b0ba8"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "b81c400756484b413a3b149bf2cc4ec7"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "ef652f94196235b8436c1894279b79ad"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "64a7784283a47d85e51a5bd8a30c5066"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "1debe3955d4278c008a89594b1c67d27"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "c2ff05a51aa1c7e73394635af22e86b5"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "774f071d7ad06323d77885db6a7cdcda"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "e365f1d0b6f0028dcbfe5d4d29729ef5"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "19a99c4814cf480f7b100a074a9cc7e1"
  },
  {
    "url": "sidebar/article/好文收集.html",
    "revision": "e77373d220bdf7dfdb62fc5a2ec3b500"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "1536a4a9f6c8dd8bcab0136f9937cf4c"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "71250de08211501bc74feb9dc5d0af7a"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "16967b2fe88169ff61ea669ed9b4cb63"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "adceeb3447bcbb34e5c58d14d5390c26"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "c70b93b329d3832a76b06dda93bd5176"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "2800f7ec8113ad07fee15d7c68ab3940"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "2957615f53bce664e451a11577373527"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "ccba7fa21ba2b5b36eaf0019173a3be1"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "7b16b919d856a1a0456ae0be60883f45"
  },
  {
    "url": "sidebar/manager/消极心态治疗.html",
    "revision": "1c82d9b8089cb788ff4b2236f28eed16"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "c6c2c1855ff8cb411962b3f8b0cd49b3"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "4c9a2f1eae6388be16c41bf7b45e7db7"
  },
  {
    "url": "sidebar/study/code.html",
    "revision": "93344c2aeb870c11d7fb4adf75327072"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "2c7f62d4d366eea1562158c4946ffeab"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "a0a85a5c25a538633db230f30a3f6c6c"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "b0b57a80c3503df009a11707ddf06016"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "58da222306d19c724864b48dacb98f2c"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "6f3e8a595c88b8ca14da5f4b2390c7c9"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "a7ddef45ba5f2532a652ce24108ad1d8"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "3790ad19eafcea0b050d8bbd2588dced"
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
