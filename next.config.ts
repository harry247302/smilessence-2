import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const isAnalyze = process.env.ANALYZE === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  
  images: {
  domains: ['luminix-assets.vercel.app', 'res.cloudinary.com'],
  formats: ['image/webp'],
},


  eslint: {
    ignoreDuringBuilds: false,
  },

  typescript: {
    ignoreBuildErrors: false,
  },
};

export default isAnalyze
  ? withBundleAnalyzer({ enabled: true })(nextConfig)
  : nextConfig;
