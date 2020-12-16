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
    "revision": "8292f7b5221404a0949b7b39f77f04af"
  },
  {
    "url": "assets/css/2.styles.d2a902ff.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.08db5020.css",
    "revision": "f0c4c4044ab1987ca9bd62f8a07272a5"
  },
  {
    "url": "assets/css/6.styles.c3fd1984.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.7ff8f7d6.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.4d347e9d.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.edf0b8a5.css",
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
    "url": "assets/js/10.08cbbd3a.js",
    "revision": "09776fd123ee3c96934a05af10e4f365"
  },
  {
    "url": "assets/js/11.117887bc.js",
    "revision": "42ee41bcc002ca02319282ead6f8d805"
  },
  {
    "url": "assets/js/12.6a54bd95.js",
    "revision": "57e84e67a880eed8f71800e070edf213"
  },
  {
    "url": "assets/js/13.f5854596.js",
    "revision": "d9fd5a22eab5613b077fabfd5eeab76b"
  },
  {
    "url": "assets/js/14.ff90e4bd.js",
    "revision": "7382a7dce82596c496ce1d66930a6839"
  },
  {
    "url": "assets/js/15.141276e1.js",
    "revision": "fbb9de29ed3e9aa510d4c4cb71a9b150"
  },
  {
    "url": "assets/js/16.00180831.js",
    "revision": "0c250fa78d877cb89e2243aa937b428e"
  },
  {
    "url": "assets/js/17.952316ee.js",
    "revision": "0e233318ec9eb80ac7ca669dbc2de471"
  },
  {
    "url": "assets/js/18.6c34b850.js",
    "revision": "71beb3c5877ed6ad1dfd886ac6b15c39"
  },
  {
    "url": "assets/js/19.154b22a4.js",
    "revision": "51a4b5ebb91946755938a01b609ff443"
  },
  {
    "url": "assets/js/20.dd09c26c.js",
    "revision": "0fa205701990ecb336f62ffffa51d0c5"
  },
  {
    "url": "assets/js/21.d1ae4f1e.js",
    "revision": "2f4ce630449a7a4fcde71e3939536aa5"
  },
  {
    "url": "assets/js/22.893bfdb1.js",
    "revision": "9b85efa8d9e4da8abf5007f462743e24"
  },
  {
    "url": "assets/js/23.be4b4707.js",
    "revision": "0f1b60c80668d5d38e262c8e1631ffac"
  },
  {
    "url": "assets/js/24.02d58e98.js",
    "revision": "882c6a77c9d09b20202bc8262e66c2cc"
  },
  {
    "url": "assets/js/25.4286303c.js",
    "revision": "79dd29ef876ea0681d8d529ba321f40b"
  },
  {
    "url": "assets/js/26.4a725e1c.js",
    "revision": "d72ec1119a51c5e2f47321d6d4d352fd"
  },
  {
    "url": "assets/js/27.ee4f7997.js",
    "revision": "07190dfab960f253d793598affed44ba"
  },
  {
    "url": "assets/js/28.9801b867.js",
    "revision": "2dde0310568b18ff208c087b5d86668a"
  },
  {
    "url": "assets/js/29.64284706.js",
    "revision": "10b992f430cc0c1079cc4412350142f5"
  },
  {
    "url": "assets/js/30.70983022.js",
    "revision": "d69245cd6ceea0ae0f9eef36e00fe4b0"
  },
  {
    "url": "assets/js/31.a7bf02c9.js",
    "revision": "ac591c378a82ff3bce26641387db2630"
  },
  {
    "url": "assets/js/32.813f2538.js",
    "revision": "13b869b18720580a0635cb200cf68524"
  },
  {
    "url": "assets/js/33.4aaa6e7a.js",
    "revision": "c13abef56dd0704b5470e510b07adc3b"
  },
  {
    "url": "assets/js/34.aa84f57a.js",
    "revision": "ae063dd4653e481defc6f27f3a4c2ca9"
  },
  {
    "url": "assets/js/35.8d7d70f1.js",
    "revision": "33a9856132ba8914de056bd26c742f89"
  },
  {
    "url": "assets/js/36.5025779d.js",
    "revision": "ef9416deb4b1cf7141f4cb0bd0b75dbc"
  },
  {
    "url": "assets/js/37.0595e58c.js",
    "revision": "e0414644b6df0da2099b71c093705e13"
  },
  {
    "url": "assets/js/38.15ff48de.js",
    "revision": "70588316effc588bd1816e0554d78d84"
  },
  {
    "url": "assets/js/39.b9275d3e.js",
    "revision": "309f97ce53e996652608294b384bfddd"
  },
  {
    "url": "assets/js/40.3dfc2af9.js",
    "revision": "11b4ca7ee47d43913d03c9d9ad6b8040"
  },
  {
    "url": "assets/js/41.1d3456b3.js",
    "revision": "57ee0494a2bfdda993880384c71d5346"
  },
  {
    "url": "assets/js/42.7ca4047c.js",
    "revision": "3d1ddde0d41ced74a57e70bcfa772912"
  },
  {
    "url": "assets/js/43.1d25d68f.js",
    "revision": "08b285d266b218f69db0a83911267b24"
  },
  {
    "url": "assets/js/44.d30739bf.js",
    "revision": "87f92d14092dae6dd36a894d537704b4"
  },
  {
    "url": "assets/js/5.08db5020.js",
    "revision": "c6756c674972e8df503f6b009b8bbca1"
  },
  {
    "url": "assets/js/6.c3fd1984.js",
    "revision": "d9d657a96c8e534efb14773965135128"
  },
  {
    "url": "assets/js/7.7ff8f7d6.js",
    "revision": "0bcc8b02cb06906f3742dbdb4a99b4a0"
  },
  {
    "url": "assets/js/8.4d347e9d.js",
    "revision": "03d4e535cb910b2304fc9f9e997faf9e"
  },
  {
    "url": "assets/js/9.edf0b8a5.js",
    "revision": "5ff35187b0e51d32a4e7055e9efbb4ea"
  },
  {
    "url": "assets/js/app.75049c88.js",
    "revision": "a6dc61be1c1ec8e4d5a64d3cfaf5ca20"
  },
  {
    "url": "assets/js/chunk-elementUI.6ed22acb.js",
    "revision": "1fc1edcde0bcbea67a7622f4a084e74c"
  },
  {
    "url": "assets/js/chunk-libs.d2a902ff.js",
    "revision": "0f94e597d0c59f88f13711296ae990f7"
  },
  {
    "url": "assets/js/runtime.09fd15e2.js",
    "revision": "7257c768cfc5f722f51aecbd1295f67a"
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
    "revision": "a445f269b8661076b1e906ad05a97675"
  },
  {
    "url": "nav/code/index.html",
    "revision": "22352e1b22977d92ad5e76b0169d2a83"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "0a746680e6b53e444339a5d13555829c"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "3741fb61e023f164956cf2674e57ae8e"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "993feb9d5583fc71588a99f093f608b1"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "eb99d991a37ec1cd4efbbc8c96fa4945"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "b8b8cfa391d0f8149509d8dbca094138"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "b1657d72cdcde2344835eb89591a3755"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "8ba2f2ae4ad18d671821e17477e1db5d"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "5c39e66507d0df3b485b74d7ae90a04c"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "b3cdf670a9e9a58a303563140972ff4e"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "ca015395b197ca957fffdc3a5b23af49"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "a2fa383f569957f1eacc202be9eee4fe"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "64b9e2e2e01fb2ac8582d89166d6ce13"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "b9378e1b1dc7d0722375febb9b66ebd2"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "9f6f6cae2dce962c0c17fd0060c636f7"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "a52e9f25e11d525c0fa2c36df0667df3"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "dec5aa23b93f0f518e1b0c8075709d73"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "170c2b420fc5256eee219c70412f7e1f"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "3c1a9fa97a153763d480caa05be88bfb"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "58fbef027663bb60de5f4c355d9457d9"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "5eec0d2ae488bf6be4ee9070ffaabe01"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "b437dff3fb980dbb2f822e401b229cf1"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "836832619c8df8cb9a691a489559d168"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "d9dc8fa152613e92d0b297235f4ee3ec"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "1b3a6356f1ff6afc802ab9ac1f130117"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "d89e112b65e649779c1c45307b371288"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "142fddd4de009bca3e9d89a2bc5d97a0"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "26b4710791755ef0fbea5e3e7e75eafb"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "f9629ffb27701405a93c5637e72a281a"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "a777fe03b7e48543c090e7f9dce3c18c"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI.html",
    "revision": "604f9f4bed42e787cac49709aa76b92c"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "a5cb8620c182fd83ff9c52d45d53c427"
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
