import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios';

export interface InternalAxiosRequestConfig<D = any> extends AxiosRequestConfig<D> {
    headers: AxiosRequestHeaders;
}

class CustomAxios {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:9999/",
            timeout: 5000,
        });

        this.axiosInstance.interceptors.request.use(
            (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
                config.headers["content-type"] = "multipart/form-data"
                return config;
            },
            (error) => {
                // Handle any request errors here
                return Promise.reject(error);
            }
        );

        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {
                // Handle any successful response data here
                return response;
            },
            (error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                } else if (error.request) {
                    // The request was made but no response was received
                } else {
                    // Something happened in setting up the request that triggered an Error
                }
                return Promise.reject(error);

            }
        );
    }

    get(url: string, config?: AxiosRequestConfig) {
        return this.axiosInstance.get(url, config);
    }

    post(url: string, data?: any, config?: AxiosRequestConfig) {
        return this.axiosInstance.post(url, data, config);
    }

    put(url: string, data?: any, config?: AxiosRequestConfig) {
        return this.axiosInstance.put(url, data, config);
    }

    patch(url: string, data?: any, config?: AxiosRequestConfig) {
        return this.axiosInstance.patch(url, data, config);
    }

    delete(url: string, config?: AxiosRequestConfig) {
        return this.axiosInstance.delete(url, config);
    }
}

export default CustomAxios;