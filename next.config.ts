import type { NextConfig } from "next";
import redirects from "./redirects.json";

const nextConfig: NextConfig = {
  // Old .html addresses (e.g. /artwork.html) permanently redirect to the clean URLs (/artwork).
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
