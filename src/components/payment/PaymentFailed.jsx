import {
    FiXCircle,
    FiRefreshCw,
    FiHome,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PaymentFailed = () => {

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
                        bg-red-100
                        flex
                        items-center
                        justify-center
                    "
                >

                    <FiXCircle
                        size={65}
                        className="text-red-600"
                    />

                </div>

                <h2 className="mt-6 text-4xl font-bold text-gray-800">

                    Payment Failed

                </h2>

                <p className="mt-3 text-gray-500 text-center max-w-lg leading-7">

                    Unfortunately your payment could not be completed.
                    No money has been deducted. Please try again.

                </p>

            </div>

            <div className="mt-10 rounded-3xl bg-red-50 border border-red-100 p-8">

                <div className="flex items-center gap-4">

                    <FiXCircle
                        size={40}
                        className="text-red-500"
                    />

                    <div>

                        <h3 className="font-bold text-xl">

                            Transaction Failed

                        </h3>

                        <p className="text-gray-600 mt-1">

                            Please retry your donation or choose another payment method.

                        </p>

                    </div>

                </div>

            </div>

            <div className="mt-8 flex justify-center gap-4">

                <button
                    onClick={() => window.history.back()}
                    className="
                        flex
                        items-center
                        gap-2
                        h-12
                        px-7
                        rounded-xl
                        bg-red-600
                        text-white
                        hover:bg-red-700
                        transition
                    "
                >

                    <FiRefreshCw />

                    Try Again

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

export default PaymentFailed;