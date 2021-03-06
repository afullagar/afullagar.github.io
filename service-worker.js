var cacheName = Date.now();
var resourcesToCache = [
'/',
'index.html',
'Mindfully-192.png',
'Mindfully-512.png',
'main.js',
'service-worker.js',
'manifest.json'
];
    
self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
    caches
        .open(cacheName)
        .then(cache => {
            console.log('INSTALL EVENT: Opened cache: '+cacheName);
            cache.addAll(resourcesToCache);
      })
      .then( () => { self.skipWaiting(); console.log('Skip waiting command executed');})
  );
});

self.addEventListener('activate', event => {
    console.log('Files cached and ready to provide offline, cleard old caches!');
	//Clear old cache files before install
  /*DEBUG*/
  var names;
		caches.keys().then( names => {
		for (let name of names) {
			console.log("ACTIVATE EVENT: current active cache is: "+cacheName);
			if (name != cacheName) {
				console.log("ACTIVATE EVENT: Deleted old cache names :"+name);
				caches.delete(name);
			}
		}	
		
	  });	
});

/*
self.addEventListener('fetch', event => {
  console.log('Service Worker : Fetching content...........................');
  event.respondWith(
    fetch(event.request)
    .catch(() => caches.match(event.request)));
});
*/
//Fetch events and clone
self.addEventListener('fetch', event => {
  console.log('Service Worker : Fetching content...........................');
  event.respondWith(
    fetch(event.request)
        .then(response => {
            //make a copy/clone of response
            const responseClone = response.clone();
            //open cache
            caches
                .open(cacheName)
                .then(cache => {
                    //add response to cache
                    cache.put(event.request, responseClone);
                    });
                return response;
            }).catch(error => caches.match(event.request).then(response => response))
        );
});


