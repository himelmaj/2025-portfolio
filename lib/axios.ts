import Axios from 'axios';
import { env } from "@/config/env"

const axios = Axios.create({
    baseURL: `${env.STRAPI_HOST}/api/`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.STRAPI_TOKEN}`,
    },
});

axios.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);


axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default axios;