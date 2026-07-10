import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiEdit2, FiLogOut, FiMail } from "react-icons/fi";
import { jwtDecode } from "jwt-decode";

const ProfileModal = ({
    isOpen,
    onClose,
    onLogout,
}) => {

    const navigate = useNavigate();
    const storageData = localStorage.getItem("accessToken");

    const userDetails = storageData ? jwtDecode(storageData) : null;

    if (!isOpen) return null;

    const handleEditProfile = () => {
        onClose();
        navigate("/Profile");
    };

    const handleLogout = () => {
        onClose();
        onLogout();
    };

    return (
        <div className="absolute right-0 top-14 w-64 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden z-50">

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-2 right-2 h-7 w-7 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
            >
                ✕
            </button>

            {/* Header */}
            <div className="h-14 bg-gradient-to-r from-green-600 to-emerald-500"></div>

            {/* Body */}
            <div className="-mt-8 px-5 pb-5">

                {/* Profile */}
                <div className="flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-white border-4 border-white shadow flex items-center justify-center">
                        <CgProfile
                            size={42}
                            className="text-green-600"
                        />
                    </div>
                </div>

                {/* User Details */}
                <div className="text-center mt-3">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {userDetails?.name || "Guest User"}
                    </h2>

                    <div className="flex items-center justify-center gap-2 mt-1 text-gray-500">
                        <FiMail size={14} />
                        <span className="text-xs truncate">
                            {userDetails?.email}
                        </span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-5 space-y-2">

                    <button
                        onClick={handleEditProfile}
                        className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition"
                    >
                        <FiEdit2 size={15} />
                        Visit Your Profile
                    </button>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-sm font-medium transition"
                    >
                        <FiLogOut size={15} />
                        Logout
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ProfileModal;