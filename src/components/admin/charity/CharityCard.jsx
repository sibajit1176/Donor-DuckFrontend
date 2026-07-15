import {
    FiArrowRight,
    FiCheckCircle,
    FiClock,
    FiFlag,
    FiTarget,
    FiTrendingUp,
    FiXCircle,
} from "react-icons/fi";

const statusStyle = {
    PENDING: {
        bg: "bg-yellow-100",
        text: "text-yellow-700",
        icon: <FiClock size={14} />,
    },
    APPROVED: {
        bg: "bg-green-100",
        text: "text-green-700",
        icon: <FiCheckCircle size={14} />,
    },
    REJECTED: {
        bg: "bg-red-100",
        text: "text-red-700",
        icon: <FiXCircle size={14} />,
    },
};

const CharityCard = ({ charity, onView }) => {

    const goal = Number(charity.goalAmount || 0);

    const raised = Number(charity.currentAmount || 0);

    const progress =
        goal > 0
            ? Math.min((raised / goal) * 100, 100)
            : 0;

    return (

        <div
            className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-gray-100
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
            "
        >

            {/* Cover */}

            <div className="relative">

                <img
                    src={
                        charity.coverImage ||
                        "https://placehold.co/800x400?text=Charity"
                    }
                    alt=""
                    className="w-full h-48 object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Status */}

                <div className="absolute top-4 right-4">

                    <span
                        className={`
                            flex
                            items-center
                            gap-2
                            px-3
                            py-2
                            rounded-full
                            text-xs
                            font-semibold
                            backdrop-blur-md
                            ${statusStyle[charity.approvalStatus].bg}
                            ${statusStyle[charity.approvalStatus].text}
                        `}
                    >

                        {statusStyle[charity.approvalStatus].icon}

                        {charity.approvalStatus}

                    </span>

                </div>

            </div>

            {/* Body */}

            <div className="relative px-6 pb-6">

                {/* Logo */}

                <div className="absolute -top-12 left-6">

                    <img
                        src={
                            charity.logo ||
                            "https://placehold.co/120?text=Logo"
                        }
                        alt=""
                        className="
                            h-24
                            w-24
                            rounded-3xl
                            object-cover
                            border-4
                            border-white
                            shadow-xl
                            bg-white
                        "
                    />

                </div>

                <div className="pt-16">

                    {/* Name */}

                    <h2 className="text-xl font-bold text-gray-800 line-clamp-2">

                        {charity.organizationName}

                    </h2>

                    {/* Category */}

                    <div className="flex items-center gap-2 mt-3">

                        <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-xs font-semibold">

                            {charity.category}

                        </span>

                    </div>

                    {/* Description */}

                    <p className="mt-4 text-sm text-gray-500 line-clamp-3 leading-6">

                        {charity.description}

                    </p>

                    {/* Registration */}

                    <div className="flex items-center gap-2 mt-5 text-sm text-gray-600">

                        <FiFlag className="text-green-600" />

                        <span className="truncate">

                            {charity.registrationNumber}

                        </span>

                    </div>

                    {/* Progress */}

                    <div className="mt-6">

                        <div className="flex justify-between text-sm font-medium">

                            <span className="flex items-center gap-2 text-gray-600">

                                <FiTrendingUp />

                                Raised

                            </span>

                            <span>

                                ₹{raised.toLocaleString("en-IN")}

                            </span>

                        </div>

                        <div className="w-full h-3 rounded-full bg-gray-100 mt-3 overflow-hidden">

                            <div
                                style={{
                                    width: `${progress}%`,
                                }}
                                className="
                                    h-full
                                    rounded-full
                                    bg-gradient-to-r
                                    from-green-500
                                    to-emerald-600
                                "
                            />

                        </div>

                        <div className="flex justify-between mt-3 text-sm">

                            <span className="flex items-center gap-2 text-gray-600">

                                <FiTarget />

                                Goal

                            </span>

                            <span className="font-semibold">

                                ₹{goal.toLocaleString("en-IN")}

                            </span>

                        </div>

                    </div>

                    {/* Button */}

                    <button
                        onClick={() => onView(charity)}
                        className="
                            mt-7
                            w-full
                            h-12
                            rounded-2xl
                            bg-gradient-to-r
                            from-green-600
                            to-emerald-600
                            text-white
                            font-semibold
                            flex
                            items-center
                            justify-center
                            gap-3
                            hover:gap-5
                            transition-all
                            duration-300
                        "
                    >

                        View Details

                        <FiArrowRight size={18} />

                    </button>

                </div>

            </div>

        </div>

    );

};

export default CharityCard;