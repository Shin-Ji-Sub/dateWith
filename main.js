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
    lng: 126.7995752,
    category : '식당'
  },
  {
    name : '돌담통닭',
    lat : 33.5435749,
    lng : 126.6608036,
    category : '식당'
  },
  {
    name : '안녕협재씨',
    lat : 33.3988920,
    lng : 126.2453620,
    category : '식당'
  },
  {
    name : '바다제비',
    lat : 33.3964744,
    lng : 126.2436433,
    category : '식당'
  },
  {
    name : '안녕협재씨',
    lat : 33.3988920,
    lng : 126.2453620,
    category : '식당'
  },
  {
    name : '숙소',
    lat : 33.2596500,
    lng : 126.5517500,
    category : '숙소'
  },
  {
    name : '쪼꼴락상회',
    lat : 33.3870200,
    lng : 126.2460400,
    category : '식당'
  },
  {
    name : '까망돼지',
    lat : 33.2705286,
    lng : 126.5841149,
    category : '식당'
  },
  {
    name : '짬뽕에취한날',
    lat : 33.4757500,
    lng : 126.4941800,
    category : '식당'
  },
  {
    name : '동백포레스트',
    lat : 33.3396600,
    lng : 126.6202000,
    category : '관광지'
  },
  {
    name : '산방산유채꽃명소',
    lat : 33.2317100,
    lng : 126.3065700,
    category : '관광지'
  },
  {
    name : '9.81파크',
    lat : 33.4058800,
    lng : 126.3441000,
    category : '관광지'
  },
  {
    name : '새별오름',
    lat : 33.36607339600283,
    lng : 126.36061608822321,
    category : '관광지'
  },
  {
    name : '어린왕자감귤밭',
    lat : 33.2605900,
    lng : 126.2857600,
    category : '관광지'
  },
  {
    name : '테디베어박물관',
    lat : 33.2502419,
    lng : 126.4119743,
    category : '관광지'
  },
  {
    name : '건강과성박물관',
    lat : 33.2470300,
    lng : 126.3543200,
    category : '관광지'
  },
  {
    name : '원앤온리',
    lat : 33.2317100,
    lng : 126.3065700,
    category : '카페'
  },
  {
    name : '리버브제주',
    lat : 33.4341950,
    lng : 126.2904555,
    category : '카페'
  },
  {
    name : '자드부팡',
    lat : 33.4953400,
    lng : 126.7036300,
    category : '카페'
  },
  {
    name : '무로이',
    lat : 33.3172400,
    lng : 126.3471900,
    category : '카페'
  },
  {
    name : '우무',
    lat : 33.4023469,
    lng : 126.2547808,
    category : '카페'
  },
  {
    name : '오드랑베이커리',
    lat : 33.5347702,
    lng : 126.6640634,
    category : '카페'
  },
  {
    name : '사계해변',
    lat : 33.2317100,
    lng : 126.3065700,
    category : '해변'
  },
  {
    name : '협재해수욕장',
    lat : 33.39410944505224,
    lng : 126.2400303224785,
    category : '해변'
  },
  {
    name : '광치기해변',
    lat : 33.4493300,
    lng : 126.9083100,
    category : '해변'
  },
  {
    name : '함덕해수욕장',
    lat : 33.5347702,
    lng : 126.6640634,
    category : '해변'
  },
  {
    name : '금능해수욕장',
    lat : 33.3750300,
    lng : 126.2358700,
    category : '해변'
  },
  {
    name : '이호테우해변',
    lat : 33.4920600,
    lng : 126.4600000,
    category : '해변'
  },
  {
    name : '담소요',
    lat : 33.3396600,
    lng : 126.6202000,
    category : '카페'
  },
  {
    name : '청수당애월',
    lat : 33.4604899,
    lng : 126.3215217,
    category : '카페'
  },
  {
    name : '해지개',
    lat : 33.4604899,
    lng : 126.3215217,
    category : '카페'
  },
  {
    name : '이끼숲소길',
    lat : 33.4309000,
    lng : 126.3806900,
    category : '카페'
  },
  {
    name : '비밀역',
    lat : 33.2507253,
    lng : 126.3344286,
    category : '카페'
  },
  {
    name : '오저여',
    lat : 33.39410944505224,
    lng : 126.2400303224785,
    category : '관광지'
  },
  {
    name : '안친오름',
    lat : 33.4662800,
    lng : 126.7751700,
    category : '관광지'
  },
  {
    name : '별방진',
    lat : 33.5187700,
    lng : 126.8830600,
    category : '관광지'
  },
  {
    name : '서우봉',
    lat : 33.5347702,
    lng : 126.6640634,
    category : '관광지'
  },
  {
    name : '소색채본',
    lat : 33.2463042,
    lng : 126.3341819,
    category : '카페'
  },
  {
    name : '순천미향',
    lat : 33.2317100,
    lng : 126.3065700,
    category : '식당'
  },
  {
    name : '사계의시간',
    lat : 33.2323038,
    lng : 126.3089387,
    category : '식당'
  },
  {
    name : '책방 소리소문',
    lat : 33.3278536,
    lng : 126.2696358,
    category : '카페'
  },
];

/* =========================
    3. 마커 관리 배열
========================== */
let markers = [];

/* =========================
    4. 장소 렌더링 함수
========================== */
function renderPlaces(placeList) {
  // 기존 마커 제거
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];

  placeList.forEach(place => {
    const marker = L.marker([place.lat, place.lng], {
      icon: L.divIcon({
        html: '<i class="bi bi-arrow-down-circle-fill text-danger fs-3"></i>',
        className: '',
        iconSize: [24, 24],
        iconAnchor: [12, 24]
      })
    })
    .addTo(map)
    .bindPopup(`
      <strong>${place.name}</strong><br>
      <span class="text-muted">${place.category}</span>
    `);

    markers.push(marker);
  });
}

/* =========================
    5. 카테고리 검색 함수
========================== */
function searchByCategory() {
  const selected = document.getElementById('categorySelect').value;

  // 전체 선택 시
  if (selected === '') {
    renderPlaces(places);
    return;
  }

  const filtered = places.filter(place =>
    place.category === selected
  );

  renderPlaces(filtered);
}


/* =========================
    6. 이벤트 연결
========================== */

// select 변경만으로도 바로 검색되게 (선택)
document.getElementById('categorySelect').addEventListener('change', searchByCategory);

// // Enter 키 검색
// document.getElementById('categoryInput').addEventListener('keydown', function (e) {
//   if (e.key === 'Enter') {
//     searchByCategory();
//   }
// });

/* =========================
    7. 최초 로딩 시 전체 표시
========================== */
renderPlaces(places);

// // 4. Bootstrap Icon 기반 마커 생성 함수
// function createArrowMarker(place) {
//   const icon = L.divIcon({
//     html: `<i class="bi bi-arrow-down-circle-fill arrow-marker"></i>`,
//     className: '', // 기본 마커 스타일 제거
//     iconSize: [36, 36],
//     iconAnchor: [18, 36]
//   });

//   L.marker([place.lat, place.lng], { icon })
//     .addTo(map)
//     .bindPopup(`<b>${place.name}</b><br>${place.lat}, ${place.lng}`);
// }

// // 5. 모든 장소 지도에 표시
// places.forEach(place => createArrowMarker(place));
