import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Would you rather",
  description: "Would you rather please star it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <link rel="shortcut icon" href="fav.svg" type="image/x-icon" />
        <body className={inter.className}>
          <div className="scrolling-image animated-background ">
          <Navbar/>
          {children}</div></body>
      </html>
    </SessionWrapper>
  );
}
