import {
    FiDollarSign,
    FiTarget,
    FiLayers,
    FiTrendingUp,
} from "react-icons/fi";

const CharityOverviewCards = ({
    charity,
    stats,
}) => {

    const cards = [

        {
            title: "Total Raised",
            value: `₹${stats.totalRaised}`,
            icon: FiDollarSign,
        },

        {
            title: "Goal Amount",
            value: `₹${charity.goalAmount}`,
            icon: FiTarget,
        },

        {
            title: "Projects",
            value: stats.totalProjects,
            icon: FiLayers,
        },

        {
            title: "Total Donations",
            value: stats.totalDonations,
            icon: FiTrendingUp,
        },

    ];

    return (

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

            {cards.map((card) => (

                <div
                    key={card.title}
                    className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 transition"
                >

                    <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center">

                        <card.icon
                            size={28}
                            className="text-green-600"
                        />

                    </div>

                    <h3 className="text-gray-500 mt-4">

                        {card.title}

                    </h3>

                    <h2 className="text-3xl font-bold mt-2">

                        {card.value}

                    </h2>

                </div>

            ))}

        </div>

    );

};

export default CharityOverviewCards;