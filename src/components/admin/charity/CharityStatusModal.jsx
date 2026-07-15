import { useState, useEffect } from "react";
import {
    FiX,
    FiCheckCircle,
    FiXCircle,
    FiClock,
    FiFileText,
} from "react-icons/fi";

const STATUS = [
    {
        value: "PENDING",
        title: "Pending",
        color: "yellow",
        icon: <FiClock size={22} />,
    },
    {
        value: "APPROVED",
        title: "Approved",
        color: "green",
        icon: <FiCheckCircle size={22} />,
    },
    {
        value: "REJECTED",
        title: "Rejected",
        color: "red",
        icon: <FiXCircle size={22} />,
    },
];

const CharityStatusModal = ({
    open,
    charity,
    loading,
    onClose,
    onSubmit,
}) => {
    const [approvalStatus, setApprovalStatus] = useState("PENDING");
    const [rejectionReason, setRejectionReason] = useState("");

    useEffect(() => {
        if (charity) {
            setApprovalStatus(charity.approvalStatus);
            setRejectionReason(charity.rejectionReason || "");
        }
    }, [charity]);

    if (!open || !charity) return null;

    const handleSubmit = () => {
        onSubmit({
            id: charity.id,
            approvalStatus,
            rejectionReason,
        });
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6">

           <div className="bg-white rounded-[26px] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">

                {/* Header */}

<div className="bg-gradient-to-r from-green-600 to-emerald-600 px-7 py-5 text-white relative">
                    <button
                        onClick={onClose}
                        className="absolute right-5 top-5 h-10 w-10 rounded-xl bg-white/20 hover:bg-red-500 transition flex items-center justify-center"
                    >
                        <FiX size={20} />
                    </button>

                    <div className="flex items-center gap-5">

<div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold">
                            {charity.organizationName
                                ?.charAt(0)
                                ?.toUpperCase()}

                        </div>

                        <div>

                           <h2 className="text-2xl font-bold">

                                Update Charity

                            </h2>

                          <p className="text-green-100 mt-1 text-sm">

                                Change charity approval status

                            </p>

                        </div>

                    </div>

                </div>

                {/* Charity Info */}

<div className="px-8 py-4 border-b bg-green-50">
<div className="grid md:grid-cols-2 gap-4">
                        <div>

                            <p className="text-xs uppercase tracking-wider text-gray-500">

                                Organization Name

                            </p>

                            <h3 className="font-bold text-lg text-gray-800 mt-1">

                                {charity.organizationName}

                            </h3>

                        </div>

                        <div>

                            <p className="text-xs uppercase tracking-wider text-gray-500">

                                Registration Number

                            </p>

                            <h3 className="font-semibold text-gray-800 mt-1">

                                {charity.registrationNumber}

                            </h3>

                        </div>

                    </div>

                </div>

                {/* Body */}

                <div className="
    p-6
    space-y-6
    max-h-[45vh]
    overflow-y-auto
    custom-scrollbar
">

                    {/* Status Selection */}

                    <div>

                        <div className="flex items-center justify-between mb-5">

                            <div>

                                <h3 className="text-lg font-bold text-gray-800">
                                    Approval Decision
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                    Select the new approval status for this charity.
                                </p>

                            </div>

                        </div>

                        <div className="flex rounded-2xl bg-gray-100 p-2 gap-2">

                            {STATUS.map((item) => {

                                const active =
                                    approvalStatus === item.value;

                                return (

                                    <button
                                        key={item.value}
                                        onClick={() =>
                                            setApprovalStatus(item.value)
                                        }
                                        className={`
                            flex-1
                            rounded-xl
                            px-4
                            py-4
                            transition-all
                            duration-300
                            border

                            ${active
                                                ? item.color === "green"
                                                    ? "bg-green-600 border-green-600 text-white shadow-lg"
                                                    : item.color === "red"
                                                        ? "bg-red-600 border-red-600 text-white shadow-lg"
                                                        : "bg-yellow-500 border-yellow-500 text-white shadow-lg"
                                                : "bg-white border-transparent hover:border-green-300"
                                            }
                        `}
                                    >

                                        <div className="flex flex-col items-center">

                                            <div
                                                className={`
                                    h-12
                                    w-12
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    mb-3

                                    ${active
                                                        ? "bg-white/20"
                                                        : item.color === "green"
                                                            ? "bg-green-100 text-green-600"
                                                            : item.color === "red"
                                                                ? "bg-red-100 text-red-600"
                                                                : "bg-yellow-100 text-yellow-600"
                                                    }
                                `}
                                            >
                                                {item.icon}
                                            </div>

                                            <span className="font-semibold">
                                                {item.title}
                                            </span>

                                            <span
                                                className={`text-xs mt-1 ${active
                                                        ? "text-white/80"
                                                        : "text-gray-500"
                                                    }`}
                                            >
                                                {item.value === "APPROVED"
                                                    ? "Charity becomes active"
                                                    : item.value === "REJECTED"
                                                        ? "Application rejected"
                                                        : "Waiting for review"}
                                            </span>

                                        </div>

                                    </button>

                                );

                            })}

                        </div>

                    </div>

                    {/* Rejection Reason */}

                    {approvalStatus === "REJECTED" && (

                        <div
                            className="
                rounded-2xl
                border
                border-red-200
                bg-red-50
                p-6
                animate-in
                fade-in
            "
                        >

                            <div className="flex items-center gap-3 mb-4">

                                <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center">

                                    <FiFileText
                                        className="text-red-600"
                                        size={22}
                                    />

                                </div>

                                <div>

                                    <h4 className="font-bold text-red-700">
                                        Rejection Reason
                                    </h4>

                                    <p className="text-sm text-red-500">
                                        This message will be visible to the charity.
                                    </p>

                                </div>

                            </div>

                            <textarea
                                rows={5}
                                value={rejectionReason}
                                onChange={(e) =>
                                    setRejectionReason(e.target.value)
                                }
                                placeholder="Example: Registration document is invalid, organization details do not match government records..."
                                className="
                    w-full
                    rounded-xl
                    border
                    border-red-200
                    bg-white
                    p-4
                    text-sm
                    resize-none
                    outline-none
                    focus:ring-2
                    focus:ring-red-500
                "
                            />

                            <div className="flex justify-between mt-3 text-xs text-gray-500">

                                <span>
                                    Provide a clear explanation.
                                </span>

                                <span>
                                    {rejectionReason.length}/500
                                </span>

                            </div>

                        </div>

                    )}

                    {/* Approved Success */}

                    {approvalStatus === "APPROVED" && (

                        <div className="rounded-2xl bg-green-50 border border-green-200 p-5 flex items-center gap-4">

                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">

                                <FiCheckCircle
                                    className="text-green-600"
                                    size={24}
                                />

                            </div>

                            <div>

                                <h4 className="font-semibold text-green-700">
                                    Ready to Approve
                                </h4>

                                <p className="text-sm text-green-600 mt-1">
                                    This charity will be approved and can start creating fundraising projects.
                                </p>

                            </div>

                        </div>

                    )}

                    {/* Pending */}

                    {approvalStatus === "PENDING" && (

                        <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-5 flex items-center gap-4">

                            <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">

                                <FiClock
                                    className="text-yellow-600"
                                    size={24}
                                />

                            </div>

                            <div>

                                <h4 className="font-semibold text-yellow-700">
                                    Keep Pending
                                </h4>

                                <p className="text-sm text-yellow-600 mt-1">
                                    The application will remain under review until a final decision is made.
                                </p>

                            </div>

                        </div>

                    )}

                </div>

                {/* Footer */}

                <div className="border-t px-8 py-6 flex justify-end gap-4 bg-gray-50">

                    <button
                        onClick={onClose}
                        className="
                            px-6
                            h-12
                            rounded-xl
                            border
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

                        ${approvalStatus === "APPROVED"
                                ? "bg-green-600 hover:bg-green-700"
                                : approvalStatus === "REJECTED"
                                    ? "bg-red-600 hover:bg-red-700"
                                    : "bg-yellow-500 hover:bg-yellow-600"
                            }

                        ${loading && "opacity-70 cursor-not-allowed"}

                        `}
                    >
                        {loading ? "Updating..." : "Update Status"}
                    </button>

                </div>

            </div>

        </div>
    );
};

export default CharityStatusModal;