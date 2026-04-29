"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Microscope, Award, ShieldCheck, Star, Quote } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import { products, categories, getBestProducts, getProductsByCategory, type Category, reviews } from "@/lib/data";

const brandValues = [
  {
    icon: Microscope,
    title: "Exosome Biotech",
    desc: "최신 엑소좀 바이오 기술로 피부 세포 재생을 극대화. Highcellfit Exo S 시리즈의 핵심 과학.",
  },
  {
    icon: Award,
    title: "Professional Grade",
    desc: "에스테틱 전문가·피부과에서 선택하는 프로페셔널 등급의 성분과 포뮬라.",
  },
  {
    icon: ShieldCheck,
    title: "cosmocos Certified",
    desc: "코스모코스(Since 1994) 제조. 세계적 피부 공정 관리 기준과 충분한 성분 테스트를 통과한 제품.",
  },
];

/* 전문가 추천 카드 데이터 */
const expertEndorsements = [
  {
    name: " 박태혁 원장",
    title: "피부과 전문의",
    clinic: "제타리움 피부과의원",
    quote:
      " 엑소좀 기반 성분은 현재 피부 재생 분야에서 가장 주목받는 바이오 기술입니다. ZENOBIO Highcellfit Exo S는 그 임상적 근거를 갖춘 몇 안 되는 제품 중 하나입니다.",
    product: "Highcellfit Exo S",
    productHref: "/products/1",
  },
  {
    name: "최석주 원장",
    title: "에스테틱 샵 원장",
    clinic: "루미너스 에스테틱",
    quote:
      "시술 후 관리 크림으로 루시덤 O₂ 리페어 크림을 5개월째 사용하고 있습니다. 민감해진 피부를 빠르게 안정시켜주는 효과가 탁월해 고객 만족도가 매우 높습니다.",
    product: "Lucidum O₂ Repair Cream",
    productHref: "/products/5",
  },
  {
    name: "MSR 대표",
    title: "뷰티 MD · 전문 바이어",
    clinic: "LUXE Beauty Group",
    quote:
      "Highcellfit Slim C는 기존 슬리밍 앰플과 차별화된 컨투어링 포뮬라를 갖추고 있습니다. B2B 공급사 중 재주문율 1위를 기록하고 있는 이유가 있습니다.",
    product: "Highcellfit Slim C",
    productHref: "/products/4",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const tabProducts = getProductsByCategory(activeTab);
  const bestProducts = getBestProducts();

  return (
    <>
      {/* Section A: Hero Slider */}
      <HeroSlider />

      {/* Certification Trust Strip */}
      <div className="border-y border-[#EBEBEB] bg-[#FAFAFA] overflow-x-auto">
        <div className="container-main py-4">
          <div className="flex items-center gap-6 min-w-max md:min-w-0 md:flex-wrap md:justify-center">
            <Link href="/certificates" className="text-[9px] tracking-[0.25em] text-[#AAAAAA] uppercase whitespace-nowrap font-medium hover:text-[#D4699B] transition-colors">
              인증 현황
            </Link>
            <span className="w-px h-3 bg-[#EBEBEB] shrink-0" />
            {[
              { label: "ISO 22716 GMP", scope: "SGS 국제" },
              { label: "GMP", scope: "식약처" },
              { label: "ISO 9001", scope: "ICR 국제" },
              { label: "FDA OTC", scope: "미국 FDA" },
              { label: "ISO 14001", scope: "ESG 국제" },
              { label: "ISO 45001", scope: "안전 국제" },
              { label: "EVE VEGAN", scope: "유럽 비건" },
              { label: "HALAL", scope: "할랄" },
            ].map((cert, i) => (
              <Link key={i} href="/certificates" className="group flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-[10px] font-semibold text-[#1A1E3A] group-hover:text-[#D4699B] transition-colors">{cert.label}</span>
                <span className="text-[8px] tracking-wide text-[#BBBBBB] group-hover:text-[#D4699B]/60 transition-colors">{cert.scope}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Section C: Signature Line Banner */}
      <section className="container-main py-12">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Highcellfit Exo S */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-50 to-rose-100 min-h-[240px] flex">
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-end z-10 relative">
              <p className="text-[10px] tracking-widest text-[#D4699B] mb-2 uppercase font-semibold">SIGNATURE AMPOULE</p>
              <h2 className="text-xl md:text-2xl font-bold text-[#1A1E3A] mb-1">Highcellfit Exo S</h2>
              <p className="text-xs text-[#666] mb-1">Radiant Glow · Crystal Bright · Luminous Skin</p>
              <p className="text-xs text-[#888] mb-4">THE SCIENCE BEHIND SCULPTING</p>
              <Link href="/products?category=ampoule"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#D4699B] hover:gap-2 transition-all">
                제품 보기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative w-40 md:w-48 shrink-0">
              <Image src="/images/products/exos-set-pink.png" alt="Highcellfit Exo S" fill className="object-contain p-3" />
            </div>
          </div>

          {/* Lucidum Cream */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-100 min-h-[240px] flex">
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-end z-10 relative">
              <p className="text-[10px] tracking-widest text-[#1A1E3A]/60 mb-2 uppercase font-semibold">PROFESSIONAL CREAM</p>
              <h2 className="text-xl md:text-2xl font-bold text-[#1A1E3A] mb-1">루시덤 O₂<br />리페어 크림</h2>
              <p className="text-xs text-[#666] mb-1">피부에 산소를 더하다</p>
              <p className="text-xs text-[#888] mb-4">전문가가 선택한 리페어 크림</p>
              <Link href="/products/5"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#1A1E3A] hover:text-[#D4699B] hover:gap-2 transition-all">
                제품 보기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative w-36 md:w-44 shrink-0">
              <Image src="/images/products/lucidum-cream-main.jpg" alt="Lucidum O2 Repair Cream" fill className="object-contain p-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Section D: Best Seller */}
      <section className="bg-[#FAF9F8] py-16">
        <div className="container-main">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[10px] tracking-widest text-[#D4699B] mb-2 uppercase font-semibold">BEST SELLER</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1E3A]">베스트 셀러</h2>
            </div>
            <Link href="/products"
              className="hidden md:inline-flex items-center gap-1 text-sm text-[#888] hover:text-[#D4699B] transition-colors">
              전체보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bestProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#1A1E3A] text-[#1A1E3A] hover:bg-[#1A1E3A] hover:text-white transition-colors duration-200 text-sm font-medium rounded-full">
              More View <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section E: Product Lineup Tabs */}
      <section className="container-main py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1E3A]">제품 라인업</h2>
        </div>
        <div className="flex gap-1 border-b border-[#EBEBEB] mb-8 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as Category)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-150 ${
                activeTab === cat.id
                  ? "border-[#D4699B] text-[#D4699B]"
                  : "border-transparent text-[#888] hover:text-[#1A1E3A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {tabProducts.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Section F: Brand Story */}
      <section className="bg-[#1A1E3A] text-white py-20">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-[10px] tracking-widest text-[#D4699B] mb-4 uppercase font-semibold">Brand Story</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                The Science<br />Behind Sculpting.
              </h2>
              <p className="text-white/60 leading-8 mb-4">
                ZENOBIO는 엑소좀 바이오 사이언스를 기반으로 한 프로페셔널 스킨케어 브랜드입니다.
                에스테틱 전문가와 피부 과학 연구자들이 함께 만든 임상 검증 포뮬라로,
                전문 시술의 효과를 일상 케어로 연결합니다.
              </p>
              <p className="text-white/60 leading-8 mb-8">
                제조사 코스모코스(Since 1994)의 세계적 품질 기준 아래
                시간이 걸리더라도 최선의 과정을 거쳐 완성합니다.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-2 text-sm text-[#D4699B] hover:text-white transition-colors font-semibold">
                브랜드 스토리 더 보기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src="/images/products/exos-marble.png" alt="Exo S" fill className="object-contain bg-stone-800/50 p-4" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden mt-6">
                <Image src="/images/products/slimc-marble.png" alt="Slim C" fill className="object-contain bg-stone-700/50 p-4" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden -mt-6">
                <Image src="/images/products/lucidum-cream-texture.jpg" alt="Cream texture" fill className="object-contain bg-stone-700/50 p-4" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src="/images/products/highcellfit-lucidum-cream.jpg" alt="Lucidum Cream" fill className="object-contain bg-stone-800/50 p-4" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            {brandValues.map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4699B]/20 flex items-center justify-center shrink-0 mt-1">
                  <v.icon className="w-5 h-5 text-[#D4699B]" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{v.title}</p>
                  <p className="text-sm text-white/50 leading-6">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section G: Promotion Banners */}
      <section className="container-main py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Exo S 세트", sub: "Type I + II 듀얼 케어 세트", color: "from-pink-50 to-rose-100", href: "/products/3", img: "/images/products/exos-i-ii-pair.png" },
            { title: "Slim C", sub: "컨투어링 앰플 신제품 출시", color: "from-purple-50 to-violet-100", href: "/products/4", img: "/images/products/slimc-vials-pink.png" },
            { title: "콤보 세트", sub: "Slim C + Exo S 한정 패키지", color: "from-slate-50 to-indigo-100", href: "/products/7", img: "/images/products/both-together.png" },
          ].map((banner) => (
            <Link
              key={banner.title}
              href={banner.href}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${banner.color} min-h-[200px] flex items-end hover:shadow-lg transition-shadow`}
            >
              <div className="absolute inset-0">
                <Image src={banner.img} alt={banner.title} fill className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative z-10 p-6 bg-gradient-to-t from-white/80 to-transparent w-full">
                <h3 className="text-base font-bold text-[#1A1E3A] mb-0.5">{banner.title}</h3>
                <p className="text-xs text-[#555] mb-2">{banner.sub}</p>
                <span className="text-xs text-[#D4699B] font-semibold inline-flex items-center gap-1">
                  보러가기 <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section H-1: 전문가 추천 (소셜 프루프 상단 레이어) */}
      <section className="bg-[#1A1E3A] py-16">
        <div className="container-main">
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-widest text-[#D4699B] mb-2 uppercase font-semibold">Professional Trust</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">피부 전문가가 먼저 선택합니다</h2>
            <p className="text-white/50 mt-2 text-sm">피부과·에스테틱·뷰티 MD — 현장 전문가의 실제 의견입니다</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {expertEndorsements.map((e) => (
              <div key={e.name} className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col hover:border-[#D4699B]/40 transition-colors">
                <Quote className="w-6 h-6 text-[#D4699B] mb-4 opacity-80 shrink-0" />
                <p className="text-white/70 text-sm leading-7 flex-1 mb-5">
                  &ldquo;{e.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white font-semibold text-sm">{e.name}</p>
                  <p className="text-white/50 text-xs mt-0.5">{e.title} · {e.clinic}</p>
                  <Link
                    href={e.productHref}
                    className="inline-flex items-center gap-1 text-[#D4699B] text-xs font-semibold mt-3 hover:gap-2 transition-all"
                  >
                    추천 제품: {e.product} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/for-professional"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4699B] text-[#D4699B] hover:bg-[#D4699B] hover:text-white rounded-full text-sm font-semibold transition-colors">
              For Professional 전용 페이지 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section: 인증 현황 미리보기 */}
      <section className="container-main py-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[9px] tracking-[0.3em] text-[#D4699B] mb-2 uppercase">Certification</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1E3A]" style={{ letterSpacing: "-0.02em" }}>
              국내외 10개 인증
            </h2>
            <p className="text-sm text-[#888] mt-1">제조 품질 · 안전 · 환경 · 윤리 — 모든 기준을 갖춥니다</p>
          </div>
          <Link href="/certificates"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1E3A] hover:text-[#D4699B] transition-colors shrink-0">
            전체 인증 보기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { image: "/images/certificates/cert-iso22716.png", name: "ISO 22716", sub: "국제 GMP" },
            { image: "/images/certificates/cert-kgmp.png", name: "GMP", sub: "식약처 인증" },
            { image: "/images/certificates/cert-iso9001.png", name: "ISO 9001", sub: "품질경영" },
            { image: "/images/certificates/cert-fda-otc.png", name: "FDA OTC", sub: "미국 FDA" },
            { image: "/images/certificates/cert-vegan.png", name: "EVE VEGAN", sub: "비건 인증" },
          ].map((c) => (
            <Link key={c.name} href="/certificates"
              className="group relative aspect-[4/5] rounded-xl overflow-hidden border border-[#EBEBEB] hover:border-[#D4699B]/40 hover:shadow-lg transition-all duration-300">
              <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" sizes="(max-width: 768px) 50vw, 20vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-[11px] font-bold">{c.name}</p>
                <p className="text-white/60 text-[9px] tracking-wide">{c.sub}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center text-xs text-[#BBBBBB] mt-4">+ ISO 14001 · ISO 45001 · HALAL · 제조판매 신고 · 동물의약품 제조업 허가 포함 총 10개 인증 보유</p>
      </section>

      {/* Section H-2: 소비자 리뷰 (소셜 프루프 하단 레이어) */}
      <section className="bg-[#FAF9F8] py-16">
        <div className="container-main">
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-widest text-[#D4699B] mb-2 uppercase font-semibold">Real Reviews</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1E3A]">실제 사용 고객 후기</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((r, i) => {
              const prod = products.find((p) => p.id === r.productId);
              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#EBEBEB]">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`w-3.5 h-3.5 ${j < r.rating ? "fill-[#D4699B] text-[#D4699B]" : "text-[#E8E4DF]"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-[#444] leading-6 mb-4 line-clamp-2">{r.text}</p>
                  <div className="pt-3 border-t border-[#F5F5F5]">
                    <p className="text-xs font-semibold text-[#1A1A1A]">{r.author}</p>
                    <p className="text-xs text-[#888] mt-0.5">{prod?.nameEn ?? prod?.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section I: Membership */}
      <section className="container-main py-20 text-center">
        <p className="text-[10px] tracking-widest text-[#D4699B] mb-4 uppercase font-semibold">Membership</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1E3A] mb-3">
          지금 가입하면 첫 구매 10% 할인
        </h2>
        <p className="text-[#888] mb-8 text-sm">회원 전용 적립금 · 쿠폰 · 등급 혜택을 누려보세요.</p>
        <form className="flex max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 px-4 py-3 border border-[#EBEBEB] rounded-l-full text-sm outline-none focus:border-[#D4699B] transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#1A1E3A] hover:bg-[#D4699B] text-white text-sm font-medium rounded-r-full transition-colors duration-200 whitespace-nowrap"
          >
            구독하기
          </button>
        </form>
      </section>
    </>
  );
}
