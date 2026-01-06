import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header"; // <--- Import

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
        <SmoothScroll>
            <Header /> {/* <--- AJOUTE ÇA ICI */}
            {children}
        </SmoothScroll>
      </body>
    </html>
  );
}