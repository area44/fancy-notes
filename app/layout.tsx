import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";
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
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head />
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
