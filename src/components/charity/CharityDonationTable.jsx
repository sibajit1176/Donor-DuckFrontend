import {
    FiClock,
    FiDollarSign,
    FiHeart,
    FiTrendingUp,
    FiUsers,
} from "react-icons/fi";

const CharityDonationTable = ({
    donations = [],
}) => {

    const totalAmount = donations.reduce(
        (sum, item) => sum + Number(item.amount || 0),
        0
    );

    return (

        <section
            className="
                overflow-hidden
                rounded-[32px]
                border
                border-gray-100
                bg-white
                shadow-xl
            "
        >

            {/* Header */}

            <div
                className="
                    bg-gradient-to-r
                    from-green-700
                    via-emerald-600
                    to-teal-600
                    p-8
                    text-white
                "
            >

                <div className="flex flex-wrap items-center justify-between gap-6">

                    <div>

                        <h2 className="text-3xl font-bold">

                            Recent Donations

                        </h2>

                        <p className="mt-2 text-green-100">

                            Every contribution helps create a lasting impact.

                        </p>

                    </div>

                    <div className="flex flex-wrap gap-4">

                        <div
                            className="
                                rounded-2xl
                                bg-white/15
                                backdrop-blur-xl
                                px-6
                                py-4
                                border
                                border-white/20
                            "
                        >

                            <div className="flex items-center gap-2 text-green-100">

                                <FiUsers />

                                Total Donors

                            </div>

                            <h3 className="mt-2 text-3xl font-black">

                                {donations.length}

                            </h3>

                        </div>

                        <div
                            className="
                                rounded-2xl
                                bg-white/15
                                backdrop-blur-xl
                                px-6
                                py-4
                                border
                                border-white/20
                            "
                        >

                            <div className="flex items-center gap-2 text-green-100">

                                <FiTrendingUp />

                                Total Raised

                            </div>

                            <h3 className="mt-2 text-3xl font-black">

                                ₹{totalAmount.toLocaleString("en-IN")}

                            </h3>

                        </div>

                    </div>

                </div>

            </div>

            {/* Table */}

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-slate-50 border-b border-gray-100">

                        <tr className="text-sm font-semibold text-gray-600">

                            <th className="px-8 py-5 text-left">

                                Donor

                            </th>

                            <th className="px-8 py-5 text-left">

                                Project

                            </th>

                            <th className="px-8 py-5 text-left">

                                Donation

                            </th>

                            <th className="px-8 py-5 text-left">

                                Message

                            </th>

                            <th className="px-8 py-5 text-left">

                                Date & Time

                            </th>

                        </tr>

                    </thead>

                </table>

                <div className="max-h-[520px] overflow-y-auto scrollbar-hide">

                    <table className="min-w-full">

                        <tbody>

                            {donations.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan={5}
                                        className="py-24"
                                    >

                                        <div className="flex flex-col items-center justify-center">

                                            <div
                                                className="
                                                    flex
                                                    h-24
                                                    w-24
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-green-100
                                                "
                                            >

                                                <FiHeart
                                                    size={40}
                                                    className="text-green-600"
                                                />

                                            </div>

                                            <h3 className="mt-6 text-2xl font-bold text-gray-700">

                                                No Donations Yet

                                            </h3>

                                            <p className="mt-3 max-w-md text-center leading-7 text-gray-500">

                                                Once supporters start contributing,
                                                their donations will appear here in
                                                real time.

                                            </p>

                                        </div>

                                    </td>

                                </tr>

                            ) : (

                                donations.map((donation) => (
                                                                    <tr
                                    key={donation.id}
                                    className="
                                        border-b
                                        border-gray-100
                                        transition-all
                                        duration-300
                                        hover:bg-gradient-to-r
                                        hover:from-green-50
                                        hover:to-white
                                    "
                                >

                                    {/* Donor */}

                                    <td className="px-8 py-6">

                                        <div className="flex items-center gap-4">

                                            <div
                                                className="
                                                    flex
                                                    h-14
                                                    w-14
                                                    items-center
                                                    justify-center
                                                    rounded-2xl
                                                    bg-gradient-to-br
                                                    from-green-500
                                                    to-emerald-600
                                                    text-lg
                                                    font-bold
                                                    text-white
                                                    shadow-lg
                                                "
                                            >

                                                {(donation.donorName || "A")
                                                    .charAt(0)
                                                    .toUpperCase()}

                                            </div>

                                            <div>

                                                <h4 className="font-semibold text-gray-800">

                                                    {donation.donorName}

                                                </h4>

                                                <span className="text-sm text-gray-500">

                                                    Supporter

                                                </span>

                                            </div>

                                        </div>

                                    </td>

                                    {/* Project */}

                                    <td className="px-8 py-6">

                                        <span
                                            className="
                                                inline-flex
                                                rounded-full
                                                bg-blue-100
                                                px-4
                                                py-2
                                                text-sm
                                                font-semibold
                                                text-blue-700
                                            "
                                        >

                                            {donation.projectName || "General Donation"}

                                        </span>

                                    </td>

                                    {/* Amount */}

                                    <td className="px-8 py-6">

                                        <span
                                            className="
                                                inline-flex
                                                items-center
                                                gap-2
                                                rounded-full
                                                bg-green-100
                                                px-4
                                                py-2
                                                font-bold
                                                text-green-700
                                            "
                                        >

                                            <FiDollarSign />

                                            ₹
                                            {Number(
                                                donation.amount
                                            ).toLocaleString("en-IN")}

                                        </span>

                                    </td>

                                    {/* Message */}

                                    <td className="px-8 py-6 max-w-sm">

                                        <p className="line-clamp-2 text-gray-600">

                                            {donation.message || "No message provided."}

                                        </p>

                                    </td>

                                    {/* Date */}

                                    <td className="px-8 py-6 whitespace-nowrap">

                                        <div className="flex items-start gap-3">

                                            <div
                                                className="
                                                    flex
                                                    h-10
                                                    w-10
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    bg-gray-100
                                                    text-gray-500
                                                "
                                            >

                                                <FiClock />

                                            </div>

                                            <div>

                                                <p className="font-medium text-gray-700">

                                                    {new Date(
                                                        donation.createdAt
                                                    ).toLocaleDateString(
                                                        "en-IN",
                                                        {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric",
                                                        }
                                                    )}

                                                </p>

                                                <p className="text-sm text-gray-500">

                                                    {new Date(
                                                        donation.createdAt
                                                    ).toLocaleTimeString(
                                                        "en-IN",
                                                        {
                                                            hour: "2-digit",
                                                            minute: "2-digit",
                                                        }
                                                    )}

                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        )}

                        </tbody>

                    </table>

                </div>

            </div>

        </section>

    );

};

export default CharityDonationTable;