"use client";

import Link from "next/link";
import { Globe, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1E3A] text-white/70 mt-20">
      {/* Newsletter CTA */}
      <div className="border-b border-white/10">
        <div className="container-main py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg mb-1">뉴스레터 구독</p>
            <p className="text-sm">신제품 소식과 회원 전용 혜택을 가장 먼저 받아보세요.</p>
          </div>
          <form className="flex w-full md:w-auto gap-0" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 md:w-72 px-4 py-3 bg-white/10 border border-white/20 rounded-l-md text-white placeholder:text-white/40 text-sm outline-none focus:border-[#D4699B] transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-[#D4699B] hover:bg-[#B5507E] text-white text-sm font-medium rounded-r-md transition-colors whitespace-nowrap"
            >
              구독하기
            </button>
          </form>
        </div>
      </div>

      <div className="container-main py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Customer Center */}
        <div>
          <p className="text-white font-semibold text-sm tracking-wider mb-4">CUSTOMER CENTER</p>
          <p className="text-2xl font-bold text-white mb-2">0507-1354-2745</p>
          <p className="text-sm leading-7">
            평일 10:00 – 17:00
            <br />
            점심 12:00 – 13:00
            <br />
            토·일·공휴일 휴무
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D4699B] hover:text-[#D4699B] transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" aria-label="YouTube"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D4699B] hover:text-[#D4699B] transition-colors">
              <Play className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Naver Blog"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D4699B] hover:text-[#D4699B] transition-colors text-xs font-bold">
              N
            </a>
          </div>
        </div>

        {/* Company Info */}
        <div className="md:col-span-2">
          <p className="text-[13px] font-semibold tracking-[0.22em] text-white uppercase mb-1">ZEN<span className="text-[#D4699B]">O</span>BIO</p>
          <p className="text-[8px] tracking-[0.35em] text-[#D4699B] uppercase mb-4">The Science Behind Sculpting</p>
          <p className="text-xs leading-7 text-white/50">
            상호명: 제노비오 · 대표: 신재용 · 사업자등록번호: 718-34-01070
            <br />
            주소: 54859 전북특별자치도 전주시 덕진구 만성중앙로59 오케이타워2 6층 612호
            <br />
            제조사: cosmocos[코스모코스] Since 1994
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-xs">
            {[
              { label: "브랜드 스토리", href: "/about" },
              { label: "인증 현황", href: "/certificates" },
              { label: "Science Blog", href: "/blog" },
              { label: "For Professional", href: "/for-professional" },
              { label: "이용약관", href: "/terms" },
              { label: "개인정보처리방침", href: "/privacy" },
              { label: "FAQ", href: "/faq" },
            ].map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[#D4699B] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-white/30">
            © 2025 ZENOBIO PROFESSIONAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
