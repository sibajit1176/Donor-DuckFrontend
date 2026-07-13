import {
    FiClock,
    FiRefreshCw,
    FiHome,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PaymentPending = ({
    onRefresh,
}) => {

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
                        bg-yellow-100
                        flex
                        items-center
                        justify-center
                    "
                >

                    <FiClock
                        size={60}
                        className="text-yellow-500 animate-spin"
                    />

                </div>

                <h2 className="mt-6 text-4xl font-bold text-gray-800">

                    Payment Processing

                </h2>

                <p className="mt-3 text-center text-gray-500 max-w-lg leading-7">

                    Your payment is currently being verified.

                    <br />

                    Please wait a few moments while we confirm your donation.

                </p>

            </div>

            <div className="mt-10 rounded-3xl bg-yellow-50 border border-yellow-200 p-8">

                <div className="flex items-center gap-4">

                    <div className="h-14 w-14 rounded-full bg-yellow-100 flex items-center justify-center">

                        <FiClock
                            className="text-yellow-600 animate-spin"
                            size={28}
                        />

                    </div>

                    <div>

                        <h3 className="text-xl font-bold">

                            Verification in Progress

                        </h3>

                        <p className="text-gray-600 mt-1">

                            Please don't close this page.
                            Your payment status will update shortly.

                        </p>

                    </div>

                </div>

            </div>

            <div className="mt-8 flex justify-center gap-4">

                <button
                    onClick={onRefresh}
                    className="
                        flex
                        items-center
                        gap-2
                        h-12
                        px-7
                        rounded-xl
                        bg-yellow-500
                        text-white
                        hover:bg-yellow-600
                        transition
                    "
                >

                    <FiRefreshCw />

                    Refresh Status

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

                    Back Home

                </button>

            </div>

        </div>

    );

};

export default PaymentPending;