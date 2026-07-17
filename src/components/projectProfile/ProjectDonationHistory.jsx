import {
    FiDollarSign,
    FiClock,
    FiMessageSquare,
    FiUser,
} from "react-icons/fi";

const ProjectDonationHistory = ({
    donations = [],
}) => {

    return (

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">

            <div className="px-7 py-6 border-b bg-gradient-to-r from-green-600 to-emerald-500">

                <h2 className="text-2xl font-bold text-white">

                    Donation History

                </h2>

                <p className="text-green-100 mt-1">

                    List of all donations received for this project.

                </p>

            </div>

            {donations.length === 0 ? (

                <div className="py-20 text-center">

                    <div className="mx-auto h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">

                        <FiDollarSign
                            size={34}
                            className="text-green-600"
                        />

                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-gray-800">

                        No Donations Yet

                    </h3>

                    <p className="text-gray-500 mt-2">

                        Donations received for this project will appear here.

                    </p>

                </div>

            ) : (

                <div className="overflow-x-auto">

                    <table className="min-w-full">

                        <thead>

                            <tr className="bg-gray-50 border-b">

                                <th className="text-left px-6 py-4 font-semibold text-gray-700">

                                    Donor

                                </th>

                                <th className="text-left px-6 py-4 font-semibold text-gray-700">

                                    Amount

                                </th>

                                <th className="text-left px-6 py-4 font-semibold text-gray-700">

                                    Message

                                </th>

                                <th className="text-left px-6 py-4 font-semibold text-gray-700">

                                    Date & Time

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {donations.map((donation) => (

                                <tr
                                    key={donation.id}
                                    className="border-b hover:bg-green-50 transition"
                                >

                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-3">

                                            <div className="h-11 w-11 rounded-full bg-green-100 flex items-center justify-center">

                                                <FiUser className="text-green-600" />

                                            </div>

                                            <div>

                                                <p className="font-semibold text-gray-800">

                                                    {donation.user.name}

                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    <td className="px-6 py-5">

                                        <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold">

                                            ₹ {Number(donation.amount).toLocaleString()}

                                        </span>

                                    </td>

                                    <td className="px-6 py-5">

                                        <div className="flex items-start gap-2 max-w-md">

                                            <FiMessageSquare
                                                className="text-green-600 mt-1"
                                            />

                                            <p className="text-gray-600">

                                                {donation.message || "-"}

                                            </p>

                                        </div>

                                    </td>

                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-2 text-gray-600">

                                            <FiClock />

                                            {new Date(
                                                donation.createdAt
                                            ).toLocaleString()}

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            )}

        </div>

    );

};

export default ProjectDonationHistory;