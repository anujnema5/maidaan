/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'sporteeno.com']
    },

    env : {
        DATABASE_URL : ''
    }
};

export default nextConfig;
