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
    "revision": "b9dc22b54ef3956536a91435b9cd31e5"
  },
  {
    "url": "assets/css/2.styles.69797f83.css",
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
    "url": "assets/js/40.7168a5a0.js",
    "revision": "a163490d18608aba3e80d00e3c9577bf"
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
    "url": "assets/js/44.ac8d8b6d.js",
    "revision": "35b6d8d896692cd63e69cae6a3adaa1f"
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
    "url": "assets/js/chunk-libs.69797f83.js",
    "revision": "ee1d6bc21e1f346efaa5877427a80072"
  },
  {
    "url": "assets/js/runtime.7d8690b7.js",
    "revision": "5a513f30537cf295e67c7af44b1b695e"
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
    "revision": "461e78b06e7dfec0048c7dfb714562a3"
  },
  {
    "url": "nav/code/index.html",
    "revision": "1d1540d1d63ace833440f7202742d4cf"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "1f52b9367adc2eec7d724582c45b5bd4"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "4431b1e692d459be25eb6cbbf78a7b51"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "8e826c045cbe5060a154cfb8564a6d67"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "07147af997e45ba22574d6185bb5ddbe"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "9c7adc994164146641d09760980463a0"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "7e9187dd15f913ae12367b42ecdcef02"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "e6b47da50f9126ca9a0ae7e01c8d5025"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "e7ebe161ef35be4f86ecc47f780b2fd5"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "94986c4f770bd2602351989c3582254d"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "67c13d926dcddf05fb32d024e494a4c1"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "799b6749e1a22aec947fc7bae8639bf9"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "b79771d899746215d7e2dbc6cafe9a1c"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "6c924f28b15198514fcd8e1a8f048f9e"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "d73eb7374c920b12e7169d29fa619597"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "2a8fa5a13aa2b76f6a4f4db5765b3895"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "62b3fd06c87218fdf680a3109207d506"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "56f6bcf96b5cc43b08ee28b20f585165"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "4a33b6f0af4da52f74940df24fbe733d"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "86cf5974e299c9c45b321421516a1975"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "611bff3a93e0fb92522b5ea18fd213fa"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "635b11cbaea321bd8b048ea794de733b"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "5a41a09049d979ec8f6445b60c6a6809"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "f6aa58bd008061d44e4de7ecb9655d1e"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "bafeb23e1fb6397f631761ff5a574e71"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "2867d1dcb5ca2e1234033682e1a9434c"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "4ec97f6192bc18b5d3bcd9ca5e10d007"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "94e195842f244d4a6e8cd1ec1f4bc09f"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "8f708a44dd9e990835d94e62b3619c88"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "34dc7d4b62a60fca92dbc3b64b1afb9b"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI.html",
    "revision": "82ea506bd5284ee5f4ccd55025bce43f"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "a7930edef103d9d905a984170ffc1ade"
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
