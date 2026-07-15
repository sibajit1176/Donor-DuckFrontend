import {
    FiEye,
    FiEdit3,
    FiClock,
    FiCheckCircle,
    FiXCircle,
} from "react-icons/fi";

const statusStyle = {
    PENDING: {
        bg: "bg-yellow-100",
        text: "text-yellow-700",
        icon: <FiClock size={14} />,
    },
    APPROVED: {
        bg: "bg-green-100",
        text: "text-green-700",
        icon: <FiCheckCircle size={14} />,
    },
    REJECTED: {
        bg: "bg-red-100",
        text: "text-red-700",
        icon: <FiXCircle size={14} />,
    },
};

const CharityTable = ({
    charities = [],
    onView,
    onStatus,
}) => {
    return (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">

            {/* Header */}

            <div className="px-7 py-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white">

                <h2 className="text-2xl font-bold">
                    Charity Organizations
                </h2>

                <p className="text-green-100 mt-1">
                    Review and manage registered charities.
                </p>

            </div>

            {charities.length === 0 ? (

                <div className="py-24 flex flex-col items-center">

                    <FiClock
                        size={60}
                        className="text-gray-300"
                    />

                    <h3 className="mt-5 text-xl font-semibold text-gray-700">
                        No Charity Found
                    </h3>

                    <p className="text-gray-500 mt-2">
                        There are no charity records.
                    </p>

                </div>

            ) : (

                <div>

                    <table className="w-full">

                        <thead>

                            <tr className="bg-gray-50 border-b">

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Organization
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Category
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Approved By
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Created
                                </th>

                                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {charities.map((item) => (

                                <tr
                                    key={item.id}
                                    className="border-b last:border-0 hover:bg-green-50 transition-all duration-200"
                                >

                                    {/* Organization */}

                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-4">

                                            <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold flex items-center justify-center shadow">

                                                {item.organizationName
                                                    ?.charAt(0)
                                                    ?.toUpperCase()}

                                            </div>

                                            <div className="min-w-0">

                                                <h3 className="font-semibold text-gray-800 truncate max-w-[280px]">

                                                    {item.organizationName}

                                                </h3>

                                                <p className="text-xs text-gray-400 mt-1 truncate max-w-[280px]">

                                                    {item.email || "No email"}

                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    {/* Category */}

                                    <td className="px-6">

                                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">

                                            {item.category}

                                        </span>

                                    </td>

                                    {/* Status */}

                                    <td className="px-6">

                                        <span
                                            className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold ${statusStyle[item.approvalStatus].bg} ${statusStyle[item.approvalStatus].text}`}
                                        >

                                            {statusStyle[item.approvalStatus].icon}

                                            {item.approvalStatus}

                                        </span>

                                    </td>

                                    {/* Approved By */}

                                    <td className="px-6">

                                        <span className="text-gray-700">

                                            {item.approver?.name || "--"}

                                        </span>

                                    </td>

                                    {/* Created */}

                                    <td className="px-6">

                                        <div className="font-medium text-gray-700">

                                            {new Date(
                                                item.createdAt
                                            ).toLocaleDateString()}

                                        </div>

                                        <div className="text-xs text-gray-400">

                                            {new Date(
                                                item.createdAt
                                            ).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}

                                        </div>

                                    </td>

                                    {/* Actions */}

                                    <td className="px-6">

                                        <div className="flex justify-center gap-3">

                                            <button
                                                onClick={() => onView(item)}
                                                className="
        h-11
        w-11
        rounded-xl
        bg-blue-50
        text-blue-600
        hover:bg-blue-600
        hover:text-white
        transition-all
        duration-300
        flex
        items-center
        justify-center
        shadow-sm
        hover:shadow-md
    "
                                            >
                                                <FiEye size={18} />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    onStatus(item)
                                                }
                                                className="flex items-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 text-white px-4 h-11 transition-all duration-300 shadow-md"
                                            >

                                                <FiEdit3 />

                                                Status

                                            </button>

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

export default CharityTable;