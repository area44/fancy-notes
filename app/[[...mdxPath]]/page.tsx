import type { Metadata } from "next";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import type { FC } from "react";
import { useMDXComponents as getMDXComponents } from "@/mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

type PageProps = Readonly<{
  params: Promise<{
    mdxPath: string[];
  }>;
}>;

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  const title = metadata.title || "Fancy Notes";
  const baseUrl = "https://fancy-notes.vercel.app";
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: metadata.openGraph?.images || [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...metadata.twitter,
      card: "summary_large_image",
      images: metadata.twitter?.images || [ogImage],
    },
  };
}

const Wrapper = getMDXComponents({}).wrapper as FC<any>;

const Page: FC<PageProps> = async (props) => {
  const params = await props.params;
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath);
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
};

export default Page;
