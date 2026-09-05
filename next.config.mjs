/**
 * Static export for GitHub Pages (jumpingjobs/jumpingjobs.com).
 *
 * The site is served from the apex domain via public/CNAME, so basePath is empty.
 * If you ever drop the custom domain and serve from
 * https://jumpingjobs.github.io/jumpingjobs.com/ instead, set
 * NEXT_PUBLIC_BASE_PATH=/jumpingjobs.com at build time and delete public/CNAME.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
