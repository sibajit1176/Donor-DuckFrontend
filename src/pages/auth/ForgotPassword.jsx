import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FiMail,
    FiArrowRight,
    FiArrowLeft,
    FiShield,
    FiLock,
    FiCheckCircle,
} from "react-icons/fi";

import { toast } from "react-toastify";
import { forgotPassword } from "../../services/auth.service";

const ForgotPassword = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);

   const handleSubmit = async (e) => {

    e.preventDefault();

    if (!email.trim()) {

        return toast.error("Email is required.");

    }

    try {

        setLoading(true);

        const result = await forgotPassword(email);

        toast.success(
            result.message || "OTP sent successfully."
        );

        navigate("/verify-otp", {
            state: {
                email,
            },
        });

    } catch (error) {

        toast.error(
            error.response?.data?.message ||
            "Failed to send OTP."
        );

    } finally {

        setLoading(false);

    }

};

    return (

   <div className="h-[710px] bg-gradient-to-br from-green-50 via-white to-emerald-50 flex ">

    {/* LEFT PANEL */}

    <div className="hidden lg:flex w-[42%] relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700">

        {/* Background */}

        <div className="absolute inset-0">

            <div className="absolute h-56 w-56 rounded-full bg-white/10 -top-20 -left-16" />

            <div className="absolute h-72 w-72 rounded-full bg-white/5 -bottom-16 -right-20" />

            <div className="absolute h-36 w-36 rounded-full bg-white/10 top-1/2 left-10" />

        </div>

        <div className="relative z-10 flex flex-col justify-center px-12 py-8 text-white">

            <div className="h-16 w-16 rounded-2xl bg-white/15 backdrop-blur-lg flex items-center justify-center shadow-xl">

                <FiShield size={34} />

            </div>

            <h1 className="text-3xl font-extrabold leading-tight mt-6">

                Forgot
                <br />
                Password?

            </h1>

            <p className="mt-4 text-green-100 text-sm leading-7 max-w-sm">

                Reset your password securely using your registered
                email address. We'll send you a verification code
                to continue.

            </p>

            <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">

                    <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center">

                        <FiMail size={18} />

                    </div>

                    <div>

                        <h4 className="font-semibold text-sm">

                            Email Verification

                        </h4>

                        <p className="text-xs text-green-100">

                            Verify your registered email

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center">

                        <FiLock size={18} />

                    </div>

                    <div>

                        <h4 className="font-semibold text-sm">

                            Secure OTP

                        </h4>

                        <p className="text-xs text-green-100">

                            6-digit verification code

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center">

                        <FiCheckCircle size={18} />

                    </div>

                    <div>

                        <h4 className="font-semibold text-sm">

                            Reset Password

                        </h4>

                        <p className="text-xs text-green-100">

                            Access your account again

                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>

    {/* RIGHT PANEL */}

    <div className="flex-1 flex items-center justify-center px-6 py-6">

        <div className="w-full max-w-md">

            <div className="bg-white rounded-[24px] shadow-2xl border border-gray-100 p-6">

                <button
                    onClick={() => navigate("/login")}
                    className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition text-sm"
                >

                    <FiArrowLeft />

                    Back to Login

                </button>

                <div className="mt-5 text-center">

                    <div className="mx-auto h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center">

                        <FiMail
                            className="text-green-600"
                            size={26}
                        />

                    </div>

                    <h2 className="text-2xl font-bold mt-4">

                        Forgot Password

                    </h2>

                    <p className="mt-2 text-sm text-gray-500 leading-6">

                        Enter your registered email to receive
                        a secure verification code.

                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-5"
                >

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">

                            Email Address

                        </label>

                        <div className="relative">

                            <FiMail
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                size={18}
                            />

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="Enter your email"
                                className="
                                    w-full
                                    h-11
                                    rounded-xl
                                    border
                                    border-gray-200
                                    pl-11
                                    pr-4
                                    text-sm
                                    outline-none
                                    focus:ring-4
                                    focus:ring-green-100
                                    focus:border-green-500
                                "
                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full
                            h-11
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
                            hover:from-green-700
                            hover:to-emerald-700
                            transition
                        "
                       
                    >

                        {loading ? (
                            <>
                                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Sending OTP...
                            </>
                        ) : (
                            <>
                                Send OTP
                                <FiArrowRight />
                            </>
                        )}

                    </button>
                    

                </form>
                                {/* Divider */}

               {/* Recovery Card */}

<div className="mt-5 rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-4">

    <div className="flex items-center justify-between mb-4">

        <h3 className="text-sm font-bold text-gray-800">

            Password Recovery

        </h3>

        <span className="text-[10px] font-semibold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-1 rounded-full">

            3 Steps

        </span>

    </div>

    <div className="space-y-3">

        {/* Step 1 */}

        <div className="flex items-center gap-3">

            <div className="flex flex-col items-center">

                <div className="h-7 w-7 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold">

                    1

                </div>

                <div className="w-[2px] h-6 bg-green-200 mt-1" />

            </div>

            <div className="pb-2">

                <h4 className="text-sm font-semibold text-gray-800">

                    Enter Email

                </h4>

                <p className="text-xs text-gray-500">

                    Provide your registered email.

                </p>

            </div>

        </div>

        {/* Step 2 */}

        <div className="flex items-center gap-3">

            <div className="flex flex-col items-center">

                <div className="h-7 w-7 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold">

                    2

                </div>

                <div className="w-[2px] h-6 bg-green-200 mt-1" />

            </div>

            <div className="pb-2">

                <h4 className="text-sm font-semibold text-gray-800">

                    Verify OTP

                </h4>

                <p className="text-xs text-gray-500">

                    Enter the 6-digit code.

                </p>

            </div>

        </div>

        {/* Step 3 */}

        <div className="flex items-center gap-3">

            <div className="h-7 w-7 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold shrink-0">

                3

            </div>

            <div>

                <h4 className="text-sm font-semibold text-gray-800">

                    Create Password

                </h4>

                <p className="text-xs text-gray-500">

                    Set a new password and sign in.

                </p>

            </div>

        </div>

    </div>

</div>

{/* Bottom */}

<div className="mt-4 text-center">

    <p className="text-xs text-gray-500">

        Remember your password?

        <button
            type="button"
            onClick={() => navigate("/login")}
            className="ml-1 font-semibold text-green-600 hover:text-green-700 transition"
        >

            Login

        </button>

    </p>

</div>

            </div>

        </div>

    </div>

</div>
                

    );

};

export default ForgotPassword;