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
    "revision": "56899f9209ad5339fd362275328a8118"
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
    "url": "assets/css/2.styles.df7eaaa7.css",
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
    "url": "assets/js/13.b2ef3a8f.js",
    "revision": "04b1d736dcb1e1026c5b45610ecbc9c4"
  },
  {
    "url": "assets/js/14.4b3f4cba.js",
    "revision": "f71877accf654db679295fc0f0ca8ddb"
  },
  {
    "url": "assets/js/15.6d38120d.js",
    "revision": "d510412b1d5a05eb061fd5d490f5d2a2"
  },
  {
    "url": "assets/js/16.3b6729c6.js",
    "revision": "c8a1ab851b01f78af5c6ee7ef45211f0"
  },
  {
    "url": "assets/js/17.7afbd8ec.js",
    "revision": "49238c1bcf5ec8743413b70be632afe7"
  },
  {
    "url": "assets/js/18.901dbde7.js",
    "revision": "8ba06e3369bf6c7c6645c6c2a97fe91a"
  },
  {
    "url": "assets/js/19.ade972aa.js",
    "revision": "37cf305a9328c6f286ab93b7c295e691"
  },
  {
    "url": "assets/js/20.c81effbb.js",
    "revision": "37a0fa885fcc8441dd236d2e60cede79"
  },
  {
    "url": "assets/js/21.a0ed8ec1.js",
    "revision": "bdf4baeaf05a0fdb59c4981e6caa7c2f"
  },
  {
    "url": "assets/js/22.ff394275.js",
    "revision": "a4e50a2f8cb7edf16558a8428ed7caa5"
  },
  {
    "url": "assets/js/23.40d848df.js",
    "revision": "8e72cdc3b2855e0dbc0982499292d875"
  },
  {
    "url": "assets/js/24.5ee526fc.js",
    "revision": "b5a361de6fab52a2554d935ea67e8937"
  },
  {
    "url": "assets/js/25.5e73417e.js",
    "revision": "0a22dcfa301b32576765978161629515"
  },
  {
    "url": "assets/js/26.f2baef78.js",
    "revision": "6c0687eca7d6fde8f688c45f4a79d801"
  },
  {
    "url": "assets/js/27.5e6aa84d.js",
    "revision": "293c8b0859f296231e28d7f4267f0eb5"
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
    "url": "assets/js/34.f0ce2920.js",
    "revision": "c47d65c7539b4e44f46e1f03eb067943"
  },
  {
    "url": "assets/js/35.fb2f21ab.js",
    "revision": "fa097ac039bed9d34e0e7fd6291fb7b0"
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
    "url": "assets/js/41.ef38aa50.js",
    "revision": "4919a39b2b9f5e04a033f63d291b4e19"
  },
  {
    "url": "assets/js/42.ad6a3aee.js",
    "revision": "7fe895b71567d68a7569cd56e19f96b5"
  },
  {
    "url": "assets/js/43.0f808c07.js",
    "revision": "799f10c9a32579d558a21a8048edc46a"
  },
  {
    "url": "assets/js/44.3fdd082d.js",
    "revision": "cbf35d9d7524213a1dc15341d87a5308"
  },
  {
    "url": "assets/js/45.d8985950.js",
    "revision": "d74c8344bca6ad9ba0f45cc71310ce18"
  },
  {
    "url": "assets/js/46.547d0c36.js",
    "revision": "9f1d9b03e658f5594a3337c623b6a10a"
  },
  {
    "url": "assets/js/47.349a0dab.js",
    "revision": "c9b1752ee545d6ab7126737bd4d4e879"
  },
  {
    "url": "assets/js/48.390873ac.js",
    "revision": "66b8924a3c54424de7677e5ccaf4b754"
  },
  {
    "url": "assets/js/49.957a53e2.js",
    "revision": "b547ce3e66c65b69f6d3431e6697225d"
  },
  {
    "url": "assets/js/5.23e8bea7.js",
    "revision": "c4dc42bbc09ed5cb55b41bb11765a83e"
  },
  {
    "url": "assets/js/50.db053b0a.js",
    "revision": "8282df13b2ecbdeba4bc20f4cc332beb"
  },
  {
    "url": "assets/js/51.ef7ac39b.js",
    "revision": "4547fa6153bba7916977d9852cf74b7d"
  },
  {
    "url": "assets/js/52.60d5973c.js",
    "revision": "91ce16cde5f09c6f3cec7955a47af195"
  },
  {
    "url": "assets/js/53.71335545.js",
    "revision": "66185fc3b9c4ee5e4f0090eddcee82ca"
  },
  {
    "url": "assets/js/54.97e2ced1.js",
    "revision": "ba8480807d95ddbccee6ef4370201057"
  },
  {
    "url": "assets/js/55.feea7563.js",
    "revision": "6ce1e9d613a0e1d8f47434d72df2eba0"
  },
  {
    "url": "assets/js/56.9f0c7bf5.js",
    "revision": "eba69864b2a04d06f746c01fe36f39ca"
  },
  {
    "url": "assets/js/57.63f2bf30.js",
    "revision": "bd24f4b77deca42456f149e8874dd208"
  },
  {
    "url": "assets/js/58.24bba5a6.js",
    "revision": "718baf36f74a89a67dea95ef99542fda"
  },
  {
    "url": "assets/js/59.c0fe1d99.js",
    "revision": "e64f8093d77a78e0f08939f4de772a56"
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
    "url": "assets/js/chunk-libs.df7eaaa7.js",
    "revision": "7023f82043591cd5f73ddf3ed2a53b76"
  },
  {
    "url": "assets/js/runtime.b3e436fa.js",
    "revision": "e531956ee77b2b244f41fc3146e4a1ce"
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
    "revision": "64d18a25d79872f2add0f29c22d4d0d1"
  },
  {
    "url": "nav/code/index.html",
    "revision": "4693eafba77910f3043b4379c3f0c2b7"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "0b1c2a23985abb12a1dd97fe86a362c1"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "26f0d499147bd90b87dbfbec344179c7"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "bbec7f8fd35e5332d14a0eab322d1f7f"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "1bb55a251a2d25262ab4cd1244ad1bbd"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "f4efbed2816adbcc54bb1906c7560da4"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "32d0ef00fe38beb10987818a5c7f4d0f"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "7a3bc2907c34bd8e05b0e29000471374"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "283ef99ee26b5f898948f8e3ceccaa3b"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "908b010615095bc2aa2eeb051b6d8c0f"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "2904620011e8cac764a79624e8a7ac83"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "714b96c93b729ce53ba800f8360102b4"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "251bda31f43353240adc6739d03c68ee"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "4feb5568b990639046402f42c57c5a5a"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "d852453252a97b9a8617a5984fd2e775"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "1ce61a786b27b704c4473c5b216ab00f"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "2e566c67ee2d915af6f6d28b07ec130a"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "b0eb849c41107bb43d37a0b7ddaa2c9f"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "96ad62c844b62057de90c2d872ff2c16"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "0683221777c3f16074410291ccafd097"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "b1d8023600c6228b09955ad03d7b96eb"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "482ecc61fc28a10ab5ea8c87ccf3adf8"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "285b867c8c5c485cb5740ba652eac7aa"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "6e39799583bfd6852323d2e72f9dca26"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "ad255e4ee82cd16647ac98ebda03b140"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "157011372baa4ce8a6ec603718698d0e"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "20be3b94be3abe1116754ac8ad85a6de"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "d8ac837beebea8ab54769851627993bc"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "4ee183a4c952ecb7f84bb03e25897d7d"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "51cbdfb5bad1028b55aea5ce0106e31f"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "6b3129c8414c235dfb9a6692963f7c7d"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "3dcd902d65c0230ebf857d6748e04228"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "09e3afdbc51beca46581f22b35bf8e5a"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "646cbadd4a85792aefeceeaa4a0319f6"
  },
  {
    "url": "sidebar/manager/消极心态治疗.html",
    "revision": "bdcc58db672861b60c7f76e9b7ef7bf2"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "d679ff9a3801de1a3e127188edcbca86"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "b8c9015e7989b2bfb574165becc0e725"
  },
  {
    "url": "sidebar/study/code.html",
    "revision": "0592d564b9cc46daba70617a3c8f885e"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "9978aa38f85baa62fdd0a0303d81c5ef"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "2aaa270b2b7c8669c6dad72fef74a34b"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "5f9478ee01e2da247ca22eff6db9c144"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "237ca991216eee99b0c56806c47f1b41"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "b134db30a362eaa3ac5f9f4120a43ed0"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "13faffa8ad67e10f034988f15f1b8e95"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "5f05389f38954e48035b478524409429"
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
