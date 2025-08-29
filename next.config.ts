import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const isAnalyze = process.env.ANALYZE === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  
  images: {
  domains: ['luminix-assets.vercel.app', 'res.cloudinary.com','https://cmsone.nmpinfotech.com','http://localhost:1337'],
  formats: ['image/webp'],
  unoptimized:true,

},


  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default isAnalyze
  ? withBundleAnalyzer({ enabled: true })(nextConfig)
  : nextConfig;
