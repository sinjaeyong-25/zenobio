"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Search, ShoppingBag, Menu, X, ChevronDown, Heart } from "lucide-react";

const gnbMenus = [
  {
    label: "전제품",
    href: "/products",
    sub: [],
  },
  {
    label: "Highcellfit Exo S",
    href: "/products?category=ampoule",
    sub: [
      { label: "Exo S Type I", href: "/products/1" },
      { label: "Exo S Type II", href: "/products/2" },
      { label: "Exo S 세트 (Type I+II)", href: "/products/3" },
    ],
  },
  {
    label: "Highcellfit Slim C",
    href: "/products/4",
    sub: [
      { label: "Slim C 단품", href: "/products/4" },
      { label: "Slim C + Exo S 콤보", href: "/products/7" },
    ],
  },
  {
    label: "루시덤 크림 라인",
    href: "/products?category=cream",
    sub: [
      { label: "루시덤 O₂ 리페어 크림", href: "/products/5" },
      { label: "하이셀핏 루시덤 크림", href: "/products/6" },
    ],
  },
  {
    label: "세트 기획",
    href: "/products?category=set",
    sub: [
      { label: "Exo S 세트 (I+II)", href: "/products/3" },
      { label: "Slim C + Exo S 콤보", href: "/products/7" },
    ],
  },
  {
    label: "Vita.Zet",
    href: "/products/8",
    sub: [
      { label: "Vita.Zet 상세", href: "/products/8" },
      { label: "For Professional", href: "/for-professional" },
    ],
  },
  {
    label: "브랜드",
    href: "/about",
    sub: [
      { label: "브랜드 스토리", href: "/about" },
      { label: "인증 현황", href: "/certificates" },
      { label: "Science Blog", href: "/blog" },
      { label: "For Professional", href: "/for-professional" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-[#1A1E3A] text-white text-xs">
        <div className="container-main flex justify-end items-center gap-4 py-2">
          <Link href="/login" className="hover:text-[#D4699B] transition-colors">로그인</Link>
          <span className="text-white/30">|</span>
          <Link href="/login?mode=signup" className="hover:text-[#D4699B] transition-colors">회원가입</Link>
          <span className="text-white/30">|</span>
          <Link href="/mypage/orders" className="hover:text-[#D4699B] transition-colors">주문조회</Link>
          <span className="text-white/30">|</span>
          <Link href="/mypage/wishlist" className="hover:text-[#D4699B] transition-colors">관심상품</Link>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-md" : "border-b border-[#EBEBEB]"
        }`}
      >
        <div className="container-main flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center leading-none gap-0.5">
            <Image
              src="/images/logo.png"
              alt="ZENOBIO"
              width={120}
              height={28}
              className="h-7 w-auto object-contain"
              priority
            />
            <span className="text-[7px] tracking-[0.35em] text-[#AAAAAA] uppercase text-center">Professional</span>
          </Link>

          {/* GNB - Desktop */}
          <nav className="hidden lg:flex items-center gap-0">
            {gnbMenus.map((menu, i) => (
              <div
                key={menu.label}
                className="relative group"
                onMouseEnter={() => setActiveMenu(i)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={menu.href}
                  className="flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium text-[#1A1A1A] hover:text-[#D4699B] transition-colors whitespace-nowrap"
                >
                  {menu.label}
                  {menu.sub.length > 0 && (
                    <ChevronDown className="w-3 h-3 opacity-40" />
                  )}
                </Link>
                {menu.sub.length > 0 && activeMenu === i && (
                  <div className="absolute top-full left-0 bg-white border border-[#EBEBEB] shadow-lg rounded-b-xl min-w-[200px] py-2 z-50">
                    {menu.sub.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-5 py-2.5 text-sm text-[#555] hover:text-[#D4699B] hover:bg-[#FAF9F8] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Utils */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:text-[#D4699B] transition-colors"
              aria-label="검색"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link href="/mypage/wishlist" className="p-2 hover:text-[#D4699B] transition-colors hidden md:flex" aria-label="관심상품">
              <Heart className="w-5 h-5" />
            </Link>
            <Link
              href="/cart"
              className="p-2 hover:text-[#D4699B] transition-colors relative"
              aria-label="장바구니"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-[#D4699B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>
            <button
              className="lg:hidden p-2 hover:text-[#D4699B] transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="메뉴"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col">
          <div className="container-main flex items-center gap-4 h-20 border-b border-[#EBEBEB]">
            <Search className="w-5 h-5 text-[#888]" />
            <input
              ref={searchRef}
              type="text"
              placeholder="제품명, 성분, 효능을 검색하세요"
              className="flex-1 text-lg outline-none placeholder:text-[#BBBBBB]"
            />
            <button onClick={() => setSearchOpen(false)} className="p-2">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="container-main pt-8">
            <p className="text-xs text-[#888] mb-3 font-medium tracking-wider uppercase">인기 검색어</p>
            <div className="flex flex-wrap gap-2">
              {["엑소좀", "Exo S", "Slim C", "Vita.Zet", "루시덤", "리페어 크림", "비타젯"].map(
                (kw) => (
                  <button
                    key={kw}
                    className="px-3 py-1.5 border border-[#EBEBEB] rounded-full text-sm hover:border-[#D4699B] hover:text-[#D4699B] transition-colors"
                  >
                    {kw}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white flex flex-col">
            <div className="flex items-center justify-between px-6 h-16 border-b border-[#EBEBEB]">
              <Image src="/images/logo.png" alt="ZENOBIO" width={100} height={24} className="h-6 w-auto" />
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-4 px-6 py-4 border-b border-[#EBEBEB] text-sm">
              <Link href="/login" onClick={() => setMobileOpen(false)} className="hover:text-[#D4699B]">로그인</Link>
              <Link href="/login?mode=signup" onClick={() => setMobileOpen(false)} className="hover:text-[#D4699B]">회원가입</Link>
            </div>
            <nav className="flex-1 overflow-y-auto">
              {gnbMenus.map((menu) => (
                <div key={menu.label}>
                  <Link
                    href={menu.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-6 py-4 font-medium border-b border-[#F5F5F5] hover:text-[#D4699B] transition-colors"
                  >
                    {menu.label}
                  </Link>
                  {menu.sub.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center pl-10 pr-6 py-3 text-sm text-[#666] border-b border-[#FAF9F8] hover:text-[#D4699B] transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
