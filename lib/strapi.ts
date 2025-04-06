const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

export const query = async (url: string) => {
    const res = await fetch(`${STRAPI_HOST}/api/${url}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${STRAPI_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`Error fetching data: ${res.statusText}`);
    }

    return res.json();
}