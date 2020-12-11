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
    "revision": "aed8142a8d6447b9134d2c83f6573cfd"
  },
  {
    "url": "assets/css/2.styles.2e38f7ca.css",
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
    "url": "assets/css/7.styles.1361096f.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.d4f2c924.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.61c0b8b9.css",
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
    "url": "assets/js/10.656c37f2.js",
    "revision": "69f5942ead51bafa02dff157c41fee6e"
  },
  {
    "url": "assets/js/11.bf668b3f.js",
    "revision": "58f1c0f7d9535b80817ba0ca8fceb28f"
  },
  {
    "url": "assets/js/12.026395e7.js",
    "revision": "b921198af234c7a000a3e32800104ddb"
  },
  {
    "url": "assets/js/13.4a8f5028.js",
    "revision": "a0f9fd80fdaa59205901a36e6f99b204"
  },
  {
    "url": "assets/js/14.cfb624b4.js",
    "revision": "f7c1adb4b07b31796b96302c33af6c17"
  },
  {
    "url": "assets/js/15.efc79ebf.js",
    "revision": "8c00c7f15c67d064466d462a9e2e8255"
  },
  {
    "url": "assets/js/16.476c052e.js",
    "revision": "985af5266579d85cd01613467392a4b3"
  },
  {
    "url": "assets/js/17.7503cae4.js",
    "revision": "2f7c069726a5c2843a5be8d43d8a7b46"
  },
  {
    "url": "assets/js/18.f4b7c3d0.js",
    "revision": "31588f2bf52076afc076bb8656455e26"
  },
  {
    "url": "assets/js/19.44aa37db.js",
    "revision": "fe063c12f53691c0641da98ace263f3f"
  },
  {
    "url": "assets/js/20.073ead7a.js",
    "revision": "57c3ba71d95ba82f0f5cdba0fb2aac3a"
  },
  {
    "url": "assets/js/21.5e1fc9c2.js",
    "revision": "0715d72426404df8ccf2c25d478a80ec"
  },
  {
    "url": "assets/js/22.56f95b48.js",
    "revision": "3f7edd432ff6b29ec3f2779ef11d88de"
  },
  {
    "url": "assets/js/23.bd24681e.js",
    "revision": "585caa3ce0b1e18007671c8297257947"
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
    "url": "assets/js/28.5b2fa19a.js",
    "revision": "8eec8c1a1bed8bd6799d3df7b2883547"
  },
  {
    "url": "assets/js/29.ccf055e6.js",
    "revision": "b7bb3c8dab34ea6d9c0e27c35c6b2e04"
  },
  {
    "url": "assets/js/30.ac538caf.js",
    "revision": "43a37d149fde4c6a3cafbd97d7404663"
  },
  {
    "url": "assets/js/31.d800e069.js",
    "revision": "3b69e2670856256ac5c848eb4a1009ca"
  },
  {
    "url": "assets/js/32.3da3192e.js",
    "revision": "fabec8d06411f106480dc0217a9ed6ef"
  },
  {
    "url": "assets/js/33.8e3ce943.js",
    "revision": "e6b6f547feec086987c8561dd817094b"
  },
  {
    "url": "assets/js/34.db154d84.js",
    "revision": "353973c0566534b479d1dd30073d16ec"
  },
  {
    "url": "assets/js/35.7e582cc1.js",
    "revision": "ec6f8c7be345f1f7ef4922437d072b4a"
  },
  {
    "url": "assets/js/36.dc508853.js",
    "revision": "a7848c9c06f4ed5d9b51bd4e3ed47bb9"
  },
  {
    "url": "assets/js/37.251cd324.js",
    "revision": "1c280a2e3d057e4ce6733f6e65ed11fe"
  },
  {
    "url": "assets/js/38.37dee9b0.js",
    "revision": "53d7d31956e7e7e35bae75940d767531"
  },
  {
    "url": "assets/js/39.fa483c0d.js",
    "revision": "978635925bffb8227e15138d774b337c"
  },
  {
    "url": "assets/js/40.f02d5bd9.js",
    "revision": "bd0bcf63ca1e007ddc5f253760441e61"
  },
  {
    "url": "assets/js/41.0d43c6df.js",
    "revision": "9ef94348e1a9094cc5fcb2f3dea293ba"
  },
  {
    "url": "assets/js/42.6047843b.js",
    "revision": "7be8492faa2c522240884b46236bdf0d"
  },
  {
    "url": "assets/js/43.adeb111a.js",
    "revision": "8ba9998ffb2a05b927f600e0e3ffdf5f"
  },
  {
    "url": "assets/js/44.4057d774.js",
    "revision": "6691185db3c55a0427a334e0a1ed293f"
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
    "url": "assets/js/7.1361096f.js",
    "revision": "e06245a9dd4ca5a2de81b2b2e902056f"
  },
  {
    "url": "assets/js/8.d4f2c924.js",
    "revision": "ff687bceff029fa7f1646a15a199059f"
  },
  {
    "url": "assets/js/9.61c0b8b9.js",
    "revision": "869c25f271baa23ceb2e25b74aae00cc"
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
    "url": "assets/js/chunk-libs.2e38f7ca.js",
    "revision": "1af8946eeb3f8a98da2a5990cc2afa9d"
  },
  {
    "url": "assets/js/runtime.a74da21f.js",
    "revision": "0febec194faa695ab35027d45560b452"
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
    "revision": "1b60034d427be14f1313a4bf6180d44a"
  },
  {
    "url": "nav/code/index.html",
    "revision": "5dbb30dd76938533255f3e22a321f455"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "5b5f6fd9cf03e0c53648b244d24badfd"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "a841f3ce63ef0b781105dfeab6f400ef"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "5035ad91445096159f8e4dccd3f271bc"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "7b8c6eb8b2e3bd46e43e17437ba4448d"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "3c137b58bdcc0ab0cb8b1fa7f702496a"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "fc44f64d9c9885337772dc8ce006b664"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "bb1b361621c516cb0157703b63be5353"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "125258f23e2d3c8b7dce74a2f8cfd3c5"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "8d48ebcce3835c96b9f046f9fb066119"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "a8dfcc121312ae710ea606871a919305"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "4cbe382be452e8a78ad1639f9ead854c"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "4abfd99dfe081ff02af94ec70c06ab8f"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "6a8a34e4fea735ed5735b0191c3754fc"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "582725bdadf79a61e92cf1d45d24c8c9"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "0904c9995c34f6a012a27b206f29939d"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "944f2f89cf9a3af0bf82999e2ceae6ab"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "229bd15810c120cf44ced82e5a8f4591"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "dcf7479ce2f82627577fb44897b64c3d"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "e1d831f8fa11e2ffdd99abf10a37f60a"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "8fa4d918acf2f5e9b6b09644407e1f33"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "aeecb98d8d87a61be1ac0bb22579e267"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "ceb7834ec3d9c47609221741ace85be3"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "d6f1c0bf026b08d1794df60567a04daa"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "0050d9c4ae45ce85d8ba9d48f0a856fa"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "b8d9098c37ef9cedec8d7c5efaceae71"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "b633a863af797f0a9f9b100c4e4c2e02"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "93766a3629598f8b3de1b09dbb36cd7d"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "e51550f1f9cf18eeea24a96ce53f564a"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "3960c34dcc770fd7e40f9b7126c07f4b"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI.html",
    "revision": "744d2849d2eab84123a9ae316de11d55"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "b69e7d40dd88261146bd166db6bf00de"
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
