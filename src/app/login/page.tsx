"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold tracking-widest text-[#1A1E3A] uppercase">
            ZEN<span className="text-[#D4699B]">◉</span>BIO
          </Link>
          <p className="text-xs text-[#888] mt-2 tracking-widest uppercase">THE SCIENCE BEHIND SCULPTING</p>
        </div>

        {/* Tab */}
        <div className="flex border border-[#EBEBEB] rounded-2xl overflow-hidden mb-8">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${mode === "login" ? "bg-[#1A1E3A] text-white" : "text-[#888] hover:text-[#1A1E3A]"}`}
          >
            로그인
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${mode === "signup" ? "bg-[#1A1E3A] text-white" : "text-[#888] hover:text-[#1A1E3A]"}`}
          >
            회원가입
          </button>
        </div>

        {mode === "login" ? (
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">이메일</label>
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full px-4 py-3 border border-[#EBEBEB] rounded-xl text-sm outline-none focus:border-[#D4699B] transition-colors"
              />
            </div>
            <div className="relative">
              <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">비밀번호</label>
              <input
                type={showPw ? "text" : "password"}
                placeholder="비밀번호"
                className="w-full px-4 py-3 border border-[#EBEBEB] rounded-xl text-sm outline-none focus:border-[#D4699B] transition-colors pr-12"
              />
              <button type="button" onClick={() => setShowPw(!showPw)}
                className="absolute right-3 bottom-3 text-[#888] hover:text-[#D4699B]">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-[#888] cursor-pointer">
                <input type="checkbox" className="accent-[#D4699B]" /> 자동로그인
              </label>
              <div className="flex gap-3 text-[#888]">
                <button type="button" className="hover:text-[#D4699B]">아이디 찾기</button>
                <span>|</span>
                <button type="button" className="hover:text-[#D4699B]">비밀번호 찾기</button>
              </div>
            </div>
            <button type="submit"
              className="w-full py-3.5 bg-[#1A1E3A] hover:bg-[#D4699B] text-white font-semibold rounded-2xl transition-colors duration-200 text-sm">
              로그인
            </button>

            {/* Social Login */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#EBEBEB]" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-xs text-[#888]">소셜 로그인</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button type="button"
                className="flex items-center justify-center gap-2 py-3 border border-[#EBEBEB] rounded-xl text-sm hover:border-[#D4699B] transition-colors">
                <span className="text-base">🟡</span> 카카오
              </button>
              <button type="button"
                className="flex items-center justify-center gap-2 py-3 border border-[#EBEBEB] rounded-xl text-sm hover:border-[#D4699B] transition-colors">
                <span className="text-base font-bold text-green-600">N</span> 네이버
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="p-4 bg-[#F5DCE9] rounded-xl text-sm text-[#D4699B] font-medium text-center">
              🎁 지금 가입하면 첫 구매 10% 할인 쿠폰 증정!
            </div>
            {[
              { label: "이름", type: "text", placeholder: "이름을 입력하세요" },
              { label: "이메일", type: "email", placeholder: "이메일 주소" },
              { label: "비밀번호", type: "password", placeholder: "비밀번호 (8자 이상)" },
              { label: "연락처", type: "tel", placeholder: "010-0000-0000" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-2">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3 border border-[#EBEBEB] rounded-xl text-sm outline-none focus:border-[#D4699B] transition-colors"
                />
              </div>
            ))}
            <div className="space-y-2 text-xs">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#D4699B] mt-0.5" />
                <span className="text-[#555]">[필수] 이용약관 동의</span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#D4699B] mt-0.5" />
                <span className="text-[#555]">[필수] 개인정보 수집·이용 동의</span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#D4699B] mt-0.5" />
                <span className="text-[#888]">[선택] 마케팅 정보 수신 동의</span>
              </label>
            </div>
            <button type="submit"
              className="w-full py-3.5 bg-[#D4699B] hover:bg-[#B5507E] text-white font-semibold rounded-2xl transition-colors duration-200 text-sm">
              회원가입
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
