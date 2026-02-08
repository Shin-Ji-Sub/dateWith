// 1. 지도 초기화
var map = L.map('map').setView([33.361666, 126.529167], 10);

// 2. OpenStreetMap 타일
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap Contributors'
}).addTo(map);

// 3. 하드코딩된 장소 좌표 목록
const places = [
  {
    name: '떡하니 문어떡볶이',
    lat: 33.5392365,
    lng: 126.7995752
  },
  {
    name : '돌담통닭',
    lat : 33.5435749,
    lng : 126.6608036
  }
];

// 4. Bootstrap Icon 기반 마커 생성 함수
function createArrowMarker(place) {
  const icon = L.divIcon({
    html: `<i class="bi bi-arrow-down-circle-fill arrow-marker"></i>`,
    className: '', // 기본 마커 스타일 제거
    iconSize: [36, 36],
    iconAnchor: [18, 36]
  });

  L.marker([place.lat, place.lng], { icon })
    .addTo(map)
    .bindPopup(`<b>${place.name}</b><br>${place.lat}, ${place.lng}`);
}

// 5. 모든 장소 지도에 표시
places.forEach(place => createArrowMarker(place));
