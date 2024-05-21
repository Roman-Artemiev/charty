/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.cache = false;
        return config;
    },
    images: {
        domains: ['media.rawg.io'],
    },
};

export default nextConfig;
