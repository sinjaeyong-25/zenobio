import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Microscope, Users, Phone, Zap, CheckCircle, Star } from "lucide-react";

const vitazetFeatures = [
  { label: "NO NEEDLE", desc: "솔레노이드 공기압 Jet Injection — 바늘 없이 진피층까지 침투" },
  { label: "NO PAIN", desc: "마취 불필요, 시술 직후 일상 복귀 — 다운타임 제로" },
  { label: "NO STEROID", desc: "부작용·알러지 반응 최소화, 안전한 비침습 메디컬 케어" },
];

const treatmentAreas = [
  {
    zone: "FACE",
    items: ["리프팅 (이마·눈가·턱·윤곽)", "스킨부스터 (진피층 영양 침투)", "미백 & 잡티 케어", "여드름 및 염증성 피부", "목 주름 & 이중턱", "두피 (염증성 탈모 관리)"],
  },
  {
    zone: "BODY",
    items: ["복부·팔뚝·허벅지 슬리밍", "어깨·허리 통증 완화", "팔꿈치 (테니스·골프 엘보)", "손목 (터널증후군·관절염 예방)", "종아리 근육통"],
  },
];

const productLines = [
  {
    name: "Highcellfit Exo S",
    nameKo: "하이셀핏 엑소 에스",
    types: "Type I (광채) / Type II (재생)",
    desc: "엑소좀 바이오 앰플. 피부 광채·탄력·재생 집중 케어. 에스테틱샵 시술 병행 또는 사후 관리에 최적.",
    image: "/images/products/exos-set-pink.png",
    href: "/products/1",
  },
  {
    name: "Highcellfit Slim C",
    nameKo: "하이셀핏 슬림씨",
    types: "10ml × 5vial",
    desc: "카르니틴 복합체·카페인 기반 컨투어링 앰플. 국소 지방 분해 및 탄력 개선. 비타젯과 함께 사용 시 시너지 극대화.",
    image: "/images/products/slimc-box-set.png",
    href: "/products/4",
  },
  {
    name: "Vita.Zet",
    nameKo: "비타젯",
    types: "FACE / BODY 2모드",
    desc: "바늘 없는 Jet Injection 기기. 앰플을 진피층까지 전달. 피부과·에스테틱샵 필수 장비로 포지셔닝.",
    image: "/images/products/vitazet-main.jpg",
    href: "/products/8",
  },
];

const testimonials = [
  {
    role: "피부과 원장",
    clinic: "강남 ◯◯피부과",
    text: "비타젯 도입 후 스킨부스터 시술 만족도가 눈에 띄게 올랐습니다. 환자 통증 민원이 없어지고 시술 시간도 절반으로 줄었어요.",
    rating: 5,
  },
  {
    role: "에스테틱샵 원장",
    clinic: "압구정 ◯◯에스테틱",
    text: "엑소 에스를 시술 후 홈케어 제품으로 연계했더니 재구매율이 크게 높아졌어요. 전문가 라인이라는 신뢰감이 고객 설득을 훨씬 쉽게 해줍니다.",
    rating: 5,
  },
  {
    role: "뷰티 MD",
    clinic: "강남구 뷰티 클리닉",
    text: "COSMOCOS LAB 특허 원료를 쓴다는 사실이 고객에게 전달될 때 반응이 다릅니다. 성분 설명만 해도 구매 전환이 이루어질 정도예요.",
    rating: 5,
  },
];

export default function ForProfessionalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1A1E3A] text-white py-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-widest text-[#D4699B] mb-4 uppercase font-semibold">For Professional</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              에스테틱 전문가를<br />위한 ZENOBIO
            </h1>
            <p className="text-white/60 text-base leading-8 mb-8 max-w-xl">
              피부과·에스테틱샵에서 실제로 사용하는 제품과 기기를 직접 공급합니다.
              전문가 신뢰를 기반으로 소비자 확신으로 이어지는 ZENOBIO 프로페셔널 라인.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4699B] text-white rounded-full text-sm font-semibold hover:bg-[#B5507E] transition-colors">
                B2B 문의하기 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#products"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded-full text-sm font-semibold hover:border-white hover:bg-white/10 transition-colors">
                제품 라인 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Numbers */}
      <section className="bg-[#D4699B]">
        <div className="container-main py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              { num: "500+", label: "협력 에스테틱샵" },
              { num: "30+", label: "COSMOCOS LAB 특허" },
              { num: "30년", label: "제조사 cosmocos 역사" },
              { num: "98%", label: "전문가 재구매율" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold mb-1">{s.num}</p>
                <p className="text-white/70 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vita.Zet Feature */}
      <section className="container-main py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0 rounded-3xl overflow-hidden bg-[#F5F5F5]">
            <Image
              src="/images/products/vitazet-main.jpg"
              alt="Vita.Zet"
              fill
              className="object-contain p-6"
            />
          </div>
          <div>
            <p className="text-[10px] tracking-widest text-[#D4699B] mb-3 uppercase font-semibold">신제품 — NEW DEVICE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1E3A] mb-2">Vita.Zet<br /><span className="text-xl font-semibold text-[#888]">비타젯</span></h2>
            <p className="text-[#555] mb-6 leading-7">
              솔레노이드 공기압(Jet Injection)으로 바늘 없이 유효 성분을 진피층까지 전달하는 비침습 메디컬 스킨 케어 기기.
              피부과·에스테틱샵을 위한 에스테틱 필수 아이템.
            </p>
            <div className="space-y-3 mb-8">
              {vitazetFeatures.map((f) => (
                <div key={f.label} className="flex items-start gap-3 p-4 bg-[#FAF9F8] rounded-xl border border-[#EBEBEB]">
                  <span className="text-xs font-black text-[#D4699B] shrink-0 pt-0.5">{f.label}</span>
                  <p className="text-sm text-[#555]">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 p-4 bg-[#1A1E3A] rounded-xl mb-6">
              <Zap className="w-5 h-5 text-[#D4699B] shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold">FACE / BODY 2모드 · 압력 1~10단계 세밀 조절</p>
                <p className="text-white/50 text-xs">다연발 샷팅 지원 · 앰플 로스율 최소화</p>
              </div>
            </div>
            <Link href="/products/8"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#D4699B] text-white rounded-full text-sm font-semibold hover:bg-[#B5507E] transition-colors">
              Vita.Zet 상세 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="bg-[#FAF9F8] py-16">
        <div className="container-main">
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-widest text-[#D4699B] mb-3 uppercase font-semibold">Vita.Zet 적용 부위</p>
            <h2 className="text-2xl font-bold text-[#1A1E3A]">풀 바디 메디컬 스킨 케어 지원</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {treatmentAreas.map((area) => (
              <div key={area.zone} className="bg-white rounded-2xl p-6 border border-[#EBEBEB]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#1A1E3A] text-white text-xs font-black rounded-full">{area.zone}</span>
                </div>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#555]">
                      <CheckCircle className="w-4 h-4 text-[#D4699B] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Product Line */}
      <section id="products" className="container-main py-20">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-widest text-[#D4699B] mb-3 uppercase font-semibold">Professional Line</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1E3A]">에스테틱 전문가 추천 라인</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {productLines.map((p) => (
            <div key={p.name} className="border border-[#EBEBEB] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative aspect-square bg-[#FAF9F8]">
                <Image src={p.image} alt={p.name} fill className="object-contain p-6" />
              </div>
              <div className="p-6">
                <p className="text-[10px] text-[#D4699B] font-semibold tracking-widest uppercase mb-1">{p.types}</p>
                <p className="font-bold text-[#1A1E3A] mb-0.5">{p.nameKo}</p>
                <p className="text-xs text-[#888] mb-3">{p.name}</p>
                <p className="text-sm text-[#555] leading-6 mb-4">{p.desc}</p>
                <Link href={p.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#D4699B] hover:gap-2 transition-all">
                  자세히 보기 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Testimonials */}
      <section className="bg-[#1A1E3A] py-16">
        <div className="container-main">
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-widest text-[#D4699B] mb-3 uppercase font-semibold">Expert Voice</p>
            <h2 className="text-2xl font-bold text-white">전문가들의 실제 사용 경험</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#D4699B] text-[#D4699B]" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-7 mb-5">"{t.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.role}</p>
                  <p className="text-white/40 text-xs">{t.clinic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Contact */}
      <section id="contact" className="container-main py-20 max-w-2xl mx-auto text-center">
        <p className="text-[10px] tracking-widest text-[#D4699B] mb-3 uppercase font-semibold">B2B Partnership</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1E3A] mb-4">파트너십 & 도매 문의</h2>
        <p className="text-[#555] leading-8 mb-8">
          에스테틱샵·피부과·뷰티 클리닉을 위한 전용 공급가, 교육 지원, 마케팅 협업 프로그램을 운영합니다.
          담당자가 직접 연락드립니다.
        </p>
        <div className="bg-[#FAF9F8] border border-[#EBEBEB] rounded-2xl p-8 text-left space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#D4699B] shrink-0" />
            <div>
              <p className="font-semibold text-[#1A1E3A]">1588-0000</p>
              <p className="text-xs text-[#888]">평일 10:00–17:00 (점심 12:00–13:00 제외)</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-[#D4699B] shrink-0" />
            <div>
              <p className="font-semibold text-[#1A1E3A]">B2B 전담 담당자 배정</p>
              <p className="text-xs text-[#888]">신청 후 1영업일 이내 연락</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D4699B] shrink-0" />
            <div>
              <p className="font-semibold text-[#1A1E3A]">전문가 인증 필수</p>
              <p className="text-xs text-[#888]">사업자등록증 및 에스테틱/의료기관 증빙 요청</p>
            </div>
          </div>
        </div>
        <a href="mailto:b2b@zenobio.co.kr"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4699B] text-white rounded-full font-semibold hover:bg-[#B5507E] transition-colors">
          B2B 이메일 문의 <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
}
