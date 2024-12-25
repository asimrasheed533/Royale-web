import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Add the external image domain here
  },
  // Add other configurations here
};
module.exports = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};
export default nextConfig;
