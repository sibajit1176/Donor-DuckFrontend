import api from "../api/axios"

export const registerCharity = async (payload) => {
    const token = localStorage.getItem("accessToken");

    const result = await api.post("/charities/registerCharity", payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return result.data
}

export const getAllCharity = async () => {
    const result = await api.get("/charities/getAllCharity")
    return result.data
}

export const getCharityProfile = async () => {
    const token = localStorage.getItem("accessToken");
    const result = await api.get("/charities/getcharityProfile", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return result.data
}

export const getCharityProfileAllDetails = async () => {
    const token = localStorage.getItem("accessToken");
    const result = await api.get("/charities/getcharityProfileAllDetails", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return result.data
}
export const updateCharityProfile = async (payload) => {
    const token = localStorage.getItem("accessToken");
    const result = await api.post("/charities/editcharityProfile",payload ,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return result.data
}

export const getCharityProfileAllDetailsforAlluser = async (id) => {    
    const result = await api.get(`/charities/getCharityProfileDetailsforAllUser/${id}`)
    return result.data
}

export const uploadcharityLogoImage = async (formData) => {
    const token = localStorage.getItem("accessToken");

    const response = await api.put(
        "/charities/charityLogo-image",
        formData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};

export const uploadcharityCoverImage = async (formData) => {
    const token = localStorage.getItem("accessToken");

    const response = await api.put(
        "/charities/charityCover-image",
        formData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
};