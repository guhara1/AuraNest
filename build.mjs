// ============================================================================
// 정적 사이트 생성기 — dist/ 로 출력
// ============================================================================
import { mkdir, writeFile, copyFile, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { site, nav } from "./config.mjs";
import { renderDocument, esc, renderPricing } from "./lib/templates.mjs";
import { regionBody, sidebar, BASE_FAQ } from "./lib/content.mjs";
import { regionMains } from "./data/regions.mjs";
import { daejeonDistricts, cheonanDistricts, areaPages } from "./data/subregions.mjs";
import { lifeZones } from "./data/expansion.mjs";
import { cities } from "./data/cities.mjs";
import { cities2 } from "./data/cities2.mjs";
import { cheongjuDistricts, sejongZones } from "./data/cheongju.mjs";
import { hubPage, aboutPage } from "./data/info.mjs";
import { usePages, checkPages, contactPage, home } from "./data/pages.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "dist");
const written = [];

// 모든 지역형 페이지 (렌더 · 이미지 · 사이트맵 공통 소스)
const REGION_ALL = [
  ...regionMains, ...areaPages, ...daejeonDistricts, ...cheonanDistricts,
  ...lifeZones, ...cities, ...cities2, ...cheongjuDistricts, ...sejongZones,
];

async function emit(url, html) {
  const rel = url.endsWith("/") ? url + "index.html" : url;
  const path = join(OUT, rel.replace(/^\//, ""));
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, html, "utf8");
  written.push(url);
}

// FAQ 서브셋 해석
function resolveFaqs(r) {
  if (r.faqSubsetAll) return BASE_FAQ;
  if (Array.isArray(r.faqSubset)) return r.faqSubset.map((i) => BASE_FAQ[i]).filter(Boolean);
  return r.faqs || BASE_FAQ;
}

// 지역 대표 이미지 (SVG placeholder) 경로
function regionImage(slug) {
  return `/assets/region-${slug}.svg`;
}

// ── 히어로 ───────────────────────────────────────────────────────────────────
function hero(r, ctaLinks) {
  const ctas = (ctaLinks || [])
    .map((c, i) => `<a class="btn ${i === 0 ? "btn-accent" : "btn-ghost"}" href="${c.url}">${esc(c.label)}</a>`)
    .join("");
  const phoneCta = `<a class="btn btn-accent" href="${site.phoneHref}">전화예약 ${esc(site.phone)}</a>`;
  return `<section class="hero"><div class="container">
    ${r.eyebrow ? `<span class="eyebrow">${esc(r.eyebrow)}</span>` : ""}
    <h1>${esc(r.h1)}</h1>
    <p class="lede">${esc(r.heroLede || r.lede || r.description)}</p>
    <div class="cta-row">${ctas || phoneCta}${ctaLinks ? phoneCta : ""}</div>
  </div></section>`;
}

// ── 지역 상세 페이지 (main/area/district) ───────────────────────────────────
async function renderRegion(r, slugKey) {
  const page = {
    url: r.url,
    canonical: r.url,
    navCurrent: r.navCurrent || r.url,
    title: r.title,
    description: r.description,
    breadcrumbs: r.breadcrumbs,
    h1: r.h1,
    image: regionImage(slugKey),
    imageAlt: `${r.area} 생활권 안내 이미지`,
    faqs: resolveFaqs(r),
    service: { name: `${r.area} 지역 안내`, type: "지역·생활권 안내", area: r.area },
  };
  const bodyData = { ...r, image: page.image, imageAlt: page.imageAlt, faqs: page.faqs };
  const { article } = regionBody(bodyData);

  // 본문 2,000자 미만이면 임시 noindex (스펙 23항)
  const textLen = [...article.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/\s+/g, " ").trim()].length;
  page.noindex = r.noindex ?? textLen < 2000;
  if (page.noindex) console.warn(`  ⚠ noindex (${textLen}자): ${r.url}`);

  const aside = sidebar(r.sidebar || [], r.related || []);
  const body = `${hero(r)}
  ${document_breadcrumb(r.breadcrumbs)}
  <section class="section"><div class="container"><div class="layout">${article}${aside}</div></div></section>
  ${renderPricing()}`;
  await emit(r.url, renderDocument(page, body));
}

function document_breadcrumb(crumbs) {
  const items = crumbs
    .map((c, i) =>
      i === crumbs.length - 1
        ? `<span aria-current="page">${esc(c.label)}</span>`
        : `<a href="${c.url}">${esc(c.label)}</a><span aria-hidden="true">›</span>`
    )
    .join("");
  return `<div class="container"><nav class="breadcrumb" aria-label="위치">${items}</nav></div>`;
}

// ── 이용/확인 콘텐츠 페이지 ─────────────────────────────────────────────────
async function renderContentPage(p, crumbLabel) {
  const page = {
    url: p.url, canonical: p.url, navCurrent: p.navCurrent,
    title: p.title, description: p.description, breadcrumbs: p.breadcrumbs, h1: p.h1,
    image: site.defaultImage,
  };
  const sections = (p.sections || [])
    .map((s) => {
      const body = s.body ? `<p>${esc(s.body)}</p>` : "";
      const list = s.list ? `<ul>${s.list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : "";
      // 링크 목록 (거점 안내 등 내부링크 강화용)
      const linkList = s.linkList
        ? `<ul>${s.linkList
            .map((l) => `<li><a href="${l.url}">${esc(l.label)}</a>${l.note ? ` — ${esc(l.note)}` : ""}</li>`)
            .join("")}</ul>`
        : "";
      return `<h2>${esc(s.h2)}</h2>${body}${list}${linkList}`;
    })
    .join("");
  const eyebrow = p.eyebrow || (crumbLabel === "use" ? "이용 장소" : "예약 전 확인");
  const relatedLinks = p.relatedLinks
    ? p.relatedLinks
    : crumbLabel === "use"
    ? usePages.filter((x) => x.url !== p.url).slice(0, 6).map((x) => ({ label: x.h1, url: x.url }))
    : checkPages.filter((x) => x.url !== p.url).slice(0, 6).map((x) => ({ label: x.h1, url: x.url }));
  const aside = sidebar(relatedLinks);
  const article = `<article class="prose"><p>${esc(p.lead)}</p>${sections}
    <p class="muted">문의는 <a href="/contact/">문의하기</a>, 운영 기준은 <a href="/about/">운영 기준·소개</a>와 <a href="/chungcheong/check/service-policy/">불법·선정적 서비스 불가 안내</a>에서 확인할 수 있습니다.</p>
  </article>`;
  const body = `<section class="hero"><div class="container"><span class="eyebrow">${esc(eyebrow)}</span><h1>${esc(p.h1)}</h1><p class="lede">${esc(p.lead)}</p><div class="cta-row"><a class="btn btn-accent" href="${site.phoneHref}">전화예약 ${esc(site.phone)}</a></div></div></section>
  ${document_breadcrumb(p.breadcrumbs)}
  <section class="section"><div class="container"><div class="layout">${article}${aside}</div></div></section>
  ${renderPricing()}`;
  await emit(p.url, renderDocument(page, body));
}

// ── 문의하기 ─────────────────────────────────────────────────────────────────
async function renderContact() {
  const p = contactPage;
  const page = { url: p.url, canonical: p.url, navCurrent: p.navCurrent, title: p.title, description: p.description, breadcrumbs: p.breadcrumbs, h1: p.h1, image: site.defaultImage };
  const body = `<section class="hero"><div class="container"><span class="eyebrow">문의하기</span><h1>${esc(p.h1)}</h1><p class="lede">전화예약과 웹사이트 제작문의·제휴문의를 아래에서 연결할 수 있습니다.</p></div></section>
  ${document_breadcrumb(p.breadcrumbs)}
  <section class="section"><div class="container">
    <div class="grid cols-3">
      <div class="card"><h3>전화예약</h3><p style="margin:.4rem 0 1rem">상호 ${esc(site.legalName)}</p><a class="btn btn-accent" href="${site.phoneHref}">${esc(site.phone)}</a></div>
      <div class="card"><h3>웹사이트 제작문의</h3><p style="margin:.4rem 0 1rem">텔레그램으로 문의</p><a class="btn btn-accent" href="${site.telegram.build}" target="_blank" rel="noopener nofollow">텔레그램 열기</a></div>
      <div class="card"><h3>제휴문의</h3><p style="margin:.4rem 0 1rem">텔레그램으로 문의</p><a class="btn btn-accent" href="${site.telegram.partner}" target="_blank" rel="noopener nofollow">텔레그램 열기</a></div>
    </div>
    <p class="muted" style="margin-top:1.5rem">불법·선정적 서비스는 제공하거나 안내하지 않으며, 개인정보는 <a href="/chungcheong/check/privacy/">개인정보 처리 기준</a>에 따라 처리합니다.</p>
  </div></section>
  ${renderPricing()}`;
  await emit(p.url, renderDocument(page, body));
}

// ── 홈페이지 (Section 25) ────────────────────────────────────────────────────
function cardGrid(items, cols = 4) {
  return `<div class="grid cols-${cols}">${items
    .map((i) => `<div class="card"><a class="card-link" href="${i.url}" aria-label="${esc(i.label)}"></a><h3>${esc(i.label)}</h3></div>`)
    .join("")}</div>`;
}

async function renderHome() {
  const page = {
    url: home.url, canonical: home.canonical, navCurrent: home.navCurrent,
    title: home.title, description: home.description, breadcrumbs: home.breadcrumbs, h1: home.h1,
    image: site.defaultImage, faqs: BASE_FAQ,
  };
  const checklistHtml = `<ul class="checklist">${[
    "방문 주소를 정확히 확인했나요?",
    "대전·세종·천안·충남·충북 중 어느 권역인지 확인했나요?",
    "가까운 생활권과 역·터미널을 확인했나요?",
    "호텔·숙소 이용 가능 여부를 확인했나요?",
    "공동현관 또는 건물 출입 방식이 있나요?",
    "오피스텔 관리 규정이 있나요?",
    "산업단지나 외곽 지역 이동 기준을 확인했나요?",
    "예약 가능 시간과 변경 기준을 확인했나요?",
    "개인정보 처리 기준을 확인했나요?",
    "불법·선정적 서비스 불가 안내를 확인했나요?",
  ].map((c) => `<li>${esc(c)}</li>`).join("")}</ul>`;
  const faqHtml = `<div class="faq">${BASE_FAQ.map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("")}</div>`;

  const heroCtas = home.cta
    .map((c, i) => `<a class="btn ${i === 0 ? "btn-accent" : "btn-ghost"}" href="${c.url}">${esc(c.label)}</a>`)
    .join("");

  const body = `<section class="hero"><div class="container">
    <span class="eyebrow">${esc(home.eyebrow)}</span>
    <h1>${esc(home.h1)}</h1>
    <p class="lede">${esc(home.lede)}</p>
    <div class="cta-row">${heroCtas}<a class="btn btn-accent" href="${site.phoneHref}">전화예약 ${esc(site.phone)}</a></div>
  </div></section>
  ${document_breadcrumb(home.breadcrumbs)}
  <section class="section"><div class="container">
    <h2>충청권은 도시별 생활권과 이동 기준 확인이 먼저입니다</h2>
    <p class="prose">${esc(home.intro)}</p>
  </div></section>
  <section class="section"><div class="container">
    <h2>대전·세종·천안 핵심 생활권</h2>
    ${cardGrid(home.coreZones, 4)}
  </div></section>
  <section class="section"><div class="container">
    <h2>충남 주요 지역 안내</h2>
    ${cardGrid(home.chungnam, 4)}
  </div></section>
  <section class="section"><div class="container">
    <h2>충북 주요 지역 안내</h2>
    ${cardGrid(home.chungbuk, 4)}
  </div></section>
  <section class="section"><div class="container">
    <h2>이용 장소에 따라 확인할 내용이 다릅니다</h2>
    ${cardGrid(home.useCards, 4)}
  </div></section>
  ${renderPricing()}
  <section class="section"><div class="container"><div class="layout">
    <article class="prose"><h2>예약 전 확인해야 할 내용</h2>${checklistHtml}
      <h2>자주 묻는 질문</h2>${faqHtml}
    </article>
    ${sidebar([
      { label: "대전 지역 안내", url: "/daejeon/" },
      { label: "세종 지역 안내", url: "/sejong/" },
      { label: "천안·아산 지역 안내", url: "/cheonan/" },
      { label: "충남 지역 안내", url: "/chungnam/" },
      { label: "충북 지역 안내", url: "/chungbuk/" },
      { label: "예약 전 확인", url: "/chungcheong/check/address/" },
    ])}
  </div></div></section>`;

  await emit(home.url, renderDocument(page, body));

  // 루트(/) — 홈으로 즉시 이동 + 캐노니컬은 /chungcheong/
  const rootHtml = renderDocument(
    { ...page, url: "/", canonical: "/chungcheong/" },
    body
  );
  await emit("/", rootHtml);
}

// ── 이미지(SVG placeholder) ─────────────────────────────────────────────────
function regionSvg(label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600" role="img" aria-label="${esc(label)}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#0b1220"/><stop offset="0.6" stop-color="#1a2036"/><stop offset="1" stop-color="#b0480c"/>
  </linearGradient></defs>
  <rect width="1200" height="600" fill="url(#g)"/>
  <circle cx="1000" cy="120" r="220" fill="#ef6c19" opacity="0.22"/>
  <text x="80" y="330" fill="#ffffff" font-family="Pretendard, sans-serif" font-size="58" font-weight="800">${esc(label)}</text>
  <text x="80" y="392" fill="#c9a24b" font-family="Pretendard, sans-serif" font-size="26" font-weight="600">간다GO · 세종·충청권 지역 안내</text>
</svg>`;
}

async function writeAssets() {
  await mkdir(join(OUT, "assets"), { recursive: true });
  await copyFile(join(__dirname, "assets/styles.css"), join(OUT, "assets/styles.css"));
  // 기본 og 이미지
  await writeFile(join(OUT, "assets/og-default.svg"), regionSvg("세종·충청권 지역 안내"), "utf8");
  // 지역별 대표 이미지
  const all = REGION_ALL;
  for (const r of all) {
    const slug = imgSlug(r);
    await writeFile(join(OUT, `assets/region-${slug}.svg`), regionSvg(r.area), "utf8");
  }
}

function imgSlug(r) {
  // 광역권/구/메인 구분 위해 area+slug 조합의 안전한 키
  return (r.navCurrent || r.url).replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || r.slug;
}

// ── 사이트맵 / robots ────────────────────────────────────────────────────────
async function writeSitemap() {
  const urls = written.filter((u) => u !== "/");
  const body = urls
    .map((u) => `  <url><loc>${site.baseUrl.replace(/\/$/, "") + u}</loc></url>`)
    .join("\n");
  await writeFile(join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`, "utf8");
  await writeFile(join(OUT, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${site.baseUrl.replace(/\/$/, "")}/sitemap.xml\n`, "utf8");
}

// ── 실행 ─────────────────────────────────────────────────────────────────────
async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  await renderHome();
  for (const r of REGION_ALL) await renderRegion(r, imgSlug(r));
  for (const p of usePages) await renderContentPage(p, "use");
  for (const p of checkPages) await renderContentPage(p, "check");
  await renderContentPage(hubPage, "info");
  await renderContentPage(aboutPage, "info");
  await renderContact();

  await writeAssets();
  await writeSitemap();

  console.log(`생성 완료: ${written.length} 페이지`);
  written.sort().forEach((u) => console.log("  " + u));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
