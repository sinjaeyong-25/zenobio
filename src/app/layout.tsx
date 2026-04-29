import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickMenu from "@/components/QuickMenu";

export const metadata: Metadata = {
  title: {
    default: "ZENOBIO — The Science Behind Sculpting",
    template: "%s | ZENOBIO",
  },
  description:
    "제노비오 프로페셔널. 엑소좀 바이오 사이언스를 기반으로 한 프리미엄 스킨케어 브랜드. Highcellfit Exo S · Slim C · Lucidum O₂ Repair Cream.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        {/* Pretendard — premium Korean variable font */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* Cormorant Garamond — editorial Latin serif for brand accents */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <QuickMenu />
      </body>
    </html>
  );
}
