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
    "revision": "a4850c3760680733c338377b886d66cc"
  },
  {
    "url": "assets/css/1.styles.e4c6f4b0.css",
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
    "url": "assets/css/2.styles.70eebdfb.css",
    "revision": "be4249466728e0e5acbe6cabe5c399a5"
  },
  {
    "url": "assets/css/4.styles.3bf4261c.css",
    "revision": "db3af59f4aeeab6f8a8acc3e4f38c1cf"
  },
  {
    "url": "assets/css/5.styles.23e8bea7.css",
    "revision": "4799e47e4e7567ebf68cf29932c3b9af"
  },
  {
    "url": "assets/css/6.styles.2e44deb6.css",
    "revision": "f7e709a342cc3a2399c1b89c22a4f618"
  },
  {
    "url": "assets/css/7.styles.96a6ba26.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.53b7f8dd.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/9.styles.b78ec1d3.css",
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
    "url": "assets/js/12.8ad8238c.js",
    "revision": "ac524c1fefeb10eda4ac6e88dd7a3c1b"
  },
  {
    "url": "assets/js/13.568f1d78.js",
    "revision": "1254334955cc7b4340d736ee2a9efce7"
  },
  {
    "url": "assets/js/14.671e37be.js",
    "revision": "6a51de11b5fb11d6e50bf6a3361a6d54"
  },
  {
    "url": "assets/js/15.d9f1ad32.js",
    "revision": "2672f6de022d5c7e1379960882795757"
  },
  {
    "url": "assets/js/16.bab55e26.js",
    "revision": "d134d58e801c0d8b6f2aeb6abcfdef64"
  },
  {
    "url": "assets/js/17.b9855ce3.js",
    "revision": "d38b632ffaa56b8a41efba1101eadabd"
  },
  {
    "url": "assets/js/18.5469b234.js",
    "revision": "87cd4c61f5bb8bd3aebde0b9b5c290fa"
  },
  {
    "url": "assets/js/19.fe477d6d.js",
    "revision": "0c2d38320ecb41d4cb42dca90cd5edad"
  },
  {
    "url": "assets/js/20.99190716.js",
    "revision": "29667d5ec95073103cc0b92fa29e3d19"
  },
  {
    "url": "assets/js/21.97ee73e9.js",
    "revision": "bf729dc9545131bc8f698895ad736a29"
  },
  {
    "url": "assets/js/22.21349fc5.js",
    "revision": "f68418305ff61d1e3eba830544071857"
  },
  {
    "url": "assets/js/23.fe982b53.js",
    "revision": "8f34a0c7860fa6f375ed8d86de520656"
  },
  {
    "url": "assets/js/24.e2affb83.js",
    "revision": "6c7e1cbe4866d05e87d2c523901be9cf"
  },
  {
    "url": "assets/js/25.cfa407b7.js",
    "revision": "e707c9a80f661940ccda29a3ca2536e9"
  },
  {
    "url": "assets/js/26.bb429ca7.js",
    "revision": "4428b95019ccc703d6f44d5dc1b72972"
  },
  {
    "url": "assets/js/27.d86e98ff.js",
    "revision": "09413bba7a954d95eefd5dec76707da4"
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
    "url": "assets/js/32.18673a2c.js",
    "revision": "38e5fd44cf0d9d9c8b40c98bc825649f"
  },
  {
    "url": "assets/js/33.5c55e4fd.js",
    "revision": "b079f9b9d48526fb4a8b6c38fbd7e480"
  },
  {
    "url": "assets/js/34.608e9c28.js",
    "revision": "07bcdf5b33a4ed2af5e7c5b7797bce11"
  },
  {
    "url": "assets/js/35.343420cb.js",
    "revision": "7a4f3d041c149c1adeac2ac08f708f0b"
  },
  {
    "url": "assets/js/36.dca05b16.js",
    "revision": "99286d03b1550d44416ab94c553bd6b8"
  },
  {
    "url": "assets/js/37.6d7edcc0.js",
    "revision": "db35ef6c31262f2373146d423a38379c"
  },
  {
    "url": "assets/js/38.57639507.js",
    "revision": "4cb50acde8879196ea4a949605df912a"
  },
  {
    "url": "assets/js/39.c2e5a701.js",
    "revision": "def7b2ec6c1c2565c1d0d0e8aee75428"
  },
  {
    "url": "assets/js/40.d1707db7.js",
    "revision": "435ed30871c6c7638f757a74bc4dbd4b"
  },
  {
    "url": "assets/js/41.3877d148.js",
    "revision": "8561e45e96c52ed868865979afce3ff1"
  },
  {
    "url": "assets/js/42.e86a3856.js",
    "revision": "2ec1a9413df2b4bae2970d69663220ee"
  },
  {
    "url": "assets/js/43.850595b0.js",
    "revision": "e763901ad5c11f717c1c03c571d21b30"
  },
  {
    "url": "assets/js/44.f1bfac5a.js",
    "revision": "1feb710862f72dec60be801d66fe2296"
  },
  {
    "url": "assets/js/45.4bead14c.js",
    "revision": "cb9c3c1fd72f466ff111b1744affbee3"
  },
  {
    "url": "assets/js/46.7d0570b1.js",
    "revision": "06e8de247336b13e4bd1eed186e22da2"
  },
  {
    "url": "assets/js/47.33456936.js",
    "revision": "434eaa6216c7bc531dbebab429e5750d"
  },
  {
    "url": "assets/js/48.56fb6033.js",
    "revision": "374ac1ab5e08b5faa1f6b126ac4868d2"
  },
  {
    "url": "assets/js/49.4c489be8.js",
    "revision": "d37eb6d268cfd1c690f013b4d3ea512f"
  },
  {
    "url": "assets/js/5.23e8bea7.js",
    "revision": "c4dc42bbc09ed5cb55b41bb11765a83e"
  },
  {
    "url": "assets/js/50.6c8c634e.js",
    "revision": "454a99393afa975b62b5ae3d089fdebd"
  },
  {
    "url": "assets/js/51.f45ce43d.js",
    "revision": "f2d87b7aafea6cb9a85d8f751430a853"
  },
  {
    "url": "assets/js/52.4cb51f5d.js",
    "revision": "dea6e3445a87e00882099f862ecccced"
  },
  {
    "url": "assets/js/53.0e57edd7.js",
    "revision": "668dd10ce33f32d27706d7d385956d19"
  },
  {
    "url": "assets/js/54.792f888f.js",
    "revision": "915ec81af0df6a23e5f569b4c224c510"
  },
  {
    "url": "assets/js/55.7d72457c.js",
    "revision": "1fe8b18e2f0547725c2925f84ab098bd"
  },
  {
    "url": "assets/js/56.a66909c3.js",
    "revision": "d8db5d2bcc4737582ea9ca7f564f3545"
  },
  {
    "url": "assets/js/57.fa79dab3.js",
    "revision": "c0b94ddfb3121287e866521c2511d908"
  },
  {
    "url": "assets/js/58.c9346dce.js",
    "revision": "7d3f8518eaabca7bbd5b86de4fe86a92"
  },
  {
    "url": "assets/js/59.1581dcf0.js",
    "revision": "56d2951a360ef16bc50aa735a6ae4088"
  },
  {
    "url": "assets/js/6.2e44deb6.js",
    "revision": "114b945ed8654139e0d84e1b35604bec"
  },
  {
    "url": "assets/js/60.bf1a2020.js",
    "revision": "5a8369cd8692d44b1c333cb34a94b9db"
  },
  {
    "url": "assets/js/7.96a6ba26.js",
    "revision": "f95e1115caf666621ac888713cc8ed53"
  },
  {
    "url": "assets/js/8.53b7f8dd.js",
    "revision": "1e45b1f8551e4e99b02a9d560b759e91"
  },
  {
    "url": "assets/js/9.b78ec1d3.js",
    "revision": "403abe7682d420e6bf474c8ad85ce8bd"
  },
  {
    "url": "assets/js/app.d85d545c.js",
    "revision": "5e184c11b6a274cd73a06015ff887247"
  },
  {
    "url": "assets/js/chunk-elementUI.e4c6f4b0.js",
    "revision": "aaae07d9618cf730b3654294bef81619"
  },
  {
    "url": "assets/js/chunk-libs.70eebdfb.js",
    "revision": "8e794571798b7ec71bbcc5a5f77d69f5"
  },
  {
    "url": "assets/js/runtime.25e8d8c0.js",
    "revision": "8b2406ae898cd75ba18b5e70adf3daa1"
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
    "revision": "89730830371ee74e63acd6826bf16c8b"
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
    "revision": "829fc9abffa5d7ee4399b8d7c3a08ead"
  },
  {
    "url": "nav/code/index.html",
    "revision": "709d0267fec43b5902e58fe1ae519400"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "8f6cad27ae6bdaec5c1dfbc5b9bb1114"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "d0cde54a184798407aeaa3725903c317"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "5ab126119406d9544e25222dd1bc1931"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "1ea6d3fdbd3697cf00084e9470940b08"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "98c68d84859facead77f5b1cb46bfc3f"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "8482e02e2e77f18c4ebc6c2ad8a4e03a"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "d1a63bcac04d60f763649e8023c6f300"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "330f652d4c2ddf0eb50c34df193ca58b"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "7cd4d9fe87ec2dae5fb8adcd4fd0cb03"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "22649d05937acdb70c11d756d681e257"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "9ac51a1b452c47c74bf70aff18591652"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "2cf5acffd31cf81c66a966ad91ec12a0"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "01067a89ddf09b6e46dd358c085cb136"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "dfb49f7de6a21ec97d95f5645ed91ab6"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "655da28b06b37ebdea53c6d39405a501"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "743de18e92fa42220e0c64afba82245d"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "0b90231d88635da15e9421589a7d32c4"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "e97dc44d8a6eb76ea69b2a2c9e25f2ec"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "c67eb65cdb53ceaab0cf1ce5da7bca79"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "9221678c3636e2d5ed776deeeb28076b"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "ae64ffee00d3cc565fe278ba67b703ea"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "f07ac45ed64bd79853381bf8be513acb"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "5e92a0f7a1e9917a088879a0dd53fc46"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "fb83a4d4c16d4c5fc1b2f78c20bd41fb"
  },
  {
    "url": "sidebar/article/好文收集.html",
    "revision": "36320b9b7956ca2f39edb023141ef91f"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "6d3f86f9a5fb948211f6ecc92dac19b7"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "f7cf153fa50168319ba5086deb072916"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "211567a7162a2d46227cee19a25fb1a1"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "41094539bcac68a2165a1f96990199fc"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "a5ba69e90fea9a4d98abee489a2fb9f7"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "7832ce7f124a586486b169434085a596"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "ba5f03076c8aeaae4bdc135da24907bf"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "fdd9379c0ddf723290e0f2932152c861"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "7991dfab0a1458da4ffd4a8b91e55ec2"
  },
  {
    "url": "sidebar/manager/消极心态治疗.html",
    "revision": "d275d2c27aabb3fb322f668afde4a3c8"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "37cee3b16f13d4fee34a9751e730e46a"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "9af18e7d1d57a37d3f61d581fed1443b"
  },
  {
    "url": "sidebar/study/code.html",
    "revision": "ee8c5012a2a9361f08d960a2104e4903"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "a54c43955cc9a4b8b2921215d9b72d40"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "a208b0865faf6f2fc013c346b370267d"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "a43be213d3ffdbe9e36c2e607eabfe56"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "23b2d2f8cb61a62b2dda59c3dbf9ee83"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "4cad8f47871f5c98b9c07c9b0cde83d4"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "785a8e4ab7e40f4bc511105f7802d175"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "46eec0b596b14505bdb5eed221939f28"
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
