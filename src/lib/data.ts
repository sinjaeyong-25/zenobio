export type Category =
  | "all"
  | "ampoule"
  | "cream"
  | "set"
  | "device";

export interface IngredientDetail {
  name: string;
  source: string;
  evidence: string;
}

export interface Product {
  id: number;
  name: string;
  nameEn: string;
  summary: string;
  category: Category;
  price: number;
  originalPrice?: number;
  discountRate?: number;
  reviewCount: number;
  rating: number;
  badge?: "NEW" | "BEST" | "SALE" | "SOLD OUT" | "LIMITED";
  image: string;
  images: string[];
  description: string;
  keyIngredients: string[];
  ingredientDetails?: IngredientDetail[];
  ingredients: string;
  volume: string;
  options: string[];
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "하이셀핏 엑소 에스 Type I",
    nameEn: "Highcellfit Exo S Type I",
    summary: "Radiant Glow · Crystal Bright · Luminous Skin",
    category: "ampoule",
    price: 120000,
    reviewCount: 128,
    rating: 4.9,
    badge: "BEST",
    image: "/images/products/exos-single-i.png",
    images: [
      "/images/products/exos-single-i.png",
      "/images/products/exos-box-2vials.png",
      "/images/products/exos-i-ii-pair.png",
      "/images/products/exos-set-pink.png",
    ],
    description:
      "THE SCIENCE BEHIND SCULPTING. 하이셀핏 엑소 에스 Type I은 피부 광채와 탄력을 집중 케어하는 프리미엄 엑소좀 앰플입니다. 최신 바이오 기술로 추출한 엑소좀이 피부 세포 재생을 촉진하고, 크리스탈 브라이트 효과로 칙칙한 피부톤을 환하게 개선합니다.",
    keyIngredients: ["엑소좀 복합체", "히알루론산", "나이아신아마이드", "판테놀"],
    ingredientDetails: [
      { name: "엑소좀 복합체", source: "줄기세포 배양액 유래 나노베지클", evidence: "피부 세포 재생 촉진 및 성장인자 전달 임상 검증 (in vitro + 임상 8주 시험)" },
      { name: "히알루론산", source: "발효 바이오 히알루로나제", evidence: "진피 수분 보유량 37% 증가 — 한국피부과학연구원 인체 적용 시험 확인" },
      { name: "나이아신아마이드", source: "고순도 합성 비타민B3", evidence: "멜라닌 이동 억제로 4주 후 색소 침착 개선율 29% — 대학병원 공동 임상" },
      { name: "판테놀", source: "프로비타민B5 유도체", evidence: "피부 장벽 회복 및 수분 손실량(TEWL) 감소 효과 임상 입증" },
    ],
    ingredients: "정제수, 엑소좀복합체, 히알루론산나트륨, 나이아신아마이드, 판테놀, 글리세린, 알로에베라잎추출물, 병풀추출물",
    volume: "5ml × 5vial",
    options: ["5ml × 5vial", "5ml × 10vial (더블 세트)"],
    tags: ["엑소좀", "광채", "탄력", "앰플"],
  },
  {
    id: 2,
    name: "하이셀핏 엑소 에스 Type II",
    nameEn: "Highcellfit Exo S Type II",
    summary: "Radiant Glow · Crystal Bright · Luminous Skin",
    category: "ampoule",
    price: 120000,
    reviewCount: 104,
    rating: 4.8,
    badge: "BEST",
    image: "/images/products/exos-single-ii.png",
    images: [
      "/images/products/exos-single-ii.png",
      "/images/products/exos-single-ii-2.png",
      "/images/products/exos-box-pink.png",
      "/images/products/exos-multi-pink.png",
    ],
    description:
      "THE SCIENCE BEHIND SCULPTING. 하이셀핏 엑소 에스 Type II는 심층 재생에 집중한 고농축 엑소좀 포뮬라입니다. 피부 턴오버 사이클을 정상화하고 손상된 피부 장벽을 집중적으로 회복시킵니다.",
    keyIngredients: ["고농축 엑소좀", "펩타이드 복합체", "세라마이드", "글루타치온"],
    ingredientDetails: [
      { name: "고농축 엑소좀", source: "인간지방유래 줄기세포 엑소좀", evidence: "피부 턴오버 주기 정상화 및 손상 세포 회복 촉진 — 세포 독성 없음 확인" },
      { name: "펩타이드 복합체", source: "생체모사 트리펩타이드·헥사펩타이드 혼합체", evidence: "콜라겐·엘라스틴 합성 자극으로 피부 탄력 개선 임상 확인(12주)" },
      { name: "세라마이드", source: "식물성 발효 세라마이드 NP", evidence: "각질층 지질 보충으로 피부 장벽 손상 지수 43% 감소" },
      { name: "글루타치온", source: "발효 L-글루타치온", evidence: "항산화 활성 및 티로시나제 억제로 미백 효과 이중 임상 입증" },
    ],
    ingredients: "정제수, 고농축엑소좀복합체, 펩타이드복합체, 세라마이드, 글루타치온, 히알루론산나트륨, 글리세린",
    volume: "5ml × 5vial",
    options: ["5ml × 5vial", "5ml × 10vial (더블 세트)"],
    tags: ["엑소좀", "재생", "장벽강화", "앰플"],
  },
  {
    id: 3,
    name: "하이셀핏 엑소 에스 세트 (Type I + II)",
    nameEn: "Highcellfit Exo S Set (Type I + II)",
    summary: "두 가지 타입의 엑소좀 앰플을 한 박스에",
    category: "set",
    price: 240000,
    reviewCount: 67,
    rating: 5.0,
    badge: "LIMITED",
    image: "/images/products/exos-marble.png",
    images: [
      "/images/products/exos-marble.png",
      "/images/products/exos-i-ii-pair.png",
      "/images/products/exos-box-2vials.png",
      "/images/products/both-lineup.png",
    ],
    description:
      "하이셀핏 엑소 에스 Type I과 Type II를 함께 구성한 스페셜 세트. 광채 케어(Type I)와 심층 재생(Type II)을 단계적으로 적용해 시너지 효과를 극대화합니다.",
    keyIngredients: ["엑소좀 복합체 (Type I·II)", "펩타이드", "세라마이드", "나이아신아마이드"],
    ingredients: "정제수, 엑소좀복합체, 펩타이드복합체, 세라마이드, 나이아신아마이드, 히알루론산나트륨",
    volume: "Type I 5ml × 5 + Type II 5ml × 5",
    options: ["Type I × 5 + Type II × 5"],
    tags: ["세트", "엑소좀", "광채", "재생"],
  },
  {
    id: 4,
    name: "하이셀핏 슬림씨",
    nameEn: "Highcellfit Slim C",
    summary: "Defined Contour · Elegance · Smooth Finish",
    category: "ampoule",
    price: 300000,
    originalPrice: undefined,
    discountRate: undefined,
    reviewCount: 89,
    rating: 4.7,
    badge: "NEW",
    image: "/images/products/slimc-box-set.png",
    images: [
      "/images/products/slimc-box-set.png",
      "/images/products/slimc-marble.png",
      "/images/products/slimc-vials-pink.png",
      "/images/products/both-lineup.png",
    ],
    description:
      "THE SCIENCE BEHIND SCULPTING AND BRIGHTENING. 하이셀핏 슬림씨는 국소 지방 분해와 탄력 개선을 동시에 공략하는 프로페셔널 컨투어링 앰플입니다. Defined Contour 포뮬라로 매끄럽고 선명한 윤곽을 만들어줍니다.",
    keyIngredients: ["카르니틴 복합체", "카페인", "콜라겐 부스터", "비타민C 유도체"],
    ingredientDetails: [
      { name: "카르니틴 복합체", source: "L-카르니틴 · DMAE 배합체", evidence: "지방산 산화 촉진 및 국소 지방 세포 활성 억제 — 8주 인체 적용 시험" },
      { name: "카페인", source: "커피 씨앗 추출 정제 카페인", evidence: "지방 분해 효소(리파제) 활성화 및 혈액순환 개선으로 셀룰라이트 감소 임상" },
      { name: "콜라겐 부스터", source: "저분자 해양 콜라겐 가수분해물", evidence: "진피 섬유아세포 자극으로 콜라겐 생성량 22% 증가 — 세포 시험 확인" },
      { name: "비타민C 유도체 (아스코빌글루코사이드)", source: "안정화 비타민C — 효소적 산화 차단 구조", evidence: "멜라닌 생성 억제 및 피부 결 개선. 자극 없는 안정형 미백 성분 국내 식약처 기능성 고시" },
    ],
    ingredients: "정제수, 카르니틴복합체, 카페인, 아스코빌글루코사이드, 콜라겐가수분해물, 글리세린, 히알루론산나트륨",
    volume: "10ml × 5vial",
    options: ["10ml × 5vial", "10ml × 10vial (더블 세트)"],
    tags: ["컨투어링", "슬리밍", "비타민C", "탄력"],
  },
  {
    id: 5,
    name: "루시덤 O₂ 리페어 크림",
    nameEn: "Lucidum O2 Repair Cream",
    summary: "피부에 산소를 더하다 · 전문가가 선택한 리페어 크림",
    category: "cream",
    price: 78000,
    reviewCount: 213,
    rating: 4.8,
    badge: "BEST",
    image: "/images/products/lucidum-cream-main.jpg",
    images: [
      "/images/products/lucidum-cream-main.jpg",
      "/images/products/lucidum-cream-texture.jpg",
    ],
    description:
      "ZENOBIO PROFESSIONAL. For Sensitive skin condition. 영지 버섯(Ganoderma Lucidum) 추출물 1,400ppm과 산소수(Oxygen Water)를 결합한 차세대 리페어 크림. 무겁지 않은 보호 텍스처로 민감한 피부 컨디션에서도 편안하게 사용할 수 있습니다.",
    keyIngredients: ["영지버섯추출물 1,400ppm", "산소수(Oxygen Water)", "알로에베라", "판테놀"],
    ingredientDetails: [
      { name: "영지버섯추출물 1,400ppm (Ganoderma Lucidum)", source: "COSMOCOS LAB 특허 공정 — 진세노사이드 Rg2 고농도 추출 기술", evidence: "면역 조절·항염 효과 임상 확인, 민감 피부 진정 및 피부 장벽 강화 8주 시험" },
      { name: "산소수 (Oxygen Water)", source: "고압 산소 용해 정제수 — 용존 산소량 일반 물 대비 35× 이상", evidence: "피부 세포 유산소 대사 촉진 및 피부 결 개선 효과 in vitro 확인" },
      { name: "알로에베라", source: "알로에베라 잎 생체즙 (이중 정제)", evidence: "보습 효과 및 피부 진정 — 아토피 유사 모델 염증 인자 억제 확인" },
      { name: "판테놀 (프로비타민B5)", source: "합성 D-판테놀", evidence: "피부 장벽 재건 및 TEWL(경피수분손실) 감소, 상처 회복 촉진 다수 논문 확인" },
    ],
    ingredients: "정제수, 영지버섯추출물, 산소수, 알로에베라잎즙, 판테놀, 글리세린, 세라마이드, 스쿠알란, 토코페롤",
    volume: "60ml",
    options: ["60ml", "60ml × 2 (더블 세트)"],
    tags: ["리페어", "민감성", "보습", "크림", "산소"],
  },
  {
    id: 6,
    name: "하이셀핏 루시덤 크림",
    nameEn: "Highcellfit Lucidum Cream",
    summary: "Refresh · Protect · Renew · THE SCIENCE BEHIND HYDRATION AND SKIN RECOVERY",
    category: "cream",
    price: 139000,
    reviewCount: 76,
    rating: 4.6,
    badge: "NEW",
    image: "/images/products/highcellfit-lucidum-cream.jpg",
    images: [
      "/images/products/highcellfit-lucidum-cream.jpg",
    ],
    description:
      "하이셀핏 루시덤 크림은 수분 공급과 피부 회복을 동시에 실현하는 멀티 기능성 크림입니다. Refresh, Protect, Renew 3단계 케어로 피부 본연의 건강한 컨디션을 유지시킵니다.",
    keyIngredients: ["루시덤(영지)추출물", "히알루론산", "펩타이드", "비타민E"],
    ingredients: "정제수, 영지버섯추출물, 히알루론산나트륨, 펩타이드복합체, 토코페롤, 글리세린, 세라마이드, 판테놀",
    volume: "30g",
    options: ["30g"],
    tags: ["보습", "리커버리", "크림", "루시덤"],
  },
  {
    id: 7,
    name: "하이셀핏 Slim C + Exo S 콤보 세트",
    nameEn: "Highcellfit Slim C + Exo S Combo Set",
    summary: "슬리밍 + 엑소좀 최강 조합 스페셜 패키지",
    category: "set",
    price: 490000,
    originalPrice: 540000,
    discountRate: 9,
    reviewCount: 42,
    rating: 4.9,
    badge: "LIMITED",
    image: "/images/products/both-together.png",
    images: [
      "/images/products/both-together.png",
      "/images/products/both-lineup.png",
      "/images/products/slimc-marble.png",
      "/images/products/exos-marble.png",
    ],
    description:
      "컨투어링과 광채 케어를 한 번에. Slim C의 강력한 윤곽 개선 효과와 Exo S의 피부 재생·광채 효과를 결합한 제노비오 시그니처 패키지입니다.",
    keyIngredients: ["엑소좀 복합체", "카르니틴 복합체", "비타민C 유도체", "펩타이드"],
    ingredients: "Slim C: 정제수, 카르니틴복합체, 카페인, 아스코빌글루코사이드 / Exo S: 정제수, 엑소좀복합체, 펩타이드복합체",
    volume: "Slim C 10ml×5 + Exo S 5ml×5",
    options: ["Slim C 10ml×5 + Exo S Type I 5ml×5", "Slim C 10ml×5 + Exo S Type II 5ml×5"],
    tags: ["세트", "컨투어링", "엑소좀", "한정판"],
  },
  {
    id: 8,
    name: "비타젯 (Vita.Zet)",
    nameEn: "Vita.Zet — Jet Injection Device",
    summary: "NO NEEDLE · NO PAIN · NO STEROID — 바늘 없이 진피층까지, 비침습 메디컬 스킨 케어",
    category: "device",
    price: 4800000,
    reviewCount: 31,
    rating: 4.9,
    badge: "NEW",
    image: "/images/products/vitazet-main.jpg",
    images: [
      "/images/products/vitazet-main.jpg",
      "/images/products/vitazet-console.jpg",
    ],
    description:
      "Vita.Zet(비타젯)은 솔레노이드 공기압(Jet Injection) 기술로 바늘 없이 유효 성분을 진피층까지 전달하는 비침습 메디컬 스킨 케어 기기입니다. 통증·출혈·감염·다운타임 제로. 마취 불필요, 시술 직후 일상 복귀 가능. 피부과·에스테틱샵 전용 B2B 장비로, FACE/BODY 2모드와 압력 1~10단계 세밀 조절을 지원합니다.",
    keyIngredients: ["Jet Injection 기술", "FACE/BODY 2모드", "압력 1~10단계 조절", "다연발 샷팅 지원"],
    ingredientDetails: [
      { name: "Jet Injection (무침 주입 기술)", source: "솔레노이드 공기압 구동 — 바늘 없이 초고속 미세 제트로 피부 침투", evidence: "MTS·더마샤인·레이저 등 기존 시술 대비 통증·감염 리스크 제거, 약물 흡수율 동등 이상 임상 데이터 보유" },
      { name: "FACE / BODY 듀얼 모드", source: "압력·주기 최적화 설정 — 페이스(얕은 진피) / 바디(심부 근육·지방층) 분리", evidence: "페이스: 리프팅·스킨부스터·미백·여드름. 바디: 슬리밍·통증 완화·탈모 관리 임상 적용" },
      { name: "압력 1~10단계 세밀 조절", source: "디지털 솔레노이드 제어 — 단계별 공기압 정밀 설정", evidence: "피부 두께·부위별 최적 침투 깊이 조절 가능, 앰플 로스율 최소화 확인" },
      { name: "다연발 샷팅 & 저로스 핸드피스", source: "연속 분사 메커니즘 — 1회 충전 다회 샷팅", evidence: "시술 시간 40% 단축, 엠보 자국 감소, 에스테틱샵 1일 20+ 시술 가능 검증" },
    ],
    ingredients: "해당 없음 (의료기기 — 별도 앰플/약물 주입 방식)",
    volume: "본체 1ea + 핸드피스 1ea + 거치대",
    options: ["기본 세트 (본체 + 핸드피스)", "패키지 (기본 세트 + 소모품 스타터 키트)"],
    tags: ["기기", "비침습", "젯인젝션", "에스테틱", "B2B"],
  },
];

export const categories = [
  { id: "all", label: "전제품", icon: "✦" },
  { id: "ampoule", label: "앰플", icon: "💎" },
  { id: "cream", label: "크림", icon: "🌿" },
  { id: "set", label: "세트", icon: "🎁" },
  { id: "device", label: "기기", icon: "⚡" },
];

export const heroSlides = [
  {
    id: 1,
    copy1: "The Science Behind Sculpting",
    copy2: "ZENOBIO PROFESSIONAL — 엑소좀 바이오 사이언스",
    cta: "컬렉션 보기",
    href: "/products",
    bg: "from-pink-50 to-rose-50",
    accent: "#E8A4B8",
  },
  {
    id: 2,
    copy1: "Highcellfit Exo S",
    copy2: "Radiant Glow · Crystal Bright · Luminous Skin",
    cta: "제품 보기",
    href: "/products/1",
    bg: "from-stone-50 to-pink-50",
    accent: "#C4A882",
  },
  {
    id: 3,
    copy1: "루시덤 O₂ 리페어 크림",
    copy2: "피부에 산소를 더하다 · 전문가가 선택한 리페어",
    cta: "지금 보기",
    href: "/products/5",
    bg: "from-slate-50 to-blue-50",
    accent: "#7BA3C8",
  },
];

export const reviews = [
  {
    id: 1,
    productId: 1,
    author: "김*현",
    rating: 5,
    date: "2026-04-15",
    text: "에스테틱샵에서 추천받아 구매했는데 정말 대박이에요. 피부가 한층 환해지고 탄력이 살아났어요. Type I부터 시작해서 이제 세트로 구매 예정입니다.",
    option: "5ml × 5vial",
  },
  {
    id: 2,
    productId: 2,
    author: "이*진",
    rating: 5,
    date: "2026-04-10",
    text: "Type II는 심층 재생에 정말 특화된 느낌이에요. 자고 일어나면 피부가 확실히 달라져 있어요. 재구매 확정!",
    option: "5ml × 5vial",
  },
  {
    id: 3,
    productId: 5,
    author: "박*연",
    rating: 5,
    date: "2026-04-08",
    text: "루시덤 크림은 텍스처가 너무 가벼워서 좋아요. 민감성인데도 자극 없이 촉촉하게 유지됩니다. 에스테틱샵에서 시술 후 관리용으로 쓰는데 최고예요.",
    option: "60ml",
  },
  {
    id: 4,
    productId: 4,
    author: "최*수",
    rating: 4,
    date: "2026-04-05",
    text: "슬림씨는 지속적으로 사용하면서 윤곽선이 또렷해지는 걸 느꼈어요. 전문적인 케어를 집에서도 받는 기분!",
    option: "10ml × 5vial",
  },
];

export function getProductsByCategory(category: Category): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getBestProducts(): Product[] {
  return products.filter((p) => p.badge === "BEST" || p.reviewCount > 60);
}
