// ============================================================================
// 본문 구성 라이브러리 — 지역 데이터로 차별화된 본문을 조립
// (Section 18 본문 구성 규칙: 개요·행정구역·생활권·역/터미널·이용장소·확인·운영·FAQ·WHW)
// ============================================================================
import { esc } from "./templates.mjs";
import { renderPricing } from "./templates.mjs";
import { adminDivisions } from "../data/admin-divisions.mjs";

// 공통 예약 전 체크리스트
export const CHECKLIST = [
  "방문 주소를 정확히 확인했나요?",
  "대전·세종·천안·충남·충북 중 어느 권역인지 확인했나요?",
  "가까운 생활권과 역·터미널을 확인했나요?",
  "호텔·숙소 이용 가능 여부를 확인했나요?",
  "공동현관 또는 건물 출입 방식이 있나요?",
  "오피스텔 관리 규정을 확인했나요?",
  "산업단지나 외곽 지역 이동 기준을 확인했나요?",
  "예약 가능 시간과 변경 기준을 확인했나요?",
  "개인정보 처리 기준을 확인했나요?",
  "불법·선정적 서비스 불가 안내를 확인했나요?",
];

// 지역 페이지 공통 FAQ 풀 (본문에 실제 노출되는 Q/A만 스키마로 사용)
export const BASE_FAQ = [
  { q: "충청도 전 지역 방문이 가능한가요?", a: "실제 방문 주소, 가까운 생활권, 예약 가능 시간, 이동 기준을 확인한 뒤 안내합니다." },
  { q: "대전·세종·천안은 각각 기준이 다른가요?", a: "대전은 구·생활권, 세종은 신도시와 읍면, 천안은 서북구·동남구와 불당·두정·터미널 생활권을 함께 확인하는 것이 좋습니다." },
  { q: "충남과 충북 외곽 지역도 이용할 수 있나요?", a: "시·군 간 이동 거리가 넓기 때문에 외곽 지역은 예약 시간과 추가 이동 기준을 먼저 확인해야 합니다." },
  { q: "호텔이나 출장 숙소에서도 이용할 수 있나요?", a: "숙소 정책, 객실 출입 가능 여부, 프런트 확인 방식 등을 먼저 확인해야 합니다." },
  { q: "오피스텔은 어떤 점을 확인해야 하나요?", a: "공동현관, 엘리베이터, 관리 규정, 방문 가능 시간대를 확인해야 합니다." },
  { q: "산업단지 인근 숙소도 가능한가요?", a: "정확한 주소, 주차 가능 여부, 야간 출입 가능 여부, 이동 기준을 함께 확인해야 합니다." },
  { q: "불법·선정적 서비스도 가능한가요?", a: "불법·선정적 서비스는 제공하거나 안내하지 않습니다." },
  { q: "개인정보는 어떻게 처리하나요?", a: "예약 확인과 연락에 필요한 최소 정보만 확인하며, 개인정보 처리 기준 페이지로 연결합니다." },
];

const list = (arr) => `<ul>${arr.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

function faqBlock(faqs) {
  return `<h2>자주 묻는 질문</h2><div class="faq">${faqs
    .map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`)
    .join("")}</div>`;
}

function whwBlock(whw) {
  return `<h2>Who · How · Why</h2><div class="whw">
    <div class="block"><strong>Who — 누가</strong>${esc(whw.who)}</div>
    <div class="block"><strong>How — 어떻게</strong>${esc(whw.how)}</div>
    <div class="block"><strong>Why — 왜</strong>${esc(whw.why)}</div>
  </div>`;
}

function checklistBlock() {
  return `<h2>예약 전 확인해야 할 내용</h2><ul class="checklist">${CHECKLIST.map(
    (c) => `<li>${esc(c)}</li>`
  ).join("")}</ul>`;
}

// 사이드바 (내부링크 강화)
export function sidebar(links, related = []) {
  const linkPanel = `<div class="panel"><h3>바로가기</h3>${links
    .map((l) => `<a href="${l.url}">${esc(l.label)}</a>`)
    .join("")}</div>`;
  const relPanel = related.length
    ? `<div class="panel"><h3>인접 생활권 안내</h3>${related
        .map((l) => `<a href="${l.url}">${esc(l.label)}</a>`)
        .join("")}</div>`
    : "";
  const helpPanel = `<div class="panel"><h3>예약·문의</h3>
    <a href="/contact/">문의하기</a>
    <a href="/chungcheong/check/service-policy/">불법·선정적 서비스 불가 안내</a>
    <a href="/chungcheong/check/privacy/">개인정보 처리 기준</a></div>`;
  return `<aside class="sidebar">${linkPanel}${relPanel}${helpPanel}</aside>`;
}

// ── 지역 상세 본문 조립 ─────────────────────────────────────────────────────
export function regionBody(r) {
  const zones = r.lifeZones || [];
  const zonesHtml = zones.length
    ? `<h2>생활권 안내</h2><p>${esc(r.zonesIntro || `${r.area} 안에서도 생활권에 따라 이동 경로와 이용 환경이 다릅니다. 아래 생활권을 기준으로 위치를 먼저 확인하세요.`)}</p>${list(
        zones.map((z) => (z.note ? `${z.name} — ${z.note}` : z.name))
      )}`
    : "";

  const stationsHtml = (r.stations && r.stations.length)
    ? `<h2>가까운 역·터미널·인접 지역</h2><p>${esc(
        r.stationsIntro ||
          "가까운 역과 터미널, 인접 생활권을 기준으로 이동 경로를 확인하면 예약이 수월합니다."
      )}</p>${list(r.stations)}`
    : "";

  const useHtml = `<h2>이용 장소에 따라 확인할 내용</h2><p>${esc(
    r.useIntro ||
      "이용 장소가 자택인지, 호텔·숙소인지, 오피스텔인지, 업무지구·산업단지 인접인지에 따라 확인해야 할 내용이 달라집니다."
  )}</p>${list(
    r.useNotes || [
      "자택: 정확한 동·호수, 공동현관 출입 방식, 주차 가능 여부를 확인합니다.",
      "호텔·숙소: 객실 출입 가능 여부, 프런트 확인 방식, 숙소 정책을 먼저 확인합니다.",
      "오피스텔: 공동현관, 엘리베이터, 관리 규정, 방문 가능 시간대를 확인합니다.",
      "업무지구·산업단지 인접: 정확한 주소, 야간 출입 가능 여부, 이동 기준을 함께 확인합니다.",
    ]
  )}<p><a href="/chungcheong/use/home/">자택 이용 안내</a> · <a href="/chungcheong/use/hotel/">호텔·숙소 이용 안내</a> · <a href="/chungcheong/use/officetel/">오피스텔 이용 안내</a> · <a href="/chungcheong/use/industrial-area/">산업단지 인접 이용 안내</a></p>`;

  const policyHtml = `<h2>운영 기준 및 안내</h2><p>${esc(
    r.policyText ||
      "예약 확인과 연락에 필요한 최소한의 정보만 확인하며, 개인정보는 개인정보 처리 기준에 따라 관리합니다. 불법·선정적 서비스는 제공하거나 안내하지 않으며, 순위 보장이나 과장된 표현을 사용하지 않습니다."
  )} 자세한 내용은 <a href="/chungcheong/check/privacy/">개인정보 처리 기준</a>과 <a href="/chungcheong/check/service-policy/">불법·선정적 서비스 불가 안내</a>에서 확인할 수 있습니다.</p>`;

  const authorityHtml = r.authorityLinks && r.authorityLinks.length
    ? `<p class="muted">참고 정보: ${r.authorityLinks
        .map((a) => `<a href="${a.url}" target="_blank" rel="noopener nofollow">${esc(a.label)}</a>`)
        .join(" · ")}</p>`
    : "";

  // 내부링크 강화 (롱테일 앵커텍스트) — 본문 내 문맥 링크
  const internal = [...(r.sidebar || []), ...(r.related || [])];
  const internalHtml = internal.length
    ? `<h2>함께 확인하면 좋은 안내</h2><p>방문 위치가 정해졌다면 아래 안내를 함께 확인해 두면 예약이 한결 수월합니다. ${internal
        .map((l) => `<a href="${l.url}">${esc(l.label)} 확인하기</a>`)
        .join(", ")} 등 인접 생활권과 이용 기준을 함께 살펴보실 수 있습니다. 이용 장소가 정해졌다면 <a href="/chungcheong/use/home/">자택</a>·<a href="/chungcheong/use/hotel/">호텔·숙소</a>·<a href="/chungcheong/use/officetel/">오피스텔</a> 이용 안내에서 출입 방식과 확인 사항을 미리 점검하는 것을 권장합니다.</p>`
    : "";

  const overview = `<p>${esc(r.overview)}</p>`;
  const admin = r.adminInfo ? `<h2>상위 행정구역과 위치</h2><p>${esc(r.adminInfo)}</p>${authorityHtml}` : "";

  // 행정구역 안내 (자치구/일반구 · 행정동 · 읍·면)
  const ad = adminDivisions[r.url];
  const adminDivHtml = ad
    ? `<h2>행정구역 안내</h2>${ad.note ? `<p>${esc(ad.note)}</p>` : ""}${ad.groups
        .map(
          (g) =>
            `<h3>${esc(g.label)}</h3><p class="admin-list">${g.items
              .map((it) => (it.url ? `<a href="${it.url}">${esc(it.label)}</a>` : `<span>${esc(it.label)}</span>`))
              .join(" · ")}</p>`
        )
        .join("")}`
    : "";
  const localHtml = r.localNote
    ? `<h2>${esc(r.localNoteTitle || `${r.area} 이용 참고`)}</h2><p>${esc(r.localNote)}</p>`
    : "";

  const figure = r.image
    ? `<figure class="hero-figure" style="margin:0 0 1.5rem"><img src="${r.image}" alt="${esc(
        r.imageAlt || r.h1
      )}" width="1200" height="600" loading="lazy"></figure>`
    : "";

  const article = `<article class="prose">
    ${figure}
    ${overview}
    ${admin}
    ${adminDivHtml}
    ${zonesHtml}
    ${localHtml}
    ${stationsHtml}
    ${useHtml}
    ${checklistBlock()}
    ${internalHtml}
    ${policyHtml}
    ${faqBlock(r.faqs || BASE_FAQ)}
    ${whwBlock(r.whw)}
  </article>`;

  return { article };
}

export { renderPricing };
