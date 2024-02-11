/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'sporteeno.com']
    },

    env : {
        DATABASE_URL : 'postgres://postgres.ygjdpdhqehplsrphddwf:Nileshanuj@123.@aws-0-ap-south-1.pooler.supabase.com:5432/postgres'
    }
};

export default nextConfig;
