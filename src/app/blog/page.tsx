import Link from "next/link";
import { ArrowRight, Microscope, Leaf, FlaskConical, Dna, BookOpen, Tag } from "lucide-react";

const featuredPost = {
  category: "성분 과학",
  title: "엑소좀(Exosome)이란 무엇인가? — 피부 재생의 새로운 열쇠",
  excerpt:
    "엑소좀은 세포가 분비하는 나노 크기의 소포(vesicle)로, 성장인자·단백질·miRNA를 세포 간에 전달합니다. 피부 세포 재생과 콜라겐 합성에 미치는 임상적 근거를 분석합니다.",
  author: "COSMOCOS LAB 연구팀",
  date: "2026-04-20",
  readTime: "8분",
  tag: "exosome",
};

const posts = [
  {
    id: 1,
    category: "성분 과학",
    categoryColor: "#D4699B",
    icon: FlaskConical,
    title: "진세노사이드 Rg2의 항염 효과 — 영지버섯 추출물 1,400ppm의 과학",
    excerpt: "COSMOCOS LAB 특허 공정으로 추출한 진세노사이드 Rg2가 어떻게 피부 면역 조절 및 장벽 강화에 기여하는지 임상 데이터와 함께 설명합니다.",
    author: "ZENOBIO 성분 연구팀",
    date: "2026-04-15",
    readTime: "6분",
    tag: "ginsenoside",
  },
  {
    id: 2,
    category: "기술력",
    categoryColor: "#1A1E3A",
    icon: Dna,
    title: "Skinbiofit™ — 바이오셀룰로오스-펩티드 복합체가 수분 보유 시간을 3배 늘리는 원리",
    excerpt: "나노파이버 매트릭스가 기능성 펩타이드를 피부에 묶어두는 메커니즘. 일반 히알루론산 보습과 무엇이 다른지 분자 수준에서 설명합니다.",
    author: "COSMOCOS LAB",
    date: "2026-04-10",
    readTime: "7분",
    tag: "skinbiofit",
  },
  {
    id: 3,
    category: "전문가 칼럼",
    categoryColor: "#7B5EA7",
    icon: BookOpen,
    title: "에스테틱샵 원장이 말하는 '앰플 선택 기준' — 성분보다 중요한 것",
    excerpt: "15년 경력의 에스테틱 전문가가 설명하는 앰플 제품 선택 시 확인해야 할 3가지 포인트. 성분 농도, 흡수 경로, 피부 타입 매칭의 실전 가이드.",
    author: "이◯◯ (에스테틱샵 원장)",
    date: "2026-04-05",
    readTime: "5분",
    tag: "expert-column",
  },
  {
    id: 4,
    category: "성분 과학",
    categoryColor: "#D4699B",
    icon: FlaskConical,
    title: "나이아신아마이드 vs 비타민C 유도체 — 미백 성분 비교 완전 정리",
    excerpt: "두 성분의 미백 메커니즘, 안정성, pH 범위, 병용 주의사항까지 데이터 기반으로 비교합니다. 슬림씨의 아스코빌글루코사이드 선택 이유도 함께.",
    author: "ZENOBIO 성분 연구팀",
    date: "2026-03-28",
    readTime: "9분",
    tag: "whitening",
  },
  {
    id: 5,
    category: "시술 가이드",
    categoryColor: "#2A9D8F",
    icon: Microscope,
    title: "Jet Injection(무침 주입) 원리 — Vita.Zet이 바늘 없이 진피층에 도달하는 방법",
    excerpt: "솔레노이드 공기압이 어떻게 피부 각질층을 통과해 진피까지 약물을 전달하는지, 기존 MTS·물광주사와 비교한 침투 깊이 데이터를 공개합니다.",
    author: "ZENOBIO 메디컬팀",
    date: "2026-03-20",
    readTime: "7분",
    tag: "vitazet",
  },
  {
    id: 6,
    category: "전문가 칼럼",
    categoryColor: "#7B5EA7",
    icon: BookOpen,
    title: "민감성 피부에 리페어 크림을 고르는 방법 — 피부과 전문의의 기준",
    excerpt: "피부 장벽 손상 지수(TEWL), 세라마이드 비율, 향·방부제 성분 확인법. 루시덤 O₂ 리페어 크림이 민감성 피부에서 테스트된 방식도 공개합니다.",
    author: "김◯◯ 피부과 전문의",
    date: "2026-03-12",
    readTime: "6분",
    tag: "sensitive-skin",
  },
];

const categoryFilters = [
  { id: "all", label: "전체" },
  { id: "ingredient", label: "성분 과학" },
  { id: "expert", label: "전문가 칼럼" },
  { id: "device", label: "시술 가이드" },
  { id: "tech", label: "기술력" },
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1A1E3A] py-16">
        <div className="container-main">
          <p className="text-[10px] tracking-widest text-[#D4699B] mb-3 uppercase font-semibold">Content Hub</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            ZENOBIO<br />Science Blog
          </h1>
          <p className="text-white/60 max-w-xl leading-8">
            성분 분석, 전문가 칼럼, 임상 근거 — 피부 과학을 쉽고 정확하게 전달합니다.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="border-b border-[#EBEBEB] bg-white sticky top-[64px] md:top-[80px] z-20">
        <div className="container-main flex gap-1 overflow-x-auto py-3">
          {categoryFilters.map((f) => (
            <span
              key={f.id}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                f.id === "all"
                  ? "bg-[#1A1E3A] text-white"
                  : "text-[#888] hover:text-[#1A1E3A]"
              }`}
            >
              {f.label}
            </span>
          ))}
        </div>
      </div>

      <div className="container-main py-12">
        {/* Featured Post */}
        <div className="bg-gradient-to-br from-[#1A1E3A] to-[#2A2F5A] text-white rounded-3xl p-8 md:p-12 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#D4699B] rounded-full text-xs font-bold">{featuredPost.category}</span>
            <span className="text-white/40 text-xs">{featuredPost.date}</span>
            <span className="text-white/40 text-xs">읽는 시간 {featuredPost.readTime}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{featuredPost.title}</h2>
          <p className="text-white/70 leading-8 max-w-2xl mb-6">{featuredPost.excerpt}</p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-white/50 text-sm">{featuredPost.author}</p>
            <Link href={`/blog/${featuredPost.tag}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4699B] hover:bg-[#B5507E] text-white rounded-full text-sm font-semibold transition-colors">
              읽기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const Icon = post.icon;
            return (
              <article key={post.id} className="border border-[#EBEBEB] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${post.categoryColor}15` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: post.categoryColor }} />
                    </div>
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase"
                      style={{ color: post.categoryColor }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#1A1E3A] leading-6 mb-3 group-hover:text-[#D4699B] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#888] leading-6 flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#EBEBEB]">
                    <div>
                      <p className="text-xs text-[#555] font-medium">{post.author}</p>
                      <p className="text-[10px] text-[#BBBBBB]">{post.date} · {post.readTime}</p>
                    </div>
                    <Link href={`/blog/${post.tag}`}
                      className="text-xs font-semibold text-[#D4699B] inline-flex items-center gap-1 hover:gap-2 transition-all">
                      읽기 <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="w-5 h-5 text-[#D4699B]" />
              <p className="font-bold text-[#1A1E3A]">성분 뉴스레터 구독</p>
            </div>
            <p className="text-sm text-[#555] leading-6">
              새로운 성분 분석 칼럼과 전문가 인터뷰를 가장 먼저 받아보세요.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-0 shrink-0">
            <input
              type="email"
              placeholder="이메일 주소"
              readOnly
              className="flex-1 md:w-56 px-4 py-3 border border-[#EBEBEB] rounded-l-xl text-sm outline-none bg-white"
            />
            <button className="px-5 py-3 bg-[#1A1E3A] text-white text-sm font-semibold rounded-r-xl whitespace-nowrap">
              구독
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
