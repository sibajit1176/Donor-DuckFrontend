import {
    FiClock,
    FiCheck,
    FiX,
    FiEye,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PendingCharityTable = ({ charities = [] }) => {
    const navigate=useNavigate()
    return (
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">

            {/* Header */}

            <div className="flex items-center justify-between px-6 py-5 border-b bg-gradient-to-r from-green-50 to-white">

                <div>

                    <h2 className="text-xl font-bold text-gray-800">
                        Pending Charity Approval
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Review and approve newly registered charities.
                    </p>

                </div>

                <button
                    className="
                px-5
                py-2.5
                rounded-xl
                bg-green-600
                text-white
                font-medium
                shadow-md
                hover:bg-green-700
                transition-all
            "
            onClick={()=>{navigate("/CharityManagement")}}
                >
                    View All
                </button>

            </div>

            {charities.length === 0 ? (

                <div className="py-20 flex flex-col items-center">

                    <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">

                        <FiClock
                            size={40}
                            className="text-green-600"
                        />

                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-gray-700">
                        No Pending Charity
                    </h3>

                    <p className="text-gray-500 mt-2">
                        All charity applications have been reviewed.
                    </p>

                </div>

            ) : (

                <div className="overflow-x-auto custom-scrollbar">

                    <table className="min-w-[900px] w-full">

                        <thead>

                            <tr className="bg-gray-50 border-b">

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                    Organization
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                    Registration No.
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                    Applied On
                                </th>

                                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                                    Status
                                </th>

                                {/* <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                                    Actions
                                </th> */}

                            </tr>

                        </thead>

                        <tbody>

                            {charities.map((item) => (

                                <tr
                                    key={item.id}
                                    className="
                                border-b
                                hover:bg-green-50
                                transition-all
                                duration-300
                            "
                                >

                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-4">

                                            <div
                                                className="
                                            h-12
                                            w-12
                                            rounded-xl
                                            bg-gradient-to-r
                                            from-green-500
                                            to-emerald-600
                                            text-white
                                            flex
                                            items-center
                                            justify-center
                                            font-bold
                                            shadow
                                            flex-shrink-0
                                        "
                                            >
                                                {item.organizationName
                                                    ?.charAt(0)
                                                    ?.toUpperCase()}
                                            </div>

                                            <div className="min-w-[280px]">

                                                <h3 className="font-semibold text-gray-800 whitespace-nowrap">
                                                    {item.organizationName}
                                                </h3>

                                                <p className="text-xs text-gray-500 mt-1">
                                                    NGO Registration Request
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    <td className="px-6 py-5">

                                        <span
                                            className="
                                        inline-flex
                                        items-center
                                        px-3
                                        py-2
                                        rounded-lg
                                        bg-gray-100
                                        font-medium
                                        text-gray-700
                                        whitespace-nowrap
                                    "
                                        >
                                            {item.registrationNumber}
                                        </span>

                                    </td>

                                    <td className="px-6 py-5 whitespace-nowrap">

                                        <div className="font-medium text-gray-700">

                                            {new Date(
                                                item.createdAt
                                            ).toLocaleDateString()}

                                        </div>

                                        <div className="text-xs text-gray-400 mt-1">

                                            {new Date(
                                                item.createdAt
                                            ).toLocaleTimeString()}

                                        </div>

                                    </td>

                                    <td className="px-6 py-5 text-center">

                                        <span
                                            className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        px-3
                                        py-1.5
                                        rounded-full
                                        bg-yellow-100
                                        text-yellow-700
                                        font-semibold
                                        text-xs
                                        whitespace-nowrap
                                    "
                                        >

                                            <FiClock />

                                            Pending Approval

                                        </span>

                                    </td>

                                    {/* <td className="px-6 py-5">

                                        <div className="flex justify-center gap-3 whitespace-nowrap">

                                            <button
                                                title="View"
                                                className="
                                            h-10
                                            w-10
                                            rounded-xl
                                            bg-blue-50
                                            text-blue-600
                                            hover:bg-blue-600
                                            hover:text-white
                                            transition-all
                                        "
                                            >

                                                <FiEye size={18} />

                                            </button>

                                            <button
                                                title="Approve"
                                                className="
                                            h-10
                                            w-10
                                            rounded-xl
                                            bg-green-50
                                            text-green-600
                                            hover:bg-green-600
                                            hover:text-white
                                            transition-all
                                        "
                                            >

                                                <FiCheck size={18} />

                                            </button>

                                            <button
                                                title="Reject"
                                                className="
                                            h-10
                                            w-10
                                            rounded-xl
                                            bg-red-50
                                            text-red-600
                                            hover:bg-red-600
                                            hover:text-white
                                            transition-all
                                        "
                                            >

                                                <FiX size={18} />

                                            </button>

                                        </div>

                                    </td> */}

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            )}

        </div>
    );
};

export default PendingCharityTable;