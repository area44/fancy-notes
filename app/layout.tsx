import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Fancy Notes",
    default: "Fancy Notes",
  },
  description: "Fancy notes about all kinds of interesting topics.",
  metadataBase: new URL("https://fancy-notes.vercel.app"),
};

export default function Layout({ children }: { children: ReactNode }) {
  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        {adClient && (
          <Script
            id="adsense"
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
