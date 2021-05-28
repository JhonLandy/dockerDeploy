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
    "revision": "aa9f8e3b8ea503ef19f5e83cbf2a1533"
  },
  {
    "url": "assets/css/1.styles.2730ca7d.css",
    "revision": "e705277dceeb593357afa54f125c1f55"
  },
  {
    "url": "assets/css/10.styles.580e20d4.css",
    "revision": "bd36b1dd758cce4882177d7d307318cc"
  },
  {
    "url": "assets/css/11.styles.3c21455d.css",
    "revision": "8560b7952c93c4d634d9cd5ec02a4c92"
  },
  {
    "url": "assets/css/2.styles.129bb918.css",
    "revision": "be4249466728e0e5acbe6cabe5c399a5"
  },
  {
    "url": "assets/css/4.styles.3bf4261c.css",
    "revision": "db3af59f4aeeab6f8a8acc3e4f38c1cf"
  },
  {
    "url": "assets/css/5.styles.af248e68.css",
    "revision": "4799e47e4e7567ebf68cf29932c3b9af"
  },
  {
    "url": "assets/css/6.styles.2e44deb6.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.bdf45703.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.7b2f7b62.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/9.styles.119ef27b.css",
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
    "url": "assets/img/scorder.6332a379.png",
    "revision": "6332a379e5acaa5ee95685944e0ddb55"
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
    "url": "assets/js/10.580e20d4.js",
    "revision": "cdae5629d3252c22d08811217daa8e90"
  },
  {
    "url": "assets/js/11.3c21455d.js",
    "revision": "c9c4eb2f46fe7954c72446955f071e4c"
  },
  {
    "url": "assets/js/12.77181524.js",
    "revision": "7834037c977b6c070e4aa51f26c917f9"
  },
  {
    "url": "assets/js/13.71639004.js",
    "revision": "3b436ea16c729430e6d3697fca07a937"
  },
  {
    "url": "assets/js/14.ed5a396b.js",
    "revision": "a81247ba9dc219781c4d4a7a4931a375"
  },
  {
    "url": "assets/js/15.2cfc728b.js",
    "revision": "3fce78f6b96b260a94da4cf2db5c0917"
  },
  {
    "url": "assets/js/16.1c38a830.js",
    "revision": "1cd4abc40c4112c2c5d4743a49fc17d0"
  },
  {
    "url": "assets/js/17.40718c90.js",
    "revision": "da55ca9dbf31adb906956134a5e92277"
  },
  {
    "url": "assets/js/18.7b378074.js",
    "revision": "d197988eb29770a750c673279e4e8921"
  },
  {
    "url": "assets/js/19.71cea563.js",
    "revision": "cdb80958dac96c7ab4a38b8350cf1c49"
  },
  {
    "url": "assets/js/20.c2d14e16.js",
    "revision": "012527af1fe96f98750b0ecbd1570648"
  },
  {
    "url": "assets/js/21.00f6a5df.js",
    "revision": "e38cb4b160e6e9c84bc59a07c56abfe2"
  },
  {
    "url": "assets/js/22.67c99b75.js",
    "revision": "8c6ef70731f7ed1f1cd16fbf56db90ba"
  },
  {
    "url": "assets/js/23.60cb9e38.js",
    "revision": "22a1e782a09ca19b303cd2631573e6be"
  },
  {
    "url": "assets/js/24.a060b31f.js",
    "revision": "a9b545cab2479c8a0d2ba340ca6ffa2a"
  },
  {
    "url": "assets/js/25.53c2ca54.js",
    "revision": "c22d244d1e77a496cc9ca011b1e82db8"
  },
  {
    "url": "assets/js/26.c65d4c1a.js",
    "revision": "bb1a4ecd0167f4d9734730bbafc0f0df"
  },
  {
    "url": "assets/js/27.223fb412.js",
    "revision": "9a298b508913ce635082fa05a0a1e103"
  },
  {
    "url": "assets/js/28.bc56a1f7.js",
    "revision": "d653996048bfb4b8ebddcfad4512ba10"
  },
  {
    "url": "assets/js/29.e4b24851.js",
    "revision": "44ffe6223643168e02c703e5f1562004"
  },
  {
    "url": "assets/js/30.2470bad2.js",
    "revision": "3523f5cfac9e67509add254fb07508d7"
  },
  {
    "url": "assets/js/31.f368adf0.js",
    "revision": "7c14dcab80913462d46285367e23ec88"
  },
  {
    "url": "assets/js/32.d99c572a.js",
    "revision": "70002c4f56c243dc960866bcb5c4a641"
  },
  {
    "url": "assets/js/33.ad7bc063.js",
    "revision": "a3de729b1c91a4ce1a81d075a3637770"
  },
  {
    "url": "assets/js/34.edba73ea.js",
    "revision": "c5426664c53c00978444a08925a74ca0"
  },
  {
    "url": "assets/js/35.1359c0d3.js",
    "revision": "adabef9384ca14e00e6ec4ac6de851f5"
  },
  {
    "url": "assets/js/36.46581690.js",
    "revision": "159556f57c4ecf3fba41060fee338005"
  },
  {
    "url": "assets/js/37.6d7edcc0.js",
    "revision": "db35ef6c31262f2373146d423a38379c"
  },
  {
    "url": "assets/js/38.178ae607.js",
    "revision": "3f8440aa03450898f6084430119ff93b"
  },
  {
    "url": "assets/js/39.4b3152f3.js",
    "revision": "4c56faf455548df530909bb3d18f6224"
  },
  {
    "url": "assets/js/40.d1707db7.js",
    "revision": "435ed30871c6c7638f757a74bc4dbd4b"
  },
  {
    "url": "assets/js/41.017fcd58.js",
    "revision": "d72a93e70443ccca141afbca56c0b2a2"
  },
  {
    "url": "assets/js/42.be8e461c.js",
    "revision": "eb74776cab5bf0f568e8d6ec068d0816"
  },
  {
    "url": "assets/js/43.25c95e2c.js",
    "revision": "94da70af6d82f40d8b3e0ad3b3933baa"
  },
  {
    "url": "assets/js/44.95f8cee3.js",
    "revision": "14114249728ceeb7de48ffe53201031b"
  },
  {
    "url": "assets/js/45.a8e26765.js",
    "revision": "a93ef532122d3990f581a0b8475bb1b3"
  },
  {
    "url": "assets/js/46.aef6686b.js",
    "revision": "9e55633895044649b0fcd425ad4f3cee"
  },
  {
    "url": "assets/js/47.367f63a1.js",
    "revision": "70e56bae7c57740ddbdfff8c53a07e4f"
  },
  {
    "url": "assets/js/48.71ffc800.js",
    "revision": "e8dc7000081b7a3b6e5a31583950e79f"
  },
  {
    "url": "assets/js/49.b91dee23.js",
    "revision": "b8d863a1525e03580d055fafd3477500"
  },
  {
    "url": "assets/js/5.af248e68.js",
    "revision": "4cf80bfe962fa9da10e19892310fdbb1"
  },
  {
    "url": "assets/js/50.aa17cab9.js",
    "revision": "72e400b70949861e5d512dd1ba6558b3"
  },
  {
    "url": "assets/js/51.54902269.js",
    "revision": "71d14e567287d3c80ffcb042f5b7d717"
  },
  {
    "url": "assets/js/52.f87ea25b.js",
    "revision": "ec26a5d39f76972133f83348e9f30aa2"
  },
  {
    "url": "assets/js/53.1338a6c3.js",
    "revision": "ab44f399f9d04769a324633d52a7ae3a"
  },
  {
    "url": "assets/js/54.9e9a10e2.js",
    "revision": "069994f3760866788a53a80ac9d3edf3"
  },
  {
    "url": "assets/js/55.33a4abd5.js",
    "revision": "005780303bddbf4dc35a49359c4dddbf"
  },
  {
    "url": "assets/js/56.e790cf8e.js",
    "revision": "e712f04079f3f7f6d0718fcc05ba5e96"
  },
  {
    "url": "assets/js/57.dfd46e0c.js",
    "revision": "836f24e1f2d2b499dbf61ce46b32ab6d"
  },
  {
    "url": "assets/js/6.2e44deb6.js",
    "revision": "114b945ed8654139e0d84e1b35604bec"
  },
  {
    "url": "assets/js/7.bdf45703.js",
    "revision": "bc946ecfc3f0c5c4ea61efd6b2c98dc0"
  },
  {
    "url": "assets/js/8.7b2f7b62.js",
    "revision": "e0dd39bcec94503eac26b55ea4cc4656"
  },
  {
    "url": "assets/js/9.119ef27b.js",
    "revision": "1601bc6507f4f2bcc80899b873c1fa3a"
  },
  {
    "url": "assets/js/app.d85d545c.js",
    "revision": "5e184c11b6a274cd73a06015ff887247"
  },
  {
    "url": "assets/js/chunk-elementUI.2730ca7d.js",
    "revision": "a675353294a28e74c171aefa1647ed56"
  },
  {
    "url": "assets/js/chunk-libs.129bb918.js",
    "revision": "eb524fe2c724513bb955973b29524792"
  },
  {
    "url": "assets/js/runtime.b537a849.js",
    "revision": "04e4fc96e4d4f7e55d9fb592193104a8"
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
    "url": "images/sidebar/css/sc.png",
    "revision": "9366a7616e8400768f454bc0b1019de2"
  },
  {
    "url": "images/sidebar/css/scorder.png",
    "revision": "adc4481dfa173ce1500017f64e992e98"
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
    "revision": "487427a40842cb44c9c417a1339446d9"
  },
  {
    "url": "nav/code/index.html",
    "revision": "a51af43d6f73ddeff5d713830005a3fa"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "7929b2cabf3989ac67d401b5fb884bae"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "146d21e4c0b152f4d2a2d2d2324ca0bc"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "957072149bc05afcdf4613d4f6388287"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "1847b396d511de63daf51d0ddfde880e"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "e3d36b6d4805499605734a0198987ecc"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "2d04f127488ba3382bd1dad732259f83"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "f74e1cb61708f095a07aaeffd8ca92f9"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "169ce16651dbf1d7c846f3aab47a8807"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "f6f7cf562b9b5bbdd4efab07343b4ac0"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "0237a67ff0823dd34387534bcdeb0df8"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "42f1b7f5ac6b57b7f7d599730c662e4f"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "e23e94ebbf7f89b253d5b5c36bbb52e3"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "6aeb52f0394a7a6459a2456da807610d"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "81f067fbac5f9ab6272e369b252f921a"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "3f882d9f660776e98353178d022390a3"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "52379dbd91545e9aeaf64fa715f2185e"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "ce754ea04e22f93a1d432943fff126a5"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "85ca3635fb7a230bc3972036f7d82034"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "51c9b38188457533282b07dbbff286ea"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "bc050a56aa40aadd91fe552b37bd6695"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "12d1a500ec6df566fae56165f15239dc"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "d5c060675bc7ac106a56ca7074ba8017"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "267f75b77759e0bfffde1572559577a8"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "c752d287b5a3dece4823ca46efdd7622"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "19b222e9bdf3e9c6e2b9b75ef9934081"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "c4b9747f793b08d8dfe6ba3cf8ab9f0d"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "7ad7ea0348b7b3de7715a451e161b31f"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "457334eedd4f6d6acb819d4aab2da2b1"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "13ad29ae1599bed76487b412109e2bb3"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "aee09f47cb20648665f136ef64c3fc86"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "b2dde547c78ab7038f105866533cf7b5"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "750fdf1f9c9caab70cc99a5a2a253ad4"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "2f15a44940a9b06aa6bfca9e894789b1"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "946ce563a77d99448a2e5d24d30c0fff"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "4e196c9beba964b275df6106d4e98519"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "01bd76060aa0f804f5b4806075c0bb01"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "ea50700df31c3c2e6710fb1265fadab2"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "850e7f14f4da4119046edb5ec6a0bed2"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "f34008da8995b17183cd3dc73c4115bd"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "53ca22d9359f3d39fd8d0c3447259da5"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "1edc2e2cc81eb30fdc435b1ba709e2fd"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "7d035d84e3eca6cf67c61a1bc245b695"
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
