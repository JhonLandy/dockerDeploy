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
    "revision": "1ef46526834bb09a50a64c08448e0197"
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
    "url": "assets/css/2.styles.d0f743a0.css",
    "revision": "be4249466728e0e5acbe6cabe5c399a5"
  },
  {
    "url": "assets/css/4.styles.3bf4261c.css",
    "revision": "db3af59f4aeeab6f8a8acc3e4f38c1cf"
  },
  {
    "url": "assets/css/5.styles.af248e68.css",
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
    "url": "assets/js/12.7b72d813.js",
    "revision": "7acd09cf095d22607327f2e02ef7e1e5"
  },
  {
    "url": "assets/js/13.6a75d8e6.js",
    "revision": "c306c3dd7c92bd31f3f7c5d38998b4b6"
  },
  {
    "url": "assets/js/14.d06ab0b2.js",
    "revision": "fbde0016c3172fbe7ff608247cddfe52"
  },
  {
    "url": "assets/js/15.57f90250.js",
    "revision": "f562aeb2b143fe2e4f4077f1ed2c332a"
  },
  {
    "url": "assets/js/16.f956bbc6.js",
    "revision": "15a7bf0cbc9f500e68ae6309b9119c7a"
  },
  {
    "url": "assets/js/17.440a83b8.js",
    "revision": "86da8c40210ddb5395a116bbf9e3c3c4"
  },
  {
    "url": "assets/js/18.7b378074.js",
    "revision": "d197988eb29770a750c673279e4e8921"
  },
  {
    "url": "assets/js/19.e5e9c0a0.js",
    "revision": "a8850653a3eb565f2829443c60754ba4"
  },
  {
    "url": "assets/js/20.2a5f8c9b.js",
    "revision": "c24a24357f43890214a011f1d03a9aff"
  },
  {
    "url": "assets/js/21.f136d4e9.js",
    "revision": "79dffd94b5a6da9977dd4ea2e677bb50"
  },
  {
    "url": "assets/js/22.efb4c2e1.js",
    "revision": "b7d9dee22703447d2265f7c1ea792fd7"
  },
  {
    "url": "assets/js/23.6ea68d6e.js",
    "revision": "194e0145a91bc5ef8c180e64f6daea1c"
  },
  {
    "url": "assets/js/24.f4c0d48b.js",
    "revision": "a93cb78f67385d00907dd0357e625a9c"
  },
  {
    "url": "assets/js/25.66f79ed4.js",
    "revision": "1f647c2043514fa3b953b59fb457d330"
  },
  {
    "url": "assets/js/26.bbe6fa0b.js",
    "revision": "8d520bcf6224d2297cb592b5bdf74254"
  },
  {
    "url": "assets/js/27.e2a4333c.js",
    "revision": "26a50bcfdaa4fa569d60f1023b3e7df6"
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
    "url": "assets/js/32.df4a7441.js",
    "revision": "1e60ed4b9b8649602bb5209b38a51cbf"
  },
  {
    "url": "assets/js/33.b8d74f7c.js",
    "revision": "5a60a5ee87fd0edf9c313183cdf75a51"
  },
  {
    "url": "assets/js/34.28ccb659.js",
    "revision": "620d9b3ca6b53573a7731f2cbbe10c09"
  },
  {
    "url": "assets/js/35.36032096.js",
    "revision": "d99f9f8f672097168c79c94293760252"
  },
  {
    "url": "assets/js/36.fee123c7.js",
    "revision": "acebbfa6c1addefb03bf9bb42810d287"
  },
  {
    "url": "assets/js/37.6d7edcc0.js",
    "revision": "db35ef6c31262f2373146d423a38379c"
  },
  {
    "url": "assets/js/38.7d8f4d66.js",
    "revision": "486a009d6fef09fb40d76ade0bfb8209"
  },
  {
    "url": "assets/js/39.05a88215.js",
    "revision": "f8ed929c7eba41c37e50b6644d978750"
  },
  {
    "url": "assets/js/40.d1707db7.js",
    "revision": "435ed30871c6c7638f757a74bc4dbd4b"
  },
  {
    "url": "assets/js/41.a62f17f4.js",
    "revision": "e67f9fa3ab821c736ddf5eaea03e5d53"
  },
  {
    "url": "assets/js/42.8ef492c1.js",
    "revision": "8895f832497efe49a44df8d46c612aa5"
  },
  {
    "url": "assets/js/43.a6cc05fe.js",
    "revision": "252d0eac07f364db09ad812042ade14e"
  },
  {
    "url": "assets/js/44.2f8e757d.js",
    "revision": "75257a47b2fcdeed8de615f456ed5b44"
  },
  {
    "url": "assets/js/45.485da913.js",
    "revision": "8ecdbdef3711f879ca3102b61a31125e"
  },
  {
    "url": "assets/js/46.b0634823.js",
    "revision": "5af866c7fde8691aa2ad1b9f0a09a9e3"
  },
  {
    "url": "assets/js/47.f6e6ae1c.js",
    "revision": "4825b06dd82df8b4d3115b47504b3642"
  },
  {
    "url": "assets/js/48.e7585197.js",
    "revision": "a4801af43ad14b84a49d1c01c8b8a205"
  },
  {
    "url": "assets/js/49.70120976.js",
    "revision": "3e1c31f6d993d8c289f6fa0704b35c5c"
  },
  {
    "url": "assets/js/5.af248e68.js",
    "revision": "4cf80bfe962fa9da10e19892310fdbb1"
  },
  {
    "url": "assets/js/50.5c78cd22.js",
    "revision": "77a883ef4f3f02ba6333eb60bf5f6027"
  },
  {
    "url": "assets/js/51.0b06443d.js",
    "revision": "30e2d50a487083d6e31a3fe1e62b6ad5"
  },
  {
    "url": "assets/js/52.f87ea25b.js",
    "revision": "ec26a5d39f76972133f83348e9f30aa2"
  },
  {
    "url": "assets/js/53.3b3310ab.js",
    "revision": "f827b93a09aa5f4e718004c87602f07b"
  },
  {
    "url": "assets/js/54.12c0a714.js",
    "revision": "825ea69c0f02a1a43747831796519c0f"
  },
  {
    "url": "assets/js/55.ba5f73e5.js",
    "revision": "1177128ee75f33f0c7333eeaf01d4bcd"
  },
  {
    "url": "assets/js/56.a83cb11a.js",
    "revision": "1a79b701b4108e9f063ac8e4781fbecd"
  },
  {
    "url": "assets/js/57.e33e6f22.js",
    "revision": "f88cfd9f2947b6eaf30954105fcbe181"
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
    "url": "assets/js/chunk-libs.d0f743a0.js",
    "revision": "f5e854ac4cc311ba89f389be0d142f4f"
  },
  {
    "url": "assets/js/runtime.e6cc70c1.js",
    "revision": "3160c85cc06ae0117add35095561f579"
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
    "revision": "7aadfa5093a5a9f9c42b4d5a0c7ce89c"
  },
  {
    "url": "nav/code/index.html",
    "revision": "9c1a2afd8d13151bc799ce3157a58096"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "a4513deb72be7a1c7cf2d44f366b5492"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "c583b162271a5ffdea92c2ebd2b40e5c"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "8b3443f7d1b9fe26be38e0e895dab23e"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "cae34cddf9dfb8c76fe2be7039069d9a"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "38e5a39ff3fa4d123dbf7676f80ae606"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "e8afa293425e87268793b0e973295f8a"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "7dbae4ad22cbdb8b0fabbd0dd272c1ae"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "c70ba23d3580cfffe1c90acbd2da0765"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "dc8f6887b14a5d85d3bb5e3dcd2d6c81"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "300007974030e98bf9e9c4334af26b42"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "6f3c1805e4ae68311fd18059d894a972"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "126d090b52f23ee54dbbb6eb0c31b29e"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "6816270eb3aa573d7ff032ce72ac34b9"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "48690f1534b044b2cb88e1595da2152d"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "efd772512ca6d031263fe29b260b1959"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "53784e7ba902770f3c0565896dcfff2a"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "d37d9728a57d65a9f6c98b66ee66903e"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "dadd4b1cf85631c118c5d8180ddbccd7"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "aef5d40b8a79ccc489550e1a8e2480b9"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "16b1c225793a529a39676785853afcef"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "3749ceb15f9369fb7630e3e35e6b8c91"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "bf11539784b6c46af0296ba0c0b70157"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "5d797bb7e580ec0973f7903bf05f1d8a"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "a9b97a2d21c9bbfa134c1311bb638543"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "6286012f13201ddec201d9bd0ff0d9a8"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "fa0cdadfa703b99217217a1907d87f9f"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "c1b45a40731bde84a9332a915487c2c9"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "cb0ada000b33fd251b701bed71b28957"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "894b10de422fd1e6fa3ab60929cc6c47"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "76af1e1d13df099da380b46f64da6e4c"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "86b9e64fd9cf30a2655a8c32253c67ce"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "63bc44bf2b9ece043c28c04d810bbe68"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "8e168f85d7b5341418ca31f37ceddde0"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "81d290fb53be74ba793716ee25ac118b"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "8e13956a67cacf4cb8a7ac96940901a2"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "8b7f9c0da7c505213fe4e8cc872bfd86"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "8beee164ecc7af2ace23331bca7de094"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "461231293fa30c6e4ba35a3fa088e747"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "854aa2a3dce530403b89f41f7e200a8f"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "588cebd6e1b41aec141d048b21aa8ad7"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "c35330040ec18af43234eb9beb593b56"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "256f7d568da23240643b0e55ce863b14"
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
