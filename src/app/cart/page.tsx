"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { useState } from "react";
import { products } from "@/lib/data";

const initialCart = [
  { product: products[0], option: "5ml × 5vial", qty: 1 },
  { product: products[4], option: "60ml", qty: 2 },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQty = (i: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item, idx) =>
        idx === i ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (i: number) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== i));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const shipping = subtotal >= 30000 ? 0 : 3000;
  const total = subtotal + shipping;

  return (
    <div className="container-main py-10">
      <div className="flex items-center gap-2 mb-8">
        <ShoppingBag className="w-5 h-5 text-[#D4699B]" />
        <h1 className="text-2xl font-bold text-[#1A1E3A]">장바구니</h1>
        <span className="text-sm text-[#888]">({cartItems.length})</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="py-20 text-center">
          <ShoppingBag className="w-12 h-12 text-[#EBEBEB] mx-auto mb-4" />
          <p className="text-lg font-medium text-[#1A1E3A] mb-2">장바구니가 비어 있습니다.</p>
          <Link href="/products" className="inline-flex items-center gap-1 text-sm text-[#D4699B] mt-4">
            쇼핑 계속하기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#EBEBEB]">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked className="accent-[#D4699B]" /> 전체선택
              </label>
              <button className="text-xs text-[#888] hover:text-[#E45858]">선택삭제</button>
            </div>
            {cartItems.map((item, i) => (
              <div key={i} className="flex gap-4 p-4 border border-[#EBEBEB] rounded-2xl">
                <div className="relative w-20 h-20 bg-[#FAF9F8] rounded-xl overflow-hidden shrink-0">
                  <Image src={item.product.image} alt={item.product.name} fill className="object-contain p-1.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-[#D4699B] font-semibold tracking-widest uppercase mb-0.5">{item.product.nameEn}</p>
                  <p className="text-sm font-semibold text-[#1A1E3A] truncate">{item.product.name}</p>
                  <p className="text-xs text-[#888] mt-0.5">{item.option}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-[#EBEBEB] rounded-lg overflow-hidden">
                      <button onClick={() => updateQty(i, -1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-[#FAF9F8] transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(i, 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-[#FAF9F8] transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm font-bold text-[#1A1E3A]">
                      {(item.product.price * item.qty).toLocaleString()}원
                    </p>
                  </div>
                </div>
                <button onClick={() => removeItem(i)} className="text-[#888] hover:text-[#E45858] shrink-0 self-start">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="border border-[#EBEBEB] rounded-2xl p-6 sticky top-24">
              <h2 className="font-bold text-[#1A1E3A] mb-5">결제 예상 금액</h2>
              <div className="space-y-3 text-sm mb-5">
                <div className="flex justify-between text-[#555]">
                  <span>상품금액</span>
                  <span>{subtotal.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-[#555]">
                  <span>배송비</span>
                  <span className={shipping === 0 ? "text-[#D4699B] font-medium" : ""}>
                    {shipping === 0 ? "무료" : `${shipping.toLocaleString()}원`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-[#888] bg-[#FAF9F8] p-2.5 rounded-lg">
                    {(30000 - subtotal).toLocaleString()}원 더 구매 시 무료배송
                  </p>
                )}
              </div>
              <div className="border-t border-[#EBEBEB] pt-4 mb-5">
                <div className="flex justify-between font-bold text-[#1A1E3A]">
                  <span>총 결제금액</span>
                  <span className="text-lg">{total.toLocaleString()}원</span>
                </div>
              </div>
              <button className="w-full py-4 bg-[#D4699B] hover:bg-[#B5507E] text-white font-bold rounded-2xl transition-colors text-sm">
                주문하기 ({cartItems.length}개)
              </button>
              <Link href="/products"
                className="block text-center mt-3 text-sm text-[#888] hover:text-[#D4699B] transition-colors">
                쇼핑 계속하기
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
