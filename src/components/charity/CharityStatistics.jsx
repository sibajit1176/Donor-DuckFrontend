import {
    FiHeart,
    FiUsers,
    FiTarget,
    FiTrendingUp,
    FiDollarSign,
    FiAward,
} from "react-icons/fi";

const StatCard = ({
    title,
    value,
    icon,
    color,
    bg,
    description,
}) => {

    return (

        <div
            className="
                group
                rounded-3xl
                border
                border-gray-100
                bg-white
                p-6
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm font-medium text-gray-500">

                        {title}

                    </p>

                    <h2 className="mt-3 text-3xl font-black text-gray-800">

                        {value}

                    </h2>

                    <p className="mt-2 text-sm text-gray-500">

                        {description}

                    </p>

                </div>

                <div
                    className={`
                        h-16
                        w-16
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        transition
                        group-hover:scale-110
                        ${bg}
                    `}
                >

                    <div className={color}>

                        {icon}

                    </div>

                </div>

            </div>

        </div>

    );

};

const CharityStatistics = ({
    statistics = {},
}) => {

    return (

        <div className="mt-8">

            <div className="mb-6">

                <h2 className="text-3xl font-bold text-gray-800">

                    Charity Statistics

                </h2>

                <p className="mt-2 text-gray-500">

                    Overall performance and fundraising insights.

                </p>

            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                <StatCard
                    title="Funds Raised"
                    value={`₹${Number(
                        statistics.totalRaised || 0
                    ).toLocaleString("en-IN")}`}
                    description="Total successful donations"
                    icon={<FiDollarSign size={30} />}
                    color="text-green-600"
                    bg="bg-green-100"
                />

                <StatCard
                    title="Total Donors"
                    value={statistics.totalDonors || 0}
                    description="People who donated"
                    icon={<FiUsers size={30} />}
                    color="text-blue-600"
                    bg="bg-blue-100"
                />

                <StatCard
                    title="Projects"
                    value={statistics.totalProjects || 0}
                    description="Campaigns created"
                    icon={<FiTarget size={30} />}
                    color="text-purple-600"
                    bg="bg-purple-100"
                />

                <StatCard
                    title="Active Projects"
                    value={statistics.activeProjects || 0}
                    description="Currently accepting donations"
                    icon={<FiTrendingUp size={30} />}
                    color="text-orange-600"
                    bg="bg-orange-100"
                />

                <StatCard
                    title="Completed Projects"
                    value={statistics.completedProjects || 0}
                    description="Successfully completed"
                    icon={<FiAward size={30} />}
                    color="text-emerald-600"
                    bg="bg-emerald-100"
                />

                <StatCard
                    title="Total Donations"
                    value={statistics.totalDonations || 0}
                    description="Successful donation records"
                    icon={<FiHeart size={30} />}
                    color="text-pink-600"
                    bg="bg-pink-100"
                />

            </div>

        </div>

    );

};

export default CharityStatistics;