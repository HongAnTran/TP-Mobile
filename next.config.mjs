/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: false,
  
		removeConsole: process.env.NODE_ENV === "production" ? true : false,
	
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
