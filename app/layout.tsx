import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WHITE — Worship Him In The Evening",
  description:
    "Worship Him In The Evening (WHITE) is a global gospel worship movement uniting believers across nations to encounter God, grow in Christ, and illuminate the world.",
  openGraph: {
    title: "WHITE — Worship Him In The Evening",
    description:
      "Worship Him In The Evening (WHITE) is a global gospel worship movement uniting believers across nations to encounter God, grow in Christ, and illuminate the world.",
    images: ["/hero.jpg"], // We'll copy this next
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
