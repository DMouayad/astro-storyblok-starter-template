
import type { RobotsTxtOptions } from 'astro-robots-txt';

const robotsConfig: RobotsTxtOptions = {
    policy: [
        {
            userAgent: '*',
            disallow: [],
        },
    ],
    sitemapBaseFileName: 'sitemap-index',
};

export default robotsConfig;