import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Recenturesoft",
  description: "Recenturesoft Infotech Pvt Ltd is a Leading Software Development Company in India that Offers the Best Custom Software Development, eCommerce Website Development, Mobile App Development and SEO Services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
