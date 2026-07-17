import {
    FiClock,
    FiDollarSign,
} from "react-icons/fi";

const DonationHistory = ({ donations = [] }) => {

    return (

       <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl">

    {/* Header */}

    <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-8 py-6">

        <h2 className="text-2xl font-bold text-white">
            Donation History
        </h2>

        <p className="text-green-100 mt-1">
            Every contribution received for your charity.
        </p>

    </div>

    <div className="max-h-[520px] overflow-auto scrollbar-hide">

        <table className="w-full">

            <thead className="sticky top-0 bg-gray-50 z-20">

                <tr className="text-gray-600 uppercase text-xs tracking-wider">

                    <th className="px-6 py-4 text-left">
                        Donor
                    </th>

                    <th className="px-6 py-4 text-left">
                        Project
                    </th>

                    <th className="px-6 py-4 text-left">
                        Amount
                    </th>

                    <th className="px-6 py-4 text-left">
                        Message
                    </th>

                    <th className="px-6 py-4 text-left">
                        Payment Time
                    </th>

                </tr>

            </thead>

            <tbody>

                {donations.length === 0 ? (

                    <tr>

                        <td
                            colSpan={5}
                            className="py-24 text-center"
                        >

                            <div className="flex flex-col items-center">

                                <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">

                                    <FiDollarSign
                                        size={34}
                                        className="text-green-600"
                                    />

                                </div>

                                <h3 className="mt-5 text-xl font-bold text-gray-700">

                                    No Donations Yet

                                </h3>

                                <p className="mt-2 text-gray-500">

                                    Your donation history will appear here.

                                </p>

                            </div>

                        </td>

                    </tr>

                ) : (

                    donations.map((donation, index) => (

                        <tr
                            key={donation.id}
                            className={`
                                border-t
                                transition
                                hover:bg-green-50/70
                                ${
                                    index % 2 === 0
                                        ? "bg-white"
                                        : "bg-gray-50/40"
                                }
                            `}
                        >

                            {/* Donor */}

                            <td className="px-6 py-5">

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            h-12
                                            w-12
                                            rounded-full
                                            bg-gradient-to-r
                                            from-green-500
                                            to-emerald-600
                                            text-white
                                            font-bold
                                            flex
                                            items-center
                                            justify-center
                                            shadow
                                        "
                                    >

                                        {donation.user.name
                                            ?.charAt(0)
                                            .toUpperCase()}

                                    </div>

                                    <div>

                                        <p className="font-semibold text-gray-800">

                                            {donation.user.name}

                                        </p>

                                        <p className="text-sm text-gray-500">

                                            {donation.user.email}

                                        </p>

                                    </div>

                                </div>

                            </td>

                            {/* Project */}

                            <td className="px-6 py-5">

                                <span
                                    className="
                                        rounded-full
                                        bg-blue-100
                                        text-blue-700
                                        px-3
                                        py-1
                                        text-sm
                                        font-medium
                                    "
                                >

                                    {donation.project.title}

                                </span>

                            </td>

                            {/* Amount */}

                            <td className="px-6 py-5">

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

                            <td className="px-6 py-5">

                                <div
                                    className="
                                        max-w-xs
                                        rounded-xl
                                        bg-gray-100
                                        px-4
                                        py-3
                                        text-sm
                                        text-gray-700
                                        line-clamp-2
                                    "
                                >

                                    {donation.message ||
                                        "No message added"}

                                </div>

                            </td>

                            {/* Time */}

                            <td className="px-6 py-5">

                                <div className="flex items-start gap-3">

                                    <div className="mt-1">

                                        <FiClock className="text-gray-400" />

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

    );

};

export default DonationHistory;