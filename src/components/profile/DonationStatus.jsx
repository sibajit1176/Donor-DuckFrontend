import {
    FiDollarSign,
    FiHeart,
    FiFolder,
    FiUsers,
} from "react-icons/fi";

const DonationStats = ({ role, stats }) => {

    // let cards = [];

    // if (role === "USER") {

    //     cards = [
    //         {
    //             title: "Total Donated",
    //             value: `₹${stats.totalAmount}`,
    //             icon: <FiDollarSign size={30} />,
    //             bg: "bg-green-100",
    //             text: "text-green-600",
    //         },
    //         {
    //             title: "Total Donations",
    //             value: stats.totalDonations,
    //             icon: <FiHeart size={30} />,
    //             bg: "bg-red-100",
    //             text: "text-red-500",
    //         },
    //         {
    //             title: "Projects Supported",
    //             value: stats.totalProjects,
    //             icon: <FiFolder size={30} />,
    //             bg: "bg-blue-100",
    //             text: "text-blue-500",
    //         },
    //         {
    //             title: "Charities Supported",
    //             value: stats.totalCharities,
    //             icon: <FiUsers size={30} />,
    //             bg: "bg-yellow-100",
    //             text: "text-yellow-600",
    //         },
    //     ];

    // } else {

    //     cards = [
    //         {
    //             title: "Total Received",
    //             value: `₹${stats.totalReceived}`,
    //             icon: <FiDollarSign size={30} />,
    //             bg: "bg-green-100",
    //             text: "text-green-600",
    //         },
    //         {
    //             title: "Total Donors",
    //             value: stats.totalDonors,
    //             icon: <FiUsers size={30} />,
    //             bg: "bg-blue-100",
    //             text: "text-blue-500",
    //         },
    //         {
    //             title: "Projects",
    //             value: stats.totalProjects,
    //             icon: <FiFolder size={30} />,
    //             bg: "bg-purple-100",
    //             text: "text-purple-600",
    //         },
    //         {
    //             title: "Active Projects",
    //             value: stats.activeProjects,
    //             icon: <FiHeart size={30} />,
    //             bg: "bg-orange-100",
    //             text: "text-orange-600",
    //         },
    //     ];

    // }
    let  cards = [
            {
                title: "Total Donated",
                value: `₹${stats.totalAmount}`,
                icon: <FiDollarSign size={30} />,
                bg: "bg-green-100",
                text: "text-green-600",
            },
            {
                title: "Total Donations",
                value: stats.totalDonations,
                icon: <FiHeart size={30} />,
                bg: "bg-red-100",
                text: "text-red-500",
            },
            {
                title: "Projects Supported",
                value: stats.totalProjects,
                icon: <FiFolder size={30} />,
                bg: "bg-blue-100",
                text: "text-blue-500",
            },
            {
                title: "Charities Supported",
                value: stats.totalCharities,
                icon: <FiUsers size={30} />,
                bg: "bg-yellow-100",
                text: "text-yellow-600",
            },
        ];


    return (
        <div className="grid md:grid-cols-4 gap-6 mt-8">
            {cards.map(card => (
                <div
                    key={card.title}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                >
                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500 text-sm">
                                {card.title}
                            </p>

                            <h2 className="text-3xl font-bold mt-2">
                                {card.value}
                            </h2>

                        </div>

                        <div
                            className={`h-16 w-16 rounded-2xl ${card.bg} ${card.text} flex justify-center items-center`}
                        >
                            {card.icon}
                        </div>

                    </div>

                </div>
            ))}
        </div>
    );
};

export default DonationStats;