import axios from "axios";

const api = axios.create({
    baseURL: "https://donor-duck1-6dqi8mnka-brother-hood2.vercel.app/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default api;