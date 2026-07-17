import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    FiShield,
    FiMail,
    FiRefreshCw,
    FiArrowRight,
} from "react-icons/fi";
import { toast } from "react-toastify";

import {
    verifyOtp,
    resendOtp,
} from "../../services/auth.service";

const VerifyOtp = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const email = location.state?.email || "";

    const inputRefs = useRef([]);

    const [loading, setLoading] = useState(false);

    const [resendLoading, setResendLoading] =
        useState(false);

    const [timer, setTimer] = useState(60);

    const [otp, setOtp] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    useEffect(() => {

        if (!email) {

            navigate("/forgot-password");

        }

    }, [email, navigate]);

    useEffect(() => {

        if (timer <= 0) return;

        const interval = setInterval(() => {

            setTimer((prev) => prev - 1);

        }, 1000);

        return () => clearInterval(interval);

    }, [timer]);

    const handleChange = (value, index) => {

        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];

        newOtp[index] = value;

        setOtp(newOtp);

        if (
            value &&
            index < inputRefs.current.length - 1
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

        const paste =
            e.clipboardData
                .getData("text")
                .replace(/\D/g, "")
                .slice(0, 6);

        if (!paste) return;

        const values = paste.split("");

        const newOtp = [...otp];

        values.forEach((digit, index) => {

            newOtp[index] = digit;

        });

        setOtp(newOtp);

    };

    const handleVerify = async (e) => {

        e.preventDefault();

        const code = otp.join("");

        if (code.length !== 6) {

            return toast.error(
                "Please enter the 6-digit OTP."
            );

        }

        try {

            setLoading(true);

            const result =
                await verifyOtp({
                    email,
                    otp: code,
                });

            toast.success(result.message);

            navigate("/reset-password", {
                state: {
                    email,
                },
            });

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Invalid OTP."
            );

        } finally {

            setLoading(false);

        }

    };

    const handleResend = async () => {

        try {

            setResendLoading(true);

            const result =
                await resendOtp({
                    email,
                });

            toast.success(result.message);

            setTimer(60);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to resend OTP."
            );

        } finally {

            setResendLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center p-6">

            <div className="grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-2xl w-full max-w-6xl">

                {/* Left Section */}

                <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white p-14">

                    <div className="h-20 w-20 rounded-3xl bg-white/20 flex items-center justify-center mb-8">

                        <FiShield size={40} />

                    </div>

                    <h1 className="text-5xl font-bold leading-tight">

                        Verify
                        <br />
                        Your Identity

                    </h1>

                    <p className="mt-8 text-green-100 text-lg leading-8">

                        We've sent a secure verification code
                        to your registered email address.
                        Enter the code to continue resetting
                        your password.

                    </p>

                </div>

                {/* Right Section */}

                <div className="p-10 lg:p-14 flex items-center">

                    <div className="w-full">

                        <h2 className="text-4xl font-bold text-gray-800">

                            Verify OTP

                        </h2>

                        <p className="mt-3 text-gray-500">

                            Enter the 6-digit verification code.

                        </p>

                        <div className="mt-6 rounded-2xl bg-green-50 border border-green-100 p-4 flex items-center gap-3">

                            <FiMail
                                className="text-green-600"
                                size={20}
                            />

                            <span className="text-sm font-medium text-gray-700">

                                {email}

                            </span>

                        </div>

                        <form
                            onSubmit={handleVerify}
                            className="mt-10"
                        >
                                                        <div
                                className="flex justify-center gap-4"
                                onPaste={handlePaste}
                            >
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) =>
                                            (inputRefs.current[index] = el)
                                        }
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
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
                                            h-16
                                            w-16
                                            rounded-2xl
                                            border
                                            border-gray-200
                                            text-center
                                            text-2xl
                                            font-bold
                                            outline-none
                                            transition
                                            focus:border-green-500
                                            focus:ring-2
                                            focus:ring-green-500
                                        "
                                    />
                                ))}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                    mt-10
                                    w-full
                                    h-14
                                    rounded-2xl
                                    bg-green-600
                                    hover:bg-green-700
                                    text-white
                                    font-semibold
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    transition
                                    disabled:opacity-70
                                    disabled:cursor-not-allowed
                                "
                            >
                                {loading ? (
                                    "Verifying..."
                                ) : (
                                    <>
                                        Verify OTP
                                        <FiArrowRight size={20} />
                                    </>
                                )}
                            </button>

                        </form>

                        <div className="mt-8 text-center">

                            {timer > 0 ? (

                                <p className="text-gray-500">

                                    Resend OTP in{" "}

                                    <span className="font-bold text-green-600">

                                        {timer}s

                                    </span>

                                </p>

                            ) : (

                                <button
                                    onClick={handleResend}
                                    disabled={resendLoading}
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-green-600
                                        hover:text-green-700
                                        font-semibold
                                        transition
                                        disabled:opacity-70
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
                                        ? "Sending..."
                                        : "Resend OTP"}

                                </button>

                            )}

                        </div>

                        <button
                            onClick={() =>
                                navigate("/forgot-password")
                            }
                            className="
                                mt-8
                                w-full
                                h-12
                                rounded-xl
                                border
                                border-gray-200
                                hover:bg-gray-50
                                font-medium
                                transition
                            "
                        >
                            Back
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default VerifyOtp;