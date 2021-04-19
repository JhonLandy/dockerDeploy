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
    "revision": "8b7d37d212bebb6ea71d769796f9c03f"
  },
  {
    "url": "assets/css/2.styles.6fab3321.css",
    "revision": "d2c4e6c8f2e188a273c79653548f10da"
  },
  {
    "url": "assets/css/4.styles.1367e7e7.css",
    "revision": "ed0000583a914e5821fb53bc8f351f41"
  },
  {
    "url": "assets/css/5.styles.c369ed19.css",
    "revision": "4799e47e4e7567ebf68cf29932c3b9af"
  },
  {
    "url": "assets/css/6.styles.66965081.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.f9095636.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.4a637a0d.css",
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
    "url": "assets/js/10.d7ea89d5.js",
    "revision": "e7deaa5e6069c5d27688cf751b0fa768"
  },
  {
    "url": "assets/js/11.f945d1ff.js",
    "revision": "063e1d498f6ba3f4f8e152d3b23d62a2"
  },
  {
    "url": "assets/js/12.ad45f321.js",
    "revision": "06c7a1ce8568d1e40ca0b163a778ce37"
  },
  {
    "url": "assets/js/13.3cc50a8d.js",
    "revision": "ddb778ac5f07351f5977c0568a6bee6e"
  },
  {
    "url": "assets/js/14.d89afb1c.js",
    "revision": "850a65f94a6a27ac587b1a99eae9c8c7"
  },
  {
    "url": "assets/js/15.d2adf71d.js",
    "revision": "13fae6db93e0000e39b0c0ae8a82ba7a"
  },
  {
    "url": "assets/js/16.c0588e26.js",
    "revision": "9b8b947a305e84975fa85e845d2b4d20"
  },
  {
    "url": "assets/js/17.c796e266.js",
    "revision": "8e0b6b59f08e8d9e4eb2dc449fa91d36"
  },
  {
    "url": "assets/js/18.ece6c5b0.js",
    "revision": "9987d12bac299fc089ae18978ae2cdba"
  },
  {
    "url": "assets/js/19.6801c045.js",
    "revision": "873d98618b6b05636ec5a2ae8fb0f243"
  },
  {
    "url": "assets/js/20.77b1617a.js",
    "revision": "e80729b66163f17e507e55748efc6615"
  },
  {
    "url": "assets/js/21.ce8d2480.js",
    "revision": "ff0841be9db74f2556fd6cea61f71830"
  },
  {
    "url": "assets/js/22.972554af.js",
    "revision": "78effea2ae26d0f96d787b81d559b12b"
  },
  {
    "url": "assets/js/23.645b9fcc.js",
    "revision": "a9e2be853d0b02ae4e0c6c180ea63ca9"
  },
  {
    "url": "assets/js/24.1f4673c9.js",
    "revision": "f301c5843188f8405166265e7e1bee75"
  },
  {
    "url": "assets/js/25.1383e644.js",
    "revision": "b477c3f3d099ac7fc1943b9721a40f66"
  },
  {
    "url": "assets/js/26.6e45775a.js",
    "revision": "176af036db675967a27c55b68b6e0d06"
  },
  {
    "url": "assets/js/27.9568b643.js",
    "revision": "ba0c721b257f38d759dbe81be0e6f915"
  },
  {
    "url": "assets/js/28.3a42d7c7.js",
    "revision": "84446bd89e50afa821be72138fa99356"
  },
  {
    "url": "assets/js/29.dd93ed1d.js",
    "revision": "53b828275bf13db745bcc0818af66e23"
  },
  {
    "url": "assets/js/30.7a78fdc0.js",
    "revision": "0669ba181f6cc013e5ad351423768f0a"
  },
  {
    "url": "assets/js/31.59fbe8e7.js",
    "revision": "88e5ba158bbddd053fe8352f45fe4286"
  },
  {
    "url": "assets/js/32.33e09da3.js",
    "revision": "1edb99300628e081ecc84b6faca3b25e"
  },
  {
    "url": "assets/js/33.baf6ee2b.js",
    "revision": "1e887db7e9cad6f228165b75e1343c05"
  },
  {
    "url": "assets/js/34.91c56244.js",
    "revision": "09afe8672994f89995faebb310067c05"
  },
  {
    "url": "assets/js/35.56af71d9.js",
    "revision": "f7c0bde9d2f2dbed658b073db45eeb51"
  },
  {
    "url": "assets/js/36.7b6fe15e.js",
    "revision": "b9da5182610340f09897c1cff278578b"
  },
  {
    "url": "assets/js/37.c74c46d1.js",
    "revision": "e8a2a5ea0d5c0612c3880448609f3d0d"
  },
  {
    "url": "assets/js/38.668c1808.js",
    "revision": "40217acd3b181a7c12f8360cfa96aad2"
  },
  {
    "url": "assets/js/39.b98d1414.js",
    "revision": "a4e8acec8a50a1ddac25d494490b5bba"
  },
  {
    "url": "assets/js/40.f69664a1.js",
    "revision": "21904ef2b743476321455a9892f092db"
  },
  {
    "url": "assets/js/41.253a6b80.js",
    "revision": "c5446886617af6bbf91df7e6459ea066"
  },
  {
    "url": "assets/js/42.34f0458f.js",
    "revision": "9d7f4b94ddc8c776be8b7689b9f8e9bd"
  },
  {
    "url": "assets/js/43.14e55cde.js",
    "revision": "e422a7a863347d5a0b27d4afc1117775"
  },
  {
    "url": "assets/js/44.2621ef4f.js",
    "revision": "27f813c962209183bea928d3f0847520"
  },
  {
    "url": "assets/js/45.e3598d1d.js",
    "revision": "e0b9c922344f0f01525031f14057b470"
  },
  {
    "url": "assets/js/46.420b5d78.js",
    "revision": "e0621c6b75b46b1938c1d8def5ed25c6"
  },
  {
    "url": "assets/js/47.cacf0c02.js",
    "revision": "78c94ee5bcc04c5dcf720fcc3a85e094"
  },
  {
    "url": "assets/js/48.6730b1d1.js",
    "revision": "dd0ea018864bf0c51965670c68f7fe17"
  },
  {
    "url": "assets/js/49.09a2635f.js",
    "revision": "855794e49dcf54bdce3578d0bdcb9fd4"
  },
  {
    "url": "assets/js/5.c369ed19.js",
    "revision": "6ad1801c5182e274adf9000003689fb4"
  },
  {
    "url": "assets/js/50.75b9a6b5.js",
    "revision": "919ee786a71f75014f7fd449aa0a810a"
  },
  {
    "url": "assets/js/51.967823e9.js",
    "revision": "fe6f9dcffd1ae26d5fd2da376f93e331"
  },
  {
    "url": "assets/js/52.2079aa60.js",
    "revision": "d0b7a932495241a1fbf69d0f0055c037"
  },
  {
    "url": "assets/js/53.1a528cde.js",
    "revision": "e16d85624e9cb682bd80bf9becc799c9"
  },
  {
    "url": "assets/js/54.8132d097.js",
    "revision": "02602776f513d23cd6a7286fc44881d1"
  },
  {
    "url": "assets/js/55.05a81511.js",
    "revision": "f625f26d9ab4d70ca400526edc235823"
  },
  {
    "url": "assets/js/6.66965081.js",
    "revision": "6017134dbfd3d3afb244aa655452df9e"
  },
  {
    "url": "assets/js/7.f9095636.js",
    "revision": "36aab030427295684267d438cca51d86"
  },
  {
    "url": "assets/js/8.4a637a0d.js",
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
    "url": "assets/js/chunk-libs.6fab3321.js",
    "revision": "eccd4c2b87dc23615e11945dd51efb3c"
  },
  {
    "url": "assets/js/runtime.54f72453.js",
    "revision": "a254e9adef4071365a49cd0d0fa6c287"
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
    "revision": "599ae2408733690d0ac6c7f328fc4c47"
  },
  {
    "url": "nav/code/index.html",
    "revision": "ba931aff1e6cb3c8ecebba40aab37fd9"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "bc6fc40b96bb276c5d3020bdd5f66a70"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "ea2f97577e12ddd75f4664c39a9ab7ba"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "15222a8cb503aac13ead4dc97bd20138"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "8f410ea6b470a00f3636307be84ce803"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "06b07a843b0fcab37eb9b3008387642f"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "316940e3a8b26b36c6e90b7e333a410f"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "8205678b6081e1931973f163b814df88"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "514fdf2689376aa9e6b2b570254dbb35"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "f12f8640fbdb9671ae82533be75007e2"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "0119fe0f9064d9e8fadb46d87545537f"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "a5c4dbc4009ec1f467c6131409494645"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "dd7581e590711e2fb5433b17184942b0"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "207e234948972e9d19b1af8f1232936a"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "8c7572d567a6f55b153ce13cf496bb5d"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "6085dc7c7e32a3c8573d9e39ee358d13"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "4dfc1753f5fe58c2db9ebb43e1ba17c5"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "ca289da4341d477b0eed3a4cfd971d41"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "6dc3d4887d4a62aabbb0eff89475af53"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "393f9e095ec9accbea4970aef75bc6ff"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "618ab8ebc782c1cdb69e9f1019e13f62"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "20ad34c98ad5843367b6b47c161f4db9"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "8f45a515351c4c9a56d388f3eeb276c9"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "0ba35e553fa96283ef4f35d456ac91fe"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "1e587a9db9d80a1fcf4ef55236a7fa52"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "bf70fca51bde9b1d1baaeb809c21b6a4"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "6e35ef1229b34b5d109d831809b41025"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "8ede3c0ffb924dba711b6bbdcd927138"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "ee77167124abb56ef69e4dbd5fc94ab3"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "9d61a42158286d16a135ce4277565b89"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "d732bacfc4f9d8448c3882c34218b5f6"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "7f6ece616f059bc289f0d1b610ec832f"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "d72176de90a279cd3bb082ddffc0b290"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "404649ff3a45916316789458a978542a"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "ad81665f9f7896a46303c4448e5f9477"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "381644b04092e893a2ba1c5ab33e69c6"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "58ce8a75ad936ecf75943c5673ea68a8"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "5192563a3fde4d64878424090eb7bfb4"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "81767dd44fe134dac3407e5e80ddc107"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "e7e8493e7afb2433227b1f0a17839d6a"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "17046ed307634c14382b56853eed8b67"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "26005e443aa7dab33e23f720ae7bc02d"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "07e2fb38533e89d420312dab6d31a90a"
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
