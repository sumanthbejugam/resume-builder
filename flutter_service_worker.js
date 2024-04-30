'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ee49f288b7d037177ff2421f19fa2083",
".git/config": "c624b759940193c71e18e5a18ece393a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ae5d61f6eb1fc011a960ad410788ce2a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "e2938cabca93b7704d8d1e9f3c95d921",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "31a2b932577ffe2cfb320e91e0a08ee6",
".git/logs/refs/heads/main": "12943dfb3746ca658ea921ddbe7eb096",
".git/logs/refs/remotes/origin/main": "3b8479683927937a4f8670166f4de8e8",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/6294720a9cc58f545ae8bb82963eaddfee4e66": "fc5bec56be95976093137434fb811a10",
".git/objects/09/315082523ca6023c39b84923bade50a8211ca4": "36dbee3a3795244d9b4656e3ed4bbc24",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/63ad15a4e62ec4ba1d17a5112411cb56ef5d21": "4c296baa6099e099aa0e677dcb2beb82",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/b965b2d482ab3af1b0cfab19d68edcb98cd939": "b77a10039c40e0f08caa729f98738f4b",
".git/objects/23/e185bd5bb360b706553ef96bc24d6c3131df67": "72abcc981d5785f48efefd269b1be96e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/8634d57bf39786550c6c5675e768743cfcb3af": "e427e639e3c617d4ad658ee40ffe81f8",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/d784c18fea880db2301f58a6f018d3cdd28e5c": "f2cf1d469cd2dad785ed9cf7712e6fb6",
".git/objects/38/0fc9facf760dbc8742397d48444f797ce0ca55": "a18013a6d3d54c6bcfe18a840ce2c19e",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/544ba125341b0fcf36c7d67533021737d54cb0": "faba682ae1a812c0a8df83f73ab97985",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/54/3bc47405793a5396fdc5b8bb90db91a9d3190b": "13e0def9d22b19523fe0dafaf979deb0",
".git/objects/5b/ba002363d733d487e076cbf36b432bebd408dd": "048661eb8e677043bc87c32f6545b131",
".git/objects/5d/1662d5ec09e2905d41cf4841f6621d03d143a9": "b988b594742fcca215ff08454724ff46",
".git/objects/65/32ea97843ca16cd34915d0777a8b1c54eef4ec": "bcfe3a0839c1c60d4c516b65872f7dc6",
".git/objects/68/fe39497a14da4b3db3f1998ad61f2fa4f82a97": "baabd627105adc3f2eafd5cf1c2a2a62",
".git/objects/78/ce8639e8fd2219e4472d7a3be9de40043ded1d": "90f8ce25e5452243e34141984e8890ba",
".git/objects/84/7a2e97130eef75d77f81c9f5175c9d5d1cca89": "3e1a943654c22a708e7cc338f566d651",
".git/objects/84/ff275698995370da3909469448eb9559fe765a": "8a2ec4016954a2453d2ae6cee3a5e942",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/027d3621067e4f836e0ce2b88c2902784f05f9": "dd4d1d87adb70d2f4c5d70e3d04cbcb1",
".git/objects/8e/07bc5dd19e7fa1b8d87dd0b7b2030c87882c12": "15ed90edd53d3d5e36155770e76c5dad",
".git/objects/90/b2735665e357907ff93d8e57dfc7aee82a566a": "af3a3fd66439928de7343b054e6d6b27",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/40a75af1917c5589ef6964b4395a79d2ff210d": "0f859e244da913233b7660334c8472b2",
".git/objects/9c/169eabde3241c1495161b04cb2f723563a816d": "4323367b3e07166216681f9526a41a16",
".git/objects/9c/2bd847a15749b622cc01fddf99c03d998a510e": "d3faeb85df07c0ff6a09809a000bbc96",
".git/objects/9c/65298755c9a71b050aee25bf67abb4fc6133f2": "8d879f7e7612eb9c2068b4824f9803b0",
".git/objects/a0/af4f95babcc455e5c0fddad4f95a583601d164": "8d5f818a272f2d76ded697bea8e7628f",
".git/objects/a2/cad352107e4e25fa04755a7ba8f3bed0abf614": "abb3fd6d12dd2b351c8d179157173ff1",
".git/objects/b0/d10135cc65559c9e83848d40171187c3ffb448": "10e7257164aa2fe3d15f1fa18e3eb24c",
".git/objects/b1/a6bec92f613dd81ba3ccb4de0e56eb21f2cab2": "01b6a3774dfe3b4ceb6002b1811d65f9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e6/c0341744eb2e9dee0ed6b9d20c34a184619c63": "aa6b0e99adea8a8f0f27865e3947514f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/2fe0fa2e7b6768e5a253b931e85438331fabfe": "bfc32f6f40a5b69bd5deeb047abdd473",
".git/objects/f2/6113dd6d316efd5108c01a1a20da35b5a1f4c9": "01dd3fd4a2617a5a9f17dd8e37febe30",
".git/objects/f4/187f52b71151324db5995c4198d6adfd815bce": "a6a50b5af4de5e3779b39bba091b8c72",
".git/objects/fb/50a731827c209c89dbb5a6842bde350b41e110": "41c7543c7cceb794bd38f679d92544b2",
".git/refs/heads/main": "72e2a523fb42eff6a819efa2db48c638",
".git/refs/remotes/origin/main": "72e2a523fb42eff6a819efa2db48c638",
"assets/AssetManifest.bin": "f0372425325b1bd09211d8d20d6e48b3",
"assets/AssetManifest.bin.json": "b64fae7bc5f073b2670cdd6e1a0d708e",
"assets/AssetManifest.json": "5b2639413c7cc0731dbbfebb583eb7a1",
"assets/assets/techs.json": "af26b79af5ab123aa1a5148c302edfc7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cc0ff1643ce5fb49447da970b41dc0f8",
"assets/NOTICES": "40638f7cd2d248971843aa27d5b5e18c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8a7563943ad858bf5cdccdd45188633e",
"/": "8a7563943ad858bf5cdccdd45188633e",
"main.dart.js": "87b34ec5a43385ed5e3609d7f1dc48de",
"manifest.json": "72b99c518ce5c5267c6732a6a014bbfc",
"version.json": "81643083b9356ae4fe38056c7849408c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
