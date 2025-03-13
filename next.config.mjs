/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.jp', // ここは文字列で指定
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com', // ここも文字列で指定
      },
    ],
  },
};

export default nextConfig;
