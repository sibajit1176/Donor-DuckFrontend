import {
    FiCheckCircle,
    FiClock,
    FiEye,
    FiXCircle,
    FiFolder,
    FiHeart,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RecentDonationTable = ({ donations = [] }) => {

    const navigation=useNavigate()

    const getStatus = (status) => {

        switch (status) {

            case "SUCCESS":
                return {
                    color:
                        "bg-green-100 text-green-700 border-green-200",
                    icon: <FiCheckCircle size={14} />,
                };

            case "PENDING":
                return {
                    color:
                        "bg-yellow-100 text-yellow-700 border-yellow-200",
                    icon: <FiClock size={14} />,
                };

            case "FAILED":
                return {
                    color:
                        "bg-red-100 text-red-700 border-red-200",
                    icon: <FiXCircle size={14} />,
                };

            default:
                return {
                    color:
                        "bg-gray-100 text-gray-700 border-gray-200",
                    icon: <FiClock size={14} />,
                };

        }

    };

    return (

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">

            {/* Header */}

            <div className="flex items-center justify-between px-8 py-6 border-b bg-gradient-to-r from-green-50 to-white">

                <div>

                    <h2 className="text-2xl font-bold text-gray-800">

                        Recent Donations

                    </h2>

                    <p className="text-gray-500 mt-1">

                        Latest donations received across all charities

                    </p>

                </div>

                <button
                    className="
                        px-5
                        py-2.5
                        rounded-xl
                        bg-green-600
                        hover:bg-green-700
                        text-white
                        font-medium
                        transition
                    "
                    onClick={()=>navigation('/donationManagement')}
                >

                    View All

                </button>

            </div>

            {donations.length === 0 ? (

                <div className="py-20 text-center">

                    <FiHeart
                        className="mx-auto text-gray-300"
                        size={45}
                    />

                    <h3 className="mt-4 text-lg font-semibold text-gray-700">

                        No Donations Found

                    </h3>

                    <p className="text-gray-500 mt-2">

                        Donations will appear here once users donate.

                    </p>

                </div>

            ) : (

                <div className="overflow-x-auto">

                    <table className="min-w-full">

                        <thead>

                            <tr className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wide">

                                <th className="px-8 py-4 text-left">

                                    Donor

                                </th>

                                <th className="px-8 py-4 text-left">

                                    Charity

                                </th>

                                <th className="px-8 py-4 text-left">

                                    Project

                                </th>

                                <th className="px-8 py-4 text-left">

                                    Amount

                                </th>

                                <th className="px-8 py-4 text-left">

                                    Date

                                </th>

                                <th className="px-8 py-4 text-left">

                                    Status

                                </th>

                                <th className="px-8 py-4 text-center">

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
                                        className="
                                            border-t
                                            hover:bg-green-50
                                            transition-all
                                            duration-300
                                        "
                                    >

                                        {/* Donor */}

                                        <td className="px-8 py-5">

                                            <div className="flex items-center gap-4">

                                                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white flex items-center justify-center font-bold text-lg">

                                                    {item.donorName
                                                        ?.charAt(0)
                                                        .toUpperCase()}

                                                </div>

                                                <div>

                                                    <h3 className="font-semibold text-gray-800">

                                                        {item.donorName}

                                                    </h3>

                                                    <p className="text-sm text-gray-500">

                                                        #{item.orderId}

                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* Charity */}

                                        <td className="px-8">

                                            <div className="flex items-center gap-2">

                                                <FiHeart className="text-green-600" />

                                                <span className="font-medium">

                                                    {item.organizationName}

                                                </span>

                                            </div>

                                        </td>

                                        {/* Project */}

                                        <td className="px-8">

                                            <div className="flex items-center gap-2">

                                                <FiFolder className="text-blue-500" />

                                                <span>

                                                    {item.projectName}

                                                </span>

                                            </div>

                                        </td>

                                        {/* Amount */}

                                        <td className="px-8">

                                            <span className="text-lg font-bold text-green-600">

                                                ₹
                                                {Number(
                                                    item.amount
                                                ).toLocaleString(
                                                    "en-IN"
                                                )}

                                            </span>

                                        </td>

                                        {/* Date */}

                                        <td className="px-8 text-gray-500">

                                            {new Date(
                                                item.createdAt
                                            ).toLocaleDateString(
                                                "en-IN",
                                                {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                }
                                            )}

                                        </td>

                                        {/* Status */}

                                        <td className="px-8">

                                            <span
                                                className={`
                                                    inline-flex
                                                    items-center
                                                    gap-2
                                                    px-3
                                                    py-1.5
                                                    rounded-full
                                                    text-sm
                                                    font-semibold
                                                    border
                                                    ${badge.color}
                                                `}
                                            >

                                                {badge.icon}

                                                {item.status}

                                            </span>

                                        </td>

                                        {/* Action */}

                                        <td className="px-8 text-center">

                                            <button
                                                className="
                                                    h-11
                                                    w-11
                                                    rounded-xl
                                                    bg-blue-100
                                                    text-blue-600
                                                    hover:bg-blue-600
                                                    hover:text-white
                                                    transition
                                                    duration-300
                                                    flex
                                                    items-center
                                                    justify-center
                                                    mx-auto
                                                "
                                            >

                                                <FiEye size={18} />

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