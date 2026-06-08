// 서비스 워커 (Service Worker)
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('치안센터 서비스 워커 활성화');
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            console.log('오프라인 상태 접근 감지');
            // 향후 오프라인 안내 페이지 연결 가능
        })
    );
});
