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
    return response.data
}

export const editProfileDetails = async (payload) => {
    const token = localStorage.getItem("accessToken");
    console.log(payload, "<><><><><><>");

    const response = await api.post("/auth/editProfileDetails", payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return response.data
}

export const forgotPassword = async (data) => {
    const payload = {
        email: data
    }

    const response = await api.post(
        "/auth/forgotPassword",
        payload
    );

    return response.data;

};
export const resendOtp = async (payload) => {

    const response = await api.post(
        "/auth/forgotPassword",
        payload
    );

    return response.data;

};

export const verifyOtp = async (payload) => {

    const response = await api.post(
        "/auth/verifyOtp",
        payload
    );

    return response.data;

};

export const resetPassword = async (payload) => {

    const response = await api.post(
        "/auth/restPasword",
        payload
    );

    return response.data;

};

export const sendEmailVerificationOtp = async (data) => {
    const payload = {
        email: data
    }
    const token = localStorage.getItem("accessToken");


    const response = await api.post(
        "/auth/sendOtp",
        payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    );

    return response.data;

};

export const verifyEmailOtp = async (payload) => {
    const token = localStorage.getItem("accessToken");

    const response = await api.post(
        "/auth/verifyOtpemail",
        payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    );

    return response.data;

};

export const updatePassword = async (data) => {
    const token = localStorage.getItem("accessToken");
    const payload={
        password:data.currentPassword,
        newPassword:data.newPassword
    }
    const response = await api.post(
        "/auth/updatePassword",
        payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    );

    return response.data;

}