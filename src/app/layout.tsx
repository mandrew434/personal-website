import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Malone | AI Strategy & Technology Consulting",
  description: "Executive Chief of Staff and AI Strategist bridging the gap between Information Systems and Business Strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-zinc-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
