import {
    FiSearch,
    FiEye,
    FiCheckCircle,
    FiClock,
    FiXCircle,
    FiRotateCcw,
    FiDownload,
    FiFilter,
    FiHeart,
} from "react-icons/fi";

const DonationHistoryTable = ({
    donations = [],
    onView,
}) => {

    const getStatusBadge = (status) => {

        switch (status) {

            case "SUCCESS":

                return {
                    color:
                        "bg-green-100 text-green-700 border-green-200",
                    icon: <FiCheckCircle size={15} />,
                };

            case "PENDING":

                return {
                    color:
                        "bg-yellow-100 text-yellow-700 border-yellow-200",
                    icon: <FiClock size={15} />,
                };

            case "FAILED":

                return {
                    color:
                        "bg-red-100 text-red-700 border-red-200",
                    icon: <FiXCircle size={15} />,
                };

            case "REFUNDED":

                return {
                    color:
                        "bg-purple-100 text-purple-700 border-purple-200",
                    icon: <FiRotateCcw size={15} />,
                };

            default:

                return {
                    color:
                        "bg-gray-100 text-gray-700 border-gray-200",
                    icon: <FiClock size={15} />,
                };

        }

    };

    return (

        <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-xl">

            {/* Header */}

            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-8 py-7 text-white">

                <div className="flex items-center justify-between">

                    <div>

                        <h2 className="text-3xl font-bold">

                            Donation History

                        </h2>

                        <p className="mt-2 text-green-100">

                            Complete donation transactions across all charities

                        </p>

                    </div>

                    <button
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-white/20
                            px-5
                            py-3
                            transition
                            hover:bg-white/30
                        "
                    >

                        <FiDownload />

                        Export CSV

                    </button>

                </div>

            </div>

            {/* Filter */}

            <div className="border-b bg-gray-50 px-8 py-6">

                <div className="grid gap-4 lg:grid-cols-4">

                    <div className="relative lg:col-span-2">

                        <FiSearch
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-gray-400
                            "
                        />

                        <input
                            placeholder="Search donor, order id, charity..."
                            className="
                                h-12
                                w-full
                                rounded-xl
                                border
                                border-gray-200
                                bg-white
                                pl-11
                                pr-4
                                outline-none
                                focus:border-green-500
                                focus:ring-4
                                focus:ring-green-100
                            "
                        />

                    </div>

                    <select
                        className="
                            h-12
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            px-4
                            outline-none
                            focus:ring-4
                            focus:ring-green-100
                        "
                    >

                        <option>All Status</option>
                        <option>SUCCESS</option>
                        <option>PENDING</option>
                        <option>FAILED</option>
                        <option>REFUNDED</option>

                    </select>

                    <button
                        className="
                            flex
                            h-12
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            transition
                            hover:bg-gray-100
                        "
                    >

                        <FiFilter />

                        Filters

                    </button>

                </div>

            </div>

            {/* Table */}

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead>

                        <tr className="bg-gray-50 text-left text-sm uppercase tracking-wide text-gray-600">

                            <th className="px-8 py-5">Donor</th>

                            <th className="px-8 py-5">Charity</th>

                            <th className="px-8 py-5">Project</th>

                            <th className="px-8 py-5">Amount</th>

                            <th className="px-8 py-5">Status</th>

                            <th className="px-8 py-5">Date</th>

                            <th className="px-8 py-5 text-center">

                                Action

                            </th>

                        </tr>

                    </thead>

                    <tbody>
                                            {donations.length === 0 ? (

                        <tr>

                            <td
                                colSpan={7}
                                className="py-20 text-center"
                            >

                                <div className="flex flex-col items-center">

                                    <div
                                        className="
                                            flex
                                            h-20
                                            w-20
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-green-100
                                        "
                                    >

                                        <FiHeart
                                            size={34}
                                            className="text-green-600"
                                        />

                                    </div>

                                    <h3 className="mt-5 text-xl font-bold text-gray-700">

                                        No Donations Found

                                    </h3>

                                    <p className="mt-2 text-gray-500">

                                        Donation history will appear here.

                                    </p>

                                </div>

                            </td>

                        </tr>

                    ) : (

                        donations.map((item) => {

                            const badge =
                                getStatusBadge(item.status);

                            return (

                                <tr
                                    key={item.id}
                                    className="
                                        border-t
                                        transition-all
                                        duration-300
                                        hover:bg-gradient-to-r
                                        hover:from-green-50
                                        hover:to-emerald-50
                                    "
                                >

                                    {/* Donor */}

                                    <td className="px-8 py-5">

                                        <div className="flex items-center gap-4">

                                            <div
                                                className="
                                                    flex
                                                    h-12
                                                    w-12
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-gradient-to-r
                                                    from-green-500
                                                    to-emerald-600
                                                    font-bold
                                                    text-white
                                                    shadow-md
                                                "
                                            >

                                                {item.donorName?.[0]?.toUpperCase() || "U"}

                                            </div>

                                            <div>

                                                <h4 className="font-semibold text-gray-800">

                                                    {item.donorName}

                                                </h4>

                                                <p className="text-sm text-gray-500">

                                                    {item.orderId}

                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    {/* Charity */}

                                    <td className="px-8 py-5">

                                        <div>

                                            <p className="font-semibold text-gray-800">

                                                {item.organizationName}

                                            </p>

                                        </div>

                                    </td>

                                    {/* Project */}

                                    <td className="px-8 py-5">

                                        <span
                                            className="
                                                inline-flex
                                                rounded-full
                                                bg-blue-100
                                                px-3
                                                py-1
                                                text-sm
                                                font-medium
                                                text-blue-700
                                            "
                                        >

                                            {item.projectName || "N/A"}

                                        </span>

                                    </td>

                                    {/* Amount */}

                                    <td className="px-8 py-5">

                                        <span className="text-lg font-bold text-green-600">

                                            ₹
                                            {Number(
                                                item.amount || 0
                                            ).toLocaleString("en-IN")}

                                        </span>

                                    </td>

                                    {/* Status */}

                                    <td className="px-8 py-5">

                                        <span
                                            className={`
                                                inline-flex
                                                items-center
                                                gap-2
                                                rounded-full
                                                border
                                                px-3
                                                py-1.5
                                                text-sm
                                                font-semibold
                                                ${badge.color}
                                            `}
                                        >

                                            {badge.icon}

                                            {item.status}

                                        </span>

                                    </td>

                                    {/* Date */}

                                    <td className="px-8 py-5">

                                        <div>

                                            <p className="font-medium text-gray-700">

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

                                            </p>

                                            <p className="text-sm text-gray-500">

                                                {new Date(
                                                    item.createdAt
                                                ).toLocaleTimeString(
                                                    "en-IN",
                                                    {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    }
                                                )}

                                            </p>

                                        </div>

                                    </td>

                                    {/* Action */}

                                    <td className="px-8 py-5 text-center">

                                        <button
                                            onClick={() => onView(item)}
                                            className="
                                                inline-flex
                                                h-11
                                                w-11
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-blue-100
                                                text-blue-600
                                                transition
                                                hover:bg-blue-600
                                                hover:text-white
                                            "
                                            title="View Donation"
                                        >

                                            <FiEye size={18} />

                                        </button>

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