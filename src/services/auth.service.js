import api from "../api/axios"

export const registerUser = async (data) => {
    const payload = {
        name: data.name,
        email: data.email,
        password: data.password
    }
    const response = await api.post('/auth/register', payload)
    return response.data
}

export const loginUser = async (payload) => {
    const res = await api.post('/auth/login', payload)
    return res.data
}
export const logoutUser = async () => {
    const token = localStorage.getItem("accessToken");

    const res = await api.post(
        "/auth/logout",
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data;
};

export const refreshToken = async () => {
    const response = await api.post("/auth/refresh-token");
    return response.data;
}

export const getProfileDetails = async () => {
    const token = localStorage.getItem("accessToken");

    const response = await api.post("/auth/getProfileDetails", {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
