// ============================================================================
// 이용 장소(9) · 예약 전 확인(10) · 문의하기 · 홈페이지 데이터
// ============================================================================
import { CC } from "./regions.mjs";

const useCrumb = { label: "이용 장소", url: "/chungcheong/use/home/" };
const checkCrumb = { label: "예약 전 확인", url: "/chungcheong/check/address/" };

// ── 이용 장소 페이지 ─────────────────────────────────────────────────────────
export const usePages = [
  {
    url: "/chungcheong/use/home/", h1: "자택 이용 안내", title: "자택 출장마사지 이용 안내 | 간다GO",
    description: "자택 이용 시 정확한 주소·공동현관·주차 등 확인사항을 안내합니다.",
    breadcrumbs: [CC, useCrumb, { label: "자택 이용", url: "/chungcheong/use/home/" }],
    lead: "자택에서 이용할 때는 정확한 동·호수와 건물 출입 방식이 예약의 기준이 됩니다.",
    sections: [
      { h2: "자택 이용 전 확인", list: ["정확한 도로명 주소와 동·호수", "공동현관 비밀번호 또는 출입 방식", "주차 가능 여부와 방문 차량 안내", "엘리베이터 이용 가능 여부"] },
      { h2: "권역별 이동 기준", body: "대전·세종·천안 도심은 이동이 비교적 수월하지만, 충남·충북 외곽은 이동 거리에 따라 예약 시간이 달라질 수 있습니다. 방문 주소가 어느 권역인지 먼저 확인하세요." },
    ],
  },
  {
    url: "/chungcheong/use/hotel/", h1: "호텔·숙소 이용 안내", title: "호텔·숙소 출장마사지 이용 안내 | 간다GO",
    description: "호텔·숙소 이용 시 객실 출입·프런트 확인·숙소 정책을 안내합니다.",
    breadcrumbs: [CC, useCrumb, { label: "호텔·숙소 이용", url: "/chungcheong/use/hotel/" }],
    lead: "호텔·숙소는 객실 출입 가능 여부와 프런트 확인 방식, 숙소 정책을 먼저 확인해야 합니다.",
    sections: [
      { h2: "호텔·숙소 이용 전 확인", list: ["숙소명·객실 번호와 정확한 위치", "객실 방문 가능 여부(숙소 정책)", "프런트 확인 또는 등록 방식", "야간 출입 가능 시간"] },
      { h2: "유성온천·온양온천 등 숙박권", body: "대전 유성, 아산 온양처럼 숙박 수요가 큰 지역은 숙소마다 정책이 달라, 예약 전 객실 방문 가능 여부를 확인해 두는 것이 편리합니다." },
    ],
  },
  {
    url: "/chungcheong/use/officetel/", h1: "오피스텔 이용 안내", title: "오피스텔 출장마사지 이용 안내 | 간다GO",
    description: "오피스텔 이용 시 공동현관·엘리베이터·관리 규정을 안내합니다.",
    breadcrumbs: [CC, useCrumb, { label: "오피스텔 이용", url: "/chungcheong/use/officetel/" }],
    lead: "오피스텔은 공동현관과 엘리베이터, 관리 규정, 방문 가능 시간대 확인이 중요합니다.",
    sections: [
      { h2: "오피스텔 이용 전 확인", list: ["공동현관 출입 방식(비밀번호·호출)", "엘리베이터 카드키 여부", "관리 규정과 방문객 등록 절차", "방문 가능 시간대"] },
      { h2: "둔산·불당 등 오피스텔 밀집권", body: "대전 둔산, 천안 불당처럼 오피스텔이 밀집한 업무·신도시권은 건물별 관리 규정이 다르므로 출입 방식을 미리 확인하세요." },
    ],
  },
  {
    url: "/chungcheong/use/business-district/", h1: "업무지구 이용 안내", title: "업무지구 출장마사지 이용 안내 | 간다GO",
    description: "둔산·정부청사 등 업무지구 이용 시 출입·주차 기준을 안내합니다.",
    breadcrumbs: [CC, useCrumb, { label: "업무지구 이용", url: "/chungcheong/use/business-district/" }],
    lead: "업무지구는 건물 출입 통제와 주차, 방문 가능 시간을 먼저 확인해야 합니다.",
    sections: [
      { h2: "업무지구 이용 전 확인", list: ["건물 출입 통제·방문증 발급 여부", "주차 가능 여부와 위치", "야간·주말 출입 가능 시간", "정확한 층·호실"] },
      { h2: "둔산·세종청사 업무권", body: "대전 둔산과 세종 정부청사권은 업무시설 비중이 높아 출입 통제가 있는 경우가 많습니다. 방문 가능 시간과 출입 절차를 확인하세요." },
    ],
  },
  {
    url: "/chungcheong/use/industrial-area/", h1: "산업단지 인접 이용 안내", title: "산업단지 인접 출장마사지 이용 안내 | 간다GO",
    description: "오송·오창·탕정 등 산업단지 인접 이용 시 주소·야간 출입을 안내합니다.",
    breadcrumbs: [CC, useCrumb, { label: "산업단지 인접 이용", url: "/chungcheong/use/industrial-area/" }],
    lead: "산업단지 인접 지역은 정확한 주소와 주차, 야간 출입 가능 여부 확인이 특히 중요합니다.",
    sections: [
      { h2: "산업단지 인접 이용 전 확인", list: ["정확한 사업장·숙소 주소", "주차 가능 여부", "야간 출입 가능 여부", "이동 거리 기준"] },
      { h2: "오송·오창·탕정·대산 산업권", body: "오송생명과학단지, 오창 과학산업단지, 아산 탕정, 서산 대산산단, 당진 송악·송산 등은 사업장·숙소가 외곽에 분포하는 경우가 많아 주소와 이동 기준을 함께 확인해야 합니다." },
    ],
  },
  {
    url: "/chungcheong/use/station-terminal/", h1: "KTX·터미널 인접 이용 안내", title: "KTX·터미널 인접 출장마사지 이용 안내 | 간다GO",
    description: "대전역·천안아산역·오송역 등 역·터미널 인접 이용 기준을 안내합니다.",
    breadcrumbs: [CC, useCrumb, { label: "KTX·터미널 인접 이용", url: "/chungcheong/use/station-terminal/" }],
    lead: "역·터미널 인접 지역은 이동 거점을 기준으로 위치를 확인하면 예약이 수월합니다.",
    sections: [
      { h2: "역·터미널 인접 이용 전 확인", list: ["가까운 역·터미널명", "숙소·건물 정확한 주소", "출입 방식과 방문 가능 시간", "이동 경로"] },
      { h2: "충청권 주요 거점", body: "대전역·서대전역·유성온천역·정부청사역·천안아산역·두정역·오송역·조치원역·공주역·충주역·제천역 등 주요 거점을 기준으로 인접 생활권을 확인할 수 있습니다." },
    ],
  },
  {
    url: "/chungcheong/use/business-trip-accommodation/", h1: "출장 숙소 이용 안내", title: "출장 숙소 출장마사지 이용 안내 | 간다GO",
    description: "산업단지 인근 출장 숙소 이용 시 주소·출입·이동 기준을 안내합니다.",
    breadcrumbs: [CC, useCrumb, { label: "출장 숙소 이용", url: "/chungcheong/use/business-trip-accommodation/" }],
    lead: "산업단지 인근 출장 숙소는 숙소 정책과 출입 방식, 이동 기준을 함께 확인해야 합니다.",
    sections: [
      { h2: "출장 숙소 이용 전 확인", list: ["숙소명·객실 번호", "객실 방문 가능 여부", "프런트 확인·야간 출입", "가까운 산업단지·이동 거리"] },
      { h2: "서산·당진·음성권 출장 숙소", body: "서산·당진·진천·음성 산업권은 출장 숙소 수요가 많은 편입니다. 숙소 위치와 이동 거리를 먼저 확인하세요." },
    ],
  },
  {
    url: "/chungcheong/use/night/", h1: "야간 예약 안내", title: "야간 출장마사지 예약 안내 | 간다GO",
    description: "야간 예약 시 출입 가능 시간·이동 기준·연락 방법을 안내합니다.",
    breadcrumbs: [CC, useCrumb, { label: "야간 예약", url: "/chungcheong/use/night/" }],
    lead: "야간 예약은 건물·숙소의 야간 출입 가능 시간과 이동 기준을 미리 확인해야 합니다.",
    sections: [
      { h2: "야간 예약 전 확인", list: ["건물·숙소 야간 출입 가능 시간", "공동현관·프런트 야간 운영 여부", "야간 이동 거리 기준", "연락 가능한 연락처"] },
      { h2: "권역별 야간 이동", body: "도심권은 야간 이동이 비교적 수월하지만 충남·충북 외곽은 이동 시간이 늘어날 수 있어 예약 시간을 넉넉히 확인하는 것이 좋습니다." },
    ],
  },
  {
    url: "/chungcheong/use/outer-area/", h1: "외곽 지역 이용 안내", title: "외곽 지역 출장마사지 이용 안내 | 간다GO",
    description: "충남·충북 외곽·읍면 지역 이용 시 이동 거리·예약 시간을 안내합니다.",
    breadcrumbs: [CC, useCrumb, { label: "외곽 지역 이용", url: "/chungcheong/use/outer-area/" }],
    lead: "외곽·읍면 지역은 이동 거리가 넓어 예약 시간과 추가 이동 기준을 먼저 확인해야 합니다.",
    sections: [
      { h2: "외곽 지역 이용 전 확인", list: ["정확한 주소와 가까운 읍·면", "이동 거리와 예상 소요 시간", "예약 가능 시간대", "야간 출입 가능 여부"] },
      { h2: "세종 읍면·충남북 군 지역", body: "세종 금남·부강·전의, 충남 부여·청양·서천, 충북 괴산·단양 등 외곽·군 지역은 이동 거리에 따라 예약 시간이 달라질 수 있습니다." },
    ],
  },
];

// ── 예약 전 확인 페이지 ──────────────────────────────────────────────────────
export const checkPages = [
  { url: "/chungcheong/check/address/", h1: "방문 주소 확인", title: "방문 주소 확인 안내 | 간다GO",
    description: "정확한 도로명 주소와 권역·생활권 확인 방법을 안내합니다.",
    breadcrumbs: [CC, checkCrumb, { label: "방문 주소 확인", url: "/chungcheong/check/address/" }],
    lead: "예약 전 가장 먼저 확인할 것은 정확한 방문 주소와 어느 권역인지입니다.",
    sections: [{ h2: "확인할 내용", list: ["도로명 주소와 동·호수", "대전·세종·천안·충남·충북 중 권역", "가까운 생활권과 역·터미널", "건물 출입 방식"] }] },
  { url: "/chungcheong/check/building-access/", h1: "건물 출입 방식 확인", title: "건물 출입 방식 확인 안내 | 간다GO",
    description: "공동현관·엘리베이터·방문 등록 등 건물 출입 방식을 안내합니다.",
    breadcrumbs: [CC, checkCrumb, { label: "건물 출입 방식", url: "/chungcheong/check/building-access/" }],
    lead: "건물마다 출입 방식이 달라 예약 전 확인이 필요합니다.",
    sections: [{ h2: "확인할 내용", list: ["공동현관 비밀번호·호출 방식", "엘리베이터 카드키 여부", "방문객 등록 절차", "출입 가능 시간"] }] },
  { url: "/chungcheong/check/hotel-policy/", h1: "호텔·숙소 정책 확인", title: "호텔·숙소 정책 확인 안내 | 간다GO",
    description: "객실 방문 가능 여부와 프런트 확인 등 숙소 정책을 안내합니다.",
    breadcrumbs: [CC, checkCrumb, { label: "호텔·숙소 정책", url: "/chungcheong/check/hotel-policy/" }],
    lead: "호텔·숙소는 객실 방문 가능 여부 등 숙소 정책을 먼저 확인해야 합니다.",
    sections: [{ h2: "확인할 내용", list: ["객실 방문 가능 여부", "프런트 확인·등록 방식", "야간 출입 가능 시간", "숙소별 정책 차이"] }] },
  { url: "/chungcheong/check/officetel-rule/", h1: "오피스텔 관리 규정 확인", title: "오피스텔 관리 규정 확인 안내 | 간다GO",
    description: "오피스텔 공동현관·방문 등록 등 관리 규정을 안내합니다.",
    breadcrumbs: [CC, checkCrumb, { label: "오피스텔 관리 규정", url: "/chungcheong/check/officetel-rule/" }],
    lead: "오피스텔은 건물별 관리 규정과 방문 가능 시간대를 확인해야 합니다.",
    sections: [{ h2: "확인할 내용", list: ["공동현관·엘리베이터 출입", "관리 규정·방문객 등록", "방문 가능 시간대", "주차 가능 여부"] }] },
  { url: "/chungcheong/check/travel-fee/", h1: "상세 요금·외곽 이동비 기준", title: "상세 요금·외곽 이동비 기준 안내 | 간다GO",
    description: "코스별 기준 요금과 외곽 지역 이동 기준을 안내합니다.",
    breadcrumbs: [CC, checkCrumb, { label: "상세 요금·이동비", url: "/chungcheong/check/travel-fee/" }],
    lead: "코스별 기준 요금은 페이지 하단 요금표에서 확인할 수 있으며, 외곽 지역은 이동 기준을 함께 확인합니다.",
    sections: [
      { h2: "요금 안내 기준", body: "60·90·120분 코스별 기준 요금을 그대로 안내하며, 지역·예약 시간대·이동 거리에 따라 상담 시 최종 확인됩니다. 과장된 표현이나 허위 요금은 사용하지 않습니다." },
      { h2: "외곽 이동 기준", list: ["방문 주소가 어느 권역인지", "가까운 생활권·역·터미널", "이동 거리와 예상 소요 시간", "예약 가능 시간대"] },
    ] },
  { url: "/chungcheong/check/time/", h1: "예약 가능 시간 확인", title: "예약 가능 시간 확인 안내 | 간다GO",
    description: "예약 가능 시간대와 야간 이용 기준을 안내합니다.",
    breadcrumbs: [CC, checkCrumb, { label: "예약 가능 시간", url: "/chungcheong/check/time/" }],
    lead: "예약 가능 시간과 이동 소요 시간을 함께 확인하면 예약이 수월합니다.",
    sections: [{ h2: "확인할 내용", list: ["희망 예약 시간대", "이동 거리에 따른 소요 시간", "야간 예약 가능 여부", "예약 변경 시 기준"] }] },
  { url: "/chungcheong/check/change-policy/", h1: "예약 변경 기준", title: "예약 변경 기준 안내 | 간다GO",
    description: "예약 변경·취소 시 확인해야 할 기준을 안내합니다.",
    breadcrumbs: [CC, checkCrumb, { label: "예약 변경 기준", url: "/chungcheong/check/change-policy/" }],
    lead: "예약 변경이 필요할 때는 시간과 이동 기준을 함께 확인해야 합니다.",
    sections: [{ h2: "확인할 내용", list: ["변경 희망 시간", "이동 거리 재확인", "연락 가능한 연락처", "변경 가능 여부"] }] },
  { url: "/chungcheong/check/privacy/", h1: "개인정보 처리 기준", title: "개인정보 처리 기준(처리방침) | 간다GO",
    description: "예약 확인에 필요한 최소 정보만 확인하는 개인정보 처리 기준입니다.",
    breadcrumbs: [CC, checkCrumb, { label: "개인정보 처리 기준", url: "/chungcheong/check/privacy/" }],
    lead: "예약 확인과 연락에 필요한 최소한의 정보만 확인하고, 목적 달성 후에는 관련 기준에 따라 처리합니다.",
    sections: [
      { h2: "수집·이용 목적", body: "예약 확인, 방문 지역·시간 안내, 연락을 위한 최소 정보(연락처, 방문 지역 등)만 확인합니다." },
      { h2: "처리 원칙", list: ["필요 최소한의 정보만 확인", "예약·연락 목적 외 이용하지 않음", "제3자에게 무단 제공하지 않음", "문의는 문의하기 페이지로 연결"] },
    ] },
  { url: "/chungcheong/check/service-policy/", h1: "불법·선정적 서비스 불가 안내", title: "불법·선정적 서비스 불가 안내 · 운영 기준 | 간다GO",
    description: "불법·선정적 서비스를 제공·안내하지 않는 운영 기준을 안내합니다.",
    breadcrumbs: [CC, checkCrumb, { label: "불법·선정적 서비스 불가 안내", url: "/chungcheong/check/service-policy/" }],
    lead: "본 사이트는 지역·생활권·이용 장소 안내와 예약 전 확인 정보를 제공하며, 불법·선정적 서비스는 제공하거나 안내하지 않습니다.",
    sections: [
      { h2: "운영 기준", list: ["불법·선정적 서비스 제공·안내 불가", "허위 후기·가짜 평점 사용 금지", "순위 보장·과장 표현 사용 금지", "정확한 지역·이용 안내 제공"] },
      { h2: "관련 안내", body: "개인정보는 개인정보 처리 기준에 따라 관리하며, 문의는 문의하기 페이지에서 확인할 수 있습니다." },
    ] },
  { url: "/chungcheong/check/customer-notice/", h1: "고객 유의사항", title: "고객 유의사항 안내 | 간다GO",
    description: "예약 전 고객이 확인해야 할 유의사항을 안내합니다.",
    breadcrumbs: [CC, checkCrumb, { label: "고객 유의사항", url: "/chungcheong/check/customer-notice/" }],
    lead: "원활한 예약을 위해 아래 유의사항을 미리 확인해 주세요.",
    sections: [{ h2: "유의사항", list: ["정확한 주소·연락처 확인", "이용 장소별 출입 방식 확인", "예약 시간·이동 기준 확인", "불법·선정적 서비스는 제공하지 않음"] }] },
];

// ── 문의하기 ─────────────────────────────────────────────────────────────────
export const contactPage = {
  url: "/contact/", navCurrent: "/contact/", h1: "문의하기", title: "문의하기 · 예약 · 제휴 | 간다GO",
  description: "전화예약과 웹사이트 제작문의·제휴문의 연락 방법을 안내합니다.",
  breadcrumbs: [CC, { label: "문의하기", url: "/contact/" }],
};

// ── 홈페이지 섹션 (Section 25) ───────────────────────────────────────────────
export const home = {
  url: "/chungcheong/",
  canonical: "/chungcheong/",
  navCurrent: "/chungcheong/",
  title: "세종·충청도 출장마사지 | 천안·대전·청주 지역 안내 · 간다GO",
  h1: "세종·충청도 출장마사지 · 생활권별 방문 가능 지역 안내",
  eyebrow: "세종·충청권 지역 안내",
  description: "대전·세종·천안·청주·아산 주요 생활권과 이용 전 확인사항을 안내합니다.",
  lede: "대전, 세종, 천안, 청주, 아산, 오송, 오창, 유성, 둔산, 불당 등 충청권 주요 생활권과 자택·호텔·오피스텔 이용 전 확인사항을 안내합니다.",
  breadcrumbs: [CC],
  faqSubsetAll: true,
  cta: [
    { label: "대전권 보기", url: "/daejeon/" },
    { label: "세종권 보기", url: "/sejong/" },
    { label: "천안·아산권 보기", url: "/cheonan/" },
    { label: "충남·충북 보기", url: "/chungnam/" },
    { label: "예약 전 확인", url: "/chungcheong/check/address/" },
  ],
  intro:
    "충청권은 대전·세종·천안·청주처럼 도심 수요가 강한 지역과 충남·충북 외곽 시군처럼 이동 기준이 중요한 지역이 함께 있습니다. 같은 충청권이라도 대전 둔산, 세종 나성, 천안 불당, 청주 오송, 아산 탕정은 이용 환경이 다릅니다. 이 사이트는 행정구역, 생활권, 역·터미널, 숙소 형태, 예약 전 확인사항을 함께 안내합니다.",
  coreZones: [
    { label: "대전 둔산·탄방", url: "/daejeon/seo-gu/" },
    { label: "대전 유성·봉명", url: "/daejeon/yuseong-gu/" },
    { label: "세종 나성·새롬", url: "/sejong/" },
    { label: "세종 조치원", url: "/chungcheong/area/sejong/" },
    { label: "천안 불당·쌍용", url: "/cheonan/seobuk-gu/" },
    { label: "천안 두정·성정", url: "/cheonan/" },
    { label: "천안아산역", url: "/chungcheong/area/cheonan-asan/" },
    { label: "아산 배방·탕정", url: "/chungcheong/area/cheonan-asan/" },
  ],
  chungnam: [
    { label: "천안", url: "/cheonan/" }, { label: "아산", url: "/chungcheong/area/cheonan-asan/" },
    { label: "공주", url: "/chungcheong/area/chungnam-south/" }, { label: "논산", url: "/chungcheong/area/chungnam-south/" },
    { label: "계룡", url: "/chungcheong/area/chungnam-south/" }, { label: "서산", url: "/chungcheong/area/chungnam-northwest/" },
    { label: "당진", url: "/chungcheong/area/chungnam-northwest/" }, { label: "홍성·내포", url: "/chungcheong/area/chungnam-northwest/" },
    { label: "예산", url: "/chungcheong/area/chungnam-northwest/" }, { label: "보령", url: "/chungcheong/area/chungnam-south/" },
  ],
  chungbuk: [
    { label: "청주", url: "/chungbuk/" }, { label: "오송", url: "/chungcheong/area/cheongju-osong-ochang/" },
    { label: "오창", url: "/chungcheong/area/cheongju-osong-ochang/" }, { label: "충주", url: "/chungcheong/area/chungbuk-central-north/" },
    { label: "제천", url: "/chungcheong/area/chungbuk-central-north/" }, { label: "진천", url: "/chungcheong/area/chungbuk-central-north/" },
    { label: "음성", url: "/chungcheong/area/chungbuk-central-north/" }, { label: "증평", url: "/chungcheong/area/chungbuk-central-north/" },
    { label: "단양", url: "/chungcheong/area/chungbuk-central-north/" },
  ],
  useCards: [
    { label: "자택", url: "/chungcheong/use/home/" }, { label: "호텔·숙소", url: "/chungcheong/use/hotel/" },
    { label: "오피스텔", url: "/chungcheong/use/officetel/" }, { label: "업무지구", url: "/chungcheong/use/business-district/" },
    { label: "산업단지 인접", url: "/chungcheong/use/industrial-area/" }, { label: "KTX·터미널 인접", url: "/chungcheong/use/station-terminal/" },
    { label: "출장 숙소", url: "/chungcheong/use/business-trip-accommodation/" }, { label: "야간 예약", url: "/chungcheong/use/night/" },
    { label: "외곽 지역", url: "/chungcheong/use/outer-area/" },
  ],
};

export { useCrumb, checkCrumb };
