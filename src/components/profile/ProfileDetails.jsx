import {
    CgProfile
} from "react-icons/cg";
import {
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const ProfileDetails = ({ user, onEdit }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-500 h-32 flex items-end justify-center pb-5">

                <div className="h-28 w-28 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">

                    <CgProfile
                        size={80}
                        className="text-green-600"
                    />

                </div>

            </div>

            {/* Body */}
            <div className="p-8">

                <div className="text-center">

                    <h2 className="text-3xl font-bold text-gray-800">
                        {user.name}
                    </h2>

                    <p className="text-gray-500 mt-1">
                        {user.email}
                    </p>

                </div>

                {/* Personal Information */}

                <div className="mt-10">

                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                        Personal Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mt-5">

                        <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium">
                                {user.phone || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Role</p>
                            <p className="font-medium">
                                {user.role}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Address</p>
                            <p className="font-medium">
                                {user.address || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">City</p>
                            <p className="font-medium">
                                {user.city || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">State</p>
                            <p className="font-medium">
                                {user.state || "-"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Country</p>
                            <p className="font-medium">
                                {user.country || "-"}
                            </p>
                        </div>

                    </div>

                </div>

                {/* Social Links */}

                <div className="mt-10">

                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                        Social Profiles
                    </h3>

                    <div className="mt-5 space-y-4">

                        <div className="flex items-center gap-3">

                            <FaLinkedin
                                size={22}
                                className="text-blue-600"
                            />

                            {user.linkedInProfile ? (
                                <a
                                    href={user.linkedInProfile}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-green-600 hover:underline break-all"
                                >
                                    {user.linkedInProfile}
                                </a>
                            ) : (
                                <span className="text-gray-500">
                                    Not Added
                                </span>
                            )}

                        </div>

                        <div className="flex items-center gap-3">

                            <FaTwitter
                                size={22}
                                className="text-sky-500"
                            />

                            {user.twiterProfile ? (
                                <a
                                    href={user.twiterProfile}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-green-600 hover:underline break-all"
                                >
                                    {user.twiterProfile}
                                </a>
                            ) : (
                                <span className="text-gray-500">
                                    Not Added
                                </span>
                            )}

                        </div>

                    </div>

                </div>

                {/* Account Details */}

                <div className="mt-10">

                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                        Account Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 mt-5">

                        <div>
                            <p className="text-sm text-gray-500">
                                Joined On
                            </p>

                            <p className="font-medium">
                                {new Date(user.createdAt).toLocaleDateString()}
                            </p>

                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Last Updated
                            </p>

                            <p className="font-medium">
                                {new Date(user.updatedAt).toLocaleDateString()}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Edit Button */}

                <button
                    onClick={onEdit}
                    className="mt-10 w-full md:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition"
                >
                    <FiEdit />
                    Edit Profile
                </button>

            </div>

        </div>
    );
};

export default ProfileDetails;