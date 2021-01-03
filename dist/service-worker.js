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
    "revision": "01600a5c92344bc40b685dc73a5fcd28"
  },
  {
    "url": "assets/css/2.styles.d55a88ee.css",
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
    "url": "assets/css/7.styles.a4f2e0f2.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.4694fefb.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.3ce73053.css",
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
    "url": "assets/js/10.abc82818.js",
    "revision": "0b78084d6431531b593d44659335faa1"
  },
  {
    "url": "assets/js/11.760baa18.js",
    "revision": "4c90200d8a943de7e5f512df6ae8dbd0"
  },
  {
    "url": "assets/js/12.322e1ad7.js",
    "revision": "25dc644c3b472b6f86b9311fdda70ca5"
  },
  {
    "url": "assets/js/13.2c09fba2.js",
    "revision": "3a461b72fbb18cec8586f8858ec9a66a"
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
    "url": "assets/js/16.7588520f.js",
    "revision": "071a831f2207a0c7cb0abf3d1a319346"
  },
  {
    "url": "assets/js/17.da825bfb.js",
    "revision": "e6d12ad0e3fe962e6a9ad365f82f6758"
  },
  {
    "url": "assets/js/18.1ef726d0.js",
    "revision": "206c61af57a017e603d2ffa91514ec76"
  },
  {
    "url": "assets/js/19.9d20700a.js",
    "revision": "bb8f4bf3f908fa990471e251e7673a84"
  },
  {
    "url": "assets/js/20.851e3b52.js",
    "revision": "e03646f62e9ba48d30cced351b0fb47a"
  },
  {
    "url": "assets/js/21.c3f67f7d.js",
    "revision": "a70872653500e6bbdbfe6ba61c022678"
  },
  {
    "url": "assets/js/22.33618e18.js",
    "revision": "eef5593250d48557529c6a97b86c6a91"
  },
  {
    "url": "assets/js/23.6e8b5699.js",
    "revision": "7532cec6db817024a04326637f46e50e"
  },
  {
    "url": "assets/js/24.9cdb957f.js",
    "revision": "f940f1e5a7ebba6b5005ca6770a1b241"
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
    "url": "assets/js/29.9d4120ce.js",
    "revision": "d2ad2c91583ef70c82ba17f179b2ac85"
  },
  {
    "url": "assets/js/30.db78c831.js",
    "revision": "ae206daa19e5f7144d3e5a04b38a8b68"
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
    "url": "assets/js/38.7685f98f.js",
    "revision": "4c354c759df4018a5fac32111c28006f"
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
    "url": "assets/js/42.4b0cc128.js",
    "revision": "c96ba68f82d9f4fcf98412e453cd94ce"
  },
  {
    "url": "assets/js/43.4432a905.js",
    "revision": "2abf1325047e560d277c9023ed2c139f"
  },
  {
    "url": "assets/js/44.a4c68485.js",
    "revision": "7722106656aee45844618e0611a0ef22"
  },
  {
    "url": "assets/js/45.7b678ce4.js",
    "revision": "67feb0f084d100d346b5f3f01a343d9d"
  },
  {
    "url": "assets/js/46.29d0f408.js",
    "revision": "b250fc91a9601fc8999d4383f6cd01fa"
  },
  {
    "url": "assets/js/47.6da277fc.js",
    "revision": "2ab25f28d369a1093180cd10eaf8076c"
  },
  {
    "url": "assets/js/48.8263ce21.js",
    "revision": "4dceb1816d751c376a51aff942400c82"
  },
  {
    "url": "assets/js/49.5b0f9263.js",
    "revision": "7243ab82f1b72fa3a1ba37c62f4c1001"
  },
  {
    "url": "assets/js/5.7ebde17e.js",
    "revision": "8670bf92702c9b46bc5451c0000b8e3c"
  },
  {
    "url": "assets/js/50.baf00d1f.js",
    "revision": "abf55a6c06e97ac556d943a40ae13ee3"
  },
  {
    "url": "assets/js/51.1c99fa2b.js",
    "revision": "33f156780c1e39df002715e408eb0955"
  },
  {
    "url": "assets/js/52.015e6810.js",
    "revision": "c09125e2b6bdc76705838265787d6e6a"
  },
  {
    "url": "assets/js/6.ef9b7f6f.js",
    "revision": "486ff65a64f55e724845826d156d7a61"
  },
  {
    "url": "assets/js/7.a4f2e0f2.js",
    "revision": "ecd150921b83086f482bf272a08c72f5"
  },
  {
    "url": "assets/js/8.4694fefb.js",
    "revision": "1b89b8a63de8c05dba26899bbb68d5f5"
  },
  {
    "url": "assets/js/9.3ce73053.js",
    "revision": "de0f7b71e70682a3c1907b22ff7598a3"
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
    "url": "assets/js/chunk-libs.d55a88ee.js",
    "revision": "99dc03d8c96548a42ca6297ebc296359"
  },
  {
    "url": "assets/js/runtime.b4182146.js",
    "revision": "b49ecdf82b2b7cda63bdf3085c1af8bd"
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
    "revision": "3264ba47ee51a2725374db7d65d72ce7"
  },
  {
    "url": "nav/code/index.html",
    "revision": "660c98182267b307581820e7acdfb7e9"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "2fb6ad7313df31d79279550530704156"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "1fb49c23009f426250920b57297b5b06"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "0332f6fc87698b72260ef63ba81749be"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "e95eb5d568f705b9cc9c6d00113c866b"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "e7ceafcb4d6ed779b69974e95088bf8a"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "9b02d13770d06498ff750a50e87d2d8a"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "8f6f6d6600c7e956618a5aef38e403ed"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "133d3608437d60a4a52374b68792a615"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "65b1f3b5b94e97ff70c0465b65f30495"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "43f58a39a9f60b495770eaf63163426c"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "9f530d488a77394ddd5a3ba94e412860"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "19c57c5f2d27fe4c13c6a5e145a0c1a9"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "9bf22ce8d68788f1bd77e442f66b274b"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "12811411e4ddc6f225e1feb9d60a57bd"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "83b964e15a0f340c00185f16accf9d43"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "198feaa2083f355f37434a4f36e61341"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "be23cb960f6d3e5dc80d06655090f7e5"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "1411c01591909be6a13a4c921781efdc"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "e0b01060c306c8bbf965b4d4fbdd7bb0"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "a3d321f59a01d7601073360ef63ad1ad"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "3bf037a4ff172af48d2e79235e5c2844"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "5d15facb0290920116d347dbd598d57f"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "4a1da5f88f1cc36d4be13a3f12a97259"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "74cb2c4f93092de1a321e842538d57dd"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "8f5d764a7f0f4fbe71e7eca2aadd5fa6"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "086174c85f87a4205fca199a0336ba70"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "4afa088dbb4936138a0fa681caadd406"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "115410a4fd62a97bc3b106588bfe7622"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "c39b1290603543824120543d00feafc1"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "81c93f7a5f53706628d8f1995599f54e"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "47f9586f0fbe2cca853029d344d960cf"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "5b650e1f4f431646f15542cc97504e3d"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "bcc98aa1be7aec4439f0f15ef5b54388"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "ef1878e0bb4744d17241e7b2dfc865bf"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "f7fadc9e8ad8fc0ca2f5c0bf4a90a0d3"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "f00047f215ea6e4de9e76fee271aa2c9"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "bfb2073b7fc77b15511d44e06a4eb6e0"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "0ffa9766b6c5bf4b6d990a50c74c7826"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "2b67152409dc6b96dc5eab5937607752"
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
