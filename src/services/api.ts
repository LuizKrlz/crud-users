import axios, { AxiosRequestConfig } from "axios";
import { baseURL, token } from "../config/api.config";

const api = axios.create({
    baseURL,
    headers: {
        Authoriazion: `Token ${token}`,
        "Access-Control-Allow-Origin": "*",
    },
});

export default api;
