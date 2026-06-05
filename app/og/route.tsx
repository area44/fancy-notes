import { generateOGImage } from "fumadocs-ui/og";
import { source } from "@/lib/source";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return generateOGImage({
    title: title ?? "Fancy Notes",
    description:
      description ?? "Fancy notes about all kinds of interesting topics.",
    site: "Fancy Notes",
  });
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
  }));
}
