import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const certGroups = [
  {
    groupId: "manufacturing",
    groupLabel: "제조 품질",
    groupLabelEn: "Manufacturing Quality",
    groupDesc: "국내외 권위기관이 인증한 우수 제조 품질 기준. 생산부터 출하까지 전 과정에 적용됩니다.",
    certs: [
      {
        id: "iso22716",
        image: "/images/certificates/cert-iso22716.png",
        name: "ISO 22716",
        nameDetail: "우수화장품제조기준(GMP)",
        issuer: "SGS · 미국 ICR인증원",
        scope: "국제 공신력",
        desc: "미국 ICR인증원에서 인증하는 우수화장품제조기준(GMP)으로, 국제적으로 공신력을 인정받는 화장품 품질관리 인증입니다.",
      },
      {
        id: "kgmp",
        image: "/images/certificates/cert-kgmp.png",
        name: "GMP",
        nameDetail: "우수화장품제조기준 (식품의약품안전처)",
        issuer: "식품의약품안전처",
        scope: "국내 공인",
        desc: "식품의약품안전처에서 인증하는 국내 우수화장품제조기준. 철저한 위생관리와 품질관리 기준을 준수하는 국내 공신력 있는 인증입니다.",
      },
      {
        id: "iso9001",
        image: "/images/certificates/cert-iso9001.png",
        name: "ISO 9001",
        nameDetail: "품질경영시스템",
        issuer: "SGS · 미국 ICR인증원",
        scope: "국제 공신력",
        desc: "전 세계적으로 신뢰받는 품질경영 국제 인증. 기업의 전반적인 경영 프로세스와 품질관리 체계를 체계적으로 구축·개선합니다.",
      },
    ],
  },
  {
    groupId: "safety",
    groupLabel: "안전 · ESG 경영",
    groupLabelEn: "Safety & ESG",
    groupDesc: "임직원 안전, 환경 보호, 지속가능 경영에 대한 국제적 인증. 기업의 사회적 책임을 증명합니다.",
    certs: [
      {
        id: "iso14001",
        image: "/images/certificates/cert-iso14001.png",
        name: "ISO 14001",
        nameDetail: "친환경 경영 (ESG 경영)",
        issuer: "GSC · 미국 ICR인증원",
        scope: "국제 공신력",
        desc: "환경 보호와 지속가능한 경영을 실천하는 기업에 부여되는 국제 인증. 환경 영향을 최소화하고 친환경 경영 시스템을 구축한 기업임을 증명합니다.",
      },
      {
        id: "iso45001",
        image: "/images/certificates/cert-iso45001.png",
        name: "ISO 45001",
        nameDetail: "산업 보건 및 안전관리 체계",
        issuer: "미국 ICR인증원",
        scope: "국제 공신력",
        desc: "근로자와 소비자의 건강과 안전을 최우선으로 고려한 제조환경을 구축한 기업에 부여되는 국제 인증. 안전한 작업 환경과 위험요소 예방 체계를 인증합니다.",
      },
    ],
  },
  {
    groupId: "global",
    groupLabel: "글로벌 규제 인증",
    groupLabelEn: "Global Regulatory",
    groupDesc: "미국·국내 규제기관의 법적 인증. 제품의 합법적 유통과 안전성을 보장합니다.",
    certs: [
      {
        id: "fda-otc",
        image: "/images/certificates/cert-fda-otc.png",
        name: "FDA OTC Manufacturer",
        nameDetail: "미국 FDA 일반의약품(OTC) 제조사",
        issuer: "미국 FDA",
        scope: "미국 공인",
        desc: "미국 FDA에서 인증하는 일반의약품(OTC) 제조사 인증. 미국 내 유통되는 의약품의 안전성과 품질을 보증하는 국제 인증입니다.",
      },
      {
        id: "mfg-report",
        image: "/images/certificates/cert-mfg-report.png",
        name: "제조판매 신고",
        nameDetail: "의약품 제조판매 신고 인증",
        issuer: "국내 관할 당국",
        scope: "국내 공인",
        desc: "국내에서 의약품을 제조 및 판매하기 위해 필수적으로 신고하는 인증. 제품의 합법적 유통과 판매를 보장하는 국내 인증입니다.",
      },
      {
        id: "vet-permit",
        image: "/images/certificates/cert-vet-permit.png",
        name: "동물의약품 제조업 허가",
        nameDetail: "동물용 의약품 제조 허가",
        issuer: "국내 관할 당국",
        scope: "국내 공인",
        desc: "동물용 의약품 제조를 위해 필요한 허가로, 관련 법규에 따라 안전하고 적법한 제조를 보증하는 국내 인증입니다.",
      },
    ],
  },
  {
    groupId: "ethics",
    groupLabel: "윤리 · 글로벌 소비자 인증",
    groupLabelEn: "Ethics & Consumer Trust",
    groupDesc: "전 세계 다양한 가치관과 라이프스타일을 존중하는 국제 윤리 인증.",
    certs: [
      {
        id: "vegan",
        image: "/images/certificates/cert-vegan.png",
        name: "EVE VEGAN",
        nameDetail: "비건 인증",
        issuer: "EVE (유럽비건인증기관)",
        scope: "국제 공신력",
        desc: "EVE(유럽비건인증기관)에서 승인하는 비건 인증. 동물성 원료를 사용하지 않고 동물 실험을 하지 않은 제품에 부여되는 국제 인증입니다.",
      },
      {
        id: "halal",
        image: "/images/certificates/cert-halal.png",
        name: "HALAL",
        nameDetail: "할랄 인증",
        issuer: "이슬람 율법 인증기관",
        scope: "국제 공신력",
        desc: "이슬람 율법에 따라 무슬림 인증기관의 인증을 받은 제품. 돼지고기 성분 배제, 천연 성분 사용, 동물 실험 금지 등 엄격한 기준을 준수합니다.",
      },
    ],
  },
];

const scopeColor: Record<string, string> = {
  "국제 공신력": "bg-[#1A1E3A] text-white",
  "국내 공인": "bg-[#D4699B] text-white",
  "미국 공인": "bg-[#2A5FA8] text-white",
};

export default function CertificatesPage() {
  const totalCerts = certGroups.reduce((sum, g) => sum + g.certs.length, 0);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1A1E3A] text-white py-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <p className="text-[9px] tracking-[0.35em] text-[#D4699B] mb-4 uppercase">Certification & Trust</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
              ZENOBIO가 지키는<br />기준의 증거
            </h1>
            <p className="text-white/60 leading-8 max-w-xl text-[15px]">
              국내외 권위기관의 {totalCerts}개 인증. 제조 품질부터 환경·윤리까지,
              모든 기준을 투명하게 공개합니다.
            </p>
          </div>

          {/* Summary Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12 pt-12 border-t border-white/10">
            {[
              { num: "3", label: "ISO 국제 품질 인증", sub: "22716 · 9001 · 14001 · 45001" },
              { num: "2", label: "국내 제조 인증", sub: "식약처 GMP · 제조판매 신고" },
              { num: "1", label: "미국 FDA 인증", sub: "OTC Manufacturer" },
              { num: "2", label: "윤리 소비자 인증", sub: "EVE VEGAN · HALAL" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-[#D4699B] mb-1">{s.num}</p>
                <p className="text-white text-sm font-medium mb-0.5">{s.label}</p>
                <p className="text-white/40 text-[10px] tracking-wide">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Groups */}
      <div className="container-main py-16 space-y-20">
        {certGroups.map((group) => (
          <section key={group.groupId}>
            {/* Group Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#EBEBEB]">
              <div>
                <p className="text-[9px] tracking-[0.3em] text-[#D4699B] uppercase mb-2">{group.groupLabelEn}</p>
                <h2 className="text-2xl font-bold text-[#1A1E3A]" style={{ letterSpacing: "-0.02em" }}>
                  {group.groupLabel}
                </h2>
              </div>
              <p className="text-sm text-[#888] max-w-md leading-6">{group.groupDesc}</p>
            </div>

            {/* Certificate Cards */}
            <div className={`grid gap-6 ${group.certs.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
              {group.certs.map((cert) => (
                <article key={cert.id} className="group border border-[#EBEBEB] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#D4699B]/30 transition-all duration-300">
                  {/* Certificate Image */}
                  <div className="relative aspect-[4/5] bg-[#F8F8F8] overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    {/* Scope Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full ${scopeColor[cert.scope] ?? "bg-[#888] text-white"}`}>
                        {cert.scope}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="mb-3">
                      <p className="text-[10px] tracking-[0.2em] text-[#AAAAAA] uppercase mb-1">{cert.issuer}</p>
                      <h3 className="text-lg font-bold text-[#1A1E3A]">{cert.name}</h3>
                      <p className="text-sm text-[#D4699B] font-medium">{cert.nameDetail}</p>
                    </div>
                    <p className="text-sm text-[#666] leading-6">{cert.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Manufacturer Info Strip */}
      <section className="bg-[#FAF9F8] border-t border-[#EBEBEB] py-14">
        <div className="container-main text-center max-w-2xl mx-auto">
          <p className="text-[9px] tracking-[0.3em] text-[#D4699B] uppercase mb-3">Manufactured by</p>
          <h2 className="text-xl font-bold text-[#1A1E3A] mb-3">cosmocos [코스모코스] Since 1994</h2>
          <p className="text-sm text-[#888] leading-7 mb-8">
            위 모든 인증은 ZENOBIO 제품을 제조하는 코스모코스(cosmocos) 제조 시설에 적용됩니다.
            1994년 설립 이후 30년 이상 국내외 화장품 품질 기준을 선도해온 전문 제조사입니다.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/about"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#1A1E3A] text-white rounded-full text-[11px] tracking-[0.1em] uppercase font-medium hover:bg-[#D4699B] transition-colors">
              브랜드 스토리 보기 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/products"
              className="inline-flex items-center gap-2 px-7 py-3 border border-[#1A1E3A] text-[#1A1E3A] rounded-full text-[11px] tracking-[0.1em] uppercase font-medium hover:bg-[#1A1E3A] hover:text-white transition-colors">
              제품 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
