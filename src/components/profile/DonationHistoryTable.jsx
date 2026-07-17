import {
    FiCheckCircle,
    FiClock,
    FiXCircle,
    FiRotateCcw,
    FiHeart,
} from "react-icons/fi";

const DonationHistoryTable = ({
    donations = [],
}) => {

    const getStatus = (status) => {

        switch (status) {

            case "SUCCESS":
                return {
                    color: "bg-green-100 text-green-700",
                    icon: <FiCheckCircle size={15} />,
                };

            case "PENDING":
                return {
                    color: "bg-yellow-100 text-yellow-700",
                    icon: <FiClock size={15} />,
                };

            case "FAILED":
                return {
                    color: "bg-red-100 text-red-700",
                    icon: <FiXCircle size={15} />,
                };

            case "REFUNDED":
                return {
                    color: "bg-purple-100 text-purple-700",
                    icon: <FiRotateCcw size={15} />,
                };

            default:
                return {
                    color: "bg-gray-100 text-gray-700",
                    icon: <FiClock size={15} />,
                };

        }

    };

    return (

        <div className="mt-8 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg">

            <div className="px-6 py-5 border-b bg-gradient-to-r from-green-600 to-emerald-600">

                <h2 className="text-2xl font-bold text-white">

                    Donation History

                </h2>

                <p className="text-green-100 mt-1">

                    Your recent donations

                </p>

            </div>

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead>

                        <tr className="bg-gray-50 text-gray-600 uppercase text-sm">

                            <th className="px-6 py-4 text-left">

                                Order ID

                            </th>

                            <th className="px-6 py-4 text-left">

                                Charity

                            </th>

                            <th className="px-6 py-4 text-left">

                                Project

                            </th>

                            <th className="px-6 py-4 text-left">

                                Amount

                            </th>

                            <th className="px-6 py-4 text-left">

                                Status

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
                                    colSpan={6}
                                    className="py-16 text-center"
                                >

                                    <div className="flex flex-col items-center">

                                        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">

                                            <FiHeart
                                                className="text-green-600"
                                                size={28}
                                            />

                                        </div>

                                        <h3 className="mt-4 text-lg font-semibold text-gray-700">

                                            No Donations Yet

                                        </h3>

                                        <p className="text-gray-500 mt-2">

                                            Your donation history will appear here.

                                        </p>

                                    </div>

                                </td>

                            </tr>

                        ) : (

                            donations.map((item) => {

                                const badge = getStatus(item.status);

                                return (

                                    <tr
                                        key={item.id}
                                        className="border-t hover:bg-green-50 transition"
                                    >

                                        <td className="px-6 py-5 font-medium text-gray-700">

                                            {item.orderId}

                                        </td>

                                        <td className="px-6 py-5">

                                            {item.charityName}

                                        </td>

                                        <td className="px-6 py-5">

                                            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">

                                                {item.projectName}

                                            </span>

                                        </td>

                                        <td className="px-6 py-5">

                                            <span className="font-bold text-green-600">

                                                ₹{Number(item.amount).toLocaleString("en-IN")}

                                            </span>

                                        </td>

                                        <td className="px-6 py-5">

                                            <span
                                                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${badge.color}`}
                                            >

                                                {badge.icon}

                                                {item.status}

                                            </span>

                                        </td>

                                        <td className="px-6 py-5 text-gray-500">

                                            {new Date(item.paymentTime).toLocaleString(
                                                "en-IN",
                                                {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                }
                                            )}

                                        </td>

                                    </tr>

                                );

                            })

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default DonationHistoryTable;