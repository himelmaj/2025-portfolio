import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { env } from './config/env';

const protocol = env.STRAPI_HOST.startsWith('https') ? 'https' : 'http';
const hostname = env.STRAPI_HOST

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: protocol,
                hostname: hostname,
            },
        ],
    },
    devIndicators: false,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);