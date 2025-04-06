import { NextConfig } from 'next';

import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            }
        ],
    },
    devIndicators: false,

    experimental: {
        viewTransition: true
    }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);