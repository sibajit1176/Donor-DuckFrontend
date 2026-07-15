import {
    FiX,
    FiMail,
    FiPhone,
    FiUser,
    FiMapPin,
    FiCheckCircle,
    FiShield,
    FiCalendar,
} from "react-icons/fi";

const UserViewModal = ({
    open,
    user,
    onClose,
}) => {

    if (!open || !user) return null;

    const roleColor = {
        ADMIN: "bg-purple-100 text-purple-700",
        CHARITY: "bg-blue-100 text-blue-700",
        USER: "bg-green-100 text-green-700",
    };

    const statusColor = {
        ACTIVE: "bg-green-100 text-green-700",
        BLOCKED: "bg-red-100 text-red-700",
    };

    return (

        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6">

            <div className="bg-white rounded-[28px] shadow-2xl w-full max-w-4xl h-[85vh] overflow-hidden flex flex-col">
                {/* Header */}

                <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 h-15 ">
    <button
        onClick={onClose}
        className="
            absolute
            top-3
            right-3
            h-10
            w-10
            rounded-xl
            bg-white/20
            hover:bg-red-500
            transition
            flex
            items-center
            justify-center
            text-white
        "
    >
        <FiX size={20} />
    </button>
</div>

                <div className="flex-1 overflow-y-auto px-8 pt-14 pb-6 custom-scrollbar">
                    {/* Avatar */}

                    <div className="-mt-12 flex items-end justify-between">
                        <div className="flex items-end gap-6">

                            <img
                                src={
                                    user.profileImage ||
                                    "https://ui-avatars.com/api/?name=" +
                                    encodeURIComponent(user.name)
                                }
                                alt=""
                                className="
        h-28
        w-28
        rounded-2xl
        border-4
        border-white
        shadow-xl
        object-cover
        bg-white
    "
                            />

                            <div className="pb-4">

                                <h2 className="text-4xl font-bold text-gray-800">

                                    {user.name}

                                </h2>

                                <p className="text-gray-500 mt-2 flex items-center gap-2">

                                    <FiMail />

                                    {user.email}

                                </p>

                                <div className="flex flex-wrap gap-3 mt-5">

                                    <span
                                        className={`
                                            px-4
                                            py-2
                                            rounded-full
                                            text-sm
                                            font-semibold
                                            ${roleColor[user.role]}
                                        `}
                                    >
                                        {user.role}
                                    </span>

                                    <span
                                        className={`
                                            px-4
                                            py-2
                                            rounded-full
                                            text-sm
                                            font-semibold
                                            ${statusColor[user.status]}
                                        `}
                                    >
                                        {user.status}
                                    </span>

                                    {user.isVerified && (

                                        <span className="px-4 py-2 rounded-full bg-green-600 text-white text-sm font-semibold flex items-center gap-2">

                                            <FiCheckCircle />

                                            Verified

                                        </span>

                                    )}

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Personal Information */}

                    <div className="mt-10">

                        <h3 className="text-xl font-bold text-gray-800 mb-6">

                            Personal Information

                        </h3>

                        <div className="grid lg:grid-cols-2 gap-6">

                            <InfoCard
                                icon={<FiUser />}
                                label="Full Name"
                                value={user.name}
                            />

                            <InfoCard
                                icon={<FiMail />}
                                label="Email Address"
                                value={user.email}
                            />

                            <InfoCard
                                icon={<FiPhone />}
                                label="Phone Number"
                                value={user.phone || "--"}
                            />

                            <InfoCard
                                icon={<FiShield />}
                                label="Role"
                                value={user.role}
                            />

                        </div>

                    </div>
                    {/* Address Information */}

                    <div className="mt-10">

                        <h3 className="text-xl font-bold text-gray-800 mb-6">

                            Address Information

                        </h3>

                        <div className="grid lg:grid-cols-2 gap-6">

                            <InfoCard
                                icon={<FiMapPin />}
                                label="Address"
                                value={user.address || "--"}
                            />

                            <InfoCard
                                icon={<FiMapPin />}
                                label="City"
                                value={user.city || "--"}
                            />

                            <InfoCard
                                icon={<FiMapPin />}
                                label="State"
                                value={user.state || "--"}
                            />

                            <InfoCard
                                icon={<FiMapPin />}
                                label="Country"
                                value={user.country || "--"}
                            />

                        </div>

                    </div>

                    {/* Social Profiles */}

                    <div className="mt-10">

                        <h3 className="text-xl font-bold text-gray-800 mb-6">

                            Social Profiles

                        </h3>

                        <div className="grid lg:grid-cols-2 gap-6">

                            <InfoCard
                                icon={<FiUser />}
                                label="LinkedIn"
                                value={
                                    user.linkedInProfile ||
                                    "Not Added"
                                }
                            />

                            <InfoCard
                                icon={<FiUser />}
                                label="Twitter"
                                value={
                                    user.twiterProfile ||
                                    "Not Added"
                                }
                            />

                        </div>

                    </div>

                    {/* Account Information */}

                    <div className="mt-10">

                        <h3 className="text-xl font-bold text-gray-800 mb-6">

                            Account Information

                        </h3>

                        <div className="grid lg:grid-cols-2 gap-6">

                            <InfoCard
                                icon={<FiShield />}
                                label="User ID"
                                value={user.id}
                            />

                            <InfoCard
                                icon={<FiCheckCircle />}
                                label="Verification Status"
                                value={
                                    user.isVerified
                                        ? "Verified"
                                        : "Not Verified"
                                }
                            />

                            <InfoCard
                                icon={<FiCalendar />}
                                label="Joined On"
                                value={new Date(
                                    user.createdAt
                                ).toLocaleString()}
                            />

                            <InfoCard
                                icon={<FiCalendar />}
                                label="Last Updated"
                                value={new Date(
                                    user.updatedAt
                                ).toLocaleString()}
                            />

                        </div>

                    </div>

                </div>

                {/* Footer */}

               {/* Footer */}

<div className="border-t border-gray-200 bg-gray-50 px-8 py-4 flex items-center justify-end gap-3">


    <button
        onClick={onClose}
        className="
            h-11
            px-8
            rounded-xl
            bg-gradient-to-r
            from-green-600
            to-emerald-600
            text-white
            font-semibold
            shadow-lg
            hover:from-green-700
            hover:to-emerald-700
            transition-all
            duration-300
            hover:scale-[1.02]
            active:scale-95
        "
    >
        Close
    </button>

</div>

            </div>

        </div>

    );

};

const InfoCard = ({
    icon,
    label,
    value,
}) => (

    <div
        className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-5
            hover:border-green-400
            hover:shadow-lg
            transition-all
            duration-300
        "
    >

        <div className="flex items-center gap-3 mb-3">

            <div
                className="
                    h-12
                    w-12
                    rounded-xl
                    bg-green-100
                    text-green-600
                    flex
                    items-center
                    justify-center
                    text-xl
                "
            >

                {icon}

            </div>

            <div>

                <p className="text-sm text-gray-500">

                    {label}

                </p>

            </div>

        </div>

        <div
            className="
                text-gray-800
                font-semibold
                break-all
                leading-6
            "
        >

            {value || "--"}

        </div>

    </div>

);

export default UserViewModal;