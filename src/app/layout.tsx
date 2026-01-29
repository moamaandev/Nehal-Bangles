import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PWARegister } from "@/components/PWARegister";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nehal Bangles | Premium Traditional Jewelry",
  description:
    "Discover the finest collection of Glass, Gold, and Kundan bangles at Nehal Bangles.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
