import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulishSans = Mulish({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "TypeSwift",
  description: "Practice typing and improve typing speed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulishSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
