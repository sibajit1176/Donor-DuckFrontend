import { useState } from "react";
import {
    FiMail,
    FiShield,
    FiKey,
} from "react-icons/fi";
import { sentOtp, verifyOtp } from "../services/admin.service";
import { toast } from "react-toastify";

const AdminPermissionPage = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

   const handleSendOtp = async () => {
    try {
        const result = await sentOtp(email);

        toast.success(result.message);

        setOtpSent(true);

    } catch (error) {
        toast.error(
            error.response?.data?.message ||
            "Failed to send OTP."
        );
    }
};

const handleVerify = async () => {
    try {
        const payload = {
            email,
            otp,
        };

        const result = await verifyOtp(payload);

        toast.success(result.message);

    } catch (error) {
        toast.error(
            error.response?.data?.message ||
            "OTP verification failed."
        );
    }
};

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
            <div className="w-full max-w-lg rounded-3xl bg-white shadow-xl border border-gray-100 p-8">

                <div className="flex justify-center">
                    <div className="h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center">
                        <FiShield
                            size={30}
                            className="text-green-600"
                        />
                    </div>
                </div>

                <h2 className="mt-6 text-center text-3xl font-bold text-gray-800">
                    Grant Admin Permission
                </h2>

                <p className="mt-2 text-center text-gray-500">
                    Verify the user's email before granting administrator access.
                </p>

                <div className="mt-8 space-y-6">

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Email Address
                        </label>

                        <div className="relative">
                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="Enter user email"
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-gray-300
                                    py-3
                                    pl-12
                                    pr-4
                                    outline-none
                                    focus:border-green-500
                                "
                            />
                        </div>
                    </div>

                    {!otpSent ? (
                        <button
                            onClick={handleSendOtp}
                            className="
                                w-full
                                rounded-xl
                                bg-green-600
                                py-3
                                font-semibold
                                text-white
                                hover:bg-green-700
                            "
                        >
                            Send OTP
                        </button>
                    ) : (
                        <>
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    OTP
                                </label>

                                <div className="relative">
                                    <FiKey className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        value={otp}
                                        onChange={(e) =>
                                            setOtp(e.target.value)
                                        }
                                        maxLength={6}
                                        placeholder="Enter 6 digit OTP"
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-300
                                            py-3
                                            pl-12
                                            pr-4
                                            tracking-[0.4em]
                                            outline-none
                                            focus:border-green-500
                                        "
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleVerify}
                                className="
                                    w-full
                                    rounded-xl
                                    bg-green-600
                                    py-3
                                    font-semibold
                                    text-white
                                    hover:bg-green-700
                                "
                            >
                                Verify & Grant Admin Access
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPermissionPage;