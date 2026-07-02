// ============================================================================
// 지역 데이터 (1차-A 핵심 페이지) — 지역별 차별화 콘텐츠
// description 은 모두 80자 이내로 작성
// ============================================================================

const CC = { label: "충청 홈", url: "/" };

// 광역권 메인 (대전/세종/천안/충남/충북)
export const regionMains = [
  {
    slug: "daejeon",
    url: "/daejeon/",
    navCurrent: "/daejeon/",
    title: "대전 출장마사지 · 유성·둔산 생활권 안내 | 간다GO",
    h1: "대전 출장마사지 · 유성·둔산 생활권 안내",
    eyebrow: "대전 지역 안내",
    description: "대전 유성·둔산·대전역 생활권과 자택·호텔·오피스텔 이용 전 확인사항을 안내합니다.",
    breadcrumbs: [CC, { label: "대전", url: "/daejeon/" }],
    area: "대전",
    overview:
      "대전은 5개 자치구(유성·서구·중구·동구·대덕구) 체계로 안내되는 도시로, 관공서·업무지구, 대학가, 대덕연구단지, KTX·복합터미널, 주거 생활권이 한 도시 안에 함께 있습니다. 그래서 같은 대전이라도 둔산 업무지구와 유성 온천·연구단지, 대전역 도심권은 이용 환경과 이동 경로가 다릅니다. 이 페이지는 구 단위와 생활권을 함께 확인할 수 있도록 구성했습니다.",
    adminInfo:
      "대전광역시는 유성구·서구·중구·동구·대덕구의 5개 자치구로 나뉩니다. 업무·행정 수요는 서구 둔산에, 대학·연구·숙박 수요는 유성구에, 도심·터미널 수요는 중구·동구에 집중되는 경향이 있어 구별로 확인 포인트가 다릅니다.",
    zonesIntro: "대전은 구 단위와 함께 아래 생활권을 기준으로 위치를 확인하면 예약이 수월합니다.",
    lifeZones: [
      { name: "둔산·탄방", url: "/daejeon/seo-gu/", note: "업무지구·관공서·오피스텔 밀집" },
      { name: "유성·봉명", url: "/daejeon/yuseong-gu/", note: "온천 숙소·대학가·연구단지" },
      { name: "대전역·중앙로", url: "/daejeon/dong-gu/", note: "KTX·도심 이동 중심" },
      { name: "관저·도안", note: "서남부 주거 생활권" },
      { name: "노은·반석", note: "유성 북부 주거·지하철 연계" },
      { name: "대덕·신탄진", url: "/daejeon/daedeok-gu/", note: "북대전 주거·산업권" },
    ],
    stations: [
      "대전역(KTX·SRT) — 중앙로·은행동 도심권과 인접",
      "서대전역 — 서구·중구 이동 거점",
      "유성온천역 — 유성 숙소·대학가 연계",
      "정부청사역 — 둔산 업무지구 중심",
      "대전복합터미널 — 용전·동부권 광역 이동",
    ],
    faqSubset: [0, 1, 3, 4, 6, 7],
    whw: {
      who: "대전 5개 자치구와 둔산·유성·대전역 생활권을 실제 이동 기준으로 정리해 안내합니다.",
      how: "방문 주소·가까운 역·숙소 형태를 확인한 뒤 이용 장소별 기준과 예약 시간을 안내합니다.",
      why: "같은 대전이라도 업무지구·연구단지·도심권의 환경이 달라 위치 확인이 먼저이기 때문입니다.",
    },
    sidebar: [
      { label: "대전 유성구", url: "/daejeon/yuseong-gu/" },
      { label: "대전 서구(둔산·탄방)", url: "/daejeon/seo-gu/" },
      { label: "대전 중구", url: "/daejeon/jung-gu/" },
      { label: "대전 동구(대전역)", url: "/daejeon/dong-gu/" },
      { label: "대전 대덕구", url: "/daejeon/daedeok-gu/" },
      { label: "충청권 광역 대전권", url: "/chungcheong/area/daejeon/" },
    ],
    related: [
      { label: "세종 생활권 안내", url: "/sejong/" },
      { label: "청주·오송·오창권", url: "/chungcheong/area/cheongju-osong-ochang/" },
    ],
    authorityLinks: [{ label: "대전광역시청", url: "https://www.daejeon.go.kr/" }],
  },
  {
    slug: "sejong",
    url: "/sejong/",
    navCurrent: "/sejong/",
    title: "세종 출장마사지 · 신도시·조치원 생활권 안내 | 간다GO",
    h1: "세종 출장마사지 · 신도시·조치원 생활권 안내",
    eyebrow: "세종 지역 안내",
    description: "세종 나성·새롬·조치원 신도시와 읍면 외곽 이용 전 확인사항을 안내합니다.",
    breadcrumbs: [CC, { label: "세종", url: "/sejong/" }],
    area: "세종",
    overview:
      "세종은 특별자치시 지위를 가진 도시로, 행정중심복합도시 성격이 강합니다. 정부청사와 공공기관, 신도시 아파트·오피스텔, 조치원 구도심, 그리고 금남·부강·전의 같은 읍면 외곽이 함께 있어 위치에 따라 이동 기준이 크게 달라집니다. 세종은 자치구가 따로 없는 특별자치시 단위이므로 '세종구' 같은 표현은 사용하지 않고, 동 단위와 읍면 단위로 나누어 안내합니다.",
    adminInfo:
      "세종특별자치시는 행정시나 자치구가 따로 있는 구조가 아니라 특별자치시 단위로 운영됩니다. 나성·새롬·보람·소담·고운·아름·종촌 등 신도시 동과 조치원읍, 금남·부강·전의 등 읍면 외곽을 나누어 이해하는 것이 자연스럽습니다.",
    zonesIntro: "세종은 신도시 동 단위와 조치원·읍면 외곽을 나누어 확인하면 이동 기준을 잡기 쉽습니다.",
    lifeZones: [
      { name: "나성·새롬", note: "상권·오피스텔 밀집 신도시 중심권" },
      { name: "어진·종촌", note: "정부청사 인접 업무·주거권" },
      { name: "보람·소담", note: "남측 신도시 주거권" },
      { name: "고운·아름", note: "북측 신도시 주거권" },
      { name: "조치원", note: "구도심·대학가·조치원역 연계" },
      { name: "금남·부강", note: "읍면 외곽, 이동 기준 확인 필요" },
      { name: "전의·전동 외곽권", note: "장거리 이동 기준 우선 확인" },
    ],
    stations: [
      "정부세종청사 — 어진·종촌 업무권 중심",
      "조치원역 — 구도심·대학가 이동 거점",
      "오송역(KTX, 인접 청주) — 세종 신도시 광역 이동 연계",
      "세종고속시외버스터미널 — 신도시 광역 이동",
    ],
    faqSubset: [0, 1, 4, 6, 7],
    whw: {
      who: "세종 신도시 동과 조치원·읍면 외곽을 특별자치시 기준에 맞춰 안내합니다.",
      how: "정확한 동·호수와 공동현관 방식, 신도시/외곽 여부를 확인한 뒤 이동 기준을 안내합니다.",
      why: "세종은 신도시와 읍면 외곽의 이동 거리 차이가 커서 위치 구분이 예약의 기준이 되기 때문입니다.",
    },
    sidebar: [
      { label: "나성·새롬 생활권", url: "/sejong/life/naseong-saerom/" },
      { label: "어진·종촌 생활권", url: "/sejong/life/eojin-jongchon/" },
      { label: "보람·소담 생활권", url: "/sejong/life/boram-sodam/" },
      { label: "고운·아름 생활권", url: "/sejong/life/goun-areum/" },
      { label: "조치원 생활권", url: "/sejong/life/jochiwon/" },
      { label: "금남·부강 외곽권", url: "/sejong/life/geumnam-bugang/" },
      { label: "세종권 광역 안내", url: "/chungcheong/area/sejong/" },
    ],
    related: [
      { label: "대전 생활권 안내", url: "/daejeon/" },
      { label: "오송·오창 산업권", url: "/chungcheong/area/cheongju-osong-ochang/" },
    ],
    authorityLinks: [{ label: "세종특별자치시청", url: "https://www.sejong.go.kr/" }],
  },
  {
    slug: "cheonan",
    url: "/cheonan/",
    navCurrent: "/cheonan/",
    title: "천안 출장마사지 · 불당·두정·천안아산역 안내 | 간다GO",
    h1: "천안 출장마사지 · 불당·두정·천안아산역 생활권 안내",
    eyebrow: "천안·아산 지역 안내",
    description: "천안 불당·두정·터미널·천안아산역 생활권과 아산 배방·탕정 이용 안내입니다.",
    breadcrumbs: [CC, { label: "천안·아산", url: "/cheonan/" }],
    area: "천안·아산",
    overview:
      "천안은 충남 북부의 핵심 도시로 서북구·동남구 2개 일반구 구조를 기본으로 합니다. 다만 실제 검색·이용 수요는 불당·쌍용 신도시, 두정·성정 상권, 신부동 터미널, 천안아산역 생활권을 중심으로 형성됩니다. 여기에 아산 배방·탕정 산업권과 온양온천까지 생활권이 이어져 천안·아산을 하나의 이동권으로 함께 확인하는 것이 편리합니다.",
    adminInfo:
      "천안시는 서북구와 동남구의 2개 일반구로 나뉩니다. 서북구는 불당·쌍용 신도시와 두정·성정 상권, 성환·직산 산업권을, 동남구는 신부·터미널·대학가와 목천·병천 등 외곽 읍면을 포함합니다. 아산시는 배방·탕정 산업권과 온양온천·모종 생활권으로 이어집니다.",
    zonesIntro: "천안은 구 단위보다 아래 생활권을 기준으로 위치를 확인하면 이동 경로를 잡기 쉽습니다.",
    lifeZones: [
      { name: "불당·쌍용", url: "/cheonan/seobuk-gu/", note: "신도시·오피스텔·상권 중심" },
      { name: "두정·성정", note: "천안역 인접 상권·주거권" },
      { name: "신부·터미널", note: "천안종합터미널·대학가 중심" },
      { name: "천안아산역", note: "KTX·SRT 광역 이동 거점" },
      { name: "성환·직산", url: "/cheonan/seobuk-gu/", note: "북부 산업권·읍면" },
      { name: "아산 배방·탕정", note: "산업단지·신도시 이동권" },
      { name: "온양온천·모종", note: "온천 숙소·아산 도심권" },
    ],
    stations: [
      "천안아산역(KTX·SRT) — 아산 배방·탕정과 인접한 광역 거점",
      "천안역 — 두정·성정·동남구 도심 이동",
      "두정역 — 서북구 두정 상권 연계",
      "천안종합버스터미널 — 신부동 대학가·광역 이동",
      "아산역 — 온양·배방권 이동",
    ],
    faqSubset: [0, 1, 3, 5, 6, 7],
    whw: {
      who: "천안 서북구·동남구와 불당·두정·터미널·천안아산역, 아산 배방·탕정을 함께 안내합니다.",
      how: "생활권·가까운 역·산업단지 접근성을 확인한 뒤 이용 장소별 기준과 예약 시간을 안내합니다.",
      why: "천안·아산은 신도시·상권·터미널·산업단지가 얽혀 있어 생활권 단위 확인이 가장 정확하기 때문입니다.",
    },
    sidebar: [
      { label: "천안 서북구", url: "/cheonan/seobuk-gu/" },
      { label: "천안 동남구", url: "/cheonan/dongnam-gu/" },
      { label: "천안·아산권 광역 안내", url: "/chungcheong/area/cheonan-asan/" },
      { label: "산업단지 인접 이용", url: "/chungcheong/use/industrial-area/" },
    ],
    related: [
      { label: "충남 지역 안내", url: "/chungnam/" },
      { label: "세종 생활권 안내", url: "/sejong/" },
    ],
    authorityLinks: [{ label: "천안시청", url: "https://www.cheonan.go.kr/" }],
  },
  {
    slug: "chungnam",
    url: "/chungnam/",
    navCurrent: "/chungnam/",
    title: "충남 출장마사지 · 아산·서산·당진 지역 안내 | 간다GO",
    h1: "충남 출장마사지 · 시·군 지역 안내",
    eyebrow: "충남 지역 안내",
    description: "충남 천안·아산·공주·논산·서산·당진 등 시·군별 이동 기준과 이용 안내입니다.",
    breadcrumbs: [CC, { label: "충남", url: "/chungnam/" }],
    area: "충남",
    overview:
      "충청남도는 8개 시와 7개 군으로 이루어져 있어 지역 간 이동 거리가 넓습니다. 천안·아산처럼 인구와 산업이 집중된 북부권, 공주·논산·계룡 같은 중부권, 서산·당진·태안 같은 서북부 산업·해안권으로 성격이 나뉩니다. 그래서 충남은 하나로 묶기보다 시·군 단위와 산업단지·터미널·숙소 접근성을 함께 확인하는 것이 정확합니다.",
    adminInfo:
      "충청남도는 천안·공주·보령·아산·서산·논산·계룡·당진의 8개 시와 금산·부여·서천·청양·홍성·예산·태안의 7개 군으로 구성됩니다. 검색·이동 수요가 큰 천안·아산·서산·당진·공주·논산부터 확인하고, 외곽 군 지역은 이동 기준을 먼저 잡는 것이 좋습니다.",
    zonesIntro: "충남은 아래 시·군을 기준으로 이동 거리와 산업권·숙소 접근성을 함께 확인하세요.",
    lifeZones: [
      { name: "천안", url: "/cheonan/", note: "충남 북부 핵심 도시" },
      { name: "아산", note: "배방·탕정 산업권·온양온천" },
      { name: "공주", note: "구도심·대학가·관광 숙소권" },
      { name: "논산", note: "내동·취암 도심·군부대 인근" },
      { name: "계룡", note: "엄사 생활권" },
      { name: "서산", note: "대산산단·예천·동문 도심권" },
      { name: "당진", note: "송악·송산 산업권·읍내" },
      { name: "홍성·내포", note: "내포신도시 행정권" },
      { name: "예산·보령", note: "삽교·덕산·대천 생활권" },
    ],
    stations: [
      "천안아산역(KTX·SRT) — 충남 북부 광역 관문",
      "공주역(KTX) — 충남 중부 이동 거점",
      "논산역 — 논산·계룡권 이동",
      "서산공용버스터미널 — 서산·태안권 이동",
      "당진버스터미널 — 당진 산업권 이동",
    ],
    faqSubset: [0, 2, 3, 5, 6, 7],
    whw: {
      who: "충남 8시·7군을 검색·이동 수요가 큰 지역부터 시·군 단위로 안내합니다.",
      how: "정확한 시·군과 산업단지·터미널·숙소 접근성, 외곽 이동 기준을 확인해 안내합니다.",
      why: "충남은 시·군 간 이동 거리가 넓어 권역·거리 확인이 예약의 핵심이 되기 때문입니다.",
    },
    sidebar: [
      { label: "천안·아산권", url: "/cheonan/" },
      { label: "충남 서북부권(서산·당진)", url: "/chungcheong/area/chungnam-northwest/" },
      { label: "충남 남부권(공주·논산)", url: "/chungcheong/area/chungnam-south/" },
      { label: "산업단지 인접 이용", url: "/chungcheong/use/industrial-area/" },
    ],
    related: [
      { label: "충북 지역 안내", url: "/chungbuk/" },
      { label: "대전 생활권 안내", url: "/daejeon/" },
    ],
    authorityLinks: [{ label: "충청남도청", url: "https://www.chungnam.go.kr/" }],
  },
  {
    slug: "chungbuk",
    url: "/chungbuk/",
    navCurrent: "/chungbuk/",
    title: "충북 출장마사지 · 청주·충주·제천 지역 안내 | 간다GO",
    h1: "충북 출장마사지 · 시·군 지역 안내",
    eyebrow: "충북 지역 안내",
    description: "충북 청주·오송·오창·충주·제천 등 시·군별 산업권·이동 기준 안내입니다.",
    breadcrumbs: [CC, { label: "충북", url: "/chungbuk/" }],
    area: "충북",
    overview:
      "충청북도는 3개 시와 8개 군으로 안내되며, 청주시가 상당·서원·흥덕·청원 4개 구로 나뉘는 핵심 도시입니다. 청주권은 도심과 함께 오송 생명과학단지, 오창 과학산업단지, 가경·복대·율량 생활권까지 수요가 크고, 충주·제천은 북부 도심·숙소·터미널권, 진천·음성은 혁신도시·산업단지권으로 이어집니다.",
    adminInfo:
      "충청북도는 청주·충주·제천의 3개 시와 보은·옥천·영동·증평·진천·괴산·음성·단양의 8개 군으로 구성됩니다. 청주시는 상당구·서원구·흥덕구·청원구로 나뉩니다. 수요가 큰 청주권과 충주·제천권, 진천·음성 산업단지권부터 확인하는 것이 좋습니다.",
    zonesIntro: "충북은 청주 4개 구와 오송·오창 산업권, 충주·제천 북부권을 기준으로 확인하세요.",
    lifeZones: [
      { name: "청주", note: "상당·서원·흥덕·청원 4개 구 도심" },
      { name: "오송", note: "오송생명과학단지·오송역 연계" },
      { name: "오창", note: "오창 과학산업단지권" },
      { name: "가경·복대", note: "청주 서부 상권·주거권" },
      { name: "율량·사천", note: "청주 북부 주거권" },
      { name: "충주", note: "연수·호암 도심·터미널권" },
      { name: "제천", note: "하소·청전 도심권" },
      { name: "진천·음성", note: "혁신도시·산업단지권" },
      { name: "단양", note: "관광 숙소권, 장거리 이동 확인" },
    ],
    stations: [
      "오송역(KTX·SRT) — 청주·세종 광역 관문",
      "청주고속버스터미널 — 청주 도심 이동 거점",
      "청주국제공항 인접권 — 오창·북청주 연계",
      "충주역 — 충주 도심·북부권 이동",
      "제천역 — 제천 도심·중앙선 이동",
    ],
    faqSubset: [0, 2, 3, 5, 6, 7],
    whw: {
      who: "충북 3시·8군과 청주 4개 구, 오송·오창 산업권을 수요가 큰 순으로 안내합니다.",
      how: "청주 도심/산업단지/북부권 여부와 정확한 주소·이동 기준을 확인해 안내합니다.",
      why: "충북은 청주권 도심과 산업단지, 충주·제천 북부권의 환경이 달라 권역 확인이 먼저이기 때문입니다.",
    },
    sidebar: [
      { label: "청주·오송·오창권", url: "/chungcheong/area/cheongju-osong-ochang/" },
      { label: "충북 중부·북부권", url: "/chungcheong/area/chungbuk-central-north/" },
      { label: "산업단지 인접 이용", url: "/chungcheong/use/industrial-area/" },
    ],
    related: [
      { label: "세종 생활권 안내", url: "/sejong/" },
      { label: "충남 지역 안내", url: "/chungnam/" },
    ],
    authorityLinks: [{ label: "충청북도청", url: "https://www.chungbuk.go.kr/" }],
  },
];

export { CC };
