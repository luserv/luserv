import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withnextIntlPlugin = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
};

export default withnextIntlPlugin(nextConfig);