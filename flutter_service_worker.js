'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b1282d37359bc9e6ec95a1f5d49f973c",
"assets/AssetManifest.bin.json": "56fdec864576e1d4db6c6d6f6f379b3b",
"assets/AssetManifest.json": "ced5e5c00209aaf84ad9529757d2a966",
"assets/assets/images/ACS.png": "b20abaa2752c7538a8a22fda0fa4c782",
"assets/assets/images/axis.png": "eb8c768d832103f350fdf365804ba3da",
"assets/assets/images/cases/DCMP(35).png": "7d5a6312f3a50b20285518aab34efb70",
"assets/assets/images/cases/flutter_tachydependentBBBz.png": "e0522db2b39345910708537dda220641",
"assets/assets/images/cases/Inferior_STEMI_with_LBBB.png": "062002b8d3bd0068771d1bbf7b734973",
"assets/assets/images/cases/Juctional_with_VPC_bigeminy.png": "ab5741669c091176310462f0bf1175c9",
"assets/assets/images/cases/Junction_with_hyperkalemia.png": "4081378bc6a12b89b466c4263a264d90",
"assets/assets/images/cases/RBBB_flutter.png": "db78798636a1bf1a18f93adfd4d873e1",
"assets/assets/images/cases/RBBB_with_LAFB.png": "5a438c24e5dcb809f23456af34852abc",
"assets/assets/images/cases/RCA_CTO(39).png": "8cd1754f3ebb00f93db8c173968fa971",
"assets/assets/images/cases/RCA_CTO_pmLAD_curplit_with_afib.png": "403b230fbd9b14a9cc756daf6e95b7d7",
"assets/assets/images/cases/RCA_STEMI3.png": "32e3639d3a9b42ef56119c67c9054083",
"assets/assets/images/class/accelerated_idioventricular_rhythm.png": "7730ea0bb595c26bbf7c7dc84230f715",
"assets/assets/images/class/anterior_fascicular_block.png": "aa788b37e979a2d17c36b7df0e3c82f5",
"assets/assets/images/class/anterior_infarction_(lad).png": "f8b3fbc7ef67963b1d41b30e5cd769cb",
"assets/assets/images/class/aortic_dissection.png": "56f889c97d31cefbe86b7b776def2954",
"assets/assets/images/class/asystole.png": "319d297358647839cd7bdbeaac28ed68",
"assets/assets/images/class/atrial_fibrillation.png": "c113b577d5086bc985ef9087019bee08",
"assets/assets/images/class/atrial_flutter.png": "3b18cbf62eac580987e7eb34c9484df8",
"assets/assets/images/class/atrial_premature_contraction.png": "0799b6f08b18aa19607fb09bcc3a8c3a",
"assets/assets/images/class/avnrt.png": "913318b80a77eacaf3c7195f8edb87a4",
"assets/assets/images/class/avrt.png": "1f5f6f379cce99ffcebd3c96e7761a86",
"assets/assets/images/class/a_pacemaker_rhythm.png": "c2b6813d8dc4c840fbbd5d9fd364227f",
"assets/assets/images/class/brugada_syndrome.png": "dacfdd8e0813caf4bd2ac83b7effb9b8",
"assets/assets/images/class/complete_degree_block.png": "dc2820704140536f869ad48a75b669b0",
"assets/assets/images/class/digoxin_effect.jpg": "31db2279e6798a4b890ce58747e9436d",
"assets/assets/images/class/early_repolarization_syndrome.png": "e50785bdf7e01870a2bb0f7ae109d6da",
"assets/assets/images/class/first_degree_block.png": "24a4a8139f92c0798ddca530ca5ea78b",
"assets/assets/images/class/hyperkalemia.png": "c1a7fba10650065ea61e9cbcd232c243",
"assets/assets/images/class/inferior_infarction_(rca).png": "2270c82aee160cae51a674adae3eed47",
"assets/assets/images/class/junctional_escape_rhythm.png": "2f09e4d1b0497278e145999b8e1102f8",
"assets/assets/images/class/left_bundle_branch_block.png": "b1cd5e89bde5b07ba0960db2e0802f5f",
"assets/assets/images/class/left_ventricle_hypertrophy.png": "07e6031775672d487227e6530ebae79d",
"assets/assets/images/class/long_qt_syndrome.png": "bd8f6545acbce451e0f35b380cbf4b96",
"assets/assets/images/class/main_coronary_infarction.png": "8409664f259192253472cf6ee56a71ca",
"assets/assets/images/class/myocarditis_ecg.jpg": "28fadf2a216df96d43cce38f2cf903b5",
"assets/assets/images/class/non-sustain_vt.png": "f835af0164572db5763262e8b86542a4",
"assets/assets/images/class/old_mi.png": "dcf4ea6fb029aaea861d2d364323c7c6",
"assets/assets/images/class/posterior_fascicular_block.png": "a7f8995d530979560b2b0f75ca3cf86e",
"assets/assets/images/class/pulmonary_embolism_ecg.jpeg": "205b9a47823af0083940ac73b9bf8c56",
"assets/assets/images/class/right_bundle_branch_block.png": "1784015173236339ee5edcd251bf7984",
"assets/assets/images/class/second_degree_block_(mobitz_type_i).png": "670d6573a4e7c8c71c18a32e106213ad",
"assets/assets/images/class/second_degree_block_(mobitz_type_ii).png": "134313b664fd911d8d17c518b4c28849",
"assets/assets/images/class/septic_shock.png": "8d2fd6c54813f06bc247adc41282b56e",
"assets/assets/images/class/sinus_bradycardia.png": "2e59b9b63f80de098b911b329be6a9e8",
"assets/assets/images/class/sinus_rhythm.png": "e173df97a12b75aa3bdd9a0fcdebd03d",
"assets/assets/images/class/sinus_tachycardia.png": "15e5a091000a03ef105ddf67dbabf70c",
"assets/assets/images/class/stress_induced_cmp.png": "ca4278b3c317b812a7373d1383030473",
"assets/assets/images/class/sustain_vt.png": "c2bb37a43308f4d21aae4eb8edb1e9a2",
"assets/assets/images/class/torsades_de_pointes.jpg": "44b6333034fbbb1e4bcb46269aed92be",
"assets/assets/images/class/trifasicular_block.png": "85d270b946f63f28ad345493d79004bb",
"assets/assets/images/class/ventricular_fibrillation.png": "c5b9e44ca2b0fb334dde17f33a130379",
"assets/assets/images/class/ventricular_premature_contraction.png": "f1ea403fdbf93c1f1c392540fb0d283d",
"assets/assets/images/class/ventricular_tachycardia.png": "bf3ce1294142bdf6f1e7c2b5a1192564",
"assets/assets/images/class/v_pacemaker_rhythm.png": "8b0f2772bd2f727df8d7db0de3675ac5",
"assets/assets/images/class/wellens_syndrome.png": "af52e52b40cef493d74ff2928f61cd59",
"assets/assets/images/class/wpw_syndrome.png": "691a0b09d53e78a4a79db9ab50e49abc",
"assets/assets/images/drug/adenosine.png": "b2ad184a99e75558942779d3b1e0327c",
"assets/assets/images/drug/amiodarone.png": "084ff0e7e5398f105f5fddef96b42635",
"assets/assets/images/drug/atropine.png": "9e0c93a0d4d2783e91b628c2d5af727c",
"assets/assets/images/drug/calcium_gluconate.png": "d6f142ce29c6866a2b9a5458bf36b430",
"assets/assets/images/drug/dobutamine.png": "b982c0e8f003a6c9a6b5d05ecf6b6a65",
"assets/assets/images/drug/dopamine.png": "6f9c05db99070fcfac31e06516b5b480",
"assets/assets/images/drug/epinephrine.png": "e893a72a692a0c962fcdc3be99e7b966",
"assets/assets/images/drug/lidocaine.png": "edb4b412ede260648d960d5c0a030823",
"assets/assets/images/drug/magnesium_sulfate.png": "aabeaf963be42d649f57fa42b57df3bf",
"assets/assets/images/drug/norepinephrine.png": "10435edce745447d5f57dd7b38b6b25c",
"assets/assets/images/drug/sodium_bicarbonate.png": "03fb5d664379499464664debf0a4158c",
"assets/assets/images/ecgcardiacaxis.png": "b272e97187850e05605c7eeea49d169d",
"assets/assets/images/ecgleadposition.png": "4e460f6c1045ae0138d9da1be803345e",
"assets/assets/images/ecgreadingsteps.png": "5dabeffdfc44c7e2e64995dff6a69d14",
"assets/assets/images/ecgwaveform.png": "11e841e5c338ef4f679885e6e20aa93c",
"assets/assets/images/evolution_ami.png": "3cbcb7d6efb3c04ad1452b9c342e049e",
"assets/assets/images/Junction_with_RCAinfaction.png": "79a40d07765bd1aff6d32251ed6a153a",
"assets/assets/images/logo.png": "82c24646ec16abed422def67e30c7161",
"assets/assets/images/mLCx_total_STEMI_dominant.png": "343181f121f18c875827df71c6b30402",
"assets/assets/images/quiz/2_1_AV_block(55).png": "6cc01860546f536bec3cd6920e0df609",
"assets/assets/images/quiz/a.fib_LAFB(85).png": "0d058939b1f1b759dfd38cabb8a322d0",
"assets/assets/images/quiz/afib_LAFB(14).png": "39bedeb186a334c91737215e837e4cdb",
"assets/assets/images/quiz/Afib_rvr(21).png": "a5462c4c9821846a66279a033d8253b8",
"assets/assets/images/quiz/afib_rvr(29).png": "fd1600c65bfa1ac63f858fc9bf09341b",
"assets/assets/images/quiz/Afib_V_pacing(63).png": "8bc18fc893617b8e8c18877813c0db98",
"assets/assets/images/quiz/AFL(37).png": "048bf394e75cb5fd2fa0149c95683925",
"assets/assets/images/quiz/AIVR(73).png": "7730ea0bb595c26bbf7c7dc84230f715",
"assets/assets/images/quiz/Anterior_STEMI(30).png": "200ecc2b2762b2f51bfd63e9e3b6e265",
"assets/assets/images/quiz/APC(31).png": "58dd2a37306aa0edba4d298c2e6fab25",
"assets/assets/images/quiz/AVRT_LPS(70).png": "8369ce84087149ef5bc3610c8a712fe8",
"assets/assets/images/quiz/AVRT_right(6).png": "1f5f6f379cce99ffcebd3c96e7761a86",
"assets/assets/images/quiz/A_pacing_rhythm(61).png": "c17b0dc51d1f0bb91590235a07d2af47",
"assets/assets/images/quiz/bradyarrhythmia(52).png": "e3b1ffef5de4372fe37546eefcd76c21",
"assets/assets/images/quiz/bradycardia(42).png": "b88e553e472d1fdab63d54755dcb9c1e",
"assets/assets/images/quiz/Complete_block_LBBB(4).png": "45ad8a863fc938b119deb22441a59d72",
"assets/assets/images/quiz/ectopic_APC(88).png": "bf4804a0994256105b0a3939b44a8adb",
"assets/assets/images/quiz/first_AVblock.png": "88bfed50d5887b9d4b7cd1750775776c",
"assets/assets/images/quiz/first_AVblock_RBBB(65).png": "2ba9adea6184f5c64d91f14703cc96aa",
"assets/assets/images/quiz/high_degree_block(64).png": "9c80d6ee628ba05f6f88cf0aa53be980",
"assets/assets/images/quiz/Junctional_bradycardia(72).png": "4670deb52bc547f926db74b6301f4f6b",
"assets/assets/images/quiz/Junctional_tachycardia(20).png": "29d6c3edf2e4adb280c56aa66aaf3452",
"assets/assets/images/quiz/Junctional_tachycardia(43).png": "e5ab184c54a2043f6b89549ce29ea586",
"assets/assets/images/quiz/LAFB(34).png": "aa788b37e979a2d17c36b7df0e3c82f5",
"assets/assets/images/quiz/LBBB2(10).png": "559242463d4e5867f8d5fca564b7bbd4",
"assets/assets/images/quiz/LM_STEMI(89).png": "8409664f259192253472cf6ee56a71ca",
"assets/assets/images/quiz/LPFB(33).png": "a7f8995d530979560b2b0f75ca3cf86e",
"assets/assets/images/quiz/pLAD_STEMI(32).png": "2baeb49cdb9cd8d9644089aea3e5a7f0",
"assets/assets/images/quiz/PSVT_AVNRT(71).png": "974cc3cf111e85d7cd655f640de7acf3",
"assets/assets/images/quiz/PSVT_right(69).png": "bd6bdc90aba77e4f20747fd0f425943d",
"assets/assets/images/quiz/RBBB3(2).png": "f0345c302cd24d9a178a9b31b4853db2",
"assets/assets/images/quiz/RBBB_Brady(26).png": "c5b51984398b4bbb33d6febe3e25a612",
"assets/assets/images/quiz/RBBB_LFPB(82).png": "9f4bc3db8e3e9fa473e23f98cdc0a4f0",
"assets/assets/images/quiz/RBBB_LPFB(46).png": "c7383bb5051fbf44d35d96cd5c32d8d5",
"assets/assets/images/quiz/RBBB_with_afib(25).png": "025c2f3c5975e216eed5b42f0b5c3d8f",
"assets/assets/images/quiz/second_block_mobitz_i(38).png": "670d6573a4e7c8c71c18a32e106213ad",
"assets/assets/images/quiz/sinus_bradycardia.png": "2e59b9b63f80de098b911b329be6a9e8",
"assets/assets/images/quiz/sinus_rhythm.png": "e173df97a12b75aa3bdd9a0fcdebd03d",
"assets/assets/images/quiz/sinus_tachycardia.png": "304767daa8ae90b8fc3db6304430b539",
"assets/assets/images/quiz/sinus_tachycardia2.png": "6116db4f26ccb9b372b77227ae622faa",
"assets/assets/images/quiz/Sinus_tachycardia_PVC_bigeminy(48).png": "3eb8554a61ea76a37b8a40e8bffe03c0",
"assets/assets/images/quiz/slowafib(80).png": "6827d8d215e6f48023250853580a7ee9",
"assets/assets/images/quiz/SlowVTy(27).png": "6a03fed42697510c64ec0f961fc149ac",
"assets/assets/images/quiz/SN_block(67).png": "3913494579af243f10a66b52437fac48",
"assets/assets/images/quiz/SSS(53).png": "fc0fc5008d5365e75c2061c78c14fea4",
"assets/assets/images/quiz/SSS(87).png": "a87c3130922bd2ffaea21fdfd6b7e5f0",
"assets/assets/images/quiz/Sustain_VT(56).png": "04a979ad8b44d06dcae1279e4232aca9",
"assets/assets/images/quiz/Trifasicular_block(19).png": "404b8573c6d39b3c6e3d0be5be563d3d",
"assets/assets/images/quiz/vfib(9).png": "c5b9e44ca2b0fb334dde17f33a130379",
"assets/assets/images/quiz/vpc_bigeminy(44).png": "dc5358397463e4b3df4eff8ca11f40dd",
"assets/assets/images/quiz/vpc_bigeminy(68).png": "a46ac9e3c99b3b745c225ceb884963e3",
"assets/assets/images/quiz/VT_induction(66).png": "c2bb37a43308f4d21aae4eb8edb1e9a2",
"assets/assets/images/quiz/V_pacing_rhythm(62).png": "fd80f52ba1145c626cae91e0c9498958",
"assets/assets/images/quiz/WPW(81).png": "691a0b09d53e78a4a79db9ab50e49abc",
"assets/assets/images/STD.png": "f1f8461b0ec70705b84bf422c3043ff3",
"assets/assets/images/STD1.png": "4e74c06f9ffd8c8c0cffc6efa1f94ebd",
"assets/assets/images/stemi_territory.png": "37f9adf03df3375f961b2ab49e78d8d5",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e8dc1e47752552eb2588c6a06cb63d30",
"assets/NOTICES": "73f0a6a9f1683ab54166ff73a696eae4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e45f3c5db96c962225f90fae5938be21",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "08c37ce7fed696ec9805b4725f1f7805",
"/": "08c37ce7fed696ec9805b4725f1f7805",
"main.dart.js": "2a77ba57fa73c2d66a1bdbe8d649eff0",
"manifest.json": "6d4886efd5f57ab4a40f9019fc40a732",
"version.json": "234509b49bb228c0b240a10636562663"};
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
