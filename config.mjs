// ============================================================================
// 사이트 전역 설정 (간다GO · 세종·충청권 안내 사이트)
// ----------------------------------------------------------------------------
// 텔레그램 링크는 아래 telegram 값만 교체하면 전 페이지 푸터에 반영됩니다.
// ============================================================================

export const site = {
  brand: "간다GO",
  legalName: "간다GO",
  // 상호 / 전화예약
  phone: "0508-202-4719",
  phoneHref: "tel:0508-202-4719",

  // 배포 도메인 (실제 도메인으로 교체하세요)
  baseUrl: "https://ganda-go.example.com",

  // 대표 지역/서비스 (schema · 문구용)
  regionServed: "세종·충청권",

  // ── 텔레그램 링크 (자리표시자 — 실제 핸들로 교체) ──────────────────────────
  telegram: {
    // 웹사이트 제작문의
    build: "https://t.me/ganda_go",
    // 제휴문의
    partner: "https://t.me/ganda_go",
  },

  // 대표 이미지 (og:image / schema image 기본값)
  defaultImage: "/assets/og-default.svg",
};

// 이용 코스 · 요금 (모든 지역 페이지에 공통 노출)
export const pricing = {
  heading: "이용 코스와 요금 살펴보기",
  sub: "60·90·120분 코스별 기준 요금이며, 추가 비용 없이 있는 그대로 안내해 드립니다.",
  note: "지역·예약 시간대·이동 거리에 따라 상담 시 최종 확인됩니다.",
  courses: [
    { name: "60분 코스", price: "90,000", duration: "60분", desc: "기본 컨디션·릴랙스 케어", featured: false },
    { name: "90분 코스", price: "150,000", duration: "90분", desc: "아로마 포함 추천 구성", featured: true },
    { name: "120분 코스", price: "180,000", duration: "120분", desc: "전신 집중 프리미엄 케어", featured: false },
  ],
};

// 상단 글로벌 내비게이션 (메뉴명에 "출장마사지" 반복 금지)
export const nav = [
  { label: "충청 홈", url: "/chungcheong/" },
  { label: "대전", url: "/daejeon/" },
  { label: "세종", url: "/sejong/" },
  { label: "천안·아산", url: "/cheonan/" },
  { label: "청주권", url: "/chungcheong/area/cheongju-osong-ochang/" },
  { label: "충남", url: "/chungnam/" },
  { label: "충북", url: "/chungbuk/" },
  { label: "거점 안내", url: "/chungcheong/hubs/" },
  { label: "이용 장소", url: "/chungcheong/use/home/" },
  { label: "예약 전 확인", url: "/chungcheong/check/address/" },
  { label: "운영 기준", url: "/about/" },
  { label: "문의하기", url: "/contact/" },
];
