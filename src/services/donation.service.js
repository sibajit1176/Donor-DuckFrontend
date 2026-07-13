import api from "../api/axios"

export const createDonation = async (payload) => {
       const token = localStorage.getItem("accessToken");

       const result = await api.post("/charities/createPayment", payload, {
              headers: {
                     Authorization: `Bearer ${token}`,
              },
       })
       return result.data
}

export const donationStatus = async (payload) => {
       const token = localStorage.getItem("accessToken");
       console.log();
       
       const result = await api.get(`/charities/verifyPayment/${payload}`, {
              headers: {
                     Authorization: `Bearer ${token}`,
              },
       })
       return result.data
}