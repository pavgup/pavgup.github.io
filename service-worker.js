/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';


importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["dist/images/bg.jpg","d6051b29876d5f5ecf3f95393d9620c4"],["dist/images/bg/red-yellow-white.jpg","505840af9dab503cb843b6e198ff8871"],["dist/images/bg/winter-trees.jpg","391a74afcb38ae8c5593238e0c99678b"],["dist/images/bg/winter.jpg","5ed2ef10727115b2331ef94601104b18"],["dist/images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["dist/images/ie/footer.png","7cd8d405a89bfc84bf19d879dc215154"],["dist/images/ie/footer.svg","357c40d8d2a7f1ebce0233d0d4b20962"],["dist/images/overlay-pattern.png","b79220d57669fb07c51d13830dcb5bd6"],["dist/images/overlay.svg","74742e9cbe2bfbf97a91a0a69e5a5c48"],["dist/images/src/favicon.png","8c076087b08c454073f602f580de182a"],["dist/images/src/favicon.xcf","f25f52f6b743dab1399db38d97caef4f"],["dist/images/touch/android-chrome-144x144.png","671c92e287bbcd819960b52b9e7079e4"],["dist/images/touch/android-chrome-192x192.png","ce1ca2c712d49f67b977afc6b159aa1f"],["dist/images/touch/android-chrome-36x36.png","c710f269ff9350edc05cac1990c87a7f"],["dist/images/touch/android-chrome-48x48.png","01aa4514def843a8c2fecf9d6d4c30b8"],["dist/images/touch/android-chrome-72x72.png","eebf61a4e63a2c7e9e1e4394f83b5186"],["dist/images/touch/android-chrome-96x96.png","f1b4c6e69dc309b02556e8150a25bf4e"],["dist/images/touch/apple-touch-icon-114x114.png","162727fc5cf728e9d87cc4c17ff6ba0b"],["dist/images/touch/apple-touch-icon-120x120.png","1121aad63ec43feb784aa917fe384ec6"],["dist/images/touch/apple-touch-icon-152x152.png","39114cda359d76cddba3d443c8022107"],["dist/images/touch/apple-touch-icon-57x57.png","0e5631f6ec77c0f1d4171a4de96eb1a4"],["dist/images/touch/apple-touch-icon-60x60.png","506b80db3245914c701d6cbf455085aa"],["dist/images/touch/apple-touch-icon-76x76.png","ee00331907e1a3bed04bf3b0c5925071"],["dist/images/touch/apple-touch-icon.png","81f2483e3e628661627c7f69425dfa74"],["dist/images/touch/browserconfig.xml","1dbcaeba4f2244978fb3b11a479bfc42"],["dist/images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["dist/images/touch/favicon-16x16.png","5179c3b37b0a9a4b8447727f284656f3"],["dist/images/touch/favicon-32x32.png","c38d05b5fc205a239f9030f005030a31"],["dist/images/touch/favicon.ico","0dd1696e1588be5de15dfec7e2ac8735"],["dist/images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["dist/images/touch/manifest.json","6a9e303ff900f2396681c6af2284e02d"],["dist/images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["dist/images/touch/mstile-144x144.png","a5166667ead7f5f0ddaf7f0480dabd11"],["dist/images/touch/mstile-150x150.png","250b43ea39bb4f5d2b6c17d70d3e062e"],["dist/images/touch/mstile-310x150.png","9ed8e40e96f3254e85f08b063a7222b4"],["dist/images/touch/mstile-310x310.png","3815bf8a86c69d1b926547913d9304b4"],["dist/images/touch/mstile-70x70.png","d17e42f51e169ab4774976123bd9af49"],["dist/images/touch/safari-pinned-tab.svg","0efce5b73957213550660d59596bf284"],["dist/index.html","79e6e50df84ea7665aeacdabe4936a6e"],["dist/manifest.json","6a9e303ff900f2396681c6af2284e02d"],["dist/scripts/main.min.js","e194ae6223b83ac156e2f78c05659e64"],["dist/scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["dist/scripts/sw/sw-toolbox.js","42dd9073ba0a0c8e0ae2230432870678"],["dist/styles/ie8.css","a1d3eeb128086e7f1299e0b873086104"],["dist/styles/ie9.css","b772513be124400a3a2f4be36c8171df"],["dist/styles/main.css","2d3c37201236f07a4bceae996178cccb"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});

