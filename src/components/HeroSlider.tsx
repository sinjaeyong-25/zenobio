"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    tag: "ZENOBIO PROFESSIONAL",
    headline: "피부과·에스테틱\n전문가가 선택한 브랜드",
    sub: "THE SCIENCE BEHIND SCULPTING — 엑소좀 바이오 사이언스",
    cta: "제품 라인업 보기",
    href: "/products",
    image: "/images/products/exos-set-pink.png",
    bg: "from-[#FDF6FA] to-[#F9EEF4]",
    trustBadge: "에스테틱 전문가 추천 1위",
  },
  {
    id: 2,
    tag: "SIGNATURE AMPOULE",
    headline: "Highcellfit Exo S\n엑소좀 바이오 앰플",
    sub: "Radiant Glow · Crystal Bright · Luminous Skin",
    cta: "Exo S 보기",
    href: "/products/1",
    image: "/images/products/exos-marble.png",
    bg: "from-[#F8F5FD] to-[#F0EBF9]",
    trustBadge: "피부과 협진 임상 검증",
  },
  {
    id: 3,
    tag: "PROFESSIONAL CREAM",
    headline: "루시덤 O₂ 리페어 크림\n피부에 산소를 더하다",
    sub: "Ganoderma Lucidum 1,400ppm · For Sensitive Skin",
    cta: "크림 라인 보기",
    href: "/products/5",
    image: "/images/products/lucidum-cream-main.jpg",
    bg: "from-[#F0F4FA] to-[#E8EFF8]",
    trustBadge: "에스테틱샵 실사용 인증",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 bg-gradient-to-br ${s.bg} transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Content: 중앙 정렬 */}
      <div className="relative z-10 container-main">
        <div className="flex flex-col items-center text-center py-14 md:py-20 lg:py-24">
          {/* Trust Badge — typographic only, no icon */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-5 h-px bg-[#D4699B]" />
            <p className="text-[10px] tracking-[0.2em] text-[#D4699B] uppercase font-medium">
              {slide.trustBadge}
            </p>
            <span className="block w-5 h-px bg-[#D4699B]" />
          </div>

          {/* Tag */}
          <p className="text-[9px] tracking-[0.3em] text-[#AAAAAA] uppercase font-medium mb-4">
            {slide.tag}
          </p>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-[3.75rem] font-bold text-[#1A1E3A] leading-[1.18] mb-5 whitespace-pre-line" style={{ letterSpacing: "-0.03em" }}>
            {slide.headline}
          </h1>

          {/* Sub — Cormorant Garamond for Latin accent text */}
          <p className="text-sm md:text-base text-[#888] mb-8 max-w-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "1.05rem", letterSpacing: "0.01em" }}>
            {slide.sub}
          </p>

          {/* CTA */}
          <Link
            href={slide.href}
            className="inline-flex items-center gap-3 px-9 py-3.5 bg-[#1A1E3A] hover:bg-[#D4699B] text-white text-[11px] tracking-[0.15em] font-medium uppercase transition-colors duration-300 rounded-full mb-10"
          >
            {slide.cta}
            <ChevronRight className="w-4 h-4" />
          </Link>

          {/* Product Image (centered) */}
          <div className="relative w-full max-w-xs md:max-w-sm h-56 md:h-72 lg:h-80 mx-auto">
            {slides.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src={s.image}
                  alt={s.headline.replace("\n", " ")}
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-contain drop-shadow-xl"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors"
        aria-label="이전"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors"
        aria-label="다음"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`슬라이드 ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-6 h-2 bg-[#D4699B]" : "w-2 h-2 bg-[#1A1E3A]/20 hover:bg-[#1A1E3A]/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
