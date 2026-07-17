import { useState } from "react";

import {
    FiHeart,
    FiUsers,
    FiTarget,
    FiArrowRight,
    FiShield,
} from "react-icons/fi";

const amounts = [500, 1000, 2000, 5000];

const CharityDonationCard = ({
    charity,
    statistics,
    onDonate,
}) => {

    const [amount, setAmount] = useState(1000);

    const progress = Math.min(
        Math.round(
            ((statistics.totalRaised || 0) /
                (statistics.goalAmount || 1)) *
                100
        ),
        100
    );

    return (

        <div
            className="
                sticky
                top-24
                rounded-3xl
                border
                border-gray-100
                bg-white
                shadow-xl
                overflow-hidden
            "
        >

            {/* Header */}

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">

                <h2 className="text-2xl font-bold">

                    Support This Charity

                </h2>

                <p className="mt-2 text-green-100">

                    Every donation creates real impact.

                </p>

            </div>

            <div className="p-6">

                {/* Raised */}

                <div className="mb-5">

                    <div className="flex justify-between text-sm font-medium">

                        <span>

                            Raised

                        </span>

                        <span>

                            {progress}%

                        </span>

                    </div>

                    <div className="mt-2 h-3 rounded-full bg-gray-200 overflow-hidden">

                        <div
                            className="
                                h-full
                                rounded-full
                                bg-gradient-to-r
                                from-green-500
                                to-emerald-600
                            "
                            style={{
                                width: `${progress}%`,
                            }}
                        />

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">

                    <div className="rounded-2xl bg-green-50 p-4">

                        <p className="text-sm text-gray-500">

                            Raised

                        </p>

                        <h3 className="mt-1 text-xl font-bold text-green-700">

                            ₹
                            {Number(
                                statistics.totalRaised || 0
                            ).toLocaleString("en-IN")}

                        </h3>

                    </div>

                    <div className="rounded-2xl bg-blue-50 p-4">

                        <p className="text-sm text-gray-500">

                            Goal

                        </p>

                        <h3 className="mt-1 text-xl font-bold text-blue-700">

                            ₹
                            {Number(
                                statistics.goalAmount || 0
                            ).toLocaleString("en-IN")}

                        </h3>

                    </div>

                </div>

                {/* Quick Amount */}

                <h4 className="font-semibold text-gray-800 mb-4">

                    Choose Amount

                </h4>

                <div className="grid grid-cols-2 gap-3">

                    {amounts.map((item) => (

                        <button
                            key={item}
                            onClick={() =>
                                setAmount(item)
                            }
                            className={`
                                rounded-xl
                                py-3
                                font-semibold
                                transition
                                ${
                                    amount === item
                                        ? "bg-green-600 text-white"
                                        : "bg-gray-100 hover:bg-green-100"
                                }
                            `}
                        >

                            ₹{item}

                        </button>

                    ))}

                </div>

                {/* Custom */}

                <div className="mt-5">

                    <label className="text-sm font-semibold text-gray-700">

                        Custom Amount

                    </label>

                    <input
                        type="number"
                        min={1}
                        value={amount}
                        onChange={(e) =>
                            setAmount(
                                Number(e.target.value)
                            )
                        }
                        className="
                            mt-2
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-gray-200
                            px-4
                            outline-none
                            focus:border-green-500
                            focus:ring-4
                            focus:ring-green-100
                        "
                    />

                </div>

                {/* Charity Info */}

                <div className="mt-6 space-y-4">

                    <div className="flex items-center gap-3">

                        <FiUsers className="text-green-600" />

                        <span className="text-gray-700">

                            {statistics.totalDonors || 0} Donors

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <FiTarget className="text-green-600" />

                        <span className="text-gray-700">

                            {statistics.totalProjects || 0} Projects

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <FiShield className="text-green-600" />

                        <span className="text-gray-700">

                            Verified Organization

                        </span>

                    </div>

                </div>

                {/* Donate */}

                <button
                    onClick={() => onDonate?.(amount)}
                    className="
                        mt-8
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-green-600
                        to-emerald-600
                        py-4
                        text-lg
                        font-bold
                        text-white
                        shadow-lg
                        transition-all
                        hover:scale-[1.02]
                    "
                >

                    <FiHeart />

                    Donate ₹{amount}

                    <FiArrowRight />

                </button>

                <p className="mt-5 text-center text-sm text-gray-500">

                    🔒 Secure payment powered by Razorpay / Stripe

                </p>

            </div>

        </div>

    );

};

export default CharityDonationCard;