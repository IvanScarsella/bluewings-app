import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blue Wings | Official Website",
  description: "Welcome to the official website of Blue Wings, featuring music, concerts, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${quicksand.variable} antialiased bg-gradient-to-b from-black to-gray-900 text-gray-900`}>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="mt-16">{children}</main>
      </body>
    </html>
  );
}
