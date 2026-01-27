import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
// Import du contexte de langue
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nina Lemoine | Data Portfolio",
  description: "Data Analyst & Scientist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider> {/* <--- ON OUVRE LE CONTEXTE DE LANGUE ICI */}
            <SmoothScroll>
                <Header />
                {children}
            </SmoothScroll>
        </LanguageProvider> {/* <--- ON FERME LE CONTEXTE ICI */}
      </body>
    </html>
  );
}