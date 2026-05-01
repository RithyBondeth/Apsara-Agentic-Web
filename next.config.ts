import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Brotli / gzip compression in production
  compress: true,

  // Don't leak server info
  poweredByHeader: false,

  // Tree-shake large barrel packages automatically
  experimental: {
    optimizePackageImports: ["lucide-react", "gsap"],
  },

  // Image optimisation
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year for immutable assets
  },

  // Production source maps waste bytes — disable them
  productionBrowserSourceMaps: false,
};

export default nextConfig;
