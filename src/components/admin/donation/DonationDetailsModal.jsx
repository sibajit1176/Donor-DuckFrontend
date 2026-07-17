import {
    FiX,
    FiUser,
    FiHeart,
    FiCalendar,
    FiCreditCard,
    FiCheckCircle,
    FiClock,
    FiXCircle,
    FiRotateCcw,
} from "react-icons/fi";

const DonationDetailsModal = ({
    open,
    onClose,
    donation,
}) => {

    if (!open || !donation) return null;

    const getStatus = (status) => {

        switch (status) {

            case "SUCCESS":

                return {
                    color: "bg-green-100 text-green-700",
                    icon: <FiCheckCircle />,
                };

            case "PENDING":

                return {
                    color: "bg-yellow-100 text-yellow-700",
                    icon: <FiClock />,
                };

            case "FAILED":

                return {
                    color: "bg-red-100 text-red-700",
                    icon: <FiXCircle />,
                };

            case "REFUNDED":

                return {
                    color: "bg-purple-100 text-purple-700",
                    icon: <FiRotateCcw />,
                };

            default:

                return {
                    color: "bg-gray-100 text-gray-700",
                    icon: <FiClock />,
                };

        }

    };

    const badge = getStatus(donation.status);

    return (

        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-5">

            <div className="w-full max-w-3xl rounded-3xl overflow-hidden bg-white shadow-2xl">

                {/* Header */}

                <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-8 py-6 text-white">

                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 h-10 w-10 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
                    >

                        <FiX size={20} />

                    </button>

                    <h2 className="text-3xl font-bold">

                        Donation Details

                    </h2>

                    <p className="mt-2 text-green-100">

                        Complete information about this donation.

                    </p>

                </div>

                {/* Body */}

                <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">

                    {/* Donor Information */}

                    <div className="rounded-2xl border border-gray-100 shadow-sm">

                        <div className="px-6 py-4 border-b bg-gray-50">

                            <h3 className="text-lg font-bold text-gray-800">

                                Donor Information

                            </h3>

                        </div>

                        <div className="grid md:grid-cols-2 gap-6 p-6">

                            <div>

                                <p className="text-sm text-gray-500">

                                    Donor Name

                                </p>

                                <p className="mt-1 font-semibold text-gray-800 flex items-center gap-2">

                                    <FiUser />

                                    {donation.donorName}

                                </p>

                            </div>

                            <div>

                                <p className="text-sm text-gray-500">

                                    Order ID

                                </p>

                                <p className="mt-1 font-semibold text-gray-800">

                                    {donation.orderId}

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Donation Information */}

                    <div className="rounded-2xl border border-gray-100 shadow-sm">

                        <div className="px-6 py-4 border-b bg-gray-50">

                            <h3 className="text-lg font-bold text-gray-800">

                                Donation Information

                            </h3>

                        </div>

                        <div className="grid md:grid-cols-2 gap-6 p-6">

                            <div>

                                <p className="text-sm text-gray-500">

                                    Charity

                                </p>

                                <p className="mt-1 font-semibold">

                                    {donation.organizationName}

                                </p>

                            </div>

                            <div>

                                <p className="text-sm text-gray-500">

                                    Project

                                </p>

                                <p className="mt-1 font-semibold">

                                    {donation.projectName}

                                </p>

                            </div>

                            <div>

                                <p className="text-sm text-gray-500">

                                    Amount

                                </p>

                                <p className="mt-1 text-2xl font-bold text-green-600 flex items-center gap-2">

                                    <FiHeart />

                                    ₹{Number(donation.amount).toLocaleString("en-IN")}

                                </p>

                            </div>
                                                        <div>

                                <p className="text-sm text-gray-500">

                                    Donation Date

                                </p>

                                <p className="mt-1 font-semibold flex items-center gap-2">

                                    <FiCalendar />

                                    {new Date(
                                        donation.createdAt
                                    ).toLocaleString()}

                                </p>

                            </div>

                            <div>

                                <p className="text-sm text-gray-500">

                                    Payment Status

                                </p>

                                <span
                                    className={`
                                        mt-2
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        px-4
                                        py-2
                                        text-sm
                                        font-semibold
                                        ${badge.color}
                                    `}
                                >

                                    {badge.icon}

                                    {donation.status}

                                </span>

                            </div>

                            <div>

                                <p className="text-sm text-gray-500">

                                    Payment Method

                                </p>

                                <p className="mt-1 font-semibold flex items-center gap-2">

                                    <FiCreditCard />

                                    Razorpay

                                </p>

                            </div>

                            <div>

                                <p className="text-sm text-gray-500">

                                    Transaction ID

                                </p>

                                <p className="mt-1 font-semibold break-all">

                                    {donation.orderId}

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Message */}

                    <div className="rounded-2xl border border-gray-100 shadow-sm">

                        <div className="px-6 py-4 border-b bg-gray-50">

                            <h3 className="text-lg font-bold text-gray-800">

                                Donor Message

                            </h3>

                        </div>

                        <div className="p-6">

                            {donation.message ? (

                                <p className="text-gray-700 leading-7">

                                    {donation.message}

                                </p>

                            ) : (

                                <p className="text-gray-400 italic">

                                    No message provided by donor.

                                </p>

                            )}

                        </div>

                    </div>

                    {/* Additional Details */}

                    <div className="rounded-2xl border border-gray-100 shadow-sm">

                        <div className="px-6 py-4 border-b bg-gray-50">

                            <h3 className="text-lg font-bold text-gray-800">

                                Additional Details

                            </h3>

                        </div>

                        <div className="grid md:grid-cols-2 gap-6 p-6">

                            <div>

                                <p className="text-sm text-gray-500">

                                    Anonymous Donation

                                </p>

                                <p className="mt-1 font-semibold">

                                    {donation.isAnonymous
                                        ? "Yes"
                                        : "No"}

                                </p>

                            </div>

                            <div>

                                <p className="text-sm text-gray-500">

                                    Donation ID

                                </p>

                                <p className="mt-1 font-semibold break-all">

                                    {donation.id}

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Footer */}

                <div className="border-t bg-gray-50 px-8 py-5 flex justify-end">

                    <button
                        onClick={onClose}
                        className="
                            rounded-xl
                            bg-green-600
                            px-6
                            py-3
                            font-semibold
                            text-white
                            hover:bg-green-700
                            transition
                        "
                    >

                        Close

                    </button>

                </div>

            </div>

        </div>

    );

};

export default DonationDetailsModal;
                            