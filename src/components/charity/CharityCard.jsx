import {
    FiUsers,
    FiArrowRight,
    FiMapPin,
    FiFolder,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

const CharityCard = ({ charity }) => {

    const navigate = useNavigate();

    return (

        <div
            onClick={() => navigate(`/charities/details/${charity.id}`)}
            className="
                group
                flex
                cursor-pointer
                overflow-hidden
                rounded-3xl
                border
                border-gray-100
                bg-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
            "
        >

            {/* Logo */}

            <div className="relative w-72 flex-shrink-0">

                <img
                    src={
                        charity.coverImage ||
                        "https://placehold.co/500x350?text=Charity"
                    }
                    alt={charity.name}
                    className="h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">

                    Verified

                </div>

            </div>

            {/* Content */}

            <div className="flex flex-1 flex-col justify-between p-8">

                <div>

                    <h2 className="text-3xl font-bold text-gray-800">

                        {charity.name}

                    </h2>

                    <p className="mt-4 leading-7 text-gray-600 line-clamp-3">

                        {charity.description}

                    </p>

                </div>

                <div className="mt-8 flex items-center justify-between">

                    <div className="flex flex-wrap gap-6">

                        <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2 text-green-700">

                            <FiFolder />

                            <span className="font-medium">

                                {charity.totalProjects} Projects

                            </span>

                        </div>

                        <div className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2 text-blue-700">

                            <FiUsers />

                            <span className="font-medium">

                                Active Charity

                            </span>

                        </div>

                        {charity.city && (

                            <div className="flex items-center gap-2 rounded-xl bg-orange-50 px-4 py-2 text-orange-700">

                                <FiMapPin />

                                <span>

                                    {charity.city}

                                </span>

                            </div>

                        )}

                    </div>

                    <button
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-green-600
                            px-6
                            py-3
                            font-semibold
                            text-white
                            transition
                            group-hover:bg-green-700
                        "
                    >

                        View Details

                        <FiArrowRight className="transition group-hover:translate-x-1" />

                    </button>

                </div>

            </div>

        </div>

    );

};

export default CharityCard;