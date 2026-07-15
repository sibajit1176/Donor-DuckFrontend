import {
    FiCheckCircle,
    FiClock,
    FiXCircle,
    FiEye,
} from "react-icons/fi";

const RecentDonationTable = ({ donations = [] }) => {

    const getStatus = (status) => {

        switch (status) {

            case "SUCCESS":
                return {
                    color: "bg-green-100 text-green-700",
                    icon: <FiCheckCircle />,
                };

            case "PENDING":
                return {
                    color: "bg-yellow-100 text-yellow-700",
                    icon: <FiClock />,
                };

            default:
                return {
                    color: "bg-red-100 text-red-700",
                    icon: <FiXCircle />,
                };

        }

    };

    return (

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">

            {/* Header */}

            <div className="flex justify-between items-center px-6 py-5 border-b">

                <div>

                    <h2 className="text-xl font-bold text-gray-800">

                        Recent Donations

                    </h2>

                    <p className="text-sm text-gray-500 mt-1">

                        Latest donations received

                    </p>

                </div>

                <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">

                    View All

                </button>

            </div>

            {donations.length === 0 ? (

                <div className="py-16 text-center text-gray-400">

                    No donations found.

                </div>

            ) : (

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>

                            <tr className="bg-gray-50 text-gray-600">

                                <th className="text-left px-6 py-4">

                                    Donor

                                </th>

                                <th className="text-left px-6 py-4">

                                    Charity

                                </th>

                                <th className="text-left px-6 py-4">

                                    Amount

                                </th>

                                <th className="text-left px-6 py-4">

                                    Date

                                </th>

                                <th className="text-left px-6 py-4">

                                    Status

                                </th>

                                <th className="text-center px-6 py-4">

                                    Action

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {donations.map((item) => {

                                const badge = getStatus(item.status);

                                return (

                                    <tr
                                        key={item.id}
                                        className="border-t hover:bg-green-50 transition"
                                    >

                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-3">

                                                <div className="h-11 w-11 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700">

                                                    {item.donorName
                                                        ?.charAt(0)
                                                        .toUpperCase()}

                                                </div>

                                                <div>

                                                    <h3 className="font-semibold">

                                                        {item.donorName}

                                                    </h3>

                                                    <p className="text-sm text-gray-500">

                                                        {item.orderId}

                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        <td className="px-6">

                                            {item.organizationName}

                                        </td>

                                        <td className="px-6 font-semibold text-green-600">

                                            ₹{Number(item.amount).toLocaleString("en-IN")}

                                        </td>

                                        <td className="px-6 text-gray-500">

                                            {new Date(item.createdAt).toLocaleDateString()}

                                        </td>

                                        <td className="px-6">

                                            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${badge.color}`}>

                                                {badge.icon}

                                                {item.status}

                                            </span>

                                        </td>

                                        <td className="text-center">

                                            <button className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">

                                                <FiEye />

                                            </button>

                                        </td>

                                    </tr>

                                );

                            })}

                        </tbody>

                    </table>

                </div>

            )}

        </div>

    );

};

export default RecentDonationTable;