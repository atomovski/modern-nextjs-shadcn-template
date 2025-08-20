/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async headers() {
   return [
     {
       source: '/:path*',
       headers: [
         {
           key: 'Cross-Origin-Resource-Policy',
           value: 'cross-origin'
         },
         {
           key: 'Cross-Origin-Embedder-Policy', 
           value: 'require-corp'
         },
         {
           key: 'Cross-Origin-Opener-Policy',
           value: 'unsafe-none'
         }
       ]
     }
   ]
 },
};

module.exports = nextConfig;
