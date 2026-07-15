import {
    FiEye,
    FiUserX,
    FiUserCheck,
    FiMail,
    FiPhone,
    FiMapPin,
    FiCalendar,
    FiCheckCircle,
    FiShield,
} from "react-icons/fi";

const roleStyle = {
    USER: "bg-blue-100 text-blue-700",
    CHARITY: "bg-green-100 text-green-700",
    ADMIN: "bg-purple-100 text-purple-700",
};

const statusStyle = {
    ACTIVE: "bg-green-100 text-green-700",
    BLOCKED: "bg-red-100 text-red-700",
};

const UserTable = ({
    users = [],
    onView,
    onStatus,
}) => {
    
    return (
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

            {/* Header */}

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-7 py-6 text-white">

                <h2 className="text-2xl font-bold">
                    User Management
                </h2>

                <p className="text-green-100 mt-1">
                    Manage all registered users.
                </p>

            </div>

            {users.length === 0 ? (

                <div className="py-24 text-center">

                    <h3 className="text-xl font-semibold text-gray-700">
                        No Users Found
                    </h3>

                    <p className="text-gray-500 mt-2">
                        There are no registered users.
                    </p>

                </div>

            ) : (

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>

                            <tr className="bg-gray-50 border-b">

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    User
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Contact
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Location
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Role
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                    Joined
                                </th>

                                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {users.map((user) => (

                                <tr
                                    key={user.id}
                                    className="border-b hover:bg-green-50 transition duration-200"
                                >

                                    {/* User */}

                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-4">

                                            <img
                                                src={
                                                    user.profileImage ||
                                                    `https://ui-avatars.com/api/?background=16a34a&color=fff&name=${encodeURIComponent(
                                                        user.name
                                                    )}`
                                                }
                                                alt={user.name}
                                                className="h-14 w-14 rounded-2xl object-cover border shadow"
                                            />

                                            <div>

                                                <h3 className="font-semibold text-gray-800">

                                                    {user.name}

                                                </h3>

                                                <p className="text-xs text-gray-500 mt-1">

                                                    ID : {user.id.slice(0, 8)}

                                                </p>

                                                {user.isVerified ? (

                                                    <span className="inline-flex items-center gap-1 text-xs text-green-600 mt-2">

                                                        <FiCheckCircle />

                                                        Verified

                                                    </span>

                                                ) : (

                                                    <span className="inline-flex items-center gap-1 text-xs text-yellow-600 mt-2">

                                                        <FiShield />

                                                        Unverified

                                                    </span>

                                                )}

                                            </div>

                                        </div>

                                    </td>

                                    {/* Contact */}

                                    <td className="px-6">

                                        <div className="space-y-2 text-sm">

                                            <div className="flex items-center gap-2">

                                                <FiMail className="text-gray-400"/>

                                                <span className="truncate max-w-[220px]">

                                                    {user.email}

                                                </span>

                                            </div>

                                            <div className="flex items-center gap-2">

                                                <FiPhone className="text-gray-400"/>

                                                {user.phone || "--"}

                                            </div>

                                        </div>

                                    </td>

                                    {/* Location */}

                                    <td className="px-6">

                                        <div className="flex items-center gap-2 text-sm">

                                            <FiMapPin className="text-gray-400"/>

                                            <span>

                                                {[user.city, user.state]
                                                    .filter(Boolean)
                                                    .join(", ") || "--"}

                                            </span>

                                        </div>

                                    </td>

                                    {/* Role */}

                                    <td className="px-6">

                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${roleStyle[user.role]}`}
                                        >

                                            {user.role}

                                        </span>

                                    </td>

                                    {/* Status */}

                                    <td className="px-6">

                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[user.status]}`}
                                        >

                                            {user.status}

                                        </span>

                                    </td>

                                    {/* Joined */}

                                    <td className="px-6">

                                        <div className="flex items-center gap-2 text-sm">

                                            <FiCalendar className="text-gray-400"/>

                                            {new Date(
                                                user.createdAt
                                            ).toLocaleDateString()}

                                        </div>

                                    </td>

                                    {/* Actions */}

                                    <td className="px-6">

                                        <div className="flex justify-center gap-3">

                                            <button
                                                onClick={() => onView(user)}
                                                className="
                                                    h-11
                                                    w-11
                                                    rounded-xl
                                                    bg-blue-50
                                                    text-blue-600
                                                    hover:bg-blue-600
                                                    hover:text-white
                                                    transition
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                            >

                                                <FiEye size={18}/>

                                            </button>

                                            <button
                                                onClick={() => onStatus(user)}
                                                className={`
                                                    px-4
                                                    h-11
                                                    rounded-xl
                                                    text-white
                                                    flex
                                                    items-center
                                                    gap-2
                                                    transition

                                                    ${
                                                        user.status === "ACTIVE"
                                                            ? "bg-red-600 hover:bg-red-700"
                                                            : "bg-green-600 hover:bg-green-700"
                                                    }
                                                `}
                                            >

                                                {user.status === "ACTIVE" ? (
                                                    <>
                                                        <FiUserX />
                                                        Block
                                                    </>
                                                ) : (
                                                    <>
                                                        <FiUserCheck />
                                                        Unblock
                                                    </>
                                                )}

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

export default UserTable;