import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["fumadocs-ui"],
  typedRoutes: true,
  experimental: {
    useTypeScriptCli: true,
  },
};

export default withMDX(config);
