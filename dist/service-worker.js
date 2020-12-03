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
    "revision": "0141b4552781c7d96158d611b13fe397"
  },
  {
    "url": "assets/css/2.styles.cfdc3936.css",
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
    "url": "assets/js/10.64078e6e.js",
    "revision": "f95de0795a1446bd907d59b478c855de"
  },
  {
    "url": "assets/js/11.f19012dd.js",
    "revision": "2ba46cddfaf57d2e4cdbb59e226f775c"
  },
  {
    "url": "assets/js/12.facd9b9d.js",
    "revision": "399c966995dc5e0f24702ef51e465068"
  },
  {
    "url": "assets/js/13.4a8f5028.js",
    "revision": "a0f9fd80fdaa59205901a36e6f99b204"
  },
  {
    "url": "assets/js/14.6778b576.js",
    "revision": "412dc071c3dc0815921b33a97dcc24fa"
  },
  {
    "url": "assets/js/15.3c5482c6.js",
    "revision": "90a99996433b4a78f1c506ffbbd55531"
  },
  {
    "url": "assets/js/16.01e094df.js",
    "revision": "37cac83a46f9e078fc0badf19a7b224f"
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
    "url": "assets/js/21.a94a1bd1.js",
    "revision": "b5ddfb6be8cac877b020668b6efb136a"
  },
  {
    "url": "assets/js/22.c22e7dce.js",
    "revision": "a9e7552e09608c58494de831ec205cba"
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
    "url": "assets/js/28.d9e8e8c9.js",
    "revision": "56cc85b611b7c1025570336d54feeaeb"
  },
  {
    "url": "assets/js/29.d144ecd6.js",
    "revision": "22c5c452326e7def8a762446206b5f53"
  },
  {
    "url": "assets/js/30.e2c44d90.js",
    "revision": "237b78024bdc25bcaa9eeac5dab3d9e5"
  },
  {
    "url": "assets/js/31.964a4a78.js",
    "revision": "aea4e77c9e599c3133d4517b190ca008"
  },
  {
    "url": "assets/js/32.838d88a2.js",
    "revision": "2a97ba9d6b05bdb39af5df564980f3b5"
  },
  {
    "url": "assets/js/33.57f166b7.js",
    "revision": "b40789601a6589a4b56582415177ef36"
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
    "url": "assets/js/chunk-libs.cfdc3936.js",
    "revision": "7102f416caa8729c12dcaf820e95b93b"
  },
  {
    "url": "assets/js/runtime.9fad3d0c.js",
    "revision": "5460976a9ea98504ef5e4382b4b87ff9"
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
    "revision": "4f1c94bd6d764e2db06a8c6c7840deae"
  },
  {
    "url": "nav/code/index.html",
    "revision": "0110b7b7f6f247c655e19ed82e543000"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "1048beef83a95e4ebc250e500c26eee1"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "74ceef67968e952efcb2d8dd73731e25"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "a2d73d1a3978abd57775674966394169"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "f4d5f71bc9e0f92cf442cc83e9ea4d69"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "59a8da42795a3020ded0b7de913a21a8"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "155f9146acef19136a9ddc382729ed05"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "f008bb166a827a43333c1d344b2000e9"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "1bfae001efd45b518d0ecb954eff8ba7"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "eb03d74008628230cbfc33dc1a7d1e7b"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "5c69f85a7597fd02e2bdd8a01039dec4"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "50dea8b414d9ddeb57ad49c17e0ae418"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "2303d91f8832285e873db252162f984c"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "547a4fda1e395995700972bea15b0f92"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "4567fe9148aa583c634fa44f6b60f753"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "51ef06474a8accbeb77734308ba9e43e"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "01dcabd519fa28fa22bca4815bca706a"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "e94575e40847f0bfe92554439c4e9b06"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "1d1d1b38d85ce9c4e4e9b566bac5f6c8"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "61dfc4c2bbda841ff7a01ad29f6b0287"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "f12d7e55dcc138746835cc7a9ccf570b"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "320b0496d707875a73d9335467bdcf27"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "52da6ce0bc095a714566714e561af103"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "1b54f939bdf38c57cec1277337cc4929"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "6a6b74f28b8fd5e526bd3c345b15b77b"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "4be710c1aab881af1286b57f0d3c3e1b"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "82453fb4c0674c00435b1f8473e10663"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "d997460c8f92852fafd38381daa88b93"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "c015c4b2d575c94fbdcffa5e76dfc789"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI.html",
    "revision": "d6acb70d391aa568752d9c467f812035"
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
