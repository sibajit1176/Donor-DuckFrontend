import api from "../api/axios";


export const createProject = async (payload) => {
    const token = localStorage.getItem("accessToken");

    const result = await api.post("/charities/projects/createProject", payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return result.data
}