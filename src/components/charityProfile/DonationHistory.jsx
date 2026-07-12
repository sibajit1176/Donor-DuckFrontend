import {
    FiClock,
    FiDollarSign,
} from "react-icons/fi";

const DonationHistory = ({ donations = [] }) => {

    return (

        <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">

            <div className="mb-5">

                <h2 className="text-2xl font-bold text-gray-800">

                    Donation History

                </h2>

                <p className="text-gray-500 mt-1">

                    Donations received for your charity.

                </p>

            </div>

            <div className="rounded-2xl border overflow-hidden">

                <table className="w-full">

                    <thead className="bg-green-600 text-white sticky top-0 z-20">

                        <tr>

                            <th className="p-4 text-left">
                                Donor
                            </th>

                            <th className="p-4 text-left">
                                Project
                            </th>

                            <th className="p-4 text-left">
                                Amount
                            </th>

                            <th className="p-4 text-left">
                                Message
                            </th>

                            <th className="p-4 text-left">
                                Time
                            </th>

                        </tr>

                    </thead>

                </table>

                <div className="max-h-[420px] overflow-y-auto scrollbar-hide">

                    <table className="w-full">

                        <tbody>

                            {donations.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan={5}
                                        className="text-center py-12 text-gray-500"
                                    >

                                        No donations received yet.

                                    </td>

                                </tr>

                            ) : (

                                donations.map((donation) => (

                                    <tr
                                        key={donation.id}
                                        className="border-b hover:bg-green-50"
                                    >

                                        <td className="p-4 font-medium">

                                            {donation.userName}

                                        </td>

                                        <td className="p-4">

                                            {donation.projectName}

                                        </td>

                                        <td className="p-4">

                                            <span className="inline-flex items-center gap-1 font-semibold text-green-700">

                                                <FiDollarSign />

                                                {donation.amount}

                                            </span>

                                        </td>

                                        <td className="p-4 max-w-xs truncate">

                                            {donation.message || "-"}

                                        </td>

                                        <td className="p-4 whitespace-nowrap">

                                            <div className="flex items-center gap-2 text-gray-500">

                                                <FiClock />

                                                {new Date(
                                                    donation.createdAt
                                                ).toLocaleString()}

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

};

export default DonationHistory;