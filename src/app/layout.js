import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Toaster } from "@/components/ui/sonner";
import Partners from "@/components/common/Partners";

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
  description:
    "Recenturesoft Infotech Pvt Ltd is a Leading Software Development Company in India that Offers the Best Custom Software Development, eCommerce Website Development, Mobile App Development and SEO Services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="sidebar">
      <body className={`${outfit.variable} ${inter.variable} antialiased  `}>
        <Header />
        {children}
        <Partners />
        <Footer />
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              backgroundColor: `#fff`,
              boxShadow: "1px 1px 4px #000000",
              border: "1px solid #2181c2",
              fontSize: "15px",
              fontWeight: "500",
              color: "#2181c2",
              padding: "10px",
              borderRadius: "0px",
            },
          }}
        />
      </body>
    </html>
  );
}
