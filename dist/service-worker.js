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
    "revision": "f4c65018ee339ea40dde2f1d9258293b"
  },
  {
    "url": "assets/css/2.styles.1406f566.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.751a423a.css",
    "revision": "b138d108be35711603faa361674778ea"
  },
  {
    "url": "assets/css/6.styles.c9ac031d.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.dbcd3eae.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.9bc1928e.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.479bd024.css",
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
    "url": "assets/img/html5.a2eaf051.jpeg",
    "revision": "a2eaf0519e990cc35d2748661c38edc4"
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
    "url": "assets/js/10.20b685c4.js",
    "revision": "cc4c13935463e6c67f8a7d571148d21f"
  },
  {
    "url": "assets/js/11.fa258062.js",
    "revision": "a040394c2bb3514ba5672351fde3484f"
  },
  {
    "url": "assets/js/12.b2476098.js",
    "revision": "4e3620bb559eda1a523bf90089c85745"
  },
  {
    "url": "assets/js/13.0b5868d6.js",
    "revision": "2f4a9b52e315e0d2587bf48fd85fa33c"
  },
  {
    "url": "assets/js/14.de54c5dd.js",
    "revision": "18543ab48ae4079c73e5619e5f1dbcf1"
  },
  {
    "url": "assets/js/15.4b29f44e.js",
    "revision": "9282b2985a3dcde191e694cd9c2197ba"
  },
  {
    "url": "assets/js/16.e2ce8550.js",
    "revision": "3147d3d7bb613c19434551f513883ded"
  },
  {
    "url": "assets/js/17.cfe5f081.js",
    "revision": "f32e46ae33c378bceed1522a5722b356"
  },
  {
    "url": "assets/js/18.896e9b0f.js",
    "revision": "7b7347366e8a5ede1769095af71b95cc"
  },
  {
    "url": "assets/js/19.a1719ce1.js",
    "revision": "e6107c79563b75711384805a01b4c707"
  },
  {
    "url": "assets/js/20.25fce4a6.js",
    "revision": "7aeebc90cd2771e22cd47c7620219530"
  },
  {
    "url": "assets/js/21.e9e4b571.js",
    "revision": "53f5bcf7bca3fb137c88af1dc7a14a05"
  },
  {
    "url": "assets/js/22.e4972fff.js",
    "revision": "30d9a3bbc61e1e10d433ecbf288866cb"
  },
  {
    "url": "assets/js/23.12cc42ed.js",
    "revision": "d8e3818b64223f56b5ee4353f247e652"
  },
  {
    "url": "assets/js/24.fd2a91bc.js",
    "revision": "652ee86b94413f5fa3350c0fec0ac161"
  },
  {
    "url": "assets/js/25.e588b05c.js",
    "revision": "07b026da6458ad8d78fb5a56527e9bbf"
  },
  {
    "url": "assets/js/26.5ab71060.js",
    "revision": "72f1893ee3e2ddbabb219043391f40ad"
  },
  {
    "url": "assets/js/27.7a7320c9.js",
    "revision": "fcd6444ee69f43a64543831a1c2c12e5"
  },
  {
    "url": "assets/js/28.bfa1c685.js",
    "revision": "fee48b38886ab60c20ac9bf88bb26b7b"
  },
  {
    "url": "assets/js/29.b00d74c0.js",
    "revision": "ead7a00c94fa5aea2ae3599cf203cfec"
  },
  {
    "url": "assets/js/30.1801ff4d.js",
    "revision": "e2ac3e91652c35d71b8474cfdad3ccb0"
  },
  {
    "url": "assets/js/31.4906e664.js",
    "revision": "8266a8a7543a8bc493615ee6ec925a7d"
  },
  {
    "url": "assets/js/32.f04c5371.js",
    "revision": "603ec1008bbebe92ea922c0e7af4ed10"
  },
  {
    "url": "assets/js/33.a4aec9af.js",
    "revision": "0843cd33ddc18d5ce7ae159e63607694"
  },
  {
    "url": "assets/js/34.ed4994bf.js",
    "revision": "372305d0753a2b2b7d5e21f8e5f17830"
  },
  {
    "url": "assets/js/35.26dadabf.js",
    "revision": "6f2d7889d686f059344ddbb98c23b203"
  },
  {
    "url": "assets/js/36.f4c22773.js",
    "revision": "802c235abaa6f38e44a639b93841c41b"
  },
  {
    "url": "assets/js/37.978c671e.js",
    "revision": "98ac3c8ef338d9ec9819c09009a0f791"
  },
  {
    "url": "assets/js/38.91c6b0c0.js",
    "revision": "a3bfae16924dca35cbfe6aadf2d5de22"
  },
  {
    "url": "assets/js/39.37509322.js",
    "revision": "c062f30dd0c39a1e11941de5f4de8e7a"
  },
  {
    "url": "assets/js/40.cbeae1c5.js",
    "revision": "30988c8609c756c3d25162eb08f7ad55"
  },
  {
    "url": "assets/js/41.39375e6e.js",
    "revision": "38ccc74dd39abed353ab5b96cccb9e28"
  },
  {
    "url": "assets/js/42.cec4ba50.js",
    "revision": "c37a23a2c9c94844a881a1a4dbdc381c"
  },
  {
    "url": "assets/js/43.814d1d06.js",
    "revision": "62f9ac075b243626f5e1717dad32d6dc"
  },
  {
    "url": "assets/js/44.acd42e44.js",
    "revision": "79a1bf1d705f0874508419d614a4c40b"
  },
  {
    "url": "assets/js/45.65497679.js",
    "revision": "5b03e4b0896f8ca00ec2a2851f5bc82f"
  },
  {
    "url": "assets/js/46.f8bdb71b.js",
    "revision": "c59feecb188e499113a1d19c1f20e459"
  },
  {
    "url": "assets/js/47.472cfd77.js",
    "revision": "9072af9f2c4cda2db41ac3757678a7f2"
  },
  {
    "url": "assets/js/48.3972b4c1.js",
    "revision": "8a4438a0ef1651d0624f5a441d0f19d5"
  },
  {
    "url": "assets/js/49.b03b9e7b.js",
    "revision": "f7a74f11f84f5777baae7bb831b74def"
  },
  {
    "url": "assets/js/5.751a423a.js",
    "revision": "31c286722ff89aa4fcc6ce14b66383de"
  },
  {
    "url": "assets/js/50.91e4c772.js",
    "revision": "465e7fcb40fc187ce9d886881725d499"
  },
  {
    "url": "assets/js/51.932c0211.js",
    "revision": "b85c2a9e3349e5a0cbf6d8ed4b3bf049"
  },
  {
    "url": "assets/js/52.01d05074.js",
    "revision": "de22adfc47d6baa36f6ddfebd34f6088"
  },
  {
    "url": "assets/js/53.a4ffa275.js",
    "revision": "269db8b7a475ba99906207fb2e30fb70"
  },
  {
    "url": "assets/js/54.da8abd10.js",
    "revision": "382ff760c1a0b5428201376ab704f119"
  },
  {
    "url": "assets/js/6.c9ac031d.js",
    "revision": "14c614113e42a0f5f3062adbbee6381f"
  },
  {
    "url": "assets/js/7.dbcd3eae.js",
    "revision": "047c81819c195f62b6e49670463f5724"
  },
  {
    "url": "assets/js/8.9bc1928e.js",
    "revision": "ccbad90d164f539f870b27ef385d7bb7"
  },
  {
    "url": "assets/js/9.479bd024.js",
    "revision": "52a4f0f26984fe083e54c8e3bb6cd8ee"
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
    "url": "assets/js/chunk-libs.1406f566.js",
    "revision": "8267f6cc4609262c4379cfa5a6a340a6"
  },
  {
    "url": "assets/js/runtime.cc56f2b2.js",
    "revision": "23fa6547a48a53fe988afd4d1fd7dafb"
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
    "revision": "2d99c8d97e7859ea816864971e21372e"
  },
  {
    "url": "nav/code/index.html",
    "revision": "b09a9ad69ef4b988b0a927e867a14d64"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "a453d647c3e8547af99732a2be86c5f9"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "9ab3d31261c5174f07ad21d8c0d8e741"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "3b352cc2e3663419064a57194cfdba74"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "5c3ff3acc3e197b29eedacb1c557d1f9"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "516d588ce4538d40535bc6cd2b022ce1"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "a3e365c1f5f0602c3648a072454a9909"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "15501f1af0bcfc266da14baedc9a0b94"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "b1253c8cc2d529b8449249eba77f775f"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "df05068ae68141a544658234936caf71"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "be5d3ff7b9a1d03e95e538ec72997244"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "0d0f5645a5e9c7eef396de058ee3ed15"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "e0df862a9de521ccf229d868de28e253"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "5591aa8cc4841105beb52ceef4fa5c36"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "3fb286499ada0dcd94f0a542fb5901b4"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "90b464c6116b32faf7306e93b1567cf6"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "2667e4a69fad72c2ca45978da6445b8d"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "e68462d6d5123c4185828603707d253e"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "22355dbbc82cd012157f38b24cf83db1"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "734ea7bcbbadb79faa3aafa5bb474f2a"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "0d19cfa312b7aaa978ff3bff367e2b2b"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "1dca610c6e5a00cc6a8ef591d427b41b"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "78d1c4f52b3710d821a04cf35f12d581"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "3cc345560d365ca3cfafd06918d05772"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "a2f40669612aedaae669486014f813dc"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "199e68ec9471199f72e39779fd3d1572"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "ff7f1a7c3f934c4cbf256c5eda32253a"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "ffc5dd42fb677916ddffaa583ff3ae4d"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "012bd36a26206b50553c49281ec0caf1"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "660483ba04cb82340e0fe36ab15dd53a"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "140391b1a5222527d9e1140ac53608d4"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "3d432b54de5a9bceeed438b33b40c804"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "e23831d95c422d3cde49789ce818bc81"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "260b14d52b148a0ecbaf5b6a38357649"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "d9a43118759ec015a26e4632e77b1ead"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "7a26728fac1317473e25868ef8cc17a5"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "0bde014ee5cb4de826bfed5e8e8da2be"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "f35ea487cda34a10f6ede1cd2f28e537"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "2cec80b2aab63b29c45c98c86574fec2"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "7e4dee618eb6173b6d8b157e4bbe7c45"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "d7110852d42add66ce739c3ce9452198"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "9ddbd231b7e2605bec9d42e70aab859b"
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
