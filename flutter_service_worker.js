'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9d237b1a9622149a54a48dee2fd11c6f",
".git/config": "c624b759940193c71e18e5a18ece393a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1456b1fa54a12a63d90e1311f6c5c7ad",
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
".git/index": "89fe83f6c4674a9d818d64db59bd8ff0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7702d67fbf368304f0ee8c04d8e46c19",
".git/logs/refs/heads/main": "25a1cecd054b0e3aed2516e083377afd",
".git/logs/refs/remotes/origin/main": "b07ccc4be67165bf92f36471d8f865a9",
".git/objects/03/389a8e3ee26c67fe0d51c1c63fddfa5893b635": "f6e42ebe31e32895f3ced2042e3e1ec9",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/6294720a9cc58f545ae8bb82963eaddfee4e66": "fc5bec56be95976093137434fb811a10",
".git/objects/09/315082523ca6023c39b84923bade50a8211ca4": "36dbee3a3795244d9b4656e3ed4bbc24",
".git/objects/0c/90f02a3d1f5167cb412a2044dcfc7d6865014c": "f5f0e3d0aeb49dd441f69b632dc53dfa",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/63ad15a4e62ec4ba1d17a5112411cb56ef5d21": "4c296baa6099e099aa0e677dcb2beb82",
".git/objects/16/38f593957ac92425b94582a63332ca5c92dc30": "7bf63bb58a5ec9678eb50db3debabda5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/b965b2d482ab3af1b0cfab19d68edcb98cd939": "b77a10039c40e0f08caa729f98738f4b",
".git/objects/23/e185bd5bb360b706553ef96bc24d6c3131df67": "72abcc981d5785f48efefd269b1be96e",
".git/objects/23/eab7d077d69ff3a347cf937a6855b6dce7eca2": "0554e077132aa0c9d6c1d1ad341ef847",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/aa7ac7f0dc00c44ee90b295e7c0f0bd875a8f8": "9c5f1468641854ee6dc8b1b779260c60",
".git/objects/26/4db5a53104280222996a36fcd0747684795085": "c2a5268e58b078b609c0df10a6745e83",
".git/objects/29/8634d57bf39786550c6c5675e768743cfcb3af": "e427e639e3c617d4ad658ee40ffe81f8",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/d784c18fea880db2301f58a6f018d3cdd28e5c": "f2cf1d469cd2dad785ed9cf7712e6fb6",
".git/objects/2d/68a13d30011c2b0ab8eb92b73eeedaf09ad4c9": "0ff1322f93e36eacc18b60d585b4f7f7",
".git/objects/2d/b468444ea8dabb9f07979bcdd99d18ea783762": "a5be93ff9df01730e437ffa998c45b01",
".git/objects/30/f623d3daf80be9cd3659128eeedaf665ee2425": "52b2bc8f5eaef63d8aa6ac76648cbc20",
".git/objects/37/d75f00fc70d387277f566f3f93229414559cdf": "e148e3ff58793e15af192fe196ee4e6b",
".git/objects/38/0fc9facf760dbc8742397d48444f797ce0ca55": "a18013a6d3d54c6bcfe18a840ce2c19e",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/544ba125341b0fcf36c7d67533021737d54cb0": "faba682ae1a812c0a8df83f73ab97985",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4e/d2b6322c3e96ec92d092044919df218e690e9c": "1a9faa48564c3081473d1eb7195a0e2c",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/5983ed4cfa79fe3e62bab2e7592e58f717322d": "91f438e4cee0dd74f8f550a2f873a653",
".git/objects/51/aee7a7ece090affb163de3a131ae73525a50d7": "2b38bdaa04a6b64cc44c1f4e25779a9e",
".git/objects/54/3bc47405793a5396fdc5b8bb90db91a9d3190b": "13e0def9d22b19523fe0dafaf979deb0",
".git/objects/5a/e031a628bbafd061bd1b754a7cdb30294d8730": "ec01333b808d2a87bc2c6d8821a04dd3",
".git/objects/5b/ba002363d733d487e076cbf36b432bebd408dd": "048661eb8e677043bc87c32f6545b131",
".git/objects/5c/847dc7f094cac24e12ea19d9da7d580e6dda60": "8808797049795ed3f2ea7836e96fae8e",
".git/objects/5c/a49557d0fcf34c08d56ea246e5b529ba8a069f": "63ad71cd799cb498dc5c9b422769099f",
".git/objects/5c/da1be357723b87a6ad373a5e452c672aed77f8": "be924666a6e85a22a9f97e88d750ac8a",
".git/objects/5d/1662d5ec09e2905d41cf4841f6621d03d143a9": "b988b594742fcca215ff08454724ff46",
".git/objects/61/426bdcf3db9a25bc8f5021938637b90a48243e": "cfa3a40c6db0aa4e9228694f1a24ca30",
".git/objects/65/32ea97843ca16cd34915d0777a8b1c54eef4ec": "bcfe3a0839c1c60d4c516b65872f7dc6",
".git/objects/66/64b628845b82d0376cbea6be1adf72bd12963b": "e9123378d1d87fceb11db1988685b09a",
".git/objects/67/1edf4eb94aaa013b7f7940fa19cfe2b7eee13c": "4fb35f6de85594206d79809f638635d3",
".git/objects/68/fe39497a14da4b3db3f1998ad61f2fa4f82a97": "baabd627105adc3f2eafd5cf1c2a2a62",
".git/objects/6c/15c8ed2951321ce2cd00f52f9d20e98043d948": "ebcfee029a836bbf8932796083a5630b",
".git/objects/6f/dbb2c138fd318f792eed022ef00faf0581a763": "772894d7c5180dbdee462dc4da49cd7c",
".git/objects/72/acf1a1b6853b0b89874dafee1faf9331599f8c": "295325504985f9abfa5a68d92f63206e",
".git/objects/78/ce8639e8fd2219e4472d7a3be9de40043ded1d": "90f8ce25e5452243e34141984e8890ba",
".git/objects/7b/531143341fa520259acb381270bf4a49d3c3e6": "2ce26d9418dde7f75d8cd927a42cee78",
".git/objects/7f/a6d58ffa7393af5fe5c1314115bb4cc79862c6": "fe5331325689ea2548effc9b75847ef0",
".git/objects/80/383d4ec640b71089fd1b9c013b1efba9a94900": "68aefe3fab489edb862195bcde037de5",
".git/objects/80/d53adaee96337f1dcc66c3418a843c9fe32c8a": "3cecb8f1d482d01c9b47676bf7f8577d",
".git/objects/81/7e124d9fa6ac477808dca497ab939a7aefd09d": "ad6e3e80e00587ff0876bfad25dbf350",
".git/objects/84/7a2e97130eef75d77f81c9f5175c9d5d1cca89": "3e1a943654c22a708e7cc338f566d651",
".git/objects/84/ff275698995370da3909469448eb9559fe765a": "8a2ec4016954a2453d2ae6cee3a5e942",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/027d3621067e4f836e0ce2b88c2902784f05f9": "dd4d1d87adb70d2f4c5d70e3d04cbcb1",
".git/objects/8c/67b483f17211c8f9166529fbfe6e58ed01186b": "b740a528a3dd45e4e01f736b3707f11c",
".git/objects/8e/07bc5dd19e7fa1b8d87dd0b7b2030c87882c12": "15ed90edd53d3d5e36155770e76c5dad",
".git/objects/90/b2735665e357907ff93d8e57dfc7aee82a566a": "af3a3fd66439928de7343b054e6d6b27",
".git/objects/91/d6f3bab896f0d2a197a5fd4693b51d9ad14c6d": "a3d656e6899a8c17323012bd583014df",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/1a678ff24459e537c5e4f2251a4a4d64fa6f58": "f1f2c278dae0f4a93b0e2a01be43bf4d",
".git/objects/96/40a75af1917c5589ef6964b4395a79d2ff210d": "0f859e244da913233b7660334c8472b2",
".git/objects/96/d4fdec05257fffe77a84d591004980fa2df118": "f9257e3f0f5d27295ef4187a53ca1ff2",
".git/objects/99/a8d0b6391ba38eeacdab2d956a5e41caf0d66c": "dd22a6668889126e2b0a412597cf160e",
".git/objects/9c/169eabde3241c1495161b04cb2f723563a816d": "4323367b3e07166216681f9526a41a16",
".git/objects/9c/2bd847a15749b622cc01fddf99c03d998a510e": "d3faeb85df07c0ff6a09809a000bbc96",
".git/objects/9c/65298755c9a71b050aee25bf67abb4fc6133f2": "8d879f7e7612eb9c2068b4824f9803b0",
".git/objects/9e/0ed786c1f05d2ee1070ada1392df28d289a879": "df8524a009a6687a55f071b5fbbee274",
".git/objects/a0/af4f95babcc455e5c0fddad4f95a583601d164": "8d5f818a272f2d76ded697bea8e7628f",
".git/objects/a1/caf153fb6b0c2d24916748b9ba8a6a01d29ee3": "c9d1ded16d3c33983d8efbd996deb078",
".git/objects/a2/cad352107e4e25fa04755a7ba8f3bed0abf614": "abb3fd6d12dd2b351c8d179157173ff1",
".git/objects/a6/94dee456188a11353079ed803cace43310eecd": "b8b051415d140dda364023ac70cde85b",
".git/objects/a8/bf1354fd4b9393358f3635da09d18e8280f09c": "69fa0f8b5f4e5f91d8a9640aaa18f200",
".git/objects/a9/75598d590d05d9a0e9dc18fd0042279983893a": "f3bf00ab97e7baa904875f3c39761cc9",
".git/objects/af/412904479010ef28b139e6fb2abf88bafef3b5": "a9ea4b7c7c93e8eead766a6fdfe9d223",
".git/objects/b0/d10135cc65559c9e83848d40171187c3ffb448": "10e7257164aa2fe3d15f1fa18e3eb24c",
".git/objects/b1/a6bec92f613dd81ba3ccb4de0e56eb21f2cab2": "01b6a3774dfe3b4ceb6002b1811d65f9",
".git/objects/b2/6cb6b2786b839fa3a5f066ac3d97b0b58e1b06": "bd33060b534506775426bb83ace538fd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c5/2e46193b32d4c917c5d144f4b598eafee2b959": "66123e92e15860d2cc7bc20c83fed615",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/bbde2b050b6e383d338475ef40e65b8e2f9878": "cac459153da564d75d7dfc3b3659c730",
".git/objects/da/26eefe12143c2d7846af37ba3efbbe81a11b74": "45c3ed37b28b0ad5d0935bb360a977f5",
".git/objects/e1/8241de73f868305397fce84ead32be67e39beb": "c5828a02d21be294686abb0a1c0c79e1",
".git/objects/e6/c0341744eb2e9dee0ed6b9d20c34a184619c63": "aa6b0e99adea8a8f0f27865e3947514f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/eca139df6208e22b636515943607d00429f08e": "b6d3310d2fb1e0cd64d9070d874cf020",
".git/objects/ef/0883cf64419f7b2911c8309ccb9a5392c919c1": "8728ed4ce6d74ead049fdaf775697097",
".git/objects/ef/2fe0fa2e7b6768e5a253b931e85438331fabfe": "bfc32f6f40a5b69bd5deeb047abdd473",
".git/objects/ef/c136a77acf087e105cb82f170fc8fe9298c8e0": "0f9d0d5040ad4b896e4f7e907d4fdece",
".git/objects/f2/476a8025982f30c38a644e277d13337f3c5d71": "d10b6903dcb3d16dd519dd969c08adf5",
".git/objects/f2/6113dd6d316efd5108c01a1a20da35b5a1f4c9": "01dd3fd4a2617a5a9f17dd8e37febe30",
".git/objects/f4/187f52b71151324db5995c4198d6adfd815bce": "a6a50b5af4de5e3779b39bba091b8c72",
".git/objects/f6/31e6ba3e2543555114cff7b9633d70c5bf74fc": "80d3e1e897d4b70319c045deb0ca8ec0",
".git/objects/f7/d2f1a78c122bfe9f571d6df27cc96e05219205": "1c335b7236626f80f247cf17bca23c96",
".git/objects/f8/9c125d18b09157b4514a7761ae41d1fdec73d3": "eb3194164552553e2421547408a6668e",
".git/objects/fb/50a731827c209c89dbb5a6842bde350b41e110": "41c7543c7cceb794bd38f679d92544b2",
".git/refs/heads/main": "b932da23c9090c50e72453ff7454b8c8",
".git/refs/remotes/origin/main": "b932da23c9090c50e72453ff7454b8c8",
"assets/AssetManifest.bin": "f0372425325b1bd09211d8d20d6e48b3",
"assets/AssetManifest.bin.json": "b64fae7bc5f073b2670cdd6e1a0d708e",
"assets/AssetManifest.json": "5b2639413c7cc0731dbbfebb583eb7a1",
"assets/assets/techs.json": "d8c8ebd9b8ffd93aad09825b4fbe2e63",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c9da689cdb6ba8d7ed23b4e77793fb06",
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
"index.html": "a6e9be9787276c4941cbfd1292e361c6",
"/": "a6e9be9787276c4941cbfd1292e361c6",
"main.dart.js": "e1cb43821f15a91394592ae98ddef3e2",
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
