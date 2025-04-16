import { env } from "@/config/env";

const strapi = async (url: string, query?: string) => {

    const fullUrl = `${env.STRAPI_HOST}/api/${url}${query ? `?${query}` : ''}`;

    const res = await fetch(fullUrl, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
        }
    });

    if (!res.ok) throw new Error('Failed to fetch data');

    return res.json();

}

export default strapi;