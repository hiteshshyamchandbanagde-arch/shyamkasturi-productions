import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shyamkasturi Productions",
  description:
    "Feature Films, OTT Originals, Theatre Productions, Music Albums and Live Events.",
  keywords: [
    "Shyamkasturi Productions",
    "Production House Pune",
    "Feature Films",
    "OTT Originals",
    "Theatre Productions",
    "Music Albums",
    "Live Events",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <Navbar />
  {children}
</body>
    </html>
  );
}
