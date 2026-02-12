/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/api/backend/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 
          (process.env.NODE_ENV === 'development' 
            ? 'http://localhost:8000' 
            : 'https://potomac-analyst-workbench-production.up.railway.app')}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
