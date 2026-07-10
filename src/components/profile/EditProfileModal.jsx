import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
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

        setLoading(true);
        if (!formData.name) {
            toast("Enter Name")
            return
        }
        if (!formData.email) {
            toast("Enter Email")
            return
        }

        try {

            const result = await editProfileDetails(formData);

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

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-3xl w-full max-w-3xl p-8 relative">

                <button
                    onClick={onClose}
                    className="absolute right-5 top-5"
                >
                    <FiX size={24} />
                </button>

                <h2 className="text-2xl font-bold mb-8">
                    Edit Profile
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="grid md:grid-cols-2 gap-5"
                >

                    <input
                        name="name"
                        value={formData.name || ""}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="border rounded-xl p-3"
                    />

                    <input
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        placeholder="Email"
                        className="border rounded-xl p-3"
                    />

                    <input
                        name="phone"
                        value={formData.phone || ""}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="border rounded-xl p-3"
                    />

                    <input
                        name="address"
                        value={formData.address || ""}
                        onChange={handleChange}
                        placeholder="Address"
                        className="border rounded-xl p-3"
                    />

                    <input
                        name="city"
                        value={formData.city || ""}
                        onChange={handleChange}
                        placeholder="City"
                        className="border rounded-xl p-3"
                    />

                    <input
                        name="state"
                        value={formData.state || ""}
                        onChange={handleChange}
                        placeholder="State"
                        className="border rounded-xl p-3"
                    />

                    <input
                        name="country"
                        value={formData.country || ""}
                        onChange={handleChange}
                        placeholder="Country"
                        className="border rounded-xl p-3"
                    />

                    <input
                        name="linkedInProfile"
                        value={formData.linkedInProfile || ""}
                        onChange={handleChange}
                        placeholder="LinkedIn"
                        className="border rounded-xl p-3"
                    />

                    <input
                        name="twiterProfile"
                        value={formData.twiterProfile || ""}
                        onChange={handleChange}
                        placeholder="Twitter"
                        className="border rounded-xl p-3"
                    />

                    <div className="md:col-span-2 flex justify-end gap-4 mt-5">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 rounded-xl border"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700"
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