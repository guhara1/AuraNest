// ============================================================================
// 렌더링 · 스키마 라이브러리
// ============================================================================
import { site, nav, pricing } from "../config.mjs";

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const abs = (path) => site.baseUrl.replace(/\/$/, "") + path;

// ── JSON-LD 스키마 ─────────────────────────────────────────────────────────
// 사용: WebPage, BreadcrumbList, Organization, FAQPage, ImageObject
// 사용 금지: LocalBusiness, Review, AggregateRating (실제 오프라인 매장 없음)

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": abs("/#organization"),
    name: site.legalName,
    url: site.baseUrl,
    telephone: site.phone,
    areaServed: site.regionServed,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "reservations",
      areaServed: "KR",
      availableLanguage: "Korean",
    },
    sameAs: [site.telegram.build].filter(Boolean),
  };
}

function breadcrumbSchema(crumbs) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: abs(c.url),
    })),
  };
}

function imageSchema(image, alt) {
  return {
    "@type": "ImageObject",
    "@id": abs(image) + "#primaryimage",
    url: abs(image),
    contentUrl: abs(image),
    caption: alt,
  };
}

function webPageSchema(page) {
  const s = {
    "@type": "WebPage",
    "@id": abs(page.url) + "#webpage",
    url: abs(page.url),
    name: page.title,
    description: page.description,
    inLanguage: "ko-KR",
    isPartOf: { "@id": abs("/#website") },
    publisher: { "@id": abs("/#organization") },
    breadcrumb: { "@id": abs(page.url) + "#breadcrumb" },
  };
  if (page.image) s.primaryImageOfPage = { "@id": abs(page.image) + "#primaryimage" };
  return s;
}

function faqSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function buildJsonLd(page) {
  const graph = [
    {
      "@type": "WebSite",
      "@id": abs("/#website"),
      url: site.baseUrl,
      name: site.brand,
      inLanguage: "ko-KR",
      publisher: { "@id": abs("/#organization") },
    },
    organizationSchema(),
    webPageSchema(page),
    { "@id": abs(page.url) + "#breadcrumb", ...breadcrumbSchema(page.breadcrumbs) },
  ];
  if (page.image) graph.push(imageSchema(page.image, page.imageAlt || page.h1));
  // FAQPage: 본문에 실제로 보이는 Q/A만 스키마에 포함
  if (page.faqs && page.faqs.length) graph.push(faqSchema(page.faqs));
  if (page.service) {
    graph.push({
      "@type": "Service",
      name: page.service.name,
      serviceType: page.service.type,
      areaServed: page.service.area,
      provider: { "@id": abs("/#organization") },
    });
  }
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

// ── 부분 템플릿 ──────────────────────────────────────────────────────────────
const brandMark = `<a class="brand-mark" href="/"><span class="brand-dot" aria-hidden="true"></span>${esc(site.brand)}</a>`;

function header(current) {
  const links = nav
    .map(
      (n) =>
        `<a href="${n.url}"${n.url === current ? ' aria-current="page"' : ""}>${esc(n.label)}</a>`
    )
    .join("");
  return `<header class="site-header"><div class="container">${brandMark}<nav class="nav" aria-label="주요 메뉴">${links}</nav></div></header>`;
}

function breadcrumbNav(crumbs) {
  const items = crumbs
    .map((c, i) =>
      i === crumbs.length - 1
        ? `<span aria-current="page">${esc(c.label)}</span>`
        : `<a href="${c.url}">${esc(c.label)}</a><span aria-hidden="true">›</span>`
    )
    .join("");
  return `<div class="container"><nav class="breadcrumb" aria-label="위치">${items}</nav></div>`;
}

const TG_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.78 15.6l-.4 4.02c.57 0 .82-.24 1.12-.53l2.7-2.56 5.6 4.08c1.03.57 1.76.27 2.03-.95L23.9 3.9c.35-1.56-.56-2.17-1.57-1.8L1.06 10.2c-1.52.6-1.5 1.45-.26 1.84l5.4 1.68 12.53-7.9c.59-.4 1.13-.18.69.22z"/></svg>`;

function footer() {
  return `<footer class="site-footer"><div class="container">
  <div class="footer-top">
    <div class="footer-brand">
      ${brandMark}
      <p>세종·충청권 지역·생활권과 자택·호텔·오피스텔 이용 전 확인사항을 안내하는 지역 안내 사이트입니다.</p>
      <div class="footer-cta">
        <a class="btn-tg" href="${site.telegram.build}" target="_blank" rel="noopener nofollow" aria-label="웹사이트 제작문의 텔레그램">${TG_ICON}웹사이트 제작문의</a>
        <a class="btn-tg" href="${site.telegram.partner}" target="_blank" rel="noopener nofollow" aria-label="제휴문의 텔레그램">${TG_ICON}제휴문의</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>지역 안내</h4>
      <a href="/">충청 홈</a>
      <a href="/daejeon/">대전</a>
      <a href="/sejong/">세종</a>
      <a href="/cheonan/">천안·아산</a>
      <a href="/chungnam/">충남</a>
      <a href="/chungbuk/">충북</a>
    </div>
    <div class="footer-col">
      <h4>사업자 정보</h4>
      <dl class="footer-biz">
        <dt>상호</dt><dd>${esc(site.legalName)}</dd>
        <dt>전화예약</dt><dd><a class="phone" href="${site.phoneHref}">${esc(site.phone)}</a></dd>
      </dl>
    </div>
  </div>
  <div class="footer-bottom">
    <nav aria-label="정책">
      <a href="/about/">운영 기준·소개</a>
      <a href="/chungcheong/hubs/">거점 안내</a>
      <a href="/chungcheong/check/privacy/">개인정보 처리방침</a>
      <a href="/chungcheong/check/service-policy/">불법·선정적 서비스 불가 안내</a>
      <a href="/contact/">문의하기</a>
    </nav>
    <div>© ${esc(site.brand)}. All rights reserved.</div>
  </div>
  <p class="footer-note">본 사이트는 지역·생활권·이용 장소 안내 및 예약 전 확인 정보를 제공합니다. 불법·선정적 서비스는 제공·안내하지 않습니다.</p>
  </div></footer>`;
}

// ── 가격표 (모든 지역 페이지 공통) ──────────────────────────────────────────
export function renderPricing(detailUrl = "/chungcheong/check/travel-fee/") {
  const cards = pricing.courses
    .map(
      (c) => `<div class="price-card${c.featured ? " featured" : ""}">
      ${c.featured ? '<span class="badge">추천</span>' : ""}
      <div class="course">${esc(c.name)}</div>
      <div class="amount">${esc(c.price)}<span class="won">원</span></div>
      <div class="dur">${esc(c.duration)}</div>
      <div class="desc">${esc(c.desc)}</div>
      <a class="btn-book" href="${site.phoneHref}">예약 문의</a>
    </div>`
    )
    .join("");
  return `<section class="section" aria-labelledby="pricing-h"><div class="container"><div class="pricing">
    <div class="pricing-head">
      <h2 id="pricing-h">${esc(pricing.heading)}</h2>
      <p>${esc(pricing.sub)}</p>
    </div>
    <div class="price-grid">${cards}</div>
    <p class="pricing-foot">${esc(pricing.note)} <a href="${detailUrl}">상세 요금 안내 보기 →</a></p>
  </div></div></section>`;
}

// ── 플로팅 전화 버튼 (모든 페이지 · 우측 하단 · 애니메이션) ──────────────────
function floatingCall() {
  const PHONE_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.9c0-.6.5-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1.1l-2.2 2.2z"/></svg>`;
  return `<a class="fab-call" href="${site.phoneHref}" aria-label="전화 예약 ${esc(site.phone)}">
    <span class="fab-ring" aria-hidden="true"></span>
    <span class="fab-icon">${PHONE_ICON}</span>
    <span class="fab-text">전화 예약</span>
  </a>`;
}

// ── 문서 셸 ──────────────────────────────────────────────────────────────────
export function renderDocument(page, bodyHtml) {
  const image = page.image ? abs(page.image) : abs(site.defaultImage);
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
<link rel="canonical" href="${abs(page.canonical || page.url)}">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#0a0e16">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.brand)}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${abs(page.url)}">
<meta property="og:image" content="${image}">
<meta property="og:locale" content="ko_KR">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${image}">
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="stylesheet" href="/assets/styles.css">
<script type="application/ld+json">${buildJsonLd(page)}</script>
</head>
<body>
${header(page.navCurrent || page.url)}
${bodyHtml}
${footer()}
${floatingCall()}
</body>
</html>`;
}

export { esc };
