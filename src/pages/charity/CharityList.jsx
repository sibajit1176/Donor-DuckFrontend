import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import CharityHeader from "../../components/charity/CharityHeader";
import CharityCard from "../../components/charity/CharityCard";
import CharitySkeleton from "../../components/charity/CharitySkeleton";
import EmptyCharity from "../../components/charity/EmptyCharity";
import RegisterCharityModal from "../../components/charity/RegisterCharityModal";

import {
    getAllCharity,
    getCharityProfile,
    registerCharity,
} from "../../services/charity.service";
import { useAuth } from "../../hooks/useAuth";


const CharityList = () => {

    const navigate = useNavigate();

    const {isLoggedIn}=useAuth()

    const [charities, setCharities] = useState([]);

    const [charityProfile, setCharityProfile] = useState(null);

    const [loading, setLoading] = useState(true);

    const [registerLoading, setRegisterLoading] = useState(false);

    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const [formData, setFormData] = useState({
        organizationName: "",
        registrationNumber: "",
        description: "",
        category: "",
        website: "",
        logo: null,
    });

    useEffect(() => {
        fetchInitialData();
    }, []);
    useEffect(() => {
    if (isLoggedIn) {
        fetchMyCharity();
    }
}, [isLoggedIn]);

    const fetchInitialData = async () => {

        try {

            setLoading(true);

            await fetchCharities();

            if (isLoggedIn) {
                await fetchMyCharity();
            }

        } finally {

            setLoading(false);

        }

    };

    const fetchCharities = async () => {

        try {

            const result = await getAllCharity();

            setCharities(result.charities);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to load charities."
            );

        }

    };

    const fetchMyCharity = async () => {

        try {

            const result = await getCharityProfile();

            setCharityProfile(result.charityProfile);

        } catch (error) {

            if (error.response?.status === 404) {

                setCharityProfile(null);

                return;

            }

            console.log(error);

        }

    };

    const handleChange = (e) => {

        const { name, value, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!formData.organizationName.trim())
            return toast.error("Enter organization name.");

        if (!formData.registrationNumber.trim())
            return toast.error("Enter registration number.");

        if (!formData.description.trim())
            return toast.error("Enter description.");

        if (!formData.category.trim())
            return toast.error("Select category.");

        try {

            setRegisterLoading(true);

            const result = await registerCharity(formData);

            toast.success(result.message);

            setIsRegisterOpen(false);

            setFormData({
                organizationName: "",
                registrationNumber: "",
                description: "",
                category: "",
                website: "",
                logo: null,
            });

            await fetchCharities();

            await fetchMyCharity();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Registration failed."
            );

        } finally {

            setRegisterLoading(false);

        }

    };

    return (

        <div className="pt-6 h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide bg-gradient-to-b from-green-50 to-white">

            <div className="max-w-7xl mx-auto px-6 pb-10">

                <CharityHeader
                    isAuthenticated={isLoggedIn}
                    hasCharity={!!charityProfile}
                    onRegister={() => {

                        if (!isLoggedIn) {
                            navigate("/login");
                            return;
                        }

                        setIsRegisterOpen(true);

                    }}
                    onMyCharity={() => navigate("/mycharities")}
                />

                {loading ? (

                    <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {Array.from({ length: 8 }).map((_, i) => (
                            <CharitySkeleton key={i} />
                        ))}

                    </div>

                ) : charities.length === 0 ? (

                    <EmptyCharity />

                ) : (

                    <div className="grid grid-cols-1 gap-6">

    {charities.map((charity) => (

        <CharityCard
            key={charity.id}
            charity={charity}
        />

    ))}

</div>

                )}

            </div>

            <RegisterCharityModal
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                loading={registerLoading}
            />

        </div>

    );

};

export default CharityList;