# 간다GO — 세종·충청권 지역 안내 사이트

정적 사이트 생성기(순수 Node.js, 의존성 0). `node build.mjs` 실행 시 `dist/`에 전체 HTML(현재 81페이지)을 생성합니다. **프리미엄 다크 테마**(블랙 배경·밝은 텍스트·고대비 가독성).

> **도어웨이 방지**: 저수요·소규모 군 지역(금산·청양·괴산·보은)은 실제 콘텐츠를 넣되 의도적으로 `noindex` 처리(스펙 3차 tier). 그 외 본문 2,000자 미만은 자동 noindex. 지역명만 바꾼 복붙 없이 각 페이지에 산업·역·상권·신도시 등 고유 로컬 컨텍스트를 반영.

## 빌드

```bash
node build.mjs        # dist/ 생성
npm run build         # 동일
```

`dist/`를 그대로 정적 호스팅(Netlify, Vercel, S3, Nginx 등)에 배포하면 됩니다.

## 구조

```
config.mjs            사이트 전역 설정 (상호·전화·텔레그램·요금)
assets/styles.css     프리미엄 팔레트 디자인 토큰 + 컴포넌트 오버레이 (Pretendard)
lib/templates.mjs     문서 셸 · JSON-LD 스키마 · 헤더/푸터 · 가격표
lib/content.mjs       지역 본문 조립기 (개요·행정구역·생활권·역·이용·확인·FAQ·WHW)
data/regions.mjs      광역권 메인 (대전/세종/천안/충남/충북)
data/subregions.mjs   대전 5개 구 · 천안 2개 구 · 핵심 광역권
data/expansion.mjs    핵심 생활권 (대전 둔산·유성 / 천안 불당·두정·신부 / 세종 나성·조치원)
data/cities.mjs       충남·충북 1차 시 (아산·공주·논산·서산·당진 / 청주·충주·제천·진천)
data/cities2.mjs      충남·충북 2·3차 시·군 (계룡·홍성·예산·보령·부여·태안·서천·금산·청양 / 음성·증평·괴산·옥천·영동·보은·단양)
data/cheongju.mjs     청주 4개 구 (상당·서원·흥덕·청원) + 세종 생활권 (어진·종촌·보람·소담·고운·아름·금남·부강)
data/pages.mjs        이용 장소(9) · 예약 전 확인(10) · 문의 · 홈
build.mjs             생성기 (dist/ 출력 · sitemap · robots · 이미지)
```

## 꼭 교체해야 할 값 (`config.mjs`)

| 항목 | 위치 | 설명 |
|------|------|------|
| **텔레그램 링크** | `site.telegram.build` / `site.telegram.partner` | 현재 `https://t.me/ganda_go` **자리표시자**. 실제 핸들로 교체하세요. 푸터의 "웹사이트 제작문의"·"제휴문의" 버튼과 문의 페이지에 반영됩니다. |
| 배포 도메인 | `site.baseUrl` | canonical·og·sitemap에 사용 |

상호(`간다GO`)와 전화예약(`0508-202-4719`)은 설정 완료 상태입니다.

## SEO 적용 사항

- **메타 디스크립션 전부 80자 이내**
- **스키마(JSON-LD)**: WebSite, Organization, WebPage, BreadcrumbList, FAQPage(본문에 실제 노출된 Q/A만), ImageObject, Service
  - `LocalBusiness`·`Review`·`AggregateRating`은 **사용하지 않음** (실제 오프라인 매장 없음 — 스펙 21항)
- **본문 2,000자 미만 페이지는 자동 `noindex`** (스펙 23항) — `build.mjs`가 본문 길이를 측정해 처리
- **내부링크**: 사이드바 + 본문 문맥 링크(롱테일 앵커) + 지자체 공식 사이트(권위 링크, `rel="nofollow"`)
- 메뉴명·앵커에 "출장마사지" 반복 및 순위 보장 표현 미사용
- og:image / schema image 지정, sitemap.xml · robots.txt 생성

## 요금표

`config.mjs`의 `pricing`에서 관리하며 **모든 지역·이용·확인 페이지 하단에 공통 노출**됩니다. "예약 문의" 버튼은 전화예약으로 연결됩니다.

## 확장 (1차-B / 1차-C)

- `data/regions.mjs`·`data/subregions.mjs`에 지역 객체를 추가하면 자동으로 페이지가 생성됩니다.
- 신규 지역은 본문이 2,000자를 넘어야 색인됩니다(미만 시 자동 noindex). `overview`/`localNote`/`lifeZones`/`stations`로 차별화된 내용을 채우세요.
