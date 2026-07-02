// ============================================================================
// 거점 안내 허브(통합 1페이지) + 운영 기준·소개(About, E-E-A-T)
// 스펙 14항: 역·터미널 개별 페이지 남발 금지 → 하나의 허브로 통합.
// ============================================================================
import { CC } from "./regions.mjs";

// ── KTX·터미널·산업단지 거점 안내 (통합 허브) ────────────────────────────────
export const hubPage = {
  url: "/chungcheong/hubs/",
  navCurrent: "/chungcheong/hubs/",
  eyebrow: "거점 안내",
  title: "충청권 KTX·터미널·산업단지 거점 안내 | 간다GO",
  h1: "KTX·터미널·산업단지 거점 안내",
  description: "충청권 KTX·터미널·산업단지 거점과 가까운 생활권을 한눈에 안내합니다.",
  breadcrumbs: [CC, { label: "거점 안내", url: "/chungcheong/hubs/" }],
  lead: "역·터미널·산업단지를 기준으로 가까운 생활권을 확인하면 예약이 수월합니다. 출구별·노선별 페이지는 만들지 않으며, 거점에서 가까운 지역 안내로 연결합니다.",
  sections: [
    {
      h2: "대전권 거점",
      body: "대전은 지하철 1호선과 순환 도로로 거점 간 이동이 수월합니다. 역·터미널을 기준으로 가까운 구·생활권을 확인하세요.",
      linkList: [
        { label: "대전역·중앙로 생활권(동구)", url: "/daejeon/dong-gu/", note: "KTX·SRT 관문" },
        { label: "둔산·탄방 업무지구(서구)", url: "/chungcheong/life/daejeon-dunsan/", note: "정부청사역" },
        { label: "유성온천·봉명 숙박권", url: "/chungcheong/life/daejeon-yuseong/", note: "유성온천역" },
        { label: "대덕·신탄진권", url: "/daejeon/daedeok-gu/", note: "신탄진역·산업권" },
      ],
    },
    {
      h2: "세종권 거점",
      body: "세종은 정부세종청사와 조치원역, 인접 오송역을 축으로 이동합니다.",
      linkList: [
        { label: "어진·종촌(정부세종청사)", url: "/sejong/life/eojin-jongchon/", note: "청사 업무권" },
        { label: "조치원 생활권", url: "/sejong/life/jochiwon/", note: "조치원역·대학가" },
        { label: "나성·새롬 상권", url: "/sejong/life/naseong-saerom/", note: "고속시외버스터미널" },
        { label: "금남·부강 외곽권", url: "/sejong/life/geumnam-bugang/", note: "부강역" },
      ],
    },
    {
      h2: "천안·아산권 거점",
      body: "천안아산역을 축으로 천안·아산이 하나의 이동권으로 이어집니다.",
      linkList: [
        { label: "천안아산역 인접 생활권", url: "/chungcheong/area/cheonan-asan/", note: "KTX·SRT" },
        { label: "두정·성정(두정역·천안역)", url: "/cheonan/life/dujeong-seongjeong/", note: "역세권 상권" },
        { label: "신부·터미널(종합버스터미널)", url: "/cheonan/life/sinbu-terminal/", note: "광역 이동" },
        { label: "아산 배방·탕정·온양", url: "/chungnam/asan/", note: "아산역·온양온천역" },
      ],
    },
    {
      h2: "청주·충북권 거점",
      body: "오송역(KTX·SRT)과 청주국제공항, 고속버스터미널이 청주·충북 광역 관문입니다.",
      linkList: [
        { label: "오송·오창 산업권(오송역)", url: "/chungbuk/cheongju/heungdeok-gu/", note: "생명과학단지" },
        { label: "가경동(청주고속버스터미널)", url: "/chungbuk/cheongju/heungdeok-gu/", note: "광역 이동" },
        { label: "청원구(청주국제공항 인접)", url: "/chungbuk/cheongju/cheongwon-gu/", note: "오창 과학산단" },
        { label: "충주역·제천역·단양역권", url: "/chungcheong/area/chungbuk-central-north/", note: "북부 이동" },
      ],
    },
    {
      h2: "충남권 거점",
      body: "공주역·논산역 등 KTX·철도와 서산·당진 터미널이 충남 이동 거점입니다.",
      linkList: [
        { label: "공주역·공주 도심", url: "/chungnam/gongju/", note: "KTX" },
        { label: "논산역·논산 도심", url: "/chungnam/nonsan/", note: "호남선" },
        { label: "서산 대산산단·터미널", url: "/chungnam/seosan/", note: "산업권" },
        { label: "당진 송악·송산 산업권", url: "/chungnam/dangjin/", note: "철강 산업권" },
      ],
    },
    {
      h2: "산업단지·업무지구 거점",
      body: "산업단지 인근은 사업장·출장 숙소 주소와 야간 출입 기준을 별도로 확인해야 합니다. 자세한 이용 기준은 산업단지 인접 이용 안내에서 확인하세요.",
      linkList: [
        { label: "오송생명과학단지·오창과학산단", url: "/chungcheong/area/cheongju-osong-ochang/" },
        { label: "아산 탕정 산업권", url: "/chungnam/asan/" },
        { label: "서산 대산·당진 송악 산업권", url: "/chungcheong/area/chungnam-northwest/" },
        { label: "진천·음성 혁신도시 산업권", url: "/chungbuk/jincheon/" },
        { label: "산업단지 인접 이용 기준", url: "/chungcheong/use/industrial-area/" },
      ],
    },
  ],
  relatedLinks: [
    { label: "대전 지역 안내", url: "/daejeon/" },
    { label: "세종 지역 안내", url: "/sejong/" },
    { label: "천안·아산 지역 안내", url: "/cheonan/" },
    { label: "청주 지역 안내", url: "/chungbuk/cheongju/" },
    { label: "KTX·터미널 인접 이용", url: "/chungcheong/use/station-terminal/" },
    { label: "산업단지 인접 이용", url: "/chungcheong/use/industrial-area/" },
  ],
};

// ── 운영 기준 · 소개 (About / E-E-A-T) ───────────────────────────────────────
export const aboutPage = {
  url: "/about/",
  navCurrent: "/about/",
  eyebrow: "운영 기준·소개",
  title: "운영 기준·소개 | 간다GO 세종·충청권 지역 안내",
  h1: "간다GO 운영 기준·소개",
  description: "간다GO 운영 원칙과 정보 작성·검수 기준, 연락처를 안내합니다.",
  breadcrumbs: [CC, { label: "운영 기준·소개", url: "/about/" }],
  lead: "간다GO는 세종·충청권의 지역·생활권, 역·터미널, 이용 장소, 예약 전 확인 정보를 정리해 안내하는 지역 안내 사이트입니다.",
  sections: [
    {
      h2: "무엇을 안내하나요",
      body: "대전·세종·천안·청주·아산을 중심으로 충남·충북 전 시·군의 행정구역, 생활권, 가까운 역·터미널·산업단지, 자택·호텔·오피스텔 등 이용 장소별 확인 사항, 예약 전 점검 항목을 안내합니다. 지역마다 이동 여건과 이용 환경이 달라, 방문 위치를 먼저 좁힐 수 있도록 돕는 것을 목적으로 합니다.",
    },
    {
      h2: "운영 원칙",
      list: [
        "불법·선정적 서비스는 제공하거나 안내하지 않습니다.",
        "허위 후기·가짜 평점·과장된 표현을 사용하지 않습니다.",
        "검색 순위 보장 같은 표현을 사용하지 않습니다.",
        "예약·연락에 필요한 최소한의 개인정보만 확인합니다.",
        "실제 오프라인 매장이 없는 방문형 안내이므로 매장 정보성 표기를 하지 않습니다.",
      ],
    },
    {
      h2: "정보 작성·검수 기준 (Who · How · Why)",
      body: "지역 정보는 시·도·시군구의 공개 행정구역 자료와 실제 생활권·이동 기준을 바탕으로 정리하며, 각 지역의 산업·역·상권·신도시 특성을 반영해 페이지마다 다르게 작성합니다. 지역명만 바꾼 복붙 문서는 만들지 않고, 변동 사항이 있으면 지속적으로 갱신합니다. 어느 지역이 준비 중이거나 정보가 얇은 경우에는 색인 대상에서 제외해 정확성을 우선합니다.",
    },
    {
      h2: "연락처",
      body: "예약은 전화로, 웹사이트 제작문의와 제휴문의는 텔레그램으로 받습니다. 자세한 연락 방법은 문의하기 페이지에서 확인할 수 있습니다.",
    },
  ],
  relatedLinks: [
    { label: "문의하기", url: "/contact/" },
    { label: "개인정보 처리 기준", url: "/chungcheong/check/privacy/" },
    { label: "불법·선정적 서비스 불가 안내", url: "/chungcheong/check/service-policy/" },
    { label: "고객 유의사항", url: "/chungcheong/check/customer-notice/" },
    { label: "거점 안내", url: "/chungcheong/hubs/" },
  ],
};
