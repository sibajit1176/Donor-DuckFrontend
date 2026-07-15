import { FiTrendingUp } from "react-icons/fi";

const DashboardCard = ({
    title,
    value,
    icon,
    color = "bg-green-600",
    growth = "+12%",
}) => {
    

    return (

        <div
            className="
                relative
                overflow-hidden
                bg-white
                rounded-2xl
                shadow-lg
                border
                border-gray-100
                p-6
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
            "
        >

            {/* Background Circle */}

            <div
                className={`
                    absolute
                    -right-10
                    -top-10
                    h-36
                    w-36
                    rounded-full
                    opacity-10
                    ${color}
                `}
            />

            {/* Top */}

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-gray-500 text-sm">

                        {title}

                    </p>

                    <h2 className="text-4xl font-bold mt-3 text-gray-800">

                        {value}

                    </h2>

                </div>

                <div
                    className={`
                        h-16
                        w-16
                        rounded-2xl
                        text-white
                        text-3xl
                        flex
                        items-center
                        justify-center
                        shadow-lg
                        ${color}
                    `}
                >

                    {icon}

                </div>

            </div>

            {/* Bottom */}

            <div className="flex justify-between items-center mt-8">

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        text-green-600
                        font-semibold
                    "
                >

                    <FiTrendingUp />

                    {growth}

                </div>

                <span className="text-sm text-gray-400">

                    Since last month

                </span>

            </div>

            {/* Bottom Border */}

            <div
                className={`
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-full
                    ${color}
                `}
            />

        </div>

    );

};

export default DashboardCard;