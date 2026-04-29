"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown, MessageCircle } from "lucide-react";

export default function QuickMenu() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed right-4 bottom-6 z-40 flex flex-col gap-2 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* KakaoTalk */}
      <a
        href="#"
        aria-label="카카오 상담"
        className="w-11 h-11 bg-[#FEE500] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-5 h-5 text-[#3A1D1D]" />
      </a>

      {/* Scroll Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="맨 위로"
        className="w-11 h-11 bg-white border border-[#E8E4DF] rounded-full flex items-center justify-center shadow-md hover:border-[#C4A882] hover:text-[#C4A882] transition-colors"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Scroll Bottom */}
      <button
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
        aria-label="맨 아래로"
        className="w-11 h-11 bg-white border border-[#E8E4DF] rounded-full flex items-center justify-center shadow-md hover:border-[#C4A882] hover:text-[#C4A882] transition-colors"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
}
