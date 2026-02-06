import type {MetadataRoute} from "next";
import {SITE_URL} from "@/config/config";

function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/',
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}

export default robots;
