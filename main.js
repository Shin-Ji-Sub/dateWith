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
  // {
  //   name : '안녕협재씨',
  //   lat : 33.3988920,
  //   lng : 126.2453620,
  //   category : '식당'
  // },
  // {
  //   name : '바다제비',
  //   lat : 33.3964744,
  //   lng : 126.2436433,
  //   category : '식당'
  // },
  // {
  //   name : '안녕협재씨',
  //   lat : 33.3988920,
  //   lng : 126.2453620,
  //   category : '식당'
  // },
  {
    name : '숙소',
    lat : 33.2468724608075,
    lng : 126.560724197249,
    category : '숙소'
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
  // {
  //   name : '산방산유채꽃명소',
  //   lat : 33.2317100,
  //   lng : 126.3065700,
  //   category : '관광지'
  // },
  // {
  //   name : '9.81파크',
  //   lat : 33.4058800,
  //   lng : 126.3441000,
  //   category : '관광지'
  // },
  // {
  //   name : '새별오름',
  //   lat : 33.36607339600283,
  //   lng : 126.36061608822321,
  //   category : '관광지'
  // },
  // {
  //   name : '어린왕자감귤밭',
  //   lat : 33.2605900,
  //   lng : 126.2857600,
  //   category : '관광지'
  // },
  // {
  //   name : '테디베어박물관',
  //   lat : 33.2502419,
  //   lng : 126.4119743,
  //   category : '관광지'
  // },
  {
    name : '건강과성박물관',
    lat : 33.2470300,
    lng : 126.3543200,
    category : '관광지'
  },
  // {
  //   name : '원앤온리',
  //   lat : 33.2317100,
  //   lng : 126.3065700,
  //   category : '카페'
  // },
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
  // {
  //   name : '무로이',
  //   lat : 33.3172400,
  //   lng : 126.3471900,
  //   category : '카페'
  // },
  // {
  //   name : '우무',
  //   lat : 33.4023469,
  //   lng : 126.2547808,
  //   category : '카페'
  // },
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
  // {
  //   name : '안친오름',
  //   lat : 33.4662800,
  //   lng : 126.7751700,
  //   category : '관광지'
  // },
  // {
  //   name : '별방진',
  //   lat : 33.5187700,
  //   lng : 126.8830600,
  //   category : '관광지'
  // },
  // {
  //   name : '서우봉',
  //   lat : 33.5347702,
  //   lng : 126.6640634,
  //   category : '관광지'
  // },
  {
    name : '보롬사진관(협재)',
    lat : 33.3978584613703,
    lng : 126.242941320064,
    category : '관광지'
  },
  {
    name : '보롬사진관(귀덕)',
    lat : 33.4404969422384,
    lng : 126.276423418828,
    category : '관광지'
  },
  {
    name : '바이닐제주(LP)',
    lat : 33.4014386404711,
    lng : 126.251048642504,
    category : '카페'
  },
  {
    name : '르벙쓸레브(짱구팝업)',
    lat : 33.3034683442095,
    lng : 126.257948475824,
    category : '관광지'
  },
  {
    name : '돌코리숲(탠저린 캣)',
    lat : 33.2906975519851,
    lng : 126.322731451749,
    category : '관광지'
  },
  {
    name : '대한목장',
    lat : 33.3018797482013,
    lng : 126.618214596046,
    category : '카페'
  },
  {
    name : '점점(초당옥수수ice)',
    lat : 33.5375451604497,
    lng : 126.615360701632,
    category : '카페'
  },
  {
    name : '섬조각(키티 소품샵)',
    lat : 33.5148966635923,
    lng : 126.527405022087,
    category : '관광지'
  },
  {
    name : '솔브레(소금빵ice)',
    lat : 33.512736528525,
    lng : 126.52782673239,
    category : '카페'
  },
  {
    name : '제주홀릭뮤지엄',
    lat : 33.4567141560659,
    lng : 126.441658444549,
    category : '관광지'
  },
  {
    name : '빈티지 팝업',
    lat : 33.479057728088,
    lng : 126.3913217179,
    category : '관광지'
  },
  {
    name : '픽업카페',
    lat : 33.4635775959741,
    lng : 126.309775357941,
    category : '카페'
  },
  {
    name : '제주나기(장어)',
    lat : 33.4756528163679,
    lng : 126.377799201989,
    category : '식당'
  },
  {
    name : '센잇(화석과자)',
    lat : 33.5119206799242,
    lng : 126.523611537002,
    category : '카페'
  },
  {
    name : '미르담(고양이카페)',
    lat : 33.5109876556768,
    lng : 126.503730654556,
    category : '카페'
  },
  {
    name : '소리소문(책방)',
    lat : 33.3325640717169,
    lng : 126.259488054843,
    category : '카페'
  },
  {
    name : '휴애리(수국축제)',
    lat : 33.3094377238802,
    lng : 126.636375959825,
    category : '관광지'
  },
  {
    name : '목장카페 밭디',
    lat : 33.4076683485502,
    lng : 126.772721630501,
    category : '카페' 
  },
  {
    name : '문개어멍',
    lat : 33.4857815909362,
    lng : 126.392407356139,
    category : '식당'
  },
  {
    name : '노라바(해물라면)',
    lat : 33.4778782674245,
    lng : 126.364836538037,
    category : '식당'
  },
  {
    name : '놀맨(해물라면)',
    lat : 33.4624708328739,
    lng : 126.310216549091,
    category : '식당'
  },
  {
    name : '협재해물라면오빠네(해물라면)',
    lat : 33.4020173470624,
    lng : 126.251044859632,
    category : '식당'
  },
  {
    name : '제주동화마을(수국,지브리)',
    lat : 33.4362649647312,
    lng : 126.731232423627,
    category : '관광지'
  },
  {
    name : '오랑우탄면사무소(탄탄면)',
    lat : 33.2311864630847,
    lng : 126.297567947411,
    category : '식당'
  },
  {
    name : '김녕빗소리(소바)',
    lat : 33.5556603553149,
    lng : 126.753937250813,
    category : '식당'
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
