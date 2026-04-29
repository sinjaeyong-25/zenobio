"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, ShoppingBag, Share2, Star, Minus, Plus, Truck, RotateCcw, CheckCircle, FlaskConical, Microscope, BookOpen } from "lucide-react";
import { getProductById, products, reviews } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = getProductById(Number(id));

  const [mainImage, setMainImage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"detail" | "review" | "qna" | "shipping">("detail");
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div className="container-main py-20 text-center">
        <p className="text-lg font-medium text-[#1A1A1A] mb-2">상품을 찾을 수 없습니다.</p>
        <Link href="/products" className="text-sm text-[#D4699B] underline">목록으로 돌아가기</Link>
      </div>
    );
  }

  const productReviews = reviews.filter((r) => r.productId === product.id);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const totalPrice = product.price * qty;

  const tabs = [
    { id: "detail", label: "상세정보" },
    { id: "review", label: `리뷰 (${productReviews.length})` },
    { id: "qna", label: "Q&A" },
    { id: "shipping", label: "배송·교환·반품" },
  ] as const;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-main py-4">
        <nav className="flex items-center gap-1 text-xs text-[#888]">
          <Link href="/" className="hover:text-[#D4699B]">HOME</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-[#D4699B]">전제품</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#1A1A1A]">{product.nameEn}</span>
        </nav>
      </div>

      {/* Above the Fold */}
      <section className="container-main pb-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          {/* Left: Images */}
          <div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#FAF9F8] mb-3">
              <Image
                src={product.images[mainImage] ?? product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-6"
                priority
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(i)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors bg-[#FAF9F8] ${
                    i === mainImage ? "border-[#D4699B]" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-contain p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Purchase Area */}
          <div className="flex flex-col">
            <p className="text-[10px] tracking-widest text-[#D4699B] mb-2 uppercase font-semibold">ZENOBIO PROFESSIONAL</p>
            {product.badge && (
              <span className={`self-start text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-3 ${
                product.badge === "BEST" ? "bg-[#D4699B] text-white" :
                product.badge === "NEW" ? "bg-[#1A1E3A] text-white" :
                product.badge === "SALE" ? "bg-[#E45858] text-white" :
                product.badge === "LIMITED" ? "bg-[#7B5EA7] text-white" : "bg-[#888] text-white"
              }`}>{product.badge}</span>
            )}

            <h1 className="text-xl md:text-2xl font-bold text-[#1A1E3A] mb-0.5">{product.name}</h1>
            <p className="text-sm text-[#D4699B] font-medium mb-1">{product.nameEn}</p>
            <p className="text-sm text-[#888] mb-4">{product.summary}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#EBEBEB]">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? "fill-[#D4699B] text-[#D4699B]" : "text-[#EBEBEB]"}`} />
                ))}
              </div>
              <span className="text-sm text-[#888]">{product.rating} · {product.reviewCount.toLocaleString()}개 리뷰</span>
            </div>

            {/* Price */}
            <div className="mb-4">
              {product.discountRate && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl font-bold text-[#E45858]">{product.discountRate}%</span>
                  <span className="text-sm text-[#BBBBBB] line-through">{product.originalPrice?.toLocaleString()}원</span>
                </div>
              )}
              <span className="text-3xl font-bold text-[#1A1E3A]">{product.price.toLocaleString()}원</span>
            </div>

            {/* Key Ingredients Badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.keyIngredients.map((ing) => (
                <span key={ing} className="text-[10px] px-2.5 py-1 bg-[#F5DCE9] text-[#D4699B] rounded-full font-medium">
                  {ing}
                </span>
              ))}
            </div>

            {/* Delivery */}
            <div className="flex items-center gap-2 text-sm text-[#555] mb-4 p-3 bg-[#FAF9F8] rounded-xl">
              <Truck className="w-4 h-4 text-[#D4699B] shrink-0" />
              <span>30,000원 이상 무료배송 · 내일({new Date(Date.now() + 86400000).toLocaleDateString("ko-KR", { month: "long", day: "numeric" })}) 도착 예정</span>
            </div>

            {/* Option Select */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-[#888] mb-2 uppercase tracking-wider">옵션 선택</p>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(Number(e.target.value))}
                className="w-full px-4 py-3 border border-[#EBEBEB] rounded-xl text-sm bg-white outline-none focus:border-[#D4699B] transition-colors"
              >
                {product.options.map((opt, i) => (
                  <option key={i} value={i}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3 mb-5">
              <p className="text-xs font-semibold text-[#888] uppercase tracking-wider">수량</p>
              <div className="flex items-center border border-[#EBEBEB] rounded-xl overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#FAF9F8] transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-[#FAF9F8] transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between p-4 bg-[#FAF9F8] rounded-xl mb-5">
              <span className="text-sm font-medium">총 결제금액</span>
              <span className="text-xl font-bold text-[#1A1E3A]">{totalPrice.toLocaleString()}원</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-2 mb-3">
              <button className="flex-1 py-3.5 bg-[#1A1E3A] hover:bg-[#D4699B] text-white font-semibold rounded-2xl transition-colors duration-200 flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                장바구니
              </button>
              <button className="flex-1 py-3.5 bg-[#D4699B] hover:bg-[#B5507E] text-white font-semibold rounded-2xl transition-colors duration-200">
                바로구매
              </button>
              <button
                onClick={() => setLiked(!liked)}
                className={`w-12 h-12 border-2 rounded-2xl flex items-center justify-center transition-colors ${liked ? "border-[#E45858] text-[#E45858]" : "border-[#EBEBEB] text-[#888] hover:border-[#E45858] hover:text-[#E45858]"}`}
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-[#E45858]" : ""}`} />
              </button>
            </div>

            <button className="flex items-center gap-2 text-xs text-[#888] hover:text-[#D4699B] transition-colors self-end">
              <Share2 className="w-3.5 h-3.5" />
              공유하기
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Tab Nav */}
      <div className="sticky top-[64px] md:top-[80px] z-30 bg-white border-b border-[#EBEBEB]">
        <div className="container-main flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                document.getElementById(`section-${tab.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`px-4 md:px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-[#D4699B] text-[#D4699B]"
                  : "border-transparent text-[#888] hover:text-[#1A1E3A]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Detail Content */}
      <div className="container-main py-12 max-w-3xl mx-auto">

        {/* Detail Info */}
        <section id="section-detail" className="mb-16">
          <h2 className="text-lg font-bold mb-6 text-[#1A1E3A]">상세정보</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8">
              <p className="text-[10px] tracking-widest text-[#D4699B] mb-3 uppercase font-semibold">Product Description</p>
              <p className="text-sm text-[#444] leading-8">{product.description}</p>
            </div>

            {/* Key Ingredients Badges */}
            <div className="border border-[#EBEBEB] rounded-2xl p-6">
              <p className="text-[10px] tracking-widest text-[#888] mb-4 uppercase font-semibold">핵심 성분</p>
              <div className="grid grid-cols-2 gap-3">
                {product.keyIngredients.map((ing, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-[#FAF9F8] rounded-xl">
                    <CheckCircle className="w-4 h-4 text-[#D4699B] shrink-0" />
                    <span className="text-sm font-medium text-[#1A1E3A]">{ing}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Ingredient Evidence */}
            {product.ingredientDetails && product.ingredientDetails.length > 0 && (
              <div className="rounded-2xl border border-[#D4699B]/20 overflow-hidden">
                <div className="bg-[#1A1E3A] px-6 py-4 flex items-center gap-3">
                  <Microscope className="w-5 h-5 text-[#D4699B]" />
                  <div>
                    <p className="text-white font-bold text-sm">성분 과학 & 임상 근거</p>
                    <p className="text-white/50 text-[10px] tracking-widest uppercase">Ingredient Science · Clinical Evidence</p>
                  </div>
                </div>
                <div className="divide-y divide-[#EBEBEB]">
                  {product.ingredientDetails.map((detail, i) => (
                    <div key={i} className="p-6 hover:bg-[#FAF9F8] transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <FlaskConical className="w-4 h-4 text-[#D4699B] shrink-0 mt-0.5" />
                        <p className="font-bold text-[#1A1E3A] text-sm">{detail.name}</p>
                      </div>
                      <div className="ml-7 space-y-2">
                        <div className="flex gap-2">
                          <span className="text-[10px] font-bold text-white bg-[#888] rounded px-1.5 py-0.5 shrink-0 h-fit">출처</span>
                          <p className="text-xs text-[#555] leading-5">{detail.source}</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-[10px] font-bold text-white bg-[#D4699B] rounded px-1.5 py-0.5 shrink-0 h-fit">근거</span>
                          <p className="text-xs text-[#555] leading-5">{detail.evidence}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#FAF9F8] px-6 py-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#888]" />
                  <p className="text-[10px] text-[#888]">제조사 cosmocos[코스모코스] — COSMOCOS LAB 자체 연구 및 외부 임상기관 위탁 시험 결과 기반</p>
                </div>
              </div>
            )}

            {/* Product detail image placeholder */}
            <div className="relative aspect-video bg-[#FAF9F8] rounded-2xl overflow-hidden">
              <Image src={product.image} alt={product.name} fill className="object-contain p-8" />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/20 to-transparent">
                <div>
                  <p className="text-white font-bold text-lg">{product.nameEn}</p>
                  <p className="text-white/80 text-sm">{product.summary}</p>
                </div>
              </div>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-[#FAF9F8] rounded-xl">
                <p className="text-xs text-[#888] mb-1 uppercase tracking-wider">용량</p>
                <p className="font-semibold text-[#1A1E3A]">{product.volume}</p>
              </div>
              <div className="p-4 bg-[#FAF9F8] rounded-xl">
                <p className="text-xs text-[#888] mb-1 uppercase tracking-wider">제조사</p>
                <p className="font-semibold text-[#1A1E3A]">cosmocos (Since 1994)</p>
              </div>
            </div>

            <div className="p-6 border border-[#EBEBEB] rounded-2xl">
              <p className="text-[10px] font-semibold tracking-widest text-[#888] mb-3 uppercase">전성분</p>
              <p className="text-xs text-[#888] leading-7">{product.ingredients}</p>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="section-review" className="mb-16">
          <h2 className="text-lg font-bold mb-6 text-[#1A1E3A]">리뷰 ({productReviews.length})</h2>
          {productReviews.length > 0 ? (
            <div className="space-y-4">
              {productReviews.map((r) => (
                <div key={r.id} className="p-6 border border-[#EBEBEB] rounded-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < r.rating ? "fill-[#D4699B] text-[#D4699B]" : "text-[#EBEBEB]"}`} />
                      ))}
                    </div>
                    <span className="text-xs text-[#888]">{r.date}</span>
                  </div>
                  <p className="text-sm text-[#444] leading-6 mb-2">{r.text}</p>
                  <p className="text-xs text-[#888]">{r.author} · 옵션: {r.option}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center border border-[#EBEBEB] rounded-2xl">
              <p className="text-[#888] text-sm">아직 리뷰가 없습니다. 첫 리뷰를 남겨주세요!</p>
            </div>
          )}
        </section>

        {/* Q&A */}
        <section id="section-qna" className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[#1A1E3A]">Q&A</h2>
            <button className="px-4 py-2 border border-[#1A1E3A] rounded-full text-sm hover:bg-[#1A1E3A] hover:text-white transition-colors">
              질문하기
            </button>
          </div>
          <div className="py-12 text-center border border-[#EBEBEB] rounded-2xl">
            <p className="text-[#888] text-sm">등록된 질문이 없습니다.</p>
          </div>
        </section>

        {/* Shipping */}
        <section id="section-shipping" className="mb-16">
          <h2 className="text-lg font-bold mb-6 text-[#1A1E3A]">배송·교환·반품</h2>
          <div className="space-y-4">
            {[
              { icon: Truck, title: "배송 안내", content: "택배사: CJ대한통운\n배송비: 3,000원 (30,000원 이상 무료)\n출고: 결제 완료 후 1~3 영업일 이내\n도서·산간 지역은 추가 배송비 발생" },
              { icon: RotateCcw, title: "교환·반품 안내", content: "수령 후 7일 이내 교환·반품 가능\n단, 개봉·사용한 제품은 교환·반품 불가\n불량품은 수령 후 30일 이내 무상 처리\n고객센터: 1588-0000" },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-[#EBEBEB] rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <item.icon className="w-4 h-4 text-[#D4699B]" />
                  <p className="font-semibold text-sm text-[#1A1E3A]">{item.title}</p>
                </div>
                <p className="text-sm text-[#555] leading-7 whitespace-pre-line">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-[#FAF9F8] py-12">
          <div className="container-main">
            <h2 className="text-lg font-bold mb-6 text-[#1A1E3A]">함께 구매하면 좋은 상품</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t border-[#EBEBEB] p-3 flex gap-2">
        <button className="flex-1 py-3 bg-[#1A1E3A] text-white font-semibold rounded-2xl flex items-center justify-center gap-2 text-sm">
          <ShoppingBag className="w-4 h-4" />
          장바구니 · {(product.price * qty).toLocaleString()}원
        </button>
        <button className="flex-1 py-3 bg-[#D4699B] text-white font-semibold rounded-2xl text-sm">
          바로구매
        </button>
      </div>
    </div>
  );
}
