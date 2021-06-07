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
    "revision": "3d7027338a9e355f9f029e8691d55795"
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
    "url": "assets/css/2.styles.0df7ae14.css",
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
    "url": "assets/js/18.a5cf0cd2.js",
    "revision": "7d2db06ed1b56a3ced5dd719bfd2b44e"
  },
  {
    "url": "assets/js/19.a037246e.js",
    "revision": "4f3758c5dd6fa720d7c94b08e7861e8e"
  },
  {
    "url": "assets/js/20.2a5f8c9b.js",
    "revision": "c24a24357f43890214a011f1d03a9aff"
  },
  {
    "url": "assets/js/21.ae4aed04.js",
    "revision": "e5994c14930e9468129eb3fa3d8ef79d"
  },
  {
    "url": "assets/js/22.0bd4476b.js",
    "revision": "fcf491c00dbcd575410d94936fb62656"
  },
  {
    "url": "assets/js/23.56fd1541.js",
    "revision": "421fe6759537380bc722510bb36f8942"
  },
  {
    "url": "assets/js/24.d2868840.js",
    "revision": "03165214a3715c9720a53b0788fd6103"
  },
  {
    "url": "assets/js/25.c719df4c.js",
    "revision": "2a6b6abcfcc8384290a3ba4ecc23b661"
  },
  {
    "url": "assets/js/26.3aca4c2e.js",
    "revision": "e42fa0f9914009450682723adc72505a"
  },
  {
    "url": "assets/js/27.790aaab5.js",
    "revision": "ef62ac5aab2f4694a02f94af0dfd3dea"
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
    "url": "assets/js/39.99eb3f00.js",
    "revision": "ae0114736c42992d5de1b8ec01b59b23"
  },
  {
    "url": "assets/js/40.c98612fa.js",
    "revision": "9033a6f5a6ab84339c40766d6430833e"
  },
  {
    "url": "assets/js/41.cf11324b.js",
    "revision": "05b2936d2a1a552ab1694b84eb7c1b43"
  },
  {
    "url": "assets/js/42.516d0fc3.js",
    "revision": "32f7989292d940895bc6c8f902bdbdd8"
  },
  {
    "url": "assets/js/43.1f307688.js",
    "revision": "72cf7d7944cefa39120d8865cdb1499d"
  },
  {
    "url": "assets/js/44.16f218fb.js",
    "revision": "8da42961c62877c7bac06abaebc9734d"
  },
  {
    "url": "assets/js/45.a5383a50.js",
    "revision": "e5adf5770b9bfa6d62c7555b30b47eda"
  },
  {
    "url": "assets/js/46.19629cc3.js",
    "revision": "ccb07fde19e7070c273439cea8c8c40f"
  },
  {
    "url": "assets/js/47.b0bb7ab5.js",
    "revision": "50fd00eb9dd5015f66465b22338b655e"
  },
  {
    "url": "assets/js/48.08e9793f.js",
    "revision": "cd87527ade691b7b39cad7f9fa331286"
  },
  {
    "url": "assets/js/49.3a05fdb1.js",
    "revision": "13ebf788c5640f6456149489bbe1995d"
  },
  {
    "url": "assets/js/5.af248e68.js",
    "revision": "4cf80bfe962fa9da10e19892310fdbb1"
  },
  {
    "url": "assets/js/50.d19ff4d0.js",
    "revision": "a050236be08c8275fc14f314e5df1b6b"
  },
  {
    "url": "assets/js/51.2b8abc5e.js",
    "revision": "5bceb890ad65e8d5f5980d1e20275319"
  },
  {
    "url": "assets/js/52.c08df29c.js",
    "revision": "d6bacfa74e6c6eb0784be9a9a2cef122"
  },
  {
    "url": "assets/js/53.ec9fdc90.js",
    "revision": "3f690c24a6f4c9c416e60e628102ad59"
  },
  {
    "url": "assets/js/54.50dc3496.js",
    "revision": "dacf1085cc6f335d126e1d275b929cfa"
  },
  {
    "url": "assets/js/55.e4ec4f39.js",
    "revision": "207f71e7ad153684b8db62a61e7c4c7b"
  },
  {
    "url": "assets/js/56.f8090a60.js",
    "revision": "d9bbed9082949b79ea32a6c140f37448"
  },
  {
    "url": "assets/js/57.b7a94b5c.js",
    "revision": "bf2b533649c0209d4e4cbe10ededa2b6"
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
    "url": "assets/js/chunk-libs.0df7ae14.js",
    "revision": "eebf5cc21ae7e3480ca6fe9a806e16c9"
  },
  {
    "url": "assets/js/runtime.6baf1f58.js",
    "revision": "b53a7c05518e3f292010fc5e167231e1"
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
    "revision": "fb0aa8c4bd9b4278a88b3de3d6e01256"
  },
  {
    "url": "nav/code/index.html",
    "revision": "c2e696e1084e985e9379df7d2e68c192"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "ac2f227ee6d6530ebaf44a76f8d482f0"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "ab895a25e878a78a46917dfe836249f6"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "0f4c746ecb4ed0c1fd8cde3137a14250"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "09a71fcfc47f2f4bf4dbbaf86ae0bccd"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "0dd42010bcda8100caa8d742cd0e7c60"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "7678968ed1bcb32f2b01f1e9f46fc27b"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "a8ff1a0b9a950a06f410ac938a36f577"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "4707741b08f3c31d7112fb48a9c3c0a7"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "9740c0965ec2158205938fd659dbc981"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "f5e5747e0c4c0dc8221c89cc2419d3a9"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "e904c7682f0a3a5b9ddb6c6817ec41f4"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "9311f0e077a01d9eb3b4410fe0501ff6"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "980c3ccf9a1b2cf931006b20e9b5dfcc"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "1a34eb5cd0cc04594a30ad5e6091af02"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "ed2f72b01fd06b4c92e35525e36465d2"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "5c435f82cf5d6e26400edbe927f6b7cd"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "551789f0112481fe7f309b5a90fd0b5c"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "45d7efc4b1fd328f43668323e0884af0"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "94abdd2e56d6eb0372aa9f3afecd3fad"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "a4a5670ab9d806f6ce8f896db2a95f5e"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "32af27c9008428e2719d6228b7c45368"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "3299286cc03836358dc7a12e73b3985e"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "c7faaecc5a1c2fcb960c817f2b7cdc1d"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "022f4de09588ec7de4dc7246ed603f74"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "d5c7b1ede681ec8bf2b59c7cfac58fac"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "2de81a9ce8f38316ee4945388e5584f8"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "b64f6fbe2088c3d9151e6fb2b3898d70"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "903a10ccc61d31d367422e479846baba"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "b09d875476d11b20db04d28a26f78d55"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "3c272ab82364e89359b50b7c6f9fc84e"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "93284958f3fc66041c508444f1a4446e"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "d6d9c84ee73f1dd51f50a79250a1f630"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "476e84fe92fa44eaa32fe78ae5d4f5ad"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "5a395919b8c3ea0ac170866697da52c2"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "9d1081f64707906db480a6ba04130856"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "011748a5e8c006e27ffcf38ced66655e"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "9e4751b116aeb8fc3c330fbf387a3f22"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "128ecff40a47148fe90337eceec4d778"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "688e50d343dcaff7cca4497fb50eaf16"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "b60977aaf103a25a2309dc522f3f72d7"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "49f544ef5ac92b598ec4feac2fb116f6"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "98f71189d17c2693677b49b1186784e4"
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
