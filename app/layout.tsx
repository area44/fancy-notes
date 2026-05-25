import type { Metadata } from "next";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Fancy Notes",
    default: "Fancy Notes",
  },
  description: "Fancy notes about all kinds of interesting topics.",
  metadataBase: new URL("https://fancy-notes.vercel.app"),
};

const logo = (
  <span className="hidden font-bold sm:inline-block">Fancy Notes</span>
);
const footer = (
  <Footer suppressHydrationWarning>
    MIT {new Date().getFullYear()} © AREA44.
  </Footer>
);
const navbar = <Navbar logo={logo} />;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/AREA44/fancy-notes/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
