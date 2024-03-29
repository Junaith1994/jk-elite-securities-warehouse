import axios from "axios";

const axiosPrivate = axios.create();

// Request iterceptors
axiosPrivate.interceptors.request.use( (config) => {
    // Do something before request is sent
    if(!config?.headers?.authorization) {
        config.headers.authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    }
    console.log(config);
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

export default axiosPrivate;