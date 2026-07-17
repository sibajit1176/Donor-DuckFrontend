import { useState } from "react";

import {
    FiX,
    FiLock,
    FiEye,
    FiEyeOff,
} from "react-icons/fi";

const ChangePasswordModal = ({
    open,
    onClose,
    onSubmit,
    loading,
    onForgotPassword,
}) => {

    const [form, setForm] = useState({

        currentPassword: "",

        newPassword: "",

        confirmPassword: "",

    });

    const [show, setShow] = useState({

        current: false,

        new: false,

        confirm: false,

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = () => {

        if (
            !form.currentPassword ||
            !form.newPassword ||
            !form.confirmPassword
        ) {

            return;

        }

        onSubmit(form);

    };

    if (!open) return null;

    return (

        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

            <div className="w-full max-w-md rounded-2xl overflow-hidden bg-white shadow-2xl">

                {/* Header */}

                <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-5 text-white">

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 h-9 w-9 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center"
                    >
                        <FiX />
                    </button>

                    <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">

                        <FiLock size={22} />

                    </div>

                    <h2 className="mt-4 text-2xl font-bold">

                        Change Password

                    </h2>

                    <p className="mt-1 text-sm text-green-100">

                        Update your account password securely.

                    </p>

                </div>

                {/* Body */}

                <div className="p-6 space-y-5">

                    {/* Current Password */}

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">

                            Current Password

                        </label>

                        <div className="relative">

                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                name="currentPassword"
                                type={
                                    show.current
                                        ? "text"
                                        : "password"
                                }
                                value={form.currentPassword}
                                onChange={handleChange}
                                placeholder="Current password"
                                className="w-full h-11 rounded-xl border border-gray-200 pl-11 pr-11 outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShow({
                                        ...show,
                                        current:
                                            !show.current,
                                    })
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {show.current ? (
                                    <FiEyeOff />
                                ) : (
                                    <FiEye />
                                )}
                            </button>

                        </div>

                    </div>

                    {/* New Password */}

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">

                            New Password

                        </label>

                        <div className="relative">

                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                name="newPassword"
                                type={
                                    show.new
                                        ? "text"
                                        : "password"
                                }
                                value={form.newPassword}
                                onChange={handleChange}
                                placeholder="New password"
                                className="w-full h-11 rounded-xl border border-gray-200 pl-11 pr-11 outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShow({
                                        ...show,
                                        new: !show.new,
                                    })
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {show.new ? (
                                    <FiEyeOff />
                                ) : (
                                    <FiEye />
                                )}
                            </button>

                        </div>

                    </div>
                                        {/* Confirm Password */}

                    <div>

                        <div className="flex items-center justify-between mb-2">

                            <label className="block text-sm font-semibold text-gray-700">

                                Confirm Password

                            </label>

                            <button
                                type="button"
                                onClick={onForgotPassword}
                                className="text-xs font-medium text-green-600 hover:text-green-700"
                            >
                                Forgot Password?
                            </button>

                        </div>

                        <div className="relative">

                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                            <input
                                name="confirmPassword"
                                type={
                                    show.confirm
                                        ? "text"
                                        : "password"
                                }
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm password"
                                className="w-full h-11 rounded-xl border border-gray-200 pl-11 pr-11 outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShow({
                                        ...show,
                                        confirm: !show.confirm,
                                    })
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {show.confirm ? (
                                    <FiEyeOff />
                                ) : (
                                    <FiEye />
                                )}
                            </button>

                        </div>

                        {form.confirmPassword &&
                            form.newPassword !== form.confirmPassword && (

                                <p className="mt-2 text-xs text-red-500">

                                    Passwords do not match.

                                </p>

                            )}

                    </div>

                    {/* Footer Buttons */}

                    <div className="flex gap-3 pt-2">

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                flex-1
                                h-11
                                rounded-xl
                                border
                                border-gray-300
                                hover:bg-gray-50
                                font-medium
                                transition
                            "
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={
                                loading ||
                                form.newPassword !==
                                    form.confirmPassword
                            }
                            className={`
                                flex-1
                                h-11
                                rounded-xl
                                bg-gradient-to-r
                                from-green-600
                                to-emerald-600
                                text-white
                                font-semibold
                                transition

                                ${
                                    loading ||
                                    form.newPassword !==
                                        form.confirmPassword
                                        ? "opacity-60 cursor-not-allowed"
                                        : "hover:from-green-700 hover:to-emerald-700"
                                }
                            `}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-2">

                                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />

                                    Updating...

                                </div>
                            ) : (
                                "Update Password"
                            )}
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ChangePasswordModal;