// app/layout.tsx
import type { Metadata } from "next";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "./globals.css";

export async function generateMetadata({
  params,
}: {
  params?: { slug?: string };
}): Promise<Metadata> {
  const title = params?.slug
    ? decodeURIComponent(params.slug)
    : "Fancy Notes - All kinds of interesting topics.";

  return {
    metadataBase: new URL("https://fancy-notes.vercel.app"),
    generator: "Next.js",
    applicationName: "Fancy Notes",
    appleWebApp: { title: "Fancy Notes" },
    title: {
      default: "Fancy Notes - All kinds of interesting topics.",
      template: "%s | Fancy Notes",
    },
    description: "Fancy notes about all kinds of interesting topics.",
    icons: { icon: "/favicon.ico" },
    openGraph: {
      siteName: "Fancy Notes",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      site: "https://fancy-notes.vercel.app",
      card: "summary_large_image",
      images: [`/og?title=${encodeURIComponent(title)}`],
    },
    other: { "msapplication-TileColor": "#fff" },
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
