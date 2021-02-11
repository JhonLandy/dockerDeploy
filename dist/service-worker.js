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
    "revision": "5e2823cc5496ea0fce1fcf3adbf99eb7"
  },
  {
    "url": "assets/css/2.styles.435febef.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.3e6b5229.css",
    "revision": "d2577a6863c449c05dc91708ca3ac45b"
  },
  {
    "url": "assets/css/6.styles.7ea02fb1.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.a6f85598.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.544daa1d.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.cffa391c.css",
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
    "url": "assets/js/10.5b7deb0f.js",
    "revision": "2557ff86f6e8173858e1f9a23db7e7c1"
  },
  {
    "url": "assets/js/11.b7b71cf8.js",
    "revision": "3416fbeddc9c58e464440bcc67125391"
  },
  {
    "url": "assets/js/12.77e7c3c2.js",
    "revision": "dc76e2240d60cd4b7aabaf63bc5d20bd"
  },
  {
    "url": "assets/js/13.9cc83ec4.js",
    "revision": "5533046607e92b775478ddeea76ec7f7"
  },
  {
    "url": "assets/js/14.e1b0c8f6.js",
    "revision": "0486eed580a4545cd0178097a3a36b95"
  },
  {
    "url": "assets/js/15.f7fd3fdf.js",
    "revision": "5455795fba03b45827ae133950ea35b5"
  },
  {
    "url": "assets/js/16.1266f59d.js",
    "revision": "4cfa0d7f2a95bf4c695077baa31c53b3"
  },
  {
    "url": "assets/js/17.f76efd59.js",
    "revision": "902c1b4496c81f06cafd4f6950c869fb"
  },
  {
    "url": "assets/js/18.b82e3738.js",
    "revision": "6df6ec5cf5ff841789261d7263d7c31f"
  },
  {
    "url": "assets/js/19.1b9934c6.js",
    "revision": "203d5dd57eb2ceaa4df47bf6af07ff7a"
  },
  {
    "url": "assets/js/20.126164d7.js",
    "revision": "b5aff14b09d75f5b2102da6423bc4a15"
  },
  {
    "url": "assets/js/21.0558036d.js",
    "revision": "a9798578e8d155f4f37850ed81ff1d33"
  },
  {
    "url": "assets/js/22.fc9c24a7.js",
    "revision": "c20166a10f11c974dcfd5b880e58df3d"
  },
  {
    "url": "assets/js/23.81664bae.js",
    "revision": "4288c46fb7253e9dc723c904dea21a0c"
  },
  {
    "url": "assets/js/24.07f73aa8.js",
    "revision": "1a3439b67e90d066e2056b327969193e"
  },
  {
    "url": "assets/js/25.36adaf5c.js",
    "revision": "125a23753b6265922a09f3340570a0b8"
  },
  {
    "url": "assets/js/26.9ce2e76c.js",
    "revision": "643354a03ebf4b81a55c22de1632e5b4"
  },
  {
    "url": "assets/js/27.c183dbae.js",
    "revision": "6ca3ff8d5119db8b3f7adba173dbee2c"
  },
  {
    "url": "assets/js/28.ca6054f3.js",
    "revision": "1f87cbe0fc3b3bbc0a005bd33775f63b"
  },
  {
    "url": "assets/js/29.9d4120ce.js",
    "revision": "d2ad2c91583ef70c82ba17f179b2ac85"
  },
  {
    "url": "assets/js/30.fcb1ee97.js",
    "revision": "9b5feceb6be42324011d8d6907e99885"
  },
  {
    "url": "assets/js/31.84ee11e7.js",
    "revision": "6891017187a703c9767836be40041cd4"
  },
  {
    "url": "assets/js/32.7f697e84.js",
    "revision": "783a400a86742a690722799cda09295d"
  },
  {
    "url": "assets/js/33.cc1c0f64.js",
    "revision": "e963a4c830e460b524c45ce25da8aa0e"
  },
  {
    "url": "assets/js/34.46183db9.js",
    "revision": "e2083e2d32aaa81a5dd9b65c665fd12e"
  },
  {
    "url": "assets/js/35.a6eb7c04.js",
    "revision": "d26cae72aecd36dcfe8e411e12e37cb4"
  },
  {
    "url": "assets/js/36.54cfbf08.js",
    "revision": "60b0bfaabb20664f302eacf6bd3232e3"
  },
  {
    "url": "assets/js/37.6e7317a6.js",
    "revision": "5568c0308afba5eb1ce93762ccfba85b"
  },
  {
    "url": "assets/js/38.f60e405e.js",
    "revision": "dc0af2889b6dccc937e729ce03354710"
  },
  {
    "url": "assets/js/39.183dbbc8.js",
    "revision": "549d7068585ebb8c738283b7bfb407c5"
  },
  {
    "url": "assets/js/40.9ce63b63.js",
    "revision": "b2a334b7a1d347a4de5e2a9677dcc4e2"
  },
  {
    "url": "assets/js/41.fa399b4f.js",
    "revision": "f7b2831fea10db3b31542fb631414ee2"
  },
  {
    "url": "assets/js/42.350b1c49.js",
    "revision": "f361b08a3d8c5b8fbd4242f9a6bfb0cd"
  },
  {
    "url": "assets/js/43.e59e447d.js",
    "revision": "9f4306a900350bb2fac5d4da0f3e3873"
  },
  {
    "url": "assets/js/44.da4bae34.js",
    "revision": "d868307b597a47336a43ae2e051aa658"
  },
  {
    "url": "assets/js/45.d9713a75.js",
    "revision": "2fecf6bf5bd4d7f0c839cc9350fa5334"
  },
  {
    "url": "assets/js/46.519cfa75.js",
    "revision": "4db03c47c151bc24201ceb331d69fc5a"
  },
  {
    "url": "assets/js/47.a6ff8dea.js",
    "revision": "eb3b694d610c093f37ff3f4750c32836"
  },
  {
    "url": "assets/js/48.3653efaa.js",
    "revision": "d2032316961b29569825d5fbac7ad43d"
  },
  {
    "url": "assets/js/49.27f7b6de.js",
    "revision": "e01381f9e8f2588f9546057d60e1f353"
  },
  {
    "url": "assets/js/5.3e6b5229.js",
    "revision": "aaba58188dc7a5ef0d3233da09064bc3"
  },
  {
    "url": "assets/js/50.db1e92a4.js",
    "revision": "342ad368cb5101b9bb8e4537c4550b84"
  },
  {
    "url": "assets/js/51.fbaf8644.js",
    "revision": "d1d9745620e68ae63e1811d701e34744"
  },
  {
    "url": "assets/js/52.17ebbd58.js",
    "revision": "5a9ed54c190ada690d7b113e06737934"
  },
  {
    "url": "assets/js/53.5759dd47.js",
    "revision": "1a9b6dd612611bc0efc24b4e58094f5b"
  },
  {
    "url": "assets/js/54.309a3374.js",
    "revision": "7f3645bc2a73f71f9390a200bfb981f6"
  },
  {
    "url": "assets/js/6.7ea02fb1.js",
    "revision": "a810e3905241f20c37c35b7bff96ced0"
  },
  {
    "url": "assets/js/7.a6f85598.js",
    "revision": "64f00a6d99b3a5a9ed0c556a2a4eccd2"
  },
  {
    "url": "assets/js/8.544daa1d.js",
    "revision": "140769cec8fd3fa0a0d608bfb1f31159"
  },
  {
    "url": "assets/js/9.cffa391c.js",
    "revision": "50a06769c7d852208bc178497ffede49"
  },
  {
    "url": "assets/js/app.6cd4050f.js",
    "revision": "2bd6060d6fac5d6b47ca44281369b389"
  },
  {
    "url": "assets/js/chunk-elementUI.6ed22acb.js",
    "revision": "1fc1edcde0bcbea67a7622f4a084e74c"
  },
  {
    "url": "assets/js/chunk-libs.435febef.js",
    "revision": "bf4fc63c796afb83507d41f98f2d1e33"
  },
  {
    "url": "assets/js/runtime.c81db981.js",
    "revision": "a7d76682f3afdaae4d5f458553dea1dd"
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
    "revision": "0afaeb780ef83cd1afedef27145b2c62"
  },
  {
    "url": "nav/code/index.html",
    "revision": "8cf125854e60a0e34fc134dfdfff3e56"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "001beecd86c87e52dcb019464324aef6"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "a1710933e5cf3965a1da1cf43559dead"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "06882913232b8b2ce371afff5ab288e4"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "11faf509c662f73957f7b31109de4d41"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "63eb0fa66d6fc8a0278b703f2ce77c5d"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "307366c004db3959e23a55c8d37577cd"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "93604d4db2ce586f4f57f40100ba46e9"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "66c69c988ea63a84615e38a97fb44244"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "1f6f88598018b6ea429e4057b7cd6ef2"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "489c110429a1f9ea4a600200749a9b05"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "1a855c99585fa5ca7f6ff644fbd3a863"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "9fe1c34e5c3eebe2ae0e8e200bcce544"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "3a96eac95a53cccc73acd243c78a9fdf"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "b5f20282189ab5f22b042ff0335f6b3f"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "9ddf184b74b924cc99f2c92e02ae7e33"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "0b867e55aaa1d636e5228990b7f2a712"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "ee40e972ee29cbc3b8692fe726b18177"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "d1826265bd52429289706b81c38fc1d5"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "65e5fb88764b021f8c71e6613b122914"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "a3e02b2e4cd0b4fea663de9751dc9b0d"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "1846709f3737ed30bb61117eb7aecb1c"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "edccf26606b310da38fd9a4985d4622f"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "b3c28eead6229a3423f22f8ef575d197"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "074a59ae96aa7bfb774c2fb5e7ec2d63"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "3e18a9cef21ec05311df037cc2392577"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "0681e7264b461927f361a8a1f8078947"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "91ab4d8c93692bd620a4d7d021a7a734"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "e07cde14e9d9103f043e89e295a82b5e"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "178b81ba1363ae9c0fe5cf086c1fc8da"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "b8a36c4b039173b3779dde82fec8c1eb"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "3c7fb762e08ae3dd9943c662d0b41af5"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "221379819b8747f73c1ab472816309fc"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "2bcae0fbd701f4a4e7237687ac1882df"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "ceae0052c3208364d8deb68305b70b94"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "d54cf65fe199ddfca68c4b8a9b131795"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "36ff1cd633abe43a4dff9975795a5dfb"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "806dc9894bf5b62b222ea2c634e2059a"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "9c8c84367cb3bfcef05e327503889ba4"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "43539716299ee80327af02cf7f31d116"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "fe4f4214c235cf77f6264dcf2d975a7d"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "53e253197e8bedeb162121d47ef2fcb6"
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
