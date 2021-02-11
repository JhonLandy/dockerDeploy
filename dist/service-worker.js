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
    "revision": "0b2d20971a6221c8d8fcee0111c7938d"
  },
  {
    "url": "assets/css/2.styles.cc10d755.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.b4ceab0c.css",
    "revision": "5808a4188dec60cf6ecb64ecb0a65437"
  },
  {
    "url": "assets/css/6.styles.455b3a1f.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.8808a57e.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.2775317a.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.49812030.css",
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
    "url": "assets/img/16pic_9349989_s.e3e09d23.png",
    "revision": "e3e09d2326b904e177fffe31cc5f5ca9"
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
    "url": "assets/img/niuniu.a01b0649.jpg",
    "revision": "a01b0649a71fcefcf095cce6d2b0e4a0"
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
    "url": "assets/js/10.9b5f2fb3.js",
    "revision": "fc4967dbad1552e0d71934b51b7b7bb0"
  },
  {
    "url": "assets/js/11.af99084b.js",
    "revision": "e7424fc43eb110ec7c495e3101141b19"
  },
  {
    "url": "assets/js/12.befec47c.js",
    "revision": "048888fbb475c98f8531ace2ec4f9c39"
  },
  {
    "url": "assets/js/13.4b30c5c4.js",
    "revision": "c71b70dcfd15bb9bd19795afbdf02b73"
  },
  {
    "url": "assets/js/14.12ac2a47.js",
    "revision": "20b2da53df3fbf5537ce53a98bbddbc7"
  },
  {
    "url": "assets/js/15.1d74bd0d.js",
    "revision": "7dba95cc422b39f0352235c3b1ef99e7"
  },
  {
    "url": "assets/js/16.6b0d747a.js",
    "revision": "9f3b7c221bb368b338c313483fb23c10"
  },
  {
    "url": "assets/js/17.ed54b559.js",
    "revision": "d8a5fcbdc7f50a8e2ef7618901f0f4c8"
  },
  {
    "url": "assets/js/18.ca9d57c9.js",
    "revision": "6c90827ba0aca926bb6dfbf3f8ec4b54"
  },
  {
    "url": "assets/js/19.63d91987.js",
    "revision": "f52fce4d9e05a2aeb25970e45f5bd669"
  },
  {
    "url": "assets/js/20.86fba3d1.js",
    "revision": "cc50dc934e089a155f3795e0e653720d"
  },
  {
    "url": "assets/js/21.bfa1abfc.js",
    "revision": "8f4b9072f92e1c727880d1880baa9c92"
  },
  {
    "url": "assets/js/22.aae240f1.js",
    "revision": "15f249bea5a067981fc6bad4b38fd493"
  },
  {
    "url": "assets/js/23.147878ff.js",
    "revision": "b1e1588e0c96cf0acb54eab811cded7c"
  },
  {
    "url": "assets/js/24.f2f154bb.js",
    "revision": "875c48b7c52da285ac52be6ef815f14d"
  },
  {
    "url": "assets/js/25.de087060.js",
    "revision": "303115f242da085e57a77faf1d71d839"
  },
  {
    "url": "assets/js/26.37875e59.js",
    "revision": "d0ef9ee1b777bea7a5747d4d04dde82d"
  },
  {
    "url": "assets/js/27.c06cd294.js",
    "revision": "6426843508844f93d9703436dc7bf4cd"
  },
  {
    "url": "assets/js/28.1cb82e85.js",
    "revision": "4845c75b07179d77937157735c93a068"
  },
  {
    "url": "assets/js/29.b1ca61f3.js",
    "revision": "22a94b1a6a44cf0a1f72e4cb31c0a29f"
  },
  {
    "url": "assets/js/30.dc385bad.js",
    "revision": "9e9de1b6059ed8e2b0cd405e224cedf9"
  },
  {
    "url": "assets/js/31.3c5a1cc9.js",
    "revision": "3ac1ab4ad4b0c0e3e6df41e16cbe7eb7"
  },
  {
    "url": "assets/js/32.579a67af.js",
    "revision": "82cf64799f4d3bd3cdab1efba804fd44"
  },
  {
    "url": "assets/js/33.a4cc2de4.js",
    "revision": "b11cf5235eaeb804ecb34a9fe1d873a1"
  },
  {
    "url": "assets/js/34.298447f0.js",
    "revision": "4f61aeb18484d3654d50d89d1d23590b"
  },
  {
    "url": "assets/js/35.22623ae1.js",
    "revision": "81a6ed91157ad79938babcf2be52345d"
  },
  {
    "url": "assets/js/36.75173682.js",
    "revision": "1522e1b7f030f373ec4ffbba518b72e8"
  },
  {
    "url": "assets/js/37.7fb98f94.js",
    "revision": "b1ae38b59cea6856a2c36731fa8e953a"
  },
  {
    "url": "assets/js/38.8b6384be.js",
    "revision": "ac615398a1754675207c0425f851a4ca"
  },
  {
    "url": "assets/js/39.ae23b09d.js",
    "revision": "a04b5af51d2e7f5a8e2f56a571369bfa"
  },
  {
    "url": "assets/js/40.6d309a20.js",
    "revision": "11c1b489a65e95f08ada565a1e32cc71"
  },
  {
    "url": "assets/js/41.795d68ba.js",
    "revision": "f812a4d8b950248f2b6e4e7843e171ee"
  },
  {
    "url": "assets/js/42.6b1b36e6.js",
    "revision": "dc35994892aad9a34358537862d1a998"
  },
  {
    "url": "assets/js/43.d5ab0757.js",
    "revision": "eda577c8bddfa4ca3a77d92dadc3d220"
  },
  {
    "url": "assets/js/44.b45d8cfb.js",
    "revision": "8799067bccdac7ec3d977dec31d798a6"
  },
  {
    "url": "assets/js/45.89d474d8.js",
    "revision": "05c531f8054fce33d18e4a0352080700"
  },
  {
    "url": "assets/js/46.40181945.js",
    "revision": "a38253d863dae131ce24e0f2b0228e38"
  },
  {
    "url": "assets/js/47.ec11e9ea.js",
    "revision": "2c12a5c8d855ec4e6d05fa5a85d07a9d"
  },
  {
    "url": "assets/js/48.fccd9d8d.js",
    "revision": "585ccc5237c5688f9adca702894fda03"
  },
  {
    "url": "assets/js/49.2492b3b2.js",
    "revision": "b35c4d8fc50c004daed6e6c073aaddb9"
  },
  {
    "url": "assets/js/5.b4ceab0c.js",
    "revision": "234d539a9669c8245cb156fe3ebb46a8"
  },
  {
    "url": "assets/js/50.a039dd26.js",
    "revision": "56c348cecb277df29acdfb47c944b427"
  },
  {
    "url": "assets/js/51.27818d68.js",
    "revision": "82ce93c5a933f30035bf395b49a634c5"
  },
  {
    "url": "assets/js/52.dc0539b5.js",
    "revision": "86bee3b08a29833216fd81bc9e019e65"
  },
  {
    "url": "assets/js/53.79253182.js",
    "revision": "c4a5739b91de3065fac50dd47641f3ee"
  },
  {
    "url": "assets/js/54.5a66731a.js",
    "revision": "96cbec87f7998b7493a575ee9f50e3a3"
  },
  {
    "url": "assets/js/6.455b3a1f.js",
    "revision": "33c72e284fabf156c0b2e6bdfaccc9fb"
  },
  {
    "url": "assets/js/7.8808a57e.js",
    "revision": "e5dfdc4bd126c004b6bd68f005dab8aa"
  },
  {
    "url": "assets/js/8.2775317a.js",
    "revision": "de64446c357a5ff41d6ed10d5d5edaf9"
  },
  {
    "url": "assets/js/9.49812030.js",
    "revision": "4f7707622a686bd049161cc598d1682a"
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
    "url": "assets/js/chunk-libs.cc10d755.js",
    "revision": "b692405325695baaac797feac6cb3994"
  },
  {
    "url": "assets/js/runtime.3fdb2fa6.js",
    "revision": "ea10c360c2dd0e34c30072cf93d834e6"
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
    "url": "images/home/16pic_9349989_s.png",
    "revision": "d040010eed68257e2c0ffd9672b810c6"
  },
  {
    "url": "images/home/computer.jpg",
    "revision": "97ae1c5927263d0105cf36e7da744750"
  },
  {
    "url": "images/home/html5.jpeg",
    "revision": "c1cc4e65f0b6a3602b29303fc54c97fa"
  },
  {
    "url": "images/home/html5.jpg",
    "revision": "7e44b57641afaf7aa8fd87604a94f39e"
  },
  {
    "url": "images/home/mockup.jpg",
    "revision": "8f0ebcb1b2685810cb910ed0a2980f16"
  },
  {
    "url": "images/home/niu.png",
    "revision": "b55eab3c8cf7ddfd80cd7162ffae8c5e"
  },
  {
    "url": "images/home/niuniu.jpg",
    "revision": "1792a09e876a5d3c045542b59aef149c"
  },
  {
    "url": "images/home/shibuyasky.jpg",
    "revision": "77d3e465755dd1e46e93c7a145e26c43"
  },
  {
    "url": "images/home/vue.png",
    "revision": "1edf13fafa9bab2e621bb1733501a314"
  },
  {
    "url": "images/home/webworker.jpg",
    "revision": "7f6acf3d207c6ebca3593fb7ac38a920"
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
    "revision": "fbd8651d55bd82fd0bebb4a225cb5865"
  },
  {
    "url": "nav/code/index.html",
    "revision": "9063d0f5c8f8bae1080cce2c26262ab0"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "4b0e65956ac2d8bb0452fbd86f7765fe"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "d162c4a661f940d4b327f2b1308f35e9"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "9b1894acb7845df359cf85b1468cc41a"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "c8969b590da5a4e92f59c181eed8a35e"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "14d6a42e4968cd84d3afc1291b1daf92"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "02acbe1e293f0615fbe1b224c6f69944"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "df851c140a09313c74e6dd68b15d974e"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "57a61ab45ad5c125d3aabca91c2a9c60"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "829b931ba434ff14a319c4217b668b58"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "c98f2f54e39704fded251ba3cf7f0e36"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "f031c39c20675917f3f3ed3e35d6d5ab"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "3feb17f8ed1c41d0442f1052f353226f"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "85a4d21e7bbf2f2af436b697c425b3ef"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "4962394f04d23f2a78b718ff843fe64d"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "7bf2919f780728be1f7fecae51ec7cc9"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "93a9b5c3f2ad068a7e3cee508150b6d8"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "a26cc2bf63862760dca99e3fcf4ede59"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "89c931f6071dbfa4d0e99a7c93ce8b51"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "5e4c4e6f0d4f62ae5e8850065fd86db6"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "ff5dd618c415a08ccfdbf78420bcbde4"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "79c5396b1c0bc843280b1a48267b8fe5"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "932372317f978f468f0b5d7b432fd719"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "06b54c165173c18c099851263c03630a"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "987e94b087a47224fd546f6d569ea0f1"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "9fdd679aae54164021bfb904353f0427"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "7011957f51f9c4fa57aafcc3a0ccc6dd"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "ed1f1b86e5a8b6d73a60db7142be2dc8"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "7ee06b65b3f694d1cbb99d4bcdb5de0a"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "ee0ea4521fe43f6cc7e04d914bfc1b23"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "6f221d667cd1be297a7b01e5b91206b6"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "fb166b65dc3a22c5668393a599f63134"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "112a9ce00712550f746d68ac15dfbc5c"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "b304f7ac122b755815cb5983738a9f6a"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "fb2d5a699b2ac32ca6316d230b67a85b"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "a70ce723775268ffff9f2d07c91d76a8"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "a9f64515587377245b646d5a0845a1fa"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "208c580351677b79f370a3042d77cd5a"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "7605f137128a6fc1c41e3f14367ac6e8"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "2e3c2e513b39ae0a00e9c47c26aa1e74"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "b16fc2168b6932371198f95b4c226c66"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "99b5cac38d9a0dc66ccc5d77d4897445"
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
