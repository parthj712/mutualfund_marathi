import UpperNavbar from "@/Componenets/UpperNavbar/UpperNavbar";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { Poppins, Noto_Sans_Devanagari, Mukta } from "next/font/google";
import NavigationBar from "@/Componenets/NavigationBar/NavigationBar";
import HeaderWrapper from "@/Componenets/Header/HeaderWrapper";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="mr" className={`${poppins.variable} ${notoSans.variable} ${mukta.variable}`}>
      <body>
        <ThemeRegistry>

          <HeaderWrapper />

          {children}
          </ThemeRegistry>
      </body>
    </html>
  );
}
