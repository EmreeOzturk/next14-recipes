import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BgGradient from "@/components/BgGradient";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Recipes App",
  description: "Share your favorite recipes with the community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <BgGradient />
        <main className="max-w-7xl mx-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
