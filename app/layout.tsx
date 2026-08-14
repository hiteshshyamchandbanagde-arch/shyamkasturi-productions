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
  metadataBase: new URL("https://shyamkasturiproductions.com"),
  title: {
    default: "Shyamkasturi Productions | Stories Beyond Boundaries",
    template: "%s | Shyamkasturi Productions",
  },
  description:
    "Pune-based production house working across Feature Films, OTT Originals, Theatre Productions, Music Albums, and Live Events.",
  keywords: [
    "Shyamkasturi Productions",
    "Production House Pune",
    "Feature Films",
    "OTT Originals",
    "Theatre Productions",
    "Music Albums",
    "Live Events",
    "AforAudience",
  ],
  openGraph: {
    title: "Shyamkasturi Productions | Stories Beyond Boundaries",
    description:
      "Pune-based production house working across Feature Films, OTT Originals, Theatre Productions, Music Albums, and Live Events.",
    url: "https://shyamkasturiproductions.com",
    siteName: "Shyamkasturi Productions",
    images: ["/logo-poster.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shyamkasturi Productions | Stories Beyond Boundaries",
    description:
      "Pune-based production house working across Feature Films, OTT Originals, Theatre Productions, Music Albums, and Live Events.",
    images: ["/logo-poster.png"],
  },
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
