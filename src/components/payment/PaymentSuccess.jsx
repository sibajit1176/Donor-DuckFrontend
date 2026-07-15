import {
    FiCheckCircle,
    FiDownload,
    FiHome,
    FiFolder,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = ({ payment, onDownload }) => {

    const navigate = useNavigate();

    return (

        <div
            className="
                bg-white
                rounded-3xl
                shadow-xl
                border
                border-gray-100
                p-6
            "
        >

            {/* Success Header */}

            <div className="flex flex-col items-center">

                <div
                    className="
                        h-20
                        w-20
                        rounded-full
                        bg-green-100
                        flex
                        items-center
                        justify-center
                    "
                >

                    <FiCheckCircle
                        size={48}
                        className="text-green-600"
                    />

                </div>

                <h2 className="mt-4 text-3xl font-bold text-gray-800">

                    Payment Successful

                </h2>

                <p className="mt-1 text-sm text-gray-500">

                    Thank you! Your donation has been received successfully.

                </p>

            </div>

            {/* Payment Details */}

            <div className="mt-6 rounded-2xl bg-green-50 border border-green-100 p-5">

                <div className="grid grid-cols-2 gap-x-8 gap-y-4">

                    <Info
                        label="Amount"
                        value={`₹${Number(payment.amount).toLocaleString()}`}
                    />

                    <Info
                        label="Status"
                        value={payment.status}
                    />

                    <Info
                        label="Project"
                        value={payment.projectTitle}
                    />

                    <Info
                        label="Organization"
                        value={payment.organizationName}
                    />

                    <Info
                        label="Transaction ID"
                        value={payment.orderId}
                    />

                    <Info
                        label="Date"
                        value={new Date(payment.createdAt).toLocaleString("en-IN")}
                    />

                </div>

            </div>

            {/* Action Buttons */}

            <div className="mt-6 flex flex-wrap justify-center gap-3">

                <button
                    onClick={onDownload}
                    className="
                        flex
                        items-center
                        gap-2
                        h-11
                        px-5
                        rounded-xl
                        bg-green-600
                        hover:bg-green-700
                        text-white
                        font-medium
                        transition
                    "
                >

                    <FiDownload />

                    Download Receipt

                </button>

                <button
                    onClick={() =>
                        navigate(`/project/${payment.projectId}`)
                    }
                    className="
                        flex
                        items-center
                        gap-2
                        h-11
                        px-5
                        rounded-xl
                        border
                        border-gray-200
                        hover:bg-gray-100
                        transition
                    "
                >

                    <FiFolder />

                    View Project

                </button>

                <button
                    onClick={() => navigate("/")}
                    className="
                        flex
                        items-center
                        gap-2
                        h-11
                        px-5
                        rounded-xl
                        border
                        border-gray-200
                        hover:bg-gray-100
                        transition
                    "
                >

                    <FiHome />

                    Home

                </button>

            </div>

        </div>

    );

};

const Info = ({ label, value }) => (

    <div>

        <p className="text-xs text-gray-500 uppercase tracking-wide">

            {label}

        </p>

        <p className="mt-1 font-semibold text-gray-800 break-words">

            {value}

        </p>

    </div>

);

export default PaymentSuccess;