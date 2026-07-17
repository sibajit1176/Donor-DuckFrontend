import {
    FiDollarSign,
    FiHeart,
    FiCheckCircle,
    FiClock,
    FiXCircle,
    FiRotateCcw,
} from "react-icons/fi";

const StatCard = ({
    title,
    value,
    icon,
    color,
    bg,
}) => {

    return (

        <div
            className="
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-6
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
            "
        >

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm text-gray-500">

                        {title}

                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-gray-800">

                        {value}

                    </h3>

                </div>

                <div
                    className={`
                        h-16
                        w-16
                        rounded-2xl
                        flex
                        items-center
                        justify-center
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

const DonationStatistics = ({
    statistics,
}) => {

    return (

        <div className="grid xl:grid-cols-6 md:grid-cols-3 gap-6">

            <StatCard
                title="Total Donations"
                value={statistics.totalDonations}
                icon={<FiHeart size={28} />}
                color="text-pink-600"
                bg="bg-pink-100"
            />

            <StatCard
                title="Total Amount"
                value={`₹${Number(
                    statistics.totalAmount || 0
                ).toLocaleString("en-IN")}`}
                icon={<FiDollarSign size={28} />}
                color="text-green-600"
                bg="bg-green-100"
            />

            <StatCard
                title="Successful"
                value={statistics.success}
                icon={<FiCheckCircle size={28} />}
                color="text-emerald-600"
                bg="bg-emerald-100"
            />

            <StatCard
                title="Pending"
                value={statistics.pending}
                icon={<FiClock size={28} />}
                color="text-yellow-600"
                bg="bg-yellow-100"
            />
                        <StatCard
                title="Failed"
                value={statistics.failed}
                icon={<FiXCircle size={28} />}
                color="text-red-600"
                bg="bg-red-100"
            />

            <StatCard
                title="Refunded"
                value={statistics.refunded}
                icon={<FiRotateCcw size={28} />}
                color="text-purple-600"
                bg="bg-purple-100"
            />

        </div>

    );

};

export default DonationStatistics;