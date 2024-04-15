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
        <link
          rel="icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAuElEQVR4Ac3SIQyDMBRF0Zt5b2bQkyjUNG52Boe3SLzAz1Uil6Aq8Qq3pK4+waG7F8CsJbPbNZCetOlPyulLv0bWDhGK9tHVQIpcfVh7QoSyjdQLYnQhuJyzkTYRghZz1BTCeIQGVVRVmRw7SRfbZJBeiGyRqrmPUYGZw9aFCFHk3RiUhw+krOsbikGaRWj2DSAsIrxrrUW1+iHCdRRvB6dPn15IumUhHaWyfpndUKZzKvb+5/UlvQEsnXa52IgEOwAAAABJRU5ErkJggg=="
        />
      </head>
      <body className={inter?.className + " dark"}>{children}</body>
    </html>
  );
}
