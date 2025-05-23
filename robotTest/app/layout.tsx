import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{height:"100%"}}>
      <body className={inter.className} style={{background: "linear-gradient(180deg, #1C2949 0%, #030620 100%, #030620 100%)"}}>
        <div >{children}</div>
      </body>
    </html>
  );
}
