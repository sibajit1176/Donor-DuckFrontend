import {
    FiUser,
    FiEye,
    FiCheckCircle,
    FiXCircle,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const RecentUserTable = ({ users = [] }) => {
    const navigate=useNavigate()
    return (
       <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">

    {/* Header */}

    <div className="flex items-center justify-between px-6 py-5 border-b bg-gradient-to-r from-green-50 to-white">

        <div>

            <h2 className="text-xl font-bold text-gray-800">
                Recent Users
            </h2>

            <p className="text-sm text-gray-500 mt-1">
                Latest registered users
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
                hover:bg-green-700
                transition-all
                duration-300
                shadow-md
            "
            onClick={()=>{navigate("/UserManagement")}}
        >
            View All
        </button>

    </div>

    {users.length === 0 ? (

        <div className="py-20 flex flex-col items-center">

            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">

                <FiUser
                    size={38}
                    className="text-green-600"
                />

            </div>

            <h3 className="mt-5 text-lg font-semibold text-gray-700">
                No Users Found
            </h3>

            <p className="mt-2 text-gray-500">
                No recently registered users.
            </p>

        </div>

    ) : (

        <div className="overflow-x-auto custom-scrollbar">

            <table className="min-w-[900px] w-full">

                <thead>

                    <tr className="bg-gray-50 border-b">

                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                            User
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                            Role
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                            Status
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                            Joined
                        </th>

                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                            Action
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {users.map((user) => (

                        <tr
                            key={user.id}
                            className="
                                border-b
                                last:border-b-0
                                hover:bg-green-50
                                transition-all
                                duration-200
                            "
                        >

                            {/* User */}

                            <td className="px-6 py-5">

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex-shrink-0
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
                                        "
                                    >
                                        {user.name?.charAt(0)?.toUpperCase()}
                                    </div>

                                    <div className="min-w-0 flex-1">

                                        {/* Name */}

                                        <div className="max-w-[220px] overflow-x-auto custom-scrollbar whitespace-nowrap">

                                            <h3 className="font-semibold text-gray-800 inline-block">
                                                {user.name}
                                            </h3>

                                        </div>

                                        {/* Email */}

                                        <div className="max-w-[220px] overflow-x-auto custom-scrollbar whitespace-nowrap mt-1">

                                            <p className="text-sm text-gray-500 inline-block">
                                                {user.email}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </td>

                            {/* Role */}

                            <td className="px-6 py-5">

                                <span
                                    className={`
                                        inline-flex
                                        items-center
                                        px-3
                                        py-1.5
                                        rounded-full
                                        text-xs
                                        font-semibold
                                        ${
                                            user.role === "ADMIN"
                                                ? "bg-red-100 text-red-700"
                                                : user.role === "CHARITY"
                                                ? "bg-purple-100 text-purple-700"
                                                : "bg-blue-100 text-blue-700"
                                        }
                                    `}
                                >
                                    {user.role}
                                </span>

                            </td>

                            {/* Status */}

                            <td className="px-6 py-5">

                                {user.status === "ACTIVE" ? (

                                    <span className="inline-flex items-center gap-2 text-green-600 font-semibold">

                                        <FiCheckCircle />

                                        Active

                                    </span>

                                ) : (

                                    <span className="inline-flex items-center gap-2 text-red-600 font-semibold">

                                        <FiXCircle />

                                        Blocked

                                    </span>

                                )}

                            </td>

                            {/* Joined */}

                            <td className="px-6 py-5">

                                <div className="font-medium text-gray-700">

                                    {new Date(user.createdAt).toLocaleDateString()}

                                </div>

                                <div className="text-xs text-gray-400 mt-1">

                                    {new Date(user.createdAt).toLocaleTimeString()}

                                </div>

                            </td>

                            {/* Action */}

                            <td className="px-6 py-5">

                                <div className="flex justify-center">

                                    <button
                                        title="View User"
                                        className="
                                            h-10
                                            w-10
                                            rounded-xl
                                            bg-blue-50
                                            text-blue-600
                                            hover:bg-blue-600
                                            hover:text-white
                                            transition-all
                                            duration-300
                                        "
                                    >

                                        <FiEye size={18} />

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

export default RecentUserTable;