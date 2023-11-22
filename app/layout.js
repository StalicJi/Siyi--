import { Public_Sans } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/layout/main-navigation";
import Footer from "@/components/layout/footer";

const inter = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "錫儀企業有限公司",
  description:
    "錫儀公司致力製造功能與美感兼具的製品，包含不銹鋼門窗、自動門、帷幕牆、扶手鍛造製品、店舖展示架。透過完整生產線與專業的施工團隊，從產品製造到工程施作，提供顧客完善服務。未來期待本於職人精神，持續為每一位使用者提供優質產品。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh_Hant">
      <body className={inter.className}>
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
