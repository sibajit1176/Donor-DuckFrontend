import { useEffect, useState } from "react";

import {
    FiX,
    FiUser,
    FiMail,
    FiPhone,
    FiMapPin,
    FiGlobe,
    FiLinkedin,
} from "react-icons/fi";

import { FaXTwitter } from "react-icons/fa6";

import { toast } from "react-toastify";

import { editProfileDetails } from "../../services/auth.service";

const EditProfileModal = ({
    isOpen,
    onClose,
    user,
    setUser,
}) => {

    const [formData, setFormData] = useState({});

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (user) {

            setFormData(user);

        }

    }, [user]);

    if (!isOpen) return null;

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!formData.name) {

            toast.error("Enter name");

            return;

        }

        if (!formData.email) {

            toast.error("Enter email");

            return;

        }

        try {

            setLoading(true);

            const result =
                await editProfileDetails(formData);

            toast.success(result.message);

            setUser(result.updatedData);

            onClose();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Profile update failed."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

            <div className="w-full max-w-4xl rounded-3xl overflow-hidden bg-white shadow-2xl">

                {/* Header */}

                <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-8 py-6 text-white">

                    <button
                        onClick={onClose}
                        className="
                            absolute
                            right-5
                            top-5
                            h-10
                            w-10
                            rounded-xl
                            bg-white/20
                            hover:bg-white/30
                            transition
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <FiX size={20} />

                    </button>

                    <h2 className="text-3xl font-bold">

                        Edit Profile

                    </h2>

                    <p className="mt-2 text-green-100">

                        Update your personal information.

                    </p>

                </div>

                {/* Body */}

                <form onSubmit={handleSubmit}>

                    <div
                        className="
                            max-h-[60vh]
                            overflow-y-auto
                            scrollbar-hide
                            p-8
                        "
                    >

                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Name */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-gray-700">

                                    Full Name

                                </label>

                                <div className="relative">

                                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        name="name"
                                        value={formData.name || ""}
                                        onChange={handleChange}
                                        placeholder="Enter full name"
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-200
                                            pl-11
                                            pr-4
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-4
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                            </div>

                            {/* Email */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-gray-700">

                                    Email

                                </label>

                                <div className="relative">

                                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        name="email"
                                        value={formData.email || ""}
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-200
                                            pl-11
                                            pr-4
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-4
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                            </div>

                            {/* Phone */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-gray-700">

                                    Phone

                                </label>

                                <div className="relative">

                                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        name="phone"
                                        value={formData.phone || ""}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-200
                                            pl-11
                                            pr-4
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-4
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                            </div>

                            {/* Address */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-gray-700">

                                    Address

                                </label>

                                <div className="relative">

                                    <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        name="address"
                                        value={formData.address || ""}
                                        onChange={handleChange}
                                        placeholder="Enter address"
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-200
                                            pl-11
                                            pr-4
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-4
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                            </div>
                                                        {/* City */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-gray-700">

                                    City

                                </label>

                                <div className="relative">

                                    <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        name="city"
                                        value={formData.city || ""}
                                        onChange={handleChange}
                                        placeholder="Enter city"
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-200
                                            pl-11
                                            pr-4
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-4
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                            </div>

                            {/* State */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-gray-700">

                                    State

                                </label>

                                <div className="relative">

                                    <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        name="state"
                                        value={formData.state || ""}
                                        onChange={handleChange}
                                        placeholder="Enter state"
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-200
                                            pl-11
                                            pr-4
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-4
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                            </div>

                            {/* Country */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-gray-700">

                                    Country

                                </label>

                                <div className="relative">

                                    <FiGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        name="country"
                                        value={formData.country || ""}
                                        onChange={handleChange}
                                        placeholder="Enter country"
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-200
                                            pl-11
                                            pr-4
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-4
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                            </div>

                            {/* LinkedIn */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-gray-700">

                                    LinkedIn Profile

                                </label>

                                <div className="relative">

                                    <FiLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        name="linkedInProfile"
                                        value={formData.linkedInProfile || ""}
                                        onChange={handleChange}
                                        placeholder="https://linkedin.com/in/..."
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-200
                                            pl-11
                                            pr-4
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-4
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                            </div>

                            {/* Twitter */}

                            <div className="md:col-span-2">

                                <label className="mb-2 block text-sm font-semibold text-gray-700">

                                    X (Twitter)

                                </label>

                                <div className="relative">

                                    <FaXTwitter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        name="twiterProfile"
                                        value={formData.twiterProfile || ""}
                                        onChange={handleChange}
                                        placeholder="https://x.com/username"
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-200
                                            pl-11
                                            pr-4
                                            outline-none
                                            focus:border-green-500
                                            focus:ring-4
                                            focus:ring-green-100
                                        "
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Footer */}

                    <div
                        className="
                            flex
                            items-center
                            justify-end
                            gap-4
                            border-t
                            bg-gray-50
                            px-8
                            py-5
                        "
                    >

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                rounded-xl
                                border
                                border-gray-300
                                px-6
                                py-3
                                font-medium
                                text-gray-700
                                transition
                                hover:bg-gray-100
                            "
                        >

                            Cancel

                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                rounded-xl
                                bg-gradient-to-r
                                from-green-600
                                to-emerald-600
                                px-8
                                py-3
                                font-semibold
                                text-white
                                shadow-lg
                                transition
                                hover:from-green-700
                                hover:to-emerald-700
                                disabled:cursor-not-allowed
                                disabled:opacity-70
                            "
                        >

                            {loading
                                ? "Saving..."
                                : "Save Changes"}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

};

export default EditProfileModal;