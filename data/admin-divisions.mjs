// ============================================================================
// 행정구역(자치구/일반구 · 행정동 · 읍·면) 안내 데이터
// - 읍면동 개별 페이지는 만들지 않음(도어웨이 방지) → 페이지 내 목록으로 노출
// - 1동·2동·3동처럼 번호로 나뉜 행정동은 대표 이름 하나로 합쳐 표기
//   (예: 둔산1·2·3동 → 둔산동, 온양1~6동 → 온양동)
// - 구 단위는 기존 상세 페이지로 링크
// ============================================================================

const S = (arr) => arr.map((label) => ({ label }));

export const adminDivisions = {
  // ── 대전 (광역시) 메인 · 자치구 ────────────────────────────────────────────
  "/daejeon/": {
    note: "대전은 5개 자치구로 나뉩니다. 각 구를 눌러 행정동과 생활권을 확인하세요.",
    groups: [
      { label: "자치구", items: [
        { label: "유성구", url: "/daejeon/yuseong-gu/" },
        { label: "서구", url: "/daejeon/seo-gu/" },
        { label: "중구", url: "/daejeon/jung-gu/" },
        { label: "동구", url: "/daejeon/dong-gu/" },
        { label: "대덕구", url: "/daejeon/daedeok-gu/" },
      ] },
    ],
  },
  "/daejeon/yuseong-gu/": { groups: [{ label: "행정동", items: S(["진잠동","학하동","원신흥동","상대동","온천동","노은동","신성동","전민동","구즉동","관평동"]) }] },
  "/daejeon/seo-gu/": { groups: [{ label: "행정동", items: S(["복수동","도마동","정림동","변동","용문동","탄방동","둔산동","괴정동","가장동","내동","갈마동","월평동","만년동","가수원동","관저동","기성동"]) }] },
  "/daejeon/jung-gu/": { groups: [{ label: "행정동", items: S(["은행선화동","목동","중촌동","대흥동","문창동","석교동","대사동","부사동","용두동","오류동","태평동","유천동","문화동","산성동"]) }] },
  "/daejeon/dong-gu/": { groups: [{ label: "행정동", items: S(["중앙동","신인동","효동","판암동","용운동","대동","자양동","가양동","용전동","성남동","홍도동","삼성동","대청동","산내동"]) }] },
  "/daejeon/daedeok-gu/": { groups: [{ label: "행정동", items: S(["오정동","대화동","회덕동","비래동","송촌동","중리동","법동","신탄진동","석봉동","덕암동","목상동"]) }] },

  // ── 세종 (특별자치시) — 동 + 읍·면 ─────────────────────────────────────────
  "/sejong/": {
    note: "세종은 자치구가 없는 특별자치시로, 신도시 행정동과 읍·면으로 구성됩니다.",
    groups: [
      { label: "행정동(신도시)", items: S(["한솔동","도담동","아름동","종촌동","고운동","보람동","새롬동","대평동","소담동","다정동","나성동","어진동","해밀동","반곡동"]) },
      { label: "읍·면", items: S(["조치원읍","연기면","연동면","부강면","금남면","장군면","연서면","전의면","전동면","소정면"]) },
    ],
  },

  // ── 천안 (일반구 2) ────────────────────────────────────────────────────────
  "/cheonan/": {
    note: "천안은 서북구·동남구 2개 일반구로 나뉩니다. 각 구에서 행정동·읍·면을 확인하세요.",
    groups: [
      { label: "일반구", items: [
        { label: "서북구", url: "/cheonan/seobuk-gu/" },
        { label: "동남구", url: "/cheonan/dongnam-gu/" },
      ] },
    ],
  },
  "/cheonan/seobuk-gu/": { groups: [
    { label: "행정동", items: S(["성정동","쌍용동","백석동","불당동","부성동"]) },
    { label: "읍·면", items: S(["성환읍","성거읍","직산읍","입장면"]) },
  ] },
  "/cheonan/dongnam-gu/": { groups: [
    { label: "행정동", items: S(["중앙동","문성동","원성동","봉명동","일봉동","신방동","청룡동","신안동"]) },
    { label: "읍·면", items: S(["목천읍","풍세면","광덕면","북면","성남면","수신면","병천면","동면"]) },
  ] },

  // ── 청주 (일반구 4) ────────────────────────────────────────────────────────
  "/chungbuk/cheongju/": {
    note: "청주는 상당·서원·흥덕·청원 4개 구로 나뉩니다. 각 구에서 행정동·읍·면을 확인하세요.",
    groups: [
      { label: "자치구(일반구)", items: [
        { label: "상당구", url: "/chungbuk/cheongju/sangdang-gu/" },
        { label: "서원구", url: "/chungbuk/cheongju/seowon-gu/" },
        { label: "흥덕구", url: "/chungbuk/cheongju/heungdeok-gu/" },
        { label: "청원구", url: "/chungbuk/cheongju/cheongwon-gu/" },
      ] },
    ],
  },
  "/chungbuk/cheongju/sangdang-gu/": { groups: [
    { label: "행정동", items: S(["중앙동","성안동","탑대성동","영운동","금천동","용담명암산성동","용암동"]) },
    { label: "읍·면", items: S(["낭성면","미원면","가덕면","남일면","문의면"]) },
  ] },
  "/chungbuk/cheongju/seowon-gu/": { groups: [
    { label: "행정동", items: S(["사직동","사창동","모충동","산남동","분평동","수곡동","성화개신죽림동"]) },
    { label: "읍·면", items: S(["남이면","현도면"]) },
  ] },
  "/chungbuk/cheongju/heungdeok-gu/": { groups: [
    { label: "행정동", items: S(["운천신봉동","복대동","가경동","봉명동","강서동"]) },
    { label: "읍·면", items: S(["오송읍","강내면","옥산면"]) },
  ] },
  "/chungbuk/cheongju/cheongwon-gu/": { groups: [
    { label: "행정동", items: S(["우암동","내덕동","율량사천동"]) },
    { label: "읍·면", items: S(["오창읍","내수읍","북이면"]) },
  ] },

  // ── 충남 시·군 (행정동 · 읍·면) ────────────────────────────────────────────
  "/chungnam/asan/": { groups: [
    { label: "행정동", items: S(["온양동"]) },
    { label: "읍·면", items: S(["배방읍","염치읍","탕정면","음봉면","둔포면","영인면","인주면","선장면","도고면","신창면","송악면"]) },
  ] },
  "/chungnam/gongju/": { groups: [
    { label: "행정동", items: S(["중학동","웅진동","금학동","옥룡동","신관동","월송동"]) },
    { label: "읍·면", items: S(["유구읍","이인면","탄천면","계룡면","반포면","의당면","정안면","우성면","사곡면","신풍면"]) },
  ] },
  "/chungnam/nonsan/": { groups: [
    { label: "행정동", items: S(["취암동","부창동"]) },
    { label: "읍·면", items: S(["강경읍","연무읍","성동면","광석면","노성면","상월면","부적면","연산면","벌곡면","양촌면","가야곡면","은진면","채운면"]) },
  ] },
  "/chungnam/gyeryong/": { groups: [{ label: "동·면", items: S(["금암동","두마면","엄사면","신도안면"]) }] },
  "/chungnam/seosan/": { groups: [
    { label: "행정동", items: S(["부춘동","동문동","수석동","석남동"]) },
    { label: "읍·면", items: S(["대산읍","인지면","부석면","팔봉면","지곡면","성연면","음암면","운산면","해미면","고북면"]) },
  ] },
  "/chungnam/dangjin/": { groups: [
    { label: "행정동", items: S(["당진동","채운동","원당동"]) },
    { label: "읍·면", items: S(["합덕읍","송악읍","신평면","고대면","석문면","대호지면","정미면","면천면","순성면","우강면","송산면"]) },
  ] },
  "/chungnam/hongseong/": { groups: [{ label: "읍·면", items: S(["홍성읍","광천읍","홍북읍","금마면","홍동면","장곡면","은하면","결성면","서부면","갈산면","구항면"]) }] },
  "/chungnam/yesan/": { groups: [{ label: "읍·면", items: S(["예산읍","삽교읍","오가읍","대술면","신양면","광시면","대흥면","응봉면","덕산면","봉산면","고덕면","신암면"]) }] },
  "/chungnam/boryeong/": { groups: [
    { label: "행정동", items: S(["대천동"]) },
    { label: "읍·면", items: S(["웅천읍","주포면","주산면","미산면","성주면","청라면","청소면","오천면","천북면","남포면"]) },
  ] },
  "/chungnam/buyeo/": { groups: [{ label: "읍·면", items: S(["부여읍","규암면","은산면","외산면","내산면","구룡면","홍산면","옥산면","남면","충화면","양화면","임천면","장암면","세도면","석성면","초촌면"]) }] },
  "/chungnam/taean/": { groups: [{ label: "읍·면", items: S(["태안읍","안면읍","고남면","남면","근흥면","소원면","원북면","이원면"]) }] },
  "/chungnam/seocheon/": { groups: [{ label: "읍·면", items: S(["장항읍","서천읍","마서면","화양면","기산면","한산면","마산면","시초면","문산면","판교면","종천면","비인면","서면"]) }] },
  "/chungnam/geumsan/": { groups: [{ label: "읍·면", items: S(["금산읍","금성면","제원면","부리면","군북면","남일면","남이면","진산면","복수면","추부면"]) }] },
  "/chungnam/cheongyang/": { groups: [{ label: "읍·면", items: S(["청양읍","운곡면","대치면","정산면","목면","청남면","장평면","남양면","화성면","비봉면"]) }] },

  // ── 충북 시·군 (행정동 · 읍·면) ────────────────────────────────────────────
  "/chungbuk/chungju/": { groups: [
    { label: "행정동", items: S(["성내충인동","교현동","용산동","지현동","문화동","호암직동동","달천동","봉방동","칠금금릉동","연수동","목행용탄동"]) },
    { label: "읍·면", items: S(["주덕읍","살미면","수안보면","대소원면","신니면","노은면","앙성면","중앙탑면","금가면","동량면","산척면","엄정면","소태면"]) },
  ] },
  "/chungbuk/jecheon/": { groups: [
    { label: "행정동", items: S(["교동","의림지동","중앙동","화산동","남현동","영서동","용두동","청전동","신백동"]) },
    { label: "읍·면", items: S(["봉양읍","금성면","청풍면","수산면","덕산면","한수면","백운면","송학면"]) },
  ] },
  "/chungbuk/jincheon/": { groups: [{ label: "읍·면", items: S(["진천읍","덕산읍","초평면","문백면","백곡면","이월면","광혜원면"]) }] },
  "/chungbuk/eumseong/": { groups: [{ label: "읍·면", items: S(["음성읍","금왕읍","대소면","삼성면","감곡면","생극면","맹동면","원남면","소이면"]) }] },
  "/chungbuk/jeungpyeong/": { groups: [{ label: "읍·면", items: S(["증평읍","도안면"]) }] },
  "/chungbuk/goesan/": { groups: [{ label: "읍·면", items: S(["괴산읍","감물면","장연면","연풍면","칠성면","문광면","청천면","청안면","사리면","소수면","불정면"]) }] },
  "/chungbuk/okcheon/": { groups: [{ label: "읍·면", items: S(["옥천읍","동이면","안남면","안내면","청성면","청산면","이원면","군서면","군북면"]) }] },
  "/chungbuk/yeongdong/": { groups: [{ label: "읍·면", items: S(["영동읍","황간면","매곡면","상촌면","양강면","용산면","심천면","양산면","학산면","용화면","추풍령면"]) }] },
  "/chungbuk/boeun/": { groups: [{ label: "읍·면", items: S(["보은읍","속리산면","장안면","마로면","탄부면","삼승면","수한면","회남면","회인면","내북면","산외면"]) }] },
  "/chungbuk/danyang/": { groups: [{ label: "읍·면", items: S(["단양읍","매포읍","대강면","가곡면","영춘면","어상천면","적성면","단성면"]) }] },

  // ── 충남·충북 권역 메인 (시·군) ────────────────────────────────────────────
  "/chungnam/": {
    note: "충남은 8개 시와 7개 군으로 구성됩니다. 각 시·군을 눌러 행정동·읍·면을 확인하세요.",
    groups: [
      { label: "시", items: [
        { label: "천안시", url: "/cheonan/" }, { label: "아산시", url: "/chungnam/asan/" },
        { label: "공주시", url: "/chungnam/gongju/" }, { label: "논산시", url: "/chungnam/nonsan/" },
        { label: "계룡시", url: "/chungnam/gyeryong/" }, { label: "서산시", url: "/chungnam/seosan/" },
        { label: "당진시", url: "/chungnam/dangjin/" }, { label: "보령시", url: "/chungnam/boryeong/" },
      ] },
      { label: "군", items: [
        { label: "홍성군", url: "/chungnam/hongseong/" }, { label: "예산군", url: "/chungnam/yesan/" },
        { label: "부여군", url: "/chungnam/buyeo/" }, { label: "태안군", url: "/chungnam/taean/" },
        { label: "서천군", url: "/chungnam/seocheon/" }, { label: "금산군", url: "/chungnam/geumsan/" },
        { label: "청양군", url: "/chungnam/cheongyang/" },
      ] },
    ],
  },
  "/chungbuk/": {
    note: "충북은 3개 시와 8개 군으로 구성됩니다. 각 시·군을 눌러 행정동·읍·면을 확인하세요.",
    groups: [
      { label: "시", items: [
        { label: "청주시", url: "/chungbuk/cheongju/" }, { label: "충주시", url: "/chungbuk/chungju/" },
        { label: "제천시", url: "/chungbuk/jecheon/" },
      ] },
      { label: "군", items: [
        { label: "진천군", url: "/chungbuk/jincheon/" }, { label: "음성군", url: "/chungbuk/eumseong/" },
        { label: "증평군", url: "/chungbuk/jeungpyeong/" }, { label: "괴산군", url: "/chungbuk/goesan/" },
        { label: "옥천군", url: "/chungbuk/okcheon/" }, { label: "영동군", url: "/chungbuk/yeongdong/" },
        { label: "보은군", url: "/chungbuk/boeun/" }, { label: "단양군", url: "/chungbuk/danyang/" },
      ] },
    ],
  },

  // ── 핵심 광역권 (구성 시·구) ───────────────────────────────────────────────
  "/chungcheong/area/daejeon/": {
    note: "대전권은 5개 자치구로 구성됩니다.",
    groups: [{ label: "자치구", items: [
      { label: "유성구", url: "/daejeon/yuseong-gu/" }, { label: "서구", url: "/daejeon/seo-gu/" },
      { label: "중구", url: "/daejeon/jung-gu/" }, { label: "동구", url: "/daejeon/dong-gu/" },
      { label: "대덕구", url: "/daejeon/daedeok-gu/" },
    ] }],
  },
  "/chungcheong/area/sejong/": {
    note: "세종권은 신도시 행정동과 읍·면으로 구성됩니다. 세종 메인에서 전체를 확인하세요.",
    groups: [
      { label: "행정동(신도시)", items: S(["한솔동","도담동","아름동","종촌동","고운동","보람동","새롬동","대평동","소담동","다정동","나성동","어진동","해밀동","반곡동"]) },
      { label: "읍·면", items: S(["조치원읍","연기면","연동면","부강면","금남면","장군면","연서면","전의면","전동면","소정면"]) },
    ],
  },
  "/chungcheong/area/cheonan-asan/": {
    note: "천안·아산권은 천안 2개 구와 아산시로 구성됩니다.",
    groups: [{ label: "구성 지역", items: [
      { label: "천안 서북구", url: "/cheonan/seobuk-gu/" }, { label: "천안 동남구", url: "/cheonan/dongnam-gu/" },
      { label: "아산시", url: "/chungnam/asan/" },
    ] }],
  },
  "/chungcheong/area/cheongju-osong-ochang/": {
    note: "청주권은 4개 구와 오송·오창 산업권으로 구성됩니다.",
    groups: [{ label: "자치구(일반구)", items: [
      { label: "상당구", url: "/chungbuk/cheongju/sangdang-gu/" }, { label: "서원구", url: "/chungbuk/cheongju/seowon-gu/" },
      { label: "흥덕구(오송)", url: "/chungbuk/cheongju/heungdeok-gu/" }, { label: "청원구(오창)", url: "/chungbuk/cheongju/cheongwon-gu/" },
    ] }],
  },
  "/chungcheong/area/chungnam-northwest/": {
    note: "충남 서북부권 주요 시·군입니다.",
    groups: [{ label: "시·군", items: [
      { label: "아산시", url: "/chungnam/asan/" }, { label: "서산시", url: "/chungnam/seosan/" },
      { label: "당진시", url: "/chungnam/dangjin/" }, { label: "태안군", url: "/chungnam/taean/" },
      { label: "예산군", url: "/chungnam/yesan/" }, { label: "홍성군", url: "/chungnam/hongseong/" },
    ] }],
  },
  "/chungcheong/area/chungnam-south/": {
    note: "충남 남부권 주요 시·군입니다.",
    groups: [{ label: "시·군", items: [
      { label: "공주시", url: "/chungnam/gongju/" }, { label: "논산시", url: "/chungnam/nonsan/" },
      { label: "계룡시", url: "/chungnam/gyeryong/" }, { label: "부여군", url: "/chungnam/buyeo/" },
      { label: "보령시", url: "/chungnam/boryeong/" }, { label: "서천군", url: "/chungnam/seocheon/" },
      { label: "금산군", url: "/chungnam/geumsan/" }, { label: "청양군", url: "/chungnam/cheongyang/" },
    ] }],
  },
  "/chungcheong/area/chungbuk-central-north/": {
    note: "충북 중부·북부권 주요 시·군입니다.",
    groups: [{ label: "시·군", items: [
      { label: "충주시", url: "/chungbuk/chungju/" }, { label: "제천시", url: "/chungbuk/jecheon/" },
      { label: "진천군", url: "/chungbuk/jincheon/" }, { label: "음성군", url: "/chungbuk/eumseong/" },
      { label: "증평군", url: "/chungbuk/jeungpyeong/" }, { label: "괴산군", url: "/chungbuk/goesan/" },
      { label: "단양군", url: "/chungbuk/danyang/" },
    ] }],
  },

  // ── 핵심 생활권 (해당 생활권의 주요 동) ────────────────────────────────────
  "/chungcheong/life/daejeon-dunsan/": { groups: [{ label: "주요 동", items: S(["둔산동","탄방동","만년동"]) }] },
  "/chungcheong/life/daejeon-yuseong/": { groups: [{ label: "주요 동", items: S(["봉명동","궁동","어은동","구암동","장대동"]) }] },
  "/cheonan/life/buldang-ssangyong/": { groups: [{ label: "주요 동", items: S(["불당동","쌍용동","백석동"]) }] },
  "/cheonan/life/dujeong-seongjeong/": { groups: [{ label: "주요 동", items: S(["두정동","성정동","와촌동"]) }] },
  "/cheonan/life/sinbu-terminal/": { groups: [{ label: "주요 동", items: S(["신부동","청당동","구성동"]) }] },
  "/sejong/life/naseong-saerom/": { groups: [{ label: "주요 동", items: S(["나성동","새롬동","다정동","한솔동"]) }] },
  "/sejong/life/jochiwon/": { groups: [{ label: "지역", items: S(["조치원읍"]) }] },
  "/sejong/life/eojin-jongchon/": { groups: [{ label: "주요 동", items: S(["어진동","종촌동"]) }] },
  "/sejong/life/boram-sodam/": { groups: [{ label: "주요 동", items: S(["보람동","소담동","대평동"]) }] },
  "/sejong/life/goun-areum/": { groups: [{ label: "주요 동", items: S(["고운동","아름동"]) }] },
  "/sejong/life/geumnam-bugang/": { groups: [{ label: "읍·면", items: S(["금남면","부강면"]) }] },
};
