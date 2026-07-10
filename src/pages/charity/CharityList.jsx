import { useNavigate } from "react-router-dom";

import CharityHeader from "../../components/charity/CharityHeader";
import CharityCard from "../../components/charity/CharityCard";
import CharitySkeleton from "../../components/charity/CharitySkeleton";
import EmptyCharity from "../../components/charity/EmptyCharity";
import RegisterCharityModal from "../../components/charity/RegisterCharityModal";
import { useState } from "react";

const charities = [
    {
        id: 1,
        name: "Smile Foundation",
        description:
            "Helping children through education and healthcare.",
        totalProjects: 12,
        logo: "https://placehold.co/600x350",
    },
    {
        id: 2,
        name: "Food For All",
        description:
            "Providing meals to people in need across the country.",
        totalProjects: 8,
        logo: "https://placehold.co/600x350",
    },
    {
        id: 3,
        name: "Hope NGO",
        description:
            "Supporting women and children through empowerment programs.",
        totalProjects: 5,
        logo: "https://placehold.co/600x350",
    },
    {
        id: 4,
        name: "Hope NGO",
        description:
            "Supporting women and children through empowerment programs.",
        totalProjects: 5,
        logo: "https://placehold.co/600x350",
    },
];

const CharityList = () => {

    const navigate = useNavigate();

    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        charityName: "",
        registrationNumber: "",
        description: "",
        category: "",
        website: "",
        logo: null,
    });
    // API will decide this later
    const hasCharity = false;
    const handleChange = (e) => {

    const { name, value, files } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
    }));
};

const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        setLoading(true);

        console.log(formData);

        // API call here

        setIsRegisterOpen(false);

    } finally {

        setLoading(false);

    }
};

    return (

        <div className="pt-6 h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide bg-gradient-to-b from-green-50 to-white overflow-y-auto">

            <div className="max-w-7xl mx-auto px-6 pb-10">

                <CharityHeader
                    hasCharity={hasCharity}
                    onRegister={() => setIsRegisterOpen(true)}
                    onMyCharity={() => navigate("/my-charity")}
                />

                {loading ? (

                    <div className="grid lg:grid-cols-3 gap-8">

                        {Array.from({ length: 6 }).map((_, i) => (

                            <CharitySkeleton key={i} />

                        ))}

                    </div>

                ) : charities.length === 0 ? (

                    <EmptyCharity />

                ) : (

                    <div className="grid grid-cols-4 gap-4">
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
                loading={loading}
            />

        </div>

    );

};

export default CharityList;