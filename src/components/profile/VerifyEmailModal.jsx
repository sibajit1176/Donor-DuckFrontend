import { useEffect, useRef, useState } from "react";
import {
    FiX,
    FiMail,
    FiShield,
    FiRefreshCw,
    FiArrowRight,
} from "react-icons/fi";

const VerifyEmailModal = ({
    open,
    onClose,
    email,
    onVerify,
    onResend,
    loading,
    resendLoading,
}) => {

    const inputRefs = useRef([]);

    const [otp, setOtp] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    const [timer, setTimer] = useState(60);

    useEffect(() => {

        if (!open) return;

        setOtp([
            "",
            "",
            "",
            "",
            "",
            "",
        ]);

        setTimer(60);

    }, [open]);

    useEffect(() => {

        if (!open) return;

        if (timer <= 0) return;

        const interval = setInterval(() => {

            setTimer((prev) => prev - 1);

        }, 1000);

        return () => clearInterval(interval);

    }, [timer, open]);

    const handleChange = (value, index) => {

        if (!/^\d?$/.test(value)) return;

        const copy = [...otp];

        copy[index] = value;

        setOtp(copy);

        if (
            value &&
            index < 5
        ) {

            inputRefs.current[index + 1]?.focus();

        }

    };

    const handleKeyDown = (
        e,
        index
    ) => {

        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0
        ) {

            inputRefs.current[index - 1]?.focus();

        }

    };

    const handlePaste = (e) => {

        e.preventDefault();

        const text = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 6);

        if (!text) return;

        const arr = [...otp];

        text.split("").forEach((item, i) => {

            arr[i] = item;

        });

        setOtp(arr);

    };

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

    <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-6 py-5 text-white">

            <button
                onClick={onClose}
                className="
                    absolute
                    top-4
                    right-4
                    h-9
                    w-9
                    rounded-lg
                    bg-white/20
                    hover:bg-white/30
                    flex
                    items-center
                    justify-center
                    transition
                "
            >
                <FiX size={18} />
            </button>

            <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">

                <FiShield size={26} />

            </div>

            <h2 className="mt-4 text-2xl font-bold">

                Verify Email

            </h2>

            <p className="mt-1 text-sm text-green-100">

                Enter the 6-digit code sent to your email.

            </p>

        </div>

        {/* Body */}

        <div className="p-6">

            {/* Email */}

            <div className="rounded-xl border border-green-100 bg-green-50 p-3 flex items-center gap-3">

                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">

                    <FiMail
                        className="text-green-600"
                        size={18}
                    />

                </div>

                <div className="min-w-0">

                    <p className="text-[10px] uppercase tracking-wide text-gray-500">

                        Verification Email

                    </p>

                    <p className="text-sm font-semibold text-gray-800 truncate">

                        {email}

                    </p>

                </div>

            </div>

            {/* OTP */}

            <div
                className="mt-6 flex justify-center gap-2"
                onPaste={handlePaste}
            >

                {otp.map((digit, index) => (

                    <input
                        key={index}
                        ref={(el) =>
                            (inputRefs.current[index] = el)
                        }
                        value={digit}
                        maxLength={1}
                        inputMode="numeric"
                        onChange={(e) =>
                            handleChange(
                                e.target.value,
                                index
                            )
                        }
                        onKeyDown={(e) =>
                            handleKeyDown(
                                e,
                                index
                            )
                        }
                        className="
                            h-12
                            w-12
                            rounded-xl
                            border-2
                            border-gray-200
                            text-center
                            text-lg
                            font-bold
                            outline-none
                            transition
                            focus:border-green-500
                            focus:ring-2
                            focus:ring-green-100
                        "
                    />

                ))}

            </div>

            {/* Security Card */}

            <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-3">

                <div className="flex items-start gap-3">

                    <div className="h-9 w-9 rounded-lg bg-blue-100 flex items-center justify-center">

                        <FiShield
                            className="text-blue-600"
                            size={18}
                        />

                    </div>

                    <div>

                        <h4 className="text-sm font-semibold text-gray-800">

                            Security Verification

                        </h4>

                        <p className="text-xs text-gray-600 mt-1 leading-5">

                            The OTP expires in 10 minutes.

                        </p>

                    </div>

                </div>

            </div>
                        {/* Verify Button */}

            <button
                onClick={() => onVerify(otp.join(""))}
                disabled={
                    loading ||
                    otp.join("").length !== 6
                }
                className={`
                    mt-5
                    w-full
                    h-12
                    rounded-xl
                    bg-gradient-to-r
                    from-green-600
                    to-emerald-600
                    text-white
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    transition-all

                    ${
                        loading ||
                        otp.join("").length !== 6
                            ? "opacity-60 cursor-not-allowed"
                            : "hover:from-green-700 hover:to-emerald-700 hover:shadow-lg"
                    }
                `}
            >
                {loading ? (
                    <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />

                        Verifying...
                    </>
                ) : (
                    <>
                        Verify Email

                        <FiArrowRight size={18} />
                    </>
                )}
            </button>

            {/* Divider */}

            <div className="flex items-center my-5">

                <div className="flex-1 border-t border-gray-200" />

                <span className="px-3 text-[11px] uppercase tracking-wider text-gray-400">

                    Resend OTP

                </span>

                <div className="flex-1 border-t border-gray-200" />

            </div>

            {/* Timer / Resend */}

            {timer > 0 ? (

                <div className="flex items-center justify-between rounded-xl bg-gray-50 border border-gray-200 px-4 py-3">

                    <div>

                        <p className="text-xs text-gray-500">

                            You can request a new OTP in

                        </p>

                        <p className="font-bold text-green-600">

                            00:{String(timer).padStart(2, "0")}

                        </p>

                    </div>

                    <FiRefreshCw
                        className="text-gray-400"
                        size={20}
                    />

                </div>

            ) : (

                <button
                    onClick={onResend}
                    disabled={resendLoading}
                    className="
                        w-full
                        h-11
                        rounded-xl
                        border
                        border-green-200
                        bg-green-50
                        text-green-700
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-2
                        hover:bg-green-100
                        transition
                        disabled:opacity-60
                    "
                >
                    <FiRefreshCw
                        className={
                            resendLoading
                                ? "animate-spin"
                                : ""
                        }
                    />

                    {resendLoading
                        ? "Sending OTP..."
                        : "Resend OTP"}

                </button>

            )}

            {/* Footer Buttons */}

            <div className="grid grid-cols-2 gap-3 mt-5">

                <button
                    onClick={onClose}
                    className="
                        h-11
                        rounded-xl
                        border
                        border-gray-200
                        hover:bg-gray-50
                        transition
                        font-medium
                        text-gray-700
                    "
                >
                    Cancel
                </button>

                <button
                    onClick={() => onVerify(otp.join(""))}
                    disabled={
                        loading ||
                        otp.join("").length !== 6
                    }
                    className="
                        h-11
                        rounded-xl
                        bg-green-600
                        hover:bg-green-700
                        text-white
                        font-semibold
                        transition
                        disabled:opacity-60
                    "
                >
                    Continue
                </button>

            </div>

        </div>

    </div>

</div>

    );

};

export default VerifyEmailModal;