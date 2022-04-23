const staticCalculator = "calculations";
const assets = [
    "/",
    "/index.html",
    "/CSS/style.css",
    "/JavaScript/script.js",
    "/Images/logo.png",
    "/Images/Demo Image.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticCalculator).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});