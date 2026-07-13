import {
    FiDownload,
    FiFileText,
    FiCheckCircle,
    FiUser,
    FiHeart,
    FiCalendar,
    FiHash,
} from "react-icons/fi";

const Row = ({ icon, label, value }) => (
    <div className="flex justify-between items-center py-4 border-b border-gray-100 last:border-none">
        <div className="flex items-center gap-3 text-gray-500">
            {icon}
            <span>{label}</span>
        </div>

        <div className="font-semibold text-gray-800 text-right break-all">
            {value}
        </div>
    </div>
);

const DonationReceipt = ({
    payment,
    onDownload,
}) => {
    console.log(payment,"=========");
    
    return (
        <div
            className="
                bg-white
                rounded-[32px]
                shadow-xl
                border
                border-gray-100
                overflow-hidden
            "
        >
            {/* Header */}

            <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 p-8 text-white">

                <div className="flex justify-between items-center">

                    <div className="flex items-center gap-4">

                        <div className="h-16 w-16 rounded-3xl bg-white/20 flex items-center justify-center">

                            <FiFileText size={30} />

                        </div>

                        <div>

                            <h2 className="text-3xl font-bold">

                                Donation Receipt

                            </h2>

                            <p className="text-green-100 mt-1">

                                Thank you for your generous contribution ❤️

                            </p>

                        </div>

                    </div>

                    <FiCheckCircle
                        size={45}
                        className="text-white"
                    />

                </div>

            </div>

            {/* Receipt */}

            <div className="p-8">

                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6">

                    <Row
                        icon={<FiHash />}
                        label="Receipt No."
                        value={payment.receiptNumber}
                    />

                    <Row
                        icon={<FiHash />}
                        label="Transaction ID"
                        value={payment.orderId}
                    />

                    <Row
                        icon={<FiUser />}
                        label="Donor"
                        value={payment.donorName}
                    />

                    <Row
                        icon={<FiHeart />}
                        label="Organization"
                        value={payment.organizationName}
                    />

                    <Row
                        icon={<FiHeart />}
                        label="Project"
                        value={payment.projectTitle}
                    />

                    <Row
                        icon={<FiCheckCircle />}
                        label="Payment Status"
                        value={payment.status}
                    />

                    <Row
                        icon={<FiCalendar />}
                        label="Date"
                        value={payment.date}
                    />

                    <Row
                        icon={<FiHeart />}
                        label="Amount"
                        value={`₹${Number(
                            payment.amount
                        ).toLocaleString()}`}
                    />

                    {payment.message && (
                        <div className="pt-5">

                            <p className="font-semibold text-gray-700">

                                Message

                            </p>

                            <p className="mt-2 text-gray-600 leading-7">

                                "{payment.message}"

                            </p>

                        </div>
                    )}

                </div>

                <div className="mt-8 flex justify-center">

                    <button
                        onClick={onDownload}
                        className="
                            relative
                            overflow-hidden
                            inline-flex
                            items-center
                            gap-2
                            h-12
                            px-8
                            rounded-xl
                            bg-gradient-to-r
                            from-green-600
                            via-emerald-500
                            to-green-600
                            text-white
                            font-semibold
                            shadow-lg
                            hover:shadow-xl
                            hover:-translate-y-0.5
                            transition-all
                            before:absolute
                            before:top-0
                            before:-left-full
                            before:h-full
                            before:w-1/2
                            before:bg-white/20
                            before:skew-x-12
                            before:transition-all
                            before:duration-700
                            hover:before:left-[130%]
                        "
                    >

                        <FiDownload className="relative z-10" />

                        <span className="relative z-10">

                            Download Receipt

                        </span>

                    </button>

                </div>

            </div>

        </div>
    );
};

export default DonationReceipt;