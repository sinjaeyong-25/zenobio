import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Microscope, Award, ShieldCheck, Leaf, FlaskConical, BookOpen, Dna } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1A1E3A] text-white py-24">
        <div className="container-main text-center">
          <p className="text-[10px] tracking-widest text-[#D4699B] mb-4 uppercase font-semibold">Brand Story</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Science<br />Behind Sculpting.
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-8">
            ZENOBIO는 엑소좀 바이오 사이언스를 기반으로 피부 과학의 경계를 넓히는
            프로페셔널 스킨케어 브랜드입니다.
          </p>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="container-main py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[10px] tracking-widest text-[#D4699B] mb-3 uppercase font-semibold">Our Philosophy</p>
            <h2 className="text-3xl font-bold text-[#1A1E3A] mb-6">
              제품으로 신뢰받는 제노비오.<br />
              시간이 걸리더라도,<br />
              최선의 과정을 거쳐 완성합니다.
            </h2>
            <p className="text-[#555] leading-8 mb-4">
              ZENOBIO는 에스테틱 전문가와 피부 과학 연구자들이 함께 시작한 브랜드입니다.
              단순한 화장품을 넘어, 전문 시술 수준의 효과를 일상 케어로 연결하겠다는 철학에서 출발했습니다.
            </p>
            <p className="text-[#555] leading-8">
              모든 제품은 세계적인 피부 공정 관리 기준을 갖춘 코스모코스(Since 1994)에서 제조되며,
              충분한 성분 테스트와 임상 과정을 거쳐 출시됩니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF9F8]">
              <Image src="/images/products/exos-set-pink.png" alt="Exo S" fill className="object-contain p-6" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF9F8] mt-6">
              <Image src="/images/products/slimc-box-set.png" alt="Slim C" fill className="object-contain p-4" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF9F8] -mt-6">
              <Image src="/images/products/lucidum-cream-main.jpg" alt="Cream" fill className="object-contain p-4" />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FAF9F8]">
              <Image src="/images/products/highcellfit-lucidum-cream.jpg" alt="Lucidum Cream" fill className="object-contain p-4" />
            </div>
          </div>
        </div>
      </section>

      {/* cosmocos Manufacturing */}
      <section className="bg-[#FAF9F8] py-16">
        <div className="container-main text-center max-w-3xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#D4699B] mb-3 uppercase font-semibold">Manufacturing</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1E3A] mb-6">cosmocos [코스모코스] Since 1994</h2>
          <p className="text-[#555] leading-8 mb-8">
            국내 최고 수준의 화장품 OEM/ODM 전문 기업 코스모코스와의 협력으로
            세계적 품질 기준의 제품을 생산합니다.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              { num: "01", title: "세계적인 피부 공정 관리", desc: "국제 화장품 GMP 기준을 준수하는 생산 시설에서 제조됩니다." },
              { num: "02", title: "이상국 성분 및 품질테스트", desc: "모든 원료는 안전성과 유효성을 기준으로 엄격히 선별합니다." },
              { num: "03", title: "충분한 시간 성분 테스트", desc: "급하게 출시하지 않습니다. 충분한 임상 기간을 거쳐 완성합니다." },
            ].map((item) => (
              <div key={item.num} className="bg-white p-6 rounded-2xl border border-[#EBEBEB]">
                <p className="text-3xl font-bold text-[#D4699B]/30 mb-2">{item.num}</p>
                <p className="font-semibold text-[#1A1E3A] mb-2">{item.title}</p>
                <p className="text-sm text-[#888] leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COSMOCOS LAB Technology */}
      <section className="container-main py-20">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-widest text-[#D4699B] mb-3 uppercase font-semibold">R&D Technology</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1E3A] mb-4">COSMOCOS LAB 특허 기술력</h2>
          <p className="text-[#555] max-w-2xl mx-auto leading-8">
            제노비오 제품에 적용된 핵심 원료는 30년 역사의 코스모코스 연구소(COSMOCOS LAB)에서 자체 개발·특허 보유한 독자 기술 기반입니다.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1A1E3A] text-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4699B]/20 flex items-center justify-center shrink-0">
                <Dna className="w-5 h-5 text-[#D4699B]" />
              </div>
              <div>
                <p className="font-bold">진세노사이드 Rg2 고농도 추출 특허</p>
                <p className="text-white/40 text-[10px] tracking-widest uppercase">Ginsenoside Rg2 Manufacturing Patent</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-7 mb-4">
              루시덤 O₂ 리페어 크림에 적용된 영지버섯(Ganoderma Lucidum) 추출물 1,400ppm은 COSMOCOS LAB의 독자 특허 공정으로 생산됩니다.
              일반 추출 대비 진세노사이드 Rg2 함량을 3~5배 높게 유지하며, 면역 조절·항염·항산화 효능을 극대화합니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {["항염 효과", "면역 조절", "항산화 활성", "피부 장벽 강화"].map((tag) => (
                <span key={tag} className="text-[10px] px-2.5 py-1 bg-white/10 text-white/70 rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          <div className="border border-[#D4699B]/20 rounded-2xl p-8 bg-gradient-to-br from-pink-50/50 to-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D4699B]/10 flex items-center justify-center shrink-0">
                <FlaskConical className="w-5 h-5 text-[#D4699B]" />
              </div>
              <div>
                <p className="font-bold text-[#1A1E3A]">Skinbiofit™ — 바이오셀룰로오스-펩티드 복합체 특허</p>
                <p className="text-[#888] text-[10px] tracking-widest uppercase">Biocellulose-Peptide Complex Patent</p>
              </div>
            </div>
            <p className="text-[#555] text-sm leading-7 mb-4">
              Skinbiofit™는 바이오셀룰로오스 나노파이버 매트릭스에 기능성 펩타이드를 결합한 COSMOCOS LAB 독자 기술입니다.
              피부의 수분을 효과적으로 유지시키는 바이오셀룰로오스-펩티드 복합체 특허를 기반으로 하며,
              일반 보습 성분 대비 피부 수분 보유 시간이 3배 이상 연장됩니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {["수분 보유 3× 연장", "나노파이버 전달", "펩타이드 복합", "피부 장벽 재건"].map((tag) => (
                <span key={tag} className="text-[10px] px-2.5 py-1 bg-[#F5DCE9] text-[#D4699B] rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 p-5 bg-[#FAF9F8] rounded-2xl flex items-start gap-3 border border-[#EBEBEB]">
          <BookOpen className="w-4 h-4 text-[#D4699B] shrink-0 mt-0.5" />
          <p className="text-xs text-[#888] leading-6">
            <span className="font-semibold text-[#1A1E3A]">COSMOCOS LAB</span>은 1994년 설립 이후 국내외 화장품 특허 30건 이상을 보유하고 있으며, 연구 인력 80명+의 R&D 전담 조직을 운영합니다.
            모든 ZENOBIO 제품 원료는 ISO 22716(화장품 GMP) 인증 시설에서 생산됩니다.
          </p>
        </div>
      </section>

      {/* Brand Values */}
      <section className="bg-[#FAF9F8] py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-widest text-[#D4699B] mb-3 uppercase font-semibold">Core Values</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1E3A]">ZENOBIO가 지키는 약속</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Microscope, title: "Exosome Science", desc: "최신 엑소좀 기술로 피부 세포 재생력을 극대화합니다." },
              { icon: Award, title: "Professional Grade", desc: "에스테틱 전문가가 선택하는 프로 등급의 성분과 포뮬라." },
              { icon: ShieldCheck, title: "Clinically Tested", desc: "모든 제품은 임상 시험 후 출시. 효능을 데이터로 증명합니다." },
              { icon: Leaf, title: "Safe Ingredients", desc: "피부에 유해한 성분은 사용하지 않습니다. 안전이 우선입니다." },
            ].map((v) => (
              <div key={v.title} className="text-center p-6 rounded-2xl border border-[#EBEBEB] bg-white hover:border-[#D4699B] hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-full bg-[#F5DCE9] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4699B] transition-colors">
                  <v.icon className="w-6 h-6 text-[#D4699B] group-hover:text-white transition-colors" />
                </div>
                <p className="font-bold text-[#1A1E3A] mb-2">{v.title}</p>
                <p className="text-sm text-[#888] leading-6">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Line CTA */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-16">
        <div className="container-main text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1E3A] mb-4">ZENOBIO 제품 라인업</h2>
          <p className="text-[#555] mb-8">THE SCIENCE BEHIND SCULPTING AND BRIGHTENING</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/products"
              className="px-8 py-3 bg-[#1A1E3A] text-white rounded-full text-sm font-semibold hover:bg-[#D4699B] transition-colors inline-flex items-center gap-2">
              전제품 보기 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products?category=ampoule"
              className="px-8 py-3 border border-[#1A1E3A] text-[#1A1E3A] rounded-full text-sm font-semibold hover:bg-[#1A1E3A] hover:text-white transition-colors">
              앰플 라인
            </Link>
            <Link href="/certificates"
              className="px-8 py-3 border border-[#D4699B] text-[#D4699B] rounded-full text-sm font-semibold hover:bg-[#D4699B] hover:text-white transition-colors inline-flex items-center gap-2">
              인증 현황 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
