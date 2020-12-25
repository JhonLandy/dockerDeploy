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
    "revision": "81ab7cb8b24f8d847478cf43743d075e"
  },
  {
    "url": "assets/css/2.styles.86d74f57.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.3d1421a9.css",
    "revision": "080fc45c1bd2663e7786aee9937345b0"
  },
  {
    "url": "assets/css/6.styles.0e872e07.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.b43256f0.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.26af096c.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.15edeb28.css",
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
    "url": "assets/img/testresult.8843a16c.jpg",
    "revision": "8843a16c63d0f673422df61f0f234904"
  },
  {
    "url": "assets/js/10.eabbb89d.js",
    "revision": "48753aa85dba1d8c0ee29b604cbbcd81"
  },
  {
    "url": "assets/js/11.b0bc21f1.js",
    "revision": "f3105abb4972b03b0fc2a83cd5d3534f"
  },
  {
    "url": "assets/js/12.98efce2d.js",
    "revision": "3139791c412681e9df6f4bfa821f7e5c"
  },
  {
    "url": "assets/js/13.600c51dc.js",
    "revision": "fe6b2b362e48021cf20b133bf38aa68e"
  },
  {
    "url": "assets/js/14.eb0b7516.js",
    "revision": "1d606dfdaf147cf19336e25342db3873"
  },
  {
    "url": "assets/js/15.8bd4b695.js",
    "revision": "c2ef340ffd6ef94796237266b180430d"
  },
  {
    "url": "assets/js/16.cfff673e.js",
    "revision": "040112900900d50ea526abfcb936bd00"
  },
  {
    "url": "assets/js/17.b4a5419c.js",
    "revision": "b1836b6ed3e6d9c054e9a57657055b1d"
  },
  {
    "url": "assets/js/18.04187ca8.js",
    "revision": "50eefe14140c6703afa8befd60940c08"
  },
  {
    "url": "assets/js/19.d85ea0d1.js",
    "revision": "31799c16ff1cc9543194f0e51012a42c"
  },
  {
    "url": "assets/js/20.fa6f45df.js",
    "revision": "a8a3fe02599af44ffc3a43601ec6d517"
  },
  {
    "url": "assets/js/21.c4df12dd.js",
    "revision": "41d5c8f9a61fcf05b18855c7b6ca4095"
  },
  {
    "url": "assets/js/22.07afe41d.js",
    "revision": "bd11be01475503867668615db0518dac"
  },
  {
    "url": "assets/js/23.323c6b43.js",
    "revision": "114ff377967ec7a5b21c98d19796fed5"
  },
  {
    "url": "assets/js/24.8e2a89c4.js",
    "revision": "813663c5c3914448ea407b7a368bf89b"
  },
  {
    "url": "assets/js/25.b67b5eb3.js",
    "revision": "bdb9b8efe6c6e5d184de464cadf46221"
  },
  {
    "url": "assets/js/26.3306d57b.js",
    "revision": "a2506f366f23c454046c51c94677f3a9"
  },
  {
    "url": "assets/js/27.6a222735.js",
    "revision": "af1644a8678bcdca80e66c7c0431a82a"
  },
  {
    "url": "assets/js/28.34e5e2f3.js",
    "revision": "db678ccaa6bfd5e554e2463b12f92680"
  },
  {
    "url": "assets/js/29.4f9f13bd.js",
    "revision": "c9a8f08e9124e6a1a957d0a94a340111"
  },
  {
    "url": "assets/js/30.6d7ae910.js",
    "revision": "ca3d7a41338a9407f2e946d9718ccdcc"
  },
  {
    "url": "assets/js/31.7ace2c61.js",
    "revision": "7fa8d6a7354cb80ecf0eadc896a9f49b"
  },
  {
    "url": "assets/js/32.038069ea.js",
    "revision": "bbb8e5166d9c0ff8b8c8a7a041ae9fc8"
  },
  {
    "url": "assets/js/33.a8607770.js",
    "revision": "203ffed1746e3cd617251c65a5d68f68"
  },
  {
    "url": "assets/js/34.bb219895.js",
    "revision": "0d77262aaa6212ead89dcbe5f8a96b24"
  },
  {
    "url": "assets/js/35.8333effc.js",
    "revision": "3f005f67a4f9a561d64232ac0d45fb89"
  },
  {
    "url": "assets/js/36.9da81280.js",
    "revision": "1f2895755e46b572566d0a57c443d59d"
  },
  {
    "url": "assets/js/37.22a8d820.js",
    "revision": "882d3d898976c81cb43c7c7e66208f55"
  },
  {
    "url": "assets/js/38.f7b4a290.js",
    "revision": "cd0370d03dc27d313005d13706d1d814"
  },
  {
    "url": "assets/js/39.66b903cd.js",
    "revision": "e2e49399aa9da27b9ca6ca420760d8e6"
  },
  {
    "url": "assets/js/40.48527cc1.js",
    "revision": "9b9f26b4f5f210285611eddae90e33bd"
  },
  {
    "url": "assets/js/41.5d5a08b9.js",
    "revision": "d82566e13bf5903e7ee608f1986ebff7"
  },
  {
    "url": "assets/js/42.476d9632.js",
    "revision": "da0d024313aa13e3089299370352c53d"
  },
  {
    "url": "assets/js/43.f3a9bd09.js",
    "revision": "7605cabdbd94ed9184406ff0626e440c"
  },
  {
    "url": "assets/js/44.13bcc4fe.js",
    "revision": "dfba7b03cc75ec272007e5def849823c"
  },
  {
    "url": "assets/js/45.a623fd70.js",
    "revision": "ac33d37ccde4fb96f19a78ef1454935a"
  },
  {
    "url": "assets/js/46.ec587be8.js",
    "revision": "37b4b5651eaae66bed4c1119947c6a38"
  },
  {
    "url": "assets/js/5.3d1421a9.js",
    "revision": "058b646bd7ce3614d3151f2290a9c1f6"
  },
  {
    "url": "assets/js/6.0e872e07.js",
    "revision": "e2db7d5b8d9f18c6aedf05466345fcc1"
  },
  {
    "url": "assets/js/7.b43256f0.js",
    "revision": "64bedfe80a9b0bb2d51c7a44466aaacf"
  },
  {
    "url": "assets/js/8.26af096c.js",
    "revision": "00ba93e17ad10c6ea3a3bc5706a3de2a"
  },
  {
    "url": "assets/js/9.15edeb28.js",
    "revision": "b79870a25292ccee671304a8f5268152"
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
    "url": "assets/js/chunk-libs.86d74f57.js",
    "revision": "9140bdc7af5b7f2b8e93bd76d1102a2c"
  },
  {
    "url": "assets/js/runtime.9b87cea5.js",
    "revision": "35c18dd62cfdbf2ca33c0fac52a1bbd1"
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
    "url": "images/home/mockup.jpg",
    "revision": "8f0ebcb1b2685810cb910ed0a2980f16"
  },
  {
    "url": "images/home/shibuyasky.jpg",
    "revision": "77d3e465755dd1e46e93c7a145e26c43"
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
    "url": "images/sidebar/jest/testresult.jpg",
    "revision": "a5937ea69f5b0f1c3fe1f909dfa6af69"
  },
  {
    "url": "images/web/lifecycle.png",
    "revision": "6f2c97f045ba988851b02056c01c8d62"
  },
  {
    "url": "index.html",
    "revision": "5c0c47fb611d88737b53e7dd8b2f065f"
  },
  {
    "url": "nav/code/index.html",
    "revision": "f0b3f34ed43884a1cabab68237f3d12e"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "181c595c752349e02c48d21ea3301e3e"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "4596d5d7a0b96e2ec0d517cf344ed2e0"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "a6cbe751f96575f94371198cd1fe50aa"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "9e86d36fccd5d72b650e48c5abc70979"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "67ab4e4ee36a43a073b1a21c01765781"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "34a499e981e6b15c2ea90a60b3137746"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "c2eaa97a0d1c0e4ee37e76f198fc513b"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "8adbee05ee184c044985f05c3642c87f"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "365584caebd63c0ec6f21de4effbf6f0"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "c4f60555278eb437dfa29f082176eb3e"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "4a145df8aef49432104555557637d736"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "bf269121352e2974dccc9a8829545f57"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "d9e8f5dc1869bfd960ec062cb0d83ad7"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "9f256fb7be10dd42c155455784fcce35"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "9575885222e1cd5914cfe5bc09fef3d4"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "5471e0aa6fde207dc615607eb50ed92a"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "c4c0e76b735f5da18969681b04cb692b"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "217de26836481bc9356f44d66b86f902"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "56332985f0cd906179150d0d0e170b96"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "3be9a38d10d4d2e7142a8a158d587394"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "f7c9d213b5b13c364b8e762c8452067b"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "bc55fdfe15fc6c1c179cde6142703a0b"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "412959772c4e0237588a89a5746f0f2d"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "47b6f4db012c68af84dbb9605ff08c4d"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "ce18a91a4d5b8304d1bf5b577c57b642"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "e46d8a03db05117c8b76b485936108b1"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "6bc29fd766db20c940b025abb1c556dc"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "228d1ba70ab702fa1422c4b74f2c5dee"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "0e96290307b96168671b633cf52f67dd"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "6203a79231b47554dfd3dfe7b00e9719"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "94c742632fef701d46a9b5a2985ee201"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "3bab025b9b666c2501d99591d99048f7"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "fd48f12e61124434be453e2bdbbfaec2"
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
