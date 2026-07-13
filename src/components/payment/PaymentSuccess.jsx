import {
    FiCheckCircle,
    FiDownload,
    FiHome,
    FiFolder,
    FiCreditCard,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = ({ payment,onDownload }) => {
    

    const navigate = useNavigate();

    return (

        <div
            className="
                bg-white
                rounded-[32px]
                shadow-xl
                border
                border-gray-100
                p-10
            "
        >

            <div className="flex flex-col items-center">

                <div
                    className="
                        h-28
                        w-28
                        rounded-full
                        bg-green-100
                        flex
                        items-center
                        justify-center
                        animate-bounce
                    "
                >

                    <FiCheckCircle
                        size={65}
                        className="text-green-600"
                    />

                </div>

                <h2 className="mt-6 text-4xl font-bold text-gray-800">

                    Payment Successful

                </h2>

                <p className="mt-2 text-gray-500">

                    Your donation has been received successfully.

                </p>

            </div>

            <div className="mt-10 rounded-3xl bg-green-50 border border-green-100 p-8">

                <div className="grid md:grid-cols-2 gap-6">

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
                        value={payment.date}
                    />

                </div>

            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

                <button
                    className="
                        flex
                        items-center
                        gap-2
                        h-12
                        px-7
                        rounded-xl
                        bg-green-600
                        text-white
                        hover:bg-green-700
                        transition
                    "
                    onClick={onDownload}
                >

                    <FiDownload />

                    Download Receipt

                </button>

                <button
                    onClick={() =>
                        navigate(`/project/${donation.projectId}`)
                    }
                    className="
                        flex
                        items-center
                        gap-2
                        h-12
                        px-7
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
                        h-12
                        px-7
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

        <p className="text-sm text-gray-500">

            {label}

        </p>

        <h3 className="font-bold text-lg text-gray-800 mt-1">

            {value}

        </h3>

    </div>

);

export default PaymentSuccess;