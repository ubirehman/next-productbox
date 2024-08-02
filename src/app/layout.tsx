import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/page";


export const metadata: Metadata = {
  title: "RapidSales",
  description: "Your Sales AI Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-gothic-a1 min-h-[100dvh] bg-gray-950'>
        <Header />
        {children}
      </body>
    </html>
  );
}
