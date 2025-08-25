import type { Metadata } from "next";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "./globals.css";

export async function generateMetadata({ params }: { params?: { slug?: string } }): Promise<Metadata> {
  const slug = params?.slug ?? "";
  const title = slug ? decodeURIComponent(slug) : "Fancy Notes";
  const baseUrl = "https://fancy-notes.vercel.app";
  const url = slug ? `${baseUrl}/${slug}` : baseUrl;
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description: "Fancy notes about all kinds of interesting topics.",
    metadataBase: new URL(baseUrl),
    openGraph: {
      url,
      siteName: "Fancy Notes",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}


const logo = <span className="hidden font-bold sm:inline-block">Fancy Notes</span>;
const footer = <Footer>MIT {new Date().getFullYear()} © AREA44.</Footer>;
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
