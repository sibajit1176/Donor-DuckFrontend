import api from "../api/axios";

export const adminDashboard = async () => {
    const token = localStorage.getItem("accessToken");

    const response = await api.get("/admin/adminDashBoard", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const charitymanagement=async()=>{
     const token = localStorage.getItem("accessToken");

    const response = await api.get("/admin/getAllcharities", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export const updateCharityStatus=async(data)=>{
     const token = localStorage.getItem("accessToken");

     const payload={
        id:data.id,
        approvalStatus:data.approvalStatus,
        rejectionReason:data.rejectionReason,
     }

    const response = await api.post("/admin/ApproveCharity", payload,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export const getAllUsers=async()=>{
     const token = localStorage.getItem("accessToken");

    const response = await api.get("/admin/getAllUsers", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export const updateUserStatus=async(payload)=>{
     const token = localStorage.getItem("accessToken");

    const response = await api.post("/admin/BlockUser",payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export const getAllDonationHistory=async()=>{
     const token = localStorage.getItem("accessToken");

    const response = await api.get("/admin/donationManagement", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}


