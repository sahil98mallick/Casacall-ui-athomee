/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com","randomuser.me", "athomee-admin.dedicateddevelopers.us"],
    
  },
};

module.exports = {
  ...nextConfig,
};
