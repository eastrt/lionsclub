'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "24f6b811447a43067c0580dffdf8186d",
".git/COMMIT_EDITMSG": "45c91adebd143a38eede841b175a4629",
".git/config": "1d6c91c38cbb414788693d40142b78fa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "09c2a370dd499ff1397c7aff3a1b9853",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "59c992bd3ffe87d61df0b4e8369e8f91",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "42e459d2dcef616b2b524fd1c047009b",
".git/logs/refs/heads/main": "dc21529ff87550b691e0ad9679686387",
".git/logs/refs/remotes/origin/HEAD": "bae179d37b2c8d8415bd847c9e802d5d",
".git/logs/refs/remotes/origin/main": "b06cd03d00f9aeb0a5bc110a4abe1a91",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/19ecba6ea913e21689ec692e81e9e4973fbf73": "4cf712f1e96a55c0cf885d0be43cb7e1",
".git/objects/07/30e8ec7d0c15c7b75aa617c16dadb851c6c56a": "40e1995f69615ce048ad16f79b848a76",
".git/objects/09/f1696725fa7c3c6edf4ed4496c72e4ef49a7d4": "c0b3e3ae645130fa633a04a578544051",
".git/objects/12/dd0c5b7d6134cbad37356920de67ca2d64d913": "d5831c137a1c1b3795bbf2cf1d33bbf2",
".git/objects/16/5de7e489867853b2bb94ee1f0c2d8611d73a9d": "11ba2d2fc532bcc9dd9f48a1c9701273",
".git/objects/18/5879110e43e782d12b76ce054bb42a3e739fa7": "10cc88405b8384eef410d896e4562b72",
".git/objects/1a/33cd07266de6b8743ee370fcaee5c70f769cb0": "1872588f0979146099af9013206c6d92",
".git/objects/1c/4387622cabc2d8de39e0407250c9adce4846c2": "7e39ac6b1c080401a1fd0bcc7b95c943",
".git/objects/1d/b6511a811af90c8dcb4f8d79c7ffa71fccdc82": "24e5a3c1ffac3f203a6f3aa245da736a",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/22/2b429765de9fb8282bd0353b1f6ef4150ba416": "fb8372b7b405179c901eddb3f61145bb",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/822000d1bb5efef03e6c9d74a6ec5ba4617204": "c698f65ef7a5f8e74c4c912229ddd482",
".git/objects/2a/21f10eede695846ebbb42905946afc32134818": "a91fafdf375a378cac0ea8ce886c31a9",
".git/objects/2f/6bcdeccaa3a6a66abf64c816149b7b2f853fa4": "0b873aa53f5125325134f389f0c219b4",
".git/objects/30/d595fb34b4617d27c3232affda93f335bf1e3e": "7afc3c5b831192def261f4f3967de19b",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3d/c98cd622895de7c15549b3b30afc35aa3585bb": "7d1c013e6986612884dbad1cd20d4f8d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/ba29f41decb927cb097f5b0d91af9e4845d310": "4b6312be05e46ddbd6ce775efbabe8a3",
".git/objects/48/5c514025f8ad58a51b48e36a59de5cb9596eab": "96310b53e820b5900ede334f10df629a",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/53/dcc234db463c29854163c791c087a6f9f2f35d": "296fe65201749f168044d6df7f44c586",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/e97ffb87d5b0da7e51552918ea1a5691e839b6": "5daa72be2485d3a568656909f5f59701",
".git/objects/5b/277ee7b60a058adbac34e12a0fd2009c3452e0": "8d6b2333ac4831307c4b183d5e47cdf9",
".git/objects/5c/29b0a29684c3b1492f5cb222c5eddb71c31a83": "83ecb486d00ba2c7a50694550488514d",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/e8dc3c3c275ac7cd328f18b96823c94d3734ac": "5c6ed97348da948ad37cee1a2e14c05b",
".git/objects/60/fba17b7638db9030c9ea8c9bf0f7cdff26eda3": "2a2bee6de4931b34b095925a6aa92f02",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/b2137641be4ff45c8f191c4b7e5a6ef66c3173": "64e5e3ff4bab7fe068e33c1750d484a6",
".git/objects/68/dbb5524dff996c7ab3f36ea991b6917b2cac99": "165985f49a34739b18851d88df9fb3c2",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/c97b2c335ed47c43347a389561e0d1bc788ffe": "05d2b5f1157f7890e46dab649749e88f",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/7a/8bebde7413cee93d3313e36f0151589791a2ae": "0bd6976bd80f6aedc15999c5870ef326",
".git/objects/7c/5d6a28147e7ddde0683ee62a6c4d6e7474e463": "c8d4676757f622bde0b3f26d8dab709e",
".git/objects/85/267fcc42c4b906ba5484f69c9c2aabfd159fce": "ec550a87fa6d9325e3908771b2cf800f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/bd640a72845a6ebb14036a9fd6ec4c40012215": "f41f0f98b27c56f42e7469c3b25ab32a",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/9b/e03cb14ab54f1b085ee3cf857f9dfea6d657fa": "77fab44a91e90013d3f6c6188f98e4c0",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/e25a4e72b6c711ad4dd255dc685d6964308c30": "d5254ddf0c538c043680db219a01cde4",
".git/objects/b3/78428c9bdae8a8793e6ced96f6328c178bfb63": "c53d579091b91cb5db720111ed18d252",
".git/objects/b3/ebd583a7bff995c530aa76a7fd053875aaaf0b": "6a1180613a83d9b1df359674819105fa",
".git/objects/b5/c1cab2f28ba1d47d4b9d92d236140901ddad3f": "c4e3d4111426445164d5f93064aebe19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/bc47921363919dbf59622ed94ed759097decec": "bf59b3307e2de33f20d560f86dcb43a9",
".git/objects/c3/65848f8ce19a64982b8de2aee66ad4bfdae4f3": "131f99b651dd4394e8f42d9caa0a23af",
".git/objects/c8/403f4528385c8adff29fed33c80c73aeb8297e": "c8813893c481858e2295dde93ed8a1f7",
".git/objects/ca/4920fc9cc9fa5d4eb0ebd000d8fd1a13da77dc": "e9af1ac5f37324e804c019b589b57018",
".git/objects/cc/9aab1fd373a73093f6f3c3181dd012620cc3d9": "171abf1fcf0c162938edcb6835880440",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e7046976a75c9f921bce0334caeb113bf038b8": "826242f7bfc020849e28dc49e4ce9c96",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/7d7992a49ac5d1bef98ff682ff581b75084989": "2b8c78dccf7925abc19a35be5eeac2ed",
".git/objects/dc/d588f23dd63bf753c3422e8c3304e0bb4cd943": "6bb697ed3d010d819f4c18a87b6624fb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/d0ef3a7ef0ba64fb0fa37034d273558e6b91dc": "0ac0e67d94820b3450f6e6a21aaf290a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/77b6482395db16f853819f844a823698ca5b20": "e9d3d315cc4e5fce7cbed608d626a756",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/aa63145ec99e77f0ab42c952064405d2f49db4": "9550b8de41cef849bb79da4be2c8e379",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/b7c253802869d9964caac7c27cb942b6bc49a0": "f0309fd02187a9860f77e3791b6f733d",
".git/objects/f9/a42b7522d1f2bf9bc0d9ae8013c32e090b11d7": "827895c8269390b0f5eaf7ecbfc127db",
".git/objects/fa/004e45d14d192187ef4a0a277e0d863ce33cac": "43e0b3e46762c3d2c4f05905750122ba",
".git/objects/fb/c4f98652267c722e641d757c3c73e2f2ba1359": "4e511559ed47e2e8524b91bc131ec26b",
".git/objects/fc/39c188f40fff9f80e9c4fcc237de40265358cb": "ba1affd768296965273369868070fc76",
".git/objects/fc/f126adaf14763257e45fa35d7d5ce0acc9fde5": "4042c1a58a51bb9dae9259e068858ed0",
".git/objects/fd/d885e6991ecc9ca2e6c6878883c28fb3e59f27": "060e8fea443b35f860c274ab7dc0ffcc",
".git/ORIG_HEAD": "d6adba5db6674bc69be6bbbc4aa9ca51",
".git/refs/heads/main": "18cde82a3b7b8f2956a7fbaab3415061",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9f7ab202ed95669d484e8a5e2c26b54c",
"assets/AssetManifest.bin": "10822b1d8e0ab78a0ed0df7551edccd2",
"assets/AssetManifest.bin.json": "3a5d68c94c198956c8eebe1ba10eea4d",
"assets/AssetManifest.json": "af53073f0905a73f2a6f7f8ce833c63b",
"assets/assets/json/clubs.json": "933d14020bf4f69c72953e94be8b0d28",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "819dd789385667c3230dbd8e13f0d290",
"assets/NOTICES": "d56bfa3769bd1fa414949c6896082be2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "095d302e4874dc64554e8e82f2c76232",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0292de19e6fbb720a639bd436cc5f146",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "33cdd9f10b0209b7f10451c2651b6c4e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "49d70274d511ac24d0b7ed08da07e07a",
"/": "49d70274d511ac24d0b7ed08da07e07a",
"main.dart.js": "37c7573d3a961299c32296d061b4fc79",
"manifest.json": "25b9911c81fe1dca0f382da33a4fcec7",
"test": "7215ee9c7d9dc229d2921a40e899ec5f",
"version.json": "f43c17a898c84f7e2af16c032b21110b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
