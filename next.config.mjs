/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.cache = false;
        return config;
    },
    env: {
        url: process.env.API_URL,
        key: process.env.API_KEY,
    },
    images: {
        domains: ['media.rawg.io'],
    },
};

export default nextConfig;