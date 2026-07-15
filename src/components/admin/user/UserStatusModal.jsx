import { useEffect, useState } from "react";
import {
    FiX,
    FiCheckCircle,
    FiSlash,
    FiAlertTriangle,
} from "react-icons/fi";

const STATUS = [
    {
        value: "ACTIVE",
        title: "Active",
        description: "User can login and use the platform.",
        color: "green",
        icon: <FiCheckCircle size={26} />,
    },
    {
        value: "BLOCKED",
        title: "Blocked",
        description: "User will not be able to access the platform.",
        color: "red",
        icon: <FiSlash size={26} />,
    },
];

const UserStatusModal = ({
    open,
    user,
    loading,
    onClose,
    onSubmit,
}) => {

    const [status, setStatus] = useState("ACTIVE");

    const [reason, setReason] = useState("");

    useEffect(() => {

        if (user) {

            setStatus(user.status);

            setReason("");

        }

    }, [user]);

    if (!open || !user) return null;

    const handleSubmit = () => {

        onSubmit({
            id: user.id,
            status,
            reason,
        });

    };

    return (

      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col overflow-hidden">
               {/* Header */}

<div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 px-6 py-5">

    <button
        onClick={onClose}
        className="absolute right-4 top-4 h-10 w-10 rounded-xl bg-white/20 hover:bg-red-500 transition flex items-center justify-center text-white"
    >
        <FiX size={18} />
    </button>

    <div className="flex items-center gap-4">

        <img
            src={
                user.profileImage ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`
            }
            alt=""
            className="h-16 w-16 rounded-2xl border-4 border-white object-cover shadow-lg"
        />

        <div>

            <h2 className="text-2xl font-bold text-white">
                Update User Status
            </h2>

            <p className="text-blue-100 text-sm mt-1">
                Manage account permissions
            </p>

        </div>

    </div>

</div>

                {/* User Information */}

               {/* Scrollable Content */}

<div className="max-h-[55vh] overflow-y-auto scrollbar-hide">

    {/* User Info */}

    <div className="px-6 py-4 bg-gray-50 border-b">

        <div className="flex items-center justify-between">

            <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                    User
                </p>

                <h3 className="text-lg font-bold text-gray-800">
                    {user.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                    {user.email}
                </p>
            </div>

            <div
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    status === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                }`}
            >
                {status}
            </div>

        </div>

    </div>

    {/* Body */}

    <div className="p-6 space-y-5">

        <div>

            <h3 className="text-lg font-bold text-gray-800">

                Change Status

            </h3>

            <p className="text-sm text-gray-500 mt-1">

                Select the account status below.

            </p>

        </div>

        {/* Status Cards */}

        <div className="grid grid-cols-2 gap-4">

            {STATUS.map((item) => {

                const active = status === item.value;

                return (

                    <button
                        key={item.value}
                        onClick={() => setStatus(item.value)}
                        className={`
                            rounded-xl
                            border
                            p-4
                            transition-all
                            duration-300

                            ${
                                active
                                    ? item.color === "green"
                                        ? "border-green-600 bg-green-50 shadow"
                                        : "border-red-600 bg-red-50 shadow"
                                    : "border-gray-200 hover:border-blue-400 hover:shadow-md"
                            }
                        `}
                    >

                        <div
                            className={`
                                mx-auto
                                h-12
                                w-12
                                rounded-xl
                                flex
                                items-center
                                justify-center

                                ${
                                    item.color === "green"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-600"
                                }
                            `}
                        >

                            {item.icon}

                        </div>

                        <h4 className="mt-3 font-semibold">

                            {item.title}

                        </h4>

                        <p className="mt-1 text-xs text-gray-500">

                            {item.description}

                        </p>

                    </button>

                );

            })}

        </div>

        {/* Block Section */}

        {status === "BLOCKED" && (

            <div className="rounded-xl border border-red-200 bg-red-50 p-5">

                <div className="flex gap-3">

                    <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">

                        <FiAlertTriangle
                            className="text-red-600"
                            size={20}
                        />

                    </div>

                    <div>

                        <h4 className="font-semibold text-red-700">

                            Block User

                        </h4>

                        <p className="text-xs text-red-500 mt-1">

                            This user won't be able to login until activated again.

                        </p>

                    </div>

                </div>

                <textarea
                    rows={4}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Enter block reason..."
                    className="
                        mt-4
                        w-full
                        rounded-xl
                        border
                        border-red-200
                        bg-white
                        p-3
                        text-sm
                        resize-none
                        outline-none
                        focus:ring-2
                        focus:ring-red-500
                    "
                />

                <div className="flex justify-end mt-2">

                    <span className="text-xs text-gray-500">

                        {reason.length}/500

                    </span>

                </div>

            </div>

        )}

        {/* Active Section */}

        {status === "ACTIVE" && (

            <div className="rounded-xl border border-green-200 bg-green-50 p-5">

                <div className="flex gap-3">

                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">

                        <FiCheckCircle
                            className="text-green-600"
                            size={20}
                        />

                    </div>

                    <div>

                        <h4 className="font-semibold text-green-700">

                            User Active

                        </h4>

                        <p className="text-xs text-green-600 mt-1">

                            User will have full access to the platform.

                        </p>

                    </div>

                </div>

            </div>

        )}

    </div>

</div>

                {/* Footer */}

                <div className="border-t bg-gray-50 px-8 py-6 flex justify-end gap-4">

                    <button
                        onClick={onClose}
                        className="
                            h-12
                            px-6
                            rounded-xl
                            border
                            border-gray-300
                            font-medium
                            hover:bg-white
                            transition
                        "
                    >

                        Cancel

                    </button>

                    <button
                        disabled={loading}
                        onClick={handleSubmit}
                        className={`
                            h-12
                            px-8
                            rounded-xl
                            text-white
                            font-semibold
                            shadow-lg
                            transition

                            ${
                                status === "ACTIVE"
                                    ? "bg-green-600 hover:bg-green-700"
                                    : "bg-red-600 hover:bg-red-700"
                            }

                            ${
                                loading
                                    ? "opacity-70 cursor-not-allowed"
                                    : ""
                            }
                        `}
                    >

                        {loading
                            ? "Updating..."
                            : status === "ACTIVE"
                            ? "Activate User"
                            : "Block User"}

                    </button>

                </div>

            </div>

        </div>

    );

};

export default UserStatusModal;
                    