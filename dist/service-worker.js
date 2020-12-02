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
    "revision": "70d6cd0bfde393787b1756df2204a208"
  },
  {
    "url": "assets/css/2.styles.9a18216a.css",
    "revision": "e0c34c7f1d971881423a94c48defb7d4"
  },
  {
    "url": "assets/css/4.styles.1404d2cc.css",
    "revision": "ff00ef9a4e596f73d2620b1201051720"
  },
  {
    "url": "assets/css/5.styles.a756bd4f.css",
    "revision": "f0c4c4044ab1987ca9bd62f8a07272a5"
  },
  {
    "url": "assets/css/6.styles.406f1c99.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.cfdda384.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.d4f2c924.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.d6ba6488.css",
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
    "url": "assets/js/10.137b740d.js",
    "revision": "5275a763c32c62affdc9df6fb8f7f50a"
  },
  {
    "url": "assets/js/11.92735e02.js",
    "revision": "b5d5d948cca52535697a59af6c480cf2"
  },
  {
    "url": "assets/js/12.46e28ebb.js",
    "revision": "824f0d0cb0cc3efe41729e26c28e49b6"
  },
  {
    "url": "assets/js/13.3c1f4d26.js",
    "revision": "ecb0d951693efb03321fe6ae652708e4"
  },
  {
    "url": "assets/js/14.0beec0ef.js",
    "revision": "953c1f241a9db2e3b0c4df4eb39eaed5"
  },
  {
    "url": "assets/js/15.34672c4f.js",
    "revision": "4b13e68d28be5ac43841dc0b3cd4ec35"
  },
  {
    "url": "assets/js/16.59f48bd6.js",
    "revision": "4f51d2fbf182c232bdc2d7f017561cc8"
  },
  {
    "url": "assets/js/17.b158e126.js",
    "revision": "304901465123163fbd06017ddc911fe6"
  },
  {
    "url": "assets/js/18.3fd74b9c.js",
    "revision": "46b63ccbf30580489745055a80827583"
  },
  {
    "url": "assets/js/19.c24f279d.js",
    "revision": "4e2bd91bb975f8ff8bcc439d47158f60"
  },
  {
    "url": "assets/js/20.e40d593f.js",
    "revision": "2abaae464c604f6b69b9eb7fac9c1504"
  },
  {
    "url": "assets/js/21.01f2efb0.js",
    "revision": "381a4c428109ecf5b4f5d49781c05cda"
  },
  {
    "url": "assets/js/22.0c456506.js",
    "revision": "89fb3b46ba9f6a39120b98098cbaa922"
  },
  {
    "url": "assets/js/23.06dfcec7.js",
    "revision": "da68d4e076b368cddb259ad3d8188ca0"
  },
  {
    "url": "assets/js/24.a67e16af.js",
    "revision": "8beb4049fe74916f47e395d4b1fe0b7c"
  },
  {
    "url": "assets/js/25.200e7c25.js",
    "revision": "b6d4074afd4d65adb502f474ff7695a9"
  },
  {
    "url": "assets/js/26.5dcc3427.js",
    "revision": "fd771e130ad19d4207c45733256ef270"
  },
  {
    "url": "assets/js/27.95d5b920.js",
    "revision": "78d20a7fa3cd2b37aece92a0542f927c"
  },
  {
    "url": "assets/js/28.8d0dbb8b.js",
    "revision": "88e2fdfafc04bd9450bd37b17440f49f"
  },
  {
    "url": "assets/js/29.b0b814b6.js",
    "revision": "8e8f14fb11a147aae37d501837b2b5a1"
  },
  {
    "url": "assets/js/30.0f970f6d.js",
    "revision": "8777b2e0541de0546a3d13cd8c7f87c9"
  },
  {
    "url": "assets/js/31.b63623d5.js",
    "revision": "253602346e7bdcae851e4f855eebcb24"
  },
  {
    "url": "assets/js/32.0d3cd5d7.js",
    "revision": "2b3d5096d9ab27ae4047a8d34ec36784"
  },
  {
    "url": "assets/js/33.4f542813.js",
    "revision": "79d58f62032f6490517d40f7ac07ecf3"
  },
  {
    "url": "assets/js/34.b6f763dc.js",
    "revision": "6ab2a9403a7f5876b271c389a7607b75"
  },
  {
    "url": "assets/js/35.d9bde38c.js",
    "revision": "8c1f795d0f99c71455cde03b349020b3"
  },
  {
    "url": "assets/js/36.dc508853.js",
    "revision": "a7848c9c06f4ed5d9b51bd4e3ed47bb9"
  },
  {
    "url": "assets/js/37.88c25192.js",
    "revision": "42c19b30c337960898a8183a42d6827c"
  },
  {
    "url": "assets/js/38.388db1bd.js",
    "revision": "947e49808195653ca3278da43eb5fb6c"
  },
  {
    "url": "assets/js/39.2a597437.js",
    "revision": "355657da4580b519ad085e8272d22f55"
  },
  {
    "url": "assets/js/40.4052e19a.js",
    "revision": "597c13926ef3903c67ce094f0bc94cdb"
  },
  {
    "url": "assets/js/41.5f4b647d.js",
    "revision": "a4550752c1156781d8175d8c70c5bd10"
  },
  {
    "url": "assets/js/42.58c585ae.js",
    "revision": "1fb6e1a2a08a222fe3f24962d626d62e"
  },
  {
    "url": "assets/js/5.a756bd4f.js",
    "revision": "71381d40e5364ce220c277f68af01c2f"
  },
  {
    "url": "assets/js/6.406f1c99.js",
    "revision": "88f93371f6c81ba0be2982419485e83b"
  },
  {
    "url": "assets/js/7.cfdda384.js",
    "revision": "905083ff62fbc7c8f53e95232b8906f2"
  },
  {
    "url": "assets/js/8.d4f2c924.js",
    "revision": "ff687bceff029fa7f1646a15a199059f"
  },
  {
    "url": "assets/js/9.d6ba6488.js",
    "revision": "48623b2d67648df3587793fd8e3a99e5"
  },
  {
    "url": "assets/js/app.94f1ab33.js",
    "revision": "f84cdb8eafdce01ec495404f86a57e78"
  },
  {
    "url": "assets/js/chunk-elementUI.0c2e8366.js",
    "revision": "e8e71eb0d8f0216f3daed1a23984533e"
  },
  {
    "url": "assets/js/chunk-libs.9a18216a.js",
    "revision": "deb1cf308f882294ec07555f26406a6b"
  },
  {
    "url": "assets/js/runtime.eb482314.js",
    "revision": "643d8b2719a9a7ddb4605b29578a8864"
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
    "revision": "5986ffdf2e5668e77f9e7daa9a830f81"
  },
  {
    "url": "nav/code/index.html",
    "revision": "489b545583bfe2ce50a1af5011024161"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "2357c456671620cf4541e5f2f2fbbdc2"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "1d6b655815136b9c246c2122461443ea"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "33cb9e8f7d08d9758cda96aff620b2fb"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "e4e7acd1850e33fea608c9c6d8e3c191"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "e5622fb557da0836a60b9fb3123a68e8"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "e3159487e214a8a60d485ab77db0d8e4"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "359a5730d2513de77b1842e5bafdf1d5"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "deb758c6f09bbc839831b71607e2c822"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "aa23b99e48af776c8d36db49c33d9dc4"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "171aab198cfc4275dbeb758a57e7df06"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "31882b83086c7dc7cf2b86ab63231f0b"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "c6c66f27021f7dc573ede0ae1105dd8c"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "006e4d33f8bdd9f8c90529b94729f0ec"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "8b471f1250601a32b77c3831a976dc83"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "1fb3041a775b222f18671295d87934e0"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "b7fdb55d8da1c66e1623a145c0e33c73"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "132e2fd50506c86f6d4653ca8e538d4e"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "62f81f66a53a6e0b9e2faf51bca6d611"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "a1fbf93a90b60e85e9d90928d21cda3d"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "af6f7f321d8f35082149691b1a45cdde"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "e951e5a512b5f3966df28b767d3c26fd"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "3d8d6fef33f51e13a84502a20250e5ae"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "e38a76dc1b5d1c4c01037d811e22b860"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "7bd69e89375a93c6f8251765d10a927d"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "70ced3a3d522403071e49211429f581a"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "6a82110ec4f6c572a76c1999742dd4e9"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "0e7e3eea749766d1f4287bad16d86be3"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "390b4cf28736b2c4b7f65486ab74a93f"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI.html",
    "revision": "19a502b2c67685213105e3bb812bef91"
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
