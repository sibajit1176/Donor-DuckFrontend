import axios from "axios";

const api = axios.create({
    baseURL: "https://donor-duck.vercel.app/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default api;