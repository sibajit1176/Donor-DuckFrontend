import { FiHeart } from "react-icons/fi";

const PaymentHeader = () => {
    return (
        <div
            className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-gradient-to-r
                from-green-700
                via-emerald-600
                to-green-600
                px-10
                py-10
                text-white
                shadow-xl
            "
        >
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/10" />

            <div className="relative flex items-center gap-5">

                <div className="h-20 w-20 rounded-3xl bg-white/20 backdrop-blur flex items-center justify-center">

                    <FiHeart size={38} />

                </div>

                <div>

                    <h1 className="text-4xl font-bold">
                        Donation Payment
                    </h1>

                    <p className="mt-2 text-green-100 text-lg">
                        Thank you for supporting a meaningful cause ❤️
                    </p>

                </div>

            </div>
        </div>
    );
};

export default PaymentHeader;