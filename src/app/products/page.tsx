"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories, type Category, type Product } from "@/lib/data";

type SortKey = "newest" | "popular" | "priceAsc" | "priceDesc" | "reviews";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "newest", label: "신상품순" },
  { value: "popular", label: "인기순" },
  { value: "priceAsc", label: "낮은가격순" },
  { value: "priceDesc", label: "높은가격순" },
  { value: "reviews", label: "리뷰많은순" },
];

function sortProducts(list: Product[], sort: SortKey): Product[] {
  switch (sort) {
    case "popular": return [...list].sort((a, b) => b.rating - a.rating);
    case "priceAsc": return [...list].sort((a, b) => a.price - b.price);
    case "priceDesc": return [...list].sort((a, b) => b.price - a.price);
    case "reviews": return [...list].sort((a, b) => b.reviewCount - a.reviewCount);
    default: return [...list].sort((a, b) => b.id - a.id);
  }
}

export default function ProductListPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [sort, setSort] = useState<SortKey>("newest");
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceMax, setPriceMax] = useState(5000000);

  const filtered = products.filter((p) => {
    if (activeCategory !== "all" && p.category !== activeCategory) return false;
    if (p.price > priceMax) return false;
    return true;
  });

  const sorted = sortProducts(filtered, sort);

  return (
    <div className="container-main py-8 md:py-12">
      {/* Page Header */}
      <div className="mb-8">
        <p className="text-[10px] tracking-widest text-[#D4699B] mb-2 uppercase font-semibold">ZENOBIO PROFESSIONAL</p>
        <h1 className="text-2xl md:text-3xl font-bold text-[#1A1E3A] mb-1">전제품</h1>
        <p className="text-sm text-[#888]">The Science Behind Sculpting — 엑소좀 바이오 사이언스 기반 프리미엄 스킨케어</p>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-1 border-b border-[#EBEBEB] mb-6 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as Category)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-150 ${
              activeCategory === cat.id
                ? "border-[#D4699B] text-[#D4699B]"
                : "border-transparent text-[#888] hover:text-[#1A1E3A]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Filter / Sort Bar */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 px-4 py-2 border border-[#EBEBEB] rounded-full text-sm hover:border-[#D4699B] hover:text-[#D4699B] transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            필터
          </button>
          <span className="text-sm text-[#888]">{sorted.length}개 상품</span>
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="px-4 py-2 border border-[#EBEBEB] rounded-full text-sm bg-white outline-none hover:border-[#D4699B] transition-colors cursor-pointer"
        >
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="mb-6 p-6 bg-[#FAF9F8] rounded-2xl border border-[#EBEBEB]">
          <div className="flex items-center justify-between mb-4">
            <p className="font-semibold text-sm">가격 필터</p>
            <button onClick={() => setFilterOpen(false)} className="text-[#888] hover:text-[#1A1A1A]">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">최대 가격: {priceMax >= 5000000 ? "전체" : priceMax.toLocaleString() + "원"}</p>
            <input
              type="range"
              min={50000}
              max={5000000}
              step={50000}
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="w-full md:w-64 accent-[#D4699B]"
            />
            <div className="flex justify-between text-xs text-[#888] w-full md:w-64 mt-1">
              <span>50,000원</span>
              <span>전체</span>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid */}
      {sorted.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sorted.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-4xl mb-4">🔍</p>
          <p className="text-lg font-medium text-[#1A1A1A] mb-2">검색 결과가 없습니다</p>
          <p className="text-sm text-[#888]">필터 조건을 변경해 보세요.</p>
          <button
            onClick={() => { setActiveCategory("all"); setPriceMax(400000); }}
            className="mt-4 px-6 py-2 border border-[#1A1E3A] rounded-full text-sm hover:bg-[#1A1E3A] hover:text-white transition-colors"
          >
            필터 초기화
          </button>
        </div>
      )}
    </div>
  );
}
