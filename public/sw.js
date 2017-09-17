self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('static')
        .then(function(cache) {
            cache.addAll([
                '/',
                '/categories',
                '/contacts',
                '/about',
                '/partners',
                '/index.html',
                '/main.js',
                '/manifest.js',
                '/normalize.js',
                '/vendor.js',
                'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css',
                'https://code.jquery.com/jquery-2.1.1.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js',
                'https://fonts.googleapis.com/css?family=Roboto:300,400,700',
                'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/fonts/roboto/Roboto-Regular.woff2'
            ]);
        })
    );
});

self.addEventListener('activate', function() {
    console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(res) {
            if (res) {
                return res;
            } else {
                return fetch(event.request);
            }
        })
    );
});
