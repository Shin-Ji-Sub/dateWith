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
  },
  {
    name : '안녕협재씨',
    lat : 33.3988920,
    lng : 126.2453620
  },
  {
    name : '바다제비',
    lat : 33.3964744,
    lng : 126.2436433
  },
  {
    name : '안녕협재씨',
    lat : 33.3988920,
    lng : 126.2453620
  },
  {
    name : '숙소',
    lat : 33.2596500,
    lng : 126.5517500
  },
  {
    name : '쪼꼴락상회',
    lat : 33.3870200,
    lng : 126.2460400
  },
  {
    name : '까망돼지',
    lat : 33.2705286,
    lng : 126.5841149
  },
  {
    name : '짬뽕에취한날',
    lat : 33.4757500,
    lng : 126.4941800
  },
  {
    name : '동백포레스트',
    lat : 33.3396600,
    lng : 126.6202000
  },
  {
    name : '산방산유채꽃명소',
    lat : 33.2317100,
    lng : 126.3065700
  },
  {
    name : '9.81파크',
    lat : 33.4058800,
    lng : 126.3441000
  },
  {
    name : '새별오름',
    lat : 33.36607339600283,
    lng : 126.36061608822321
  },
  {
    name : '어린왕자감귤밭',
    lat : 33.2605900,
    lng : 126.2857600
  },
  {
    name : '테디베어박물관',
    lat : 33.2502419,
    lng : 126.4119743
  },
  {
    name : '건강과성박물관',
    lat : 33.2470300,
    lng : 126.3543200
  },
  {
    name : '원앤온리',
    lat : 33.2317100,
    lng : 126.3065700
  },
  {
    name : '리버브제주',
    lat : 33.4341950,
    lng : 126.2904555
  },
  {
    name : '자드부팡',
    lat : 33.4953400,
    lng : 126.7036300
  },
  {
    name : '무로이(카페)',
    lat : 33.3172400,
    lng : 126.3471900
  },
  {
    name : '우무',
    lat : 33.4023469,
    lng : 126.2547808
  },
  {
    name : '오드랑베이커리',
    lat : 33.5347702,
    lng : 126.6640634
  },
  {
    name : '사계해변',
    lat : 33.2317100,
    lng : 126.3065700
  },
  {
    name : '협재해수욕장',
    lat : 33.39410944505224,
    lng : 126.2400303224785
  },
  {
    name : '광치기해변',
    lat : 33.4493300,
    lng : 126.9083100
  },
  {
    name : '함덕해수욕장',
    lat : 33.5347702,
    lng : 126.6640634
  },
  {
    name : '금능해수욕장',
    lat : 33.3750300,
    lng : 126.2358700
  },
  {
    name : '이호테우해변',
    lat : 33.4920600,
    lng : 126.4600000
  },
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
