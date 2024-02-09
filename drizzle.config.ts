import type { Config } from 'drizzle-kit';
export default {
    schema: 'db/schema/*',
    out: 'db/drizzle',
    driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
    dbCredentials: {
        connectionString: 'postgresql://maidaantech:X3xsGydR6kCa@ep-restless-cloud-a5q12sxn.us-east-2.aws.neon.tech/maidaandb?sslmode=require'
    }
} satisfies Config;