import axios from "axios";
import { useAuth } from "@clerk/clerk-expo";
import { useEffect } from "react";

const API_URL = "http://172.21.225.1:3000/api";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const useApi = () => {
    const {getToken} = useAuth();

    useEffect(() => {
        const interceptor = api.interceptors.request.use(async (config) => {
            const token = await getToken();

            if(token){
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        })

        return ()=> {
            api.interceptors.request.eject(interceptor);
        };
    },[getToken]);
    
    return api;
}

// laptop ip : 172.21.225.1 and legit one is const API_URL = "http://10.41.142.1:3000/api";