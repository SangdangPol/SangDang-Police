// 서비스 워커 (Service Worker)
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('치안센터 서비스 워커 활성화');
});
self.addEventListener('fetch', (event) => {
});
