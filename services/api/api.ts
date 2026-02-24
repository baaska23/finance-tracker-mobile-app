import axios from "axios"

const api = axios.create({
    baseURL: process.env.BACKEND_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    },
})

api.interceptors.request.use((config) => {
    // const token = getToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API error:", error.response?.data || error)
        return Promise.reject(error)
    }
)

export default api