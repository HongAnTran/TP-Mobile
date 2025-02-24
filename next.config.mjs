/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
  modularizeImports: {
    "react-hook-form": {
      transform: "react-hook-form/{{member}}",
    },
    "framer-motion": {
      transform: "framer-motion/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/(.*).(js|css|woff2|ttf|svg|png|jpg|jpeg|gif|ico|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  }
};

export default nextConfig;
