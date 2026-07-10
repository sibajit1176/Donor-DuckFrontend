import {
    CgProfile,
} from "react-icons/cg";

import {
    FiEdit2,
    FiCopy,
    FiLock,
    FiCheckCircle,
    FiCamera,
} from "react-icons/fi";

import { toast } from "react-toastify";

const ProfileHeader = ({ user,onEdit }) => {

    const copyEmail = () => {
        navigator.clipboard.writeText(user.email);
        toast.success("Email copied successfully");
    };

    return (

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

            {/* Banner */}

            <div className="relative h-28 bg-gradient-to-r from-green-600 via-emerald-500 to-green-500">

                {/* Decorative circles */}

                <div className="absolute -top-8 -left-8 h-28 w-32 rounded-full bg-white/10"></div>

                <div className="absolute right-10 top-6 h-24 w-24 rounded-full bg-white/10"></div>

            </div>

            {/* Body */}

            <div className="relative px-8 pb-8">

                {/* Profile Image */}

                <div className="absolute -top-16 left-8">

                    <div className="relative">

                        <div className="h-32 w-32 rounded-full bg-white border-[6px] border-white shadow-xl overflow-hidden flex items-center justify-center">

                            {user.profileImage ? (

                                <img
                                    src={user.profileImage}
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />

                            ) : (

                                <CgProfile
                                    size={90}
                                    className="text-green-600"
                                />

                            )}

                        </div>

                        {/* Upload */}

                        <button
                            className="absolute bottom-1 right-1 h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition shadow-lg"
                        >
                            <FiCamera size={18} />
                        </button>

                    </div>

                </div>

                {/* Right Side */}

                <div className="pt-20 flex flex-col lg:flex-row justify-between lg:items-center gap-8">

                    {/* User Details */}

                    <div>

                        <div className="flex items-center gap-3 flex-wrap">

                            <h1 className="text-3xl font-bold text-gray-800">

                                {user.name}

                            </h1>

                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold uppercase">

                                {user.role}

                            </span>

                        </div>

                        <p className="text-gray-500 mt-2">

                            {user.email}

                        </p>

                        <p className="text-sm text-gray-400 mt-1">

                            Member since{" "}
                            {new Date(user.createdAt).toLocaleDateString()}

                        </p>

                    </div>

                    {/* Actions */}

                    <div className="flex flex-wrap gap-3">

                        <button
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white transition"
                         onClick={onEdit}
                        >
                            <FiEdit2 />
                            Edit Profile
                        </button>

                        {!user.isVerified && (

                            <button
                                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-gray-900 transition"
                            >
                                <FiCheckCircle />
                                Verify Email
                            </button>

                        )}

                        <button
                            onClick={copyEmail}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
                        >
                            <FiCopy />
                            Copy Email
                        </button>

                        <button
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
                        >
                            <FiLock />
                            Change Password
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ProfileHeader;