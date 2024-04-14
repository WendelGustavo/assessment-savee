import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAVEE - Assessment test",
  description: "SAVEE - Assessment test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata?.title?.toString()}</title>
        <meta name="description" content={metadata?.description || ""} />
        <link rel="icon" href="./public/img/savee-logo.png" />
      </head>
      <body className={inter?.className + " dark"}>{children}</body>
    </html>
  );
}