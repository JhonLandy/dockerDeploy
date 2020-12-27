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
    "revision": "625cefa0e746072199ed126556f921b2"
  },
  {
    "url": "assets/css/2.styles.c7eb857a.css",
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
    "url": "assets/css/7.styles.00553c38.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.4694fefb.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.82b6a9f2.css",
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
    "url": "assets/js/10.967206b7.js",
    "revision": "20e1590c4168e7adf0e408446479128e"
  },
  {
    "url": "assets/js/11.f6654345.js",
    "revision": "34ce0e321548e1d86f7aeda2638f4f8e"
  },
  {
    "url": "assets/js/12.e14626b8.js",
    "revision": "083fafb34373b6d8964a395b9060f6fe"
  },
  {
    "url": "assets/js/13.46b54f5e.js",
    "revision": "8c5324b9ac466e5335873302816ac602"
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
    "url": "assets/js/16.f6e33131.js",
    "revision": "cfaa55a042174f2b11f1a51eeeea046e"
  },
  {
    "url": "assets/js/17.c526dded.js",
    "revision": "3fae6ef47c11f1a90d385c2f7a81a62c"
  },
  {
    "url": "assets/js/18.07788211.js",
    "revision": "6949442698c338b7e380349b74cbe5ba"
  },
  {
    "url": "assets/js/19.5ebec144.js",
    "revision": "8675f64528a0fccc07c0f4926f45b372"
  },
  {
    "url": "assets/js/20.d52ec262.js",
    "revision": "ee607383053c2cbfed65b28112996dc6"
  },
  {
    "url": "assets/js/21.e50fa36c.js",
    "revision": "afabdee697c91a15f91836a3665658c2"
  },
  {
    "url": "assets/js/22.f3e9951c.js",
    "revision": "5251cd4810a01fd65417ae9e0b2c5145"
  },
  {
    "url": "assets/js/23.0768da9f.js",
    "revision": "3ac081d939151bbdaf00aa8ee43d4380"
  },
  {
    "url": "assets/js/24.6a9af455.js",
    "revision": "3b59f7b612560a05831561de4a0c31f2"
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
    "url": "assets/js/28.1cb82e85.js",
    "revision": "4845c75b07179d77937157735c93a068"
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
    "url": "assets/js/38.68800855.js",
    "revision": "1de469bc5526982c85d9e07807c721ed"
  },
  {
    "url": "assets/js/39.c45bded2.js",
    "revision": "fb0718ae247249ad7188ad21aebcff9d"
  },
  {
    "url": "assets/js/40.5c19b393.js",
    "revision": "d276a33601ed61f48b2181d09e955629"
  },
  {
    "url": "assets/js/41.7a61902b.js",
    "revision": "b8f0bef740b59dc901cfa8b8417df674"
  },
  {
    "url": "assets/js/42.582e0b1c.js",
    "revision": "a6af4d19e1f44b699684e79bf2913eaa"
  },
  {
    "url": "assets/js/43.0cf2663f.js",
    "revision": "bbc16ecd21faf6d5a1d13791b42fa696"
  },
  {
    "url": "assets/js/44.146a0a7d.js",
    "revision": "98fd23802e66a22b59ce98678ebd3673"
  },
  {
    "url": "assets/js/45.d7e60c6c.js",
    "revision": "414bf02131c8e0481f75e6a083921d86"
  },
  {
    "url": "assets/js/46.176f1c74.js",
    "revision": "0846b0a9ec995a1594f4edb5b9203ffc"
  },
  {
    "url": "assets/js/47.0d2930da.js",
    "revision": "bf210b42cc3be68184d7cb87ddb43a51"
  },
  {
    "url": "assets/js/48.8f0e1dc4.js",
    "revision": "43180676c72d071ed3b36f986afee692"
  },
  {
    "url": "assets/js/49.ac7bdef7.js",
    "revision": "39e076698cbf76875cd6f1903ade4bcd"
  },
  {
    "url": "assets/js/5.7ebde17e.js",
    "revision": "8670bf92702c9b46bc5451c0000b8e3c"
  },
  {
    "url": "assets/js/50.93044a55.js",
    "revision": "87326051fd42102ca0219e62a4697ebd"
  },
  {
    "url": "assets/js/51.10f85b34.js",
    "revision": "b9a4bee888b3d44f9dc86e2c213741dc"
  },
  {
    "url": "assets/js/6.ef9b7f6f.js",
    "revision": "486ff65a64f55e724845826d156d7a61"
  },
  {
    "url": "assets/js/7.00553c38.js",
    "revision": "86d9bbe1ba2bac05227fd7ee3ba53d76"
  },
  {
    "url": "assets/js/8.4694fefb.js",
    "revision": "1b89b8a63de8c05dba26899bbb68d5f5"
  },
  {
    "url": "assets/js/9.82b6a9f2.js",
    "revision": "d2ef99c8f7d4d3ffce3e25b17ead3d50"
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
    "url": "assets/js/chunk-libs.c7eb857a.js",
    "revision": "db6b71a7d6aa3ce57c4864d6218ca3c0"
  },
  {
    "url": "assets/js/runtime.28283a60.js",
    "revision": "952ef7c5a2f6ea1bd2eb7174a687a5bb"
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
    "revision": "133256658160419740fdffc8d70e0493"
  },
  {
    "url": "nav/code/index.html",
    "revision": "ce7e5805adc3055aa9fd6518903dae16"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "919f8000a608b7d059a71c37dfd8a0a8"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "daeb0262615b56973134ed58422fa3bf"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "8f00cb11ac29be47832af16bd5d04912"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "617d7a6aa1ec03191264ec453cccd537"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "c90038015d387d911abb4faf557abbb0"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "b44cbb64be7b315337d11c669b945e7c"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "a0b66bed567e4063dffc00eae79e7bfe"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "b7c3393b936f76d10007040f798635d9"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "a55fddc9b68adf3dc90973958bb06449"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "ae21f55941ed1716e427c0dd180b6030"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "de58b07bcc6adefc79427516f0a116af"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "e6eeffe641ab7210b95612ae846cd716"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "6981fae795a9b6aa511bc7024a9eaab5"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "77682ae907e32a1b57a015bbb3d4c77e"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "23a4453ff02faab439ab6fa523bd4df8"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "b4a82c646d5526a59e0087b89d860d24"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "48c3865661d6cb64ceb1a169c5d1643b"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "39d39d113c2354a2f24a121814d711fc"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "f476fd7581e5c6b0c43123ac76f9537f"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "5e17b16932b5ac8fae156ef5caedff31"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "6b99472f40179e0a5ebe46026eb39835"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "e1c6a2b037f24c33c9df0c6c69b6bf9d"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "938978a21132cad9b977acda24137c0c"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "d8bbd5b16e315077483fc2ae770712bb"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "23a7d5fba452b7922794c2899cf57f05"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "71feb01722e6b2a94dd940bcf25ef619"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "8cd21fc3facc7194ed8946b416b6e749"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "e1ecfa3aaae46b3940b7ef08b298da2f"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "1da2a3e3fa2d8da01b63e7aa99b2c176"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "58d01f496100835efba0d9e092ae5a52"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "526a76bee0584731ba3126bf2ab52efb"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "7f06d4942ddfeef4c570441f673553fd"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "6c4362425fc74799d4d1624fe516407e"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "acad4b35043d17d0cf78f4081c38eb8a"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "f0854cc3be889f6c051b3f96030f9f2e"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "4e1f6dd24e0fd89915d38e8f278212cc"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "aa4e4f2d98b80388766cc8abdf454de4"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "19e9878d390c33a22d20f23ef2b0d6e5"
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
