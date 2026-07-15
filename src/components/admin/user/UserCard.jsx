import {
    FiEye,
    FiMapPin,
    FiMail,
    FiPhone,
    FiCalendar,
    FiCheckCircle,
    FiShield,
    FiUserX,
    FiUserCheck,
} from "react-icons/fi";

const roleColor = {
    USER: "bg-blue-100 text-blue-700",
    CHARITY: "bg-green-100 text-green-700",
    ADMIN: "bg-purple-100 text-purple-700",
};

const statusColor = {
    ACTIVE: "bg-green-100 text-green-700",
    BLOCKED: "bg-red-100 text-red-700",
};

const UserCard = ({
    user,
    onView,
    onStatus,
}) => {
    return (
        <div
            className="
                group
                bg-white
                rounded-3xl
                border
                border-gray-200
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
                overflow-hidden
            "
        >
            {/* Header */}

            <div className="h-24 bg-gradient-to-r from-green-600 to-emerald-500 relative" />

            {/* Avatar */}

            <div className="relative px-6">

                <div className="-mt-12 flex justify-between items-end">

                    <div className="relative">

                        <img
                            src={
                                user.profileImage ||
                                "https://ui-avatars.com/api/?background=16a34a&color=fff&name=" +
                                    encodeURIComponent(user.name)
                            }
                            alt={user.name}
                            className="
                                h-24
                                w-24
                                rounded-3xl
                                border-4
                                border-white
                                object-cover
                                shadow-lg
                            "
                        />

                        <span
                            className={`
                                absolute
                                bottom-1
                                right-1
                                h-5
                                w-5
                                rounded-full
                                border-2
                                border-white
                                ${
                                    user.status === "ACTIVE"
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                }
                            `}
                        />
                    </div>

                    <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${roleColor[user.role]}`}
                    >
                        {user.role}
                    </span>

                </div>

            </div>

            {/* Content */}

            <div className="px-6 pt-5 pb-6">

                <div className="flex justify-between items-start gap-3">

                    <div>

                        <h2 className="text-xl font-bold text-gray-800">

                            {user.name}

                        </h2>

                        <p className="text-sm text-gray-500 mt-1">

                            ID :
                            {" "}
                            {user.id.slice(0, 8)}

                        </p>

                    </div>

                    <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[user.status]}`}
                    >
                        {user.status}
                    </span>

                </div>

                {/* Verified */}

                <div className="mt-4">

                    {user.isVerified ? (

                        <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-2 text-sm text-green-700 font-medium">

                            <FiCheckCircle />

                            Verified Account

                        </div>

                    ) : (

                        <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-3 py-2 text-sm text-yellow-700 font-medium">

                            <FiShield />

                            Not Verified

                        </div>

                    )}

                </div>

                {/* Information */}

                <div className="mt-6 space-y-4">

                    <InfoRow
                        icon={<FiMail />}
                        value={user.email}
                    />

                    <InfoRow
                        icon={<FiPhone />}
                        value={user.phone || "-"}
                    />

                    <InfoRow
                        icon={<FiMapPin />}
                        value={[
                            user.city,
                            user.state,
                            user.country,
                        ]
                            .filter(Boolean)
                            .join(", ") || "-"}
                    />

                    <InfoRow
                        icon={<FiCalendar />}
                        value={new Date(
                            user.createdAt
                        ).toLocaleDateString()}
                    />

                </div>

                {/* Buttons */}

                <div className="mt-7 grid grid-cols-2 gap-3">

                    <button
                        onClick={() => onView(user)}
                        className="
                            h-11
                            rounded-xl
                            border
                            border-green-600
                            text-green-600
                            font-medium
                            flex
                            items-center
                            justify-center
                            gap-2
                            hover:bg-green-600
                            hover:text-white
                            transition
                        "
                    >
                        <FiEye />

                        View

                    </button>

                    <button
                        onClick={() => onStatus(user)}
                        className={`
                            h-11
                            rounded-xl
                            font-medium
                            flex
                            items-center
                            justify-center
                            gap-2
                            transition

                            ${
                                user.status === "ACTIVE"
                                    ? "bg-red-600 hover:bg-red-700 text-white"
                                    : "bg-green-600 hover:bg-green-700 text-white"
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

            </div>

        </div>
    );
};

const InfoRow = ({ icon, value }) => (
    <div className="flex items-center gap-3 text-sm text-gray-600">

        <div className="h-9 w-9 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600">

            {icon}

        </div>

        <span className="truncate">

            {value}

        </span>

    </div>
);

export default UserCard;