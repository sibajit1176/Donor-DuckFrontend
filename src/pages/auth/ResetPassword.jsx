
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    FiLock,
    FiEye,
    FiEyeOff,
    FiCheckCircle,
} from "react-icons/fi";
import { toast } from "react-toastify";

import { resetPassword } from "../../services/auth.service";

const ResetPassword = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const email = location.state?.email || "";

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!formData.password.trim()) {

            return toast.error("Password is required.");

        }

        if (formData.password.length < 8) {

            return toast.error(
                "Password must be at least 8 characters."
            );

        }

        if (
            formData.password !==
            formData.confirmPassword
        ) {

            return toast.error(
                "Passwords do not match."
            );

        }

        try {

            setLoading(true);

            const result =
                await resetPassword({
                    email,
                    password: formData.password,
                });

            toast.success(result.message);

            navigate("/login");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                    "Failed to reset password."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center p-6">

            <div className="grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-2xl w-full max-w-6xl">

                {/* Left Side */}

                <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white p-14">

                    <div className="h-20 w-20 rounded-3xl bg-white/20 flex items-center justify-center mb-8">

                        <FiCheckCircle size={42} />

                    </div>

                    <h1 className="text-5xl font-bold leading-tight">

                        Create
                        <br />
                        New Password

                    </h1>

                    <p className="mt-8 text-green-100 text-lg leading-8">

                        Choose a strong password that you haven't
                        used before. Make sure it contains letters,
                        numbers and special characters for maximum
                        security.

                    </p>

                </div>

                {/* Right Side */}

                <div className="p-10 lg:p-14 flex items-center">

                    <div className="w-full">

                        <h2 className="text-4xl font-bold text-gray-800">

                            Reset Password

                        </h2>

                        <p className="mt-3 text-gray-500">

                            Enter your new password below.

                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 mt-10"
                        >

                            {/* Password */}

                            <div>

                                <label className="block font-semibold mb-2 text-gray-700">

                                    New Password

                                </label>

                                <div className="relative">

                                    <FiLock
                                        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />

                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="password"
                                        value={
                                            formData.password
                                        }
                                        onChange={handleChange}
                                        placeholder="Enter new password"
                                        className="
                                            w-full
                                            h-14
                                            rounded-2xl
                                            border
                                            border-gray-200
                                            pl-14
                                            pr-14
                                            outline-none
                                            focus:ring-2
                                            focus:ring-green-500
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                                    >
                                        {showPassword ? (
                                            <FiEyeOff />
                                        ) : (
                                            <FiEye />
                                        )}
                                    </button>

                                </div>

                            </div>

                            {/* Confirm Password */}

                            <div>

                                <label className="block font-semibold mb-2 text-gray-700">

                                    Confirm Password

                                </label>

                                <div className="relative">

                                    <FiLock
                                        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />

                                    <input
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm new password"
                                        className="
                                            w-full
                                            h-14
                                            rounded-2xl
                                            border
                                            border-gray-200
                                            pl-14
                                            pr-14
                                            outline-none
                                            transition
                                            focus:ring-2
                                            focus:ring-green-500
                                            focus:border-green-500
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                        className="
                                            absolute
                                            right-5
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-500
                                            hover:text-green-600
                                        "
                                    >

                                        {showConfirmPassword ? (
                                            <FiEyeOff size={20} />
                                        ) : (
                                            <FiEye size={20} />
                                        )}

                                    </button>

                                </div>

                            </div>

                            {/* Password Tips */}

                            <div className="rounded-2xl bg-green-50 border border-green-100 p-5">

                                <h4 className="font-semibold text-green-700 mb-3">

                                    Password Requirements

                                </h4>

                                <ul className="space-y-2 text-sm text-gray-600">

                                    <li className="flex items-center gap-2">
                                        <FiCheckCircle className="text-green-600" />
                                        Minimum 8 characters
                                    </li>

                                    <li className="flex items-center gap-2">
                                        <FiCheckCircle className="text-green-600" />
                                        At least one uppercase letter
                                    </li>

                                    <li className="flex items-center gap-2">
                                        <FiCheckCircle className="text-green-600" />
                                        At least one number
                                    </li>

                                    <li className="flex items-center gap-2">
                                        <FiCheckCircle className="text-green-600" />
                                        At least one special character
                                    </li>

                                </ul>

                            </div>

                            {/* Submit Button */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="
                                    w-full
                                    h-14
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-green-600
                                    to-emerald-600
                                    text-white
                                    font-semibold
                                    text-lg
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    hover:scale-[1.02]
                                    hover:shadow-xl
                                    disabled:opacity-70
                                    disabled:cursor-not-allowed
                                "
                            >

                                {loading
                                    ? "Updating Password..."
                                    : "Reset Password"}

                            </button>

                        </form>

                        {/* Back to Login */}

                        <div className="text-center mt-8">

                            <button
                                onClick={() => navigate("/login")}
                                className="
                                    text-green-600
                                    font-semibold
                                    hover:text-green-700
                                    transition
                                "
                            >

                                ← Back to Login

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ResetPassword;