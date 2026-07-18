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

export const projectProfileDetails = async (id) => {
    const token = localStorage.getItem("accessToken");

    const result = await api.post(`/charities/projects/getProjectById/${id}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return result.data
}

export const editprojectProfileDetails = async (payload) => {
    const token = localStorage.getItem("accessToken");

    const result = await api.post(`/charities/projects/editProjectProfile`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return result.data
}

export const deleteproject = async (id) => {
    const token = localStorage.getItem("accessToken");

    const result = await api.post(`/charities/projects/deleteProjectById/${id}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return result.data
}

export const getprojectsForAllUser = async () => {
    const result = await api.get('/charities/projects/getAllProjectforAllUser')
    return result.data
}

export const uploadImage = async (projectId,formData) => {
    const token = localStorage.getItem("accessToken");

    const response = await api.put(
         `/charities/projects/uploadCoverImage/${projectId}`,
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