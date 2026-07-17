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
    console.log(id,"========");
    
    const result = await api.get(`/charities/getCharityProfileDetailsforAllUser/${id}`)
    return result.data
}