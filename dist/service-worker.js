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
    "revision": "ea7607655f84ab04bc143de0142f18b6"
  },
  {
    "url": "assets/css/2.styles.f2009dc0.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.12678707.css",
    "revision": "080fc45c1bd2663e7786aee9937345b0"
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
    "url": "assets/js/5.12678707.js",
    "revision": "021d28c00f7288b48cba829f849ce10a"
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
    "url": "assets/js/chunk-libs.f2009dc0.js",
    "revision": "9c1ef4898bfbe539a1bde339bb3e27d5"
  },
  {
    "url": "assets/js/runtime.cabc7b1e.js",
    "revision": "d17ae486b509879a054122255ba3c898"
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
    "revision": "5ae60bea5e343a546be6153cb8ad49ba"
  },
  {
    "url": "nav/code/index.html",
    "revision": "2e32dda3a26535f11021b458e5bac297"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "b78289177601ce973e1325287212098a"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "b1fbaf9cd25db2e497f9d1be3ab7acab"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "75dba3209957b17175c36a5d9257a2df"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "e4c377099b6d54f19fe8d4f1f1d50e93"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "ada8e5da9bc1824d9a8af3dea1865bd9"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "3adf373a01c3b3fb508eca0fe6ba47d6"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "af05cdaeec5866cfd20ab664be0233e2"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "8bb6449fbc00659c179ec67717939677"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "346ce4cfab2347c69ac8df82a5a011fc"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "ff91876eb108154fe40cd8deb94df115"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "e8fa4479814dc7afd39081c0118e377f"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "6b597d64e318dd9e36ce3b1b9d796cc3"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "47b88dd7f395ca0c6416855c0e4bc8aa"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "77cd42d6c977f42b4f0a2f40332394e6"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "93e92a9a356fa1332c17ca0017da7d74"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "ee631851c78999ba47c8b9ee2cefb5d3"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "54419c6554a11ac5f39e71c8dc1ea0fe"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "c7c9c501ba1d58e842fae4b4ec39be6f"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "06978b908f807d03d64786d6ffb4e2e3"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "059682200ea64bd82613a25f9e01db86"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "a0ccdd8610d9b7c07dc8e3db52c6af0b"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "7d8718df836d928ac7de159c0a7036a1"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "e4aeb4396820006a731154b3e7b69441"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "1b70aaf1577dc781a5a3aa74134f9707"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "9aaeafa4155f1ab748785d28a9c251db"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "8fac24cdafb92cdf90a36c5b1944ebb7"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "88337b0c4ad97e897fc143367288ec90"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "15f84f188e058f56aacb10fb492e3f6a"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "c616111032d09dd1e86499bd9e5f7092"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "4b10f72e1da1219dfb943bd6074c8b52"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "6a8a7df990a8912f10fd7af60d6ef421"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "479b4f3e57797cf8f943bda327ba0b0b"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "8a823f11f8958107c4e45409058298ee"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "fb7d89d4ca97425bf443822f10722cc0"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "0e180c09b8d2673953cdf937f7c9d6f6"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "ded65a7a87592cca59d1b92569db7c4d"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "756dd529b8ddd90de54b43797732d9d7"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "c768a72f1e449464ad1ea68b347b46c5"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "5562ad4d8dbad6887b0a779990809d0d"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "49f86c97020cad6b5fd9885de4430c72"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "09b219302a7cb76916115896fc9aeffb"
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
