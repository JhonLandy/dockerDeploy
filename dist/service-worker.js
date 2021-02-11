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
    "revision": "f3d5e17ecf42ab5b3c0ea19b94c35d15"
  },
  {
    "url": "assets/css/2.styles.07b06dd1.css",
    "revision": "f7bc72718d55e22e136bba462fc1b0f5"
  },
  {
    "url": "assets/css/4.styles.e620b36a.css",
    "revision": "bab7764a19b2198c323fb801ff6a659a"
  },
  {
    "url": "assets/css/5.styles.cd7b4773.css",
    "revision": "b93e1dc8882138b1739977e37938b481"
  },
  {
    "url": "assets/css/6.styles.50c351f4.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.79218538.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.78b0b64d.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/9.styles.e6c05e28.css",
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
    "url": "assets/js/10.5438efa4.js",
    "revision": "8c9bd8a7c46103d667f26feb37ca7bff"
  },
  {
    "url": "assets/js/11.02a79157.js",
    "revision": "31aa0b75fc102a1ab377eaac0feacee8"
  },
  {
    "url": "assets/js/12.b456a37f.js",
    "revision": "802718f512103e79f72cbb5e444c9a49"
  },
  {
    "url": "assets/js/13.568c6f22.js",
    "revision": "e80807ec57be75a442fe5ed02cee2caf"
  },
  {
    "url": "assets/js/14.bb83044c.js",
    "revision": "46583817cb51668fd5b2990c178d5879"
  },
  {
    "url": "assets/js/15.b018ee4d.js",
    "revision": "119425f4acea20deea103d300683f2ad"
  },
  {
    "url": "assets/js/16.fff23141.js",
    "revision": "32e8936d948fbc27489ff2b02c55ea61"
  },
  {
    "url": "assets/js/17.27be4bc3.js",
    "revision": "c42abe9b367ca039a1723f802bf40605"
  },
  {
    "url": "assets/js/18.b6ed6465.js",
    "revision": "5eafe60ea3ec33d8f9949f4a977f4d7a"
  },
  {
    "url": "assets/js/19.12005f96.js",
    "revision": "d9218ef37d5ee7ebff305314b8873a74"
  },
  {
    "url": "assets/js/20.a7821308.js",
    "revision": "b9039c48ab3354508b64ccb98590156b"
  },
  {
    "url": "assets/js/21.6b40690a.js",
    "revision": "d4fe6064e2dfccf59da1aa6ed0c87650"
  },
  {
    "url": "assets/js/22.dc629407.js",
    "revision": "fb86655f76e7508e2a5eca0918296519"
  },
  {
    "url": "assets/js/23.c9e154e3.js",
    "revision": "66ccf32e9d26841475a1d790ab7369bc"
  },
  {
    "url": "assets/js/24.1cb512dc.js",
    "revision": "90b1b78f20574fb501747d618634dae4"
  },
  {
    "url": "assets/js/25.45ed5364.js",
    "revision": "9b7f23cf7bb60575e7bd14fd79cfa810"
  },
  {
    "url": "assets/js/26.00893452.js",
    "revision": "253b8ad386b78392c180bbaee97bf926"
  },
  {
    "url": "assets/js/27.3d1a0d3e.js",
    "revision": "a41ddd9947fe138a9fe53153f95112f4"
  },
  {
    "url": "assets/js/28.06d31038.js",
    "revision": "d6a7577ef936f1f9b300b397c21bfc4f"
  },
  {
    "url": "assets/js/29.58701919.js",
    "revision": "ba43b80937fa945e28eb086b1db4fb0f"
  },
  {
    "url": "assets/js/30.9bbafddd.js",
    "revision": "5a736a7361636769c5d35aba64d4059c"
  },
  {
    "url": "assets/js/31.2df1ac09.js",
    "revision": "c2752d127e3fd18b8515d4c8be47cf7f"
  },
  {
    "url": "assets/js/32.8815ee29.js",
    "revision": "6528b9272f4b81341794b2c6c87a2947"
  },
  {
    "url": "assets/js/33.f4a46142.js",
    "revision": "8d4226a9fc2977a84829b16f5d458a9e"
  },
  {
    "url": "assets/js/34.b1cf44f2.js",
    "revision": "362c6702cd9e0202e56063708e431842"
  },
  {
    "url": "assets/js/35.4024c79f.js",
    "revision": "52fb487c473f2c0356d27f6d369d44f2"
  },
  {
    "url": "assets/js/36.69b616be.js",
    "revision": "06dfd98632efdc209796e860f28adee9"
  },
  {
    "url": "assets/js/37.b006444c.js",
    "revision": "875e0adcdf1b305d1a8ec365573a00e9"
  },
  {
    "url": "assets/js/38.e950f7fd.js",
    "revision": "892e93cf2f09d60fba285a6f46f325eb"
  },
  {
    "url": "assets/js/39.e7c2f86b.js",
    "revision": "3bb40f743be9de9bae0b735f71529e32"
  },
  {
    "url": "assets/js/40.0a14b584.js",
    "revision": "d6fddac3a8dea6c968740874b48d204e"
  },
  {
    "url": "assets/js/41.48d5544b.js",
    "revision": "c5c9e2943f03ff7a6157d55a93fb4b92"
  },
  {
    "url": "assets/js/42.dad084f6.js",
    "revision": "d3c6bb58a388d1cd473283f48be48f57"
  },
  {
    "url": "assets/js/43.09f2caf5.js",
    "revision": "8f1e9106a490e88af4928b32507191d3"
  },
  {
    "url": "assets/js/44.441a5190.js",
    "revision": "72dc9a69927a1d8b0da66552d473b5a0"
  },
  {
    "url": "assets/js/45.c3cbec49.js",
    "revision": "14188899e8d7005c86736224cec91299"
  },
  {
    "url": "assets/js/46.9b9e6fc1.js",
    "revision": "3116691a59a3c44b0abecf9a81b91398"
  },
  {
    "url": "assets/js/47.7a553700.js",
    "revision": "3a8d3ed0332c1b59ae6232ff3fc4cff7"
  },
  {
    "url": "assets/js/48.c2ebeaaa.js",
    "revision": "3ceed82a59756ff7b11c13adff9449b4"
  },
  {
    "url": "assets/js/49.8d60b9ba.js",
    "revision": "f92303a98a07039941609c3a3fe457e9"
  },
  {
    "url": "assets/js/5.cd7b4773.js",
    "revision": "8b3ad257661632c7021d371eeb2c7e59"
  },
  {
    "url": "assets/js/50.06a58fb8.js",
    "revision": "fb6d064da501a2438d7037a59107de1e"
  },
  {
    "url": "assets/js/51.0511ec50.js",
    "revision": "e94c779eadfd26e82fad3f00adb6c22d"
  },
  {
    "url": "assets/js/52.f50ffd53.js",
    "revision": "0a7e08142a133c941d8532a7e167ffd5"
  },
  {
    "url": "assets/js/53.88b05b53.js",
    "revision": "a630df920acab0672c4c9535f76e8670"
  },
  {
    "url": "assets/js/54.03df30d8.js",
    "revision": "62094398229d296c655a7a5eacdafbfc"
  },
  {
    "url": "assets/js/6.50c351f4.js",
    "revision": "18409a5867e14525a154875b2877d3a4"
  },
  {
    "url": "assets/js/7.79218538.js",
    "revision": "6df44ba3dcf50c134025df8ebf7a2b5b"
  },
  {
    "url": "assets/js/8.78b0b64d.js",
    "revision": "72eef6c16cebaa3618b9ee255324ef9f"
  },
  {
    "url": "assets/js/9.e6c05e28.js",
    "revision": "f8f24e994ac53d939829382f409162d9"
  },
  {
    "url": "assets/js/app.280189ca.js",
    "revision": "f0992974767f0d2371d4ed480e7807df"
  },
  {
    "url": "assets/js/chunk-elementUI.827881f8.js",
    "revision": "a39470d45dc5b68f66310e005596ebbb"
  },
  {
    "url": "assets/js/chunk-libs.07b06dd1.js",
    "revision": "5a38fd0c4ee2998ac22ac851d2947ddc"
  },
  {
    "url": "assets/js/runtime.81a23af7.js",
    "revision": "0e1396d51553ef22b3c8dcdc468d9c5e"
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
    "revision": "19a79f97b59284d12b143de06a5a4d8a"
  },
  {
    "url": "nav/code/index.html",
    "revision": "2dd7a26a2d6ec3ceb50e746d9b480076"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "eecbec79c15d499230f4441755a4f1c4"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "e12031fcc5fe8e6578fd497806e811ba"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "e5b716f484707291b9c6fe10354b98d9"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "d877b85b3c7b47d905cb8b5ea09cb725"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "10f739c792161997cc714e54892f9f4b"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "9e293d3af12e3d65a30df8bdeba109a0"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "782c9c74307af72dee53da70777a168e"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "8c5857512032645f65d9d237df7cc294"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "64911e9181b7b40b056cf1c31ad9172a"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "037f23793222e655ea811300ff0a0d24"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "1da7072e2668b77b6d5f6426bc36c9b5"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "e860c0d1e12d3a3c6c6909f99b4a4e62"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "322d8ea712e46068676f87466cea255d"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "69e0cad4b1e83edc55685dd85ae3bcf5"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "e09e1e6ba6a6ced1139d315574811d65"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "a687a18bbf19126f6d73fda6de33679e"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "1bfc81dbda5051b92bd86d889b1237fc"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "fb0cbbd9903ff4b2a6b7841f33764c67"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "5e4864ffb4cbc7ccff29f3b6310877e4"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "e6d4fdb40ba7950dd8facc14172b3fb7"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "b29e79cc093c04a54f346f16d93c3c7c"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "edf151fc5aaa7b20397ded7bd76510b7"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "e5cfde2172fc7f17377048cf41b61c63"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "e4e01833c9f86cccc987a26accf865f6"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "0686c418abc88121ee2786593adf8c3b"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "224667ce3fed0906ddc851aa6bc4efb4"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "27380d4493a2565beecc384f26c7f53a"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "a10e272f27764bf01a37c421340e0137"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "38ba67d11574adad4b7f2c4f85545cc9"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "fdebcdb483d55d65a611a38126512f0b"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "80978f36f304251c61a4a8d41c40c9fe"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "d6697c43a24868b9dee17cd25154a041"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "198c56c859dbead1f2c8a2e078a309ea"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "aebcbfb13d3781d7b2adf1116b51f8c5"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "d57c7cc138b6938abbc43a00924073b8"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "361ceb534fb144370e0da59ec42d2a45"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "de04977793bb63f4b141daf843975f4a"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "0ef114584c188f3556ed49152a88576a"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "f4c5c31d8df75afd2a4bb69448edd9d8"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "79fb09feadb5a7c2c8d809f06d78ccc3"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "504dbea5c0d458f871a90b6fc5ebb13f"
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
