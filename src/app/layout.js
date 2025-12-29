import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { Poppins, Noto_Sans_Devanagari, Mukta } from "next/font/google";
import HeaderWrapper from "@/Componenets/Header/HeaderWrapper";
import Footer from "@/Componenets/Footer/Footer";
import CopyrightBar from "@/Componenets/CopyrightBar/CopyrightBar";
import RouteLoader from "@/Componenets/Loader/RouteLoader";
import TopProgressBar from "@/Componenets/Loader/TopProgressBar";
import "../styles/nprogress-custom.css";
import PageTransition from "@/Componenets/Common/ScrollReveal/PageTransition";
import FinanceChatBot from "@/Componenets/FloatingChatAIBot/FinanceChatBot";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["devanagari", "latin"],
  variable: "--font-poppins",
});

const notoSans = Noto_Sans_Devanagari({
  weight: ["400", "500", "700"],
  subsets: ["devanagari"],
  variable: "--font-noto",
});

const mukta = Mukta({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["devanagari"],
  variable: "--font-mukta",
});

export const metadata = {
  title: "MutualFundMarathi - ThakurFinserve",
  description: "MutualFundMarathi - ThakurFinserve",
  icons: {
    icon: "/Tlogo.ico", // 👈 change here
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="mr"
      className={`${poppins.variable} ${notoSans.variable} ${mukta.variable}`}
    >
      <body>
        <div className="global-bg">
          {/* LEFT BIG ₹ */}
          <div className="bg-left-rs" />

          {/* RIGHT SMALL IMAGE */}
          <div className="bg-right-image" />

          <ThemeRegistry>
            <PageTransition>
              <TopProgressBar />
              <RouteLoader />
              <HeaderWrapper />

              <main className="site-content">
                {children}
                <FinanceChatBot />
              </main>

              <Footer />
              <CopyrightBar />
            </PageTransition>
          </ThemeRegistry>
        </div>
      </body>
    </html>
  );
}
