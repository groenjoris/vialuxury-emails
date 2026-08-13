import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // De statische overzichtspagina staat in public/mail-overzicht/. Zonder deze
      // rewrite is alleen /mail-overzicht/index.html bereikbaar en geeft /mail-overzicht een 404.
      { source: "/mail-overzicht", destination: "/mail-overzicht/index.html" },
    ];
  },
};

export default nextConfig;
