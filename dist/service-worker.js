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
    "revision": "2e543488039e67e3fe1bf291fffaeaf9"
  },
  {
    "url": "assets/css/2.styles.e193d120.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.7ebde17e.css",
    "revision": "080fc45c1bd2663e7786aee9937345b0"
  },
  {
    "url": "assets/css/6.styles.ef9b7f6f.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.cad0b9b2.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.4694fefb.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.649446e0.css",
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
    "url": "assets/js/10.afd96ea1.js",
    "revision": "d127a29c44ecdb6381608c440adfd6b9"
  },
  {
    "url": "assets/js/11.6168b895.js",
    "revision": "bcc8b08d2184b6e36a65f1d4603ec82d"
  },
  {
    "url": "assets/js/12.322e1ad7.js",
    "revision": "25dc644c3b472b6f86b9311fdda70ca5"
  },
  {
    "url": "assets/js/13.7061da8d.js",
    "revision": "d23b47108bd861c32cee3fce0a338158"
  },
  {
    "url": "assets/js/14.860e9209.js",
    "revision": "85b9e65e10a92d0cbeaec070dde215a5"
  },
  {
    "url": "assets/js/15.306ffd78.js",
    "revision": "7cf0b2f235cb10e60f34e76ff79d3e3f"
  },
  {
    "url": "assets/js/16.839ab2f7.js",
    "revision": "e2fa92af2ff5d2331a73e973e023fd76"
  },
  {
    "url": "assets/js/17.8b19d34a.js",
    "revision": "18721f38b7b8a309bdcff5f2836a371d"
  },
  {
    "url": "assets/js/18.fd94bed3.js",
    "revision": "bef72e183ede5f345878c79c9c19ed58"
  },
  {
    "url": "assets/js/19.9295cb2a.js",
    "revision": "2b0d94b06412fedf5f4006fe350d5624"
  },
  {
    "url": "assets/js/20.414ea31f.js",
    "revision": "e3a150ee11dea8a29c83dd28bcf86739"
  },
  {
    "url": "assets/js/21.e044d643.js",
    "revision": "da64d1255cbe250c9e9762d2f0721696"
  },
  {
    "url": "assets/js/22.b30a0039.js",
    "revision": "0092a32106f44a06ed7032bef3d41f13"
  },
  {
    "url": "assets/js/23.2ec37773.js",
    "revision": "af4d9290fc57eb745331db5c59577028"
  },
  {
    "url": "assets/js/24.26e6a676.js",
    "revision": "d640363a52095f6fc8be5c8103eeb34e"
  },
  {
    "url": "assets/js/25.6ff47088.js",
    "revision": "003a90004a55489516ed496bc097fc42"
  },
  {
    "url": "assets/js/26.a4acc259.js",
    "revision": "878121dfa016c2c73ed879058b5385bd"
  },
  {
    "url": "assets/js/27.74777cfa.js",
    "revision": "65b57b87b73f85b1bd67a3283b7b5442"
  },
  {
    "url": "assets/js/28.eac9a868.js",
    "revision": "b0b7e89975b7311b00475ef65e65251c"
  },
  {
    "url": "assets/js/29.d6d8a53d.js",
    "revision": "92c2232156ceea0bd8360a6c4f655e1c"
  },
  {
    "url": "assets/js/30.338f5a4f.js",
    "revision": "7eee8d76c52f38350cbe5e74383cd817"
  },
  {
    "url": "assets/js/31.631e88e5.js",
    "revision": "a14c78c7714c22ec605d4b05cfcf9fc6"
  },
  {
    "url": "assets/js/32.a38d9045.js",
    "revision": "7d704b81d95f77593bedaf0e159d59d4"
  },
  {
    "url": "assets/js/33.84128147.js",
    "revision": "6e9c867ac013025f239d09397b7ebf1e"
  },
  {
    "url": "assets/js/34.cd4d9261.js",
    "revision": "123bf0121f1ae3f098c68176d1b580dd"
  },
  {
    "url": "assets/js/35.8edbec5a.js",
    "revision": "bb5d36a807dfd8d0da33ef16c3b7bca1"
  },
  {
    "url": "assets/js/36.8258267f.js",
    "revision": "56bf3612d7313736403c643a2d727366"
  },
  {
    "url": "assets/js/37.1bc4fe58.js",
    "revision": "4b9f057c1d8dec083bc0bd0bdd22c971"
  },
  {
    "url": "assets/js/38.34ed8f3b.js",
    "revision": "61ca7a65a23230af3916425332bfe10c"
  },
  {
    "url": "assets/js/39.5824e380.js",
    "revision": "ad8d7ab6a7a7ebb778f63a0abc8db966"
  },
  {
    "url": "assets/js/40.a5ac5cd1.js",
    "revision": "43a8df269faeddb08e3bd29357dfafd3"
  },
  {
    "url": "assets/js/41.8f758607.js",
    "revision": "3eff4eb285a128de51a5ba75cea358bd"
  },
  {
    "url": "assets/js/42.fc50d555.js",
    "revision": "cea315e0b1cb50ac2508b0bb6037a720"
  },
  {
    "url": "assets/js/43.294b838e.js",
    "revision": "282d8d4efdcb5aec04d6114da8337d7b"
  },
  {
    "url": "assets/js/44.c465b98d.js",
    "revision": "0be0ef1258929f032a7d23e1ab1d8fe7"
  },
  {
    "url": "assets/js/45.49c9e379.js",
    "revision": "72c65e22a7a653aa26d7aa432a978d30"
  },
  {
    "url": "assets/js/46.4b8b73b7.js",
    "revision": "6216f07558108128b519d0ec001f2f67"
  },
  {
    "url": "assets/js/47.5bd47b83.js",
    "revision": "55143ec6cebaf6f026943646d31eaf87"
  },
  {
    "url": "assets/js/48.8a34d338.js",
    "revision": "b014d3cd49a582b56660bd3aac793d8d"
  },
  {
    "url": "assets/js/49.0fa1ae65.js",
    "revision": "39e076698cbf76875cd6f1903ade4bcd"
  },
  {
    "url": "assets/js/5.7ebde17e.js",
    "revision": "8670bf92702c9b46bc5451c0000b8e3c"
  },
  {
    "url": "assets/js/50.0ba675bf.js",
    "revision": "87326051fd42102ca0219e62a4697ebd"
  },
  {
    "url": "assets/js/51.066fc67d.js",
    "revision": "568bc5200890c08b3af8cd0bf0a36f12"
  },
  {
    "url": "assets/js/52.c162ce39.js",
    "revision": "05c1dc53d1bfaed34c28a11ce284f9fd"
  },
  {
    "url": "assets/js/53.f1115937.js",
    "revision": "ea99edf6cc068158ce492dcb05443d91"
  },
  {
    "url": "assets/js/6.ef9b7f6f.js",
    "revision": "486ff65a64f55e724845826d156d7a61"
  },
  {
    "url": "assets/js/7.cad0b9b2.js",
    "revision": "a3e5560a88d42fd1841ce4c325f923b8"
  },
  {
    "url": "assets/js/8.4694fefb.js",
    "revision": "1b89b8a63de8c05dba26899bbb68d5f5"
  },
  {
    "url": "assets/js/9.649446e0.js",
    "revision": "3ae3a768595df7eaa616afc3f20bcd1e"
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
    "url": "assets/js/chunk-libs.e193d120.js",
    "revision": "e3509dc835e5f48662db057bedf96f01"
  },
  {
    "url": "assets/js/runtime.bd593600.js",
    "revision": "8dfaa95c4c23734a9bae5ba532cb5683"
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
    "revision": "bcb9c3db981f5ab2d0040c6132e59ed9"
  },
  {
    "url": "nav/code/index.html",
    "revision": "6ba01ca7bd64e752decc52008de914d5"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "55cdb70671b04548c43a6f871129c6c2"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "0a242b72add5c5165a5cc9f828f3338f"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "24d1193b31d09d8c0f47556d79520d67"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "fb81c77ded003af00a919b931010baa3"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "5e8bfae72edbd7b8deac9a1482aaa658"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "213ae884f44c2795bf571d51c28cd914"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "3c56cae99d55f5b0daec376365545608"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "385e250dca20174c6e8447a4a6d3e26a"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "51e50056455c56add184b03b095c3b70"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "3b20a655306a602911bbad306afba783"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "c3f9a33b3d3774ed34765685be36857c"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "6c24d802986294694e8995ca333b6d29"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "691c208df3155386287b7253130d29b9"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "8211a170c34f17da3fbf25388c26b44c"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "65c32afff74432c614d8ed2d77a15348"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "aae31ed8e6fec7c60076ebd9a6d9424a"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "99905d2a2482b71456e93ad6b1792331"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "62eb665abd541c070f7a8529cd40f54c"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "40c580927f60a1b7b08d500a37e33729"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "a0524951eef0ee813b50e8f9931ddfb5"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "1c32499b6f7c4def5f1b31a44f2cca9e"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "8064a5614a681cbbba86d39bd282ef26"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "de36769f0d5423b8067b7b30ca48b4f8"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "a6cd3fc7064bf68984b11a2add7a51ba"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "0cb9f6e2c868cd9b8d2422619637e6ed"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "28667ed1cdbd6e91e548212c131c9744"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "ba34610ecb210808e193e159ba5b4e1f"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "f40eae06cfc3603779f8033bc46cd2f7"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "176281745b4570cf576d9a86f33014fa"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "a311bd772a87beaccc55fe88739756c2"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "016142970662ed57a7b709cf5df690d2"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "1bb523e2a484554258059b202943204b"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "eec87c3ff724626c22bca2b3c1e9e3a7"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "8fa16ba75363ef79c2815a3a68a13824"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "a750ad69490af5a324d4d58f5ec798b1"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "772228a39ccf28a973ed04950eb1f4d9"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "74e148d9e8bcb77432deab304903e56f"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "98dc4b7e8d481dfe6143593544360121"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "40c1ada659fd76a65c8dab37da92709c"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "1329766f0bd28748ae104566db043edc"
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
