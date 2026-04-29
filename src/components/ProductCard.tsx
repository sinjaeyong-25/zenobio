"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { type Product } from "@/lib/data";

const badgeColors: Record<string, string> = {
  NEW: "bg-[#1A1E3A] text-white",
  BEST: "bg-[#D4699B] text-white",
  SALE: "bg-[#E45858] text-white",
  "SOLD OUT": "bg-[#888] text-white",
  LIMITED: "bg-[#7B5EA7] text-white",
};

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { id, name, nameEn, summary, price, originalPrice, discountRate, reviewCount, rating, badge, image } = product;

  return (
    <div className="group relative">
      {/* Image */}
      <Link href={`/products/${id}`} className="block relative aspect-square bg-[#FAF9F8] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColors[badge]}`}>
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        <div className="absolute bottom-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            aria-label="관심상품"
            onClick={(e) => { e.preventDefault(); }}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:text-[#E45858] transition-colors"
          >
            <Heart className="w-4 h-4" />
          </button>
          <button
            aria-label="장바구니"
            onClick={(e) => { e.preventDefault(); }}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:text-[#D4699B] transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-3 px-1">
        <Link href={`/products/${id}`}>
          <p className="text-[11px] text-[#D4699B] font-semibold tracking-widest uppercase mb-0.5">{nameEn}</p>
          <p className="text-sm font-medium text-[#1A1A1A] line-clamp-1 hover:text-[#D4699B] transition-colors">{name}</p>
          <p className="text-xs text-[#888] mt-0.5 line-clamp-1">{summary}</p>
        </Link>

        <div className="flex items-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-[#D4699B] text-[#D4699B]" />
          <span className="text-xs text-[#888]">{rating} ({reviewCount.toLocaleString()})</span>
        </div>

        <div className="mt-1.5 flex items-center gap-2 flex-wrap">
          {discountRate && (
            <span className="text-sm font-bold text-[#E45858]">{discountRate}%</span>
          )}
          <span className="text-sm font-bold text-[#1A1A1A]">{price.toLocaleString()}원</span>
          {originalPrice && (
            <span className="text-xs text-[#BBBBBB] line-through">{originalPrice.toLocaleString()}원</span>
          )}
        </div>
      </div>
    </div>
  );
}
